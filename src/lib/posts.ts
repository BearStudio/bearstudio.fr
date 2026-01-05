import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import { filter, isNonNullish } from 'remeda';

import { personWithComputed, type PersonWithComputed } from '@/lib/people';
import type { Locale } from '@/i18n/utils';

type Params = {
  limit?: number | undefined;
  locale: Locale;
};

const isPublished = (post: CollectionEntry<'posts'>) =>
  post.data.state === 'published' || !import.meta.env.PROD;

type HasSpecificAuthorProps = {
  post: CollectionEntry<'posts'>;
  author: PersonWithComputed;
};

const hasSpecificAuthor = ({ post, author }: HasSpecificAuthorProps) => {
  const selectedPost = (post.data?.authors ?? []).find(
    (postAuthor) => postAuthor.id === author.data._computed.slug
  );

  if (selectedPost) return selectedPost;
  return;
};

const sortByLatest = (
  post1: CollectionEntry<'posts'>,
  post2: CollectionEntry<'posts'>
) => (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);

export async function getPostsCollection({
  limit = undefined,
  locale,
}: Params) {
  const posts = await Promise.all(
    (await getCollection('posts'))
      .filter(isPublished)
      .filter((post) => {
        if (!locale) return post;
        const [postLocale] = post.id.split('/');
        return postLocale === locale;
      })
      .sort(sortByLatest)
      .map(postWithComputed)
  );

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export type PostWithComputed = Awaited<ReturnType<typeof postWithComputed>>;
const postWithComputed = async (item: CollectionEntry<'posts'>) => {
  const [locale, ...slugArray] = item.id.split('/');
  const slug = slugArray.join('/');
  const authors = await Promise.all(
    (item.data.authors ?? [])?.map(async (author) => {
      const data = await getEntry('people', `${author.id}/${locale}`);
      return data ? personWithComputed(data) : undefined;
    })
  );
  return {
    ...item,
    data: {
      ...item.data,
      _computed: {
        slug,
        authors: filter(authors, isNonNullish),
      },
    },
  };
};

type GetPostsCollectionLinkedToPersonProps = Params & {
  author: PersonWithComputed;
};

export async function getPostsCollectionLinkedToPerson({
  author,
  locale,
  limit = undefined,
}: GetPostsCollectionLinkedToPersonProps) {
  const posts = (await getPostsCollection({ locale }))
    .filter((post) => hasSpecificAuthor({ post, author }))
    .filter((x) => x);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
