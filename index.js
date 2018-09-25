module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'func-names': 0,
    'no-underscore-dangle': 0,
    'arrow-parens': [2, 'always'],
    'arrow-body-style': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': 0,
    'react/prefer-stateless-function': [1, { 'ignorePureComponents': true }],
    'no-mixed-operators': 0,
    'no-prototype-builtins': 0,
    'array-callback-return': 0,
    'consistent-return': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      optionalDependencies: true,
    }],
    'no-plusplus': 0,
    'no-implicit-coercion': [1, {
      boolean: true,
      number: true,
      string: false,
      allow: [],
    }],
    'no-new-wrappers': 1,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens',
      arrow: 'parens',
    }],
    'operator-linebreak': 'off',
    'no-console': [1, {
      allow: ['warn', 'error']
    }],
  },
  globals: {
    Generator: true
  },
}
