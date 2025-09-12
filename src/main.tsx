import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('[Boot] main.tsx loading...');

// Teste Alias-Funktionalität
try {
  console.log('[Boot] Testing module resolution...');
} catch (e) {
  console.error('[Boot] Module resolution error:', e);
}

const rootEl = document.getElementById('root');
console.log('[Boot] Root element found:', !!rootEl);

if (!rootEl) {
  console.error('[Boot] FATAL: No root element');
  document.body.innerHTML = '<div style="padding: 20px; color: red; font-family: monospace;">FATAL: No #root element found</div>';
} else {
  try {
    console.log('[Boot] Creating React root...');
    const root = createRoot(rootEl);
    
    console.log('[Boot] Rendering App...');
    root.render(<App />);
    
    console.log('[Boot] ✅ SUCCESS: App mounted');
    
    // Test nach 1 Sekunde
    setTimeout(() => {
      console.log('[Boot] Post-mount check - DOM children:', rootEl.children.length);
    }, 1000);
    
  } catch (err) {
    console.error('[Boot] ❌ RENDER ERROR:', err);
    console.error('[Boot] Error stack:', (err as Error).stack);
    document.body.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace; white-space: pre-wrap;">
        RENDER ERROR: ${(err as Error).message}
        
        Stack: ${(err as Error).stack}
      </div>`;
  }
}
