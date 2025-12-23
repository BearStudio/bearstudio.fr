import { getCollection, type CollectionEntry } from 'astro:content';

import {
  existsInLocale,
  getSlugWithoutLocale,
  type ComputedCollectionEntry,
} from '@/lib/content';
import type { Locale } from '@/i18n/utils';

type Params = {
  limit?: number | undefined;
  locale: Locale;
};

type HasSpecificSpeakerProps = {
  post: CollectionEntry<'conferences'>;
  speaker: ComputedCollectionEntry<'team'>;
};

const hasSpecificSpeaker = ({ post, speaker }: HasSpecificSpeakerProps) => {
  return (post.data?.instances ?? []).find((conference) =>
    (conference.speakers ?? []).some(
      (currentSpeaker) => currentSpeaker.id === speaker.data._computed.slug
    )
  );
};

export async function getConferencesCollection({
  limit = undefined,
  locale,
}: Params) {
  const conferences = (await getCollection('conferences'))
    .filter((post) => existsInLocale({ idWithLocale: post.id, locale }))
    .map((post) => getSlugWithoutLocale<'conferences'>(post));

  return conferences.slice(0, limit);
}

type GetConferenceCollectionLinkedToTeamMemberProps = Params & {
  speaker: ComputedCollectionEntry<'team'>;
};

export async function getConferenceCollectionLinkedToTeamMember({
  speaker,
  locale,
  limit = undefined,
}: GetConferenceCollectionLinkedToTeamMemberProps) {
  return (await getConferencesCollection({ limit, locale }))
    .filter((post) => hasSpecificSpeaker({ post, speaker }))
    .filter((x) => x);
}
