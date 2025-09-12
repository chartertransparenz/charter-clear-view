import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('[Boot] main.tsx loaded - timestamp:', Date.now());

const rootEl = document.getElementById('root');
console.log('[Boot] Root element found:', !!rootEl);

if (!rootEl) {
  console.error('[Boot] Critical: #root element not found');
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">CRITICAL ERROR: Root element not found in DOM</div>';
} else {
  try {
    console.log('[Boot] Initializing React...');
    const root = createRoot(rootEl);
    root.render(<App />);
    console.log('[Boot] ✅ React app mounted successfully');
  } catch (err) {
    console.error('[Boot] ❌ Failed to mount React app:', err);
    document.body.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">MOUNT ERROR: ' + (err as Error).message + '</div>';
  }
}
