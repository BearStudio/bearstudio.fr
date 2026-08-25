import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

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

export type SkillWithComputed = Awaited<ReturnType<typeof skillWithComputed>>;

const skillWithComputed = async (item: CollectionEntry<'skills'>) => {
  const slug = item.filePath?.split('/').at(-2) ?? 'unknown';
  const icon = await getEntry(item.data.icon);
  return {
    ...item,
    icon,
    data: {
      ...item.data,
      _computed: {
        slug,
      },
    },
  };
};

export async function getSkillsCollection(params: { locale: Locale }) {
  const skills = await Promise.all(
    (await getCollection('skills'))
      .filter((item) => {
        const itemLocale = item.filePath
          ?.split('/')
          .at(-1)
          ?.replace('.mdx', '')
          .replace('.md', '');
        return itemLocale === params.locale;
      })
      .map(skillWithComputed)
  );

  return skills;
}

export async function getSkillSlugInOtherLocale(
  item: SkillWithComputed,
  targetLocale: Locale
) {
  const id = item.filePath?.split('/').at(-2);
  const rawTargetItem = (
    await getSkillsCollection({ locale: targetLocale })
  ).find((i) => {
    const _id = i.filePath?.split('/').at(-2);
    return id === _id;
  });
  if (!rawTargetItem) return null;
  return rawTargetItem.data._computed.slug ?? id;
}
