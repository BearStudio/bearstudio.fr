import { configure } from '@bearstudio/astro-assets-generation';

export const THEME = {
  ACCENT: '#ffbf0f', // accent-500
  BG_DARK: '#0a2f39', // brand-900
  BG_DARKER: '#08242b', // brand-950
  BRAND: '#3896a8', // brand-500
  TEXT_PRIMARY: '#ffffff',
  TEXT_SECONDARY: 'rgba(255, 255, 255, 0.7)',
  TEXT_MUTED: 'rgba(255, 255, 255, 0.45)',
} as const;

configure({
  debugBackground: '#0a0a0a',
  siteUrl: import.meta.env.SITE ?? 'http://localhost:4321',
  isDev: import.meta.env.DEV,
  customFonts: [
    {
      name: 'Roboto',
      style: 'normal',
      url: '/fonts/RobotoSlab-Bold.ttf',
      weight: 700,
    },
    {
      name: 'Inter',
      style: 'normal',
      url: '/fonts/Inter.ttf',
      weight: 500,
    },
  ],
});
