import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import next from "@next/eslint-plugin-next";
import { reactConfig } from "#react.js";
import globals from "globals";

const nextConfig = defineConfig([
  ...reactConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        projectService: true,
      },
    },
  },
  next.configs.recommended,
  next.configs["core-web-vitals"],
  prettier,
]);

export { nextConfig };
