const js = require("@eslint/js");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const unusedImports = require("eslint-plugin-unused-imports");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const globals = require("globals");

// Helper function to filter globals with whitespace in keys (ESLint 9 requirement)
function filterValidGlobals(globalsObj) {
  if (!globalsObj || typeof globalsObj !== "object" || Array.isArray(globalsObj)) {
    return {};
  }
  try {
    return Object.fromEntries(
      Object.entries(globalsObj).filter(([key]) => key && typeof key === "string" && key.trim() === key)
    );
  } catch (error) {
    // If anything goes wrong, return empty object
    return {};
  }
}

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      "simple-import-sort": simpleImportSort,
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptEslint,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
      globals: {
        // Filter out globals with whitespace in keys (ESLint 9 requirement)
        ...(globals && globals.browser ? filterValidGlobals(globals.browser) : {}),
        ...(globals && globals.es2021 ? filterValidGlobals(globals.es2021) : {}),
        ...(globals && globals.node ? filterValidGlobals(globals.node) : {}),
        fetch: "readonly",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...(typescriptEslint.configs.recommended?.rules || {}),
      ...(typescriptEslint.configs["eslint-recommended"]?.rules || {}),
      // Airbnb-style rules (manually configured since airbnb may not support flat config yet)
      "max-len": [2, { code: 90 }],
      "no-console": 1,
      "no-use-before-define": 0,
      "no-restricted-globals": 0,
      "prefer-const": [
        1,
        {
          ignoreReadBeforeAssign: true,
        },
      ],
      "import/order": 0,
      "import/extensions": 0,
      "import/no-extraneous-dependencies": 0,
      "import/prefer-default-export": 0,
      "simple-import-sort/exports": 2,
      "simple-import-sort/imports": [
        2,
        {
          groups: [
            [
              // Packages. `react` related packages come first.
              "^react",
              // Side effect imports.
              "^@?\\w",
              "^\\u0000",
              // Parent imports. Put `..` last.
              "^\\.\\.(?!/?$)",
              "^\\.\\./?$",
              "^",
              // Other relative imports. Put same-folder imports and `.` last.
              "^\\./(?=.*/)(?!/?$)",
              "^\\.(?!/?$)",
              "^\\./?$",
            ],
          ],
        },
      ],
      "unused-imports/no-unused-imports": 1,

      // React rules
      "react/no-did-update-set-state": 0,
      "react/static-property-placement": 0,
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "react/display-name": 0,
      "react/sort-comp": 0,
      "react/jsx-filename-extension": [
        0,
        { extensions: [".jsx", ".js", ".tsx", ".ts"] },
      ],
      "react/jsx-props-no-spreading": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-sort-props": [
        2,
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: ["key"],
        },
      ],
      "react/sort-prop-types": [
        1,
        {
          callbacksLast: true,
          ignoreCase: true,
          requiredFirst: true,
          sortShapeProp: true,
          noSortAlphabetically: false,
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
];
