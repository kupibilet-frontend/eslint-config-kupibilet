module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    semi: [2, 'never'],
    'func-names': 0,
    'arrow-parens': [2, 'always'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'no-mixed-operators': 0,
    'array-callback-return': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: true,
    }],
    'no-plusplus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
  },
}
