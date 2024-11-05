module.exports = {
  plugins: ['unicorn'],
  extends: [require.resolve('./rules/unicorn.js')],
};
