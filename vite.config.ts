import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/plugin/StashReelsRedux/assets/app/",
  build: {
    rollupOptions: {
      output: {
        dir: "./build/app",
      },
    },
  },
  plugins: [react()],
});
