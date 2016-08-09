module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    semi: [2, 'never'],
    'func-names': 0,
    'arrow-parens': [2, 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-mixed-operators': 0,
  },
}
