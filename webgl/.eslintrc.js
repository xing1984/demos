/**
 * Created by dev3cli.
 * https://github.com/xing1984
 * https://github.com/capricorncd/dev3cli
 * Date: 2021-03-01 21:10:09
*/module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:vue/essential',
  ],
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    'space-before-function-paren': 0,
    'brace-style': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-use-before-define': 'off'
  },
  parser: '@typescript-eslint/parser'
}
