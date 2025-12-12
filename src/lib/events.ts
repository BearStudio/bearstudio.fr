import { getCollection } from 'astro:content';

import { getSlugWithoutLocale, hasSpecificLang } from '@/lib/content';

type Params = {
  limit?: number | undefined;
  lang?: string | undefined;
};

export async function getEventsCollection({
  limit = undefined,
  lang = 'fr',
}: Params = {}) {
  const events = (await getCollection('events'))
    .filter((post) => hasSpecificLang({ post, lang }))
    .map((post) => getSlugWithoutLocale<'events'>(post));

  return events.slice(0, limit);
}
