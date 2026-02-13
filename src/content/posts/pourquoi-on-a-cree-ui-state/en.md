---
title: 'Why did we create ui-state?'
slug: 'why-did-we-create-ui-state'
date: 2025-10-16
categories:
  - 'developpement'
tags:
  - 'developpement-web'
  - 'developpeur'
  - 'librairie'
  - 'open-source'
  - 'projet'
heroImage: 'images/format-blog-header.png'
metaDescription: 'Discover ui-state, a TypeScript library by BearStudio for managing UI states (loading, error, empty, success) with type safety and exhaustive matching — without breaking your JSX structure.'
excerpt: "Managing UI states like loading, error, or empty in React often leads to messy conditionals. Inspired by TkDodo's component composition patterns, we built ui-state — a TypeScript library that gives you a single, well-typed active state with exhaustive matching, without restructuring your JSX."
authors:
  - 'ivan-dalmet'
---

Why did we create [ui-state](https://github.com/BearStudio/ui-state), a TypeScript library to manage ui state display? It all started after reading an excellent article by [Dominic Dorfmeister, aka TkDodo](https://x.com/TkDodo) (we also recommend checking out [his other posts on his blog](https://tkdodo.eu/blog/)).

In the article [Component Composition is great btw](https://tkdodo.eu/blog/component-composition-is-great-btw), TkDodo highlights a recurring problem: managing UI states (`loading`, `error`, `empty`, `success`, etc.) in a way that is **readable, maintainable, and type-safe** without making your component structure explode.

The typical starting point.
You start by writing a simple component:

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

At first glance, everything seems to "work."

But things get messy quickly:

- Can we have both `data` and `isPending` at the same time?
- Does the absence of `data` mean an error or an empty list?
- What happens if `data` is present but empty?

You end up juggling several flags (isPending, data, isError, etc.) that can make two parts of the UI appear simultaneously, when that wasn't the intent.

**It becomes hard to read, test, and maintain.**

## TkDodo's proposed solution

TkDodo suggests a clearer refactor based on `early returns`:

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

This version is **much clearer**, each state corresponds to a single render.

But there's a tradeoff: **You have to extract the layout into a separate component, and what if you don't want the entire screen to change?**
`Layout` is duplicated in every branch. You also need to extract typing logic for the `Layout` props. And if you want part of the interface (like a header or sidebar) to remain constant between states, or certain `Layout` parts to depend on the state, your code structure starts to grow complex again.

## What we wanted: a single, well-typed, active state, reusable anywhere

At [BearStudio](https://www.bearstudio.fr), we wanted to keep the same core principles:

- Only one active state at a time
- Exhaustive type safety
- Readable display logic

…but **without breaking up the JSX** or restructuring the entire render around state cases.

We wanted to be able to say:

> "Give us the current state, we'll handle it. Just make sure we cover every case."

## That's why we created ui-state

With `ui-state`, you transform the response from a `useQuery` (or any data source) into a single, explicit state, based on a single call to `getUiState`.

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

What we gain from this:

- **A single, well-defined state**, always up to date.
- **Type exhaustiveness** via `.exhaustive()` ensures no case is forgotten.
- **Automatic type narrowing** from TypeScript — for example, data is no longer optional since we've verified its existence.
- **Full rendering freedom**, without restructuring JSX around states.
- **Better testability**, you can test each UI state independently.

Same concept as in TkDodo's article, but **no need to split into multiple components or wrap your entire JSX around state handling**.

You keep **clear logic and intact composition**.

🔗 GitHub: https://github.com/BearStudio/ui-state
