const vitest = require('eslint-plugin-vitest');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    vitest,
  },
  rules: {
    ...vitest.configs.recommended.rules,
    ...require('../rules/vitest').rules,
  },
};
