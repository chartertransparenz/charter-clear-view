import React, { useEffect, useState } from "react";

export default function NausysWidgetSection() {
  const [state, setState] = useState<"boot"|"ok"|"err">("boot");

  useEffect(() => {
    const hasContainer = !!document.getElementById("nausysWidgetContainer");
    if (!hasContainer) console.warn("[NauSYS] Container fehlt noch beim Mount.");

    // 1) jQuery sicherstellen
    const ensureJQ = () =>
      new Promise<void>((resolve) => {
        if ((window as any).jQuery) return resolve();
        const s = document.createElement("script");
        s.src = "https://code.jquery.com/jquery-3.5.1.min.js";
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => resolve(); // not fatal, Widget versucht es auch ohne
        document.body.appendChild(s);
      });

    // 2) Widget-Loader laden (nur 1x)
    const loadWidget = () =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector('script[src*="nausys-widget-loader.js"]')) {
          setState("ok"); return resolve();
        }
        const w = document.createElement("script");
        w.src = "https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js";
        // Daten für das Widget:
        w.setAttribute("data-nausys-widget-token","e57fc4ee-9a49-4869-8962-11ad54a8645d");
        w.setAttribute("data-nausys-widget-settings","b64a7438-be50-4ab8-bed8-9efd47f22fb1");
        w.async = true;
        w.onload = () => { setState("ok"); resolve(); };
        w.onerror = () => { console.error("[NauSYS] Loader konnte nicht geladen werden."); setState("err"); reject(new Error("load-failed")); };
        document.body.appendChild(w);
      });

    // 3) Ablauf: nach vollständigem DOM + jQuery -> Loader
    const start = async () => {
      try {
        if (document.readyState === "loading") {
          await new Promise<void>((r)=>document.addEventListener("DOMContentLoaded",()=>r(),{once:true}));
        }
        await ensureJQ();
        // kleine Verzögerung, damit der Container sicher im DOM ist
        await new Promise((r)=>setTimeout(r, 50));
        await loadWidget();
        // Fallback: Wenn nach 4s keine Höhe, Fehlermeldung zeigen
        setTimeout(() => {
          const c = document.getElementById("nausysWidgetContainer");
          if (c && c.offsetHeight < 20) setState("err");
        }, 4000);
      } catch {
        setState("err");
      }
    };
    start();
  }, []);

  return (
    <section aria-label="Yacht-Suche" style={{ background: "rgba(245,247,250,.6)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Yacht-Suche</h2>
          <p style={{ margin: 0, color: "#64748b" }}>Direkt suchen, filtern & anfragen</p>
        </div>

        {/* Zielcontainer */}
        <div id="nausysWidgetContainer" style={{ width: "100%", margin: "0 auto" }} />

        {state === "boot" && (
          <div style={{
            marginTop: 12, border: "1px dashed #cbd5e1", borderRadius: 12,
            padding: 16, minHeight: 120, display: "grid", placeItems: "center",
            background: "white", color: "#94a3b8"
          }}>
            Widget lädt …
          </div>
        )}

        {state === "err" && (
          <div style={{
            marginTop: 12, border: "1px solid #fecaca", background: "#fff1f2",
            color: "#b91c1c", borderRadius: 12, padding: 16
          }}>
            Das Widget konnte nicht geladen werden.
            <div style={{ fontSize: 12, color: "#7f1d1d", marginTop: 6 }}>
              Prüfe: AdBlocker/CSP, oder erlaube Scripts von <code>widget.nausys.com</code> und <code>code.jquery.com</code>.
            </div>
          </div>
        )}

        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
