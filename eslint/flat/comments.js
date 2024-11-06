const comments = require('@eslint-community/eslint-plugin-eslint-comments/configs');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...comments.recommended,
  rules: {
    ...comments.recommended.rules,
    ...require('../rules/comments').rules,
  },
};
