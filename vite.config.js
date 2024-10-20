import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shell",
      exposes: {
        "./counterStore": "./src/Store/Counterstore.js", // Expose Zustand store
      },
      remotes: {
        homepage:
          "https://micro-front-end-sport-ecommerce-homepage.vercel.app/assets/remoteEntry.js",
        ProductPages:
          "https://microfrontend-productpage.vercel.app/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
