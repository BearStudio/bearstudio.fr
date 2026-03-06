import { reference } from 'astro:content';
import { z } from 'astro/zod';

export const zSkill = () =>
  z.object({
    name: z.string(),
    description: z.string(),
    icon: reference('icons'),
  });
