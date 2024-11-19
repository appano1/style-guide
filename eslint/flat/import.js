const importPlugin = require('eslint-plugin-import');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...importPlugin.flatConfigs.recommended,
  rules: {
    ...importPlugin.flatConfigs.recommended.rules,
    ...require('../rules/import').rules,
  },
};
