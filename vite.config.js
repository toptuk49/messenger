import { defineConfig } from "vite";
import path from "node:path";
import vitePugPlugin from "vite-plugin-pug-transformer";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("./src") }],
  },
  plugins: [vitePugPlugin()],
});
