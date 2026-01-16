---
title: 'Gérer facilement le contenu de votre site avec Outstatic'
date: 2025-04-25
categories:
  - 'developpement'
tags:
  - 'developpement-web'
  - 'retour-dexperience'
heroImage: 'images/outstatic-format-blog-header.png'
authors: ['jeanne-grenet']
---

Il y a quelque temps, j’ai travaillé sur une landing page avec une partie blog. Deux contraintes majeures se présentaient :

- Intégrer facilement cette section dans un projet Next.js déjà en place, 

- Permettre à n'importe qui d'ajouter des articles, sans écrire une seule ligne de code.

 Après plusieurs recherches et tests, j’ai finalement opté pour la librairie [Outstatic](https://outstatic.com/).

## Qu’est-ce que Outstatic ? 

Outstatic est un CMS (Content Management System) open source conçu pour les développeurs utilisant Next.js. Mais contrairement aux CMS classiques comme WordPress, il a plusieurs particularités intéressantes :

- **Sans base de données :** Outstatic fonctionne uniquement avec des fichiers Markdown sauvegardés dans votre dépôt GitHub. Pas besoin de gérer une base de données, tout est simple et rapide.

- **Hébergé directement dans le projet :** Outstatic s’intègre directement à votre projet Next.js. Pas de service externe ou de déploiement séparé.

- I**nterface utilisateur intuitive :** Une fois configuré, n'importe qui (même sans connaissances techniques) peut créer des articles ou des pages grâce à une interface d'administration.

## Avantages et inconvénients

Avant de vous présenter concrètement la librairie, je vais vous donner, selon moi, quelques avantages et inconvénients de cette librairie par rapport aux autres CMS plus classiques.

### Avantages

- Simplicité et rapidité : En quelques minutes, vous obtenez un blog fonctionnel.

- Auto-hébergé : Tout reste dans votre projet, aucune dépendance externe.

- Gestion de brouillons : Flexible pour publier vos articles au bon moment.

- Aucune base de données : Parfait pour les projets statiques.

### Inconvénients

- Dépendance à GitHub : Outstatic nécessite une connexion via GitHub, donc chaque contributeur doit avoir un compte et être ajouté à l'organisation. Il n’est pas possible d’utiliser Outstatic avec d’autres solutions de versioning. De plus, cela peut poser problème dans certaines entreprises pour des profils non techniques.

- Collaborations complexes : Si vous travaillez avec une organisation, cela nécessite une configuration OAuth 

- Ne convient pas pour les gros volumes de données : Lorsque les fichiers des articles, stockés dans votre dépôt Git, deviennent trop nombreux, cela peut entraîner une diminution des performances de votre site.

## Comment configurer Outstatic ?

Configurer Outstatic sur votre projet est très simple, il suffit de seulement 3 étapes :

### Étape 1 : Installer Outstatic

Ajoutez Outstatic à votre projet en exécutant :

```
npm install outstatic
```

### Étape 2 : Créer une application OAuth sur GitHub

Outstatic utilise GitHub pour l'authentification et la gestion des articles. Voici comment créer une application OAuth :

1. Rendez-vous sur [GitHub Developer Settings](https://github.com/settings/developers).

2. Cliquez sur New OAuth App.

3. Remplissez les champs :
   - Application name 
   - Homepage URL : L'URL de votre site (par exemple, `http://localhost:3000` en local).
   - Authorization callback URL : Ajoutez `/api/auth/callback/github` à votre URL (par exemple, `http://localhost:3000/api/auth/callback/github`).

4. Une fois l'application créée, notez vos client ID et client secret.

![](images/image-3-1021x1024-1.png)

### Étape 3 : Intégrer Outstatic dans votre projet : 

1. Créer un fichier .env avec les variables récupérées précédemment.

```
OST_GITHUB_ID=YOUR_GITHUB_OAUTH_APP_ID
OST_GITHUB_SECRET=YOUR_GITHUB_OAUTH_APP_SECRET

# OST_REPO_SLUG
# The name of your repository on GitHub without the username
OST_REPO_SLUG=YOUR_GITHUB_REPOSITORY_SLUG

# OPTIONAL
# If empty this will default to your GitHub username
OST_REPO_OWNER=YOUR_GITHUB_USERNAME

# OPTIONAL
# If empty this will default to main
OST_REPO_BRANCH=YOUR_GITHUB_REPOSITORY_BRANCH
```

2. En suivant la [documentation officielle d’Outstatic](https://outstatic.com/docs/getting-started#adding-outstatic-to-a-nextjs-website), il vous sera très facile de configurer les éléments restants : layout, page administrateur et api

## Comment ajouter du contenu ?

### Création de la collection

Depuis l'interface, vous pouvez créer une collection : par exemple pour un blog vous allez créer la collection “Articles” qui contiendra tous vos articles. Par défaut, chaque élément de la collection a un titre, une description, une image, un auteur, etc, mais vous pouvez également créer des champs personnalisés. Une fois l’article créé, il est sauvegardé dans votre dépôt GitHub sous forme de fichier Markdown dans le dossier défini (content par défaut).

![](images/image-1024x731-1.png)

### Visualisation et récupération des articles : 

Pour récupérer vos articles Markdown, utilisez les méthodes fournies par Outstatic : `getDocuments` ou `getDocumentBySlug`. Convertissez ensuite le contenu en HTML pour les styliser ensuite. 

```
const posts = getDocuments("articles", ["title", "slug"]);

const post = getDocumentBySlug("articles", slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);
```

## Comment styliser l’article ?

Dans mon cas, j’ai choisi d’utiliser Tailwind CSS et plus particulièrement [Tailwind typography](https://github.com/tailwindlabs/tailwindcss-typography) pour gérer le style des articles Markdown : vous pouvez personnaliser vos articles comme vous le souhaitez, en modifiant le style des titres, des images etc…

```
<article className="prose prose-lg prose-h2:font-semibold prose-img:rounded-lg">
 <header>
 <h1>{data.title}</h1>
 <p>Publié le {data.date} par {data.author}</p>
 </header>
 <section>
 {content}
 </section>
</article>
```

## Article en écriture avec Outstatic VS le résultat sur le site

Lorsque vous écrivez un article sur l’interface administrateur, le style n’est pas le même que celui de la page ou vous allez afficher l’article pour vos utilisateurs. Voici par exemple l’interface d’Outstatic sur la première image, c’est ici que vous écrivez l’article, remplissez son titre, sa description etc… Sur la deuxième image, j’ai ajouté du style, et utilisé les propriétés “title”, “author” et “cover image” pour créer l'en-tête de l’article.

![](images/image-1-1024x473-1.png)

![](images/image-2-1024x584-1.png)

## Mon avis sur Outstatic

Dans le passé, j’ai eu l’occasion d’utiliser WordPress pour plusieurs projets, que ce soit dans un cadre professionnel, personnel ou scolaire. Si cet outil reste une référence pour la création de sites et de blogs, il impose néanmoins certaines contraintes en matière de personnalisation. En général, on choisit un thème prédéfini pour structurer l’affichage des articles, ce qui limite la flexibilité et l’intégration au sein d’un projet plus complexe.

Avec Outstatic, l’approche est bien différente. Cet outil offre une gestion de contenu entièrement personnalisable, permettant non seulement de structurer les articles selon ses propres besoins, mais aussi de l’intégrer directement dans un site déjà existant. Il devient ainsi possible de profiter d’une solution de gestion de contenu légère et modulable, sans avoir à dépendre d’un écosystème lourd comme celui de WordPress.

En conclusion, [Outstatic](https://outstatic.com/) est une solution simple et efficace pour ajouter une section blog à un site Next.js. C'est un outil parfait pour les projets où la gestion du contenu doit être rapide et accessible, sans sacrifier le contrôle sur le code.

Auteur: [Jeanne Grenet](https://www.linkedin.com/in/jeanne-grenet)
