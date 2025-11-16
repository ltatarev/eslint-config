module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  plugins: [
    "react",
    "import",
    "simple-import-sort",
    "unused-imports",
    "jsx-a11y",
    "@typescript-eslint",
  ],
  rules: {
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
  globals: {
    fetch: "readonly",
  },
};
