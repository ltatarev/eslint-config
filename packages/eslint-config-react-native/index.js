module.exports = {
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react-native-a11y/all",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@ltatarev/react",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    "react",
    "react-native",
    "import",
    "simple-import-sort",
    "unused-imports"
  ],
  env: {
    "react-native/react-native": true
  },
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-raw-text": 1,
    "react-native/no-color-literals": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
};
