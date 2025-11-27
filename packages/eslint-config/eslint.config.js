import { defineConfig } from "eslint/config";
import { baseConfig } from "#base.js";

const eslintConfig = defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
]);

export default eslintConfig;
