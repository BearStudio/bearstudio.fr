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

const isPublished = (post: CollectionEntry<'blog'>) =>
  post.data.state === 'published' || !import.meta.env.PROD;

type HasSpecificAuthorProps = {
  post: CollectionEntry<'blog'>;
  author: ComputedCollectionEntry<'team'>;
};

const hasSpecificAuthor = ({ post, author }: HasSpecificAuthorProps) => {
  const selectedPost = (post.data?.authors ?? []).find(
    (postAuthor) => postAuthor.id === author.data._computed.slug
  );

  if (selectedPost) return selectedPost;
  return;
};

const sortByLatest = (
  post1: CollectionEntry<'blog'>,
  post2: CollectionEntry<'blog'>
) => (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);

export async function getBlogCollection({ limit = undefined, locale }: Params) {
  const posts = (await getCollection('blog'))
    .filter(isPublished)
    .filter((post) =>
      locale ? existsInLocale({ idWithLocale: post.id, locale }) : post
    )
    .sort(sortByLatest)
    .map((post) => getSlugWithoutLocale<'blog'>(post));

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

type GetBlogCollectionLinkedToTeamMemberProps = Params & {
  author: ComputedCollectionEntry<'team'>;
};

export async function getBlogCollectionLinkedToTeamMember({
  author,
  locale,
  limit = undefined,
}: GetBlogCollectionLinkedToTeamMemberProps) {
  return (await getBlogCollection({ limit, locale }))
    .filter((post) => hasSpecificAuthor({ post, author }))
    .filter((x) => x);
}
