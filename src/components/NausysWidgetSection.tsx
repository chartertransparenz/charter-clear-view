import React from "react";

export default function NausysWidgetSection() {
  return (
    <section aria-label="Yacht-Suche" style={{ background: "rgba(245,247,250,.6)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Yacht-Suche</h2>
          <p style={{ margin: 0, color: "#64748b" }}>Direkt suchen, filtern & anfragen</p>
        </div>

        {/* NauSYS Widget Container - exakt nach Snippet */}
        <div 
          id="nausysWidgetContainer" 
          style={{ margin: "0 auto", width: "100%" }}
        />

        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
