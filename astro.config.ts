// @ts-check

import robotsTxt from 'astro-robots-txt';
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import bearstudioTypedRoutes from '@bearstudio/astro-typed-routes';
import tailwindcss from '@tailwindcss/vite';

// Relative import is required
import { defaultLocale, locales } from './src/i18n';
import { getSiteUrl } from './src/lib/site/get-site-url';

const adapter =
  process.argv[3] === '--node' ||
  process.argv[4] === '--node' ||
  import.meta.env.DEV
    ? node({ mode: 'standalone' })
    : vercel({
        isr: {
          // TODO: Revert — exclude actions from ISR due to @astrojs/vercel bug:
          // ISR entrypoint reconstructs POST body without `duplex: 'half'`, causing a TypeError.
          // Excluding actions from ISR lets them go directly to the serverless function.
          // Remove this once the bug is fixed in Astro/Vercel adapter.
          exclude: [/^\/_actions\/.*/],
        },
      });

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),
  trailingSlash: 'never',

  redirects: {
    '/': '/fr',
  },

  i18n: {
    locales: locales as unknown as Array<string>,
    defaultLocale,
    routing: 'manual',
  },

  env: {
    schema: {
      ENV_NAME: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
      }),
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const path = url.pathname;

        // Exclude styleguide page
        if (path === '/styleguide') return false;

        // Exclude paginated pages (e.g. /fr/blog/2, /en/blog/authors/john/3)
        const paginationPatterns = [
          /^\/(fr|en)\/blog\/\d+$/,
          /^\/(fr|en)\/blog\/auteurs\/[^/]+\/\d+$/,
          /^\/(fr|en)\/blog\/authors\/[^/]+\/\d+$/,
        ];

        return !paginationPatterns.some((pattern) => pattern.test(path));
      },
    }),
    react(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/styleguide'],
        },
      ],
    }),
    bearstudioTypedRoutes(),
  ],

  vite: {
    optimizeDeps: {
      exclude: [
        '@takumi-rs/image-response',
        '@takumi-rs/core',
        '@takumi-rs/helpers',
      ],
    },
    ssr: {
      noExternal: [
        '@takumi-rs/image-response',
        '@takumi-rs/core',
        '@takumi-rs/helpers',
        '@bearstudio/astro-assets-generation',
      ],
    },
    plugins: [tailwindcss()],
  },

  adapter,
});
