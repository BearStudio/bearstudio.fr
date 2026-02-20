# BearStudio Website

The multilingual (French/English) website for [BearStudio](https://bearstudio.fr), built with [Astro](https://astro.build) and React.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 20
- [pnpm](https://pnpm.io/)

## Getting Started

```bash
pnpm install
pnpm dev
```

The dev server starts at `http://localhost:4321`.

## Commands

| Command         | Description                              |
| :-------------- | :--------------------------------------- |
| `pnpm dev`      | Start dev server at `localhost:4321`     |
| `pnpm build`    | Build production site to `./dist/`       |
| `pnpm preview`  | Preview production build locally         |
| `pnpm lint`     | Run all linters (astro check, eslint, tsc) |
| `pnpm pretty`   | Format code with Prettier                |

## Project Structure

```
src/
├── components/     # Astro & React components
│   └── ui/         # Reusable UI primitives (Button, Dialog, Carousel, etc.)
├── content/        # Content collections (Markdown/MDX)
│   ├── posts/      # Blog articles
│   ├── people/     # Team members
│   ├── conferences/# Speaking events
│   ├── polaroids/  # Homepage images
│   └── skills/     # Technology tags
├── i18n/           # Translations (fr/ and en/)
├── layouts/        # Page layouts (RootLayout → MainLayout → Page)
├── lib/            # Shared utilities
├── pages/
│   ├── fr/         # French pages (default locale)
│   └── en/         # English pages
└── schemas/        # Content collection schemas
```

## Tech Stack

- **[Astro](https://astro.build)** - Static site generation
- **[React](https://react.dev)** - Interactive islands
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[MDX](https://mdxjs.com)** - Blog content
- **[Radix UI](https://www.radix-ui.com)** - Accessible UI primitives
