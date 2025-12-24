import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

import { type ComputedCollectionEntry } from '@/lib/content';
import { teamMemberWithComputed } from '@/lib/team';
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
  const posts = await Promise.all(
    (await getCollection('blog'))
      .filter(isPublished)
      .filter((post) => {
        if (!locale) return post;
        const [postLocale] = post.id.split('/');
        return postLocale === locale;
      })
      .sort(sortByLatest)
      .map(blogPostWithComputed)
  );

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export type BlogPostWithComputed = Awaited<
  ReturnType<typeof blogPostWithComputed>
>;
const blogPostWithComputed = async (item: CollectionEntry<'blog'>) => {
  const [locale, ...slugArray] = item.id.split('/');
  const slug = slugArray.join('/');
  const authors = await Promise.all(
    (item.data.authors ?? [])?.map(async (author) => {
      const data = await getEntry('team', `${author.id}/${locale}`);
      return data ? teamMemberWithComputed(data) : undefined;
    })
  );
  return {
    ...item,
    data: {
      ...item.data,
      _computed: {
        slug,
        authors,
      },
    },
  };
};

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
