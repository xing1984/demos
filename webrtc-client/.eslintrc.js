/**
 * Created by dev3cli.
 * https://github.com/xing1984
 * https://github.com/capricorncd/dev3cli
 * Date: 2021-06-05 15:01:55
*/module.exports = {
  env: {
    browser: true,
    node: true
  },
  globals: {
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'space-before-function-paren': 0,
    'brace-style': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-use-before-define': 'off'
  },
  parser: '@typescript-eslint/parser'
}
