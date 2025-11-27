// @ts-check

import { reactConfig } from "@repo/eslint-config/react.js";
import { defineConfig } from "eslint/config";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const eslintConfig = defineConfig([...reactConfig]);

export default eslintConfig;
