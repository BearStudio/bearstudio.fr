import { z, type SchemaContext } from 'astro:content';

export type Skill = z.infer<ReturnType<typeof zSkill>>;
export const zSkill = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    logo: image().optional(),
    metaDescription: z.string().optional(),
    excerpt: z.string().optional(),
  });
