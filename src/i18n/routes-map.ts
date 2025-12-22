import type {
  DefaultLocaleRoutePaths,
  LocalesWithoutDefault,
  RoutePaths,
} from '@/lib/link';

// Route mapping between French and other locales
export const ROUTE_MAPPINGS = {
  '/fr': { en: '/en' },
  '/fr/equipe': { en: '/en/team' },
  '/fr/prestations': { en: '/en/services' },
  '/fr/blog': { en: '/en/blog' },
  '/fr/contact': { en: '/en/contact' },
  '/fr/blog/:filter': { en: '/en/blog/:filter' },
  '/fr/blog/:filter/:page': {
    en: '/en/blog/:filter/:page',
  },
  '/fr/blog/posts': { en: '/en/blog/posts' },
  '/fr/blog/posts/:id': { en: '/en/blog/posts/:id' },
  '/fr/equipe/:id': { en: '/en/team/:id' },
  '/fr/prestations/ux-design': {
    en: '/en/services/ux-design',
  },
} as const satisfies Record<
  DefaultLocaleRoutePaths,
  Record<LocalesWithoutDefault, RoutePaths | null>
>;
