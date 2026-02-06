import { reference, z, type SchemaContext } from 'astro:content';

export type Event = z.infer<ReturnType<typeof zEvent>>;
export const zEvent = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    image: image().optional(),
    link: z.string().optional(),
    date: z.date(),
    language: z.string().optional(),
    participants: z.array(reference('people')).optional(),

    // Partie SEO
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
  });
