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
  '/fr/equipe': { en: '/en/team' },
  '/fr/equipe/:id': { en: '/en/team/:id' },
  '/fr/contact': { en: '/en/contact' },
  '/fr/blog/posts/:id': { en: null },
  '/fr/blog/auteurs': { en: null },
  '/fr/blog/auteurs/:author': { en: null },
  '/fr/blog/auteurs/:author/:page': { en: null },
  '/fr/blog': { en: null },
  '/fr/blog/:page': { en: null },
  '/fr/blog/posts': { en: null },
  '/fr/mentions-legales': { en: '/en/legal-notice' },
} as const satisfies Record<
  DefaultLocaleRoutePaths,
  Record<LocalesWithoutDefault, RoutePaths | null>
>;
