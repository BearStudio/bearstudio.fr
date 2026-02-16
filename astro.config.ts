// @ts-check

import robotsTxt from 'astro-robots-txt';
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import bearstudioTypedRoutes from '@bearstudio/astro-typed-routes';
import tailwindcss from '@tailwindcss/vite';

// Relative import is required
import { defaultLocale, locales } from './src/i18n';
import { getSiteUrl } from './src/lib/site/get-site-url';

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
    plugins: [tailwindcss()],
  },
});
