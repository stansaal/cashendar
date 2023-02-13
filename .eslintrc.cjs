module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-duplicate-imports": ["error", { includeExports: true }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["warn", { builtinGlobals: true }],
    "prefer-const": "error",
    "typescript-sort-keys/interface": "error",
    "sort-keys-fix/sort-keys-fix": "error",
    "typescript-sort-keys/string-enum": "error",
    "no-undef": "off",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
