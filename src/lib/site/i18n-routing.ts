import type { GetStaticPathsItem } from 'astro';

import { locales } from '@/i18n';

type GetLanguagePageVariantProps<T> = {
  locale: string;
  page: T | undefined;
};

export function getLanguagePageVariant<T extends GetStaticPathsItem>({
  locale,
  page,
}: GetLanguagePageVariantProps<T>): T {
  // Ajout de locale à faire, voir pour faire plus propre
  return { ...(page ?? {}), params: { ...(page?.params ?? {}), locale } };
}

export function getAllLanguagePageVariant<T extends GetStaticPathsItem>(
  page?: T
): Array<T> {
  return locales.map((locale) => getLanguagePageVariant({ locale, page }));
}
