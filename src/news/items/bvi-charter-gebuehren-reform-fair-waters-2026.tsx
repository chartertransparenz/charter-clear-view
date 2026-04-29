import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Die British Virgin Islands gehören zu den bekanntesten Charterrevieren der Karibik.
      Kurze Distanzen, viele geschützte Ankerplätze und eine lange Chartertradition machen
      das Revier für Bareboat- und Crewed-Charter besonders attraktiv. Gleichzeitig ist das
      Gebiet eng mit den US Virgin Islands verbunden: Viele Yachten, Crews und Gäste
      bewegen sich zwischen beiden Revieren.
    </p>
    <p>
      Genau hier liegt der Hintergrund der aktuellen Diskussion. Seit Juni 2025 gelten in
      den BVI deutlich höhere Gebühren für auswärtige Charteryachten. Branchenvertreter
      fordern nun eine Reform, weil die Regelung Einfluss auf Flottenstandorte, Angebot und
      Kosten haben kann.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Laut internem Report fordert die Initiative Project Fair Waters eine Reform der
      BVI-Gebühren für Charteryachten, die nicht in den BVI registriert oder stationiert
      sind. Diskutiert werden unter anderem deutlich niedrigere Gebühren und ein reziprokes
      System zwischen den BVI und den US Virgin Islands.
    </p>
    <p>
      Die Reform ist noch nicht beschlossen. Für Charterkunden ist deshalb nicht
      entscheidend, einzelne Gebührensätze auswendig zu kennen. Wichtiger ist: Die
      Gebührenfrage kann beeinflussen, welche Yachten in welchem Revier angeboten werden,
      ob Routen zwischen USVI und BVI unkompliziert bleiben und ob bestimmte Chartermodelle
      teurer oder seltener werden.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Wer direkt in den BVI chartert, wird die Gebühren meist nicht einzeln als eigene
      Position wahrnehmen. Sie können aber indirekt in Preis, Verfügbarkeit oder
      Flottenstruktur einfließen. Wer dagegen eine Yacht ab USVI übernimmt und in die BVI
      fahren möchte, sollte genauer hinschauen: Basis, Flagge, Genehmigungen und erlaubte
      Fahrgebiete können bei der Planung eine Rolle spielen.
    </p>
    <p>
      Für Kunden ist diese Meldung deshalb vor allem ein Hinweis, bei Karibik-Angeboten
      nicht nur auf den Wochenpreis zu schauen. Wichtig sind auch Startbasis, erlaubte
      Fahrgebiete, eventuell notwendige Permits und mögliche Zusatzkosten.
    </p>

    <h2>Was sollte man vor der Buchung prüfen?</h2>
    <ul>
      <li>Startet die Yacht in den BVI oder in den US Virgin Islands?</li>
      <li>Sind Fahrten zwischen USVI und BVI im Chartervertrag erlaubt?</li>
      <li>Sind BVI-Gebühren, Cruising Permits oder Einreiseformalitäten bereits enthalten?</li>
      <li>Gibt es Einschränkungen für bestimmte Yachten oder Flotten?</li>
      <li>Welche Route ist bei der gewählten Basis praktisch sinnvoll?</li>
      <li>Gibt es aktuelle Hinweise des Vercharterers zu BVI-Gebühren oder Fahrgebieten?</li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die Gebühren-Diskussion in den BVI ist kein Grund zur Verunsicherung, aber ein
        wichtiger Punkt bei der Karibikplanung. Wer BVI oder USVI kombiniert, sollte Basis,
        Fahrgebiet und enthaltene Gebühren vor der Buchung sorgfältig prüfen.
      </p>
    </div>
  </div>
);

export const bviCharterGebuehrenReformFairWaters2026: NewsItem = {
  content,
  slug: "bvi-charter-gebuehren-reform-fair-waters-2026",
  title: "BVI 2026: Diskussion um Charter-Gebühren kann Angebot und Preise beeinflussen",
  excerpt:
    "In den British Virgin Islands wird weiter über hohe Gebühren für auswärtige Charteryachten diskutiert. Für Charterkunden kann das mittelfristig Auswirkungen auf Angebot, Preise und die Wahl der Charterbasis haben.",
  content_type: "basis_hinweis",
  region: "Karibik / British Virgin Islands",
  country_or_area: "British Virgin Islands",
  status: "unklar",
  effective_from: "2025-06-01",
  published_at: "2026-04-29",
  updated_at: "2026-04-29",
  priority: "mittel",
  category: "Gebühren & Permit-Kosten",
  source_name:
    "newsfeed.wtjx.org; auch berichtet von VI Consortium, BVI News und St. Thomas Source",
  source_url: "",
  customer_impact:
    "Laufende Reform-Diskussion zu BVI-Chartergebühren kann Angebot, Flottenstruktur und Preise beeinflussen. Routen zwischen USVI und BVI, Permits und Fahrgebiete vor der Buchung prüfen.",
  action_advice:
    "Bei BVI-/Karibik-Buchungen Startbasis, erlaubte Fahrgebiete und enthaltene Gebühren klären. Vercharterer nach aktuellen BVI-Hinweisen fragen.",
  show_on_blog: false,
  show_on_region_page: true,
  linked_region_slug: "bvi",
  canonical_topic_key: "bvi_charter_gebuehren_reform_2026",
  cta_text:
    "Wenn Sie einen BVI- oder Karibik-Törn planen, helfen wir gerne dabei, Angebote, Startbasen und mögliche Zusatzkosten transparent einzuordnen.",
  image: "/images/blog/BVI/BVI.jpg",
  imageAlt:
    "Ankernde Yachten vor Felsen und türkisfarbenem Wasser in den British Virgin Islands",
  imageCaption:
    "Die British Virgin Islands zählen zu den beliebtesten Charterrevieren der Karibik – Gebühren und Fahrgebiete sollten bei der Buchung genau geprüft werden.",
};
