import type { NewsItem } from "../types";

const content = (
  <div>
    {/* Update-Hinweis */}
    <div
      className="not-prose"
      style={{
        background: "#f0f7ff",
        border: "1px solid #b8d4f0",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "#1a4a7a", fontSize: "0.85rem", margin: 0 }}>
        <strong>Update: 15. Mai 2026.</strong> EU-Kommission Guidance vom 8. Mai 2026
        eingearbeitet: keine nachträglichen Treibstoffzuschläge auf bereits gekaufte
        Tickets. SunExpress-Zuschlag ergänzt.
      </p>
    </div>

    <h2>Einordnung</h2>
    <p>
      Seit Ende Februar 2026 sind die Kerosinpreise in Europa deutlich gestiegen.
      Mehrere Fluggesellschaften reagieren mit Kürzungen im Flugplan. Die Lufthansa
      Group hat angekündigt, rund 20.000 Kurzstreckenflüge bis Oktober aus dem
      Programm zu nehmen – mit dem erklärten Ziel, rund 40.000 Tonnen Treibstoff
      einzusparen.
    </p>
    <p>
      Für Yachtcharterkunden ist das vor allem bei der Anreise relevant. Der Weg
      an Bord könnte teurer, länger und unsicherer werden als ursprünglich geplant
      – besonders, wenn Flüge zu beliebten Charterbasen erst spät gebucht werden.
    </p>

    <h2>Was bedeutet das konkret für den Törn?</h2>
    <p>
      Wer seinen Flug noch nicht gebucht hat, sollte die Anreise jetzt aktiv prüfen
      und dabei Flexibilität einplanen. Buchbare Verbindungen können knapper werden,
      Preise können steigen, und einzelne Routen oder Umsteigeverbindungen können
      sich kurzfristig ändern.
    </p>
    <p>
      Betroffen sein können vor allem Verbindungen zu beliebten Charterregionen:
    </p>
    <ul>
      <li>
        <a href="/reviere/mittelmeer/kroatien">Kroatien</a> – Split, Zadar, Dubrovnik und
        Rijeka sind für viele Crews die wichtigsten Zielflughäfen.
      </li>
      <li>
        <a href="/reviere/mittelmeer/griechenland">Griechenland</a> – Athen, Korfu,
        Rhodos, Kos: Je nach Inselgruppe und Revier können sich Verbindungen und
        Preise unterschiedlich entwickeln.
      </li>
      <li>
        <a href="/reviere/mittelmeer/tuerkei">Türkei</a> – Dalaman und Bodrum sind die
        wichtigsten Anreiseflughäfen für das Revier rund um Göcek und Marmaris.
      </li>
      <li>
        <a href="/reviere/mittelmeer/spanien/balearen">Balearen</a> – Palma, Ibiza und
        Mahon sind gut angebunden, je nach Verbindung und Abflughafen kann die Situation
        aber variieren.
      </li>
    </ul>
    <p>
      Je nach Startflughafen kann es sinnvoll sein, alternative Flughäfen, andere
      Reisetage oder andere Airlines zu prüfen. Auch wer bereits gebucht hat, sollte
      die Lage im Auge behalten. Flugpläne können sich ändern, und kurzfristige
      Streichungen sind nicht ausgeschlossen.
    </p>

    {/* ── Mid-article CTA ──────────────────────────────────────────────────── */}
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "2rem 0",
      }}
    >
      <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontSize: "1rem" }}>
        Sie planen einen Törn und möchten Anreise und Revier realistisch zusammen denken?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir unterstützen Sie bei Yacht, Zielgebiet und sinnvoller Törnplanung – persönlich
        und mit langjähriger Charter-Erfahrung.
      </p>
      <a
        href="/charter-anfrage"
        style={{
          display: "inline-block",
          background: "#e8a020",
          color: "#ffffff",
          fontWeight: 600,
          borderRadius: "8px",
          padding: "10px 22px",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        Törn persönlich planen lassen
      </a>
    </div>

    <h2>Gut zu wissen: Rechte bei Flugstreichungen und Zuschlägen</h2>
    <p>
      Unter EU-Recht haben Passagiere bei Flugstreichungen grundsätzlich Anspruch
      auf Erstattung oder anderweitige Beförderung. Je nach Zeitpunkt der Streichung,
      Wartezeit und Ursache können zusätzlich Ausgleichszahlungen nach EU-Verordnung
      261/2004 in Betracht kommen.
    </p>
    <p>
      Die EU-Kommission hat am 8. Mai 2026 klargestellt: Airlines dürfen auf bereits
      gekaufte Tickets keine nachträglichen Treibstoffzuschläge aufschlagen. Hohe
      Kerosinpreise allein rechtfertigen nicht automatisch den Wegfall von Fluggastrechten.
      Passagiere behalten bei Streichungen grundsätzlich Ansprüche auf Erstattung oder
      anderweitige Beförderung; ob weitere Ausgleichsansprüche bestehen, hängt vom
      konkreten Einzelfall ab.
    </p>
    <p>
      Bei konkreten Streichungen sollten Reisende deshalb die Mitteilung der Airline
      genau prüfen und Ansprüche nicht vorschnell aufgeben.
    </p>

    <h2>Treibstoffzuschläge: Was Airlines dürfen und was nicht</h2>
    <p>
      Einige Airlines erheben auf neuen Buchungen Treibstoffzuschläge. Laut Reuters-Bericht
      erhebt SunExpress ab 1. Mai 2026 einen Treibstoffzuschlag von 10 Euro pro Passagier
      auf bestimmten Türkei-Europa-Verbindungen. Dieser Zuschlag betrifft neue Buchungen
      und ist nicht auf alle Airlines oder alle Routen übertragbar.
    </p>
    <p>
      Wer bereits ein Ticket für eine Türkei-Verbindung gekauft hat, sollte prüfen, ob
      eine Nachbelastung kommuniziert wurde – und gegebenenfalls der EU-Kommission-Guidance
      entsprechend widersprechen.
    </p>

    <h2>Praktischer Hinweis</h2>
    <ul>
      <li>
        Flüge möglichst früh buchen und Streichungsbenachrichtigungen aktivieren.
      </li>
      <li>
        Flexible Tarife in Betracht ziehen, besonders wenn der Chartertermin noch
        nicht feststeht.
      </li>
      <li>
        Ausreichend Zeitpuffer vor der Yachtübernahme einplanen – besonders bei
        Samstag-zu-Samstag-Charter.
      </li>
      <li>
        Verbindungen über alternative Hubs oder Nachbarflughäfen prüfen.
      </li>
      <li>
        Keine nachträglichen Treibstoffzuschläge auf bereits gekaufte Tickets
        einfach akzeptieren – EU-Recht schützt Passagiere hier.
      </li>
      <li>
        Bei Flugausfall: Umbuchung oder Erstattung verlangen und mögliche
        EU-261-Ansprüche prüfen.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die Treibstoffkrise kann Sommerflüge 2026 teurer und knapper machen. Früh
        buchen, flexibel bleiben und Alternativen prüfen – das gilt besonders für
        beliebte Charterziele wie Kroatien, Griechenland, Türkei und die Balearen.
        Keine nachträglichen Zuschläge auf gekaufte Tickets akzeptieren. Bei
        Streichungen: EU-Rechte kennen und nutzen.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: Lufthansa Group Newsroom (21. April 2026); Euronews Travel (Mai 2026);
      Al Jazeera (April / Mai 2026); EU-Kommission Guidance (8. Mai 2026); Reuters
      (SunExpress-Bericht, Mai 2026). Redaktionsstand: 15. Mai 2026. Alle Angaben ohne
      Gewähr – die Situation entwickelt sich. Bitte vor dem Törn aktuelle Verbindungen
      und Konditionen direkt bei der Airline prüfen.
    </p>
  </div>
);

export const treibstoffkriseSommerfluege2026Yachtcharter: NewsItem = {
  content,
  slug: "treibstoffkrise-sommerfluege-2026-yachtcharter",
  title:
    "Treibstoffkrise trifft Sommerflüge 2026: Was Charterkunden jetzt wissen müssen",
  excerpt:
    "Flüge zu beliebten Charterbasen könnten 2026 teurer, knapper und unsicherer werden. EU-Kommission: keine nachträglichen Treibstoffzuschläge auf bereits gekaufte Tickets. Wer seinen Törn plant, sollte Anreise und Alternativen früh prüfen.",
  content_type: "update",
  region: "Kroatien / Griechenland / Türkei / Balearen",
  country_or_area: "Mittelmeer / Europa",
  status: "angekuendigt",
  effective_from: "2026-05-01",
  published_at: "2026-05-08",
  updated_at: "2026-05-15",
  priority: "hoch",
  category: "Anreise & Logistik",
  source_name:
    "Lufthansa Group Newsroom; Euronews Travel; Al Jazeera; EU-Kommission; Reuters",
  source_url: "",
  customer_impact:
    "Flugverbindungen zu Charterdestinationen können 2026 knapper und teurer werden. Keine nachträglichen Treibstoffzuschläge auf bereits gekaufte Tickets. EU-Fahrgastrechte bei Streichungen weiterhin gültig.",
  action_advice:
    "Flüge frühzeitig buchen, flexible Tarife wählen, ausreichend Zeitpuffer einplanen. Verbindungen regelmäßig prüfen. Keine nachträglichen Zuschläge akzeptieren. Bei Streichung: Erstattung oder Umbuchung verlangen, EU-261-Ansprüche prüfen.",
  show_on_blog: true,
  show_on_region_page: false,
  linked_region_slug: "",
  canonical_topic_key: "treibstoffkrise_sommerfluege_2026_yachtcharter",
  region_links: [
    { label: "Kroatien",    href: "/reviere/mittelmeer/kroatien" },
    { label: "Griechenland", href: "/reviere/mittelmeer/griechenland" },
    { label: "Türkei",      href: "/reviere/mittelmeer/tuerkei" },
    { label: "Balearen",    href: "/reviere/mittelmeer/spanien/balearen" },
  ],
  seo_title: "Treibstoffkrise 2026: Flugausfälle vor dem Yachtcharter",
  meta_description:
    "Kerosinpreise und Flugstreichungen treffen den Sommer 2026. EU: keine nachträglichen Zuschläge auf gekaufte Tickets. Was Yachtcharter-Crews für Kroatien, Griechenland, Türkei und Balearen beachten sollten.",
  is_featured: true,
  cta_text:
    "Wenn Sie Ihren Yachtcharter 2026 noch planen, unterstützen wir Sie gerne bei Revier, Yacht und sinnvoller Anreiseplanung.",
};
