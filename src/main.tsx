import { createRoot } from 'react-dom/client'
import './index.css'

// Global error listeners to capture cross-origin errors ASAP
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

const root = createRoot(document.getElementById("root")!);

(async () => {
  try {
    const { default: App } = await import('./App.tsx');
    root.render(
      <GlobalErrorBoundary>
        <App />
      </GlobalErrorBoundary>
    );
  } catch (e) {
    console.error('[bootstrap-error]', e);
    root.render(
      <main className="min-h-screen grid place-items-center p-6">
        <section className="max-w-xl w-full rounded-lg border p-6">
          <h1 className="text-xl font-semibold mb-2">Fehler beim Laden der App</h1>
          <p className="text-sm opacity-80">Details finden Sie in der Konsole.</p>
        </section>
      </main>
    );
  }
})();
