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

  const redirectionUrl = routes.find((route) => {
    const regex = new RegExp('^' + route[currentLocale]);
    return pathName.match(regex);
  });

  const routeRedirection = redirectionUrl?.[currentLocale];

  if (!routeRedirection) {
    const regexLocale = new RegExp('^/' + currentLocale);
    return pathName.replace(regexLocale, '/' + locale);
  }

  const localeRouteRedirection = redirectionUrl[locale];
  const redirectRegex = new RegExp('^' + routeRedirection);
  return pathName.replace(redirectRegex, localeRouteRedirection);
};

export const isLocale = (value: string): value is Locales => {
  return locales.includes(value as Locales);
};
