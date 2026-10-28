import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode, isSsrBuild }) => {
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    ssr: {
      // CommonJS packages without proper ESM named exports in Node
      noExternal: ["react-helmet-async"],
    },
    build: {
      copyPublicDir: !isSsrBuild,
      rollupOptions: {
        // Vendor chunks only for the browser build; the SSR prerender bundle
        // (scripts/prerender.ts) keeps react etc. external.
        output: isSsrBuild ? {} : {
          manualChunks: {
            // React core — loaded once, cached long-term
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            // UI library — large, changes infrequently
            'vendor-ui': [
              '@radix-ui/react-dialog',
              '@radix-ui/react-dropdown-menu',
              '@radix-ui/react-select',
              '@radix-ui/react-tooltip',
              '@radix-ui/react-accordion',
              '@radix-ui/react-tabs',
              '@radix-ui/react-popover',
              '@radix-ui/react-navigation-menu',
              'lucide-react',
            ],
            // Data / form utilities
            'vendor-data': [
              '@tanstack/react-query',
              'react-hook-form',
              '@hookform/resolvers',
              'zod',
            ],
          },
        },
      },
      // Increase warning threshold slightly (default 500 kB)
      chunkSizeWarningLimit: 600,
    },
  };
});
