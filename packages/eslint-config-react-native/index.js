const reactConfig = require("@ltatarev/eslint-config-react");
const reactNative = require("eslint-plugin-react-native");

// Ensure reactConfig is an array (handle both flat config array and default export)
const reactConfigArray = Array.isArray(reactConfig) ? reactConfig : [reactConfig].filter(Boolean);

module.exports = [
  ...reactConfigArray,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-native": reactNative,
    },
    rules: {
      "react-native/no-unused-styles": 2,
      "react-native/no-inline-styles": 2,
      "react-native/no-raw-text": 1,
      "react-native/no-color-literals": 2,
      "react-native/sort-styles": 2,
      "react-native/no-single-element-style-arrays": 2,
    },
  },
];
