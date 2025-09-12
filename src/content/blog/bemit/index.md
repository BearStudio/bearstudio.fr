---
state: 'published'
title: "BEMIT, ou l'utilité du nommage en HTML et CSS"
date: 2017-06-14
categories:
  - 'design-css'
tags:
  - 'bemit'
  - 'css'
  - 'html'
heroImage: 'images/bemit.jpg'
languages:
  - 'fr'
metaDescription: 'BEMIT est la synthèse de deux conventions déjà existantes : BEM (pour Block Element Modifier) et ITCSS (Inverted Triangle CSS Architecture).'
excerpt: 'Your princess is in another div Ne vous est-il jamais arrivé de retourner sur un vieux projet (vous savez, celui mis en suspens il y a deux mois) ou de récupérer celui d&rsquo;un collègue, et de pester car vous ne retrouviez pas les composants que vous cherchez ? Parce que les classes utilisées sont incompréhensibles [&hellip;]'
authors:
  - 'david-endico'
---

## Your princess is in another div

_Ne vous est-il jamais arrivé de retourner sur un vieux projet (vous savez, celui mis en suspens il y a deux mois) ou de récupérer celui d'un collègue, et de pester car vous ne retrouviez pas les composants que vous cherchez ? Parce que les classes utilisées sont incompréhensibles et qu'il vous faut un temps fou pour appréhender la logique derrière la structure du code ? Eh bien grâce à BEMIT, nous allons pouvoir éviter bon nombre de ces frasques !_

Qu'est-ce que BEMIT me demanderez-vous ? C'est en fait la synthèse de deux conventions déjà existantes : BEM (pour Block Element Modifier) et ITCSS (Inverted Triangle CSS Architecture).

## Salut, ça BEM ?

Première composante de cette convention, et non des moindres : BEM. Son but est d'apporter plus de clarté et de transparence dans votre code en adoptant un formalisme de classe à trois niveaux :

- **Block :** la racine du composant, notée `.block`
- **Element :** un élément de Block, noté `.block__element`
- **Modifier :** une variante ou extension de Block, notée `.block--modifier`

Voici une illustration :

```
.person /* Un block lambda */
.person__hand /* Une partie de ce block */
.person--female /* Une variante de ce block */
.person--female__hand /* Une partie de la variante */
.person__hand--left /* Une variante de la partie */
```

De façon plus concrête, voici ce qu'un code en CSS simple donnerait une fois retranscrit selon la nomenclature BEM :

```
<div class="card article sponsorised">
    <img class="img photo"/>
    <p class="text presentation">
        ...
    </p>
</div>
```

Deviendra :

```
<div class="card article article--sponsorised">
    <img class="card__img article__photo logo"/>
    <p class="card__text article__presentation">
        ...
    </p>
</div>
```

Même si de prime abord la solution semble un peu plus verbeuse, il faut peu de temps pour s'apercevoir qu'elle permet surtout d'instantanément identifier les différentes composantes et les liens de parenté entre chacune.

`article`, `article--sponsorised`, `article__photo` et `article__presentation` sont liés les uns aux autres, tandis que `card`, `card__img` et `card__text` forment un autre groupe identifié, alors que `logo` est une dernière classe isolée n'ayant aucun lien de parenté avec les autres éléments cités.

Faisant la part belle aux concepts tels que le *Don't Repeat Yourself*, la convention BEM apporte clarté, sécurité et compréhension accrue de la structure du code.

Il peut demeurer fastidieux d'identifier exactement le rôle de chacun, non seulement d'un point de vue relatif mais surtout global et inhérent au projet, afin de comprendre rôle, comportement et implantation de chacun. Et vous avez de la chance, le namespacing est là à la rescousse !

## Namespace oddity

Le Namespace correspond au préfixage des classes dans le but d'ajouter précision et compréhension quant à leur usage et leur place au sein de votre code.

Personnellement, j'aime à décomposer cette structure en 4 préfixes principaux, qui peuvent être complétés et aggrémentés suivant les besoins et les ressources de votre projet :

- **Layout : `l-`** :  
   Il regroupe tous les éléments faisant partie de la mise en page. C'est l'une des parties générales et structurelles de votre UI, utilisée généralement sur tous les écrans de votre site.  
   Exemple : `l-header` `l-typography` `l-sidebar` `l-contact` `...`  

- **Object : `o-`** :  
   Il signifie que cet élément est un objet. C'est une partie d'UI déterminée et identifiable (_"Ceci est un bouton", "Ceci est une modale"..._) qui peut être utilisée de manière répétée dans votre projet.  
   Exemple : `o-buttons` `o-cards` `o-panels` `o-breadcrumbs` `...`  

- **Component : `c-`** :  
   Il signifie que cet élément est un composant. C'est un élément spécifique (parfois même abstrait), qui peut être utilisé de manière ciblée, sans discernement de sa position dans le code.  
   Exemple : `c-media` `c-input-slider` `c-checkbox` `c-avatar` `...`  

- **Utility : `u-`** :  
   C'est une classe utilitaire. Elle est utilisée pour écraser et modifier le comportement des éléments ciblés.  
   Exemple : `u-text-align` `u-display` `u-spin` `u-no-margin` `...`  


```
<div class="l-grid">
    <div class="l-grid__cell o-card c-article c-article--sponsorised">
        <img class="o-card__img c-article__photo"/>
        <p class="o-card__text c-article__presentation u-text-center">
            ...
        </p>
    </div>
</div>
```

Dans cet exemple, nous pouvons donc facilement identifier les différentes strates qui composent ce bout de code : un élément structurel principal `l-content` regroupant un objet `o-card` et ses dépendances `o-card__img` et `o-card__text`, modifié par un composant spécifique : `c-article`, `c-article--sponsorised`, `c-article__photo` et `c-article__presentation`. En plus de ces préfixes principaux, vous pouvez également trouver :

- **State : `is-` / `has-`** :  
   C'est une classe d'état.  
   Elle sert à indiquer un changement visuel lié à une action effectuée sur la page. Exemple : `is-loading` `is-collapsed` `has-error` `has-result` `...`  

- **JavaScript : `js-`** :  
   Cette dernière classe indique la présence d'une interaction JavaScript.  
   Exemple : `js-map` `js-slider` `...`  


(Plus marginaux, d'autres préfixes peuvent également être utilisés, tels que `t-` pour les classes destinées à modifier le thème du projet, `s-` pour les éléments de pure stylisation graphique, `qa-` pour les tests ou encore `_` pour les gros hacks de guedin.)

Néanmoins, nous pouvons déjà constater qu'avec uniquement cette liste de brefs préfixes, il devient beaucoup plus agréable de communiquer et de comprendre le rôle de l'ensemble des éléments et des classes utilisées (de même que de détecter les héritages ou erreurs qui logiquement ne seront pas préfixés). Mais ne nous arrêtons pas en si bon chemin !

## Mon développeur était maçon

Outre le fait de pouvoir facilement lire et comprendre son code, demeure la question de retrouver ses classes CSS au sein du ou des différents fichiers de votre projet. Heureusement, là encore des solutions existent !

En s'appuyant sur le namespacing précédent, nous pouvons décomposer l'architecture de nos fichiers CSS en autant d'artefacts nécessaires. Un premier filtrage peut être effectué au niveau des types d'éléments utilisés, traités sous forme de dossiers de la manière suivante :

- **Settings :** Les paramètres et variables de configurations génériques à l'ensemble du site (typographies, couleurs, marges, etc...)
- **Layouts :** Les éléments génériques composant les principaux blocs et pages de votre site (header, article, blog...)
- **Objects :** Les éléments courants utilisés de manière récurrente sur le site
- **Components :** Les petits éléments utilisés de manière spécifique
- **Utils :** Les classes utilitaires utilisées pour modifier le comportement des éléments HTML

Une fois cette architecture mise en place, il devient aisé dans chacun de ces dossiers d'ajouter un fichier CSS par élément créé, tous appelés ensuite dans un fichier global (_app.less ou app.scss par exemple_) de la manière suivante :

```
/* ----- SETTINGS ----- */
/* Legacies, settings and overall configuations */

@import "base/_colors";
@import "base/_fonts";
@import "base/_resets";
...

/* ----- LAYOUT ----- */
/* Layout and general components' style */

@import "layout/_body";
@import "layout/_content";
@import "layout/_sidebar";
...

/* ----- COMPONENTS ----- */
/* Specific and small items' style */

@import "components/_datetimepicker";
@import "components/_divider";
@import "components/_input-period";
...

/* ----- OBJECTS ----- */
/* Containers, forms, et others specific general items' style */

@import "objects/_breadcrumb";
@import "objects/_buttons";
@import "objects/_cards";
...

/* ----- UTILS ----- */

@import "utils/_utils";
```

Ce type de structure de fichier a deux avantages : commenter/décommenter une feuille de style spécifique en cas de problème, de test ou d'inutilisation devient un jeu d'enfant, ce qui offre un gain de temps non négligeable. De plus, il devient d'autant plus facile de comprendre la hiérarchie, l'utilité et le comportement de l'ensemble des classes utilisées sur le projet. Que demande le peuple ?

## Le mot de la fin

Comme vous pouvez le constater, il n'a fallu que quelques apports simples à BEM pour le transformer en BEMIT: l'ajout d'un préfixage et la mise en place d'une architecture mettant l'accent sur la compréhension et la lisibilité se révèle être un atout inestimable lors du [développement](https://www.bearstudio.fr/prestations/dev-front) de vos sites, applications et webapps.

Adieu râleries, classes sans queue ni tête et architectures chaotiques, désormais, votre code est robuste, maintenable et lisible, et ce pour tous les acteurs de votre projet !
