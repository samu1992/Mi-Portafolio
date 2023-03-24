import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    esbuild: {
      loader: {
        ".js": "jsx" // Trata los archivos .js como archivos .jsx
      }
    }
  }
});
