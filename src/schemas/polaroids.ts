import { z } from 'astro/zod';

export const zPolaroid = () =>
  z.object({
    id: z.string(),
    title: z.object({ fr: z.string(), en: z.string() }),
    src: z.string(),
    href: z.string(),
  });
