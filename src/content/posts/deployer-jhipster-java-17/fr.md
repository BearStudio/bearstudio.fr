---
title: 'Brève 13 - Exécuter et déployer un projet JHipster avec Java 17'
date: 2022-07-05
categories:
  - 'developpement'
tags:
  - 'backend'
  - 'java'
  - 'jhipster'
heroImage: 'images/visuel-breve-13.png'
metaDescription: 'Comment exécuter et déployer un projet JHipster en utilisant Java 17'
excerpt: 'Cette brève est une traduction de l’article publié par Quentin sur dev.to.&nbsp; Dans ce court article, je vais expliquer comment exécuter et déployer un projet JHipster en utilisant une autre version de Java que la version standard utilisée par JHipster (Java 11 actuellement). Etape 1 : Faire tourner son projet JHipster sur la version Java [&hellip;]'
authors: ['quentin-lerebours']
skills: []
---

Cette brève est une traduction de l’[article publié par Quentin sur dev.to](https://dev.to/qlerebours_/upgrade-your-jhipster-project-to-java-17-3al6). 

Dans ce court article, je vais expliquer comment exécuter et déployer un projet JHipster en utilisant une autre version de Java que la version standard utilisée par JHipster (Java 11 actuellement).

## Etape 1 : Faire tourner son projet JHipster sur la version Java ciblée

### Utilisez la bonne version de Java en local

Tout d'abord, vous devez avoir la version Java ciblée dans votre environnement local. Si vous utilisez [SDK man](https://sdkman.io/), vous pouvez exécuter :

- `sdk list java`
- Une fois que vous avez trouvé la version cible, installez-la avec `sdk install java 17.0.2-open` (par exemple)
- Enfin, lancez `sdk use java 17.0.2-open` pour l'utiliser dans votre terminal 

💡 SDK man est un excellent outil pour gérer plusieurs versions de Java sur votre environnement. Il permet d'installer facilement les versions et de passer d'une version à l'autre.

### Définissez la bonne version de Java pour le projet

Une fois que vous utilisez la bonne version de Java localement, il vous suffit de modifier la version cible dans le projet. Si vous utilisez Maven, il suffit de changer `<java.version>17</java.version>` dans le `pom.xml`

🎉 C’est prêt, vous pouvez essayer d'exécuter le projet avec `./mvnw`

💡 Si vous voyez une erreur "Invalid target release 11", c'est probablement que votre version locale et celle du projet ne sont pas synchronisées. Elles doivent être identiques (17 dans mon cas).

## Étape 2 : Corriger la CI

Si vous utilisez une CI et que votre CI utilise l'image Docker `jhipster/jhipser:latest` pour exécuter le projet et les tests, cela ne fonctionnera plus car cette image Docker est basée sur `eclipse-temurin:11-jre-focal` qui utilise Java 11.

Cela signifie que vous devrez recréer votre propre image Docker basée sur Java 17, mais ne vous inquiétez pas, ce n'est pas compliqué :

- Clonez le projet [generator-jhipster](https://github.com/jhipster/generator-jhipster) sur Github
- Ouvrez le Dockerfile qui se trouve à la racine du projet
- Modifiez l'image de base en `eclipse-temurin:17-jre-focal`
- Créez un dépôt sur le hub docker. Supposons qu'il s'appelle `myOrganization/jhipster-java-17`
- Créez la nouvelle image avec `docker build . -t myOrganization/jhipster-java-17:latest`
- Poussez la toute nouvelle image vers le hub avec `docker push myOrganization/jhipster-java-17:latest`
- Enfin, changez l'image docker utilisée dans votre CI en `myOrganization/jhipster-java-17:latest` et quand votre CI sera ré-exécutée, elle fonctionnera à nouveau

## Étape 3 : Modifiez votre environnement Cloud

Au [BearStudio](/fr/prestations), nous utilisons [CleverCloud](http://clever-cloud.com/) qui permet de modifier la version Java cible très facilement grâce à la variable d'environnement `CC_JAVA_VERSION` qu’il faut mettre à jour à la version 17, avant la sauvegarde de vos changements.

**C'est fait, votre projet JHipster devrait maintenant fonctionner sur Java 17 🎉**

Si vous n'utilisez pas encore JHipster, vous pouvez [apprendre à générer votre premier projet ici](/fr/blog/articles/jhipster-generateur-projet-hipsters).
