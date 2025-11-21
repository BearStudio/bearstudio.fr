import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

import { zBlog } from '@/schemas/blog';
import { zSkills } from '@/schemas/skills';
import { zTeamMember } from '@/schemas/team';

export const collections = {
  blog: defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: zBlog,
  }),
  team: defineCollection({
    loader: glob({ base: './src/content/team', pattern: '**/*.{md,mdx}' }),
    schema: zTeamMember,
  }),
  skills: defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.{md,mdx}' }),
    schema: zSkills,
  }),
};
