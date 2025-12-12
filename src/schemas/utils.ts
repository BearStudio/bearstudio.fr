import { z } from 'astro:content';

export type SocialType = z.infer<typeof zSocialTypes>;
export const zSocialTypes = z.enum([
  'x',
  'linkedin',
  'instagram',
  'github',
  'bluesky',
  'mastodon',
  'facebook',
  'website',
]);

export type VideoIntegration = z.infer<ReturnType<typeof zVideoIntegration>>;
export const zVideoIntegration = () =>
  z.object({
    type: z.enum(['youtube']),
    youtubeId: z.string(),
  });
