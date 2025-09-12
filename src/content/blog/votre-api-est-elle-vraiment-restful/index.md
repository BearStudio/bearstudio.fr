---
state: 'published'
title: 'Brève 4 : Votre API est-elle vraiment RESTful ?'
date: 2020-12-09
categories:
  - 'developpement'
tags:
  - 'api'
  - 'backend'
  - 'http'
  - 'rest'
heroImage: 'images/Brève-4.jpg'
languages:
  - 'fr'
metaDescription: 'Savez vous qu''environ 100% des API dites "REST" ne le sont pas réellement ? Le modèle de maturité de Richardson nous en apprend plus à ce propos.'
excerpt: 'Il y a peu de temps, j&rsquo;apprenais qu&rsquo;environ 100% des API dites « REST » ne le sont pas réellement. C&rsquo;est assez étonnant, mais seulement lorsqu&rsquo;on ne connaît pas le modèle de maturité de Richardson. Ce modèle définit 4 niveaux de maturité pour les API REST : Niveau 0 On parle de Swamp of POX, soit le [&hellip;]'
authors:
  - 'quentin-lerebours'
---

Il y a peu de temps, j'apprenais qu'environ 100% des API dites "REST" ne le sont pas réellement.

C'est assez étonnant, mais seulement lorsqu'on ne connaît pas le **[modèle de maturité de Richardson](https://guide-api-rest.marmicode.fr/api-rest/le-modele-de-maturite-de-richardson)**. Ce modèle définit 4 niveaux de maturité pour les API REST :

![niveaux-api-rest](images/guide-API-2.png)

## **Niveau 0**

On parle de **Swamp of POX**, soit le "domaine du Plain Old XML", lorsque votre API n'utilise aucune fonctionnalité HTTP. On parle alors de XML-RPC over HTTP. En clair, on peut contacter votre API via un point d'entrée unique, on spécifie l'action à effectuer ainsi que la ressource sur laquelle l'effectuer, dans le contenu de la requête. De même, la réponse sera toujours une [200](https://developer.cdn.mozilla.net/fr/docs/Web/HTTP/Status/200#:~:text=Le%20code%20de%20statut%20de,dans%20le%20corps%20du%20message) avec des informations sur le bon (ou mauvais) déroulement de l'action. C'est le fonctionnement standard des **API SOAP**.

## **Niveau 1**

À ce niveau, on utilise les **ressources**, c'est à dire que l'API n'aura plus un endpoint unique mais que chaque ressource aura son propre endpoint (`/users/posts/1/comments`, etc…)

## **Niveau 2**

C'est à ce niveau qu'on met en place l'utilisation des **verbes HTTP**. Il ne sera donc plus nécessaire de dire qu'il s'agit d'une suppression dans le body, puisqu'un endpoint en verbe DELETE sera exposé sur la ressource. Au-delà de l'utilisation des verbes, ce niveau inclut aussi l'utilisation des codes de réponse HTTP (200, 400, etc), afin de ne plus répondre en 200 systématiquement, avec un message d'erreur dans la réponse (si nécessaire).

## **Niveau 3**

C'est le dernier niveau, qui fait que peu d'API sont entièrement RESTful, il s'appelle Hypermedia Controls (ou HATEOAS). À ce niveau, il est possible d'**explorer l'API sans documentation** et sans front-end pour nous guider au travers des endpoints. La problématique est la suivante : lorsque que vous récupérez la liste des utilisateurs sur `/api/users`, comment faites vous ensuite pour récupérer le premier utilisateur ? Par convention, ou par divination, vous me direz de requêter `/api/users/1`, mais ça ne vous permet pas de connaître la liste des actions possibles pour les utilisateurs (comment désactiver mon utilisateur par exemple).

L'idée de ce niveau est donc d'inclure suffisamment d'informations dans la réponse pour permettre d'utiliser l'API sans aucune ressource supplémentaire.

Maintenant que j'ai apprivoisé ce modèle pour créer des API optimisées, on va pouvoir [le mettre au service de nos futurs devs](https://www.bearstudio.fr/prestations) !

### Pour aller plus loin...

[Spring Data REST](https://spring.io/projects/spring-data-rest) permet de développer des services respectant les 4 niveaux du modèle de Richardson.  
De plus, la dépendance `spring-data-rest-hal-browser` permet de visualiser l'API à l'aide d'une interface graphique, basée sur la spécification de l'API qui est standardisée.  
Note : [Christophe Bornet](https://twitter.com/cbornet_) propose aussi un [format d'API](https://github.com/cbornet/ohm) respectant le standard HATEOAS, et permettant une visualisation via l'interface de Swagger/OpenAPI.
