import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Die kroatische Regierung hat zum 28. Juli 2026 neue staatliche Kraftstoff-Höchstpreise
      festgelegt. Die Preise steigen spürbar gegenüber dem vorangegangenen Preisfenster.
      Gleichzeitig kursieren in sozialen Netzwerken Meldungen über ein 300-Liter-Mengenlimit
      an kroatischen Tankstellen – für Chartercrews mit Bootstankstellen ist dabei eine wichtige
      Einschränkung zu beachten.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Schneller Überblick
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm list-none p-0 m-0">
        <li>• Kroatien hat ab 28. Juli 2026 neue Kraftstoff-Höchstpreise festgelegt.</li>
        <li>• Diesel ist für Chartercrews der wichtigste Kostenpunkt.</li>
        <li>• Die Preise gelten zunächst für ca. 14 Tage, danach erfolgt eine Neufestsetzung.</li>
        <li>
          • Das 300-Liter-Limit an Straßentankstellen gilt nach vorliegenden Informationen nicht
          für Bootstankstellen.
        </li>
        <li>• Es gibt keinen bestätigten Versorgungsengpass.</li>
        <li>
          • Vor der Rückgabe immer aktuelle Tankstellenpreise und Vorgaben der Charterbasis prüfen.
        </li>
      </ul>
    </div>

    <h2>Welche Preise gelten ab 28. Juli 2026?</h2>
    <p>
      Die neuen staatlichen Höchstpreise liegen bei:
    </p>
    <ul>
      <li>
        <strong>Benzin:</strong> 1,62 EUR/l (vorher 1,54 EUR/l, Anstieg um 0,08 EUR/l)
      </li>
      <li>
        <strong>Diesel:</strong> 1,75 EUR/l (vorher 1,59 EUR/l, Anstieg um 0,16 EUR/l)
      </li>
      <li>
        <strong>Blauer Diesel:</strong> 1,21 EUR/l (vorher 1,02 EUR/l, Anstieg um 0,19 EUR/l)
      </li>
    </ul>
    <p>
      Die Preisfestsetzung gilt zunächst für ca. 14 Tage und wird danach von der kroatischen
      Regierung neu bewertet. Die konkreten Werte können sich beim nächsten Preisfenster erneut
      ändern.
    </p>
    <p>
      Hinweis zu Blauem Diesel: Dieser ist eine eigene regulierte Preiskategorie für bestimmte
      Fahrzeug- und Fahrzeugnutzungstypen. Ob eine Charteryacht mit blauem Diesel betankt werden
      darf und kann, hängt von der konkreten Yacht, der Zulassung und den Vorgaben der
      Charterbasis ab. Chartercrews sollten das nicht eigenständig entscheiden, sondern mit der
      Charterbasis oder der jeweiligen Bootstankstelle klären.
    </p>

    <h2>Was bedeutet das 300-Liter-Limit?</h2>
    <p>
      INA und Petrol, die größten kroatischen Kraftstoffanbieter, haben im Umfeld der
      Preiserhöhung vorübergehend ein Mengenlimit von 300 Litern pro Tankvorgang an
      Straßentankstellen eingeführt. Hintergrund war, Hamsterkäufe vor Inkrafttreten der
      neuen Preise zu verhindern.
    </p>
    <p>
      Laut Aussage von INA gilt dieses Mengenlimit <strong>ausdrücklich nicht</strong> für das
      Betanken von Wasserfahrzeugen. Bootstankstellen sind nach vorliegenden Informationen
      von dieser Regelung ausgenommen. Einen bestätigten Versorgungsengpass gibt es nicht.
    </p>
    <p>
      Quelle dieser Einschätzung ist eine INA-Aussage, die über Sea-Help und weitere kroatische
      Medien berichtet wurde. Wenn sich die Lage ändert, empfiehlt sich eine Rückfrage bei der
      Charterbasis oder der jeweiligen Marina.
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
        Sie planen Ihren Kroatien-Törn 2026?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Yacht und Kosten realistisch einzuordnen – persönlich,
        unabhängig und mit über 30 Jahren Charter-Erfahrung.
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
        Kroatien-Törn anfragen
      </a>
    </div>

    <h2>Was bedeutet das praktisch für Chartercrews?</h2>
    <p>
      Die Kraftstoffkosten steigen in Kroatien spürbar – besonders beim Diesel. Für
      Chartercrews, die motorintensivere Abschnitte planen, empfiehlt sich ein etwas höherer
      Puffer im Törnbudget.
    </p>
    <ul>
      <li>
        Beim Törnbudget für Kroatien etwas mehr für Kraftstoff einplanen, besonders bei
        Dieselmotoren und intensiverer Generatornutzung.
      </li>
      <li>
        Faktoren wie Motoranteil, Windverhältnisse, geplante Umwege und
        Rückgabevorgaben der Charterbasis können den Kraftstoffbedarf deutlich beeinflussen.
      </li>
      <li>
        Kein Anlass für unnötige Panik-Tankstopps: Das 300-Liter-Limit an Straßentankstellen
        gilt nach aktueller Quellenlage nicht für Bootstankstellen.
      </li>
      <li>
        Vor dem Törn und vor der Rückgabe aktuelle Preise und Tankstelleninformationen prüfen.
        Die Charterbasis oder Marina können aktuelle Hinweise geben.
      </li>
      <li>
        Bei Unsicherheit, welcher Kraftstofftyp für die gebuchte Yacht gilt, Charterbasis direkt
        ansprechen.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Ab 28. Juli 2026 gelten in Kroatien neue staatliche Kraftstoff-Höchstpreise: Diesel
        1,75 EUR/l, Benzin 1,62 EUR/l. Die Preise werden ca. alle 14 Tage neu festgelegt. Das
        300-Liter-Mengenlimit an Straßentankstellen gilt nach Informationen von INA nicht für
        Bootstankstellen. Für Chartercrews bedeutet das: etwas mehr Kraftstoffkosten einplanen
        und bei Fragen zur Charterbasis oder Marina gehen – aber kein Anlass zur Panik.
      </p>
    </div>

    <h2>Quellen und Stand</h2>
    <p>
      Quelle: Kroatische Regierung. Redaktionsstand: 31. Juli 2026. Alle Angaben ohne Gewähr –
      Preise und Regelungen werden regelmäßig neu festgelegt. Bitte vor dem Törn aktuelle
      Informationen prüfen.
    </p>
  </div>
);

export const kroatienKraftstoffpreiseCharter2026: NewsItem = {
  content,
  slug: "kroatien-kraftstoffpreise-charter-2026",
  title: "Kroatien: Neue Kraftstoff-Höchstpreise ab 28. Juli 2026 – 300-Liter-Limit gilt nicht für Bootstankstellen",
  excerpt:
    "Ab 28. Juli 2026 gelten in Kroatien neue staatliche Kraftstoffpreise: Diesel 1,75 EUR/l, Benzin 1,62 EUR/l. Das vieldiskutierte 300-Liter-Mengenlimit an Straßentankstellen gilt nach INA-Angaben nicht für Bootstankstellen. Für Chartercrews: etwas mehr Kraftstoffkosten einplanen, kein Versorgungsengpass.",
  content_type: "kurzmeldung",
  region: "Kroatien",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-07-28",
  published_at: "2026-05-15",
  updated_at: "2026-07-31",
  priority: "hoch",
  category: "Gebühren & Permit-Kosten",
  source_name: "Sea-Help / Kroatische Regierung",
  source_url: "https://www.sea-help.eu/news-allgemein/300-liter-kraftstofflimit-kroatien/",
  customer_impact:
    "Kraftstoffkosten in Kroatien steigen ab 28. Juli 2026 spürbar (Diesel +0,16 EUR/l auf 1,75 EUR/l). Das 300-Liter-Limit an Straßentankstellen gilt laut INA nicht für Bootstankstellen. Törnbudget entsprechend anpassen.",
  action_advice:
    "Beim Törnbudget etwas mehr für Kraftstoff einplanen. Keine Panik-Tankstopps nötig. Vor Rückgabe aktuelle Preise und Vorgaben der Charterbasis prüfen. Bei Unsicherheit Charterbasis oder Marina direkt fragen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_kraftstoffpreise_staatlich_2026",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
  ],
  seo_title: "Kroatien Kraftstoffpreise Juli 2026: Diesel 1,75 EUR/l – Was Charterkunden wissen müssen",
  meta_description:
    "Ab 28.7.2026: Diesel in Kroatien 1,75 EUR/l, Benzin 1,62 EUR/l. 300-Liter-Limit gilt laut INA nicht für Bootstankstellen. Praktische Hinweise für Chartercrews.",
  is_featured: false,
  cta_text:
    "Wenn Sie einen Kroatien-Törn 2026 planen, helfen wir Ihnen, Revier, Yacht und Kosten realistisch einzuordnen.",
};
