import { getImage } from 'astro:assets';

import type { GetImageResult } from 'astro';

import type { PostWithComputed } from '@/lib/posts.ts';

import defaultImg from './default.jpeg';

type PostWithComputedAndImage = Omit<PostWithComputed, 'data'> & {
  data: PostWithComputed['data'] & {
    image: GetImageResult | undefined;
  };
};

export async function enhancePostWithImage(
  post: PostWithComputed
): Promise<PostWithComputedAndImage> {
  const sourceImage =
    post.data.thumbnail?.image ?? post.data.heroImage ?? defaultImg;
  return {
    ...post,
    data: {
      ...post.data,
      image: sourceImage
        ? await getImage({
            src: sourceImage,
            widths: [800, 1200],
            sizes: '(min-width: 800px) 1200px, 800px',
            layout: 'constrained',
          })
        : undefined,
    },
  };
}
