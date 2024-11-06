const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const prettier = require('eslint-config-prettier');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  jsxA11y.flatConfigs.recommended,
  {
    rules: {
      ...require('../rules/react').rules,
      ...require('../rules/jsx-a11y').rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  importPlugin.flatConfigs.react,
  prettier,
];
