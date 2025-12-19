import { defineMiddleware } from 'astro:middleware';

import { defaultLocale } from '@/i18n';
import { zLocale } from '@/i18n/utils';

export const onRequest = defineMiddleware((context, next) => {
  const {
    routePattern,
    url: { pathname },
  } = context;

  const locale = pathname.split('/').filter((x) => x)[0];

  const { success: isLocaleExists } = zLocale().safeParse(locale);

  // If route isn't recognized, then defaultLocale is added to the URL
  if (routePattern === '/404' && !isLocaleExists) {
    return context.redirect(`/${defaultLocale}${pathname}`);
  }

  return next();
});
