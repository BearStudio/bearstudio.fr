import { getCollection, type CollectionEntry } from 'astro:content';

import {
  getSlugWithoutLocale,
  hasSpecificLang,
  type ComputedCollectionEntry,
} from '@/lib/content';

type Params = {
  limit?: number | undefined;
  lang?: string | undefined;
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
  lang = 'fr',
}: Params = {}) {
  const conferences = (await getCollection('conferences'))
    .filter((post) => hasSpecificLang({ post, lang }))
    .map((post) => getSlugWithoutLocale<'conferences'>(post));

  return conferences.slice(0, limit);
}

type GetConferenceCollectionLinkedToTeamMemberProps = Params & {
  speaker: ComputedCollectionEntry<'team'>;
};

export async function getConferenceCollectionLinkedToTeamMember({
  speaker,
  lang,
  limit = undefined,
}: GetConferenceCollectionLinkedToTeamMemberProps) {
  return (await getConferencesCollection({ limit, lang }))
    .filter((post) => hasSpecificSpeaker({ post, speaker }))
    .filter((x) => x);
}
