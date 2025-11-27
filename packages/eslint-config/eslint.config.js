import { defineConfig } from "eslint/config";
import { baseConfig } from "#base.js";

const eslintConfig = defineConfig([...baseConfig]);

export default eslintConfig;
