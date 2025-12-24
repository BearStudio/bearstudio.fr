import { z, type SchemaContext } from 'astro:content';

import { zSocialTypes } from '@/schemas/utils';

export type TeamMember = z.infer<ReturnType<typeof zTeamMember>>;
export const zTeamMember = ({ image }: SchemaContext) =>
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
    // TODO: Add fields for conferences, projects, publications, etc.
  });
