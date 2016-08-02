#!/bin/bash

(
  export PKG=eslint-config-airbnb;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
)
