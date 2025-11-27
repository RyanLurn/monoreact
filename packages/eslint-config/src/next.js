import prettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";
import next from "@next/eslint-plugin-next";
import { reactConfig } from "#react.js";

const nextConfig = defineConfig([
  ...reactConfig,
  next.configs.recommended,
  next.configs["core-web-vitals"],
  prettier,
]);

export { nextConfig };
