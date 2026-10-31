/**
 * Verbindet React Router mit GA4.
 *
 * CharterTransparenz ist eine SPA: ein einmaliger Pageview beim Laden wuerde
 * nur die Einstiegsseite messen. Deshalb werden Pageviews vollstaendig selbst
 * kontrolliert (gtag config laeuft mit send_page_view: false) und bei jedem
 * Routenwechsel gesendet.
 *
 * Der Hook wird genau einmal in App.tsx aufgerufen. In scripts/prerender.ts
 * laufen Effects nicht, der Hook ist dort also wirkungslos.
 */

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "@/lib/analytics";

export function useAnalytics(): void {
  const location = useLocation();
  const path = location.pathname + location.search;

  // Damit initAnalytics() beim spaeteren Erteilen der Einwilligung den dann
  // aktuellen Pfad kennt, ohne das Consent-Abo neu aufzubauen.
  const pathRef = useRef(path);
  pathRef.current = path;

  useEffect(() => {
    initAnalytics(() => pathRef.current);
  }, []);

  useEffect(() => {
    trackPageView(path);
  }, [path]);
}
