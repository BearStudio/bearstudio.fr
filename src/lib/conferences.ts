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
    .map(conferenceWithComputed)
    .sort((a, b) => {
      const now = new Date();

      // Get the closest instance date for each conference
      const getClosestDate = (conference: ConferenceWithComputed) => {
        const instances = conference.data.instances ?? [];
        if (instances.length === 0) return null;

        // Find the instance with the date closest to now (including past dates)
        return instances.reduce((closest, instance) => {
          const instanceTime = Math.abs(
            now.getTime() - instance.date.getTime()
          );
          const closestTime = Math.abs(now.getTime() - closest.date.getTime());
          return instanceTime < closestTime ? instance : closest;
        }).date;
      };

      const dateA = getClosestDate(a);
      const dateB = getClosestDate(b);

      // Conferences without dates go to the end
      if (!dateA && !dateB) return 0;
      if (!dateA) return 1;
      if (!dateB) return -1;

      // Sort by closest to now (smallest absolute difference from now)
      const diffA = Math.abs(now.getTime() - dateA.getTime());
      const diffB = Math.abs(now.getTime() - dateB.getTime());
      return diffA - diffB;
    });

  return conferences.slice(0, limit);
}

export type ConferenceWithComputed = ReturnType<typeof conferenceWithComputed>;
export const conferenceWithComputed = (
  item: CollectionEntry<'conferences'>
) => {
  // item.id format is: "slug/locale.md" (e.g., "ivan-dalmet/fr.md")
  const slug = item.id.split('/')[0];

  // Sort instances by date (closest to now first)
  const sortedInstances = (item.data.instances ?? []).slice().sort((a, b) => {
    const now = new Date();
    const diffA = Math.abs(now.getTime() - a.date.getTime());
    const diffB = Math.abs(now.getTime() - b.date.getTime());
    return diffA - diffB;
  });

  return {
    ...item,
    data: {
      ...item.data,
      instances: sortedInstances,
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
