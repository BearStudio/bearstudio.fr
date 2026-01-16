import type { SchemaContext } from 'astro:content';
import { z } from 'astro/zod';

export const zIcon = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    image: image(),
  });
