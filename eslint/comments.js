module.exports = {
  extends: [
    'plugin:@eslint-community/eslint-comments/recommended',
    require.resolve('./rules/comments'),
  ],
};
