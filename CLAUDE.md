# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Build production site to ./dist/
pnpm lint         # Run all linters (astro check, eslint, tsc)
pnpm lint:astro   # Run astro check only
pnpm lint:eslint  # Run eslint only
pnpm lint:ts      # Run TypeScript type checking only
pnpm pretty       # Format code with prettier
```

## Architecture Overview

This is a **multilingual Astro static site** (French/English) for BearStudio with React islands for interactivity.

### Routing & i18n

- **Locale-based routing**: Pages live in `src/pages/en/` and `src/pages/fr/`
- **Default locale**: French (`/` redirects to `/fr`)
- **Type-safe routes**: `@bearstudio/astro-typed-routes` auto-generates `src/routes.gen.ts`
- **Link helper**: Use `getLink(path, locale, params)` from `src/lib/link.ts` for navigation
- **Route mappings**: `ROUTE_MAPPINGS` in `src/i18n/utils.ts` maps French routes to English equivalents

### Content Collections

Content lives in `src/content/` with this pattern: `collection-name/entry-id/locale.md`

- **posts**: Blog articles with MDX support
- **people**: Team members with status (current/advisor/former)
- **conferences**: Speaking events
- **polaroids**: Homepage images (JSON)
- **skills**: Technology tags

Schemas are defined in `src/schemas/`. Use `getCollection()` with locale filtering utilities from `src/lib/`.

### Translation System

- Translations in `src/i18n/en/` and `src/i18n/fr/`
- Use `getTranslationFn(locale)` to get a typed `t()` function
- Supports parameter interpolation: `t('key', { param: 'value' })`

### Component Patterns

- **Astro components** (`.astro`): Server-rendered, no hydration
- **React components** (`.tsx`): Use `client:load` directive for hydration
- **UI primitives**: `src/components/ui/` (Button, Dialog, Drawer, Carousel, etc.)
- **Styling**: Tailwind CSS with `cn()` helper (clsx + tailwind-merge)

### Security Headers

HTTP security headers are configured in `vercel.ts`. When adding a new external service (iframe embed, external script, font CDN, image CDN, etc.), update the `Content-Security-Policy` directive to whitelist the new domain. The relevant directives are:

- `frame-src`: for iframe embeds (e.g., Pipedrive, Google Maps, YouTube)
- `script-src`: for external scripts
- `img-src`: for external image sources
- `font-src`: for external font CDNs
- `connect-src`: for fetch/XHR API calls

### Key Conventions

- **Filename casing**: kebab-case enforced by ESLint
- **Unused variables**: Prefix with `_` to ignore
- **Layouts**: `RootLayout` (HTML/SEO) → `MainLayout` (nav/footer) → Page
- **Git hooks**: Lefthook runs prettier on pre-commit, lint on pre-push
