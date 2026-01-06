import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tslint from 'typescript-eslint';

export default defineConfig(
  globalIgnores(['node_modules', 'dist', '.astro', 'public']),
  // Base config
  eslint.configs.recommended,
  tslint.configs.recommended,
  ...astro.configs['flat/recommended'],

  // For typescript and react files only
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
      },
    },
    extends: [
      react.configs['recommended-typescript'],
      reactHooks.configs['recommended-latest'],
    ],
  },

  {
    plugins: {
      unicorn,
    },
    rules: {
      'no-unreachable': 'error',
      '@eslint-react/dom/no-missing-iframe-sandbox': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  }
);
