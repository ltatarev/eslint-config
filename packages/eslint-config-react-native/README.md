# 🗂️ eslint-config-react-native

[![NPM](https://img.shields.io/npm/v/@ltatarev/eslint-config-react-native?style=flat-square)](https://www.npmjs.com/package/@ltatarev/eslint-config-react-native) [![NPM License](https://img.shields.io/npm/l/@ltatarev/eslint-config-react?style=flat-square)](https://opensource.org/licenses/MIT)

Eslint config for React Native Typescript projects. Contains recommended rules extended from `airbnb`, `airbnb/hooks`, `plugin:react`, `plugin:react-hooks`. Added rules contain import and prop sorting, as well as most available `react-native` rules.

## 📋 Compatibility

Requires ESLint 9 and the flat config format. From 3.0.0 this package exports a flat config array and is not usable from `.eslintrc` — if you are still on eslintrc, stay on 2.x.

## 🖥️ Installation

1. Install ESLint and the config. The config installs `@ltatarev/eslint-config-react` and the plugins it uses.

```sh
npm install --save-dev eslint@^9 @ltatarev/eslint-config-react-native
```

2. Use the config in your `eslint.config.js`:

```js
module.exports = require("@ltatarev/eslint-config-react-native");
```

If your project is ESM (`"type": "module"`) or you use `eslint.config.mjs`:

```js
import config from "@ltatarev/eslint-config-react-native";

export default config;
```

To add your own rules on top, spread the config first:

```js
const config = require("@ltatarev/eslint-config-react-native");

module.exports = [
  ...config,
  {
    rules: {
      "react-native/no-raw-text": "off",
    },
  },
];
```
