// @ts-check

import { nextConfig } from "@repo/eslint-config/next.js";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...nextConfig]);

export default eslintConfig;
