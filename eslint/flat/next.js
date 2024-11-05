const next = require('@next/eslint-plugin-next');
const requirePackage = require('../utils/require-package');
const { JAVASCRIPT_FILES } = require('./constants');

requirePackage('next', '@next/eslint-plugin-next');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');
      return ['next/babel'];
    } catch (e) {
      return [];
    }
  })(),
};

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
    },
    languageOptions: {
      parserOptions: {
        babelOptions,
      },
    },
    ignores: ['**/.next/**'],
  },
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      parserOptions: {
        babelOptions,
      },
    },
  },
];
