import type { KnipConfig } from 'knip';

/**
 * In production mode (pnpm knip:production), report exports that are only
 * consumed within the same file. This helps detect truly unused public exports.
 */
const isProductionMode = process.argv.includes('--production');

/**
 * Entry points related to Vercel deployment.
 * These files are consumed by Vercel outside of the Astro build,
 * so Knip cannot infer them automatically.
 */
const vercelEntryPoints = [
  'vercel.ts', // Vercel config (redirects, headers)
  'redirects.ts', // Redirect data, imported by vercel.ts
];

const ignoreComponentsReExport = [
  // Component re-exports: used in .astro files, not detected by Knip.
  'src/components/brand-assets/index.ts',
  'src/components/brand-assets/asset-card.tsx',
  'src/components/brand-assets/assets-content.tsx',
];

const ignoreSchemaTypesAstroFiles = [
  // Schema types used in .astro files.
  'src/schemas/**',
  'src/lib/clone-as-child.ts',
];

const ignoreExportsAstroFiles = [
  // Exports used in .astro layouts/components.
  'src/components/footer/footer-nav.ts',
  'src/components/nav/main-nav-desktop.tsx',
  'src/components/nav/main-nav-mobile.tsx',
  'src/content/address.ts',
  'src/lib/conferences.ts',
  'src/lib/get-value-from-text.ts',
  'src/lib/photo-swipe.ts',
  'src/lib/skills.ts',
];

const ignorePeerDeps = [
  // Implicit peer dep of @tailwindcss/vite, no direct import.
  'tw-animate-css',
];

const ignoreSideEffectImports = [
  // Imported as side-effects in .astro files (fonts, analytics)
  '@fontsource-variable/caveat',
  '@fontsource-variable/inter',
  '@fontsource-variable/roboto-slab',
  '@vercel/analytics',
  'astro-seo',
  'tailwindcss',
  '@tailwindcss/typography',
];

// In production mode, Knip does not analyze astro.config.ts (a build file),
// making all Astro integrations and UI packages appear unused.
// For an SSG site, everything is build-time
const ignoreProductionModeFalsePositives = isProductionMode
  ? [
      '@astrojs/check',
      '@astrojs/react',
      '@astrojs/sitemap',
      '@bearstudio/astro-typed-routes',
      '@bearstudio/lunalink',
      '@tailwindcss/vite',
      '@vercel/config',
      'astro-robots-txt',
      'class-variance-authority',
      'clsx',
      'embla-carousel-react',
      'embla-carousel-wheel-gestures',
      'hast-util-to-text',
      'photoswipe',
      'radix-ui',
      'react-dom',
      'remark-gfm',
      'remark-mdx',
      'remark-parse',
      'remark-rehype',
      'tailwind-merge',
      'unified',
      'unist-util-visit',
      'vaul',
    ]
  : [];

const config: KnipConfig = {
  entry: [
    ...vercelEntryPoints,
    'src/pages/**/*.{astro,ts,tsx,md,mdx}',
    // UI components treated as entry points: their imports are traced
    // (packages detected as used), but their exports are not checked
    'src/components/ui/**/*.{ts,tsx}',
    'src/components/breadcrumb/ui.tsx',
  ],

  project: [
    // All TypeScript/TSX files in the project are in scope.
    // .astro files are already handled via the Astro plugin compiler.
    'src/**/*.{ts,tsx}',
    // Root-level config files (Vercel, redirects, astro config).
    '*.ts',
    // Exclude the auto-generated routes file produced by
    // @bearstudio/astro-typed-routes
    '!src/routes.gen.ts',
  ],

  ignore: [
    ...ignoreComponentsReExport,
    ...ignoreSchemaTypesAstroFiles,
    ...ignoreExportsAstroFiles,
  ],

  ignoreExportsUsedInFile: isProductionMode,

  /**
   * Dependencies to ignore: packages consumed without a direct JS/TS import
   * (CLI tools, build plugins, implicit peer deps).
   */
  ignoreDependencies: [
    ...ignorePeerDeps,
    ...ignoreSideEffectImports,
    ...ignoreProductionModeFalsePositives,
  ],
};

export default config;
