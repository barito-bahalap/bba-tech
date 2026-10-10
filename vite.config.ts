import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

const sharedAssets = path.resolve(
  import.meta.dirname,
  "../bba-shared-kit/packages/assets",
);

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.join(sharedAssets, "favicon.svg").replace(/\\/g, "/"),
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    target: "es2022",
    sourcemap: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
