---
state: 'published'
title: 'Le peer programming, avantages, inconvénients et retour d’expérience'
date: 2022-04-13
categories:
  - 'developpement'
tags:
  - 'developpement'
  - 'developpeur'
  - 'retour-dexperience'
heroImage: 'images/peer-programming-illustration.jpg'
languages:
  - 'fr'
excerpt: 'No excerpt available'
---

_Il est arrivé à tout développeur de se retrouver coincé sur un sujet et de ne pas pouvoir avancer sur une fonctionnalité ou un correctif. Même après avoir parcouru [StackOverflow](https://stackoverflow.com/) en boucle, il n’y a aucune solution en vue !_

_Avez-vous seulement demandé de l’aide à vos collègues ? Après une séance de programmation en binôme, vous réaliserez peut-être que la solution est plus proche que ce que vous pensiez._

## Qu’est-ce que le peer programming ?

### Le concept

Le peer ou pair programming est une méthode de travail où 2 développeurs travaillent en binôme sur le même ordinateur. Cette méthode est aussi connue sous d’autres noms, mais le principe est toujours le même : binômage, programmation en binôme et programmation par pairs. Les participants se répartissent entre 2 rôles; conducteur et observateur :

- Celui qui a le contrôle de l’ordinateur est le conducteur de la session. C’est lui qui est chargé de modifier le code.

- L’observateur a pour rôle d’identifier des erreurs possibles dans le code du conducteur, vérifier que l’implémentation est correcte et faire des propositions en cas d’erreur ou de problème.

Durant la session, les rôles changent, ce qui permet aux développeurs de rester concentrés sur la tâche en cours et de progresser sur 2 niveaux : la conception du code et le repérage d’erreurs dans ce code.

![session de peer programming](images/peer-programming-1024x570.jpeg)

### Et le Mob Programming ?

Le principe du mob programming est le même que pour le peer programming, mais appliqué à un groupe plus important. Dans ce cas, il y a alors un conducteur pour plusieurs observateurs. Le changement des rôles sur cette méthode est généralement moins fréquent. Elle est plus souvent utilisée pour un transfert de connaissances.

## Ok, mais ça sert à quoi ?

On a donc 2 ou plusieurs développeurs qui travaillent sur le même sujet, ça c'est compris. Mais quel est l’avantage de cette technique ?

### Transmission des connaissances

Avec un conducteur qui a plus d’expérience, et un observateur junior, le conducteur peut expliquer le fonctionnement du code, tout en travaillant sur une feature. De plus, quand les rôles s'échangent, le junior reçoit des conseils pour améliorer sa méthode de travail, et bénéficie d’un support vers lequel se tourner.

Attention cependant à ce que la différence de niveaux entre les développeurs et la tâche sélectionnée ne soit pas trop importante. (On reparlera de ce point [un peu plus tard](#niveaux) 😉)

### L’onboarding sur de nouveaux projets

Quand un nouveau développeur démarre sur un projet, il met un peu de temps avant de trouver ses marques et de produire du code. En avançant en binôme avec un autre développeur expérimenté sur ce projet, le nouvel arrivant se fera aux spécificités du projet et aura pris de bonnes habitudes pour ce projet une fois qu’il sera autonome dessus.

### En cas de blocage

Deux cerveaux valent mieux qu’un, surtout face à un problème ou un blocage. Si après un certain temps, la source du problème, ou une solution au problème n’est pas trouvée, c’est généralement signe qu’il faut prendre du recul sur la situation. Mais il n’est pas toujours possible de s’éloigner de l’écran pour aller se vider la tête.

La meilleure chose à faire quand le temps manque est de demander de l’aide à quelqu’un qui n’a pas encore eu affaire à ce problème ou était sur un autre sujet. Il faudra alors expliquer le problème et les solutions testées dans les grandes lignes. Avec une nouvelle perspective, il est plus facile de trouver et de tester de nouvelles méthodes et d’autres solutions.

### Meilleur focus

En étant plusieurs sur le même sujet, il serait facile de croire que l’attention et la concentration des participants a tendance à se dissiper. Au contraire, dans une bonne séance de peer programming, il faut savoir prendre des initiatives, faire des propositions, et rester concentré pour ne pas perdre la tâche en cours, ni se perdre dans le code écrit.

### Meilleure qualité de code

Avec 2 développeurs travaillant ensemble, plus d’attention est donnée au code et aux éventuelles erreurs qui peuvent arriver. De plus, le code généré doit être compris par tous développeurs participants. Ce qui force le code à être plus explicite et plus lisible pour la majorité des développeurs.

Si dans le futur, il faut revenir sur ce code, les développeurs auront alors moins de mal à le comprendre, le reprendre et le modifier.

## Une technique dont il ne faut pas abuser

Malgré les avantages de cette technique, il existe des inconvénients à ne pas négliger, et auxquels il faut se préparer :

### Fatigue accrue

En travaillant seul, il est possible de mettre son cerveau en autopilote, pendant que notre esprit est occupé. Mais en peer programming, il faut toujours être attentif, et participer au travail du groupe. Il faut se concentrer sur une tâche sur des périodes plus longues, et donc la fatigue survient plus vite. De plus, sans pouvoir maintenir sa concentration, il est plus difficile d’[être productif](https://www.bearstudio.fr/blog/entrepreneuriat/vous-avez-dit-productivite), et de se retrouver frustré par la situation.

Le mieux pour éviter cette situation est de prendre des pauses de façon régulière pour recharger ses batteries.

### Être interrompu par des meetings

D’un autre côté, s'il y a trop de rendez-vous, de réunions et de meeting dans la journée, une session de peer programming sera trop segmentée, voire impossible.

La seule façon de prévenir ce genre de problème est de planifier la séance de peer programming à l’avance, de limiter les appels à l’approche de la session de peer programming, et de prévoir si une réunion risque de déborder au-delà du temps qui lui est alloué.

### Difficile de s’accorder avec tout le monde

En fonction du développeur partenaire, il peut être plus ou moins difficile de trouver une situation confortable. Que ce soit à cause de personnalités opposées ou d’approches différentes pour la résolution de problème. 

Pour ne pas rester bloqué sur ce point, changer les rôles plus souvent peut aider. Il faut aussi pouvoir rester actif et prendre des initiatives en tant qu’observateur. 

Pour des sessions à répétition, il est aussi possible d’organiser des debriefs et d’évaluer les sessions de peer programming. Afin de voir ce qu’il est possible d’améliorer ainsi que les changements de comportement à adopter.

### Des différences de niveaux

Le peer programming permet un transfert des connaissances plus efficace. Mais il y a une condition qui s’applique pour que cette méthode fonctionne. La différence de niveau des développeurs concernés ne doit pas être trop importante. Prenons un exemple : Si un débutant [Front-end](https://www.bearstudio.fr/prestations/dev-front) faisait du peer programming avec un un expert [Back-end](https://www.bearstudio.fr/prestations/dev-back), sur une tâche complexe de back, le transfert de connaissance ne va pas marcher, ou en tout cas, sera très lent.

Pour ne pas se retrouver dans ce cas de figure, il faut penser à 3 points qui doivent être respectés :

- La tâche sélectionnée convient-elle à un ou plusieurs des développeurs choisis ?

- Est-ce qu’un ou plusieurs des développeurs en question ont les connaissances nécessaires pour comprendre et exécuter la tâche ?

- La différence de niveau entre les développeurs est-elle encore surmontable sans causer de délais ?

Si la réponse à l’une des questions est “NON”, alors il y aura des problèmes.

## Conclusion

Le peer ou mob programming est donc une méthode de travail où 2 ou plusieurs développeurs travaillent ensemble sur le même projet et sur le même poste. C’est une bonne méthode pour :

- Introduire un développeur à un projet ou une nouvelle techno

- Débloquer ou faire avancer une issue ou une feature

- Améliorer la qualité de son code

- Garder la concentration d’une équipe plus longtemps

Mais il ne faut pas abuser de cette technique, sinon il est possible d’être plus fatigué et ne plus être en synchro avec les autres participants. De plus, sans gérer son temps efficacement, il ne reste alors plus de temps pour des meetings ou pour récupérer.

## Retour d’expérience de Yoann Fleury, développeur au BearStudio

J’ai pu faire énormément de mob programming récemment pour un client et c’était vraiment très bénéfique pour tout le monde. 

En effet, je venais d’arriver sur le projet et j’ai pu rapidement comprendre son architecture grâce aux explications des développeurs que j’avais en face de moi. 

J’ai aussi pu rapidement partager mes connaissances en développement front car j’avais les mains sur le clavier et c’était ma mission principale de les faire monter en compétence sur du React moderne. Le legacy étant en React avec des classes et des gestions d’états un peu compliqués. 

Nous avons fait ça en télétravail complet. Le client étant éparpillé entre la région parisienne et Nantes et ça s’est super bien passé. 

Nous étions sur Google Meet, je partageais mon écran, et au fur et à mesure de ce que j’écrivais, je prenais le temps de leur expliquer le code ou les concepts que j’étais en train de mettre en place. 

On ne faisait ça que le matin histoire de ne pas se fatiguer toute la journée. Car rester en appel toute la journée et faire du mob programming, c’est très fatiguant.

Honnêtement, je recommande ce genre d’exercice pour entrer sur un projet et faire monter en compétences l’équipe.

## Sources

[https://www.ionos.fr/digitalguide/sites-internet/developpement-web/pair-programming/](https://www.ionos.fr/digitalguide/sites-internet/developpement-web/pair-programming/)

[https://martinfowler.com/articles/on-pair-programming.html#Challenges](https://martinfowler.com/articles/on-pair-programming.html#Challenges)

[https://www.infoq.com/articles/remote-pair-programming/](https://www.infoq.com/articles/remote-pair-programming/)

[https://www.agilealliance.org/glossary/pairing/](https://www.agilealliance.org/glossary/pairing/)
