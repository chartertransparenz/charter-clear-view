/**
 * Google Analytics 4 - geladen ausschliesslich nach Statistik-Einwilligung.
 *
 * Google Basic Consent Mode:
 * Solange keine Statistik-Einwilligung vorliegt, wird gtag.js NICHT eingefuegt.
 * Es gibt damit vor der Einwilligung keinen Request an googletagmanager.com
 * oder google-analytics.com, keine GA-Cookies und keinen cookielosen Ping.
 *
 * Doppelte page_view-Events sind auf zwei Wegen ausgeschlossen:
 *  1. gtag("config", ...) laeuft mit send_page_view: false - GA sendet also
 *     keinen automatischen Initial-Pageview.
 *  2. trackPageView() verwirft denselben Pfad zweimal hintereinander
 *     (lastTrackedPath). Damit kollidieren der Initial-Pageview beim
 *     Aktivieren und der Pageview des Router-Listeners nicht.
 *
 * SSR-sicher: alle Funktionen verlassen sich auf window und steigen in Node aus.
 */

import { CONSENT_MODE_DEFAULTS, GA_MEASUREMENT_ID } from "@/config/consent";
import { onConsentChanged } from "@/lib/consent";

const GTAG_SCRIPT_ID = "ga4-gtag";
const GTAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

type GtagFn = (...args: unknown[]) => void;

/** gtag.js erwartet pro dataLayer-Eintrag ein arguments-Objekt, kein Array. */
let gtagImpl: GtagFn | null = null;

let scriptInjected = false;
let analyticsActive = false;
let lastTrackedPath: string | null = null;
let consentSubscribed = false;

function gtag(...args: unknown[]): void {
  window.dataLayer = window.dataLayer || [];
  if (!gtagImpl) {
    gtagImpl = function gtagPush() {
      // gtag.js verarbeitet nur arguments-aehnliche Eintraege im dataLayer;
      // ein echtes Array wird ignoriert. Deshalb hier bewusst arguments.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    } as unknown as GtagFn;
  }
  gtagImpl(...args);
}

/**
 * Laedt GA4 (einmalig) und setzt analytics_storage auf granted.
 * Mehrfache Aufrufe fuegen kein zweites Script ein.
 *
 * @param currentPath Pfad, fuer den direkt ein Pageview gesendet wird. Wird
 *   benoetigt, wenn die Einwilligung erst mitten im Seitenbesuch erteilt wird -
 *   dann gibt es keinen Routenwechsel, der den Pageview ausloesen wuerde.
 */
export function enableAnalytics(currentPath?: string): void {
  if (typeof window === "undefined") return;

  if (!scriptInjected) {
    // Consent-Mode-v2-Defaults vor der Konfiguration setzen.
    gtag("consent", "default", { ...CONSENT_MODE_DEFAULTS });
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });

    const script = document.createElement("script");
    script.id = GTAG_SCRIPT_ID;
    script.async = true;
    script.src = GTAG_SRC;
    document.head.appendChild(script);

    scriptInjected = true;
  }

  // Nur Statistik freigeben. Werbe-Signale bleiben denied, solange Meta und
  // andere Marketing-Tags in diesem Projekt deaktiviert sind.
  gtag("consent", "update", { analytics_storage: "granted" });
  analyticsActive = true;

  if (currentPath) trackPageView(currentPath);
}

/**
 * Stoppt die Messung nach einem Widerruf.
 * Ein bereits ausgefuehrtes Script laesst sich nicht zurueckrollen, deshalb
 * wird analytics_storage auf denied gesetzt und es werden keine weiteren
 * Events mehr gesendet. Die GA-Cookies entfernt Cookiebot.
 */
export function disableAnalytics(): void {
  if (typeof window === "undefined") return;

  analyticsActive = false;
  lastTrackedPath = null;

  if (scriptInjected) {
    gtag("consent", "update", { analytics_storage: "denied" });
  }
}

/** Sendet einen page_view, sofern GA aktiv ist und der Pfad neu ist. */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined") return;
  if (!analyticsActive) return;
  if (path === lastTrackedPath) return;

  lastTrackedPath = path;

  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}

/**
 * Verbindet Consent und Analytics. Idempotent - mehrfache Aufrufe
 * (React StrictMode, Remounts) abonnieren nur einmal.
 *
 * @param getCurrentPath Liefert den aktuell angezeigten Pfad.
 */
export function initAnalytics(getCurrentPath: () => string): void {
  if (typeof window === "undefined") return;
  if (consentSubscribed) return;

  consentSubscribed = true;

  onConsentChanged((state) => {
    if (state.statistics) {
      enableAnalytics(getCurrentPath());
    } else {
      disableAnalytics();
    }
  });
}

/** Nur fuer Diagnose/Tests. */
export function isAnalyticsActive(): boolean {
  return analyticsActive;
}

/** Nur fuer Diagnose/Tests. */
export function isGtagScriptInjected(): boolean {
  return scriptInjected;
}
