import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./client",
  plugins: [react()],
  server: {
    port: 4000,
  },
  build: {
    outDir: "./dist",
  },
});
