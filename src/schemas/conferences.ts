import { reference, z, type SchemaContext } from 'astro:content';

export type Conference = z.infer<ReturnType<typeof zConference>>;
export const zConference = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    image: image().optional(),
    excerpt: z.string().optional(),
    metaDescription: z.string().optional(),
    instances: z.array(zConferenceInstance()).optional(),
  });

export type ConferenceInstance = z.infer<
  ReturnType<typeof zConferenceInstance>
>;
export const zConferenceInstance = () =>
  z.object({
    date: z.date(),
    name: z.string().optional(),
    link: z.string().optional(),
    language: z.string().optional(),
    speakers: z.array(reference('people')).optional(),
    replay: z.string().url().optional(),
  });
