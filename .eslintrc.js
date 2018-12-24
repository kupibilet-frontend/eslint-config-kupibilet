const rules = [
  './rules/async-await-promises.yml',
  './rules/codestyle.yml',
  './rules/functions.yml',
  './rules/imports.yml',
  './rules/react-jsx.yml',
]

module.exports = {
  extends: [
    'airbnb',
    ...rules.map(require.resolve),
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    Generator: true,
  },
}
