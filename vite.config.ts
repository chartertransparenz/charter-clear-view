import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && vitePrerenderPlugin({
      renderTarget: '#root',
      prerenderScript: path.resolve(__dirname, 'src/prerender.tsx'),
      additionalPrerenderRoutes: [
        "/reviere/mittelmeer/kroatien",
        "/reviere/mittelmeer/kroatien/istrien", 
        "/reviere/mittelmeer/kroatien/kvarner",
        "/reviere/mittelmeer/kroatien/zadar",
        "/reviere/mittelmeer/kroatien/dalmatien-split",
        "/reviere/mittelmeer/kroatien/dubrovnik"
      ]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
