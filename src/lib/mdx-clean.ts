import { toText } from 'hast-util-to-text';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Node, Parent } from 'unist';
import { SKIP, visit } from 'unist-util-visit';

export const mdxToPlainText = async (mdx: string) => {
  const processor = unified().use(remarkParse).use(remarkMdx).use(remarkGfm);

  const mdast = processor.parse(mdx);

  stripJsx(mdast);

  const hast = await unified().use(remarkRehype).run(mdast);

  const text = toText(hast);

  return { text, mdast, hast };
};

export const stripJsx = (ast: Node) => {
  visit(
    ast,
    [
      'mdxJsxFlowElement',
      'mdxJsxTextElement',
      'mdxjsEsm',
      'mdxFlowExpression',
      'mdxTextExpression',
    ],
    (node, index, parent) => {
      if (!parent) {
        return;
      }

      const parentNode = parent as Parent;
      const nodeChildren = (node as Parent).children || [];

      // Replace jsx node with its children (if any),
      // if not-just remove the node.
      parentNode.children.splice(index ?? 0, 1, ...nodeChildren);
      return [SKIP, index];
    }
  );
};
