import React, { useEffect, useState } from "react";

export default function NausysWidgetSection() {
  const [state, setState] = useState<"boot"|"ok"|"err">("boot");

  useEffect(() => {
    const hasContainer = !!document.getElementById("nausysWidgetContainer");
    if (!hasContainer) console.warn("[NauSYS] Container fehlt noch beim Mount.");

    let loaderFailed = false;

    // 1) jQuery sicherstellen
    const ensureJQ = () =>
      new Promise<void>((resolve) => {
        if ((window as any).jQuery) {
          console.log("[NauSYS] jQuery bereits vorhanden:", (window as any).jQuery?.fn?.jquery);
          return resolve();
        }
        console.log("[NauSYS] jQuery wird geladen...");
        const s = document.createElement("script");
        s.src = "https://code.jquery.com/jquery-3.5.1.min.js";
        s.async = true;
        s.onload = () => {
          console.log("[NauSYS] jQuery erfolgreich geladen:", (window as any).jQuery?.fn?.jquery);
          resolve();
        };
        s.onerror = () => {
          console.warn("[NauSYS] jQuery konnte nicht geladen werden (nicht kritisch).");
          resolve();
        };
        document.body.appendChild(s);
      });

    // 2) Widget-Loader laden (nur 1x)
    const loadWidget = () =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector('script[src*="nausys-widget-loader.js"]')) {
          console.log("[NauSYS] Loader-Script bereits vorhanden.");
          setState("ok"); 
          return resolve();
        }
        console.log("[NauSYS] Loader-Script wird angehängt...");
        const w = document.createElement("script");
        w.src = "https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js";
        w.setAttribute("data-nausys-widget-token","e57fc4ee-9a49-4869-8962-11ad54a8645d");
        w.setAttribute("data-nausys-widget-settings","b64a7438-be50-4ab8-bed8-9efd47f22fb1");
        w.async = true;
        w.onload = () => { 
          console.log("[NauSYS] Loader-Script erfolgreich geladen."); 
          setState("ok"); 
          resolve(); 
        };
        w.onerror = () => { 
          console.error("[NauSYS] Loader-Script konnte nicht geladen werden (onerror)."); 
          loaderFailed = true;
          setState("err"); 
          reject(new Error("load-failed")); 
        };
        document.body.appendChild(w);
        console.log("[NauSYS] Loader-Script wurde zum DOM hinzugefügt.");
      });

    // 3) MutationObserver für Container
    const observeContainer = () => {
      const container = document.getElementById("nausysWidgetContainer");
      if (!container) return;

      const observer = new MutationObserver(() => {
        const hasContent = container.children.length > 0 || container.offsetHeight > 20;
        if (hasContent) {
          console.log("[NauSYS] Container hat Inhalt erhalten:", {
            children: container.children.length,
            height: container.offsetHeight
          });
          setState("ok");
          observer.disconnect();
        }
      });

      observer.observe(container, { 
        childList: true, 
        subtree: true, 
        attributes: true,
        attributeFilter: ['style', 'class'] 
      });

      console.log("[NauSYS] MutationObserver für Container aktiviert.");
      return observer;
    };

    // 4) Ablauf: nach vollständigem DOM + jQuery -> Loader
    const start = async () => {
      try {
        if (document.readyState === "loading") {
          await new Promise<void>((r)=>document.addEventListener("DOMContentLoaded",()=>r(),{once:true}));
        }
        await ensureJQ();
        await new Promise((r)=>setTimeout(r, 50));
        
        const observer = observeContainer();
        
        await loadWidget();
        
        // Fallback: Wenn nach 8s immer noch kein Inhalt und Loader fehlgeschlagen
        setTimeout(() => {
          const c = document.getElementById("nausysWidgetContainer");
          const hasContent = c && (c.children.length > 0 || c.offsetHeight > 20);
          
          console.log("[NauSYS] Fallback-Check nach 8s:", {
            hasContent,
            loaderFailed,
            children: c?.children.length,
            height: c?.offsetHeight
          });
          
          if (loaderFailed || (!hasContent && c)) {
            setState("err");
          }
          
          if (observer) observer.disconnect();
        }, 8000);
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
        <div 
          id="nausysWidgetContainer" 
          data-nausys-widget="search-wizard"
          style={{ width: "100%", margin: "0 auto" }} 
        />

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
