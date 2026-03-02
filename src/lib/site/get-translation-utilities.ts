import { getTranslationFn, parseAstroLocale } from '@/i18n/utils';

export const getTranslationUtilities = (astroCurrentLocal?: string) => {
  const locale = parseAstroLocale(astroCurrentLocal);
  const t = getTranslationFn(locale);

  return { t, locale };
};
