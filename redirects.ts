import type { Locale } from '@/i18n/utils';

type Redirect = {
  source: `/${string}`;
  destination: `/${Locale}` | `/${Locale}/${string}`;
  statusCode: 301 | 308;
};

export const categories = [
  {
    source: '/blog',
    destination: '/fr/blog',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique',
    destination: '/fr/blog',
    statusCode: 301,
  },
  {
    source: '/blog/design-css',
    destination: '/fr/blog',
    statusCode: 301,
  },
  {
    source: '/blog/developpement',
    destination: '/fr/blog',
    statusCode: 301,
  },
  {
    source: '/blog/entrepreneuriat',
    destination: '/fr/blog',
    statusCode: 301,
  },
] satisfies Array<Redirect>;

export const pages = [
  { source: '/contact', destination: '/fr/contact', statusCode: 301 },
  { source: '/bearcon-mai-2020-djerba', destination: '/fr', statusCode: 301 },
  { source: '/team', destination: '/fr/equipe', statusCode: 301 },
  {
    source: '/en/services/ux-design/mockups',
    destination: '/en/services/ux-design',
    statusCode: 301,
  },
  {
    source: '/en/ask-your-free-mini-audit-ux',
    destination: '/en/contact',
    statusCode: 301,
  },
  {
    source: '/en/services/dev-back',
    destination: '/en/services/web-development',
    statusCode: 301,
  },
  {
    source: '/en/services/dev-front',
    destination: '/en/services/web-development',
    statusCode: 301,
  },
  {
    source: '/en/services/integration',
    destination: '/en/services/web-development',
    statusCode: 301,
  },
  {
    source: '/en/services/ux-design/audit-ux',
    destination: '/en/services/ux-design',
    statusCode: 301,
  },
  {
    source: '/en/services/ux-design/graphiccharter',
    destination: '/en/services/ux-design',
    statusCode: 301,
  },
  {
    source: '/en/services/ux-design/moodboard',
    destination: '/en/services/ux-design',
    statusCode: 301,
  },
  {
    source: '/en/services/ux-design/wireframes',
    destination: '/en/services/ux-design',
    statusCode: 301,
  },
  {
    source: '/en/adventures-of-bearstudio-traveledmap',
    destination: '/en',
    statusCode: 301,
  },
  {
    source: '/periples-du-bearstudio-traveledmap',
    destination: '/fr',
    statusCode: 301,
  },
  {
    source: '/prestations',
    destination: '/fr/prestations',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design/wireframes',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design/maquettes',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design/audit-ux',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design/charte-graphique',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/prestations/integration',
    destination: '/fr/prestations/developpement-web',
    statusCode: 301,
  },
  {
    source: '/prestations/dev-front',
    destination: '/fr/prestations/developpement-web',
    statusCode: 301,
  },
  {
    source: '/prestations/dev-back',
    destination: '/fr/prestations/developpement-web',
    statusCode: 301,
  },
  {
    source: '/prestations/ux-design/moodboard',
    destination: '/fr/prestations/ux-design',
    statusCode: 301,
  },
  {
    source: '/demandez-votre-mini-audit-ux-gratuit',
    destination: '/fr/contact',
    statusCode: 301,
  },
  {
    source: '/mentions-legales',
    destination: '/fr/mentions-legales',
    statusCode: 301,
  },

  {
    source: '/contact/processus-candidature-bearstudio',
    destination: '/fr/contact/processus-candidature-bearstudio',
    statusCode: 301,
  },
] satisfies Array<Redirect>;

export const articles = [
  {
    source: '/blog/actualites-web-numerique/digital-vs-numerique',
    destination: '/fr/blog/articles/digital-vs-numerique',
    statusCode: 301,
  },
  {
    source:
      '/blog/entrepreneuriat/comment-deleguer-la-responsabilite-pour-les-augmentations',
    destination:
      '/fr/blog/articles/comment-deleguer-la-responsabilite-pour-les-augmentations',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/quotidien-du-bearstudio-en-video',
    destination: '/fr/blog/articles/quotidien-du-bearstudio-en-video',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/coulisses-bearstudio-temps-de-crise-projet-suivi-malades-covid',
    destination:
      '/fr/blog/articles/coulisses-bearstudio-temps-de-crise-projet-suivi-malades-covid',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/le-b-b-cest-quoi',
    destination: '/fr/blog/articles/le-b-b-cest-quoi',
    statusCode: 301,
  },
  {
    source: '/blog/entrepreneuriat/vous-avez-dit-productivite',
    destination: '/fr/blog/articles/vous-avez-dit-productivite',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/votre-api-est-elle-vraiment-restful',
    destination: '/fr/blog/articles/votre-api-est-elle-vraiment-restful',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/bug-bounty-solidarity',
    destination: '/fr/blog/articles/bug-bounty-solidarity',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/la-team-du-bearstudio-a-la-jhipster-code',
    destination: '/fr/blog/articles/la-team-du-bearstudio-a-la-jhipster-code',
    statusCode: 301,
  },
  {
    source: '/blog/entrepreneuriat/breve-8-cii',
    destination: '/fr/blog/articles/breve-8-cii',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/on-a-des-developpeurs-tunisiens',
    destination: '/fr/blog/articles/on-a-des-developpeurs-tunisiens',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/cap-sur-linternational-pour-le-bearstudio',
    destination: '/fr/blog/articles/cap-sur-linternational-pour-le-bearstudio',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/9-trucs-abstraction-quand-on-manage',
    destination: '/fr/blog/articles/9-trucs-abstraction-quand-on-manage',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/deployer-app-jhipster-sur-clever-cloud',
    destination: '/fr/blog/articles/deployer-app-jhipster-sur-clever-cloud',
    statusCode: 301,
  },
  {
    source:
      '/blog/entrepreneuriat/breve-7-finreka-recherche-aides-financieres-entreprises',
    destination:
      '/fr/blog/articles/breve-7-finreka-recherche-aides-financieres-entreprises',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/versionner-entite-jpa',
    destination: '/fr/blog/articles/versionner-entite-jpa',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/bemit',
    destination: '/fr/blog/articles/bemit',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/rex-stagiaire',
    destination: '/fr/blog/articles/rex-stagiaire',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/git',
    destination: '/fr/blog/articles/git',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/codeurs-en-seine-2019-des-devs-de-lux-et-de-lagilite',
    destination:
      '/fr/blog/articles/codeurs-en-seine-2019-des-devs-de-lux-et-de-lagilite',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/startup-lost-in-tech-la-communaute-des-devs-et-des-startupers',
    destination:
      '/fr/blog/articles/startup-lost-in-tech-la-communaute-des-devs-et-des-startupers',
    statusCode: 301,
  },
  {
    source: '/blog/entrepreneuriat/rex-4-ans-entrepreneuriat-au-bearstudio',
    destination: '/fr/blog/articles/rex-4-ans-entrepreneuriat-au-bearstudio',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/dette-technique-cout-sous-estime-des-projets-numeriques',
    destination:
      '/fr/blog/articles/dette-technique-cout-sous-estime-des-projets-numeriques',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/maitriser-dette-technique-projet-numerique',
    destination: '/fr/blog/articles/maitriser-dette-technique-projet-numerique',
    statusCode: 301,
  },
  {
    source: '/blog/entrepreneuriat/outils-incontournables-pour-un-entrepreneur',
    destination:
      '/fr/blog/articles/outils-incontournables-pour-un-entrepreneur',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/linux-logiciels-libres-et-open-source-retrouvez-votre-liberte',
    destination:
      '/fr/blog/articles/linux-logiciels-libres-et-open-source-retrouvez-votre-liberte',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/traveledmap-outil-indispensable-pour-vos-photos-de-voyage',
    destination:
      '/fr/blog/articles/traveledmap-outil-indispensable-pour-vos-photos-de-voyage',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/jhipster-generateur-projet-hipsters',
    destination: '/fr/blog/articles/jhipster-generateur-projet-hipsters',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/breve-1-rendre-une-methode-atomique-en-java-en-2-minutes',
    destination:
      '/fr/blog/articles/breve-1-rendre-une-methode-atomique-en-java-en-2-minutes',
    statusCode: 301,
  },
  {
    source:
      '/blog/entrepreneuriat/comment-se-faire-un-reseau-pour-trouver-un-premier-stage',
    destination:
      '/fr/blog/articles/comment-se-faire-un-reseau-pour-trouver-un-premier-stage',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/pourquoi-proposer-des-minis-audits-ux-gratuits',
    destination:
      '/fr/blog/articles/pourquoi-proposer-des-minis-audits-ux-gratuits',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/systeme-de-test-end-to-end-simple-complet-codeceptjs',
    destination:
      '/fr/blog/articles/systeme-de-test-end-to-end-simple-complet-codeceptjs',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/simplifier-ecriture-interface-utilisateur-react-js',
    destination:
      '/fr/blog/articles/simplifier-ecriture-interface-utilisateur-react-js',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/jhipster-une-technologie-qui-vous-fait-economiser-de-largent',
    destination:
      '/fr/blog/articles/jhipster-une-technologie-qui-vous-fait-economiser-de-largent',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/breve-9-mock-ou-mockbean',
    destination: '/fr/blog/articles/breve-9-mock-ou-mockbean',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/breve-10-bataille-du-cloud-les-alternatives-francaises',
    destination:
      '/fr/blog/articles/breve-10-bataille-du-cloud-les-alternatives-francaises',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/comment-deployer-une-application-sylius-chez-clever-cloud',
    destination:
      '/fr/blog/articles/comment-deployer-une-application-sylius-chez-clever-cloud',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/un-ours-en-finlande',
    destination: '/fr/blog/articles/un-ours-en-finlande',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/rust',
    destination: '/fr/blog/articles/rust',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/le-mot-du-chef-rudy-baer',
    destination: '/fr/blog/articles/le-mot-du-chef-rudy-baer',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/no-estimate',
    destination: '/fr/blog/articles/no-estimate',
    statusCode: 301,
  },
  {
    source:
      '/blog/entrepreneuriat/arretez-de-vous-faire-avoir-par-votre-agence-digitale',
    destination:
      '/fr/blog/articles/arretez-de-vous-faire-avoir-par-votre-agence-digitale',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/la-loi-de-proximite',
    destination: '/fr/blog/articles/la-loi-de-proximite',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/creer-identite-marque',
    destination: '/fr/blog/articles/creer-identite-marque',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/rex-deroulement-projet-ux-bearstudio',
    destination: '/fr/blog/articles/rex-deroulement-projet-ux-bearstudio',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/parcours-utilisateur-ux',
    destination: '/fr/blog/articles/parcours-utilisateur-ux',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/fos-apprentissage-francais-objectif-specifique',
    destination:
      '/fr/blog/articles/fos-apprentissage-francais-objectif-specifique',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/tailwind-nextjs',
    destination: '/fr/blog/articles/tailwind-nextjs',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/optimiser-images-site-web',
    destination: '/fr/blog/articles/optimiser-images-site-web',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/checklist-seo-technique',
    destination: '/fr/blog/articles/checklist-seo-technique',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/deployer-jhipster-java-17',
    destination: '/fr/blog/articles/deployer-jhipster-java-17',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/comment-organiser-une-journee-de-conference-avec-1000-personnes',
    destination:
      '/fr/blog/articles/comment-organiser-une-journee-de-conference-avec-1000-personnes',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/les-ours-au-camping-des-speakers-2023',
    destination: '/fr/blog/articles/les-ours-au-camping-des-speakers-2023',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/cest-quoi-la-minute-kikoo-de-renan',
    destination: '/fr/blog/articles/cest-quoi-la-minute-kikoo-de-renan',
    statusCode: 301,
  },
  {
    source:
      '/blog/design-css/pourquoi-lexperience-utilisateur-est-elle-importante',
    destination:
      '/fr/blog/articles/pourquoi-lexperience-utilisateur-est-elle-importante',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/peer-programming',
    destination: '/fr/blog/articles/peer-programming',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/les-bases-du-design-pour-dev-front',
    destination: '/fr/blog/articles/les-bases-du-design-pour-dev-front',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/le-canard-en-plastique-est-votre-ami',
    destination: '/fr/blog/articles/le-canard-en-plastique-est-votre-ami',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/difference-entre-class-et-record-en-java',
    destination: '/fr/blog/articles/difference-entre-class-et-record-en-java',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/le-bon-et-le-mauvais-chasseur-developpeur-les-soft-skills',
    destination:
      '/fr/blog/articles/le-bon-et-le-mauvais-chasseur-developpeur-les-soft-skills',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/lea-english-etude-de-cas',
    destination: '/fr/blog/articles/lea-english-etude-de-cas',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/du-code-au-coeur-nos-engagements-associatifs-annuels',
    destination:
      '/fr/blog/articles/du-code-au-coeur-nos-engagements-associatifs-annuels',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/love-letter-aux-side-projects',
    destination: '/fr/blog/articles/love-letter-aux-side-projects',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/decouvrir-le-mcp-une-nouvelle-approche-pour-vos-agents-ia',
    destination:
      '/fr/blog/articles/decouvrir-le-mcp-une-nouvelle-approche-pour-vos-agents-ia',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/java-pour-les-debutants-parfois-pour-les-experts-aussi',
    destination:
      '/fr/blog/articles/java-pour-les-debutants-parfois-pour-les-experts-aussi',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/gerer-facilement-le-contenu-de-votre-site-avec-outstatic',
    destination:
      '/fr/blog/articles/gerer-facilement-le-contenu-de-votre-site-avec-outstatic',
    statusCode: 301,
  },
  {
    source: '/blog/actualites-web-numerique/start-ui',
    destination: '/fr/blog/articles/start-ui',
    statusCode: 301,
  },
  {
    source: '/blog/developpement/pourquoi-on-a-cree-ui-state',
    destination: '/fr/blog/articles/pourquoi-on-a-cree-ui-state',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/les-coulisses-dun-teambuilding-a-disneyland-paris',
    destination:
      '/fr/blog/articles/les-coulisses-dun-teambuilding-a-disneyland-paris',
    statusCode: 301,
  },
  {
    source:
      '/blog/actualites-web-numerique/octobre-spooky-au-bearstudio-entre-commits-et-decorations',
    destination:
      '/fr/blog/articles/octobre-spooky-au-bearstudio-entre-commits-et-decorations',
    statusCode: 301,
  },
  {
    source: '/blog/design-css/etude-de-cas-ux-cuisinez-pour-bebe',
    destination: '/fr/blog/articles/etude-de-cas-ux-cuisinez-pour-bebe',
    statusCode: 301,
  },
  {
    source:
      '/blog/developpement/ficus-ui-ui-simple-et-composable-pour-react-native',
    destination:
      '/fr/blog/articles/ficus-ui-ui-simple-et-composable-pour-react-native',
    statusCode: 301,
  },
] satisfies Array<Redirect>;

export const members = [
  {
    source: '/team/youen-chene',
    destination: '/fr/equipe/youen-chene',
    statusCode: 301,
  },
  {
    source: '/team/nicolas-greverie',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/asceline-boullen',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/claire-jeanne',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/mohamed-amin-ziraoui',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/delphin-batantou',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/jessy-baer',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/zouhair-mkassmi',
    destination: '/fr/equipe/zouhair-mkassmi',
    statusCode: 301,
  },
  {
    source: '/team/soraya-benchakroune',
    destination: '/fr/equipe/soraya-benchakroune',
    statusCode: 301,
  },
  {
    source: '/team/gregoire-protas',
    destination: '/fr/equipe/gregoire-protas',
    statusCode: 301,
  },
  {
    source: '/team/nhung-duong',
    destination: '/fr/equipe/nhung-duong',
    statusCode: 301,
  },
  {
    source: '/team/david-endico',
    destination: '/fr/equipe/david-endico',
    statusCode: 301,
  },
  {
    source: '/team/renan-decamps',
    destination: '/fr/equipe/renan-decamps',
    statusCode: 301,
  },
  {
    source: '/team/yoann-fleury',
    destination: '/fr/equipe/yoann-fleury',
    statusCode: 301,
  },
  {
    source: '/team/ivan-dalmet',
    destination: '/fr/equipe/ivan-dalmet',
    statusCode: 301,
  },
  {
    source: '/team/clement-michel',
    destination: '/fr/equipe/clement-michel',
    statusCode: 301,
  },
  {
    source: '/team/fabien-essid',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/dorian-delorme',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/hugo-perez',
    destination: '/fr/equipe/hugo-perez',
    statusCode: 301,
  },
  {
    source: '/team/luis-rubiera',
    destination: '/fr/equipe/luis-rubiera',
    statusCode: 301,
  },
  {
    source: '/team/deelan-mahabirsingh',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/margot-vermeulen',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/violaine-moonesawmy',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/rudy-baer',
    destination: '/fr/equipe/rudy-baer',
    statusCode: 301,
  },
  {
    source: '/team/florian-gille',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/charlelise-fouasse',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/jeanne-grenet',
    destination: '/fr/equipe/jeanne-grenet',
    statusCode: 301,
  },
  {
    source: '/team/noe-tatoud',
    destination: '/fr/equipe/noe-tatoud',
    statusCode: 301,
  },
  {
    source: '/team/marie-douet',
    destination: '/fr/equipe/marie-douet',
    statusCode: 301,
  },
  {
    source: '/team/mariem-mkassmi',
    destination: '/fr/equipe/mariem-mkassmi',
    statusCode: 301,
  },
  {
    source: '/team/houssem-balti',
    destination: '/fr/equipe/houssem-balti',
    statusCode: 301,
  },
  {
    source: '/team/dylan-campbell',
    destination: '/fr/equipe/dylan-campbell',
    statusCode: 301,
  },
  {
    source: '/team/dylan-flandrin',
    destination: '/fr/equipe/dylan-flandrin',
    statusCode: 301,
  },
  {
    source: '/team/aziz-ouertani',
    destination: '/fr/equipe/aziz-ouertani',
    statusCode: 301,
  },
  {
    source: '/team/heloise-guillaume',
    destination: '/fr/equipe/heloise-guillaume',
    statusCode: 301,
  },
  {
    source: '/team/quentin-lerebours',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/sandrine-auber-lardans',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/omar-borji',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/paul-smacque',
    destination: '/fr/equipe/paul-smacque',
    statusCode: 301,
  },
  {
    source: '/team/hugo-perard',
    destination: '/fr/equipe/hugo-perard',
    statusCode: 301,
  },
  {
    source: '/team/nicolas-torion',
    destination: '/fr/equipe/nicolas-torion',
    statusCode: 301,
  },
  {
    source: '/team/alexandra-pituru',
    destination: '/fr/equipe',
    statusCode: 301,
  },
  {
    source: '/team/hend-fellah',
    destination: '/fr/equipe/hend-fellah',
    statusCode: 301,
  },
] satisfies Array<Redirect>;
