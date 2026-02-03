import { useEffect, useRef } from "react";
import { NAUSYS_PROFILES, NausysProfileKey } from "@/config/nausys-profiles";

interface NausysWidgetProps {
  profileKey: NausysProfileKey;
  customTitle?: string;
}

export default function NausysWidget({ 
  profileKey, 
  customTitle 
}: NausysWidgetProps) {
  const profile = NAUSYS_PROFILES[profileKey];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove all previous NauSYS widgets and scripts (NOT jQuery!)
    const oldWidgets = document.querySelectorAll('[id^="nausys"]');
    oldWidgets.forEach(el => {
      if (el !== containerRef.current) {
        el.innerHTML = '';
      }
    });
    
    // Only remove NauSYS scripts, keep jQuery (loaded globally in index.html)
    const oldScripts = document.querySelectorAll('script[src*="nausys-widget-loader"]');
    oldScripts.forEach(s => s.remove());

    // Load NauSYS widget directly (jQuery is already global)
    const script = document.createElement('script');
    script.src = 'https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js';
    script.setAttribute('data-nausys-widget-token', profile.token);
    script.setAttribute('data-nausys-widget-settings', profile.settings);
    script.setAttribute('data-nausys-widget-language', 'GERMAN');
    
    if (profile.profile) {
      script.setAttribute('data-nausys-widget-profile', profile.profile);
    }
    
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src*="nausys-widget-loader"]');
      scripts.forEach(s => s.remove());
    };
  }, [profile]);

  const title = customTitle || `Yachten ${profile.regionName === 'weltweit' ? 'weltweit' : `in ${profile.regionName}`} finden`;

  return (
    <section aria-label={`Yacht-Suche ${profile.regionName}`} className="bg-slate-50/60">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-4 gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-slate-500">Direkt suchen, filtern & anfragen</p>
        </div>
        <div 
          ref={containerRef}
          id="nausysWidgetContainer"
          style={{ margin: "0 auto", width: "100%" }}
        />
        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
