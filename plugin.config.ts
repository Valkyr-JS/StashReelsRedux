import { resolve } from "path";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./plugin/main.tsx"),
      name: "Stash Reels",
      // the proper extensions will be added
      fileName: "StashReelsRedux",
      formats: ["umd"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
        },
        dir: "./build",
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "./plugin/StashReelsRedux.yml",
          dest: normalizePath(resolve(__dirname, "./build")),
        },
      ],
    }),
  ],
});
