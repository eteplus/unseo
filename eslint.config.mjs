import { defineFlatConfig } from '@thinkbuff/eslint-config';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default defineFlatConfig(
  {
    astro: true,
  },
  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
);
