import { createRoot } from 'react-dom/client'
import './index.css'
import GlobalErrorBoundary from '@/components/GlobalErrorBoundary'

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

// Global error listeners wieder aktiviert
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

