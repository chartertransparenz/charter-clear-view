import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Der offizielle Buchungsstart für die Posidonia-Bojenfelder der PortsIB auf den{" "}
      <a href="/reviere/mittelmeer/spanien/balearen">Balearen</a> wurde auf den{" "}
      <strong>11. Juni 2026, 10:00 Uhr</strong>, terminiert. Buchungen sind ab diesem
      Zeitpunkt über die Plattform{" "}
      <a href="https://reservas.portsib.es" rel="nofollow noopener noreferrer" target="_blank">
        reservas.portsib.es
      </a>{" "}
      möglich.
    </p>

    <h2>Warum sind Posidonia-Bojenfelder für Charterkunden relevant?</h2>
    <p>
      Das Ankern auf Posidonia-Seegraswiesen ist auf den Balearen strikt verboten –
      konsequent und mit spürbaren Konsequenzen bei Verstößen. Posidonia oceanica ist ein
      gesetzlich geschütztes Ökosystem und erholt sich nur sehr langsam von Ankerschäden.
      In den wichtigsten Buchten von{" "}
      <a href="/reviere/mittelmeer/spanien/balearen/mallorca">Mallorca</a>,{" "}
      <a href="/reviere/mittelmeer/spanien/balearen/ibiza">Ibiza</a> und{" "}
      <a href="/reviere/mittelmeer/spanien/balearen/menorca">Menorca</a> decken
      Posidonia-Wiesen große Teile des Meeresbodens ab – wer ankern möchte, ist auf
      Sandlücken oder ausgewiesene Bojenfelder angewiesen.
    </p>
    <p>
      Die PortsIB-Bojenfelder bieten die offizielle Lösung: Sie ermöglichen das legale
      Festmachen über Posidonia-Gebieten, ohne die Seegraswiesen zu beschädigen. Für
      Charterkunden bedeutet das: Wer bestimmte Buchten ansteuern möchte, sollte die
      Bojenplatzverfügbarkeit frühzeitig prüfen – gerade in der Hochsaison sind die Felder
      oft schnell belegt.
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
        Sie planen Ihren Balearen-Törn 2026?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Buchten und Bojenfelder passend zu Ihrer Crew zu planen –
        persönlich, unabhängig und mit über 30 Jahren Charter-Erfahrung.
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
        Balearen-Törn anfragen
      </a>
    </div>

    <h2>Was bedeutet das für die Törnplanung?</h2>
    <ul>
      <li>
        <strong>Buchungsstart: 11. Juni 2026, 10:00 Uhr.</strong> Buchungen über{" "}
        <a href="https://reservas.portsib.es" rel="nofollow noopener noreferrer" target="_blank">
          reservas.portsib.es
        </a>{" "}
        vornehmen. Ein Konto bei PortsIB ist vorab empfehlenswert, um am Buchungsstart
        direkt handlungsfähig zu sein.
      </li>
      <li>
        <strong>Frühzeitig buchen:</strong> In der Hauptsaison Juli und August sind
        beliebte Bojenfelder erfahrungsgemäß schnell ausgebucht. Wer bestimmte Buchten
        fest einplant, sollte kurz nach Freigabe buchen.
      </li>
      <li>
        <strong>Ankern nur auf Sand oder Fels:</strong> Außerhalb der Bojenfelder ist
        Ankern ausschließlich auf Sand- oder Felsgrund erlaubt – nie über Posidonia.
        Wie Sie das zuverlässig erkennen und worauf Sie beim Ankern achten sollten, erklärt
        unser Artikel{" "}
        <a href="/blog/richtig-ankern-yachtcharter">Richtig ankern beim Yachtcharter</a>.
      </li>
      <li>
        <strong>Aktuelle Preise direkt bei PortsIB prüfen:</strong> Offizielle
        Bojengebühren für die Saison 2026 bitte direkt auf{" "}
        <a href="https://reservas.portsib.es" rel="nofollow noopener noreferrer" target="_blank">
          reservas.portsib.es
        </a>{" "}
        einsehen – Änderungen vorbehalten.
      </li>
      <li>
        <strong>Charterbasis informieren:</strong> Gute Charterbasen auf den Balearen
        kennen die aktuellen Bojenfelder und können bei der Planung helfen.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        PortsIB öffnet am 11. Juni 2026 um 10:00 Uhr die Buchung für Posidonia-Bojenfelder
        auf den Balearen – über reservas.portsib.es. Ankern auf Posidonia ist strikt
        verboten; Bojenfelder sind die legale Alternative in geschützten Buchten.
        Frühzeitig buchen lohnt sich, da beliebte Felder in der Hochsaison schnell
        ausgebucht sind.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quelle: PortsIB (reservas.portsib.es). Redaktionsstand: 29. Mai 2026. Alle Angaben
      ohne Gewähr – Buchungsbedingungen, Verfügbarkeit und aktuelle Gebühren direkt bei
      PortsIB prüfen.
    </p>
  </div>
);

export const balearenPosidoniaBojenfelderBuchungsstart2026: NewsItem = {
  content,
  slug: "balearen-posidonia-bojenfelder-buchungsstart-2026",
  title: "Balearen: Buchungsstart für Posidonia-Bojenfelder auf 11. Juni terminiert",
  excerpt:
    "PortsIB öffnet am 11. Juni 2026 um 10:00 Uhr die Buchung für Posidonia-Bojenfelder auf den Balearen – über reservas.portsib.es. Ankern auf Posidonia ist verboten; wer Buchten auf Mallorca, Ibiza oder Menorca fest einplant, sollte frühzeitig buchen.",
  content_type: "kurzmeldung",
  region: "Balearen",
  country_or_area: "Spanien",
  status: "angekuendigt",
  effective_from: "2026-06-11",
  published_at: "2026-05-29",
  updated_at: "2026-05-29",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name: "PortsIB",
  source_url: "https://reservas.portsib.es",
  customer_impact:
    "Buchungsstart für PortsIB Posidonia-Bojenfelder am 11. Juni 2026 um 10:00 Uhr auf reservas.portsib.es. Ankern auf Posidonia verboten. In der Hochsaison sind beliebte Felder schnell belegt – frühzeitig buchen empfohlen.",
  action_advice:
    "Konto bei PortsIB (reservas.portsib.es) einrichten. Am 11. Juni ab 10:00 Uhr buchen. Aktuelle Preise direkt bei PortsIB prüfen. Charterbasis nach aktuellen Bojenfeldern fragen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "spanien",
  canonical_topic_key: "balearen_posidonia_bojenfelder_portsib_2026",
  region_links: [
    { label: "Balearen", href: "/reviere/mittelmeer/spanien/balearen" },
    { label: "Mallorca", href: "/reviere/mittelmeer/spanien/balearen/mallorca" },
    { label: "Ibiza", href: "/reviere/mittelmeer/spanien/balearen/ibiza" },
    { label: "Menorca", href: "/reviere/mittelmeer/spanien/balearen/menorca" },
  ],
  seo_title: "Balearen Posidonia-Bojenfelder 2026: Buchungsstart 11. Juni – PortsIB",
  meta_description:
    "PortsIB öffnet am 11. Juni 2026 die Buchung für Posidonia-Bojenfelder auf den Balearen. Ankern auf Posidonia ist verboten – Bojenfelder sind die legale Alternative.",
  is_featured: false,
  cta_text:
    "Sie planen einen Balearen-Törn 2026? Wir helfen Ihnen, Revier, Buchten und Bojenfelder passend zu Ihrer Crew zu planen.",
};
