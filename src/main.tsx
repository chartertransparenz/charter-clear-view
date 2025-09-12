import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('[Boot] main.tsx loaded');

const rootEl = document.getElementById('root');
if (!rootEl) {
  console.error('[Boot] #root element not found in index.html');
} else {
  try {
    createRoot(rootEl).render(<App />);
    (window as any).__APP_MOUNTED__ = true;
    console.log('[Boot] React app mounted');
  } catch (err) {
    console.error('[Boot] Failed to mount React app:', err);
  }
}
