import { z, type SchemaContext } from 'astro:content';

import { zu } from '@/lib/zod-utils';

export type Blog = z.infer<ReturnType<typeof zBlog>>;
export const zBlog = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    heroImage: image().optional(),
    authors: z.array(zu.todo()).optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    state: z.enum(['draft', 'published']).default('draft'),
  });
