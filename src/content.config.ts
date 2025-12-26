import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';

import { zBlog } from '@/schemas/blog';
import { zConference } from '@/schemas/conferences';
import { zEvent } from '@/schemas/events';
import { zPerson } from '@/schemas/people';
import { zPolaroid } from '@/schemas/polaroids';
import { zSkills } from '@/schemas/skills';

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: zBlog,
  }),
  people: defineCollection({
    loader: glob({ base: './src/content/people', pattern: '**/*.{md,mdx}' }),
    schema: zPerson,
  }),
  skills: defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.{md,mdx}' }),
    schema: zSkills,
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
