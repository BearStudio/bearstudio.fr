---
title: '"J''ai fait ça en moins de 2 heures avec l''IA" : pourquoi ce message Slack ne nous fait plus peur'
date: 2026-04-02
categories:
  - 'rex'
  - 'actualites-web-numerique'
tags:
  - 'ia'
  - 'temoignage'
  - 'web'
  - 'developpement'
metaDescription: "Pourquoi le message Slack d'un client qui a prototypé une fonctionnalité en 2h avec l'IA ne nous fait plus peur, et comment il redéfinit notre métier de développeurs."
excerpt: "Un client nous envoie un message Slack : il a prototypé un tchat en 2 heures avec l'IA. Panique ? Non. Voici comment cet épisode a transformé notre vision du métier, du rôle de constructeur à celui de garant."
authors:
  - 'heloise-guillaume'
---

Ce n'est pas arrivé au cours d'une confrontation tendue en salle de réunion mais juste une notification Slack, un mardi comme un autre.

Nous avions estimé des tickets pour un client (que nous allons appeler « Client A »). Parmi ceux-ci, nous avons identifié deux fonctionnalités comme étant du « travail conséquent », nécessitant du temps, des tests et du budget. Puis, on a vu la fameuse notification dans le canal.

Client A a expérimenté de son côté une version de l'application comme projet annexe. Il a partagé l'image d'un tchat entièrement fonctionnel avec un indicateur de saisie, accompagnée du message suivant :

> Par curiosité, j'ai testé la création d'un tchat hier. Voici le résultat en moins de 2 heures.

Pour une équipe de développement, voir une fonctionnalité estimée à plusieurs jours de travail apparaître en « moins de 2 heures » peut provoquer un moment de panique. Sommes-nous trop lents ? Notre expertise est-elle en train de devenir obsolète ? Même notre canal interne s'est animé : « Attends, est-ce qu'on utilise suffisamment ces outils ? Est-ce qu'on est en retard ? »

![This is fine](./images/this-is-fine-meme.jpg)

Mais Client A ne cherchait pas à nous piéger. Il ne nous demandait pas de copier-coller aveuglément une génération IA. En réalité, nous n'avons même jamais vu son code, seulement l'interface. Son message était en fait une invitation : il avait confiance en notre capacité à construire une application robuste et maintenable, mais il souhaitait nous pousser à exploiter cette même vitesse brute pour accélérer le processus.

## Client A n'est pas une exception. Il est la nouvelle norme.

Depuis l'arrivée de l'IA générative, nous observons un changement dans la manière dont les clients interagissent avec nous.

Ils ne sont plus seulement des « prescripteurs » ; ils deviennent des « créateurs ».

Certains, comme Client A, utilisent l'IA pour prototyper des visions qu'ils souhaitent nous voir industrialiser.

D'autres vont plus loin et veulent « vibe coder » avec nous, produire des fonctionnalités en temps réel tout en attendant de nous que nous garantissions la stabilité de l'ensemble.

Chez BearStudio, nous avons compris que nous ne pouvions pas ignorer cette évolution. Nous devions passer du rôle de « constructeurs » à celui de « garants ».

**Dans ce premier article, je souhaite montrer comment nous adaptons notre modèle de service à des clients qui codent parfois plus vite que nous, et pourquoi ils ont malgré tout plus que jamais besoin de nous.**

## Le prototype « fantôme » : de gardiens à garants

Pour comprendre pourquoi cette interaction avec Client A a été un tournant, il faut revenir à la manière dont nous (et toute l'industrie) fonctionnions encore il y a deux ans.

### L'ancien modèle : le jeu de la « discovery »

Avant l'IA, lorsqu'un client souhaitait une fonctionnalité complexe comme un système de tchat, on jouait à une sorte de téléphone arabe. Comme dans ce jeu où un message est chuchoté de personne en personne et se déforme progressivement, l'idée initiale du client évoluait, perdait en clarté ou se transformait au fil des intermédiaires (Product Owner, Designer, Développeur). Chaque étape impliquait une interprétation, avec son lot de malentendus et de dérives par rapport à la vision d'origine.

C'était un processus conçu pour limiter les risques, mais il était lent.

Si un client arrivait avec son propre code, nous étions les « gardiens ». Nous regardions généralement ses tentatives amateurs, sourions poliment, les mettions de côté, puis réécrivions tout depuis zéro. Nous facturions le « quoi » (la fonctionnalité) et le « comment » (le code).

### Le basculement : l'incident Client A

Puis est arrivé le message Slack de Client A. Il ne s'était pas contenté de décrire le tchat ; il l'avait construit.

Lorsqu'il nous a proposé de nous montrer sa « plateforme admin » et le tchat qu'il avait développé en moins de 2 heures, il était en réalité un peu inquiet. Il plaisantait en disant qu'il ressentait « une grosse pression », car il savait que son code n'était pas de niveau professionnel.

C'est à ce moment-là que notre perception a changé. En interne, la réaction a été brute :

> Si un client peut générer une interface en une pause déjeuner, que sommes-nous en train de facturer ?

Mais lors de l'échange, la dynamique s'est inversée. Client A n'a pas dit : « J'ai fait votre travail. »

Il a dit : « Je peux vous montrer le reste, et vous pourrez me dire à quel point l'IA a probablement mal fait les choses. »

Il ne voulait plus que nous construisions le tchat. Il avait déjà « construit » la vision.

**Il voulait que nous la professionnalisions.**

### Le futur : le prototype EST la spécification

Cette expérience nous a forcés à accepter une nouvelle réalité : le « prototype fantôme » n'est pas un concurrent, c'est la spécification ultime.

Au lieu de passer des jours sur des user stories abstraites (« En tant qu'utilisateur, je veux voir un indicateur de saisie »), nous regardions simplement son écran. L'ambiguïté disparaissait.

- **Avant** : nous estimions 10 jours pour comprendre le besoin et le construire.
- **Aujourd'hui** : nous estimons 5 jours, dont 0 % consacré à deviner, et 100 % dédié à l'architecture, à la sécurité et à l'intégration, le tout accéléré par l'usage de l'IA dans le code.

Le code généré par l’IA fonctionnait pour un prototype, mais ne couvrait pas toujours les exigences d’un environnement de production (robustesse, sécurité, passage à l’échelle) ni l’ensemble de nos bonnes pratiques.
Et c’est normal : ce n’était pas son rôle.
Sa vraie valeur était ailleurs : nous permettre de sauter la phase de « discovery » pour aller directement à l’« engineering ».

![Galaxy brain](./images/galaxy-brain.png)

## Comment cela nous prépare

C'est l'avenir de notre métier. Les clients ne viendront plus seulement avec des idées, mais avec des prototypes fonctionnels (mais imparfaits). Notre proposition de valeur évolue. Nous ne sommes plus ceux qui révèlent la magie du code (l'IA s'en charge désormais). Nous sommes ceux qui apportent la certitude de l'ingénierie.

**Nous passons du rôle de « constructeurs » à celui de « garants » : les experts capables de transformer une expérimentation excitante et risquée de 2 heures en un produit stable, fiable et rentable.**

Mais le cas de Client A reste relativement simple. Il développe dans son environnement, et nous dans le nôtre. Les deux codebases ne se croisaient jamais.

Que se passe-t-il lorsque le client ne veut plus seulement vous montrer la direction, mais souhaite conduire avec vous ?

On entre alors dans un second scénario, plus disruptif. Nous voyons émerger des équipes techniques qui ne se contentent plus de prototyper avec l'IA : elles livrent des fonctionnalités. Elles ont des budgets serrés, des délais agressifs, et une philosophie qui effraie les CTO traditionnels : le « vibe coding ».

Elles ne veulent pas que nous reconstruisions tout.

Elles veulent coder avec nous.

**Dans le prochain article, je détaillerais ce nouveau modèle de co-construction, ses risques, et les "guardrails" que nous avons mis en place pour éviter que la vitesse ne devienne du chaos.**
