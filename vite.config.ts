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
      staticDir: 'dist',
      routes: [
        '/',
        '/ueber-uns',
        '/faq',
        '/impressum',
        '/reviere/mittelmeer',
        '/reviere/mittelmeer/kroatien',
        '/reviere/mittelmeer/kroatien/istrien',
        '/reviere/mittelmeer/kroatien/kvarner',
        '/reviere/mittelmeer/kroatien/kornaten',
        '/reviere/mittelmeer/kroatien/split',
        '/reviere/mittelmeer/kroatien/dubrovnik',
        '/reviere/mittelmeer/griechenland',
        '/reviere/mittelmeer/griechenland/kykladen',
        '/reviere/mittelmeer/griechenland/ionische-inseln',
        '/reviere/mittelmeer/griechenland/sporaden',
        '/reviere/mittelmeer/griechenland/dodekanes',
        '/reviere/mittelmeer/italien',
        '/reviere/mittelmeer/italien/sardinien',
        '/reviere/mittelmeer/italien/sizilien',
        '/reviere/mittelmeer/spanien',
        '/reviere/mittelmeer/spanien/balearen',
        '/reviere/mittelmeer/spanien/costa-brava',
        '/reviere/mittelmeer/frankreich',
        '/reviere/mittelmeer/frankreich/cote-azur',
        '/reviere/mittelmeer/tuerkei',
        '/reviere/mittelmeer/tuerkei/bodrum',
        '/reviere/karibik',
        '/reviere/karibik/britische-jungferninseln',
        '/reviere/karibik/grenada',
        '/reviere/atlantik',
        '/reviere/atlantik/kanaren',
        '/reviere/atlantik/azoren'
      ]
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
