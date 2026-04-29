import { routes, type VercelConfig } from '@vercel/config/v1';

import { articles, categories, members, pages } from './redirects';

export const config: VercelConfig = {
  rewrites: [
    routes.rewrite('/(.*)', '/$1.md', {
      has: [
        {
          type: 'header',
          key: 'accept',
          value: '(?:.*,\\s*)?text/markdown(?:[\\s,;].*)?|text/markdown',
        },
      ],
    }),
  ],
  redirects: [
    routes.redirect('/', '/fr', { permanent: true }),
    ...[...categories, ...pages, ...members, ...articles].map((category) =>
      routes.redirect(category.source, category.destination, {
        statusCode: category.statusCode,
      })
    ),
  ],
  headers: [
    routes.header('/(.*)\\.md', [
      { key: 'Content-Type', value: 'text/markdown; charset=utf-8' },
    ]),
    routes.header('/(.*)', [{ key: 'X-Robots-Tag', value: 'noindex' }], {
      has: [{ type: 'host', value: 'bearstudio-site-2026.vercel.app' }],
    }),
    routes.header('/(.*)', [
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
    ]),
  ],
};
