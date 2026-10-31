/**
 * Zentrale Consent-/Analytics-Konfiguration.
 *
 * Google Analytics 4
 * ------------------
 * Die Measurement-ID steht ausschliesslich hier. GA wird ausschliesslich aus
 * dem Repository heraus geladen (src/lib/analytics.ts) - nie wieder ueber
 * Netlify Snippet Injection.
 *
 * Cookiebot
 * ---------
 * Die Cookiebot-Domain-Group-ID steht bewusst NICHT in dieser Datei, sondern
 * an genau einer Stelle: im <script id="Cookiebot" data-cbid="..."> im <head>
 * von index.html. Cookiebot muss als erstes Script im Dokument stehen, damit
 * der Banner frueh erscheint und der Consent-Status bereits vor dem Mounten
 * von React verfuegbar ist. Die ID hier zusaetzlich zu fuehren waere eine
 * Duplizierung - geaendert wird sie deshalb nur in index.html.
 *
 * Betriebsmodus: Google Basic Consent Mode.
 * Vor einer Statistik-Einwilligung wird kein Google-Script geladen und kein
 * Request an Google gesendet (auch kein cookieloser Ping).
 */

export const GA_MEASUREMENT_ID = "G-47004PY1TM";

/** Cookiebot-Kategorien. */
export type ConsentCategory = "necessary" | "preferences" | "statistics" | "marketing";

/**
 * Consent-Mode-v2-Signale, die bis zu einer Einwilligung gelten.
 * Werbe-Signale bleiben in diesem Projekt dauerhaft "denied": GA wird nur zur
 * Webanalyse genutzt, Remarketing-/Werbefunktionen sind nicht aktiviert.
 */
export const CONSENT_MODE_DEFAULTS = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;
