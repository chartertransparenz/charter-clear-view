import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ändert sich ab Oktober 2026?</h2>
    <p>
      Wer in Spanien – einschließlich der Balearen – ein kleines Motorboot mietet, braucht dafür
      ab dem 1. Oktober 2026 einen gültigen Bootsführerschein. Das spanische Real Decreto 1188/2025
      vom 26. Dezember 2025 schränkt eine bislang bestehende Ausnahme für Motorboote bis 5 Metern
      Länge und 15 PS ein: Diese Ausnahme gilt künftig nur noch für die private Eigennutzung –
      nicht mehr für die kommerzielle Vermietung.
    </p>
    <p>
      Was bisher ohne Lizenz möglich war – das Ausleihen eines kleinen Motorboots oder RIBs
      an Strand- und Bootsverleihstationen – ist ab Oktober 2026 in Spanien nur noch mit
      entsprechendem Führerschein erlaubt.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Überblick – Real Decreto 1188/2025
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm list-none p-0 m-0">
        <li>• Gilt für ganz Spanien, einschließlich Balearen (Mallorca, Ibiza, Menorca, Formentera)</li>
        <li>• In Kraft ab: 1. Oktober 2026</li>
        <li>• Betrifft: kommerzielle Vermietung von Motorbooten bis 5 m / 15 PS</li>
        <li>• Erforderlich: spanische Licencia de Navegación (Titulín) oder gleichwertiger EU-Führerschein</li>
        <li>• Privater Eigengebrauch mit eigenem Boot bleibt davon unberührt</li>
        <li>• Charteryachten (Bareboat, Skippered) waren und bleiben führerscheinpflichtig</li>
      </ul>
    </div>

    <h2>Was genau betrifft diese Regel – und was nicht?</h2>
    <p>
      Die neue Regel richtet sich an den kommerziellen Mietbootmarkt: kleine Motorboote und
      aufblasbare Boote (RIBs, Schlauchboote mit Motor), die an Stränden, Buchten oder Häfen
      stundenweise oder tageweise vermietet werden. Urlauber, die bisher kein Boot führen
      durften, konnten solche Boote ohne Führerschein mieten – das entfällt ab Oktober 2026.
    </p>
    <p>
      Für typische Charteryachten – Bareboat-Charter ab ca. 7 Metern, Skippered Charter oder
      Crewed Charter – ändert sich nichts. Diese Boote erforderten schon immer eine entsprechende
      Berechtigung. Der Unterschied betrifft ausschließlich die bisher führerscheinfreie
      Tagesmiete sehr kleiner Motorboote.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für Chartercrews, die eine klassische Segelyacht oder einen Katamaran auf den Balearen
      oder an der spanischen Küste chartern, ändert sich durch das neue Dekret unmittelbar
      nichts.
    </p>
    <p>
      Relevant wird die Regel, wenn Crews oder einzelne Crewmitglieder während des Törns ein
      kleines Mietboot nutzen möchten – etwa:
    </p>
    <ul>
      <li>
        Ein kleines Motorboot oder Schlauchboot als Tagesausflug, zum Beispiel für einen
        Transfer zu einer abgelegenen Cala oder für Schnorcheltouren
      </li>
      <li>
        Ein RIB oder kleines Motorboot zum stundenweisen Mieten am Strand oder an einer Marina
      </li>
    </ul>
    <p>
      Wer für solche Zusatz-Aktivitäten keinen Bootsführerschein hat, sollte das vor dem
      Törn prüfen. Verleihstationen werden ab Oktober 2026 verpflichtet sein, den Nachweis
      zu verlangen.
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
        Sie planen einen Törn auf den Balearen oder an der spanischen Küste?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, die richtige Yacht, das passende Revier und alle relevanten
        Formalitäten realistisch einzuordnen – persönlich und unabhängig.
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
        Spanien-Törn anfragen
      </a>
    </div>

    <h2>Hintergrund zur Regeländerung</h2>
    <p>
      Das Dekret wurde bereits im Dezember 2025 verabschiedet. Anlass für die aktuell erhöhte
      öffentliche Aufmerksamkeit ist ein schwerer Bootsunfall am 18. August 2026 bei s'Estanyol
      auf Mallorca. Das beteiligte Boot war ein Mietboot, für das bisher kein Führerschein
      erforderlich war. Der Unfall verdeutlicht, warum die Regelung eingeführt wurde –
      inhaltlich ändert er an den Vorgaben des Dekrets nichts.
    </p>

    <h2>Welcher Führerschein ist erforderlich?</h2>
    <p>
      Die spanische Licencia de Navegación (Titulín) ist der in Spanien anerkannte Führerschein
      für Kleinmotorboote. Ob und in welchem Umfang vergleichbare EU-Bootsführerscheine aus
      anderen Mitgliedsländern anerkannt werden, sollte direkt bei der jeweiligen Verleihstation
      erfragt werden. Generell empfiehlt sich bei einem Bootstrip in Spanien das Mitführen
      aller relevanten Dokumente.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Ab 1. Oktober 2026 ist in Spanien (inkl. Balearen) für die Miete kleiner Motorboote
        bis 5 m / 15 PS ein Führerschein erforderlich. Die bisherige führerscheinfreie
        Vermietung entfällt. Für klassische Charteryachten ändert sich nichts. Relevant ist
        die Regel für Crewmitglieder, die während des Törns ein kleines Mietboot nutzen möchten.
      </p>
    </div>

    <h2>Quellen und Stand</h2>
    <p>
      Quellen: Boletín Oficial del Estado (BOE) – Real Decreto 1188/2025, 26. Dezember 2025;
      Sea-Help; Mallorca Magazin; Forbes España. Redaktionsstand: 28. August 2026. Angaben ohne
      Gewähr – bitte aktuelle Informationen beim zuständigen Bootsverleih vor Ort prüfen.
    </p>
  </div>
);

export const spanienFuehrerscheinpflichtMietboote2026: NewsItem = {
  content,
  slug: "spanien-fuehrerscheinpflicht-mietboote-2026",
  title: "Spanien und Balearen: Ab 1. Oktober 2026 Führerscheinpflicht für Mietboote – auch kleine Motorboote betroffen",
  excerpt:
    "Ab 1. Oktober 2026 gilt in Spanien – einschließlich Mallorca, Ibiza, Menorca – bei der Miete kleiner Motorboote (bis 5 m / 15 PS) eine Führerscheinpflicht. Das Real Decreto 1188/2025 schließt die bisherige Ausnahme für kommerzielle Vermietung. Für klassische Charteryachten ändert sich nichts.",
  content_type: "basis_hinweis",
  region: "Spanien / Balearen",
  country_or_area: "Spanien",
  status: "angekuendigt",
  effective_from: "2026-10-01",
  published_at: "2026-08-28",
  updated_at: "2026-08-28",
  priority: "mittel",
  category: "Vorschriften & Formalitäten",
  source_name: "BOE / Real Decreto 1188/2025 / Sea-Help",
  source_url: "https://www.boe.es/buscar/doc.php?id=BOE-A-2025-27756",
  customer_impact:
    "Ab 1. Oktober 2026 ist in Spanien und auf den Balearen für die Miete kleiner Motorboote bis 5 m / 15 PS ein Führerschein erforderlich. Crewmitglieder ohne Führerschein können keine kleinen Mietboote mehr ausleihen. Für klassische Bareboat-/Skippered-Charter ändert sich nichts.",
  action_advice:
    "Wer während eines Spanien- oder Balearen-Törns ein kleines Mietboot nutzen möchte, prüft vorab, ob ein gültiger Bootsführerschein vorhanden ist. Bei der Verleihstation nachfragen, welche Dokumente akzeptiert werden.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "balearen",
  canonical_topic_key: "spanien_fuehrerscheinpflicht_mietboote_2026",
  region_links: [
    { label: "Spanien / Balearen", href: "/reviere/mittelmeer/spanien/balearen" },
    { label: "Mallorca", href: "/reviere/mittelmeer/spanien/mallorca" },
  ],
  seo_title: "Spanien 2026: Führerscheinpflicht für Mietboote ab Oktober – Balearen betroffen",
  meta_description:
    "Ab Oktober 2026 braucht man in Spanien und auf den Balearen einen Führerschein für kleine Mietboote. Was Charterkunden wissen müssen – Real Decreto 1188/2025.",
  is_featured: false,
  cta_text:
    "Wir helfen Ihnen, Spanien- und Balearen-Törns mit allen relevanten Formalitäten realistisch zu planen.",
  image: "/images/news/spanien-fuehrerscheinpflicht-mietboot-lizenz.jpg",
  imageAlt: "Urlauber zeigt Bootsführerschein beim Mietboot-Verleih auf Mallorca",
  imageCaption: "Symbolbild, KI-generiert. Ab Oktober 2026 ist in Spanien ein Führerschein für die Miete kleiner Motorboote erforderlich.",
};
