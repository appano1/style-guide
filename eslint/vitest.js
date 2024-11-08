module.exports = {
  extends: [
    'plugin:@vitest/legacy-recommended',
    require.resolve('./rules/vitest'),
  ],
};
