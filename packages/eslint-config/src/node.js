import { defineConfig } from "eslint/config";
import { baseConfig } from "#base.js";
import globals from "globals";

const nodeConfig = defineConfig([
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    extends: [baseConfig],
  },
]);

export { nodeConfig };
