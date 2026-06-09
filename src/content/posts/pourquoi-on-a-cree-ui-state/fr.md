---
title: 'Pourquoi on a créé ui-state'
date: 2025-10-16
categories:
  - 'developpement'
tags:
  - 'developpement-web'
  - 'developpeur'
  - 'librairie'
  - 'open-source'
  - 'projet'
thumbnail:
  image: 'images/thumbnail.jpeg'
  alt: 'Diagramme des états UI (error, loading, empty, success) avec un extrait de code TypeScript utilisant la librairie ui-state'
metaDescription: 'Pourquoi on a créé ui-state : découvrez comment gérer les états UI (loading, empty, error, success) proprement en React et TypeScript.'
excerpt: "Pourquoi a t'on créé ui-state, une librairie TypeScript de gestion d'états ? Tout viens de la lecture d'un très bon article de Dominic Dorfmeister aka TkDodo (on vous conseille aussi de lire ses autres articles sur son blog)"
authors:
  - 'ivan-dalmet'
---

Pourquoi a t'on créé [ui-state](https://github.com/BearStudio/ui-state), une librairie TypeScript de gestion d'états ? Tout viens de la lecture d'un très bon article de [Dominic Dorfmeister aka TkDodo](https://x.com/TkDodo) (on vous conseille aussi de [lire ses autres articles sur son blog](https://tkdodo.eu/blog/))

Dans [l’article Component Composition is great btw](https://tkdodo.eu/blog/component-composition-is-great-btw), TkDodo met en lumière un problème récurrent : gérer les états d’une UI (`loading`, `error`, `empty`, `success`, etc.) de façon lisible, maintenable et typée… sans exploser la structure de son composant.

Prenons le point de départ typique.
On écrit un composant simple :

```tsx
export function ShoppingList() {
  const { data, isPending } = useQuery(/* ... */);

  return (
    <Card>
      <CardHeading>Welcome 👋</CardHeading>
      <CardContent>
        {data?.assignee ? <UserInfo {...data.assignee} /> : null}
        {isPending ? <Skeleton /> : null}
        {data
          ? data.content.map((item) => <ShoppingItem key={item.id} {...item} />)
          : null}
      </CardContent>
    </Card>
  );
}
```

Et là, en surface, tout semble "fonctionner".

Mais très vite, ça devient flou :

- Est-ce qu’on peut avoir `data` **et** `isPending` en même temps ?
- Est-ce que l’absence de `data` signifie une erreur ou une liste vide ?
- Que se passe-t-il si `data` est présent mais vide ?

On se retrouve à jongler entre plusieurs flags (`isPending`, `data`, `isError`, etc.) qui peuvent potentiellement faire que deux morceaux de l'UI s'affichent en même temps alors que ce n'était pas ce qu'on avait prévu.

**C’est difficile à lire, à tester et à maintenir.**

### La solution proposée par TkDodo

TkDodo propose alors un refacto plus explicite, basé sur des `early return` :

```tsx
function Layout(props: { children: ReactNode; title?: string }) {
  return (
    <Card>
      <CardHeading>Welcome 👋 {props.title}</CardHeading>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

export function ShoppingList() {
  const { data, isPending } = useQuery(/* ... */);

  if (isPending) {
    return (
      <Layout>
        <Skeleton />
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <EmptyScreen />
      </Layout>
    );
  }

  return (
    <Layout title={data.title}>
      {data.assignee ? <UserInfo {...data.assignee} /> : null}
      {data.content.map((item) => (
        <ShoppingItem key={item.id} {...item} />
      ))}
    </Layout>
  );
}
```

C’est **beaucoup plus clair.** À chaque état correspond un rendu.

Mais ça vient avec une contrepartie : **on doit extraire le layout dans un composant, et que faire si on ne veut pas que tout l'écran change ?** Le composant `Layout` est dupliqué dans chaque branche. On doit extraire le typage pour pouvoir typer les props du `Layout`. Et si on veut qu’une partie de l’interface reste constante entre les états (par exemple un header ou une sidebar) ou si une ou plusieurs parties du `Layout` sont dépendantes de l’état, on doit commencer à restructurer son code.

## Ce qu’on voulait : un seul état actif, bien typé, et exploitable où on veut

Chez [BearStudio](/fr/), on voulait garder le même principe fondamental :

- un seul état actif à la fois,
- exhaustivité garantie au typage,
- lisibilité de la logique d’affichage,

…mais **sans éclater le JSX**, ni structurer tout le rendu autour des cas.

On voulait pouvoir dire :
"Donne-nous l’état courant, on s’en occupe. Juste assure toi qu’on gère bien tous les états"

## C’est pour ça qu’on a créé ui-state

Avec `ui-state`, on transforme la réponse d’un `useQuery` (ou n’importe quelle source de données) en **état unique et explicite**, basé sur un seul appel à getUiState.

Voici comment on refactorerait le composant `ShoppingList` en utilisant `ui-state` :

```tsx
import { getUiState } from '@bearstudio/ui-state';

export function ShoppingList() {
  const query = useQuery(/* ... */);

  const ui = getUiState((set) => {
    if (query.status === 'pending') return set('pending');
    if (!query.data || query.data.content.length === 0) return set('empty');
    return set('default', { data: query.data });
  });

  return (
    <Card>
      <CardHeading>
        Welcome 👋
        {ui
          .match(['pending', 'empty'], () => '')
          .match('default', ({ data }) => data.title)
          .exhaustive()}
      </CardHeading>
      <CardContent>
        {ui
          .match('pending', () => <Skeleton />)
          .match('empty', () => <EmptyScreen />)
          .match('default', ({ data }) => (
            <>
              {!!data.assignee && <UserInfo {...data.assignee} />}
              {data.content.map((item) => (
                <ShoppingItem key={item.id} {...item} />
              ))}
            </>
          ))
          .exhaustive()}
      </CardContent>
    </Card>
  );
}
```

Ce qu’on y gagne :

- Un **état unique** bien défini, toujours à jour.
- Une **exhaustivité au typage** via `.exhaustive()` qui garantit qu’aucun cas n’est oublié.
- **On garde le type narrowing** automatique de TypeScript en passant des arguments. Comme ici le `data` qui n’est plus typé comme optionnel car on a testé qu’il existait bien.
- Une **liberté de rendu complète**, sans devoir structurer l’arbre JSX autour des états.
- Une meilleure **testabilité** de la logique d’affichage : on peut tester la UI pour chaque cas d’état indépendamment.

Même principe que dans l’article de TkDodo mais **pas besoin de découper en 4 composants ou de structurer l’arbre JSX autour des états.**
On garde la logique claire et la **composition intacte.**

Lien du github : [https://github.com/BearStudio/ui-state](https://github.com/BearStudio/ui-state)

Et pour continuer sur la lancée, jetez un oeil à nos autres articles :

- [Start UI [Web]](/fr/blog/articles/start-ui)
- [Love letter aux side-projects](/fr/blog/articles/love-letter-aux-side-projects)
