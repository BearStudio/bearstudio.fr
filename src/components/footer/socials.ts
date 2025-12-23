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

type SocialItem = {
  icon: FC<{ className?: string }>;
  label: string;
  href: string;
};

export const SOCIALS = [
  {
    icon: PiLinkedinLogoDuotone,
    label: 'Linkedin',
    href: 'https://www.linkedin.com/company/bearstudio/',
  },
  {
    icon: PiXLogoDuotone,
    label: 'X (twitter)',
    href: 'https://twitter.com/_BearStudio',
  },
  {
    icon: PiFacebookLogoDuotone,
    label: 'Facebook',
    href: 'https://www.facebook.com/allyouneedisbear',
  },
  {
    icon: PiYoutubeLogoDuotone,
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UC-2hpnhKgU2C_OFucjEN0IA',
  },
  {
    icon: PiInstagramLogoDuotone,
    label: 'Instagram',
    href: 'https://www.instagram.com/_bearstudio/',
  },
  {
    icon: PiGithubLogoDuotone,
    label: 'GitHub',
    href: 'https://github.com/BearStudio',
  },
  {
    icon: PiTwitchLogoDuotone,
    label: 'Twitch',
    href: 'https://www.twitch.tv/bearstudiolive',
  },
] satisfies Array<SocialItem>;
