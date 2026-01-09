---
title: 'Maitriser la dette technique de son projet numérique'
date: 2020-01-22
categories:
  - 'developpement'
tags:
  - 'developpement'
  - 'developpement-web'
  - 'rex'
heroImage: 'images/maitriser-sa-dette-technique.png'
metaDescription: 'Quelques conseils pour maîtriser la dette technique de son projet, entre anticipation et choix des bonnes technologies par les développeurs.'
excerpt: 'Dans notre précédent article sur la dette technique, je présentais le concept en prenant quelques exemples. Voici maintenant quelques conseils pour maîtriser cette dette sur son projet. Anticiper la dette technique Tout d’abord, il est important de savoir quel niveau de dette technique vous attendez. Pour cela, il faut vous demander si vous développez un [&hellip;]'
authors:
  - 'quentin-lerebours'
---

Dans notre [précédent article sur la dette technique](/fr/blog/articles/dette-technique-cout-sous-estime-des-projets-numeriques), je présentais le concept en prenant quelques exemples. Voici maintenant quelques c**onseils pour maîtriser cette dette** sur son projet.

## Anticiper la dette technique

Tout d’abord, il est important de savoir **quel niveau de dette technique** vous attendez. Pour cela, il faut vous demander si vous développez un POC, une V1 ou un produit “final”. Il faut comprendre qu’un POC aura une dette technique plus élevée car l’objectif est de développer un projet rapidement, qui réponde au besoin, et avec le coût le moins élevé possible. Il servira à tester le marché et sera soit jeté à la poubelle pour une V1, soit revu en grande partie, il n’est donc pas nécessaire d’être trop exigeant sur la qualité de code par exemple.

En ce qui concerne une V1 ou un MVP, il faut savoir qu’il peut être amené à servir plus d’une année, il ne faut donc pas se permettre trop de liberté. Cependant, **il faut savoir prendre des décisions qui amèneront à avoir une dette technique**, si ces décisions ont un apport sur le business par exemple. Le tout est qu’il s’agisse de décisions prises consciemment.

Un produit final, quant à lui, a tendance à être utilisé par un grand nombre d’utilisateurs, dans le cadre d’une entreprise avancée qui n’en est souvent plus à sa phase StartUp. Il est donc primordial de limiter la dette technique des fonctionnalités principales en ayant un process de [test](/fr/blog/articles/systeme-de-test-end-to-end-simple-complet-codeceptjs), en **optimisant le code**, en écrivant une **documentation maintenue à jour**, et surtout en migrant le code vers de nouvelles technologies quand c’est nécessaire.

## Choisir ses technologies

### Comment choisir des technologies limitant la dette technique ?

Il faut savoir que certaines technologies amènent une dette dès le début du projet. C’est le cas des technologies qui ont une **courte durée de vie** par exemple, il sera nécessaire de rapidement migrer vers d’autres technologies. Pour éviter ces problèmes, il est préférable de choisir des **frameworks ou librairies** qui ont une communauté conséquente ou qui sont supportés et utilisés par de grosses entreprises qui y sont fortement liées. De cette manière, l’entreprise apportera des ressources pour la maintenir. 

Pour limiter la dette technique apportée par les technologies, il est aussi nécessaire de choisir celles ayant une bonne “expérience développeur”. À mon sens, l’**expérience développeur permet d’augmenter la durée de vie** d’une technologie qui est alors très utilisée par la communauté, mais aussi d’augmenter la **qualité des développements** en simplifiant ces derniers.

Pour répondre à la question initiale sur “comment choisir”, je dirais qu’il faut s’assurer que les personnes choisissant un outil ont une **expérience** avec, et qu’ils l’ont déjà comparé à des outils similaires. Il vous sera impossible de dire si un tournevis à manche en bois est meilleur qu’un tournevis à manche en plastique sans avoir testé les deux pendant un certain temps. Le raisonnement est le même pour les technologies et outils de développement.

![Maitriser sa dette technique](images/maitriser-sa-dette-technique.png)

## Monter en compétences

Mon troisième conseil est simple mais n’est pas évident pour tout le monde. Si des personnes ayant peu d’expérience travaillent sur un projet, il est nécessaire de s’assurer que leur travail soit supervisé. Il peut s’agir de stagiaires, d’alternants, de développeurs juniors ou encore de nouveaux arrivants expérimentés mais ne connaissant pas les processus de l’entreprise.

Si vous gérez une entreprise et que vous n’avez pas les moyens d’employer un développeur sénior, il est possible de prendre de la [prestation auprès d’entreprises](/prestations) telles que le BearStudio pour **encadrer les développeurs junior** et mettre en place les premiers processus de l’entreprise.

Ayant développé 3 projets d’entreprise dont deux en tant qu'étudiant / développeur junior, je vous conseille fortement de **vous faire accompagner** si vous n’avez pas de développeur expérimenté au sein de votre entreprise. J’écrirai prochainement un article de retour de l’expérience sur ce que le BearStudio m’a apporté en tant que développeur et entrepreneur.

## Qualité de code

Je ne m’attarderai pas sur ce point, mais diminuer la dette technique (en tant que développeur) nécessite forcément de connaître et appliquer quelques principes de la qualité de code :

- **Lisibilité :** Le code doit être lisible pour être relu et compris facilement, par d’autres développeurs ou pour soi même quelques semaines après son écriture.
- **Maintenabilité :** Le code doit être maintenable, c’est-à-dire qu’il ne doit pas être nécessaire de le réécrire pour apporter de petites modifications.
- **Simplicité :** Plus un code est simple, plus il est lisible et maintenable.
- **Factorisé :** C’est le fait de mettre du code en commun entre différentes parties de l’application, de façon à pouvoir le réutiliser, augmenter sa maintenabilité et améliorer sa lisibilité.
- **Ne pas réinventer la roue :** Réinventer la roue, c’est développer de la logique qui existe déjà ailleurs, ce qui amène des bugs, une perte de temps et une augmentation de la quantité de code, le rendant moins lisible et plus compliqué à comprendre.

Pour finir, je tiens tout de même à attirer votre attention sur le fait que mes conseils portent en majeure partie sur la **diminution de la dette technique**. Cependant, le meilleur conseil que je puisse donner, c’est qu’il est dangereux de ne pas avoir de dette technique du tout. Cela signifierait que vous réalisez un projet de grande qualité, qui nécessite donc un gros budget à y allouer. Si votre entreprise n’a pas ce budget, **essayez de prendre du recul** pour vous assurer que vous n’êtes pas en train de saboter votre projet.
