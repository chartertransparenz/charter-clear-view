import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist ETIAS?</h2>
    <p>
      ETIAS steht für European Travel Information and Authorization System – eine
      digitale Vorabreisegenehmigung, die die EU für Reisende aus visafreien Drittstaaten
      einführt. Das Prinzip ist vergleichbar mit dem US-amerikanischen ESTA oder dem
      britischen ETA: Wer keinen EU-Pass hat, aber visumfrei in den Schengen-Raum
      einreisen darf, muss sich vor der Reise online registrieren und eine Genehmigung
      einholen.
    </p>
    <p>
      Betroffen sind unter anderem Staatsangehörige aus Großbritannien, den USA,
      Kanada, Australien, Neuseeland, Japan und weiteren Ländern – also alle, die
      bisher ohne Visum in die EU reisen durften und auch weiterhin dürfen. Das Visum
      selbst entfällt nicht; es kommt lediglich ein vorgelagerter Online-Check hinzu.
    </p>

    <h2>Wann kommt ETIAS?</h2>
    <p>
      Der Starttermin wurde mehrfach verschoben. Aktuell ist der Beginn für das vierte
      Quartal 2026 geplant, Pflicht wird ETIAS voraussichtlich erst im Laufe von 2027.
      Bis dahin ist die Genehmigung nicht zwingend erforderlich. Reisende, die jedoch
      zwischen Ankündigung und Pflichtstart reisen, sollten den Status kurz vor
      Reisebeginn prüfen, da sich Termine erfahrungsgemäß noch verschieben können.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für alle Charterkunden mit EU- oder Schweizer Pass ändert sich nichts – die
      Schweiz gehört zum Schengen-Raum und ist von ETIAS nicht betroffen. ETIAS gilt
      ausschließlich für Drittstaatsangehörige ohne EU- oder Schengen-Zugehörigkeit.
    </p>
    <p>
      Wer mit Crewmitgliedern oder Chartergästen aus Großbritannien, den USA oder
      anderen betroffenen Ländern plant, sollte ETIAS in der Reisevorbereitung für
      2027-Törns bereits einkalkulieren:
    </p>
    <ul>
      <li>
        <strong>Gebühr:</strong> EUR 20 pro Person (Kinder unter 18 und Personen
        über 70 sind befreit).
      </li>
      <li>
        <strong>Gültigkeit:</strong> 3 Jahre oder bis zum Ablauf des Reisepasses –
        je nachdem, was früher eintritt.
      </li>
      <li>
        <strong>Bearbeitungszeit:</strong> In der Regel wenige Minuten bis zu 96
        Stunden. In Einzelfällen kann es länger dauern.
      </li>
      <li>
        <strong>Antrag:</strong> Online über die offizielle EU-ETIAS-Plattform unter
        travel-europe.europa.eu/en/etias. Keine Botschaft, kein Visum, kein Termin
        notwendig.
      </li>
    </ul>
    <p>
      Für die Segelsaison 2026 ist ETIAS noch nicht verpflichtend. Für Törns ab
      Frühjahr 2027 sollte es jedoch beim Reise-Vorlauf eingeplant werden –
      besonders für britische Chartergäste, die ohnehin durch den Brexit bereits
      nicht mehr vom EU-Status profitieren.
    </p>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Prüfen, ob Crewmitglieder oder Chartergäste Nicht-EU- und Nicht-Schengen-
        Staatsangehörige sind.
      </li>
      <li>
        Für Saison-2027-Planung ETIAS in der Checkliste vermerken.
      </li>
      <li>
        Kurz vor Reisebeginn aktuellen ETIAS-Status prüfen – der Starttermin kann
        sich noch einmal verschieben.
      </li>
      <li>
        Britische Gäste besonders hinweisen, da diese Gruppe in der Karibik und
        im Mittelmeer häufig chartert und vom Brexit-Wegfall der EU-Freizügigkeit
        am stärksten betroffen ist.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Planungshinweis – noch nicht in Kraft
      </p>
      <p className="text-gray-700 leading-relaxed">
        ETIAS ist aktuell noch nicht verpflichtend. Geplanter Start: Q4 2026,
        voraussichtliche Pflicht: 2027. Dieser Hinweis dient der frühzeitigen
        Törnplanung – vor allem für britische Chartergäste und internationale Crews.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: Offizielle EU-ETIAS-Informationsseite (travel-europe.europa.eu/en/etias),
      ergänzend BAL Immigration – ETIAS Q4 2026. Redaktionsstand: 24. April 2026.
      Alle Angaben ohne Gewähr. Der ETIAS-Starttermin wurde in der Vergangenheit
      bereits mehrfach verschoben – bitte kurz vor dem Törn aktuelle offizielle
      Quellen prüfen.
    </p>
  </div>
);

export const etiasReisegenehmigungEu2026: NewsItem = {
  content,
  slug: "etias-reisegenehmigung-eu-2026",
  title: "ETIAS: Digitale EU-Reisegenehmigung kommt – was Charterkunden wissen sollten",
  excerpt:
    "Ab voraussichtlich 2027 brauchen Drittstaatsangehörige (Briten, US-Bürger, Australier u.a.) eine digitale Vorabreisegenehmigung für den Schengen-Raum. ETIAS kostet EUR 20, gilt 3 Jahre und wird online beantragt. Für Törnplanung 2027 jetzt vormerken.",
  content_type: "basis_hinweis",
  region: "EU-weit / Schengen",
  country_or_area: "Europäische Union",
  status: "angekuendigt",
  effective_from: "2027-01-01",
  published_at: "2026-04-24",
  updated_at: "2026-04-24",
  priority: "mittel",
  category: "Einreise & Schengen",
  source_name: "EU-ETIAS / BAL Immigration",
  source_url: "https://travel-europe.europa.eu/en/etias",
  customer_impact:
    "Drittstaatsangehörige (Briten, US-Bürger, Australier etc.) ohne EU- oder Schengen-Pass benötigen ab voraussichtlich 2027 ein ETIAS. EUR 20 p.P., 3 Jahre gültig.",
  action_advice:
    "Für Törns ab 2027 in der Planungsphase ETIAS vormerken. Staatsangehörigkeiten der Crew prüfen. Kurz vor Reise aktuellen Start-Status recherchieren.",
  show_on_blog: true,
  show_on_region_page: false,
  linked_region_slug: "",
  canonical_topic_key: "etias_reisegenehmigung_eu_schengen_2026",
  seo_title:
    "ETIAS 2026/2027: EU-Reisegenehmigung für Nicht-EU-Bürger – Yachtcharter-Planung",
  meta_description:
    "ETIAS kommt: Ab 2027 brauchen Drittstaatsangehörige eine digitale Vorabreisegenehmigung für den Schengen-Raum. Was das für Yachtcharter-Kunden bedeutet.",
};
