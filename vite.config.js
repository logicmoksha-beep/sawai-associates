import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Backend host used for the dev-server proxy. Override with a real backend,
// e.g. VITE_API_PROXY_TARGET=https://api.example.com
const proxyTarget = process.env.VITE_API_PROXY_TARGET || "http://localhost:8000";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Forwards /api/* to the backend during `npm run dev` so the frontend
      // can keep using the same-origin "/api/enquiries" endpoint everywhere.
      "/api": {
        target: proxyTarget,
        changeOrigin: true,
      },
    },
  },
});
