import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiProxyTarget =
    env.VITE_API_PROXY_TARGET || "https://seven-bites-api.onrender.com";

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          changeOrigin: true,
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              proxyReq.setHeader("origin", "");
            });
          },
          headers: {
            origin: "",
          },
          rewrite: (path) => path.replace(/^\/api/, ""),
          target: apiProxyTarget,
        },
      },
    },
  };
});
