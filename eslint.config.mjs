import globals from 'globals';
import flat from './eslint/flat/index.js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...flat.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['eslint/rules/**'],
    rules: {
      'sort-keys': 'error',
    },
  },
  {
    files: ['*.config.mjs'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
