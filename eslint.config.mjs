import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import playwright from "eslint-plugin-playwright";

export default [
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      playwright: playwright,
    },
    rules: {
      "playwright/no-focused-test": "error",
      "playwright/no-skipped-test": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];