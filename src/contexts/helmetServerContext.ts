import type { HelmetServerState } from 'react-helmet-async';

// Filled by react-helmet-async during the build-time prerender
// (src/entry-prerender.tsx, no DOM); unused in the browser.
export const helmetServerContext: { helmet?: HelmetServerState } = {};
