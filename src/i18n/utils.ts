import { z } from 'astro/zod';

import { prop, stringToPath } from 'remeda';

import { defaultLocale, locales } from '@/i18n';

import { translations } from '.';

export type TranslationKeys = DeepKeysOnly<
  (typeof translations)[typeof defaultLocale]
>;

export type Locale = z.infer<ReturnType<typeof zLocale>>;
export const zLocale = () => z.enum(locales).catch(defaultLocale);

// Mostly used for OpenGraph og:locale and alternates
export const LOCALE_TERRITORY_MAP = {
  en: 'en_US',
  fr: 'fr_FR',
} as const satisfies Record<Locale, `${Locale}_${string}`>;

export function getTranslationFn(lang: Locale = defaultLocale) {
  return function t(key?: TranslationKeys, fallback?: string) {
    if (!key) return fallback;
    return (
      // @ts-expect-error Don't know why there is an error here 😭 TODO
      (prop(translations[lang], ...stringToPath(key)) as unknown as string) ||
      fallback
    );
  };
}

export const parseAstroLocale = (astroCurrentLocal?: string) => {
  return zLocale().parse(astroCurrentLocal);
};
