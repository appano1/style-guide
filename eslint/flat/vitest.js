const vitest = require('@vitest/eslint-plugin');

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
