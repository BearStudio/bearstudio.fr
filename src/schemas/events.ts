import { z, type SchemaContext } from 'astro:content';

import { zSocialTypes } from '@/schemas/utils';

export type Event = z.infer<ReturnType<typeof zEvent>>;
// Ajouter les réseaux, et on aura le minimum
export const zEvent = ({ image }: SchemaContext) =>
  z.object({
    socials: z
      .array(
        z.object({
          type: zSocialTypes,
          href: z.string().url(),
        })
      )
      .optional(),
    title: z.string(),
    image: image().optional(),
    link: z.string().optional(),
  });
