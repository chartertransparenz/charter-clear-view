import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Die Pelješac-Brücke verbindet seit ihrer Eröffnung 2022 das kroatische
      Festland mit der Halbinsel Pelješac und umgeht damit den bosnischen
      Grenzkorridor bei Neum. Für Charterkunden, die mit dem PKW nach{" "}
      <a href="/reviere/mittelmeer/kroatien">Kroatien</a>, Dubrovnik oder
      Süddalmatien anreisen, ist sie eine wichtige Verbindung Richtung Süden.
      Nach vorliegenden Berichten sollen ab Oktober 2026 Sanierungsarbeiten an
      der Brücke beginnen.
    </p>

    <h2>Was ist geplant?</h2>
    <p>
      An mehreren Pfeilern der Brücke wurden Oberflächenrisse festgestellt.
      Nach Angaben der kroatischen Straßenverwaltung <em>Hrvatske ceste</em>{" "}
      sind solche Risse bei Bauwerken dieser Art nicht ungewöhnlich und
      gefährden die Statik nicht. Um das Eindringen von Feuchtigkeit und Salz
      in die Konstruktion zu verhindern, sollen die betroffenen Stellen
      dennoch saniert werden.
    </p>
    <p>
      Nach aktueller Quellenlage ist der Sanierungszeitraum ab Oktober 2026
      bis voraussichtlich Mai 2027 geplant – bewusst außerhalb der
      Hauptreisesaison. Eine vollständige Sperrung der Brücke ist nach den
      vorliegenden Informationen nicht vorgesehen: Der Verkehr soll während
      der Bauarbeiten weiterlaufen, zeitweise ist jedoch mit
      Einspurverkehr, Tempolimits und möglicher Staubildung im
      Baustellenbereich zu rechnen.
    </p>

    <h2>Sommer 2026: keine Auswirkung</h2>
    <p>
      Für Sommercrews 2026 ändert sich nichts. Juli, August und September
      liegen vor dem geplanten Sanierungsbeginn und sind von den
      Arbeiten nicht betroffen.
    </p>

    <h2>Herbst 2026: mehr Zeit für die PKW-Anreise einplanen</h2>
    <p>
      Wer im Oktober oder November 2026 mit dem Auto nach Dubrovnik,
      Pelješac, Korčula oder Süddalmatien reist, sollte die Sanierung bei der
      Zeitplanung berücksichtigen. Charterübernahmen bleiben möglich – ein
      zusätzlicher Zeitpuffer ist aber sinnvoll, falls es im Baustellenbereich
      zu Einspurverkehr oder Stau kommt.
    </p>
    <ul>
      <li>
        Bei knapper Übergabezeit: früher losfahren oder eine
        Zwischenübernachtung auf der Anreise einplanen.
      </li>
      <li>
        Alternativ die Anreise per Flug nach Dubrovnik oder mit
        organisiertem Transfer prüfen.
      </li>
      <li>
        Der Grenzkorridor bei Neum (Bosnien-Herzegowina) ist theoretisch
        eine Ausweichroute, allerdings mit möglichen Grenzkontrollen und
        eigenen Wartezeiten – für die meisten Crews dürfte etwas mehr
        Zeitpuffer über die Pelješac-Brücke die einfachere Lösung sein.
      </li>
      <li>
        Vor der Anreise aktuelle Hinweise der Charterbasis oder lokaler
        Verkehrsmeldungen prüfen, da sich die konkrete Baustellenlage
        kurzfristig ändern kann.
      </li>
    </ul>

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
        Herbst-Törn 2026 in Süddalmatien geplant?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Anreise, Übernahmetermin und Revier realistisch
        einzuschätzen – auch mit Blick auf die Bauarbeiten an der
        Pelješac-Brücke.
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
        Törnplanung persönlich anfragen
      </a>
    </div>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die Pelješac-Brücke soll nach aktueller Quellenlage ab Oktober 2026
        bis voraussichtlich Mai 2027 saniert werden. Für Sommercrews 2026
        ändert sich nichts. Für Herbst-Charter nach Dubrovnik, Pelješac oder
        Süddalmatien mit PKW-Anreise sollte etwas mehr Zeitpuffer eingeplant
        werden – eine vollständige Sperrung ist nach den vorliegenden
        Informationen nicht vorgesehen.
      </p>
    </div>

    <h2>Quellen und Stand</h2>
    <p>
      Quellen: <em>Hrvatske ceste</em> (kroatische Straßenverwaltung,
      zitiert bei Kroatien-Nachrichten);{" "}
      <a href="https://www.adac.de/news/reise-autobahnbruecke-kroatien-sanierung/" rel="nofollow noopener noreferrer" target="_blank">
        ADAC
      </a>
      ;{" "}
      <a href="https://kroatien-nachrichten.de/wer-traegt-die-kosten-was-geschieht-mit-der-peljesac-bruecke/" rel="nofollow noopener noreferrer" target="_blank">
        Kroatien-Nachrichten
      </a>
      . Redaktionsstand: 10. Juli 2026. Alle Angaben ohne Gewähr – eine
      offizielle kroatische Primärquelle mit exaktem Bauzeitplan war zum
      Redaktionsstand nicht abschließend auffindbar. Bitte vor der Anreise
      aktuelle Hinweise der Charterbasis und lokaler Verkehrsmeldungen prüfen.
    </p>
  </div>
);

export const kroatienPeljesacBrueckeSanierungDubrovnik2026: NewsItem = {
  content,
  slug: "kroatien-peljesac-bruecke-sanierung-dubrovnik-2026",
  title:
    "Pelješac-Brücke: Sanierung ab Oktober 2026 – was Herbst-Charterkunden wissen sollten",
  excerpt:
    "Die Pelješac-Brücke bei Dubrovnik soll ab Oktober 2026 bis voraussichtlich Mai 2027 saniert werden. Für Sommer 2026 ändert sich nichts, für die PKW-Anreise im Herbst sollten Crews etwas mehr Zeitpuffer einplanen.",
  content_type: "basis_hinweis",
  region: "Kroatien / Süddalmatien / Dubrovnik / Pelješac",
  country_or_area: "Kroatien",
  status: "angekuendigt",
  effective_from: "2026-10-01",
  published_at: "2026-07-10",
  updated_at: "2026-07-10",
  priority: "mittel",
  category: "Anreise & Logistik",
  source_name: "Hrvatske ceste; ADAC; Kroatien-Nachrichten",
  source_url: "https://www.adac.de/news/reise-autobahnbruecke-kroatien-sanierung/",
  customer_impact:
    "Ab Oktober 2026 sind an der Pelješac-Brücke Sanierungsarbeiten geplant, voraussichtlich bis Mai 2027. Die Brücke bleibt offen, zeitweise kann es aber zu Einspurverkehr, Tempolimits und Staugefahr kommen. Sommer 2026 ist nicht betroffen.",
  action_advice:
    "Für Herbst-Törns 2026 mit PKW-Anreise nach Dubrovnik, Pelješac oder Süddalmatien mehr Zeitpuffer einplanen. Bei knapper Übergabezeit früher losfahren, Zwischenübernachtung oder Flug/Transfer prüfen. Vor Anreise aktuelle Hinweise der Charterbasis einholen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_peljesac_bruecke_sanierung_2026",
  seo_title: "Pelješac-Brücke Sanierung 2026: Anreise Dubrovnik & Süddalmatien",
  meta_description:
    "Pelješac-Brücke: Sanierung ab Oktober 2026 bis Mai 2027 geplant. Was Charterkunden mit PKW-Anreise nach Dubrovnik, Pelješac und Süddalmatien im Herbst wissen sollten.",
  cta_text:
    "Wir helfen Ihnen, Anreise und Übernahmetermin für Ihren Herbst-Törn in Süddalmatien realistisch zu planen.",
  image: "/images/news/kroatien-peljesac-bruecke-sanierung-dubrovnik-2026.jpg",
  imageAlt: "Pelješac-Brücke in Süddalmatien",
  imageCaption:
    "Die Pelješac-Brücke bleibt eine wichtige Verbindung Richtung Dubrovnik. Für Herbst 2026 sollten Crews mögliche Verkehrsbehinderungen durch Sanierungsarbeiten einplanen.",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
    { label: "Süddalmatien / Dubrovnik", href: "/reviere/mittelmeer/kroatien/dubrovnik" },
  ],
};
