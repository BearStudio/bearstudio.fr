import { apiImageEndpoint } from '@bearstudio/astro-assets-generation';
import type { APIRoute } from 'astro';

import { loadConfig } from '@/lib/assets';

export const prerender = false;

loadConfig();

export const GET: APIRoute = apiImageEndpoint(
  import.meta.glob('./_*.tsx', { eager: true })
);
