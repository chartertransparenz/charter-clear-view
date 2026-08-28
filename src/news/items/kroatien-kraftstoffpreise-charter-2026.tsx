import type { NewsItem } from "../types";

const content = (
  <div>
    <div className="not-prose mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">
        Update – 25. August 2026
      </p>
      <p className="text-sm text-red-900 leading-relaxed">
        Die kroatische Regierung hat zum 25. August 2026 neue staatliche Kraftstoff-Höchstpreise
        festgelegt. Die Preise sind gegenüber dem Stand vom 11. August 2026 deutlich gestiegen.
        Diesel kostet nun 1,86 EUR/l (+0,15 EUR/l). Dieser Artikel wurde entsprechend aktualisiert.
      </p>
    </div>

    <h2>Was gilt seit 25. August 2026?</h2>
    <p>
      Kroatien reguliert die Kraftstoffpreise staatlich. Die Höchstpreise werden in der Regel
      wöchentlich neu festgelegt. Seit dem 25. August 2026 gelten höhere Werte als zuvor –
      der Diesel erreicht damit den höchsten Stand in diesem Sommer. Für Chartercrews, die in
      der letzten August-Woche oder im September noch einen Kroatien-Törn planen, sind die
      gestiegenen Preise beim Törnbudget zu berücksichtigen.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Schneller Überblick – Stand 25. August 2026
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm list-none p-0 m-0">
        <li>• Diesel: 1,86 EUR/l (vorher 1,71 EUR/l, plus 0,15 EUR/l)</li>
        <li>• Eurosuper 95: 1,66 EUR/l (vorher 1,56 EUR/l, plus 0,10 EUR/l)</li>
        <li>
          • Plavi dizel: 1,32 EUR/l – eigene regulierte Preiskategorie, keine allgemeine
          Charterkunden-Option
        </li>
        <li>• Regulierte Höchstpreise gelten nicht an Autobahntankstellen.</li>
        <li>• Gültig bis voraussichtlich 31. August 2026, danach erneute Festsetzung.</li>
        <li>
          • Hochsaison-Empfehlung: Bei größerem Tankbedarf Bootstankstelle vorab telefonisch
          kontaktieren.
        </li>
      </ul>
    </div>

    <h2>Welche Preise gelten seit 25. August 2026?</h2>
    <p>
      Die aktuellen staatlichen Höchstpreise liegen bei:
    </p>
    <ul>
      <li>
        <strong>Diesel:</strong> 1,86 EUR/l (vorher 1,71 EUR/l, Anstieg um 0,15 EUR/l)
      </li>
      <li>
        <strong>Eurosuper 95:</strong> 1,66 EUR/l (vorher 1,56 EUR/l, Anstieg um 0,10 EUR/l)
      </li>
      <li>
        <strong>Plavi dizel:</strong> 1,32 EUR/l (vorher 1,18 EUR/l, Anstieg um 0,14 EUR/l)
      </li>
    </ul>
    <p>
      Die Preisfestsetzung gilt jeweils für sieben Tage und wird wöchentlich dienstags von der
      kroatischen Regierung neu bewertet. Für den laufenden Zeitraum sind die Preise bis
      voraussichtlich 31. August 2026 gültig.
    </p>
    <p>
      Die regulierten Höchstpreise gelten nicht an Tankstellen auf kroatischen Autobahnen.
      Dort können höhere Preise anfallen.
    </p>
    <p>
      Hinweis zu Plavi dizel: Dieser ist eine eigene regulierte Preiskategorie, die für
      bestimmte Fahrzeugtypen – vor allem in Landwirtschaft und Fischerei – vorgesehen ist.
      Ob eine Charteryacht damit betankt werden darf und kann, hängt von Yacht, Zulassung und
      den Vorgaben der Charterbasis ab. Das sollten Chartercrews nicht eigenständig entscheiden,
      sondern vorab mit der Charterbasis klären.
    </p>

    <h2>Was bedeutet das für Chartercrews?</h2>
    <p>
      Für Chartercrews mit einem Kroatien-Törn am Saisonende ist der Preisanstieg beim
      Törnbudget realistisch einzuplanen. Diesel ist der wichtigste Kraftstoffkostenpunkt für
      Charteryachten mit Dieselmotor. Bei 1,86 EUR/l sind die Kosten für motorintensive
      Abschnitte spürbar höher als noch Mitte August.
    </p>
    <ul>
      <li>
        Beim Törnbudget für Kroatien einen realistischen Puffer für Kraftstoff einplanen –
        die Preise können sich wöchentlich ändern.
      </li>
      <li>
        Motorintensive Abschnitte, Generatornutzung und Windverhältnisse beeinflussen den
        tatsächlichen Verbrauch deutlich.
      </li>
      <li>
        Bei Unsicherheit, welcher Kraftstofftyp für die gebuchte Yacht gilt, Charterbasis
        vorab ansprechen.
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

    <h2>Hochsaison-Hinweis: Bootstankstellen vor größeren Tankstopps kontaktieren</h2>
    <p>
      In der Hochsaison kann die Verfügbarkeit an kroatischen Bootstankstellen kurzfristig
      schwanken. Das bedeutet keinen allgemeinen Versorgungsengpass – aber es empfiehlt sich
      in der belebten Sommerzeit, nicht bis zur letzten Minute zu warten.
    </p>
    <p>
      Für Chartercrews ist der Rückgabe-Tankstopp besonders relevant: Die meisten Charterverträge
      sehen vor, dass die Yacht vollgetankt zurückgegeben wird. Wer diesen Stopp zu knapp plant,
      riskiert Wartezeiten, Umwege oder Zeitdruck kurz vor der Übergabe.
    </p>

    <h2>Was Crews vor der Rückgabe beachten sollten</h2>
    <ul>
      <li>
        Rückgabe-Tankstopp spätestens am Vortag planen, nicht auf dem letzten Weg zur Basis.
      </li>
      <li>
        Bei größerem Tankbedarf Bootstankstelle telefonisch vorab kontaktieren: ungefähre
        Literzahl nennen und Öffnungszeiten bestätigen lassen.
      </li>
      <li>
        Ausreichend Zeitpuffer für Tanken, Marina-Manöver und Crew-Transfer einplanen.
      </li>
      <li>
        INA veröffentlicht Öffnungszeiten und Kontaktdaten für Bootstankstellen auf der eigenen
        Website.
      </li>
      <li>
        Die Charterbasis oder Marina kann aktuelle Hinweise zur nächstgelegenen Bootstankstelle
        geben.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Ab 25. August 2026 gelten in Kroatien höhere staatliche Kraftstoff-Höchstpreise:
        Diesel 1,86 EUR/l (+0,15), Eurosuper 95 1,66 EUR/l (+0,10). Die Preise werden
        wöchentlich neu festgelegt und gelten bis ca. 31. August 2026. Für Chartercrews bleibt
        wichtig: Törnbudget mit realistischem Kraftstoffpuffer planen, Rückgabe-Tankstopp
        nicht zu knapp ansetzen. Bei größerem Tankbedarf Bootstankstelle vorab telefonisch
        kontaktieren und Öffnungszeiten prüfen.
      </p>
    </div>

    <h2>Quellen und Stand</h2>
    <p>
      Quellen: Kroatische Regierung (Vlada RH), nafta.hr (Stand 25. August 2026), Sea-Help,
      ADAC. Redaktionsstand: 28. August 2026. Alle Angaben ohne Gewähr – Preise und
      Regelungen werden wöchentlich neu festgelegt. Bitte vor dem Törn aktuelle Informationen
      prüfen.
    </p>
  </div>
);

export const kroatienKraftstoffpreiseCharter2026: NewsItem = {
  content,
  slug: "kroatien-kraftstoffpreise-charter-2026",
  title: "Kroatien: Kraftstoffpreise steigen ab 25. August 2026 – Diesel 1,86 EUR/l, Törnbudget anpassen",
  excerpt:
    "Ab 25. August 2026 gelten in Kroatien neue staatliche Kraftstoff-Höchstpreise: Diesel 1,86 EUR/l (+0,15), Eurosuper 95 1,66 EUR/l (+0,10). Höchster Dieselstand im Sommer 2026. Für Chartercrews: Törnbudget realistisch anpassen, Rückgabe-Tankstopp rechtzeitig planen.",
  content_type: "kurzmeldung",
  region: "Kroatien",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-08-25",
  published_at: "2026-05-15",
  updated_at: "2026-08-28",
  priority: "hoch",
  category: "Gebühren & Permit-Kosten",
  source_name: "Vlada RH / nafta.hr / Sea-Help / ADAC",
  source_url: "https://nafta.hr/de/",
  customer_impact:
    "Kraftstoffpreise in Kroatien steigen ab 25. August 2026: Diesel 1,86 EUR/l (+0,15), Eurosuper 95 1,66 EUR/l (+0,10). Gültig bis ca. 31. August 2026, danach erneute staatliche Festsetzung. Für Chartercrews: Törnbudget anpassen, Rückgabe-Tankstopp rechtzeitig planen, Bootstankstelle in der Hochsaison vorab kontaktieren.",
  action_advice:
    "Törnbudget mit realistischem Kraftstoffpuffer planen. Rückgabe-Tankstopp spätestens am Vortag vorsehen. Bei größerem Tankbedarf Bootstankstelle telefonisch vorab kontaktieren. INA-Website für Öffnungszeiten und Kontaktdaten nutzen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_kraftstoffpreise_staatlich_2026",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
  ],
  seo_title: "Kroatien Kraftstoffpreise August 2026: Diesel 1,86 EUR/l ab 25. August",
  meta_description:
    "Ab 25. August 2026 gelten in Kroatien neue Kraftstoff-Höchstpreise: Diesel 1,86 EUR/l. Was Chartercrews zum Törnbudget und Tanken wissen müssen.",
  is_featured: false,
  cta_text:
    "Wenn Sie einen Kroatien-Törn 2026 planen, helfen wir Ihnen, Revier, Yacht und Kosten realistisch einzuordnen.",
};
