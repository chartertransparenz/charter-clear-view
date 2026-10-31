/**
 * Consent-Abstraktion ueber Cookiebot.
 *
 * Zweck: Cookiebot-spezifische Details bleiben in dieser Datei. Komponenten und
 * src/lib/analytics.ts fragen nur noch Kategorien ab.
 *
 * Cookiebot laeuft im Manual-Blocking-Modus (data-blockingmode="manual" in
 * index.html). Cookiebot stellt also nur Banner, Speicherung und Kategorien
 * bereit - welches Script wann laedt, entscheidet unser eigener Code.
 * Auto-Blocking wird bewusst nicht verwendet, weil es in diesem Projekt
 * frueher Probleme mit React, jQuery und dem NauSYS-Widget verursacht hat.
 *
 * Alle Funktionen sind SSR-sicher: scripts/prerender.ts rendert App.tsx in
 * Node, dort existiert kein window.
 */

import type { ConsentCategory } from "@/config/consent";

export type { ConsentCategory };

export type ConsentState = Record<ConsentCategory, boolean>;

interface CookiebotConsent {
  necessary: boolean;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
}

interface CookiebotApi {
  consent: CookiebotConsent;
  /** true, sobald der Nutzer eine Auswahl getroffen hat (auch "alles ablehnen"). */
  hasResponse: boolean;
  /** Oeffnet den Consent-Dialog erneut, damit der Nutzer seine Auswahl aendern kann. */
  renew: () => void;
}

declare global {
  interface Window {
    Cookiebot?: CookiebotApi;
  }
}

/** Fallback, solange Cookiebot nicht geladen ist oder keine Auswahl vorliegt. */
export const NO_CONSENT: ConsentState = {
  necessary: false,
  preferences: false,
  statistics: false,
  marketing: false,
};

/**
 * Cookiebot-Events, die einen Consent-Wechsel anzeigen.
 * - CookiebotOnConsentReady: gespeicherte Auswahl liegt vor (auch beim Reload)
 * - CookiebotOnAccept / CookiebotOnDecline: Auswahl im Banner bzw. Widerruf
 */
const CONSENT_EVENTS = [
  "CookiebotOnConsentReady",
  "CookiebotOnAccept",
  "CookiebotOnDecline",
] as const;

/** true, wenn das Cookiebot-Script geladen ist. */
export function isConsentManagerAvailable(): boolean {
  return typeof window !== "undefined" && !!window.Cookiebot;
}

/** true, sobald eine Nutzerauswahl vorliegt (Banner wurde beantwortet). */
export function hasConsentResponse(): boolean {
  if (typeof window === "undefined") return false;
  return window.Cookiebot?.hasResponse === true;
}

/**
 * Aktueller Consent-Status, oder null solange Cookiebot nichts liefert.
 * null bedeutet ausdruecklich "noch unbekannt" - nicht "abgelehnt".
 */
export function getConsentState(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const consent = window.Cookiebot?.consent;
  if (!consent) return null;
  return {
    necessary: consent.necessary === true,
    preferences: consent.preferences === true,
    statistics: consent.statistics === true,
    marketing: consent.marketing === true,
  };
}

/** Einzelne Kategorie pruefen. Unbekannter Status gilt als nicht erteilt. */
export function hasConsent(category: ConsentCategory): boolean {
  return getConsentState()?.[category] === true;
}

export function hasStatisticsConsent(): boolean {
  return hasConsent("statistics");
}

export function hasMarketingConsent(): boolean {
  return hasConsent("marketing");
}

export function hasPreferencesConsent(): boolean {
  return hasConsent("preferences");
}

/**
 * Auf Consent-Wechsel reagieren.
 *
 * Der Listener wird zusaetzlich sofort aufgerufen, wenn beim Abonnieren schon
 * eine Auswahl vorliegt (Reload mit gespeichertem Consent). Rueckgabewert ist
 * eine Abmeldefunktion.
 */
export function onConsentChanged(listener: (state: ConsentState) => void): () => void {
  if (typeof window === "undefined") return () => undefined;

  const handler = () => listener(getConsentState() ?? NO_CONSENT);

  for (const eventName of CONSENT_EVENTS) {
    window.addEventListener(eventName, handler);
  }

  if (hasConsentResponse()) handler();

  return () => {
    for (const eventName of CONSENT_EVENTS) {
      window.removeEventListener(eventName, handler);
    }
  };
}

/**
 * Oeffnet die Cookiebot-Einstellungen, damit der Nutzer seine Einwilligung
 * aendern oder widerrufen kann (Footer-Link "Cookie-Einstellungen").
 * Das Loeschen von Cookies nach einem Widerruf uebernimmt Cookiebot selbst -
 * dafuer gibt es bewusst keine eigene Logik.
 */
export function openConsentSettings(): void {
  if (typeof window === "undefined") return;
  window.Cookiebot?.renew();
}
