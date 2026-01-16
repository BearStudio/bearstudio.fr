import type {
  DefaultLocaleRoutePaths,
  LocalesWithoutDefault,
  RoutePaths,
} from '@/lib/link';

// Route mapping between French and other locales
export const ROUTE_MAPPINGS = {
  '/fr': { en: '/en' },
  '/fr/prestations': { en: '/en/services' },
  '/fr/prestations/ux-design': { en: '/en/services/ux-design' },
  '/fr/prestations/developpement-web': { en: '/en/services/web-development' },
  '/fr/prestations/developpement-mobile': {
    en: '/en/services/mobile-development',
  },
  '/fr/prestations/boost-projet': { en: '/en/services/project-boost' },
  '/fr/prestations/accompagnement-cto': { en: '/en/services/cto-support' },
  '/fr/equipe': { en: '/en/team' },
  '/fr/equipe/:id': { en: '/en/team/:id' },
  '/fr/events': { en: '/en/events' },
  '/fr/events/:id': { en: '/en/events/:id' },
  '/fr/events/annee': { en: '/en/events/year' },
  '/fr/events/annee/:year': { en: '/en/events/year/:year' },
  '/fr/contact': { en: '/en/contact' },
  '/fr/blog/articles/:id': { en: '/en/blog/posts/:id' },
  '/fr/blog/auteurs': { en: '/en/blog/authors' },
  '/fr/blog/auteurs/:author': { en: '/en/blog/authors/:author' },
  '/fr/blog/auteurs/:author/:page': { en: '/en/blog/authors/:author/:page' },
  '/fr/blog': { en: '/en/blog' },
  '/fr/blog/:page': { en: '/en/blog/:page' },
  '/fr/blog/articles': { en: '/en/blog/posts' },
  '/fr/mentions-legales': { en: '/en/legal-notice' },
  '/fr/contact/processus-candidature-bearstudio': {
    en: '/en/contact/application-process-bearstudio',
  },
  '/fr/blog/rss.xml': { en: null },
} as const satisfies Record<
  DefaultLocaleRoutePaths,
  Record<LocalesWithoutDefault, RoutePaths | null>
>;
