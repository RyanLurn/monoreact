// @ts-check

import { reactConfig } from "@repo/eslint-config/react.js";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...reactConfig]);

export default eslintConfig;
