---
title: 'Brève 11 - Versionner une entité avec JPA'
date: 2022-03-14
categories:
  - 'developpement'
tags:
  - 'backend'
  - 'developpement'
  - 'spring'
heroImage: 'images/visuel-breve-min-2.png'
metaDescription: 'Comment versionner une entité automatiquement grâce à une simple annotation de JPA'
excerpt: 'Il y a quelques semaines sur un projet Spring Boot, j&rsquo;ai eu besoin qu&rsquo;une de mes entités soit versionnée pour éviter tout problème de mises à jour concurrentielles. J&rsquo;ai alors découvert l&rsquo;annotation @Version de JPA. Je profite de cette découverte pour vous la partager car elle pourrait bien vous être utile. Le besoin : Sur [&hellip;]'
---

Il y a quelques semaines sur un projet [Spring Boot](https://spring.io/projects/spring-boot), j'ai eu besoin qu'une de mes entités soit versionnée pour éviter tout problème de mises à jour concurrentielles. J'ai alors découvert l'annotation `@Version` de JPA. Je profite de cette découverte pour vous la partager car elle pourrait bien vous être utile.

## Le besoin :

Sur un projet **Spring Boot** donc, utilisant une base de données relationnelle (**[PostgreSQL](https://www.postgresql.org/)** par exemple), vous stockez du **contenu non formaté** (du **JSON** par exemple). À partir du moment où il y a stockage d’un contenu non formaté, il est possible que vous ayez des problèmes de versionning du contenu.

## Le versioning :

Le versioning est le fait de créer une copie d’un contenu à un instant T. Ces copies, non-éditables, ainsi que le fichier courant vont former une liste, qui définit les différentes versions de votre contenu.

Une version est souvent décrite de la forme `VersionMajeure.versionMineure.`

## @Version :

La simple annotation `@Version` vous permettra donc de versionner automatiquement un champ d’une entité.

Mais comment est-ce qu’elle fonctionne ? Le champ annoté `@Version` sera incrémenté et une condition va être ajoutée à votre demande de mise à jour afin de vérifier que l’entité n’ait pas été mise à jour parallèlement à votre demande.

`VERSION = VERSION + 1 WHERE ((ID = ?) AND (VERSION = ?))`

Revenons-en au besoin initial, en ajoutant l'annotation `@Version` sur le champ de votre contenu non formaté, lorsque que vous ferez une mise à jour de votre entité, la vérification ci-dessus sera effectuée. Dans le cas où votre champ a été modifié parallèlement, une `OptimisticLockException` sera lancée. Sinon le numéro de version de votre champ sera incrémenté et votre entité sera bien à jour. 

Découvrez aussi l'annotation `@MockBean` dans une [autre brève](/fr/blog/articles/breve-9-mock-ou-mockbean) sur la thématique du [développement back](https://www.bearstudio.fr/prestations/dev-back).
