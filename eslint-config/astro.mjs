import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  overrides: [
    {
      files: ['**/*.astro'],
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
      env: {
        'node': true,
        'astro/astro': true,
        'es2020': true,
      },
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@stylistic/jsx-one-expression-per-line': 'off',
        '@stylistic/jsx-indent': 'off',
      },
    },
  ],
};

/**
 * Takes an array of ESLint configs and returns a config that applies to all
 * .astro files while keeping the configs' language options, plugins, and rules.
 *
 * @param {import('eslint').Linter.FlatConfig[]} configs - The configs to combine
 * @returns {import('eslint').Linter.FlatConfig} - The transformed config
 */
function transform(configs) {
  // Combine languageOptions, plugins, and rules into a single config
  return configs.reduce((config, { languageOptions, rules, plugins, processor }) => {
    /** @type {import('eslint').Linter.Config} */
    const newConfig = {
      // Apply to all .astro files
      files: ['**/*.astro'],
      // Merge the existing plugins and the new plugins
      plugins: {
        ...config.plugins,
        ...plugins,
      },
      // Merge the existing language options and the new language options
      languageOptions: {
        ...config.languageOptions,
        ...languageOptions,
        // Merge the existing globals and the new globals
        globals: {
          ...config?.languageOptions?.globals,
          ...languageOptions?.globals,
        },
        // Merge the existing parserOptions and the new parserOptions
        parserOptions: {
          ...config?.languageOptions?.parserOptions,
          ...languageOptions?.parserOptions,
        },
      },
      // Merge the existing rules and the new rules
      rules: {
        ...config.rules,
        ...rules,
      },
      // Merge the existing processors and the new processors
      processor: {
        ...config.processor,
        ...processor,
      },
    };
    return newConfig;
  }, {});
}

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default compat.config(config);
