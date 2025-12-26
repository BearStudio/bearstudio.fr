import { z, type SchemaContext } from 'astro:content';

import { zSocialTypes } from '@/schemas/utils';

export type Person = z.infer<ReturnType<typeof zPerson>>;
export const zPerson = ({ image }: SchemaContext) =>
  z.object({
    name: z.string(),
    picture: image().optional(),
    job: z.string().optional(),
    socials: z
      .array(
        z.object({
          type: zSocialTypes,
          href: z.string().url(),
        })
      )
      .optional(),
    status: z.enum(['current', 'advisor', 'former']).optional(),
    order: z.number().optional(),
  });
