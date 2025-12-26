import { reference, z, type SchemaContext } from 'astro:content';

export type Post = z.infer<ReturnType<typeof zPost>>;
export const zPost = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    languages: z.array(z.string()),
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
    heroImage: image().optional(),
    authors: z.array(reference('people')).optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    skills: z.array(reference('skills')).optional(),
    categories: z.array(z.string()).optional(),
    state: z.enum(['draft', 'published']).default('draft'),
  });
