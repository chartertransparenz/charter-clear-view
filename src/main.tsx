import { createRoot } from 'react-dom/client'
import './index.css'

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

// Test: App-Import ohne Provider
import('./App.tsx').then(({ default: App }) => {
  root.render(<App />);
}).catch(e => {
  console.error('[App-import-error]', e);
  root.render(
    <div style={{ padding: 16, fontFamily: 'system-ui' }}>
      <h1>App Import Fehler</h1>
      <pre>{String(e)}</pre>
    </div>
  );
});

