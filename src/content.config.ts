import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';

import { zConference } from '@/schemas/conferences';
import { zEvent } from '@/schemas/events';
import { zPerson } from '@/schemas/people';
import { zPolaroid } from '@/schemas/polaroids';
import { zPost } from '@/schemas/posts';
import { zSkill } from '@/schemas/skills';

export const collections = {
  posts: defineCollection({
    loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
    schema: zPost,
  }),
  people: defineCollection({
    loader: glob({ base: './src/content/people', pattern: '**/*.{md,mdx}' }),
    schema: zPerson,
  }),
  skills: defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.{md,mdx}' }),
    schema: zSkill,
  }),
  conferences: defineCollection({
    loader: glob({
      base: './src/content/conferences',
      pattern: '**/*.{md,mdx}',
    }),
    schema: zConference,
  }),
  events: defineCollection({
    loader: glob({
      base: './src/content/events',
      pattern: '**/*.{md,mdx}',
    }),
    schema: zEvent,
  }),
  polaroids: defineCollection({
    loader: file('src/content/polaroids/data.json'),
    schema: zPolaroid,
  }),
};
