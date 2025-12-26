import type { ExtractParams } from '@bearstudio/lunalink';
import { find, fromEntries, keys, map, pipe } from 'remeda';

import { getLink, type DefaultLocaleRoutePaths } from '@/lib/link';
import { getSiteUrl } from '@/lib/site/get-site-url';
import { defaultLocale, locales } from '@/i18n';
import { ROUTE_MAPPINGS } from '@/i18n/routes-map';

export function getAlternates<P extends DefaultLocaleRoutePaths>(
  path: P,
  params: ExtractParams<P>
) {
  // Checking before if a route exists
  const matchingRoute = pipe(
    ROUTE_MAPPINGS,
    keys(),
    find((i) => i === path)
  );

  if (!matchingRoute) {
    return null;
  }

  return pipe(
    locales,
    map(
      (item) =>
        // if item is the default locale or if the matching route has an item for the locale, we create alternate, else null
        [
          item,
          item === defaultLocale || ROUTE_MAPPINGS[matchingRoute][item]
            ? getLink(path, item, params, true)
            : null,
        ] as const
    ),
    fromEntries()
  );
}

// Helper function to help referencing other structured data.
export function getId(type: 'organization' | 'website') {
  return `${getSiteUrl()}/#${type}`;
}
