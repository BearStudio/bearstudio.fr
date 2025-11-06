import { defineMiddleware } from 'astro:middleware';

import { defaultLocale, locales } from '@/i18n';

export const onRequest = defineMiddleware((context, next) => {
  const {
    routePattern,
    url: { pathname },
  } = context;

  const locale = pathname.split('/').filter((x) => x)[0];

  if (routePattern === '/404' && !locales.includes(locale ?? '')) {
    return context.redirect(`/${defaultLocale}${pathname}`);
  }

  return next();
});
