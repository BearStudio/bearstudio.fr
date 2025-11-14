import { routes } from '@/i18n/redirection';

type GetRedirectionUrlProps = {
  locale: string;
  currentLocale: string;
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
  const localeRouteRedirection = redirectionUrl?.[locale];

  if (!routeRedirection) {
    const regexLocale = new RegExp('^/' + currentLocale);
    return pathName.replace(regexLocale, '/' + locale);
  }

  const redirectRegex = new RegExp('^' + routeRedirection);
  return pathName.replace(redirectRegex, localeRouteRedirection);
};
