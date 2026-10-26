---
title: "Agents IA : de l'all-in à la reprise en main"
date: 2026-09-23
categories:
  - 'developpement'
  - 'ia'
tags:
  - 'ia'
  - 'developpement'
  - 'retour-dexperience'
  - 'temoignage'
metaDescription: "De l'all-in sur Claude Code à Cursor : retour d'expérience sur les agents IA, et pourquoi il faut rester dans la boucle pour garder la maîtrise du code."
excerpt: "Retour d'expérience sur ma relation avec l'IA pour coder : comment je m'y suis mis, les galères qui se sont accumulées petit à petit, et ce que je change pour reprendre la main."
authors:
  - 'renan-decamps'
---

Si tu bosses dans le dev en 2026, t'as forcément déjà vécu ce moment : tu lances un agent sur une feature, tu vas te chercher un café, tu reviens… et t'as 40 fichiers modifiés, 1 200 lignes ajoutées, et une PR qui t'attend. Techniquement, ça marche. Mais toi, t'as aucune idée de _comment_ ça marche. 😅

Cet article, c'est un retour d'expérience sur ma relation avec l'IA pour coder : comment je m'y suis mis, les galères qui se sont accumulées petit à petit, et ce que je change pour reprendre la main. Que tu débutes avec les agents ou que t'en fasses déjà tous les jours, j'espère que ça t'évitera de faire la même erreur que moi.

## 1. Le début : all-in sur Claude Code

Début d'année, je me suis dit : **all-in**. Avec toute la hype autour du dev agentique, j'avais vraiment l'impression de passer à côté de quelque chose. Et pour moi, le meilleur moyen d'apprendre, c'est de tester en vrai. Donc let's go : Claude Code partout, en CLI puis en GUI, sur des projets clients, des side projects et des projets internes.

Et j'ai pas fait semblant. J'ai testé pas mal de systèmes pour automatiser toute la boucle **specs → dev → review**. Coucou la Ralph loop 👋 (en gros : une boucle qui relance l'agent encore et encore sur une spec jusqu'à ce que le boulot soit fait). L'objectif, à terme et idéalement : **m'abstraire totalement de la phase de dev** et ne faire plus que de l'orchestration.

Spoiler : ça n'a jamais dépassé le stade de l'expérimentation. Et je m'en suis rendu compte assez vite.

## 2. Petit à petit : je pensais comprendre mon projet

Le premier souci avec ces boucles automatisées, c'est que **tu perds la possibilité de changer d'avis en cours de route**. Tu écris ta spec, tu lances, et l'agent déroule. Sauf qu'en vrai, un projet ne se passe jamais comme prévu : tu découvres des contraintes, tu changes d'approche, tu te rends compte que ta spec était bancale. Là, t'as juste une montagne de code basée sur des choix que t'aurais remis en question si t'avais été là.

Alors oui, certains me diront : « Mais si, tu peux modifier tes specs en cours de route pour ajuster la prochaine boucle, créer des issues, etc. » Ba nan. Si tu dois surveiller la boucle et la corriger en permanence, c'est quoi l'intérêt d'une boucle censée tourner pendant que t'es AFK ? Au final, on se retrouve avec les mêmes problèmes que le développement en tunnel et les cycles en V.

Et même sans aller jusqu'à la Ralph loop, le problème de fond reste le même. Sur un projet interne, on me posait des questions sur le fonctionnement de l'app. Et là, je me rends compte que je _pensais_ avoir compris comment ça marchait. Après tout, c'est moi qui avais prompté, c'est moi qui avais fait les choix pendant la phase de « dev ». Mais en vrai ? Je maîtrisais pas totalement. Et surtout, j'avais pas vraiment confiance dans les réponses que je donnais.

Pareil pour débugger. Trouver l'origine d'un problème quand t'as qu'une idée vague de comment c'est fait derrière, bon courage.

Et puis il y a les PRs. Des PRs à 15 000 changes, un enfer à review. Au final, soit personne les review vraiment, soit on les file direct à une IA pour qu'elle review le code… d'une autre IA. C'est un sujet qui revient souvent sur X, et je pense qu'on est nombreux à l'avoir vécu.

Le fond du problème, c'est que ces outils produisent **énormément** de code, très vite, et que **tu ne le vois pas naître**. Les modifs s'enchaînent dans un terminal ou une fenêtre de chat, et la seule vraie porte d'entrée pour comprendre ce qui a été fait, c'est la PR. Or dans une PR, tu lis un diff : des lignes rouges et vertes, hors contexte. Tu peux pas facilement naviguer dans le code, sauter d'une définition à l'autre, suivre un flux de données. Bref, te l'**approprier**.

Le projet avance, mais ta compréhension technique, elle, stagne. Voire recule.

À un moment, je me suis dit que c'était pas la bonne manière de fonctionner si je voulais produire des apps de qualité, que je maîtrise.

## 3. Human in the loop : on a réinventé l'agilité 🙃

La conclusion que j'en ai tirée est assez simple : **l'humain doit rester dans la boucle**. C'est ce qu'on appelle le HITL, _human in the loop_.

Et quand tu y penses, c'est juste… de l'agilité. Des petites itérations, du feedback rapide, la possibilité de changer de direction quand t'apprends quelque chose. Les outils ont changé, mais les principes restent les mêmes, mdr.

Attention, ça veut pas dire que je code tout à la main. C'est possible que je tape très peu de code moi-même. Mais je veux **voir ce qui se passe**. Opérer de façon plus atomique, par petits changements, pour comprendre chaque modif au moment où elle arrive, plutôt que de découvrir le résultat d'un coup dans une PR géante.

## 4. Le switch : Cursor et un environnement tout-en-un

Pour appliquer ça au quotidien, je suis passé sur Cursor. Et ce qui a changé, c'est moins l'outil que **le workflow qu'il m'a poussé à adopter**.

Avec Claude Code, j'étais dans un environnement brouillon : je lançais, je laissais faire, je récupérais le résultat, et je bricolais des systèmes maison autour. Avec Cursor, j'ai un environnement **tout-en-un** : mon agent est directement dans mon éditeur, tout est lié. Je peux voir le code au moment où il est écrit, naviguer dedans, tester des trucs, sans la friction de devoir ouvrir un éditeur à côté.

Et l'écosystème Cursor au sens large est très bien fini. Clairement plus pro que ce que j'arrivais à monter moi-même avec Claude Code, Codex et compagnie.

Mon setup est encore très jeune, mais dans les grandes lignes :

- **les Cursor Projects** : un agent orchestrateur qui travaille sur une base de connaissance centralisée pour chaque sujet en cours, et qui lance d'autres agents pour les différentes tâches ;
- **des alertes** sur les PRs et les messages Slack, pour ne pas perdre le fil ;
- **les agents directement dans l'IDE** pour le dev, pour garder un œil sur chaque changement.

On retrouve un peu d'orchestration, mais cette fois je reste au milieu. 😉

## 5. Soyons honnêtes : l'outil ne fait pas tout

Faut pas se mentir : tu peux tout à fait tomber dans les mêmes travers avec Cursor qu'avec Claude Code ou Codex. Rien ne t'empêche de lancer l'agent en mode YOLO et de tout accepter sans lire.

La différence, c'est que Cursor rend **beaucoup plus simple** de se mettre en place un environnement qui t'encourage à comprendre ce que tu fais, dans le détail. Le bon comportement devient le chemin le plus facile.

Est-ce que ça va changer ma façon de review ou d'accompagner l'équipe ? C'est encore trop tôt pour le dire. Mais une chose est sûre : je ne veux plus découvrir mon propre code dans une PR.

## Conclusion

L'IA est un accélérateur incroyable, et je ne reviendrai pas en arrière. Mais si elle écrit ton code plus vite que tu ne peux le comprendre, t'as pas gagné du temps : t'as juste déplacé la dette… dans ta tête.

Alors ne fais pas la même erreur que moi : **garde la maîtrise du code que tu produis**. Même si c'est pas toi qui l'as tapé.
