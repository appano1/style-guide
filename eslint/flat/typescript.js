const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const prettier = require('prettier');
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
      ...require('./rules/typescript'),
      ...require('./rules/typescript/extension'),
      ...require('./rules/typescript/import'),
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
];
