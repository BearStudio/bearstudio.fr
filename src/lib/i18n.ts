import { locales, type Locales } from '@/i18n';
import { routes } from '@/i18n/redirection';

type GetRedirectionUrlProps = {
  locale: Locales;
  currentLocale: Locales;
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

export const isLocale = (value: string): value is Locales => {
  return locales.includes(value as Locales);
};
