---
state: 'published'
title: 'Déployer une app JHipster sur Clever Cloud'
date: 2021-08-24
categories:
  - 'developpement'
heroImage: 'images/visuel-article-JHipster-Deploy.png'
languages:
  - 'fr'
excerpt: 'No excerpt available'
---

Cet article est la traduction française d'un tuto réalisé par [Rudy](https://www.bearstudio.fr/team/rudy-baer), notre CTO, directement sur le [forum JHipster](https://www.jhipster.tech/clever-cloud/).

## Avant de commencer

Il faut installer [Clever Cloud CLI](https://www.clever-cloud.com/doc/reference/clever-tools/getting_started/). Toutes les commandes ont leur équivalent via l'interface, mais par habitude, on préfèrera utiliser les commandes dans le terminal.

Vous devez aussi [créer un compte Clever Cloud](https://api.clever-cloud.com/v2/sessions/signup) et vous connecter avec le CLI en lançant la commande `clever login`.

```
Opening https://console.clever-cloud.com/cli-oauth?cli_version=2.7.1&cli_token=XXX in your browser to log you in…
Login successful as ...
```

## Créer une application Clever Cloud

1. Si vous utilisez Maven : `clever create --type maven [your application name]`, ou Gradle : `clever create --type gradle [your application name]`.
2. Ajoutez une base de données à votre application : `clever addon create [addon provider] [your addon name] --link [your application name]`.

Liste des fournisseurs d'addons supportés : `clever addon providers`

```
 cellar-addon      Cellar S3 storage       S3-like online file storage web service
 config-provider   Configuration provider  Expose configuration to your applications  (via environment variables)
 es-addon          Elastic Stack           Elasticsearch with Kibana and APM server as options
 fs-bucket         FS Buckets              Persistent file system for your application
 mongodb-addon     MongoDB                 A noSQL document-oriented database
 mysql-addon       MySQL                   An open source relational database management system
 postgresql-addon  PostgreSQL              A powerful, open source object-relational database system
 redis-addon       Redis                   Redis by Clever Cloud is an in-memory key-value data store, powered by Clever Cloud
```

[Voir les addons supportés](https://www.clever-cloud.com/doc/getting-started/quickstart/#create-your-first-add-on)

3\. Configurez la variable d'environnement : `clever env set CC_PRE_RUN_HOOK "cp ./clevercloud/application-clevercloud.yml ./application-prod.yml"`.

4\. Activez le build dédié : `clever scale --build-flavor M`.

## Configurer votre application JHipster

1. Ajoutez un répertoire `clevercloud/` à votre projet
2. Créez le fichier `clevercloud/application-clevercloud.yml` pour utiliser un addon de l'environnement Clever Cloud prédéfini

Avec PostgreSQL

```
spring:
     datasource:
         type: com.zaxxer.hikari.HikariDataSource
         url: jdbc:postgresql://${POSTGRESQL_ADDON_HOST}:${POSTGRESQL_ADDON_PORT}/${POSTGRESQL_ADDON_DB}?useUnicode=true&characterEncoding=utf8&useSSL=false
         username: ${POSTGRESQL_ADDON_USER}
         password: ${POSTGRESQL_ADDON_PASSWORD}
         hikari:
             maximumPoolSize: 2
```

Avec MySQL

```
spring:
     datasource:
         type: com.zaxxer.hikari.HikariDataSource
         url: jdbc:mysql://${MYSQL_ADDON_HOST}:${MYSQL_ADDON_PORT}/${MYSQL_ADDON_DB}?useUnicode=true&characterEncoding=utf8&useSSL=false
         username: ${MYSQL_ADDON_USER}
         password: ${MYSQL_ADDON_PASSWORD}
         hikari:
             maximumPoolSize: 2
```

Avec MongoDB

```
spring:
   data:
     mongodb:
       uri: ${MONGODB_ADDON_URI}
       database: ${MONGODB_ADDON_DB}
```

3\. Ajoutez un fichier ._json_ contenant le goal suivant pour indiquer comment démarrer l'application.

Pour Maven, créez un fichier `clevercloud/maven.json` et utilisez l'artifactld de votre _pom.xml_

```
 {
     "build": {
         "type": "maven",
         "goal": "-Pprod package -DskipTests"
     },
     "deploy": {
     "jarName": "./target/[REPLACE BY ARTIFACTID]-0.0.1-SNAPSHOT.jar"
     }
 }
```

Pour Gradle, créez un fichier `clevercloud/gradle.json` et utilisez le rootProject.name _gradle.properties_.

```
{
     "build": {
         "type": "gradle",
         "goal": "-Pprod bootJar -x test"
     },
     "deploy": {
         "jarName": "./build/libs/[REPLACE BY rootProject.name]-0.0.1-SNAPSHOT.jar"
     }
 }
```

## Déployer votre application

### Avec CLI

Vous devez commit avant de déployer : `git commit -m "Clever deploy"`

Ensuite exécutez : `clever deploy`

### Avec Gitlab CI

Ajoutez `$CLEVER_TOKEN` et `CLEVER_SECRET` aux variables d'environnement de Gitlab

Ajoutez cette étape à votre `.gitlab-ci.yml`.

```
deploy-to-clever-env:
  stage: deploy
  variables:
    APP_NAME: [clever cloud app name]
    APP_ID: [clever cloud app id]
  script:
    - wget https://clever-tools.cellar.services.clever-cloud.com/releases/latest/clever-tools-latest_linux.tar.gz
    - tar xvzf clever-tools-latest_linux.tar.gz
    - ./clever-tools-latest_linux/clever login --token $CLEVER_TOKEN --secret $CLEVER_SECRET
    - ./clever-tools-latest_linux/clever link ${APP_ID}
    - ./clever-tools-latest_linux/clever deploy -a ${APP_NAME}
  environment:
    name: [env name]
    url: https://${APP_NAME}.cleverapps.io
```

## Modifier la version Java

Vous pouvez sélectionner la version Java (Java 11 par défaut)

```
clever env set CC_JAVA_VERSION 12
```

### Plus d'informations

- [Documentation Clever Cloud](https://www.clever-cloud.com/doc/)
- [Déploiement Clever Cloud pour Java Maven](https://www.clever-cloud.com/doc/deploy/application/java/java-maven/)
- [Déploiement Clever Cloud pour Java Gradle](https://www.clever-cloud.com/doc/deploy/application/java/java-gradle/)
