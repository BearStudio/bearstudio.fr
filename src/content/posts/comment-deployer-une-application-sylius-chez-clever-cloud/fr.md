---
title: 'Comment déployer une application Sylius chez Clever Cloud ?'
date: 2021-04-14
categories:
  - 'developpement'
heroImage: 'images/sylius-clever-cloud-tuto-article.png'
---

## De Sylius à Clever Cloud, il n'y a qu'un pas...

Sylius, framework e-commerce, et Clever Cloud, spécialiste de la mise en ligne de solutions web, sont deux incontournables à découvrir pour les développeurs curieux. Tour d’horizon des outils et focus sur notre méthode de déploiement d’une application Sylius chez Clever Cloud. 

## Sylius : le framework open-source pour e-commerce

Créé en 2016, [Sylius](https://sylius.com/) ne se définit pas comme une solution e-commerce mais bien comme étant un framework offrant aux développeurs **un environnement de [développement](https://www.bearstudio.fr/prestations/dev-back) solide pour la mise en place d’une solution de vente en ligne**. Sylius s’appuie notamment sur le framework PHP Symfony, pour offrir à ses utilisateurs une large possibilité d’évolutions et de fonctionnalités. Disponible en **open-source**, il permet à qui le souhaite d’en disposer (pour en savoir plus à propos de ce type de logiciel, je vous invite à lire cet [article](/blog/posts/linux-logiciels-libres-et-open-source-retrouvez-votre-liberte) :) ).

## Clever Cloud : la plateforme d’automatisation pour vos projets

Fondée en 2010, [Clever Cloud](https://www.clever-cloud.com/fr/) est une SSII Nantaise **spécialisée dans le cloud computing**. La plateforme a pour but de simplifier la mise en ligne de solutions web, du déploiement jusqu’à l’hébergement. Clever Cloud propose un service complet qui permet aux entreprises de déployer sans avoir à gérer un serveur web. 

## Déployer son projet Sylius avec Clever Cloud, vu par BearStudio

Plusieurs possibilités sont envisageables pour déployer votre projet Sylius avec Clever Cloud. Dans cet article, nous décrirons pas à pas comment nous nous y sommes pris pour le déploiement et les méthodes utilisées. Vous pouvez ensuite **les adapter comme vous le souhaitez à votre projet**. Nous parlerons également régulièrement du terminal et des commandes utilisées, mais là encore vous pouvez opter pour une interface graphique afin de réaliser ces étapes. N'hésitez pas à nous partager vos tips à ce sujet via les réseaux sociaux !

## Comment générer le projet Sylius ?

Pour générer votre premier projet Sylius, rien de mieux que de prendre en livre de chevet la [documentation disponible en ligne](https://docs.sylius.com/en/latest/book/installation/installation.html). Celle-ci est assez complète et vous aidera à créer votre premier projet étape par étape.

Pour vous faire **gagner un peu de temps**, sachez que la ligne de commande suivante vous permettra de créer votre projet avec la version de Sylius que nous avons utilisée, avec la création du dossier _MyFirstShop_ pour l’hébergement en local du projet.  Assurez vous de disposer de la version 2 de Composer (`composer -v`) et de PHP version 7.4 (`php -v`).

`composer create-project sylius/sylius-standard MyFirstShop`

Par la suite il vous faudra créer un nouveau dépôt Git via la commande `git init` afin de push vers Gitlab ou Github (découvrez ici le [git de survie](/blog/posts/git) du BS).

Après cette installation, nous vous invitons à poster le projet sur [GitLab](https://about.gitlab.com/) pour pouvoir paramétrer l’intégration continue _(Continuous Integration)_, ce qui permettra, selon sa configuration, de déployer automatiquement votre code vers votre application Clever.

## Créer son application sur Clever Cloud

Il est maintenant temps de créer votre application sur Clever Cloud. Là encore, **le site officiel propose un très bon tutoriel** pour vous permettre de déployer votre [projet Symfony sur les services de Clever Cloud](https://www.clever-cloud.com/doc/php/tutorial-symfony/).

En quelques mots, via l’interface de Clever Cloud, il vous faudra choisir la création d’une nouvelle application et choisir PHP comme type de projet. Vous devez opter pour le type Git afin de faire le lien avec ce qui a précédemment été mis sur GitLab. Optez ensuite pour une instance XS et nommez votre application _MyFirstShop_.

Dans un second temps, vous devez **ajouter un addon de base de données pour compléter votre application** et permettre son bon fonctionnement. Par défaut, Sylius est configuré avec MySQL mais vous pouvez utiliser PostgreSQL en modifiant le fichier `config/package/prod/doctrine.yml`. Sélectionnez le plan DEV et nommez votre addon _MyFirstShop-db_.

Nous choisissons ensuite une version de PHP pour le projet, nous optons au minima pour une version 7.4.

Vous vous retrouvez alors sur le formulaire des variables d'environnement de votre application. Dans un premier temps, modifiez uniquement celle nommée `CC_PHP_VERSION` en lui attribuant la valeur `7.4`.

Pour associer son code à l’application de Clever, si vous êtes plutôt un adepte des lignes de commande, utilisez le [Clever CLI](http://clever-cloud.com/doc/clever-tools/getting_started/)[](http://clever-cloud.com/doc/clever-tools/getting_started/).

Créez l’app

`clever create --type php MyFirstShop`

Créez l’addon relié a l’app

`clever addon create mysql-addon MyFirstShop-db --link MyFirstShop`

## Paramétrer son application Sylius chez Clever Cloud

Pour paramétrer notre application, nous devons activer le _build_ sur une instance dédiée. Rendez-vous dans le menu _Information_, dans la section _Application edition_ :

![](images/image-8-1024x109.png)

Ou via le CLI

_`` `clever scale --build-flavor M` ``_

Et ajoutez les variables d’environnement suivantes :

`APP_DEBUG = 0 (ou 1 si vous voulez activer le mode debug)   APP_ENV = prod (ou dev)   APP_SECRET = ThisTokenIsNotSoSecretChangeIt   CC_WEBROOT = /public   MAILER_URL = smtp://localhost   DATABASE_URL = contenu de MYSQL_ADDON_URI`

Attention pour “DATABASE_URL”, il est nécessaire de prendre le contenu de la variable MYSQL_ADDON_URI qui a été automatiquement ajoutée. Dans le tutoriel de Clever, il y a une coquille puisque `DATABASE_URL = $MYSQL_ADDON_URI` ne fonctionne pas.

Pour builder le front, il faut ajouter la variable `CC_POST_BUILD_HOOK = yarn install && yarn build`.

Ne pas oublier de cliquer sur _Update changes_, et ensuite _Restart the app to apply changes_ :

![](images/image-2-1024x486.png)

Cette configuration est également possible via le CLI :

`clever env set APP_DEBUG O   clever env set APP_ENV prod   clever env set APP_SECRET ThisTokenIsNotSoSecretChangeIt   clever env set CC_WEBROOT /public   clever env set MAILER_URL smtp://localhost   clever env set DATABASE_URL  [contenu de $MYSQL_ADDON_URI]   clever env set CC_POST_BUILD_HOOK "yarn install && yarn build"`

Ne pas oublier de _commit_ les modifications pour pouvoir _push_ l’application sur Clever Cloud. Maintenant que tout est prêt, il faut _push_ l’application depuis Clever directement. Pour cela, dans le terminal, il faut lancer la commande `clever deploy`. Ensuite, si vous avez créé votre application via la Console Clever, il vous faut **lier votre application en local** à l'aide de `clever link <app_id>` avec `<app_id>` ayant pour valeur l'id de votre application, renseigné dans _Information > Application information_.

![](images/image-7.png)

Après cette première étape, il faut **initialiser la base de données**. Depuis le terminal, lancez la commande `clever ssh`, ce qui vous permet d'accéder à la VM sur laquelle est déployée l'app :

![](images/image-6.png)

On descend alors dans le dossier présent et on lance la commande suivante.

`php bin/console doctrine:schema:update --force --env=prod`

![](images/image-4-1024x230.png)

Pour initialiser la base avec les données injectées par Sylius.

`` `php bin/console sylius:fixtures:load --env=prod` ``

![](images/image-5-1024x204.png)

`exit` pour quitter la VM puis `clever open` pour ouvrir l’application dans votre navigateur.

Et si ça fonctionne :

![Page du site généré](images/image-2-1024x490.png)

Et voilà, vous savez tout sur le déploiement d'une application avec Sylius via Clever Cloud ! À très vite pour de nouvelles explications ;)
