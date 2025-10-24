import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // Get lang from url param
  const locale = context.params.locale;
  const pathname = context.url.pathname;

  // TODO - Regarder si la route avec locale existe via les ROUTES générées avec locale. Si oui, redirection, sinon, next()
  // Avec routePattern et pathname, possible de voir si ça existe
  if (!locale && pathname !== '/styleguide' && pathname !== '/_image') {
    return context.redirect(
      `/${locale ?? 'fr'}${pathname !== '/' ? pathname : ''}`
    );
  }

  return next();
});
