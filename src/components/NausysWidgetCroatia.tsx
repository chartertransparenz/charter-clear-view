import { useEffect } from "react";

export default function NausysWidgetCroatia() {
  useEffect(() => {
    // Check if jQuery is already loaded
    if (!document.querySelector('script[src*="jquery-3.5.1.min.js"]')) {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://code.jquery.com/jquery-3.5.1.min.js';
      document.body.appendChild(jqueryScript);
    }

    // Check if NauSYS widget script for Croatia is already loaded
    const existingScript = document.querySelector('script[data-nausys-widget-profile="ff1d9618-0655-4fd7-ba65-e08f5d5124a2u"]');
    if (existingScript) return;

    // Load NauSYS Widget with Croatia-specific profile
    const widgetScript = document.createElement('script');
    widgetScript.src = 'https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js';
    widgetScript.setAttribute('data-nausys-widget-token', '5450ecdb-6a7d-49e1-aae5-c62e44d05a6a');
    widgetScript.setAttribute('data-nausys-widget-profile', 'ff1d9618-0655-4fd7-ba65-e08f5d5124a2u');
    widgetScript.setAttribute('data-nausys-widget-settings', '9976ea89-1907-4cbc-aec0-e5c4c310d086');
    widgetScript.setAttribute('data-nausys-widget-language', 'GERMAN');
    document.body.appendChild(widgetScript);

    return () => {
      // Cleanup on unmount
      if (widgetScript.parentNode) {
        widgetScript.parentNode.removeChild(widgetScript);
      }
    };
  }, []);

  return (
    <section aria-label="Yacht-Suche Kroatien" className="bg-slate-50/60">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-4 gap-2">
          <h2 className="text-2xl font-bold text-gray-800">Yachten in Kroatien finden</h2>
          <p className="text-slate-500">Direkt suchen, filtern & anfragen</p>
        </div>
        <div 
          id="nausysWidgetContainer" 
          style={{ margin: "0 auto", width: "100%" }}
        />
        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
