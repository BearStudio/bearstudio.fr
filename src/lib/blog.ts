import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

type Params = {
  limit?: number;
};

const isPublished = (post: CollectionEntry<'blog'>) =>
  post.data.state === 'published' || !import.meta.env.PROD;

type HasSpecificAuthorProps = {
  post: CollectionEntry<'blog'>;
  author: CollectionEntry<'team'>;
};

const hasSpecificAuthor = ({ post, author }: HasSpecificAuthorProps) => {
  const selectedPost = (post.data?.authors ?? []).find(
    (postAuthor) => postAuthor.id === author.id
  );

  if (selectedPost) return selectedPost;
  return;
};

const sortByLatest = (
  post1: CollectionEntry<'blog'>,
  post2: CollectionEntry<'blog'>
) => (post2.data.date?.valueOf() ?? 0) - (post1.data.date?.valueOf() ?? 0);

export async function getBlogCollection({ limit = undefined }: Params = {}) {
  const posts = (await getCollection('blog'))
    .filter(isPublished)
    .sort(sortByLatest);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}

export async function getAuthorsFromBlogPost(post: CollectionEntry<'blog'>) {
  return await Promise.all(
    (post.data.authors ?? []).map(async (author) => {
      if (!author) return;
      return await getEntry(author);
    })
  );
}

type GetBlogCollectionLinkedToTeamMemberProps = Params & {
  author: CollectionEntry<'team'>;
};

export async function getBlogCollectionLinkedToTeamMember({
  author,
  limit = undefined,
}: GetBlogCollectionLinkedToTeamMemberProps) {
  const posts = (await getCollection('blog'))
    .filter((post) => hasSpecificAuthor({ post, author }))
    .filter((x) => x);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}
