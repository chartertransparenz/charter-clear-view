import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from './components/ErrorBoundary'

// Global error logging for debugging
if (typeof window !== "undefined") {
  window.addEventListener("error", (e: ErrorEvent) => {
    console.error("GlobalError", {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      stack: e.error?.stack,
    });
  });
  window.addEventListener("unhandledrejection", (e: PromiseRejectionEvent) => {
    console.error("UnhandledRejection", e.reason);
  });
}

const app = (
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);

// Prerendered pages (scripts/prerender.ts) ship their HTML in #root:
// hydrate it instead of replacing it. The SPA fallback has an empty #root.
const container = document.getElementById("root")!;
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

