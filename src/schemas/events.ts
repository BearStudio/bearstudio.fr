import { z, type SchemaContext } from 'astro:content';

export type Event = z.infer<ReturnType<typeof zEvent>>;
// Ajouter les réseaux, et on aura le minimum
export const zEvent = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    image: image().optional(),
    link: z.string().optional(),
  });
