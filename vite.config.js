import { defineConfig } from "vite";
import { browserslistToTargets } from "lightningcss";
import browserslist from "browserslist";
import path from "node:path";
import vitePugPlugin from "vite-plugin-pug-transformer";

export default defineConfig({
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(">= 0.25%")),
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("./src") }],
  },
  plugins: [vitePugPlugin()],
});
