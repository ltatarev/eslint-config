# 🗂️ eslint-config-react

[![NPM](https://img.shields.io/npm/v/@ltatarev/eslint-config-react?style=flat-square)](https://www.npmjs.com/package/@ltatarev/eslint-config-react) [![NPM License](https://img.shields.io/npm/l/@ltatarev/eslint-config-react?style=flat-square)](https://opensource.org/licenses/MIT)

Eslint config for React TypeScript projects. Contains recommended rules extended from `airbnb`, `airbnb/hooks`, `plugin:react`, `plugin:react-hooks`. Added rules contain import and prop sorting.

## 📋 Compatibility

Requires ESLint 9 and the flat config format. From 3.0.0 this package exports a flat config array and is not usable from `.eslintrc` — if you are still on eslintrc, stay on 2.x.

## 🖥️ Installation

1. Install ESLint and the config. The config installs the plugins it uses.

```sh
npm install --save-dev eslint@^9 @ltatarev/eslint-config-react
```

2. Use the config in your `eslint.config.js`:

```js
module.exports = require("@ltatarev/eslint-config-react");
```

If your project is ESM (`"type": "module"`) or you use `eslint.config.mjs`:

```js
import config from "@ltatarev/eslint-config-react";

export default config;
```

To add your own rules on top, spread the config first:

```js
const config = require("@ltatarev/eslint-config-react");

module.exports = [
  ...config,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
```
