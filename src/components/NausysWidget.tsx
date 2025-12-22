import { useEffect, useId } from "react";
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
  const instanceId = useId().replace(/:/g, '');
  const containerId = `nausysWidget_${profileKey}_${instanceId}`;

  useEffect(() => {
    // Clean up any old scripts for this specific container
    const oldScripts = document.querySelectorAll(
      `script[data-nausys-container="${containerId}"]`
    );
    oldScripts.forEach(s => s.remove());

    // Load NauSYS Widget for this container
    const script = document.createElement('script');
    script.src = 'https://widget.nausys.com/NauSYS-widgets/nausys-widget-loader.js';
    script.setAttribute('data-nausys-widget-token', profile.token);
    script.setAttribute('data-nausys-widget-settings', profile.settings);
    script.setAttribute('data-nausys-widget-language', 'GERMAN');
    script.setAttribute('data-nausys-container', containerId);
    
    if (profile.profile) {
      script.setAttribute('data-nausys-widget-profile', profile.profile);
    }
    
    // Specify container selector for NauSYS
    script.setAttribute('data-nausys-widget-container', containerId);
    
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [containerId, profile]);

  const title = customTitle || `Yachten ${profile.regionName === 'weltweit' ? 'weltweit' : `in ${profile.regionName}`} finden`;

  return (
    <section aria-label={`Yacht-Suche ${profile.regionName}`} className="bg-slate-50/60">
      <div className="max-w-[1200px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-4 gap-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-slate-500">Direkt suchen, filtern & anfragen</p>
        </div>
        <div 
          id={containerId}
          style={{ margin: "0 auto", width: "100%" }}
        />
        <noscript>Bitte JavaScript aktivieren, um die Yacht-Suche zu verwenden.</noscript>
      </div>
    </section>
  );
}
