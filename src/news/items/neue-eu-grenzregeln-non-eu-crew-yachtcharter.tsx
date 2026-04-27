import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Die Europäische Union arbeitet an der Einführung eines neuen Ein- und Ausreisesystems,
      dem Entry/Exit System (EES). Für Yachtcharter-Crews mit Mitgliedern aus Nicht-EU-Ländern
      kann das praktische Auswirkungen haben – besonders auf Törns mit Etappen in Schengen- und
      Nicht-Schengen-Häfen. Dieser Hinweis erklärt die Grundlagen.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Das EES (Entry/Exit System) ist ein geplantes digitales Grenzkontrollsystem der EU,
      das die bisherige manuelle Reisepassstempelung ersetzen soll. Es registriert biometrisch,
      wann Drittstaatsangehörige (also Nicht-EU-Bürger) den Schengen-Raum betreten und verlassen.
    </p>
    <p>
      Relevante Punkte für Charterkunden:
    </p>
    <ul>
      <li>
        <strong>Wer ist betroffen?</strong> Crew-Mitglieder aus Nicht-EU-Ländern, also z. B.
        aus Großbritannien (nach dem Brexit), den USA, Australien, Kanada oder der Schweiz.
        EU-Bürger sind vom EES nicht betroffen.
      </li>
      <li>
        <strong>90/180-Tage-Regel:</strong> Unabhängig vom EES gilt bereits jetzt: Drittstaats-
        angehörige dürfen sich innerhalb von 180 Tagen maximal 90 Tage im Schengen-Raum
        aufhalten. Das EES würde diese Aufenthalte künftig automatisch erfassen und prüfen.
      </li>
      <li>
        <strong>Warum Italien besonders relevant ist:</strong> Viele internationale Charter-Törns
        führen durch italienische Gewässer oder starten in Italien. Gleichzeitig befinden sich
        nicht alle Seehäfen am technisch gleichen Stand, und die praktische Umsetzung an
        kleinen Häfen und Marinas ist noch nicht vollständig geklärt.
      </li>
      <li>
        <strong>Aktueller Stand:</strong> Das EES war mehrfach verschoben worden. Der genaue
        Einführungstermin und die genaue Umsetzung an Schiffsanlegestellen sind weiterhin
        im Fluss. Charterkunden sollten den Status vor ihrem Törn prüfen.
      </li>
    </ul>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für rein innereuropäische Crews – also alle Mitglieder mit EU-Pass – ändert sich
      durch das EES nichts. Wer jedoch eine gemischte Crew plant, bei der einzelne Mitglieder
      aus Drittstaaten kommen (z. B. britische, amerikanische oder australische Mitsegler),
      sollte folgendes prüfen:
    </p>
    <ul>
      <li>
        Wie viele Tage haben die Betroffenen im laufenden 180-Tage-Zeitraum bereits im
        Schengen-Raum verbracht?
      </li>
      <li>
        Führt der Törn in Nicht-Schengen-Gebiete (z. B. Montenegro, Türkei) und zurück?
        Dann kann jeder Schengen-Wiedereintritt einen neuen Ein-/Ausreise-Vorgang auslösen.
      </li>
      <li>
        Sind die Reisepässe der betroffenen Crew-Mitglieder noch mindestens drei Monate
        über das geplante Ausreisedatum hinaus gültig?
      </li>
    </ul>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Reisepässe und Aufenthaltsstatus aller Nicht-EU-Crew-Mitglieder vor dem Törn prüfen.
      </li>
      <li>
        Geplante Route auf mögliche Schengen-Außengrenzen prüfen – besonders bei Törns
        zwischen Adrialändern (z. B. Kroatien → Montenegro → zurück).
      </li>
      <li>
        Kurz vor Abreise den aktuellen EES-Status recherchieren: Die Einführung kann sich
        noch einmal verschieben oder stufenweise erfolgen.
      </li>
      <li>
        Im Zweifelsfall die zuständige Botschaft oder ein Reiserechtsbüro konsultieren.
      </li>
    </ul>

    <h2>Quelle und Stand</h2>
    <p>
      Grundlage dieser Zusammenfassung sind die offiziellen Informationen der Europäischen
      Kommission zum EES sowie die Schengen-Grenzregeln. Da sich der Einführungszeitplan
      mehrfach verschoben hat, empfiehlt sich eine Prüfung des aktuellen Stands kurz vor
      dem geplanten Törn.
    </p>
    <p className="text-sm text-gray-500 mt-4 border-t border-gray-100 pt-4">
      Regeln können sich kurzfristig ändern. Prüfen Sie vor dem Törn immer die aktuellen
      Einreisebestimmungen für alle Crew-Mitglieder.
    </p>
  </div>
);

export const neueEuGrenzregelnNonEuCrewYachtcharter: NewsItem = {
  slug: "neue-eu-grenzregeln-non-eu-crew-yachtcharter",
  title: "Neue EU-Grenzregeln: Was Non-EU-Crew beim Yachtcharter beachten sollte",
  excerpt:
    "Das geplante EU-Einreisesystem EES betrifft Charterkunden mit Nicht-EU-Crewmitgliedern. Britische, amerikanische und andere Drittstaats-Mitsegler sollten die 90/180-Tage-Regel und offene Fragen zur Umsetzung kennen.",
  content_type: "basis_hinweis",
  region: "EU-weit / Italien",
  country_or_area: "Europäische Union",
  status: "in_kraft",
  effective_from: "2026-01-01",
  published_at: "2026-04-20",
  updated_at: "2026-04-20",
  priority: "mittel",
  category: "Einreise & Schengen",
  source_name: "Europäische Kommission – EES",
  source_url: "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en",
  customer_impact:
    "Crews mit Nicht-EU-Mitgliedern müssen die 90/180-Tage-Schengen-Regel beachten. Das geplante EES-System könnte künftig jeden Ein- und Ausreisevorgang digital erfassen.",
  action_advice:
    "Pässe und Aufenthaltsstatus aller Nicht-EU-Crew prüfen, Route auf Schengen-Außengrenzen analysieren, EES-Status kurz vor Reiseantritt recherchieren.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "eu_ees_non_eu_crew_italien_2026",
  seo_title:
    "EU-Grenzregeln & EES: Was Non-EU-Crew beim Yachtcharter wissen muss",
  meta_description:
    "Das EU Entry/Exit System (EES) und die 90/180-Tage-Schengen-Regel: Was Yachtcharter-Crews mit Nicht-EU-Mitgliedern vor dem Törn prüfen sollten.",
};
