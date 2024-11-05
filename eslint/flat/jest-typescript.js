const { TYPESCRIPT_FILES } = require('./constants');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: TYPESCRIPT_FILES,
  rules: {
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': 'error',
  },
};
