---
title: 'Étude de cas UX Cuisinez pour bébé'
date: 2026-01-27
categories:
  - 'design-css'
tags:
  - 'design'
  - 'etude-de-cas'
  - 'experience-utilisateur'
  - 'ux'
heroImage: 'images/Format-Blog-Header-9-scaled.png'
authors: ['daryl-avila-bonnet']
---

## À propos de Cuisinez pour bébé

L’histoire de _Cuisinez pour Bébé_ commence avec Clémence, une jeune maman passionnée de cuisine qui souhaitait offrir à son enfant une alimentation saine, simple et variée. Comme beaucoup de parents, elle s’est posé les questions essentielles :

##### Comment réussir la diversification alimentaire ? Comment préparer des repas équilibrés sans y passer des heures ?

Pour y répondre, elle commence par partager ses recettes maison sur un blog, qui devient rapidement un site WordPress structuré. Le succès est immédiat : les jeunes parents y trouvent des repères clairs, des idées concrètes et une approche décomplexée de la cuisine pour bébé.

Aujourd’hui, _Cuisinez pour Bébé_ rassemble plus de **1 800 recettes**, classées par **âge**, des **menus hebdomadaires** de **batch cooking**, ainsi qu’une multitude de conseils pratiques pour **accompagner** chaque étape de la diversification.

## Le défi / Le besoin

Avec plus de **150 000 visites mensuelles** et une communauté très active sur les réseaux sociaux, _Cuisinez pour Bébé_ s’est imposé comme une ressource incontournable pour les parents en quête de recettes simples et équilibrées pour leurs enfants.

Ce succès a cependant révélé un besoin clair : rendre l’expérience plus fluide, plus mobile et plus personnalisée. La majorité des utilisateurs consultait déjà le site depuis leur téléphone et exprimait le besoin d’accéder plus rapidement à leurs recettes, à leurs favoris et aux menus hebdomadaires directement depuis une application.

L’enjeu était donc de transposer l’expérience du site dans un format mobile intuitif, fidèle à l’univers existant, tout en intégrant des fonctionnalités clés : un modèle freemium, une navigation adaptée à l’âge de l’enfant et un accès simplifié aux menus de batch cooking.

L’application devait devenir une extension naturelle du site, au service du même objectif :   
**accompagner les parents au quotidien dans la préparation des repas de leur bébé.**

## Notre rôle

Côté [BearStudio](https://www.bearstudio.fr/), le projet est porté par une équipe dédiée dont la composition a évolué au fil du temps.

Équipe actuelle :

- 1 Lead UX/UI Designer

- 1 UX/UI Designer

- 1 Lead Développeur Full-Stack

Contribution passée :

- 1 Développeur Front-End

## Product Design (UX/UI)

Notre équipe a accompagné _Cuisinez pour Bébé_ dans la conception complète de l’expérience mobile, depuis la compréhension des usages jusqu’à la définition des parcours :

- Analyse des besoins des jeunes parents et identification des attentes spécifiques sur mobile

- Structuration de l’architecture de l’information et conception de parcours simples et centrés sur les usages réels

- Prototypes basse fidélité → prototypes haute fidélité (_maquettes interactives_)

- Plusieurs cycles d’itération réalisés avec le client pour affiner les parcours et valider les choix de conception

## Développement

Côté technique, BearStudio a assuré la réalisation de l’application mobile connectée à l’infrastructure WordPress existante :

- Développement mobile en React Native (_Android & iOS_)

- Intégration des contenus via API REST WordPress (_recettes, menus, profils_)

- Mise en place de la recherche Algolia pour un accès rapide et filtré aux recettes

- Gestion de l’authentification et du modèle freemium / abonnés

- Optimisation de la cohérence visuelle et technique grâce à des composants partagés et une communication étroite entre designers et développeurs

## Conception & itérations

### Écrans principaux de la V1 - Poser les fondations

La première version de l’application _Cuisinez pour Bébé_ avait pour objectif de transposer les fonctionnalités clés du site existant vers un environnement mobile.

Cette V1 constituait un socle fonctionnel, pensé pour répondre en priorité aux usages essentiels identifiés par l’équipe CPB : **consulter des recettes**, **organiser les repas de la semaine et comprendre la valeur de l’abonnement**.

À ce stade, l’enjeu n’était pas encore d’optimiser chaque interaction, mais de valider les parcours fondamentaux et la pertinence du format applicatif.

L’application s’articulait ainsi autour de quelques briques centrales :

1. **L’accès aux menus hebdomadaires** dès l’entrée dans l’app

2. La **consultation d’un catalogue de recettes** classées par âge

3. **Des fiches recettes** simples regroupant les informations nécessaires à la préparation

4. **Un espace favoris** pour retrouver les contenus enregistrés

5. Un **profil utilisateur** orienté **gestion du compte** et de **l’abonnement**

6. **Un paywall** destiné à présenter l’offre freemium

7. **Un parcours d’inscription** volontairement très séquencé

Cette première version a permis de poser les bases du produit, de confronter les hypothèses initiales aux usages réels et de fournir un terrain solide pour les évolutions futures.

### Les écrans principaux aujourd’hui

Les écrans actuels de _Cuisinez pour Bébé_ ne sont pas le résultat d’un empilement de fonctionnalités. Ils sont le résultat d’une démarche centrée sur des usages concrets, itérée dans le temps, avec un objectif constant : rendre une expérience riche simple à utiliser sur mobile, dans un contexte réel (_parent pressé, téléphone à une main, enfant à gérer, cuisine en cours_).

Plutôt que de concevoir écran par écran, nous avons structuré l’application autour de parcours “moteurs”, ceux qui reviennent le plus souvent dans le quotidien des parents :

- Planifier les repas de la semaine sans réfléchir à chaque décision

- Trouver rapidement une recette pertinente _(âge, texture, contexte)_

- Cuisiner sans friction, en gardant une lecture claire et continue

- Suivre la diversification alimentaire dans le temps

- Gérer un profil familial et l’accès au premium sans confusion

### Méthode de conception

Pour transformer ces usages en expérience mobile, nous avons privilégié une approche très concrète : **prototyper, simuler, observer, ajuster**.

Nous avons utilisé des prototypes interactifs pour valider :

- La compréhension des enchaînements _(où cliquer, quand et pourquoi)_

- La profondeur de navigation _(éviter les tunnels)_

- La lisibilité et la hiérarchie de l’information dans des listes denses

- La cohérence entre écrans _(mêmes repères visuels, mêmes codes)_

Cette méthode permettait de tester rapidement des hypothèses avant développement et de détecter tôt des problèmes typiques du mobile : surcharge visuelle, gestes peu accessibles, filtres trop complexes, actions secondaires trop visibles, manque de continuité entre listing et détail.

### Ce que cette démarche a changé

Au fil des itérations, plusieurs axes se sont imposés comme structurants :

- Hiérarchiser l’information plutôt que tout afficher : photo, titre, âge et quelques repères forts avant le reste

- Raccourcir le chemin vers l’action : ouvrir une recette, ajouter en favori, générer des courses, sans multiplier les écrans

- Créer des écrans “carrefours” _(ex. Menu hebdo, Recettes)_ qui concentrent le besoin principal, puis renvoient vers des détails au moment opportun

- Assurer une continuité visuelle : si un parent comprend une carte recette dans le catalogue, il doit la comprendre partout _(menu, favoris, suggestions)_

Les écrans “aujourd’hui” incarnent ce niveau d’équilibre atteint : une interface capable d’absorber des contenus denses et variables, tout en restant fluide, cohérente et rassurante.

###### _Aperçu des écrans actuels : organisation, exploration, exécution, suivi._

![Cuisinez pour bébé](images/image-1-1024x473.png)

### Zoom design - Composant Carte Recettes 

La section Recettes est l’un des modules les plus exigeants de l’application. C’est un espace où l’utilisateur doit pouvoir explorer rapidement un catalogue très large, tout en gardant un sentiment de maîtrise.

#### Intention produit

L’objectif central n’était pas de proposer un moteur de recherche avancé. L’objectif était de permettre une prise de décision simple, à partir de critères qui ont du sens pour les parents : **âge, texture, type de repas, contraintes alimentaires, contexte du moment**.

Autrement dit, la section recettes devait fonctionner comme :

- Une source d’inspiration

- Un outil de tri

- Un point d’accès rapide à l’action _(cuisiner, enregistrer, planifier)_

###### _Le catalogue est conçu pour être scanné en quelques secondes : image, titre, âge._

![](images/image-3-1024x971.png)

#### Contraintes rencontrées

Cette section cumule plusieurs contraintes complexes :

- **Densité** : beaucoup de recettes à l’écran et beaucoup de recettes au total

- **Variabilité** : titres très longs, informations différentes selon recettes

- **Multi-critères** : le bon choix dépend de plusieurs paramètres _(âge, texture, type, ingrédients)_

- **Mobile**: interactions courtes, gestes simples, lisibilité immédiate

- **Continuité** : la liste doit préparer la fiche recette, sans rupture

Le risque principal était double :

- Un catalogue trop “riche” visuellement, où on ne lit plus rien

- Ou un système de filtres trop complexe, qui décourage l’exploration

#### Décision clé n°1 : la carte de recette comme unité de lecture

La carte recette est le composant qui porte l’essentiel de la compréhension. Elle doit permettre trois actions mentales très rapides :

1. Reconnaître l’idée _(via l’image)_

2. Comprendre le contenu _(via le titre)_

3. Valider l’adéquation _(via l’âge)_

Cela implique une hiérarchie stricte :

- **Image dominante** : l’œil décide d’abord par le visuel, un parti pris rendu évident par la richesse et la qualité exceptionnelle des photos de _Cuisinez pour Bébé_, véritable atout visuel de la marque

- **Titre optimisé pour le long** : typographie, espace, nombre de lignes

- **Âge présent mais secondaire** : visible, sans voler l’attention

![](images/image-515x1024.png)

#### Décision clé n°2 : les filtres comme levier principal (et non un “plus”)

Dans cette application, les filtres ne sont pas une fonctionnalité secondaire. Ils sont le mécanisme qui rend le catalogue utilisable au quotidien.

L’idée n’était pas “mettre beaucoup de filtres” mais de **proposer un système qui aide à réduire progressivement l’espace de recherche sans exiger un effort mental important**.

Les choix qui rendent les filtres efficaces :

- **Catégorisation claire** : on raisonne par familles _(régime, type, moment, saison, particularités)_

- **Sélection rapide**

- **Validation explicite** : appliquer quand on est prêt, plutôt que déclencher des résultats à chaque micro-choix

- **Feedback immédiat** : voir le nombre de recettes trouvées évite l’impression “je filtre dans le vide”

![](images/image-2-1024x964.png)

## Une collaboration qui se construit dans la durée

Depuis 2021, la collaboration entre BearStudio et l’équipe _Cuisinez pour Bébé_ s’inscrit dans le temps. Elle repose sur une relation de confiance, une grande réactivité et un dialogue constant autour de l’évolution du produit.

L’équipe CPB partage régulièrement des retours issus de sa communauté, formule de nouvelles idées et sollicite des conseils pour faire évoluer l’application.

Ces échanges prennent différentes formes : messages Slack, points réguliers, ou encore des vidéos Loom pour détailler des attentes ou proposer des pistes d’amélioration ou demander des conseils.

Cette dynamique a permis de faire évoluer progressivement l’application au-delà de sa première version. 

Plusieurs fonctionnalités majeures ont ainsi enrichi l’expérience au fil du temps, comme **la gestion de plusieurs enfants** au sein d’un même compte ou la mise en place de **la liste de courses**, devenues un élément clé de l’organisation quotidienne.

Certaines fonctionnalités existantes ont également été retravaillées et affinées, notamment autour de **l’accès au contenu premium** et des écrans de conversion, afin d’améliorer la clarté et l’expérience globale.

Ce rythme d’itération partagé permet au produit de rester vivant, aligné avec les besoins réels des parents, et d’évoluer en continu, porté conjointement par les équipes CPB et BearStudio.

## Ce que les utilisateurs en disent

Au-delà des maquettes, des fonctionnalités et des itérations, l’indicateur le plus précieux reste la satisfaction des utilisateurs. 

Depuis le lancement de l’application, les retours laissés sur les stores et les messages envoyés à CPB témoignent d’un impact réel dans le quotidien des parents.

Ce qui ressort le plus souvent :

- La simplicité d’utilisation

- La clarté des recettes

- Le gain de temps dans l’organisation des repas

- La qualité du contenu proposé

- La confiance accordée à l’univers CPB

Les notes laissées sur l’App Store et Google Play, ainsi que les nombreux messages positifs, confirment que l’application répond à un besoin fort : **accompagner les parents de manière fiable, intuitive et bienveillante**.

Ces retours nourrissent à leur tour le projet, car chaque commentaire constructif ou demande récurrente inspire de futures évolutions renforçant encore davantage le cycle d’amélioration continue entre CPB, ses utilisateurs et notre équipe.

![Cuisinez pour bébé avis](images/image-4-1024x576.png)

## Pour aller plus loin

_Cuisinez pour Bébé_ continue d’accompagner chaque jour des milliers de parents grâce à son écosystème de contenus, son application et ses ressources pédagogiques.

Pour découvrir l’univers complet, voici où trouver la marque et suivre ses dernières nouveautés :

**Site web officiel** : Recettes, conseils, batch cooking et guides pratiques  
[https://www.cuisinez-pour-bebe.fr/](https://www.cuisinez-pour-bebe.fr/)

**Application mobile** : Disponible sur l’App Store et Google Play  
Accès aux menus hebdomadaires, filtres, favoris, liste de courses et fonctionnalités premium

**Instagram** : Partage de recettes, astuces, vidéos pratiques, retours de la communauté  
[https://www.instagram.com/cuisinezpourbebe/](https://www.instagram.com/cuisinezpourbebe/)

**Facebook** : Communauté active, échanges entre parents, lives et contenus exclusifs  
[https://www.facebook.com/cuisinezpourbebe/](https://www.facebook.com/cuisinezpourbebe/)

**YouTube** : Vidéos explicatives, recettes filmées, ateliers et masterclass  
[https://www.youtube.com/cuisinezpourbebe](https://www.youtube.com/cuisinezpourbebe)

Et n'hésitez pas à découvrir [notre précédente étude de cas sur Léa English](https://www.bearstudio.fr/blog/design-css/lea-english-etude-de-cas) !
