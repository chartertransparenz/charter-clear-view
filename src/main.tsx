import { createRoot } from 'react-dom/client'
// import './index.css'

const rootEl = document.getElementById('root')!;
const root = createRoot(rootEl);

root.render(
  <div style={{ padding: 16, fontFamily: 'system-ui' }}>
    <h1>Bootstrap OK</h1>
    <p>Minimaler Render ohne App/Provider zur Fehlereingrenzung.</p>
  </div>
);

