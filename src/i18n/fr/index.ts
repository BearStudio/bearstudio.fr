import 'dayjs/locale/fr';

import blog from './blog.json';
import common from './common.json';
import contact from './contact.json';
import home from './home.json';
import legal from './legal.json';
import notFound from './notFound.json';
import services from './services.json';
import team from './team.json';

export default {
  common,
  blog,
  home,
  legal,
  notFound,
  services,
  team,
  contact,
} as const;
