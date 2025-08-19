import importPlugin from "eslint-plugin-import";
import typescript from "@typescript-eslint/eslint-plugin";
import tseslint from "typescript-eslint";
import eslint from "eslint";

export default [
  tseslint.configs.recommended,
  typescript.configs.recommended,
  importPlugin.flatConfigs.recommended,
  // sortPlugin.flatConfigs.recommended,
  // eslint.flatConfigs.recommended,
  {
    files: ["**/*.js", "**/*.cjs"],
    plugins: { importPlugin },

    // extends: ["@equinor/eslint-config-eds-mobile"],
    rules: { semi: "error", "no-unused-vars": "error" },
  },
  { files: ["**/*.js"], rules: { "no-undef": "error", semi: "warn" } },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: { "@typescript-eslint": typescript },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
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
