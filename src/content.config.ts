import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';

import { zConference } from '@/schemas/conferences';
import { zPerson } from '@/schemas/people';
import { zPolaroid } from '@/schemas/polaroids';
import { zPost } from '@/schemas/posts';

export const collections = {
  posts: defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    schema: zPost,
  }),
  people: defineCollection({
    loader: glob({ base: './src/content/people', pattern: '**/*.{md,mdx}' }),
    schema: zPerson,
  }),
  conferences: defineCollection({
    loader: glob({
      base: './src/content/conferences',
      pattern: '**/*.{md,mdx}',
    }),
    schema: zConference,
  }),
  polaroids: defineCollection({
    loader: file('src/content/polaroids/data.json'),
    schema: zPolaroid,
  }),
};
