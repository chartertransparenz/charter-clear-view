import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was gilt – und was nicht betroffen ist</h2>
    <p>
      Die Navagio-Bucht (Schiffbruchbucht) auf Zakynthos ist bis mindestens
      31. Oktober 2026 für Yachten nicht anlaufbar. Rechtsgrundlage ist die
      Gemeinsame Ministerialentscheidung, veröffentlicht im Griechischen
      Staatsanzeiger unter FEK B 3033 am 28. Mai 2026. Motiv sind
      anhaltende geotechnische Risiken: Die Kalksteinklippen oberhalb des
      Strandes haben in den vergangenen Jahren mehrfach Felsstürze verursacht.
    </p>
    <p>
      Die Maßnahme betrifft ausschließlich die Navagio-Bucht selbst. Alle
      anderen Ankerplätze und Buchten rund um Zakynthos sind uneingeschränkt
      zugänglich. Yachtcharter auf den Ionischen Inseln ist davon nicht berührt.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Navagio Beach: kein Ankern, kein Landgang, Mindestabstand 50 Meter vom
        Ufer – bis 31. Oktober 2026. Zakynthos-Hafen und alle anderen Buchten
        der Insel sind weiterhin normal zugänglich.
      </p>
    </div>

    <h2>Was konkret gilt</h2>
    <p>
      Yachten dürfen sich der Navagio-Bucht nicht auf weniger als 50 Meter
      nähern. Ankern in der Bucht ist untersagt, ebenso das Anlanden oder
      Schwimmen im Bereich des Strandes. Ausflugsboote, die Rundfahrten zur
      Bucht anbieten, sind weiterhin aktiv, müssen aber denselben Mindestabstand
      einhalten.
    </p>
    <p>
      Hafen- und Küstenwachbehörden kontrollieren die Einhaltung. Bei Verstößen
      drohen Bußgelder.
    </p>

    <h2>Besichtigung bleibt möglich – vom Aussichtspunkt</h2>
    <p>
      Die Navagio-Bucht lässt sich vom Aussichtspunkt oberhalb der Klippen
      besichtigen, der per Mietwagen erreichbar ist. Von dort bieten sich
      spektakuläre Blicke auf das Schiffswrack und das türkisblaue Wasser –
      für viele Besucher inzwischen das eigentliche Erlebnis, das sogar
      eindrucksvoller sein kann als die Einfahrt in die Bucht.
    </p>

    <h2>Was vor dem Törn prüfen</h2>
    <ul>
      <li>
        Navagio-Bucht nicht als Ankerplatz oder Zwischenstopp einplanen – die
        Sperrung gilt mindestens bis Ende Oktober 2026.
      </li>
      <li>
        Alternative Buchten rund um Zakynthos sind zugänglich, zum Beispiel
        Porto Vromi, Agios Nikolaos oder die Buchten der Nordwestküste.
      </li>
      <li>
        Besichtigung vom Aussichtspunkt einplanen: sinnvoll als Landausflug bei
        einem längeren Aufenthalt auf Zakynthos.
      </li>
      <li>
        Charterbasis vor Abfahrt nach aktuellen Hinweisen zu Zakynthos fragen.
      </li>
    </ul>

    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "2rem 0",
      }}
    >
      <p
        style={{
          color: "#ffffff",
          fontWeight: 700,
          marginBottom: "8px",
          fontSize: "1rem",
        }}
      >
        Ionische Inseln in Ihre Törnplanung einbauen?
      </p>
      <p
        style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}
      >
        Die Ionischen Inseln gehören zu den beliebtesten Charterrevieren im
        Mittelmeer – sanfte Winde, geschützte Buchten, kurze Schläge. Wir
        helfen Ihnen, eine sinnvolle Route für Ihre Crew zusammenzustellen.
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
        Ionische Inseln Charter anfragen
      </a>
    </div>
  </div>
);

export const zakynthosNavagioBeachSperrung2026: NewsItem = {
  content,
  slug: "zakynthos-navagio-beach-sperrung-2026",
  title: "Zakynthos: Navagio Beach 2026 bis Ende Oktober für Yachten gesperrt",
  excerpt:
    "Die Navagio-Bucht (Schiffbruchbucht) auf Zakynthos ist bis 31. Oktober 2026 nicht anlaufbar: 50 Meter Mindestabstand, kein Ankern, kein Landgang. Rechtsgrundlage ist FEK B 3033/28.05.2026. Alle übrigen Buchten und Häfen auf Zakynthos sowie den anderen Ionischen Inseln sind weiterhin zugänglich.",
  content_type: "basis_hinweis",
  region: "Griechenland / Ionische Inseln / Zakynthos",
  country_or_area: "Griechenland",
  status: "in_kraft",
  effective_from: "2026-05-28",
  published_at: "2026-07-17",
  updated_at: "2026-07-17",
  priority: "hoch",
  category: "Revier & Sicherheit",
  source_name: "FEK B 3033/28.05.2026; The Traveler; Greek Island Info",
  source_url:
    "https://www.thetraveler.org/zakynthos-navagio-beach-closed-to-visitors-until-october-2026/",
  customer_impact:
    "Navagio-Bucht für Yachten nicht anlaufbar – kein Ankern, kein Landgang, 50 m Mindestabstand bis 31.10.2026. Übrige Zakynthos-Buchten und Ionische Inseln uneingeschränkt zugänglich.",
  action_advice:
    "Navagio aus Ankerliste streichen. Alternativbuchten auf Zakynthos prüfen. Besichtigung vom Aussichtspunkt bleibt möglich.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "ionisches-meer",
  canonical_topic_key: "zakynthos_navagio_beach_sperrung_2026",
  seo_title:
    "Navagio Beach Zakynthos 2026: Kein Ankern – Was Charterkunden wissen müssen",
  meta_description:
    "Navagio Beach auf Zakynthos ist bis 31. Oktober 2026 für Yachten gesperrt. Kein Ankern, kein Landgang, 50 Meter Mindestabstand (FEK B 3033/2026). Alle Infos für Charterkunden.",
  is_featured: false,
  image: "/images/news/zakynthos-navagio-beach-sperrung-2026.jpg",
  imageAlt:
    "Blick von oben auf die Schiffbruchbucht Navagio auf Zakynthos – türkisblaues Wasser, das gestrandete Schiffswrack und die markanten weißen Kalksteinklippen",
  imageCaption:
    "Navagio Beach (Schiffbruchbucht), Zakynthos – bis 31. Oktober 2026 für Yachten nicht anlaufbar. Symbolbild, KI-generiert.",
  region_links: [
    {
      label: "Yachtcharter Ionische Inseln",
      href: "/reviere/mittelmeer/griechenland/ionisches-meer",
    },
    {
      label: "Yachtcharter Griechenland",
      href: "/reviere/mittelmeer/griechenland",
    },
  ],
};
