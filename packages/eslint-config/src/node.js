import { defineConfig } from "eslint/config";
import { baseConfig } from "#base.js";
import globals from "globals";

const nodeConfig = defineConfig([
  ...baseConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
      globals: {
        ...globals.node,
      },
    },
  },
]);

export { nodeConfig };
