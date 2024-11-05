const playwright = require('eslint-plugin-playwright');

/** @type {import('eslint').Linter} */
module.exports = {
  ...playwright.configs['flat/recommended'],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
    ...require('../rules/playwright-test').rules,
  },
};
