import { reference, z, type SchemaContext } from 'astro:content';

export type Blog = z.infer<ReturnType<typeof zBlog>>;
export const zBlog = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    languages: z.array(z.string()),
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
    heroImage: image().optional(),
    authors: z.array(reference('team')).optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    skills: z.array(reference('skills')).optional(),
    categories: z.array(z.string()).optional(),
    state: z.enum(['draft', 'published']).default('draft'),
  });
