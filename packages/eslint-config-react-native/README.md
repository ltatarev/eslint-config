# 🗂️ eslint-config-react-native

[![NPM](https://img.shields.io/npm/v/@ltatarev/eslint-config-react-native?style=flat-square)](https://www.npmjs.com/package/@ltatarev/eslint-config-react-native) [![NPM License](https://img.shields.io/npm/l/@ltatarev/eslint-config-react?style=flat-square)](https://opensource.org/licenses/MIT)

Eslint config for React Native Typescript projects. Contains recommended rules extended from `airbnb`, `airbnb/hooks`, `plugin:react`, `plugin:react-hooks`. Added rules contain import and prop sorting, as well as most available `react-native` rules.

## 🖥️ Installation

1. Install ESLint and the config. The config installs the plugins it uses.

```sh
npm install --save-dev eslint@^9 @ltatarev/eslint-config-react-native
```

2. Add `"extends": "@ltatarev/react-native"` to your `.eslintrc`.
