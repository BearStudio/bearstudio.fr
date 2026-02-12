---
title: 'Brève 12 - Bonjour, vous connaissez Rust ?'
date: 2022-05-03
categories:
  - 'developpement'
tags:
  - 'developpement'
heroImage: 'images/visuel-breve-min-3-1.png'
metaDescription: >
  Dans cet article, Yoann vous propose une liste de ressources complète pour
  l'apprentissage du langage Rust
authors:
  - yoann-fleury
---

Ce titre d’article est le résumé de ce que les collègues entendent avec moi presque tous les jours :

https://twitter.com/IvanDalmet/status/1475382332651675650

Dans cet article, je vous propose une liste de ressources pour l’apprentissage du langage [Rust](https://www.rust-lang.org/fr/). (Et non pas du jeu vidéo du même nom). 

Ici, pas de Hello World, pas de cours sur les conditions, les boucles, le borrowing, le [développement back](https://www.bearstudio.fr/prestations/dev-back), mais une liste de ressources pour vous permettre d’apprendre le langage. 

## Rust, qu’est-ce que c’est ?

Rust est un langage de programmation qui commence à prendre de plus en plus de place dans le monde du développement. ([C'est le deuxième langage officiel](https://lkml.org/lkml/2021/12/6/461) du [noyau Linux](/fr/blog/articles/linux-logiciels-libres-et-open-source-retrouvez-votre-liberte)). Il contient des concepts qu’il est intéressant d’aborder même si on ne développe pas avec tous les jours.

Rust est très présent au niveau système et c’est pour cela qu’on retrouve beaucoup d’alternatives à des lignes de commandes classiques : [bat](https://github.com/sharkdp/bat) une alternative à la commande [cat](<https://en.wikipedia.org/wiki/Cat_(Unix)>), [fd](https://github.com/sharkdp/fd) une alternative à [find](<https://en.wikipedia.org/wiki/Find_(Unix)>) etc.

Rust est aussi présent côté serveur web, on retrouve une implémentation en Rust [des web services de Bitwarden](https://github.com/dani-garcia/vaultwarden) par exemple. Mais le langage ne se limite pas au backend, il permet également de faire du web assembly ou bien des interfaces graphiques comme [egui](https://github.com/emilk/egui).

Les ours du BearStudio commencant à s’y intéresser de plus en plus, je me suis dis que j’allais fédérer les ressources que j’ai trouvées lors de mon apprentissage du langage (qui n’est pas terminé) dans cet article.

Bonne lecture et bonne découverte de Rust !

## Découvrir la puissance d’un langage bas niveau, avec le confort d’un langage haut niveau

Pour commencer à découvrir Rust, la meilleure ressource reste la lecture du [Rust Book](https://doc.rust-lang.org/book/). En effet, celui-ci a beau être théorique, il va permettre de faire le tour des concepts de Rust avant de se lancer dans le code. Les premiers chapitres ne sont pas les plus intéressants à lire. Ils reprennent pas mal de concepts disponibles dans d’autres langages. C’est à partir du chapitre 4 sur le concept d’ownership que la lecture devient la plus captivante.

Pour faire de la pratique en parallèle, je vous recommande de cloner le dépôt [rust-lang/rustlings](https://github.com/rust-lang/rustlings) et de faire les exercices au fur et à mesure. Ce projet fournit plein de petits exercices qui vont vous habituer à lire et écrire des petits bouts de code tout en suivant le Rust Book !

Si vous voulez suivre une introduction en ligne, il existe [ce cours](https://docs.microsoft.com/en-us/learn/paths/rust-first-steps) par Microsoft. Il va vous apprendre les concepts nécessaires pour créer un outil en ligne de commande. Si vous êtes prêt à payer une formation beaucoup plus poussée, il existe [rustadventure.dev](https://www.rustadventure.dev/) par Chris Biscardi. 

Vous pouvez également vous entraîner sur tout plein d’exercices grâce à [https://exercism.org/](https://exercism.org/) et bénéficier de mentoring de la part de la communauté !

De plus, si vous êtes friands de l’aspect communautaire, vous pouvez rejoindre le [Discord officiel](https://discord.gg/rust-lang). La communauté est très inclusive, vous serez forcément le ou la bienvenu(e) 😊

Vous souhaitez apprendre un peu le langage sans rien installer sur votre machine ? Vous pouvez utiliser le projet [Tour of Rust](https://tourofrust.com/). Il va vous permettre d’apprendre Rust tout en développant dans votre navigateur en utilisant [le playground fourni par le langage](https://play.rust-lang.org/). Pratique !

Pour suivre ce qui se fait autour du langage, l’actualité, je conseille le très bon projet [This Week in Rust](https://twitter.com/ThisWeekInRust). Toutes les semaines, il donne tout un tas de liens et ressources pour approfondir ou découvrir de nouvelles dépendances, de nouveaux projets, etc.

Pour aller plus loin, je vous conseille les articles suivants :

- [https://blog.otso.fr/2021-12-05-marre-javascript-apprendre-rust](https://blog.otso.fr/2021-12-05-marre-javascript-apprendre-rust)
- [https://fettblog.eu/getting-started-with-rust/](https://fettblog.eu/getting-started-with-rust/)
