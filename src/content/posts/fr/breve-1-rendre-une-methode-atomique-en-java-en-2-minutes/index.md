---
title: 'Brève 1 : Rendre une méthode atomique en Java en 2 minutes'
date: 2020-09-11
categories:
  - 'developpement'
tags:
  - 'acid'
  - 'backend'
  - 'java'
heroImage: 'images/breve-1.jpg'
metaDescription: 'Vous souhaitez rendre une méthode atomique en Java en seulement 2 minutes ? On vous explique tout ici, les exemples en plus !'
authors:
  - 'quentin-lerebours'
---

_Temps de lecture : 3 minutes_

## Qu'est-ce qu'une méthode atomique ?

Une méthode (ou fonction) atomique, c'est une méthode qui ne pourra pas s’exécuter plusieurs fois en même temps, parallèlement. Si deux threads appellent la fonction en même temps, les deux exécutions seront effectuées les unes après les autres.

## Comment rendre une méthode atomique très simplement avec Java ?

La librairie `Funtom Java Utils` permet de rendre une méthode atomique en quelques lignes, à l'aide de la classe `SynchronizedExecutor`  
Lorsque vous souhaitez rendre du code atomique, dans un service de votre application [Spring](/blog/posts/versionner-entite-jpa) par exemple, il vous suffit :

- D'instancier un executeur synchrone (SynchronizedExecutor) en attribut de classe: `SynchronizedExecutor atomicExecutor = new SynchronizedExecutor();`
- Utiliser cet executor dans une méthode pour rendre du code atomique: `atomicExecutor.execute(() -> { // some code to execute });`

### **Un exemple concret :**

Vous [développez une application](https://www.bearstudio.fr/prestations/dev-back) pour commander des places de cinéma et vous vous attaquez à la fonction permettant de réserver une place. Vous avez besoin de rendre ce code atomique car sinon deux personnes pourraient réserver en même temps la dernière place de cinéma disponible.

![Exemple de code d'une fonction Java atomique](images/atomic_method-2-1024x600.png)

### Pour aller plus loin : La librairie propose aussi d'autres synchroniseurs

- `PerKeySynchronizedExecutor` qui permet de bloquer les exécutions parallèles seulement si une exécution parallèle est effectuée avec la même "Clé". Dans notre exemple, il serait très utile car ce serait préférable de bloquer l’exécution uniquement pour des réservations sur une même séance de cinéma. Le code: `private final PerKeySynchronizedExecutor<Long> atomicExecutor = new PerKeySynchronizedExecutor<>();` . Ici, `Long`  c'est le type de la clé qu'on va donner. Lors de son utilisation: `atomicExecutor.execute(movieShow.getId(), () -> { // some code });` où `movieShow.getId()` est l'identifiant de la séance. Si une personne A réserve sur la séance d'id 1 et une personne B réserve sur la séance d'id 2, elles pourront le faire parallèlement.
- `ReadWriteSynchronizedExecutor`  qui permet de bloquer l’exécution parallèle en écriture mais pas en lecture
- `PerKeyReadWriteSynchronizedExecutor` qui fait de même mais uniquement sur un clé spécifiée
