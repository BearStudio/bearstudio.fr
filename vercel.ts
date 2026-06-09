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
      {
        key: 'Link',
        value:
          '</llms.txt>; rel="service-doc"; type="text/plain", </llms.txt>; rel="describedby"; type="text/plain", </sitemap-index.xml>; rel="sitemap"; type="application/xml"',
      },
    ]),
  ],
};
