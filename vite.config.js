import { defineConfig } from "vite";

const base = process.env.BASE_DIR || "/";
// https://vitejs.dev/config/
export default defineConfig({
  base,
});
