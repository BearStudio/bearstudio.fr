import { routes, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  headers: [
    routes.header('/(.*)', [{ key: 'X-Robots-Tag', value: 'noindex' }], {
      has: [{ type: 'host', value: 'bearstudio-site-2026.vercel.app' }],
    }),
  ],
};
