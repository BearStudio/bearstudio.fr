import { getCollection } from 'astro:content';

import { existsInLocale, getSlugWithoutLocale } from '@/lib/content';
import type { Locale } from '@/i18n/utils';

type Params = {
  limit?: number | undefined;
  locale: Locale;
};

export async function getEventsCollection({
  limit = undefined,
  locale,
}: Params) {
  const events = (await getCollection('events'))
    .filter((post) => existsInLocale({ idWithLocale: post.id, locale }))
    .map((post) => getSlugWithoutLocale<'events'>(post));

  return events.slice(0, limit);
}
