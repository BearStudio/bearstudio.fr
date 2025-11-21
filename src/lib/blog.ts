import { getCollection, type CollectionEntry } from 'astro:content';

import {
  getSlugWithoutLocale,
  hasSpecificLang,
  type ComputedCollectionEntry,
} from '@/lib/content';

type Params = {
  limit?: number;
  lang?: string;
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

export async function getBlogCollection({
  limit = undefined,
  lang,
}: Params = {}) {
  const posts = (await getCollection('blog'))
    .filter(isPublished)
    .filter((post) => (lang ? hasSpecificLang({ post, lang }) : post))
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
  lang,
  limit = undefined,
}: GetBlogCollectionLinkedToTeamMemberProps) {
  return (await getBlogCollection({ limit, lang }))
    .filter((post) => hasSpecificAuthor({ post, author }))
    .filter((x) => x);
}
