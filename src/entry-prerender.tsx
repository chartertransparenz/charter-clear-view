/// <reference types="node" />
// Build-time prerender entry (FIX-3). Bundled with `vite build --ssr` and used
// by scripts/prerender.ts to turn every sitemap route into static HTML.
// Not loaded in the browser.
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { helmetServerContext } from "./contexts/helmetServerContext";

export type PrerenderResult = {
  html: string;
  // priority: tags of <Helmet prioritizeSeoTags> (description, canonical, og:*)
  head: { title: string; priority: string; meta: string; link: string; script: string };
};

export function render(url: string): Promise<PrerenderResult> {
  helmetServerContext.helmet = undefined;

  return new Promise((resolve, reject) => {
    let failed: unknown = null;
    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          if (failed) return reject(failed);
          const stream = new PassThrough();
          const chunks: Buffer[] = [];
          stream.on("data", (c: Buffer) => chunks.push(c));
          stream.on("end", () => {
            const h = helmetServerContext.helmet;
            resolve({
              html: Buffer.concat(chunks as unknown as Uint8Array[]).toString("utf8"),
              head: {
                title: h?.title.toString() ?? "",
                priority: h?.priority.toString() ?? "",
                meta: h?.meta.toString() ?? "",
                link: h?.link.toString() ?? "",
                script: h?.script.toString() ?? "",
              },
            });
          });
          pipe(stream);
        },
        onShellError: reject,
        onError(err) {
          failed = err;
        },
      }
    );
  });
}
