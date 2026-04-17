import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Production: prefix /180-Fuel/ for org Pages (…github.io/180-Fuel/). Apex/custom domain: use "/".
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/180-Fuel/" : "/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://127.0.0.1:5000",
    },
  },
}));
