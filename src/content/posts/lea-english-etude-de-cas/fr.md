---
title: 'Lea English étude de cas'
date: 2025-07-03
categories:
  - 'design-css'
tags:
  - 'design'
  - 'etude-de-cas'
  - 'experience-utilisateur'
  - 'ux'
heroImage: 'images/format-blog-header-1.png'
---

## Présentation du projet

Lea English est une plateforme d’apprentissage en ligne créée par Léa, **coach linguistique professionnelle** multilingue parlant couramment cinq langues. Elle rassemble une communauté de plus de **350 000 apprenants francophones.** Son approche pédagogique, quant à elle, met l’accent sur l’apprentissage efficace de l’anglais courant à travers des compétences conversationnelles concrètes.

Contrairement aux cours traditionnels centrés sur la grammaire, ou aux applications excessivement gamifiées, son approche minimaliste privilégie les compétences orales essentielles et l’usage naturel de la langue. **L’objectif est d’atteindre une aisance rapide et concrète.**

Forte d’une application **web éprouvée et des retours de ses utilisateurs payants,** Léa s’est associée à notre équipe. Ce qui a permis de faire évoluer cette expérience d’apprentissage grâce à **une application mobile** pensée avec soin et centrée sur les besoins des utilisateurs.

## Le Défi / Contexte

Les apprenants en langues sont souvent confrontés à des programmes **surchargés** et **axés sur la grammaire,** ce qui limite leurs progrès en conversation. D’autres méthodes, à l’inverse, misent trop sur la **gamification au détriment de l’efficacité.**

**Les applications traditionnelles** ciblent généralement **les débutants,** sans vraiment permettre de passer efficacement à un niveau intermédiaire ou avancé.

Par ailleurs, **les apprenants manquent** fréquemment de pratique dans des **conversations concrètes** et rencontrent des **difficultés à communiquer** avec assurance dans des **situations réelles.**

## Notre rôle - BearStudio

##### Product designer (UI/UX Designer), en charge de : 

- **Recherche utilisateur** (entretien avec des experts, retours d’utilisabilité, analyse de concurrence)

- **L’architecture de l’information** et **parcours utilisateurs**

- **Wireframing** et le **prototypage**

- **Tests d’utilisabilité** et **itérations de conception**

- **Collaboration itérative** avec **les développeurs** sur les défis techniques et la faisabilité des idées

##### Les Développeurs :

- **Développement** de l’application en React Native / Expo, pour un déploiement sur Android et iOS

- **Conception** **d'animations** pour agrémenter l'application

- **Mise en place** de la fonctionnalité de bot conversationnel (basée sur l’API d’OpenAI)

- **Intégration** **des retours** du product designer et de Léa

- **Utilisation** **des composants** partagés depuis Storybook et Figma pour garantir cohérence et efficacité dans l’interface

## Recherche & informations clés

#### Atelier de lancement

Pour tirer pleinement parti de la connaissance approfondie que notre cliente a de ses utilisateurs, nous avons tenu un **atelier collaboratif ciblé de 3 heures avec Léa**. Elle y a partagé de **nombreux retours,** directement recueillis auprès de **ses utilisateurs**. Ces données sont riches et qualitatives. Elles proviennent de l’expérience de terrain de Léa et de ses échanges directs avec **plus de 350 000 apprenants engagés.** Grâce à ces informations, nous avons pu identifier rapidement **les besoins clés** des utilisateurs. De plus, elles ont permis de valider les principaux points de friction rencontrés. Nous avons esquissé **les premières pistes en temps réel,** à mesure que les idées émergeaient, nourries par l’expérience précieuse de Léa dans l’enseignement.

<figure>

![](images/frame-162-1-1024x752.png)

<figcaption>

Esquisse générale de notre atelier en ligne avec la cliente

</figcaption>

</figure>

Nous avons complété ces précieuses données fournies par la cliente par une **analyse comparative** ciblée de la concurrence (en étudiant des plateformes comme Duolingo, iTalki ou Simpler). [Ce qui nous a permis d’identifier des bonnes pratiques UX spécifiques ainsi que des axes d’amélioration.](/blog/posts/pourquoi-lexperience-utilisateur-est-elle-importante) Cette démarche nous a permis de renforcer les bases solides posées par Léa. Nous avons combiné ses retours centrés sur les utilisateurs avec les standards du secteur. Grâce à cela, nous avons pu définir clairement une orientation forte pour notre travail de design.

#### Détails supplémentaires sur les données initiales et la recherche

##### Analyse de la concurrence

Pour mieux comprendre le marché, nous avons étudié plusieurs plateformes telles que Duolingo (excellente gamification, peu de pratique orale), iTalki (tuteurs en direct, mais planification et contenu des cours pouvant sembler fragmentés), et Simpler (vise principalement les débutants via une approche grammaticale, ce qui ne favorise pas des résultats rapides en communication quotidienne).

De cette analyse concurrentielle, il est ressorti que l’application à concevoir devait faire preuve **d’efficacité** en imitant la méthode d’enseignement de notre cliente et en améliorant le **feedback en temps réel**. Les cours particuliers étant souvent coûteux ou peu flexibles, notre objectif était de créer une solution intégrée combinant le meilleur des deux mondes : des leçons interactives en ligne et des exercices à la demande, tout en maintenant un format engageant, mais aussi **orienté résultats**.

##### Retours utilisateurs sur sa première version de l’application web

**Plus de 400 apprenants** ont participé aux retours via des sondages, révélant plusieurs points de friction :

- **Fonctionnalités manquantes** \- Les utilisateurs ont formulé des suggestions claires pour améliorer leur routine d’apprentissage sur l’app déjà existante.

- **Motivation et régularité** \- beaucoup peinent à rester constants sans indicateurs concrets de progression et sans fonctionnalité de notification.

**Notre analyse** approfondie de **l’application web**, croisée avec les retours des **utilisateurs payants** réguliers, a mis en lumière plusieurs points de friction :

- **Charge cognitive élevée**, rendant l’usage parfois fatigant ou décourageant.

- **Manque de fluidité** dans les parcours utilisateurs, nuisant à l’expérience globale.

- **Problèmes d’ergonomie**, avec des interactions clés jugées peu intuitives ou inutilement complexes.

Ces obstacles réduisaient significativement l’engagement et l’accessibilité. Au-delà des problématiques UX, nous avons également identifié **des failles techniques, dont des vulnérabilités de sécurité et des bugs fonctionnels récurrents**.

![](images/old-screen.png)

![](images/old-screens-1024x585.png)

##### Quelques-unes de nos observations

- **Clics excessifs dans les tests -** les utilisateurs devaient enchaîner plusieurs clics pour passer à l’étape suivante, ce qui ajoutait des lenteurs inutiles et nuisait à la fluidité du parcours.

- **Expérience audio asynchrone -** la transcription ne mettait pas en surbrillance les mots en temps réel pendant la lecture, rendant le suivi difficile pour les utilisateurs.

- **Interaction limitée avec les flash cards -** le mécanisme de retournement était peu intuitif et ne favorisait pas une expérience d’apprentissage fluide et continue.

#### Public cible

- Apprenants adultes allant de très **débutants (A1) à avancés (C1).**

- Utilisateurs préférant un apprentissage **pratique et efficace**, plutôt que centré sur la grammaire.

- Personnes souhaitant développer leur aisance à l’oral grâce à une **pratique régulière, interactive et axée sur la conversation.**

Nous nous sommes assurés que les décisions de design étaient alignées avec **les besoins réels des utilisateurs**. En cartographiant les comportements, objectifs et frustrations des utilisateurs, la recherche a permis une meilleure compréhension des limites de la première version de l’application. Ces limites concernaient surtout l’ergonomie et la capacité à maintenir l’engagement des utilisateurs. Par ailleurs, cette analyse a servi de référence tout au long du processus de conception. Elle a aidé à prioriser les améliorations nécessaires. Celles-ci visaient à enrichir l’expérience globale, fluidifier les interactions et accroître la satisfaction des utilisateurs.

## Approche claire : principes directeurs et bénéfices

##### Intégration fluide pour renforcer l’apprentissage

Le vocabulaire, l’audio et les exercices interactifs sont **étroitement liés**, créant un écosystème cohérent. Les utilisateurs renforcent ainsi naturellement leurs compétences grâce à des **interactions variées** et **connectées,** favorisant une mémorisation et une assimilation efficaces.

##### Expérience d’apprentissage personnalisée

En s’appuyant sur le niveau, les préférences et les comportements de l’utilisateur, l’application propose constamment du contenu et des interactions sur mesure, renforçant considérablement la motivation et l’efficacité de l’apprentissage. Ce qui mène à une **personnalisation centrée sur l’utilisateur**.

##### UX intuitive et engageante

Privilégier des interactions simples, claires et intuitives assure une charge cognitive minime, permettant aux utilisateurs de se concentrer pleinement sur l’apprentissage de la langue plutôt que sur la navigation. L'intégration d'interactions gamifiées, de limites journalières, d'indicateurs de progrès clairs et de retours immédiats motive les utilisateurs à poursuivre une pratique régulière de la langue. Ce qui conduit à une **motivation d’apprentissage continue**.

##### Une approche flexible et accessible à tous les niveaux

Tout en s’adressant à un large public, l’application permet aux utilisateurs de choisir leur type d’apprentissage, tout en suivant une progression définie pour atteindre le niveau suivant. Ce qui mène à un **engagement prolongé sur la plateforme**.

## Conception & itération

#### Premiers wireframes

Nous avons utilisé les wireframes pour définir les fonctionnalités de l’application et structurer ses principales sections ainsi que son architecture de l’information.

- **Cartes Interactives** - un court test pour assurer l’intuitivité du geste pour les utilisateurs dès le départ.

- **Écoute audio** - test de l’accès rapide aux niveaux audio souhaités par l’utilisateur.

- **Chat IA** - test de la clarté de distinction pour les utilisateurs entre la conversation du jour, interactive, et les conversations passées, qui doivent être clairement indiquées comme inactives.

![](images/wireframes-1024x597.png)

#### Tests d’utilisabilité et validation

Nous avons mené des sessions internes de **tests d’utilisabilité** avec **six collègues**. Ces tests portaient sur des wireframes basse fidélité. Nous nous sommes concentrés sur des scénarios basés sur des tâches. L’objectif était d’évaluer rapidement la clarté des interactions, l’intuitivité de la navigation et l’engagement global. Ces retours ont permis d’alimenter des itérations rapides du design.

L’un des **ajustements** a concerné le comportement des cartes, avec l’ajout du bouton «Ne pas apprendre», demandé par les utilisateurs pour les cas où ils ne souhaitaient plus pratiquer un mot ou une expression.

## Conception expliquée

#### Branding et design system

Lea English disposait déjà **d’une identité visuelle** claire et bien définie, que nous avons intégrée naturellement dans notre design system personnalisé. Nous nous sommes appuyés sur les composants issus de [Start UI Figma](/blog/posts/start-ui), une bibliothèque open-source pour Figma que nous avons conçue et utilisons en interne.

Les composants que nous utilisons dans Figma sont déjà implémentés dans [Start UI Native](/blog/posts/start-ui). Cette bibliothèque utilise des technologies comme **TypeScript, React** et **Ficus UI.** Grâce à cela, les développeurs peuvent accélérer immédiatement la phase d’implémentation après la finalisation du design. Par ailleurs, cela garantit une cohérence pour les futures fonctionnalités à venir.

![](images/figma.png)

#### Analyse des fonctionnalités UX 

###### 1\. Cartes de vocabulaire quotidiennes

- **Cartes Interactives à Retourner**
  - Les utilisateurs interagissent via un **geste intuitif de retournement** pour **révéler la traduction**, ce qui renforce la mémorisation active, une technique d’apprentissage éprouvée.
  - L’interaction de retournement stimule immédiatement l’attention cognitive, favorisant une **meilleure mémorisation.**

- **Limite Quotidienne**
  - **La restriction** à 5 cartes par jour permet de gérer la charge cognitive, **d’éviter la fatigue** et d’améliorer **la mémorisation à long terme.**
  - Cela introduit **un élément de gamification,** créant de l’anticipation et la mise en place d’une routine quotidienne.

- **Indicateur de Progression**
  - Des compteurs ou barres de **progression** clairement visibles encouragent l’engagement régulier des utilisateurs et fournissent un **retour immédiat** sur les objectifs atteints dans la journée.

![](images/image-1-e1751294667236-1024x560.png)

###### 2\. Fonctionnalité “Réviser”

- **Listing Synchronisé**
  - Les mots retournés dans les cartes quotidiennes **apparaissent automatiquement** dans la section de révision. Ceux-ci sont clairement indiqués selon l’interaction de l’utilisateur (vert pour connu, rouge pour inconnu).
  - Cette synchronisation assure une **intégration fluide** entre l’apprentissage et la révision du vocabulaire, **renforçant l’assimilation.**

- **Gestion personnalisée du vocabulaire**
  - Les utilisateurs peuvent ajouter manuellement de nouveaux mots pour **personnaliser leur liste de vocabulaire,** améliorant la personnalisation de leur expérience d’apprentissage.
  - Des options telles que marquer un mot comme “connu” ou le supprimer avec “ne plus apprendre” permettent une **gestion efficace des mots** à travailler.

- **Options de présentation flexibles**
  - Les utilisateurs peuvent choisir d’afficher les mots d’abord en français ou en anglais, selon leurs **préférences** d’apprentissage.

- **Audio et Exemples**
  - Les utilisateurs peuvent **écouter la prononciation** directement dans la section de révision, soutenant l’apprentissage auditif.
  - Des exemples de mots ou expressions contextualisés aident à renforcer la compréhension et l’usage correct.

![](images/image-e1751294688522-1024x560.png)

###### 3\. Fonctionnalité “Écouter”

- **Recommandations audio personnalisées**
  - Les audios suggérés sont mis en avant en haut de l’écran selon **le niveau d’anglais** de l’utilisateur (débutant, intermédiaire, avancé), assurant la pertinence du contenu.
  - Chaque audio est clairement étiqueté selon le niveau de langue, le type (dialogue ou monologue) et le thème général, facilitant ainsi une sélection rapide et éclairée.

- **Suivi visuel de la progression**
  - Les audios déjà écoutés sont indiqués en vert, offrant un retour visuel immédiat sur la progression de l’utilisateur.

- **Filtrage avancé**
  - Les utilisateurs peuvent filtrer les audios par favoris, téléchargements hors ligne et niveaux, permettant une personnalisation efficace des sessions d’écoute.

- **Fonctionnalités d’accès rapide**
  - Les options de téléchargement rapide et de mise en favori (cœur) sont directement accessibles depuis la liste des audios, simplifiant les interactions et améliorant l’ergonomie.

- **Écran audio détaillé**
  - Des boutons d’action rapide pour télécharger, ajouter aux favoris ou marquer comme écouté offrent un usage plus pratique.
  - Les transcriptions interactives permettent de basculer instantanément entre l’anglais et le français, avec un surlignage synchronisé du texte pour accompagner la lecture et l’écoute.
  - Le nouveau vocabulaire dans les transcriptions est mis en évidence en majuscules et en gras, afin d’en faciliter la reconnaissance immédiate et l’apprentissage.

- **Barre de contrôle audio fixe**
  - Les contrôles audio restent visibles en permanence pendant le défilement, avec des options intégrées pour régler la vitesse de lecture et afficher ou masquer la transcription, améliorant ainsi le confort et le contrôle de l’utilisateur.

![](images/image-4-e1751355919230.png)

###### 4\. Conversation avec l’IA : “Pratiquer”

- **Sessions de conversations IA quotidiennes**
  - Les utilisateurs participent chaque jour à des conversations guidées avec une IA autour de sujets prédéfinis. Cette pratique encourage l’utilisation active de la grammaire et le développement des compétences conversationnelles.
  - Des corrections en temps réel fournies par l’IA offrent un retour immédiat, permettant aux utilisateurs d’identifier rapidement leurs erreurs et d’en tirer apprentissage.
  - L’utilisateur a un accès rapide à un traducteur pendant la conversation.

- **Mise en évidence des erreurs**
  - Les fautes de grammaire ou de syntaxe sont clairement signalées et corrigées pendant les échanges, aidant les utilisateurs à intégrer les structures linguistiques correctes.

- **Sujets quotidiens structurés**
  - Des thèmes variés chaque jour garantissent une exposition riche à différents vocabulaires et contextes grammaticaux, gardant l’exercice pertinent et motivant.

![](images/image-3-e1751294625433-1024x562.png)

#### Gestion complète du lancement et conception visuelle

En préparation de la sortie publique, nous avons conçu l’ensemble des éléments visuels. Cela inclut des **aperçus détaillés de l’application**, optimisés pour différents formats d’appareils sur **l’App Store et Google Play.** Par ailleurs, nous avons géré en interne **tout le processus de lancement.** Nous avons ainsi garanti une représentation cohérente de la marque. De plus, nous avons assuré une prise en main fluide pour les utilisateurs, sur toutes les plateformes.

#### Lancement itératif et intégration des fonctionnalités

La sortie initiale, **en avril 2025,** a stratégiquement ciblé environ **300 utilisateurs** dès le jour du lancement, afin de constituer un environnement de test contrôlé. Ces premiers retours ont été d’une grande valeur, nous permettant d’itérer rapidement et d’améliorer [l’expérience utilisateur](/blog/posts/pourquoi-lexperience-utilisateur-est-elle-importante) en nous appuyant sur des retours directs.

###### Personnalisation du rythme d’apprentissage

Les utilisateurs ont demandé une fonctionnalité permettant **de choisir le nombre de nouvelles cartes à retourner chaque jour**, afin d’adapter leur apprentissage à leur propre rythme.

###### Fonction speech-to-text

Les utilisateurs ont également demandé **une fonctionnalité de reconnaissance vocale** pour les conversations générées par l’IA, qui a été conçue et intégrée avec succès.

###### Expansion géographique

Les retours de la communauté ont révélé **une demande dans d’autres régions**. Nous avons donc élargi la disponibilité de l’application à plusieurs pays en plus de la France, notamment le Maroc, la République Démocratique du Congo, le Canada, les États-Unis, le Royaume-Uni et l’Allemagne.

Retours sur le lancement:

![](images/frame-33.png)

#### Résultats après lancement - premier mois

La nouvelle application mobile a vu un fort engagement utilisateur dès son premier mois. **Plus de 2 000 installations** sur les plateformes Android et iOS

###### Répartition des abonnements

- Abonnements mensuels : environ **60 % des utilisateurs** ont opté pour un **abonnement mensuel**, la majorité commençant par un essai gratuit.

- Abonnements annuels : environ **30 % des utilisateurs** ont choisi une **formule annuelle**, témoignant d’une forte confiance et d’un engagement durable.

- Abonnements intermédiaires (6 mois) : environ **10 % des utilisateurs** ont préféré cet **engagement intermédiaire**.

###### Informations spécifiques aux plateformes

Ce schéma de répartition des abonnements met en lumière **le succès de l’onboarding et de la stratégie d’abonnement,** indiquant que l’UX a su communiquer efficacement la valeur du produit et encourager un engagement sur le long terme.

Retours trouvés sur AppStore/ Google Play/ Trustpilot :

![](images/avis-1.png)

![](images/avis-2.png)

![](images/avis-3.png)

![](images/avis-4.png)

![](images/avis-5.png)

## Réflexions finales

Au vu des données recueillies, nous pensons avoir réussi à concevoir **une application efficace.** Celle-ci intègre les principes de la psychologie cognitive. Elle propose aussi des interactions UX conviviales et engageantes. En combinant une navigation intuitive avec des éléments d’apprentissage interactifs, elle offre une expérience utilisateur personnalisée. Grâce à cela, notre application favorise u**ne pratique régulière et une motivation durable.** Elle permet aussi des progrès significatifs dans l’apprentissage de l’anglais pour les apprenants francophones.

Vous pouvez consulter **le prototype interactif Figma ici** → [LINK](https://www.figma.com/proto/OfWcem6ytSSSAvaeP9nnOv/%F0%9F%91%A9%F0%9F%8F%BB%E2%80%8D%F0%9F%8F%AB-Lea-English?page-id=1453%3A591&node-id=1562-4425&p=f&viewport=226%2C167%2C0.05&t=8uDnG5QbLEdpTfjn-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1562%3A4425&show-proto-sidebar=1)
