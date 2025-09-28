import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "vite-plugin-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && prerender({
      routes: [
        "/reviere/mittelmeer/kroatien",
        "/reviere/mittelmeer/kroatien/istrien", 
        "/reviere/mittelmeer/kroatien/kvarner",
        "/reviere/mittelmeer/kroatien/zadar",
        "/reviere/mittelmeer/kroatien/dalmatien-split",
        "/reviere/mittelmeer/kroatien/dubrovnik"
      ],
      staticDir: path.join(__dirname, 'dist'),
      postProcess(renderedRoute: any) {
        // Minimal post-processing for SEO optimization
        return renderedRoute;
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
