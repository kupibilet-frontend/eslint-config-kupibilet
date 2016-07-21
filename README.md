# ESLint shareable config for kupibilet.ru

## How to use
1. run `PKG=eslint-config-airbnb npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"`
2. add `"extends": "kupibilet"` to your .eslintrc
