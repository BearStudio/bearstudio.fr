import { getEntry } from 'astro:content';

import { isNonNullish } from 'remeda';

import type { Locale } from '@/i18n/utils';

export async function getSkillsCollectionWithIcons(
  skills: Array<string>,
  locale: Locale
) {
  return (
    await Promise.all(
      skills.map(async (skillName) => {
        const skill = await getEntry('skills', `${skillName}/${locale}`);
        if (!skill) return null;
        const icon = await getEntry(skill.data.icon);
        return {
          ...skill,
          icon,
        };
      })
    )
  ).filter((skill) => isNonNullish(skill));
}
