import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Mit dem Entry/Exit System, kurz EES, stellt die EU die Grenzerfassung für Reisende
      aus Nicht-EU-Staaten schrittweise auf digitale Verfahren um. Für viele Chartergäste
      aus Deutschland, Österreich oder anderen EU-Ländern ändert sich dadurch wenig.
      Relevant wird das Thema vor allem, wenn Crewmitglieder aus Nicht-EU- oder
      Nicht-Schengen-Staaten mit an Bord sind.
    </p>
    <p>
      Bei Yachtcharter ist die Situation manchmal komplexer als bei einer klassischen
      Flugreise. Crews bewegen sich über Seegrenzen, wechseln Häfen oder fahren durch
      mehrere Länder. Deshalb ist es wichtig, Ein- und Ausreisen nachvollziehbar zu
      dokumentieren und die bekannten Schengen-Aufenthaltsregeln nicht aus dem Blick zu
      verlieren.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Wenn alle Crewmitglieder aus der EU oder dem Schengen-Raum kommen, ist das Thema
      meist unkompliziert. Anders sieht es aus, wenn Gäste aus Großbritannien, den USA
      oder anderen Drittstaaten an Bord sind. Dann können Aufenthaltsdauer, Einreisepunkt
      und Ausreiseformalitäten eine Rolle spielen.
    </p>
    <p>
      Besonders bei längeren Törns oder Grenzübertritten sollte vorab geklärt werden,
      ob ein offizieller Ein- oder Ausreisehafen angelaufen werden muss und welche
      Dokumentation sinnvoll ist. Italien sollte dabei besonders aufmerksam betrachtet
      werden, weil die praktische Anwendung von Einreise- und Aufenthaltsregeln dort
      für Yachten und Crew relevant sein kann.
    </p>

    <h2>Was sollte man vor dem Törn prüfen?</h2>
    <p>Vor dem Törn sollte geklärt werden:</p>
    <ul>
      <li>Kommen Crewmitglieder aus Nicht-EU- oder Nicht-Schengen-Staaten?</li>
      <li>Wie viele Schengen-Tage wurden bereits genutzt?</li>
      <li>Gibt es Grenzübertritte während des Törns?</li>
      <li>Welche Häfen sind offizielle Ein- oder Ausreisehäfen?</li>
      <li>Welche Dokumente sollten zusätzlich zum Reisepass mitgeführt werden?</li>
      <li>Sollte die Charterbasis vorab über die internationale Crew informiert werden?</li>
    </ul>

    <div className="my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Für die meisten EU-Crews bleibt Yachtcharter unkompliziert. Bei internationaler
        Crew hilft etwas Vorbereitung, damit Einreise, Aufenthaltsdauer und Ausreise
        sauber dokumentiert sind.
      </p>
    </div>
  </div>
);

export const neueEuGrenzregelnNonEuCrewYachtcharter: NewsItem = {
  slug: "neue-eu-grenzregeln-non-eu-crew-yachtcharter",
  title: "Neue EU-Grenzregeln: Was Non-EU-Crew beim Yachtcharter beachten sollte",
  excerpt:
    "Das neue EU Entry/Exit System betrifft vor allem Crewmitglieder, die nicht aus der EU oder dem Schengen-Raum kommen. Für Chartertörns mit internationaler Crew lohnt es sich, Ein- und Ausreisen künftig genauer zu dokumentieren.",
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
  source_url:
    "https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/smart-borders/entry-exit-system_en",
  customer_impact:
    "Crews mit Nicht-EU-Mitgliedern müssen die 90/180-Tage-Schengen-Regel beachten. Das EES-System kann künftig Ein- und Ausreisevorgänge digital erfassen.",
  action_advice:
    "Pässe und Aufenthaltsstatus aller Nicht-EU-Crew prüfen, Route auf Schengen-Außengrenzen analysieren, EES-Status kurz vor Reiseantritt recherchieren.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "eu_ees_non_eu_crew_italien_2026",
  seo_title:
    "EU-Grenzregeln & EES: Was Non-EU-Crew beim Yachtcharter wissen muss",
  meta_description:
    "Das EU Entry/Exit System (EES) und die Schengen-Aufenthaltsregeln: Was Yachtcharter-Crews mit Nicht-EU-Mitgliedern vor dem Törn prüfen sollten.",
  cta_text:
    "Wenn Sie mit internationaler Crew planen, helfen wir gerne dabei, die wichtigsten Punkte vorab zu sortieren.",
};
