module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    chrome: true,
  },
  rules: {},
};
