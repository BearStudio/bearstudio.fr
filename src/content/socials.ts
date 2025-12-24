import type { FC } from 'react';

import {
  PiFacebookLogoDuotone,
  PiGithubLogoDuotone,
  PiInstagramLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitchLogoDuotone,
  PiXLogoDuotone,
  PiYoutubeLogoDuotone,
} from 'react-icons/pi';

import type { SocialType } from '@/schemas/utils';

type SocialItem = {
  type: SocialType;
  icon: FC<{ className?: string }>;
  label: string;
  href: string;
};

export const SOCIALS = [
  {
    type: 'linkedin',
    icon: PiLinkedinLogoDuotone,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/bearstudio/',
  },
  {
    type: 'x',
    icon: PiXLogoDuotone,
    label: 'X (twitter)',
    href: 'https://twitter.com/_BearStudio',
  },
  {
    type: 'facebook',
    icon: PiFacebookLogoDuotone,
    label: 'Facebook',
    href: 'https://www.facebook.com/allyouneedisbear',
  },
  {
    type: 'youtube',
    icon: PiYoutubeLogoDuotone,
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC-2hpnhKgU2C_OFucjEN0IA',
  },
  {
    type: 'instagram',
    icon: PiInstagramLogoDuotone,
    label: 'Instagram',
    href: 'https://www.instagram.com/_bearstudio/',
  },
  {
    type: 'github',
    icon: PiGithubLogoDuotone,
    label: 'GitHub',
    href: 'https://github.com/BearStudio',
  },
  {
    type: 'twitch',
    icon: PiTwitchLogoDuotone,
    label: 'Twitch',
    href: 'https://www.twitch.tv/bearstudiolive',
  },
] satisfies Array<SocialItem>;
