# 🗂️ eslint-config

[![NPM](https://img.shields.io/npm/v/@ltatarev/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@ltatarev/eslint-config-react) [![NPM License](https://img.shields.io/npm/l/@ltatarev/eslint-config-react-native?style=flat-square)](https://opensource.org/licenses/MIT)

Eslint config for React and React Native projects. Contains recommended rules extended from `airbnb`, `airbnb/hooks`, `plugin:react`, `plugin:react-hooks`. Added rules contain import and prop sorting, as well as most available `react-native` rules.

## 📋 Compatibility

| Package Version | ESLint Version |
|-----------------|----------------|
| < 3.0.0         | ESLint 8       |
| ≥ 3.0.0         | ESLint 9       |

## 🖥️ Installation

1. Install the config and all required peer dependencies using the below commands.

```sh
npx install-peerdeps --dev @ltatarev/eslint-config-react
```

or

```sh
npx install-peerdeps --dev @ltatarev/eslint-config-react-native
```

2. Add `"extends": "@ltatarev/react"` or `"extends": "@ltatarev/react-native"` to your .eslintrc.
