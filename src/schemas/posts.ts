import { reference, z, type SchemaContext } from 'astro:content';

export type Post = z.infer<ReturnType<typeof zPost>>;
export const zPost = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
    heroImage: image().optional(),
    authors: z.array(reference('people')).optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
  });
