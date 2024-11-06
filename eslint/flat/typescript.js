const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const prettier = require('eslint-config-prettier');
const requirePackage = require('../utils/require-package');
const { TYPESCRIPT_FILES } = require('./constants');
const tsdoc = require('./tsdoc');

requirePackage('typescript', 'typescript');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.typescript,
  prettier,
  tsdoc,
  {
    files: TYPESCRIPT_FILES,
    rules: {
      ...require('../rules/typescript').rules,
      ...require('../rules/typescript/extension').rules,
      ...require('../rules/typescript/import').rules,
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
];
