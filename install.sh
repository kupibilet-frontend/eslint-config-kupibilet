#!/bin/bash

npm info eslint-config-airbnb peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev eslint-config-airbnb
