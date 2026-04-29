import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { AstroIntegration } from 'astro';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';

async function collectHtmlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectHtmlFiles(fullPath)));
    } else if (entry.name === 'index.html') {
      files.push(fullPath);
    }
  }

  return files;
}

async function htmlToMarkdown(html: string): Promise<string> {
  const result = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkGfm)
    .use(remarkStringify)
    .process(html);

  return String(result);
}

export function markdownForAgents(): AstroIntegration {
  return {
    name: 'markdown-for-agents',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const distDir = fileURLToPath(dir);
        const htmlFiles = await collectHtmlFiles(distDir);

        logger.info(
          `Generating markdown files for ${htmlFiles.length} pages...`
        );

        await Promise.all(
          htmlFiles.map(async (htmlFile) => {
            try {
              const html = await readFile(htmlFile, 'utf-8');
              const markdown = await htmlToMarkdown(html);

              // dist/fr/blog/index.html → dist/fr/blog.md
              const mdPath = htmlFile.replace(/\/index\.html$/, '.md');

              // Skip root index.html (becomes .md which overwrites nothing)
              if (mdPath === htmlFile) return;

              await writeFile(mdPath, markdown, 'utf-8');
            } catch (error) {
              logger.warn(
                `Failed to generate markdown for ${relative(distDir, htmlFile)}: ${error}`
              );
            }
          })
        );

        logger.info('Markdown files generated.');
      },
    },
  };
}
