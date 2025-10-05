import { reference, z, type SchemaContext } from 'astro:content';

export type Conference = z.infer<ReturnType<typeof zConference>>;
// Un sujet de conférence, réutilisable pour plusieurs évènements
export const zConference = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    image: image().optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    metaDescription: z.string().optional(),
    instances: z.array(zConferenceInstance({ image })).optional(),
    state: z.enum(['draft', 'published']).default('draft'),
  });

export type ConferenceInstance = z.infer<
  ReturnType<typeof zConferenceInstance>
>;
export const zConferenceInstance = ({ image }: SchemaContext) =>
  z.object({
    event: reference('events').optional(), // TODO: link to event (many to one)
    date: z.date().optional(),
    language: z.string().optional(),
    speakers: z.array(z.string()).optional(), // TODO: link to team members (many to many)
    replayLink: z.string().optional(),
    location: z
      .object({
        name: z.string(),
        address: z.string().optional(),
        image: image().optional(),
      })
      .optional(),
  });
