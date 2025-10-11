import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jitendrakr", // IMPORTANT: use your repo name!
  // Build-specific options
  build: {
    emptyOutDir: true,        // ← clear dist folder before build
    outDir: 'dist',          // output folder
    assetsDir: 'assets',     // folder for images, fonts, etc.
    assetsInlineLimit: 0, // inline small assets
  },
});