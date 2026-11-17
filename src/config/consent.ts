/**
 * Zentrale Consent-/Analytics-Konfiguration.
 *
 * Google Analytics 4
 * ------------------
 * Die Measurement-ID steht ausschliesslich hier. GA wird ausschliesslich aus
 * dem Repository heraus geladen (src/lib/analytics.ts) - nie wieder ueber
 * Netlify Snippet Injection.
 *
 * Consent-Manager: CookieConsent (vanilla-cookieconsent, MIT)
 * -----------------------------------------------------------
 * Selbst gehostet ueber das npm-Paket, kein externer Dienst und kein Abo.
 * Konfiguration und deutsche Texte stehen in src/lib/consent.ts. Die
 * Auswahl liegt im First-Party-Cookie CONSENT_COOKIE_NAME im Browser des
 * Besuchers.
 *
 * Betriebsmodus: Google Basic Consent Mode.
 * Vor einer Statistik-Einwilligung wird kein Google-Script geladen und kein
 * Request an Google gesendet (auch kein cookieloser Ping).
 */

export const GA_MEASUREMENT_ID = "G-47004PY1TM";

/**
 * Consent-Kategorien.
 * - necessary: technisch notwendig (Speicherung der Auswahl selbst)
 * - statistics: Google Analytics 4
 * - maps: eingebettete Google-Maps-Karten
 */
export type ConsentCategory = "necessary" | "statistics" | "maps";

/** Cookie, in dem CookieConsent die Auswahl speichert. */
export const CONSENT_COOKIE_NAME = "ct_consent";

/** Gueltigkeit der gespeicherten Auswahl in Tagen. */
export const CONSENT_COOKIE_DAYS = 182;

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
