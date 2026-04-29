---
title: 'IA & Client : les "Vibecodeurs"'
date: 2026-04-02
categories:
  - 'ia'
tags:
  - 'ia'
  - 'rex'
  - 'vibe-coding'
  - 'collaboration'
metaDescription: "Comment nous avons adapté nos processus pour collaborer avec des clients qui vibe codent leurs fonctionnalités avec l'IA."
excerpt: "Le client veut vibe coder avec nous. Première réaction : soupir. Mais s'adapter ou disparaître. Voici comment nous avons reconstruit notre processus de production autour d'un nouveau principe : nous ne sommes plus les auteurs de chaque ligne de code, nous en sommes les éditeurs."
thumbnail:
  image: 'images/thumbnail.jpg'
  alt: "Illustration d'un homme travaillant sur un écran généré par IA et d'un ours polaire."
authors:
  - 'heloise-guillaume'
---

## Dans l'article précédent

Dans le premier article, j'ai présenté comment nos clients utilisent désormais l'IA pour prototyper leurs idées, transformant ces "shadow prototypes" en véritables spécifications.

Mais une nouvelle étape commence lorsque les clients ne se contentent plus de montrer... mais veulent **construire avec nous**.

## Faire face à la vague de clients "vibecodeurs" : comment on a dû s'adapter

Le cas de Client A était une première étape : accepter l'IA comme un outil de spécification. Mais avec un autre client (appelons-les "Team B"), nous avons fait face à une réalité bien plus chaotique.

Ils évoluent avec les mêmes contraintes budgétaires, mais cherchent à livrer davantage de fonctionnalités en travaillant avec nous plutôt qu'en nous remplaçant. Leur objectif est de nous confier le travail lourd, transverse et orienté maintenance, tout en conservant l'autonomie nécessaire pour traiter eux-mêmes des tickets de backlog restés en attente. Cette approche leur permet d'adresser des sujets qu'ils ne pouvaient pas prioriser auparavant, tout en s'appuyant sur nous pour la revue et le cadrage lorsque nécessaire.

Le problème ? Ils ne nous avaient rien dit au départ. Un jour, ils m'ont simplement envoyé une pull request entièrement "vibe codée", sans contexte, sans description de ticket, et sans même qu'elle soit référencée dans le backlog.

Première réaction ? La confusion. J'ai passé des heures à analyser le code, à tenter de reconstituer l'intention, l'impact et ce qui devait être testé. Ce n'était pas soutenable. Je ne pouvais pas simplement "corriger" leur code ; j'avais besoin que nous corrigions la collaboration.

Finalement, ils sont revenus vers nous avec une proposition qui ferait frémir la plupart des développeurs traditionnels :

> Nous n'avons pas le budget pour que vous construisiez tout. Nous voulons "vibe coder" des fonctionnalités avec vous. Vous gérez le coeur du système, nous gérons le reste.

Le réflexe initial :

![annoyed](images/annoyed.jpg)

Il y a deux ans, notre réponse aurait été de fortement décourager cette approche, à cause du coût de revue et de maintenance.

Dans un modèle d'agence traditionnel, l'équipe de développement est en charge du code en production. Les contributions sont donc strictement contrôlées pour garantir cohérence, fiabilité et sécurité. Toute modification externe peut introduire des défauts ou des risques dont l'équipe reste responsable, rendant ce type de contribution difficilement viable.

Mais comme le dit souvent Rudy : **« S'adapter ou disparaître. »**

Si nous avions refusé, Team B aurait simplement fait appel à un freelance peu regardant sur la qualité, ou aurait tout tenté de son côté... avec un crash probable quelques mois plus tard.

## Le nouveau processus : la stratégie des "guardrails"

Nous avons accepté le défi. Mais pour que cela fonctionne, nous avons dû déconstruire notre processus de production et le reconstruire autour d'un nouveau principe : **nous ne sommes plus les auteurs de chaque ligne de code, nous en sommes les éditeurs**.

Voici le workflow précis que nous avons mis en place pour survivre au "vibe coding" :

### 1. Le "pre-code check" (phase de planification)

Team B utilise Claude Code avec la fonctionnalité de planification. Désormais, au lieu de coder immédiatement, ils génèrent un plan. Nous intervenons à ce moment-là. Nous analysons leur brief et le plan proposé par l'IA. Nous itérons sur la logique avant qu'une seule ligne de code ne soit produite. Si le plan est mauvais, le code le sera aussi. Nous corrigeons le plan, pas le produit fini : on simplifie l'architecture, on optimise les process, on vérifie les différents cas métiers etc.

### 2. Le contexte est roi (agents.md)

On ne peut pas laisser une IA deviner l'architecture. Nous avons défini avec eux des règles strictes de contexte : fichiers agents.md, "skills", standards de code (linting, audits de sécurité). Nous avons, en quelque sorte, appris à leur IA à se comporter comme un développeur BearStudio. En parallèle, le client lui apprend ses règles métiers et son intention.

### 3. L'intégration plutôt que les tests unitaires

Historiquement, les tests unitaires étaient souvent limités par des contraintes de temps et de budget. Aujourd'hui, avec l'IA, nous pouvons en générer systématiquement, beaucoup plus rapidement, ce qui permet d'assurer un premier niveau de sécurité sans effort supplémentaire significatif.

En revanche, le véritable changement se situe au niveau des tests d'intégration. Nous renforçons fortement cette couche, car elle devient essentielle dans ce contexte.

Le client définit les scénarios de test, puisqu'il est à l'origine des fonctionnalités, et l'IA peut ensuite enrichir ces scénarios avec des cas limites ou des variantes auxquelles nous n'aurions pas forcément pensé.

Les tests locaux et avec le client en environnement de pré-production en sont d'autant plus efficaces que l'on a une première check list à vérifier.

### 4. La nouvelle approche des pull requests

Nous avons mis en place une auto-revue par IA pour les bases avec l'utilisation des skills de review : general, security, architecture... La revue humaine, elle, a changé de nature. Nous ne cherchons plus les erreurs de syntaxe (le linter s'en charge). Nous analysons la cohérence architecturale : est-ce maintenable ? Est-ce aligné avec l'existant ? Est-ce performant ?

### 5. Quand l'IA transforme la dette technique en accélérateur

Un autre signal fort est apparu avec Team B : la question des mises à jour majeures.

Depuis des années, nous recommandions une montée de version importante. Le projet a près de dix versions de node de retard. Comme souvent, ce sujet n'était jamais priorisé : aucun bénéfice visible, difficile à justifier côté business.

Mais récemment, la demande est revenue... initiée par le client lui-même, après recommandation de l'IA elle-même.

Ce n'est plus un sujet abstrait de "dette technique". C'est devenu un blocage concret à sa capacité d'expérimentation. Les outils modernes ne fonctionnent plus correctement, et certains assistants ne peuvent même pas exécuter les commandes de build sur un environnement obsolète.

**L'IA n'a pas créé le besoin technique. Elle l'a rendu visible et urgent.**

Pour la première fois, cette mise à niveau n'est plus perçue comme un coût, mais comme un accélérateur.

![fastTyping](images/fast-typing.jpg)

## Le bénéfice inattendu : dompter le legacy

Ce chaos a révélé une opportunité.

Le projet reposait sur un code legacy complexe, difficile même pour nos équipes.

Nous avons constaté que l'IA, bien guidée, pouvait naviguer dans cette complexité plus rapidement que nous. Là où il aurait fallu plusieurs jours d'analyse, certaines fonctionnalités sont générées en quelques heures.

Nous avons réalisé qu'en déléguant le "codage" à l'IA du client, nous allions plus vite, mais cela nous imposait d'accepter un changement de rôle.

**Nous ne sommes plus les seuls auteurs. Nous devenons les éditeurs en chef.**

## La règle d'or

Même avec les meilleurs processus, fichiers agents.md et revues automatisées en place, on ne peut pas simplement laisser une IA se balader librement dans l'ensemble du codebase. Pour que ce modèle de "co-construction" fonctionne, nous avons dû établir une règle d'or avec nos clients pour déterminer qui construit quoi.

Tout se résume au **rayon d'impact** d'une fonctionnalité. Nous divisons la roadmap en deux catégories : **Local** et **Transverse**.

### 1. Les fonctionnalités locales (terrain de jeu du client)

Les fonctionnalités locales sont isolées. Ce sont les composants UI autonomes, une page de paramètres spécifique, un nouveau widget de dashboard, ou une interface CRUD (Create, Read, Update, Delete) basique. L'IA excelle ici. La fenêtre de contexte requise est petite. Si l'IA du client hallucine ou écrit du code brouillon ici, le pire scénario est un bouton cassé ou une div mal alignée.

**Notre position : lâchez-vous.** "Vibe codez" ces fonctionnalités aussi vite que vous voulez. Tant que ça passe le linter et les contrôles de sécurité de base, nous mergeons.

### 2. Les fonctionnalités transverses (la forteresse BearStudio)

Les fonctionnalités transverses sont le système nerveux de l'application.

Cela inclut le routing, le state management, l'authentification, les schémas de base de données et les intégrations profondes avec le code legacy. Ces fonctionnalités touchent tout. Si vous modifiez un composant transverse, vous risquez une défaillance en cascade sur l'ensemble de l'application.

L'IA peine notoirement ici car elle ne peut pas facilement maintenir le modèle mental architectural complet d'un système complexe et multi-couches dans sa mémoire active.

**Notre position : cela reste sous notre responsabilité.** Un client peut proposer un plan pour une fonctionnalité transverse, mais il n'est pas autorisé à générer et pousser le code de manière indépendante.

### Le triage en action

Désormais, quand un client comme Team B veut utiliser son IA de planification, la première question que nous posons lors du "pre-code check" est : **Est-ce local ou transverse ?**

Si un membre de Team B veut construire l'UI de sa nouvelle fonctionnalité de tchat, il peut le faire en 2 heures. Mais quand ce tchat doit gérer des connexions WebSocket en temps réel, persister les données de manière sécurisée vers la plateforme d'administration, et se synchroniser avec la base de données utilisateurs legacy, l'équipe BearStudio intervient.

Cette distinction est ce qui sauve le projet de l'effondrement sous le poids de la dette technique générée par l'IA. Elle donne au client le plaisir de construire des fonctionnalités visibles à grande vitesse, tandis que nous veillons silencieusement à ce que les fondations ne craquent jamais.

![safe](images/safe.jpg)

## Ce que cela change pour l'avenir

Ce modèle hybride avec Team B n'était pas une simple expérience ponctuelle ; c'était un aperçu de l'avenir de notre industrie. Nous avons découvert que lorsque nous cessons de lutter contre le désir du client de coder, nous débloquons un gain d'efficacité massif.

- **Ils se sentent autonomes :** Ils peuvent modifier la couleur d'un bouton ou ajouter un champ texte en 10 minutes sans nous payer une heure de travail.
- **Nous restons concentrés :** Libérés des modifications UI triviales, les développeurs se concentrent uniquement sur l'architecture de haut niveau et la logique complexe (le travail qui nécessite réellement une expertise humaine).

Nous entrons dans une ère où notre valeur ne se mesure plus au volume de code que nous écrivons, mais à la **stabilité du système que nous organisons**.

## "S'adapter ou disparaître"

Abordons le sujet qui fâche. Est-ce que cela signifie que les clients finiront par tout "vibe coder" eux-mêmes, nous laissant sans emploi ?

La réponse est un **"Non"** catégorique.

Si des outils comme ChatGPT ou Claude permettent à un fondateur de construire un prototype en 2 heures, ils ne résolvent pas la complexité d'un business qui passe à l'échelle.

**Tout le monde ne veut pas coder.** La plupart de nos clients sont des experts métier, pas des ingénieurs. Client A a apprécié l'exercice, mais il voulait finalement nous confier les clés pour se concentrer sur son business.

**Le "vibe coding" a un plafond.** C'est efficace pour une fonctionnalité, mais ça devient vite le chaos. Comme nous l'avons vu avec Team B, sans "guardrails", l'IA génère de la dette technique à la vitesse de la lumière.

Nous ne vivons pas une disparition. Nous vivons une **accélération**. La "valeur" que nous apportons ne réside plus dans la connaissance de la syntaxe d'une boucle for en Java. Elle réside dans le fait de savoir où placer cette boucle pour qu'elle ne fasse pas crasher le serveur pendant le Black Friday.

## Conclusion

Nous n'avons pas de boule de cristal, mais nous avons une direction.

Chez BearStudio, nous apprenons en continu. Nous adaptons nos pratiques, nos outils, et notre posture.

Ce que nous savons, en revanche, est simple :

**Les clients qui réussiront seront ceux qui vont vite.**

**Les agences qui réussiront seront celles qui permettent d'aller vite... sans casser le système.**

Alors, que vous ayez une idée, un prototype en 2 heures, ou une équipe prête à coder avec nous : venez, construisons la suite ensemble. Plus vite.

Nous transformerons cette énergie en produit robuste, scalable et réel.
