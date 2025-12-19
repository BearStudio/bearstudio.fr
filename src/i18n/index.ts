import en from './en.json';
import fr from './fr.json';

export const defaultLocale = 'fr';
export const locales = ['fr', 'en'] as const;

export const translations = { fr, en } as const;
