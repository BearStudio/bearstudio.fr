import { getCollection } from 'astro:content';

import { existsInLocale, getSlugWithoutLocale } from '@/lib/content';
import type { Locale } from '@/i18n/utils';

type Params = {
  limit?: number | undefined;
  locale: Locale;
};

export async function getSkillsCollection({
  limit = undefined,
  locale,
}: Params) {
  const skills = (await getCollection('skills'))
    .filter((post) => existsInLocale({ idWithLocale: post.id, locale }))
    .map((post) => getSlugWithoutLocale<'skills'>(post));

  return skills.slice(0, limit);
}
