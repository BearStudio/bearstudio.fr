---
title: 'Le canard en plastique est votre ami !'
date: 2025-03-27
categories:
  - 'developpement'
tags:
  - 'developpement'
  - 'developpement-web'
heroImage: 'images/image-24.png'
---

Le titre peut sembler bizarre, mais c’est le nom d’une méthode que beaucoup utilisent au quotidien sans vraiment le réaliser.

Prenons l’exemple suivant : Vous cherchez vos clés, après qu’elles aient encore disparu mystérieusement au moment de partir.

<div class="tenor-gif-embed" data-postid="11029642" data-share-method="host" data-aspect-ratio="1.79137" data-width="100%"><a href="https://tenor.com/view/michael-scott-steve-carrell-rainn-wilson-looking-lost-key-gif-11029642">Looking For Lost Keys GIF</a>from <a href="https://tenor.com/search/michael+scott-gifs">Michael Scott GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Beaucoup retracent leur chemin de long en large et en travers sans succès. Après un moment, vous demandez de l’aide, et d’un coup, vous vous souvenez exactement où vos clés vous attendent

Si cette situation vous parle, vous avez utilisé la méthode du canard en plastique. Mais pourquoi ce nom ?

Tout viendrait d'une anecdote publiée dans le livre _The Pragmatic Programmer_, écrit par Andrew Hunt et David Thomas, dans lequel un développeur garderait un canard en plastique sur son bureau, et se mettrait à lui parler quand il rencontre un problème avec son code, d'où le nom.

Paru en 1999, ce livre est rapidement devenu une référence pour les nombreuses méthodes et astuces qu’il présente pour améliorer son processus de développement. Une réédition, bien que seulement en anglais est sortie en 2019, avec des mises à jour pour refléter les changements dans le domaine.

Petit fun fact, mais ces 2 développeurs ont aussi participé à l’écriture du manifeste Agile.

## C’est quoi cette méthode ?

Le principe est très simple : Quand on est bloqué, et qu’on pense avoir tout essayé, on explique le problème à notre canard.  Non, inutile d’aller en animalerie, nous parlons ici du canard en plastique que vous avez probablement dans votre salle de bain. Avec son aide, on va repasser sur notre code, en expliquant ce qu’il doit faire, ce qu’il fait, et dans quel but. Le souci se révélera de lui-même quand notre explication et le code ne s'alignent pas ! Pour simplifier, on est forcé de prendre du recul sur le code écrit.

Bien que le principe soit simple, il est plus difficile de l’appliquer. Notre cerveau, dans le but d’économiser de l’énergie et des maux de tête, va survoler des parties de notre raisonnement. Cette petite optimisation pour gagner du temps sur la réflexion va nous en faire perdre PLUS car notre erreur se cache dans ce qu’on survole.

<div class="tenor-gif-embed" data-postid="23420660" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/just-blame-on-the-algorithm-gif-23420660">Just Blame On The Algorithm GIF</a>from <a href="https://tenor.com/search/just+blame+on+the+algorithm-gifs">Just Blame On The Algorithm GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Le canard est donc là pour nous servir d’ancre. Lui, il ne connaît pas le contexte du projet, et on doit donc se forcer à tout reprendre de zéro.

De plus, après être confronté à un ou plusieurs échecs, nous avons tendance à entrer dans une spirale défaitiste. La prise de recul permet de se “réinitialiser”, 

## Démonstration

Assez parlé de la théorie, passons à la pratique avec l’exemple suivant :

J'ai une liste de nombres avec lesquels je ne veux additionner que les nombres pairs.

```
const array = [1, 2, 4, 7, 14, 21, 34, 39];
```

J’ai donc écrit la fonction suivante

```
const reduceEvenNumbers = (numberArray: Array<number>) => {
  return numberArray.reduce((sum, num) => {
    return num % 2 === 1 ? sum + num  : sum; 
  }, 0)
}
```

En lançant cette fonction avec l’array donné, je devrais recevoir 54, mais j'obtiens 68.
La situation est idéale pour utiliser la méthode du canard en plastique !  
J’explique donc à mon canard ce que je veux faire: 

> _“Voilà Jean-Luc, je dois additionner tous les nombres pairs présents dans cette liste. Pour ça, j’ai créé une fonction qui applique un reduce sur ma liste._
>
> _Un reduce est un accumulateur qui parcourt un array et le réduit à une valeur selon la fonction donnée. J’ai donc en entrée une fonction personnalisée, et la valeur d’initialisation, qui est bien à 0._
>
> _Ma fonction personnalisée permet d’ajouter à mon accumulateur la valeur parcourue seulement si le nombre est pair._
>
> _Pour vérifier si l’élément parcouru est pair, j’applique un modulo, et s’il me reste 0, alors j’ai un nombre impair.”_

Et c’est en expliquant le raisonnement que l’on peut voir l’erreur. La vérification sur mon modulo n’est pas la bonne, et doit être changée pour enfin avoir le résultat attendu

```
const reduceEvenNumbers = (numberArray: Array<number>) => {
  return numberArray.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num  : sum; 
  }, 0)
}
```

Bien sûr, on n’oublie pas de remercier notre canard, en fin de session.

> _Merci Jean-Luc !_

## Sans canard en plastique, ça marche ?

L’avantage du canard en plastique, c’est qu’il n’est jamais très loin, mais dans les rares cas où il est absent, comment faire pour s’en sortir ?

Petit rappel, mais le canard en plastique est un objet, et n’importe quel autre objet (à condition de pouvoir le personnifier) peut le remplacer.

<iframe src="https://www.youtube.com/embed/uGaeh7d9I0A?si=bFpzkzV-stLZ4qjk&amp;clip=UgkxN2W_esZrnEdYnN7HqX0RL7G3tsG6W56k&amp;clipt=EAAYwscB" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="aspect-ratio: 16 / 9; width: 100% !important"></iframe>

Il est même possible, au lieu de prendre un objet, de demander à un collègue, un membre de la famille, ou n’importe qui (selon votre niveau d’anxiété sociale et possible NDA) à participer !

Cette demande pourra même se transformer en session de [Peer Programming](/fr/blog/articles/peer-programming).

## Petites astuces supplémentaires

Parfois, même avec cette méthode, le problème nous échappe. Dans ce cas, il existe des petites astuces supplémentaires.

### Les logs

C’est généralement le premier réflexe en tant que développeur, mais ajouter des logs au code est une façon simple de voir où se situe le problème.

### Why ?

<div class="tenor-gif-embed" data-postid="5168232340185065064" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/meliwhy-gif-5168232340185065064">Meliwhy GIF</a>from <a href="https://tenor.com/search/meliwhy-gifs">Meliwhy GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>

Comme un enfant de 5 ans, le but est de se demander “Pourquoi ?” à chaque problème que l’on rencontre. Si on reprend le même exemple, voilà à quoi ça pourrait ressembler :

> - _Pourquoi j’ai le mauvais résultat ? Parce que je n’additionne pas les nombre pairs._
> - _Pourquoi je n’additionne pas les nombres pairs ? Parce que ma condition ne marche pas comme prévu._
> - _Pourquoi ma condition ne marche pas comme prévu ? Parce que je regarde si les nombres sont impair plutôt que pair._

En remontant assez haut, on peut trouver une ressource externe qui ne se comporte pas comme prévu (une API, une librairie, un problème de versioning, etc… ), ou localiser le problème entre le clavier et la chaise.

Attention quand même à ne pas remonter trop loin avec ce raisonnement, c’est une façon facile de se perdre dans une boucle infinie de “Pourquoi”.

### Explain it like I’m Five

Cette fois-ci, au lieu de se comporter comme un enfant, on va expliquer notre code de façon simplifiée. En soit, c'est une méthode pour expliquer suffisamment en détail le code à débugger

> _Alors voilà ! J’ai une liste de nombres. Certains sont pairs, d’autres impairs. Je veux les additionner, mais mon programme n’arrive pas à comprendre lesquels sont pairs. Pour savoir si un nombre est pair, je fais ça => X % 2. Je divise par 2, et s’il me reste 0, alors j’ai un chiffre pair, et s’il reste 1, alors c’est impair. Peut-être que j’ai mal vérifié…_

### Chemin inversé

Avec cette méthode, au lieu de repartir du début du code, jusqu’à trouver le problème, on part du problème, et on retrace le chemin, pour trouver l’incohérence entre ce qu’on veut et ce qui est fait.

> _Si la somme finale n’est pas la bonne, c’est que je n’additionne pas les bons nombres, Je vais regarder comment la somme est calculée. J’additionne un nombre que s’il est impair d’après le code. Mais c’est l’inverse dont j’ai besoin. J’inverse la condition, et ça devrait marcher !_

J’espère que cet article vous sera utile, et que votre premier réflexe au prochain problème sera de trouver votre canard ! Et si votre canard n'est pas suffisant, prenez en otage un collègue pour une session de [Peer Programming](/fr/blog/articles/peer-programming)
