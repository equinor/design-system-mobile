// module.exports = {
//   extends: [
//     "plugin:@typescript-eslint/recommended",
//     "plugin:@typescript-eslint/stylistic-type-checked",
//   ],
//   plugins: ["@typescript-eslint"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: "module",
//     project: "./tsconfig.json",
//   },
//   rules: {
//     // TypeScript-specific rules
//     "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
//     "@typescript-eslint/explicit-function-return-type": "off",
//   },
// };

import typescript from "@typescript-eslint/eslint-plugin";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  typescript.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { "@typescript-eslint": typescript },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    files: ["**/*.ts"],
    rules: { "no-undef": "error", semi: "warn" },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];
