import { defineConfig, type ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { execSync } from "node:child_process";

const regen = () => execSync("npx barrelsby --config .barrelsby.json");

const autoBarrels = {
  name: "auto-barres",
  buildStart() {
    regen();
  },
  configureServer(server: ViteDevServer) {
    server.watcher.on("add", regen);
    server.watcher.on("unlink", regen);
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoBarrels],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
