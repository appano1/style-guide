const jest = require('eslint-plugin-jest');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...jest.configs['flat/recommended'],
  rules: {
    ...jest.configs['flat/recommended'].rules,
    ...require('../rules/jest').rules,
  },
};
