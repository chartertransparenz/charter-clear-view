import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Global error listeners to capture cross-origin errors
window.addEventListener("error", (event) => {
  console.error("[window.onerror]", {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error?.stack || String(event.error || "")
  });
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("[unhandledrejection]", {
    reason: (event as PromiseRejectionEvent).reason
  });
});

import GlobalErrorBoundary from "@/components/GlobalErrorBoundary";

createRoot(document.getElementById("root")!).render(
  <GlobalErrorBoundary>
    <App />
  </GlobalErrorBoundary>
);
