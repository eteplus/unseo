import tsParser from '@typescript-eslint/parser';
import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  stylistic.configs.customize({
    semi: true,
    quotes: 'single',
    braceStyle: '1tbs',
  }),
  {
    files: ['**/*.{js,cjs,mjs}'],
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
];
