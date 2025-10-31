import { getCollection, type CollectionEntry } from 'astro:content';

type Params = {
  limit?: number;
};

type TeamEntry = CollectionEntry<'team'>;
const isVisible = (person: TeamEntry) => !person.data.hidden;

const sortByOrder = (person1: TeamEntry, person2: TeamEntry) => {
  if (person1.data.order === undefined && person2.data.order === undefined) {
    return 0;
  }

  if (person1.data.order === undefined) {
    return 1;
  }

  if (person2.data.order === undefined) {
    return -1;
  }

  return person1.data.order - person2.data.order;
};

export async function getTeamCollection({ limit = undefined }: Params = {}) {
  const team = (await getCollection('team'))
    .filter(isVisible)
    .sort(sortByOrder);

  return team.slice(0, limit);
}
