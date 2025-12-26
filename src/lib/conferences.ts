import { getCollection, type CollectionEntry } from 'astro:content';

import { isNonNullish } from 'remeda';

import type { PersonWithComputed } from '@/lib/people';
import type { Locale } from '@/i18n/utils';

export async function getConferencesCollection({
  locale,
  limit,
}: {
  locale: Locale;
  limit?: number | undefined;
}) {
  const conferences = (await getCollection('conferences'))
    .filter((item) => {
      // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
      const itemLocale = item.id.split('/')[1]?.replace('.md', '');
      return itemLocale === locale;
    })
    .map(conferenceWithComputed);

  // TODO sort conferences
  return conferences.slice(0, limit);
}

export type ConferenceWithComputed = ReturnType<typeof conferenceWithComputed>;
export const conferenceWithComputed = (
  item: CollectionEntry<'conferences'>
) => {
  // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
  const slug = item.id.split('/')[0];
  return {
    ...item,
    data: {
      ...item.data,
      _computed: { slug },
    },
  };
};

export async function getConferencesCollectionByPerson(params: {
  locale: Locale;
  limit?: number | undefined;
  person: PersonWithComputed;
}) {
  return (await getConferencesCollection(params))
    .filter((item) =>
      (item.data?.instances ?? []).find((conference) =>
        (conference.speakers ?? []).some(
          (currentSpeaker) =>
            currentSpeaker.id === params.person.data._computed.slug
        )
      )
    )
    .filter(isNonNullish);
}
