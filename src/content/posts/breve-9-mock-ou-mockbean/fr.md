---
title: 'Brève 9 : @Mock ou @MockBean, quelle différence ?'
date: 2021-03-15
categories:
  - 'developpement'
tags:
  - 'java'
  - 'spring'
heroImage: 'images/breve-9.jpg'
metaDescription: "Cette brève vous livre tout ce qu'il y a à connaître à propos de la différence entre @Mock et @Mockbean qu'on utilise beaucoup avec Spring !"
authors: ['quentin-lerebours']
---

Il y a quelques jours, j’ai onboardé un nouveau développeur sur un projet Spring Boot qui a un coverage de test à 80%. N’ayant pas énormément d’expérience avec les tests d’[intégration](https://www.bearstudio.fr/prestations/integration), j’ai pris le temps de lui expliquer la différence entre l’annotation @Mock de Mockito et @MockBean de [Spring Boot](/fr/blog/articles/versionner-entite-jpa), je vais donc en profiter pour résumer ça dans une brève.

Que ce soit @Mock ou @MockBean, les deux annotations permettent de mocker le comportement de vos services ou composants Spring.

_**Note :**_ Mocker, c’est _faker_ le comportement d’un service afin de borner le scope du test que vous réalisez. Par exemple, si vous testez le OrderService, qui a pour dépendance le PaymentService (qui fait appel à une librairie externe comme Stripe), vous pouvez mocker le comportement du PaymentService pour ne pas avoir à le tester en même temps que le OrderService (et aussi, parce que vous ne pouvez pas vous permettre de requêter votre librairie externe pendant vos tests).

Donc, @Mock et @MockBean permettent de mocker, mais dans deux contextes différents.

Pour faire simple, je vais être réducteur et dire que **@Mock permet de mocker une dépendance dans le cadre d’un test unitaire alors que @MockBean permet de mocker une dépendance dans le cadre d’un test d’intégration.**

## **Mock**

Disons que vous testiez unitairement la méthode _order_ de l’OrderService qui permet de passer une commande. Voilà à quoi ressemblerait le setup de votre test :

![](images/code-1-847x1024.png)

Dans un test unitaire, on _instancie_ nous même le service qu’on teste, grâce à son constructeur, ce qui nous permet de lui donner ses dépendances qu’on a mocké. C’est le cas simple, et on peut se servir du mock dans le test pour définir le comportement que la méthode doit avoir.

## **MockBean**

Disons maintenant que vous testiez la méthode _order_ de l’OrderService dans le cadre d’un test d’intégration, voilà globalement à quoi ressemblerait le setup de votre test :

![](images/code-2-949x1024.png)

Ici, on voit bien que ce n’est pas nous qui créons l’instance de notre service (il n’y a pas de new OrderService()). C’est **Spring** qui va chercher à l’instancier lors du lancement de l’application de test. Par conséquent, **comment faire pour dire à Spring que nous souhaitons utiliser un mock**, et non une vraie instance du service ?

Eh bien c’est aussi simple que d’annoter le service par @MockBean, qui est une annotation fournie par [Spring](https://spring.io), et qui va demander à Spring d’instancier l’OrderService en lui donnant notre mock.

Pour tout savoir sur Java, je vous invite à lire notre [toute première brève](/fr/blog/articles/breve-1-rendre-une-methode-atomique-en-java-en-2-minutes).
