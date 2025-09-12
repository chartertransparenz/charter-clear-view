import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('[Boot] main.tsx loaded - timestamp:', Date.now());

const rootEl = document.getElementById('root');
console.log('[Boot] Root element:', rootEl);

if (!rootEl) {
  console.error('[Boot] #root element not found in index.html');
  document.body.innerHTML = '<div style="padding: 20px; color: red;">ERROR: Root element not found</div>';
} else {
  try {
    console.log('[Boot] Creating React root...');
    const root = createRoot(rootEl);
    console.log('[Boot] Rendering App component...');
    root.render(<App />);
    (window as any).__APP_MOUNTED__ = true;
    console.log('[Boot] React app mounted successfully');
  } catch (err) {
    console.error('[Boot] Failed to mount React app:', err);
    document.body.innerHTML = '<div style="padding: 20px; color: red;">ERROR: ' + (err as Error).message + '</div>';
  }
}
