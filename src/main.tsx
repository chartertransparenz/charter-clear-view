import { createRoot } from 'react-dom/client'
import './index.css'
import GlobalErrorBoundary from './components/GlobalErrorBoundary'

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);
console.info('[main] Root created, preparing to render App');

// Global error listeners wieder aktiviert
window.addEventListener("error", (event) => {
  const msg = event.message || "";
  const isGeneric = msg === "Script error." && (!event.filename || event.filename === "");
  const payload = {
    message: msg,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error?.stack || String(event.error || ""),
  } as const;
  if (isGeneric) {
    // Likely a cross-origin or non-actionable error from preview/iframe; avoid noisy console.error
    console.warn("[window.onerror:generic]", payload);
    return;
  }
  console.error("[window.onerror]", payload);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("[unhandledrejection]", {
    reason: (event as PromiseRejectionEvent).reason
  });
});

// Test: App-Import ohne Provider
import('./App.tsx').then(({ default: App }) => {
  root.render(
    <GlobalErrorBoundary>
      <App />
    </GlobalErrorBoundary>
  );
}).catch(e => {
  console.error('[App-import-error]', e);
  root.render(
    <div style={{ padding: 16, fontFamily: 'system-ui' }}>
      <h1>App Import Fehler</h1>
      <pre>{String(e)}</pre>
    </div>
  );
});

