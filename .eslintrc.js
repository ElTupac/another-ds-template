const path = require("path");

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "react/jsx-props-no-spreading": "off",
    "no-console": "off",
    "react/function-component-definition": "off",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "import/no-cycle": "off",
    "react/button-has-type": "off",
    "react/require-default-props": "off",
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/resolver": {
      alias: {
        map: [["@", path.resolve(__dirname, "src/ds")]],
      },
    },
  },
};
