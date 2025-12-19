import { z } from 'astro/zod';

import { defaultLocale, locales } from '@/i18n';
import { routes } from '@/i18n/redirection';

import { translations } from '.';

type TranslationKeys = keyof (typeof translations)[typeof defaultLocale];

export type Locale = z.infer<ReturnType<typeof zLocale>>;
export const zLocale = () => z.enum(locales).catch(defaultLocale);

export function getTranslationFn(lang: Locale = defaultLocale) {
  return function t(key?: TranslationKeys, fallback?: string) {
    if (!key) return fallback;
    return translations?.[lang]?.[key] || fallback;
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
