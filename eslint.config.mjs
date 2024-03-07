import stylistic from './eslint-config/stylistic.mjs';
import astro from './eslint-config/astro.mjs';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    // global ignores
    ignores: ['dist/*', 'build/*'],
  },
  ...stylistic,
  ...astro,
];
