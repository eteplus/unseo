import tsParser from '@typescript-eslint/parser';
import astroParser from 'astro-eslint-parser';
import stylistic from '@stylistic/eslint-plugin';
import astro from 'eslint-plugin-astro';

/**
 * @type {import('eslint').Linter.FlatConfig}
 */
export default [
  stylistic.configs.customize({
    semi: true,
    quotes: 'single',
    braceStyle: '1tbs',
  }),
  {
    files: ['**/*.js'],
    ignores: ['**/*.config.js'],
  },
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: {
        jsx: true,
      },
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        jsx: true,
      },
    },
  },
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
      },
    },
    rules: {
      '@stylistic/jsx-indent': 'off',
    },
  },
];
