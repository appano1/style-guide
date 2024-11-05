const tsdoc = require('eslint-plugin-tsdoc');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  plugins: {
    tsdoc,
  },
  rules: {
    ...require('../rules/tsdoc').rules,
  },
};
