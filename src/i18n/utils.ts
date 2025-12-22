import { z } from 'astro/zod';

import { prop, stringToPath } from 'remeda';

import { defaultLocale, locales } from '@/i18n';
import { routes } from '@/i18n/redirection';

import { translations } from '.';

export type TranslationKeys = DeepKeysOnly<
  (typeof translations)[typeof defaultLocale]
>;

export type Locale = z.infer<ReturnType<typeof zLocale>>;
export const zLocale = () => z.enum(locales).catch(defaultLocale);

// Mostly used for OpenGraph og:locale and alternates
export const LOCALE_TERRITORY_MAP = {
  en: 'en_US',
  fr: 'fr_FR',
} as const satisfies Record<Locale, `${Locale}_${string}`>;

export function getTranslationFn(lang: Locale = defaultLocale) {
  return function t(key?: TranslationKeys, fallback?: string) {
    if (!key) return fallback;
    return (
      // @ts-expect-error Don't know why there is an error here 😭 TODO
      (prop(translations[lang], ...stringToPath(key)) as unknown as string) ||
      fallback
    );
  };
}

export const parseAstroLocale = (astroCurrentLocal?: string) => {
  return zLocale().parse(astroCurrentLocal);
};

type GetRedirectionUrlProps = {
  locale: Locale;
  currentLocale: Locale;
  pathName: string;
};

export const getRedirectionUrl = ({
  locale,
  currentLocale,
  pathName,
}: GetRedirectionUrlProps) => {
  if (currentLocale === locale) {
    return pathName;
  }

  const redirectionSelection = routes
    .filter((route) => {
      const regex = new RegExp('^' + route[currentLocale]);
      return pathName.match(regex);
    })
    // The longer the string is, the more similar it is to the current route
    .sort((a, b) => b.fr.length - a.fr.length);

  // The top string has priority since it's the most similar to the current route
  const routeRedirection = redirectionSelection[0]?.[currentLocale];
  const localeRouteRedirection = redirectionSelection[0]?.[locale];

  if (!routeRedirection || !localeRouteRedirection) {
    const regexLocale = new RegExp('^/' + currentLocale);
    return pathName.replace(regexLocale, '/' + locale);
  }

  const redirectRegex = new RegExp('^' + routeRedirection);
  return pathName.replace(redirectRegex, localeRouteRedirection);
};
