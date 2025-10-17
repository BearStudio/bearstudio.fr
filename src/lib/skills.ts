import { getCollection } from 'astro:content';

type Params = {
  limit?: number;
};

export async function getSkillsCollection({ limit = undefined }: Params = {}) {
  const skills = await getCollection('skills');

  if (limit) {
    return skills.slice(0, limit);
  }

  return skills;
}
