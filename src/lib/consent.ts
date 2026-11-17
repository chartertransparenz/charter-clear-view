/**
 * Consent-Abstraktion ueber CookieConsent (vanilla-cookieconsent, MIT).
 *
 * Zweck: CookieConsent-spezifische Details bleiben in dieser Datei.
 * Komponenten und src/lib/analytics.ts fragen nur noch Kategorien ab.
 *
 * CookieConsent laeuft selbst gehostet aus dem npm-Paket und stellt nur
 * Banner, Einstellungsdialog und Speicherung der Auswahl bereit. Welches
 * Script bzw. welche Einbettung wann laedt, entscheidet unser eigener Code
 * (src/lib/analytics.ts, src/components/GoogleMapEmbed.tsx). Das
 * Script-Tag-Blocking von CookieConsent (manageScriptTags) wird nicht genutzt.
 *
 * Das Paket wird erst im Browser per dynamic import geladen. Alle Funktionen
 * sind damit SSR-sicher: scripts/prerender.ts rendert App.tsx in Node, dort
 * existiert kein window.
 */

import {
  CONSENT_COOKIE_DAYS,
  CONSENT_COOKIE_NAME,
  type ConsentCategory,
} from "@/config/consent";

export type { ConsentCategory };

export type ConsentState = Record<ConsentCategory, boolean>;

type CookieConsentApi = typeof import("vanilla-cookieconsent");

/** Fallback, solange CookieConsent nicht geladen ist oder keine Auswahl vorliegt. */
export const NO_CONSENT: ConsentState = {
  necessary: false,
  statistics: false,
  maps: false,
};

const CATEGORIES: ConsentCategory[] = ["necessary", "statistics", "maps"];

/**
 * CookieConsent-Events, die einen Consent-Wechsel anzeigen.
 * - cc:onConsent: Auswahl liegt vor (erste Auswahl und jeder Seitenaufruf
 *   mit gespeicherter Auswahl)
 * - cc:onChange: Auswahl wurde nachtraeglich geaendert (auch Widerruf)
 */
const CONSENT_EVENTS = ["cc:onConsent", "cc:onChange"] as const;

let api: CookieConsentApi | null = null;
let initStarted = false;

const PRIVACY_LINK = '<a href="/datenschutz">Datenschutzerklärung</a>';

/**
 * Laedt CookieConsent und zeigt beim ersten Besuch den Banner.
 * Wird einmal in App.tsx nach der Hydration aufgerufen.
 */
export async function initConsent(): Promise<void> {
  if (typeof window === "undefined" || initStarted) return;
  initStarted = true;

  const [cookieConsent] = await Promise.all([
    import("vanilla-cookieconsent"),
    import("vanilla-cookieconsent/dist/cookieconsent.css"),
    import("@/styles/cookieconsent.css"),
  ]);
  api = cookieConsent;

  await cookieConsent.run({
    cookie: {
      name: CONSENT_COOKIE_NAME,
      expiresAfterDays: CONSENT_COOKIE_DAYS,
      sameSite: "Lax",
    },
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right",
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      statistics: {},
      maps: {},
    },
    language: {
      default: "de",
      translations: {
        de: {
          consentModal: {
            title: "Cookies und externe Inhalte",
            description:
              "Wir speichern Ihre Auswahl, damit diese Website funktioniert. Mit Ihrer Einwilligung nutzen wir außerdem Google Analytics für eine statistische Auswertung und zeigen Karten von Google Maps an. Dabei werden Daten wie Ihre IP-Adresse an Google übertragen, auch in die USA. Ihre Auswahl können Sie jederzeit unter „Cookie-Einstellungen“ im Seitenfuß ändern oder widerrufen.",
            acceptAllBtn: "Alle akzeptieren",
            acceptNecessaryBtn: "Nur notwendige",
            showPreferencesBtn: "Einstellungen",
            footer: `${PRIVACY_LINK}\n<a href="/impressum">Impressum</a>`,
          },
          preferencesModal: {
            title: "Cookie-Einstellungen",
            acceptAllBtn: "Alle akzeptieren",
            acceptNecessaryBtn: "Nur notwendige",
            savePreferencesBtn: "Auswahl speichern",
            closeIconLabel: "Schließen",
            sections: [
              {
                title: "Ihre Auswahl",
                description:
                  "Hier legen Sie fest, welche optionalen Dienste wir einsetzen dürfen. Statistik und Karten sind unabhängig voneinander wählbar. Eine erteilte Einwilligung können Sie hier jederzeit mit Wirkung für die Zukunft widerrufen.",
              },
              {
                title: "Technisch notwendig",
                description: `Speichert Ihre Auswahl in diesem Dialog (Cookie „${CONSENT_COOKIE_NAME}“, 6 Monate), damit wir nicht bei jedem Seitenaufruf erneut fragen müssen. Die Yachtsuche lädt Programmteile von NauSYS (widget.nausys.com) und jQuery (code.jquery.com). Dabei wird Ihre IP-Adresse an diese Server übertragen; Cookies werden dabei nicht gesetzt.`,
                linkedCategory: "necessary",
              },
              {
                title: "Statistik (Google Analytics)",
                description:
                  "Google Analytics 4 der Google Ireland Limited wertet aus, welche Seiten wie genutzt werden. Dafür werden die Cookies „_ga“ und „_ga_…“ (bis zu 2 Jahre) gesetzt und Nutzungsdaten an Google übertragen, auch in die USA. Werbefunktionen sind deaktiviert.",
                linkedCategory: "statistics",
              },
              {
                title: "Karten (Google Maps)",
                description:
                  "Auf Revierseiten zeigen wir Karten von Google Maps (Google Ireland Limited). Eine Karte wird erst nach Ihrer Einwilligung geladen. Dann werden Daten wie Ihre IP-Adresse an Google übertragen, auch in die USA, und Google kann Cookies setzen.",
                linkedCategory: "maps",
              },
              {
                title: "Weitere Informationen",
                description: `Details finden Sie in unserer ${PRIVACY_LINK}.`,
              },
            ],
          },
        },
      },
    },
  });
}

/** true, wenn CookieConsent geladen ist. */
export function isConsentManagerAvailable(): boolean {
  return typeof window !== "undefined" && api !== null;
}

/** true, sobald eine Nutzerauswahl vorliegt (Banner wurde beantwortet). */
export function hasConsentResponse(): boolean {
  if (typeof window === "undefined" || !api) return false;
  return api.validConsent();
}

/**
 * Aktueller Consent-Status, oder null solange keine Auswahl vorliegt.
 * null bedeutet ausdruecklich "noch unbekannt" - nicht "abgelehnt".
 */
export function getConsentState(): ConsentState | null {
  if (!hasConsentResponse() || !api) return null;
  const cc = api;
  return Object.fromEntries(
    CATEGORIES.map((category) => [category, cc.acceptedCategory(category)]),
  ) as ConsentState;
}

/** Einzelne Kategorie pruefen. Unbekannter Status gilt als nicht erteilt. */
export function hasConsent(category: ConsentCategory): boolean {
  return getConsentState()?.[category] === true;
}

export function hasStatisticsConsent(): boolean {
  return hasConsent("statistics");
}

export function hasMapsConsent(): boolean {
  return hasConsent("maps");
}

/**
 * Erteilt eine einzelne Einwilligung zusaetzlich zur bestehenden Auswahl
 * (z. B. "Google Maps laden" im Karten-Platzhalter). Andere Kategorien
 * bleiben unveraendert; liegt noch keine Auswahl vor, gelten alle anderen
 * optionalen Kategorien als abgelehnt und der Banner verschwindet.
 */
export function grantConsent(category: ConsentCategory): void {
  if (typeof window === "undefined" || !api) return;
  const accepted = hasConsentResponse() ? api.getUserPreferences().acceptedCategories : [];
  api.acceptCategory([...new Set([...accepted, category])]);
  api.hide();
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
 * Oeffnet die Cookie-Einstellungen, damit der Nutzer seine Einwilligung
 * aendern oder widerrufen kann (Footer-Link "Cookie-Einstellungen").
 * GA-Cookies entfernt src/lib/analytics.ts nach einem Widerruf selbst.
 */
export function openConsentSettings(): void {
  if (typeof window === "undefined" || !api) return;
  api.showPreferences();
}
