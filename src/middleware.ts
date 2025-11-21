import { defineMiddleware } from 'astro:middleware';

import { isLocale } from '@/lib/i18n';
import { defaultLocale } from '@/i18n';

export const onRequest = defineMiddleware((context, next) => {
  const {
    routePattern,
    url: { pathname },
  } = context;

  const locale = pathname.split('/').filter((x) => x)[0];

  // Si l'URL n'est pas reconnu, et qu'aucune locale n'est détectée, alors, on essaie de rajouter une locale à la route demandée
  if (routePattern === '/404' && !isLocale(locale ?? '')) {
    return context.redirect(`/${defaultLocale}${pathname}`);
  }

  return next();
});
