const unicorn = require('eslint-plugin-unicorn');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    unicorn,
  },
  rules: {
    ...require('../rules/unicorn').rules,
  },
};
