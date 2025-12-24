import type { SchemaContext } from 'astro:content';
import { z } from 'astro/zod';

export const zPolaroid = ({ image }: SchemaContext) =>
  z.object({
    id: z.string(),
    title: z.object({ fr: z.string(), en: z.string() }),
    src: image(),
    href: z.union([
      z.string(),
      z.object({ fr: z.string(), en: z.string().optional() }),
    ]),
  });
