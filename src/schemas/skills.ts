import { z, type SchemaContext } from 'astro:content';

export type Skills = z.infer<ReturnType<typeof zSkills>>;
export const zSkills = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    logo: image().optional(),
    metaDescription: z.string().optional(),
    excerpt: z.string().optional(),
  });
