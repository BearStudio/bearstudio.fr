import { z } from 'astro/zod';

import { entries, map, pipe, prop, reduce, stringToPath } from 'remeda';

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
  return function t(key: TranslationKeys, params?: Record<string, string>) {
    const translationString =
      // @ts-expect-error Don't know why there is an error here 😭 TODO
      (prop(translations[lang], ...stringToPath(key)) as unknown as string) ??
      '';

    return pipe(
      params ?? {},
      entries(),
      reduce(
        (t, [key, string]) => t.replaceAll(`{{${key}}}`, string),
        translationString
      )
    );
  };
}

export const parseAstroLocale = (astroCurrentLocal?: string) => {
  return zLocale().parse(astroCurrentLocal);
};
