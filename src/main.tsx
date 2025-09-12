import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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

createRoot(document.getElementById("root")!).render(<App />);
