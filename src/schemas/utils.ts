import { z, type SchemaContext } from 'astro:content';

export type SocialType = z.infer<typeof zSocialTypes>;
export const zSocialTypes = z.enum([
  'x',
  'linkedin',
  'instagram',
  'github',
  'bluesky',
  'mastodon',
  'facebook',
  'youtube',
  'twitch',
  'website',
]);

export type Image = z.infer<ReturnType<typeof zImage>>;
export const zImage = ({ image }: SchemaContext) =>
  z.object({
    image: image(),
    alt: z.string().default(''),
  });
