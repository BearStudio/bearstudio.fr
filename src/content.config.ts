import { defineCollection } from 'astro:content';
import { glob, type Loader } from 'astro/loaders';

import { zBlog } from '@/schemas/blog';

const customBlogLoader: Loader = {
  ...glob,
  name: 'Page Loader',
  load: async (loaderParams) => {
    const { store } = loaderParams;
    const baseLoader = glob({
      base: './src/content/blog',
      pattern: '**/*.{md,mdx}',
    });

    await baseLoader.load.call(this, loaderParams);
    console.log('entries');
    console.log(store.entries());

    let items = [...store.entries()].map(([_, value]) => value);
    items = items.map((item) => {
      return {
        ...item,
        data: {
          ...item.data,
          title: 'Title surchargé !',
        },
      };
    });
    store.clear();
    items.forEach((item) => {
      store.set({ ...item });
    });
  },
};

export const collections = {
  blog: defineCollection({
    loader: customBlogLoader,
    schema: zBlog,
  }),
};
