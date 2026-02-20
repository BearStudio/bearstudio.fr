import { routes, type VercelConfig } from '@vercel/config/v1';

import { articles, categories, members, pages } from './redirects';

export const config: VercelConfig = {
  redirects: [
    routes.redirect('/', '/fr', { permanent: true }),
    ...[...categories, ...pages, ...members, ...articles].map((category) =>
      routes.redirect(category.source, category.destination, {
        statusCode: category.statusCode,
      })
    ),
  ],
  headers: [
    routes.header('/(.*)', [{ key: 'X-Robots-Tag', value: 'noindex' }], {
      has: [{ type: 'host', value: 'bearstudio-site-2026.vercel.app' }],
    }),
    routes.header('/(.*)', [
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self'",
          'frame-src https://webforms.pipedrive.com https://www.google.com https://www.youtube-nocookie.com',
          "connect-src 'self'",
          "base-uri 'self'",
          "form-action 'self'",
          "frame-ancestors 'none'",
        ].join('; '),
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'DENY',
      },
    ]),
  ],
};
