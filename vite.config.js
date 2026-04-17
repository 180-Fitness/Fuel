import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production: must match the GitHub Pages path (…github.io/<REPO>/). Live: …/Fuel/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Fuel/" : "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
}));
