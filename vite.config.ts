import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH ?? "/",
  server: {
    port: Number(process.env.APP_PORT) ?? 3000
  },
  plugins: [
    react(), tanstackRouter()],
})
