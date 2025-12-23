import type { ExtractParams } from '@bearstudio/lunalink';
import { lunalink } from '@bearstudio/lunalink';
import { find, isEmpty, isNonNullish, isNot, keys, pipe } from 'remeda';
import { match } from 'ts-pattern';

import { getSiteUrl } from '@/lib/site/get-site-url';
import { defaultLocale } from '@/i18n';
import { ROUTE_MAPPINGS } from '@/i18n/routes-map';
import type { Locale } from '@/i18n/utils';
import { ROUTES } from '@/routes.gen';

export function link<Path extends string>(
  url: Path,
  params: ExtractParams<Path>
): string {
  return lunalink(url, params, { baseURL: getSiteUrl() });
}

export type LocalesWithoutDefault = Exclude<Locale, typeof defaultLocale>;

function removeDoubleSlash(str: string) {
  // Removing double `//` from pathname. Not a fan, but have to go quick on that one.
  return str.split('/').filter(isNonNullish).filter(isNot(isEmpty)).join('/');
}

export function getLink<Path extends DefaultLocaleRoutePaths, L extends Locale>(
  url: Path,
  locale: L,
  params: ExtractParams<ReturnType<typeof i18nPath<Path, L>>>,
  absolute?: boolean
) {
  const value = lunalink(i18nPath(url, locale), params, {
    baseURL: absolute ? getSiteUrl() : '',
  });

  return match(absolute)
    .with(false, undefined, () => removeDoubleSlash(value))
    .with(true, () => {
      const u = new URL(value);
      u.pathname = removeDoubleSlash(u.pathname);

      return u.toString();
    })
    .exhaustive();
}

/**
 * Recursively extracts all __path properties from a nested object type
 */
type ExtractPaths<T> = T extends { __path: infer Path }
  ? Path | ExtractPaths<Omit<T, '__path'>>
  : T extends object
    ? { [K in keyof T]: ExtractPaths<T[K]> }[keyof T]
    : never;

/**
 * Type representing all valid FR route paths
 */
export type DefaultLocaleRoutePaths = ExtractPaths<
  (typeof ROUTES)[typeof defaultLocale]
>;

export type RoutePaths = ExtractPaths<typeof ROUTES>;

/**
 * Translates a French route path to the specified locale
 * @param wantedRoutePath - The French route path
 * @param locale - The target locale
 * @returns The translated path for the given locale
 */
export function i18nPath<T extends DefaultLocaleRoutePaths, L extends Locale>(
  wantedRoutePath: T,
  locale: L
): L extends typeof defaultLocale
  ? T
  : T extends keyof typeof ROUTE_MAPPINGS
    ? NonNullable<(typeof ROUTE_MAPPINGS)[T][Exclude<L, typeof defaultLocale>]>
    : never {
  // Early return if the target locale is the default one
  if (locale === defaultLocale) {
    return wantedRoutePath as ExplicitAny;
  }

  // Find the best matching route mapping
  const matchingRoute = pipe(
    ROUTE_MAPPINGS,
    keys(),
    find((i) => i === wantedRoutePath)
  );

  if (
    matchingRoute &&
    ROUTE_MAPPINGS[matchingRoute]?.[locale as LocalesWithoutDefault]
  ) {
    return ROUTE_MAPPINGS[matchingRoute][
      locale as LocalesWithoutDefault
    ] as ExplicitAny;
  }

  // Fallback: go to new locale root.
  return ROUTE_MAPPINGS['/fr'][locale as LocalesWithoutDefault] as ExplicitAny;
}
