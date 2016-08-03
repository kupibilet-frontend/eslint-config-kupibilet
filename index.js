module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    semi: [2, 'never'],
    'space-before-function-paren': [2, 'always'],
    'func-names': 0,
    'arrow-parens': [2, 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-mixed-operators': 0,
  },
}
