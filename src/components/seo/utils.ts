import type { ExtractParams } from '@bearstudio/lunalink';
import { fromEntries, map, pipe } from 'remeda';

import { getLink, type DefaultLocaleRoutePaths } from '@/lib/link';
import { locales } from '@/i18n';

export function getAlternates<P extends DefaultLocaleRoutePaths>(
  path: P,
  params: ExtractParams<P>
) {
  return pipe(
    locales,
    map((locale) => [locale, getLink(path, locale, params, true)] as const),
    fromEntries()
  );
}
