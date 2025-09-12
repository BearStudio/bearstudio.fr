import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { zBlog } from '@/schemas/blog';

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: zBlog,
  }),
};
