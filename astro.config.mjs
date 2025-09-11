// @ts-check

import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import bearstudioTypedRoutes from '@bearstudio/astro-typed-routes';
import tailwindcss from '@tailwindcss/vite';

// Relative import is required
import { getSiteUrl } from './src/lib/site/get-site-url';

// https://astro.build/config
export default defineConfig({
  site: getSiteUrl(),
  trailingSlash: 'never',
  redirects: {
    '/': '/blog',
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
  integrations: [mdx(), sitemap(), react(), bearstudioTypedRoutes()],

  vite: {
    plugins: [tailwindcss()],
  },
});
