import type { Locales } from '@/i18n';

import { translations } from './ui';

// Placeholder en attendant que le système de route soit mis en place
const defaultLang = 'fr';

export function useTranslations(lang: Locales = defaultLang) {
  return function t(
    key?: keyof (typeof translations)[typeof defaultLang],
    fallback?: string
  ) {
    if (!key) return fallback;

    return translations?.[lang]?.[key] || fallback;
  };
}
