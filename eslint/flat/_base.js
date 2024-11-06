const babelParser = require('@babel/eslint-parser');
const eslint = require('@eslint/js');
const prettier = require('eslint-config-prettier');
const commentsConfig = require('./comments');
const importConfig = require('./import');
const unicornConfig = require('./unicorn');
const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./constants');

/**
 * This is the base for both our browser and Node ESLint config files.
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
  eslint.configs.recommended,
  prettier,
  commentsConfig,
  importConfig,
  unicornConfig,
  {
    rules: {
      ...require('../rules/best-practice').rules,
      ...require('../rules/es6').rules,
      ...require('../rules/possible-errors').rules,
      ...require('../rules/stylistic').rules,
      ...require('../rules/variables').rules,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: JAVASCRIPT_FILES,
    ignores: ['!.*.js'],
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
    languageOptions: {
      ecmaVersion: ECMA_VERSION,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
      },
    },
  },
];
