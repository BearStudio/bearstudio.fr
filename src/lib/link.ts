import type { ExtractParams } from '@bearstudio/lunalink';
import { lunalink } from '@bearstudio/lunalink';

import { getSiteUrl } from '@/lib/site/get-site-url';

// type ParamsDefaultType = Record<string, any>;

export function link<Path extends string>(
  url: Path,
  params: ExtractParams<Path>
): string {
  return lunalink(url, params, { baseURL: getSiteUrl() });
}
