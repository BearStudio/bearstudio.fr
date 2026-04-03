---
title: 'Le bon et le mauvais développeur : Les soft skills'
date: 2025-06-30
categories:
  - 'developpement'
tags:
  - 'developpement'
  - 'developpement-web'
  - 'developpeur'
heroImage: 'images/format-blog-header.png'
metaDescription: 'Bon ou mauvais développeur ? Découvrez comment les soft skills font toute la différence, au-delà du simple fait de savoir coder.'
authors: ['hugo-perard']
skills: []
---

_Le mauvais développeur c’est le gars, il a un ordinateur, on lui donne des specs et il code. Le bon développeur il a un ordinateur, on lui donne des specs et il code… mais c’est un bon développeur…_

Au-delà de sa capacité technique, qu’est-ce qui différencie réellement un bon et un mauvais développeur ? Je vais tenter de donner des exemples concrets permettant de répondre à cette question.

Lorsqu’on parle de compétences mais qu’on exclut l’aspect technique, on parle de ce qu’on appelle des **soft skills**. Un soft skill est donc une compétence basée sur l’attitude d’une personne au jour le jour, ou face à une situation particulière. 

Cette notion est très large, elle inclut par exemple la communication, la gestion du temps, la collaboration, etc., elle ne s'applique pas uniquement au métier de développeur. Cela dit, nous allons aujourd'hui nous concentrer sur les soft skills essentiels dans ce domaine.

Pour illustrer cela, comme vous l’avez peut-être compris par le titre de cet article, je vais utiliser la fameuse explication du bon et du mauvais chasseur, en essayant d’être un peu plus convaincant 😂.

Pour ce faire, je vais donner des cas concrets ainsi qu’un petit parallèle un peu absurde pour expliciter l’importance des soft skills et en sortir des conseils et des bonnes pratiques.

<figure>

![Image parodiée de 3 chasseurs](images/image-10.png)

<figcaption>

L’IA a un peu abusé sur le mauvais développeur... 😂

</figcaption>

</figure>

## Le wording

On commence avec un cas qui touche tous les développeurs qui peut paraître sans réel intérêt à première vue mais qui en réalité fait la différence, c’est bien évidemment le wording. Le wording (soit le nommage) est présent à plusieurs endroits pour un développeur, du nom des variables, à la description des commits et des merge requests… 

Je vais utiliser le cas du nom des variables comme cas concret.

##### Le mauvais développeur

Il va nommer une variable d’une façon pas ou peu explicite :

```javascript
const v = () => [...] // Là j’abuse mais ça existe 
```

```javascript
const values = () => [...] 
```

##### Le bon développeur

Il contextualise son wording afin d’expliciter le plus clairement possible ce dont il s’agit :

```javascript
const getFormValuesSortedByName = () => [...]
```

##### Parallèle

C’est comme dire à son coloc j’ai mis un truc pour toi dans le frigo, et en ouvrant le frigo il se rend compte que c’est plein et tout en vrac, donc il ne sait pas ce qu’est le truc pour lui.

##### Conseils

Il faut se mettre à la place de quelqu’un qui découvre le code et voir si c’est compréhensible et avec un minimum d’ambiguïté pour permettre une compréhension plus efficace. (Se mettre à la place de son futur soi fonctionne aussi 😅).

D’autres questions qu’il peut être bien de se poser :

- Est-ce que c’est grammaticalement correct ?

- Est-ce que cela suit les conventions globales et du projet ? Par exemple si la convention définie sur le projet est de traduire les termes techniques en anglais alors respecter cette règle sur ses développements.

## Demande de l’aide (partie 1 / 2)

Lorsqu’on rencontre un problème qui nous bloque, il est crucial de savoir quand chercher seul et quand demander de l’aide.

##### Le mauvais développeur

Il passe des heures à essayer de résoudre un problème sans demander de l’aide, ou à l’inverse, il pose une question sans avoir fait les recherches de base.

##### Le bon développeur

Il prend le temps de faire ses propres recherches avant de solliciter les autres. Ainsi, il fournit des informations de base qui pourront aider une autre personne à solutionner le problème. Il sait aussi demander de l’aide au bon moment, en posant une question claire et bien formulée. Enfin, il est capable de juger l’importance du problème et de prioriser ses tâches si besoin.

##### Parallèle

C’est comme demander à quelqu’un de monter un meuble sans même avoir regardé la notice.

##### Conseils

Avant de demander de l’aide, pose-toi les questions suivantes :

- Ai-je cherché une solution de manière autonome avant de solliciter quelqu’un ?

- Est-ce que ma question est suffisamment claire et précise pour que l’on puisse m’aider efficacement ?

- Est-ce que la correction de mon problème vaut le temps que je suis en train de passer dessus ? Est-ce que je ne pourrais pas passer du temps sur quelque chose de plus important ?

## Demande de l’aide (partie 2 / 2)

La façon dont on formule une demande d’aide peut faire toute la différence dans la rapidité et l’efficacité de la réponse.

##### Le mauvais développeur

Il envoie des messages vagues du type : “Ça marche pas, j’ai une erreur”, sans fournir d’informations utiles pour résoudre le problème.

##### Le bon développeur

Il envoie un message clair et détaillé, en contextualisant sa situation et en fournissant les informations clés sur l’erreur rencontrée. Cela comprend par exemple l’environnement, les étapes précédant le problème, etc.

##### Parallèle 

C’est comme appeler un plombier en disant juste “y’a de l’eau partout” sans préciser d’où ça vient.

##### Conseils

Pour faciliter l’aide que vous recevrez, prenez le temps de bien expliquer votre problème. Vous gagnerez du temps et recevrez une réponse plus précise et rapide.

- Quelles sont les étapes qui ont conduit à l’erreur ?

- Quelles erreurs ou messages avez-vous obtenus ?

- Quel comportement attendu cherchiez-vous à obtenir ?

- Qu’est-ce que vous avez déjà essayé de faire pour corriger le problème ?

Selon le problème il peut-être également pertinent de faire du [peer programming](/fr/blog/articles/peer-programming) avec un développeur plus expérimenté.

## Tests

Les tests sont une étape essentielle dans tout développement, s’en passer peut causer une perte de temps et une frustration pour toute l’équipe.

##### Le mauvais développeur

“Tester c’est douter”, ou au mieux il teste uniquement en local dans un contexte favorable.

##### Le bon développeur

Il est garant de son développement. Il teste en local avant de soumettre à la review mais aussi sur les environnements pour s’assurer qu’aucun souci n’est apparu. Et il élargit ses tests pour assurer que son développement n’a pas d’impacts dans différents cas fonctionnels ou d’autres écrans si son développement est commun à plusieurs écrans.

##### Parallèle

C’est comme ci le groupe Ariane avait mit des spationautes dans leur nouvelle fusée sans avoir fait des dizaines de tests avant.

##### Conseils

Il faut s’assurer que son développement répond fonctionnellement à 100% de la demande initiale, mais pas seulement. Il faut également mesurer les impacts de celui-ci afin de limiter les probabilités de régressions. 

- Est-ce que mon développement répond à la spécification ?

- Est-ce que mon développement touche d’autres fonctionnalités ? Si oui est-ce qu’elles sont toujours fonctionnelles ?

## Collaboration

Dans le monde professionnel, un développeur travaille rarement seul sur un projet du début à la fin. D'autres personnes interviendront tôt ou tard, peut-être même de façon temporaire. Cela peut être le cas par exemple pour de l'intérim en remplacement de congés. C’est pourquoi il est essentiel de faciliter la collaboration.

##### Le mauvais développeur

Il développe sans documenter aucune décision fonctionnelle ou technique, process ou choses à savoir. Il est le seul à avoir la connaissance sur des sujets spécifiques; son absence est en général problématique car souvent bloquante pour le reste de l’équipe qui est devenue dépendante de son savoir fonctionnel ou technique.

##### Le bon développeur

Il laisse des traces des réflexions et des choix fait sur le projet, qu'ils soient techniques mais aussi fonctionnels, et documente des process, par exemple pour la mise en place ou le déploiement du projet.

##### Parallèle

C’est comme si on construisait une ville sans laisser aucun plan, donc lorsqu’on devra venir faire des travaux on aura aucune idée de ce qu’il y a, où et pourquoi.

##### Conseils

Il faut se dire que si vous vous posez des questions, quelqu’un d’autre (et spoiler, sûrement même votre futur vous) se posera ces mêmes questions et sera donc très heureux de trouver une réponse. Si vous ne voulez pas être dérangé pendant vos vacances, documentez vos connaissances ! (La documentation ça va de simples commentaires dans le code à de la documentation externe en passant par le README).

## Gestion des priorités

Le développeur peut avoir plusieurs tâches de prévues, que ce soit un unique projet ou sur plusieurs, ou des tâches annexes au sein de son entreprise par exemple.

##### Le mauvais développeur

Il passe 2 jours sur un bug mineur sans avancer sur le reste, il se noie dans des tâches sans importance et ignore les deadlines. À la fin d’un sprint, on se retrouve avec un wording corrigé et un layout parfait sur tous les appareils, mais la fonctionnalité attendue n’est pas présente.

##### Le bon développeur

Il sait identifier ce qui est prioritaire ou bien demander à un décideur (le Product Owner par exemple) ce qui est prioritaire, il découpe son travail en tâches gérables et ajuste ses efforts en fonction de l’impact et de la valeur des tâches.

##### Parallèle

C’est comme faire le ménage en commençant par trier ses chaussettes alors que la cuisine est en feu.

##### Conseils

Deux bonnes méthodologies qui peuvent être suivies pour aider à mieux gérer les priorités :

- [La matrice d’Eisenhower](https://fr.wikipedia.org/wiki/Matrice_d%27Eisenhower)

- [La règle des 2 minutes de David Allen](https://www.gqmagazine.fr/article/la-regle-des-2-minutes-tout-savoir-sur-cette-methode-ultra-simple-qui-permet-d-etre-moins-stresse-et-plus-productif)

Ces deux idées peuvent être combinées afin d’aider à mieux gérer de déterminer l’ordre de priorité de ses tâches.

## Division des tâches

Pour une meilleure collaboration, une analyse externe plus performante mais aussi pour une maintenabilité plus efficace, il est important de séparer distinctement ses développements.

##### Le mauvais développeur

Il ouvre une unique merge request avec un unique commit contenant 200 fichiers modifiés, incluant des correctifs, des nouvelles fonctionnalités et des changements d’arborescence des fichiers (pour rendre le tout bien illisible).

##### Le bon développeur

Il sépare ses développements en plusieurs merge requests (bien nommées), une pour des correctifs, avec plusieurs commits pour les différents correctifs, une pour l’ajout d’une fonctionnalité, etc..

##### Parallèle

C’est comme si lors d’un déménagement au lieu de trier ses affaires et écrire sur les cartons ce qu’il y a à l’intérieur on mettait tout en vrac dans un énorme carton. Bon courage ensuite pour retrouver un objet précis ou savoir où chaque chose est censée aller une fois arrivé à destination.

## Savoir dire non, et expliquer pourquoi

Un développeur doit pouvoir conseiller pour aider le projet sur lequel il travaille, et savoir orienter le décideur sur des choix pour éviter des problèmes est une partie de ce travail de conseil.

##### Le mauvais développeur

Il accepte toutes les demandes sans réfléchir aux impacts, se retrouve submergé et livre un travail bâclé, ou ne livre rien du tout.

##### Le bon développeur

Il évalue la faisabilité d’une demande, explique les contraintes techniques et propose des alternatives réalistes.

##### Parallèle

C’est comme si un restaurateur acceptait toutes les commandes, même s’il n’a pas les ingrédients, et finit par servir n’importe quoi.

##### Conseils

Il faut prendre en compte le contexte du projet pour estimer si la demande est réalisable et sinon proposer des alternatives qui le sont. Il n’est jamais trop tard pour remonter qu’une demande est irréalisable : il vaut mieux stopper une tâche qui est partie dans une mauvaise direction, que de continuer à s’enfoncer et finir avec une solution peu satisfaisante qui aura pris énormément de temps.

## Challenger des spécifications

Il se peut que des spécifications soit inexactes ou même fausses, le développeur doit comprendre ces spécifications et être capables de détecter des erreurs “visibles” (des spécifications très fonctionnelles sont complexes et des erreurs sont difficilement détectables).

##### Le mauvais développeur

Il traite un sujet où les spécifications disent que 1 + 1 = 3, alors il développe que 1 + 1 = 3.

##### Le bon développeur

Il sait que 1 + 1 = 3 est faux, alors il se questionne pour bien comprendre les spécifications, puis rapporte ses questions au décideur pour voir s’il s’agit d’une erreur.

##### Parallèle

C’est comme un cuisinier qui suit une recette sans se demander si le client est allergique à un ingrédient.

##### Conseils

Il est important de comprendre au maximum le fonctionnel, déjà pour s’assurer du résultat du développement, mais aussi pour pouvoir remonter de possibles incohérences ou même proposer des alternatives. Pour ça il faut poser des questions pour s’assurer de la compréhension et la cohérence des demandes.

## L’utilisation de l’IA

C’est le sujet du moment, que je pourrai même définir comme détecteur de mauvais développeur tant celle-ci permet de voir la capacité d’un développeur à vouloir s’assurer de la qualité de son développement.

##### Le mauvais développeur

Il écrit son prompt “fais ça” avec plein d’informations sensibles dans son prompt, il copie le contenu du bloc de code généré, le colle dans son IDE et croise les doigts pour que ça fonctionne. Si c'est le cas, il fait confiance au code et l’oublie dans un coin.

##### Le bon développeur

Il utilise cet outil comme un assistant plutôt qu’un remplaçant en faisant attention de ne pas lui fournir des informations clients ou des informations sensibles. 

Il peut l’utiliser de plusieurs façons différentes, notamment :

- Il fait son code et demande conseil d’amélioration, de simplification ou de détection/correction d’éventuelles erreurs. 

- Il fait des demandes précises sur des besoins clairs et définis, il analyse le résultat obtenu pour s’assurer de sa cohérence, et il fait valider que des cas particuliers connus sont gérés.

##### Parallèle

C’est comme suivre un GPS sans réfléchir et se retrouver au fond d’un lac parce qu’il disait de tourner à gauche.

##### Conseils

Il faut comprendre ce que propose l’IA, le questionner sur sa réflexion pour pouvoir le challenger, il doit être un outil d’accompagnement permettant de proposer des solutions et se servir de celà pour définir ses propres solutions.

Voici pour cette liste non exhaustive des différences entre un bon et un mauvais développeur, qui j’espère, de par des parallèles un peu absurdes, aura permis d’expliciter l’importance des soft skills. Un bon développeur, ce n’est pas seulement quelqu’un qui écrit du code propre. C’est aussi et surtout quelqu’un qui sait **communiquer**, **écouter**, **travailler en équipe, donner et recevoir du feedback**.

Pour aller plus loin, vous pouvez consulter [cet article qui rappelle les bonnes pratiques sur les erreurs standards faites en Java](/fr/blog/articles/java-pour-les-debutants-parfois-pour-les-experts-aussi).
