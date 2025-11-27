// @ts-check

import { nodeConfig } from "@repo/eslint-config/node.js";
import { defineConfig } from "eslint/config";

const eslintConfig = defineConfig([...nodeConfig]);

export default eslintConfig;
