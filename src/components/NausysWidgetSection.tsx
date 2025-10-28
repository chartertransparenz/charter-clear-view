import React, { useEffect, useState } from "react";

export default function NausysWidgetSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // jQuery nur laden, wenn nicht vorhanden
    const ensureJQ = () =>
      new Promise<void>((res) => {
        if ((window as any).jQuery) return res();
        const s = document.createElement("script");
        s.src = "https://code.jquery.com/jquery-3.5.1.min.js";
        s.defer = true;
        s.onload = () => res();
        document.body.appendChild(s);
      });

    // NauSYS-Widget laden (nur 1x)
    const loadWidget = () =>
      new Promise<void>((res) => {
        if (document.querySelector('script[src*="nausys-widget-loader.js"]')) {
          setLoading(false);
          return res();
        }
        const w = document.createElement("script");
        w.src = "https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js";
        w.defer = true;
        w.setAttribute("data-nausys-widget-token","e57fc4ee-9a49-4869-8962-11ad54a8645d");
        w.setAttribute("data-nausys-widget-settings","b64a7438-be50-4ab8-bed8-9efd47f22fb1");
        w.onload = () => { setLoading(false); res(); };
        document.body.appendChild(w);
      });

    (async () => { await ensureJQ(); await loadWidget(); })();
  }, []);

  return (
    <section aria-label="Yacht-Suche" style={{ background: "rgba(245,247,250,.6)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Yacht-Suche</h2>
          <p style={{ margin: 0, color: "#64748b" }}>Direkt suchen, filtern & anfragen</p>
        </div>
        <div id="nausysWidgetContainer" style={{ width: "100%", margin: "0 auto" }} />
        {loading && (
          <div
            aria-hidden
            style={{
              marginTop: 12,
              border: "1px dashed #cbd5e1",
              borderRadius: 12,
              padding: 16,
              minHeight: 120,
              display: "grid",
              placeItems: "center",
              color: "#94a3b8",
              background: "white",
            }}
          >
            Widget lädt …
          </div>
        )}
        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
