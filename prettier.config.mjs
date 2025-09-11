// @ts-check

/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  endOfLine: 'lf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  arrowParens: 'always',
  importOrder: [
    // Astro
    '^astro(:|-|/)',
    '^@astro',
    '',
    // React
    '^react$',
    '^react-dom$',
    '^react/jsx-runtime$',
    '',
    // External packages
    '<THIRD_PARTY_MODULES>',
    '',
    // Absolute imports
    '^@/(lib|hooks)',
    '^@/',
    '',
    // Relative imports
    '^[./]',
    '',
    // CSS and assets
    '.(css|scss|sass|less|png|jpg|jpeg|svg|webp|gif)$',
  ],
  importOrderCaseSensitive: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
