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
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/',
        '/reviere/mittelmeer',
        '/reviere/mittelmeer/kroatien',
        '/reviere/mittelmeer/griechenland/kykladen',
        '/reviere/mittelmeer/griechenland/ionische-inseln',
        '/reviere/mittelmeer/italien/amalfikuste',
        '/reviere/mittelmeer/kroatien/istrien',
        '/reviere/mittelmeer/kroatien/kvarner-bucht',
        '/reviere/atlantik',
        '/reviere/karibik'
      ]
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
