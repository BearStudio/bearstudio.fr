import { getCollection } from 'astro:content';

import { getSlugWithoutLocale, hasSpecificLang } from '@/lib/content';

type Params = {
  limit?: number | undefined;
  lang?: string | undefined;
};

export async function getSkillsCollection({
  limit = undefined,
  lang = 'fr',
}: Params = {}) {
  const skills = (await getCollection('skills'))
    .filter((post) => hasSpecificLang({ post, lang }))
    .map((post) => getSlugWithoutLocale<'skills'>(post));

  return skills.slice(0, limit);
}
