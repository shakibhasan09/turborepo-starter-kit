import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  minify: true,
  format: ["cjs"],
  platform: "node",
  splitting: false,
  sourcemap: false,
  entry: ["src/index.ts"],
});
