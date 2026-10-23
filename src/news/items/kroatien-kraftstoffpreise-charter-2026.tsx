import type { NewsItem } from "../types";

const content = (
  <div>
    <div className="not-prose mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
      <p className="text-xs font-semibold text-red-700 uppercase tracking-wide mb-1">
        Update – 20. Oktober 2026
      </p>
      <p className="text-sm text-red-900 leading-relaxed">
        Die kroatische Regierung hat zum 20. Oktober 2026 neue staatliche Kraftstoff-Höchstpreise
        festgelegt. Eurodiesel kostet nun 1,87 EUR/l, Eurosuper 95 liegt bei 1,73 EUR/l.
        Dieser Artikel wurde entsprechend aktualisiert.
      </p>
    </div>

    <div className="not-prose mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
      <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-1">
        Frühere Aktualisierung – 25. August 2026
      </p>
      <p className="text-sm text-orange-900 leading-relaxed">
        Zum 25. August 2026 galten: Diesel 1,86 EUR/l, Eurosuper 95 1,66 EUR/l,
        Plavi dizel 1,32 EUR/l.
      </p>
    </div>

    <h2>Was gilt seit 20. Oktober 2026?</h2>
    <p>
      Kroatien reguliert die Kraftstoffpreise staatlich. Die Höchstpreise werden in der Regel
      wöchentlich neu festgelegt. Seit dem 20. Oktober 2026 gelten folgende Werte – die Preise
      für den laufenden siebentägigen Zeitraum stammen aus der offiziellen Veröffentlichung
      auf nafta.hr.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Schneller Überblick – Stand 20. Oktober 2026
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-1 text-sm list-none p-0 m-0">
        <li>• Eurodiesel: 1,87 EUR/l</li>
        <li>• Eurosuper 95: 1,73 EUR/l</li>
        <li>
          • Plavi dizel: 1,43 EUR/l – eigene regulierte Preiskategorie, keine allgemeine
          Charterkunden-Option
        </li>
        <li>• Regulierte Höchstpreise gelten nicht an Autobahntankstellen.</li>
        <li>• Gültig für sieben Tage ab 20. Oktober 2026, danach erneute Festsetzung.</li>
      </ul>
    </div>

    <h2>Welche Preise gelten seit 20. Oktober 2026?</h2>
    <p>
      Die aktuellen staatlichen Höchstpreise liegen bei:
    </p>
    <ul>
      <li>
        <strong>Eurodiesel:</strong> 1,87 EUR/l
      </li>
      <li>
        <strong>Eurosuper 95:</strong> 1,73 EUR/l
      </li>
      <li>
        <strong>Plavi dizel:</strong> 1,43 EUR/l
      </li>
    </ul>
    <p>
      Die Preisfestsetzung gilt jeweils für sieben Tage und wird wöchentlich von der
      kroatischen Regierung neu bewertet.
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
      Im Oktober 2026 liegt der Dieselpreis in Kroatien damit auf einem ähnlichen Niveau wie
      im Sommer – ein weiterer Anstieg gegenüber dem August-Wert ist minimal (1,87 statt
      1,86 EUR/l), aber der Herbst- und Vorsaison-Zeitraum bringt keine spürbare Entlastung
      bei den Kraftstoffkosten. Wer in der Nachsaison in kroatischen Gewässern unterwegs ist,
      sollte die aktuellen Preise beim Törnbudget berücksichtigen.
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
        Sie planen Ihren Kroatien-Törn?
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

    <h2>Hinweis: Bootstankstellen vor größeren Tankstopps kontaktieren</h2>
    <p>
      In der Hochsaison kann die Verfügbarkeit an kroatischen Bootstankstellen kurzfristig
      schwanken. Das bedeutet keinen allgemeinen Versorgungsengpass – aber es empfiehlt sich,
      nicht bis zur letzten Minute zu warten.
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
        Ab 20. Oktober 2026 gelten in Kroatien folgende staatliche Kraftstoff-Höchstpreise:
        Eurodiesel 1,87 EUR/l, Eurosuper 95 1,73 EUR/l, Plavi dizel 1,43 EUR/l. Die Preise
        werden wöchentlich neu festgelegt. Für Chartercrews: Törnbudget mit realistischem
        Kraftstoffpuffer planen, Rückgabe-Tankstopp nicht zu knapp ansetzen. Bei größerem
        Tankbedarf Bootstankstelle vorab telefonisch kontaktieren und Öffnungszeiten prüfen.
      </p>
    </div>

    <h2>Quellen und Stand</h2>
    <p>
      Quellen: Kroatische Regierung (Vlada RH), nafta.hr (Stand 20. Oktober 2026, gültig für
      sieben Tage). Redaktionsstand: 23. Oktober 2026. Alle Angaben ohne Gewähr – Preise und
      Regelungen werden wöchentlich neu festgelegt. Bitte vor dem Törn aktuelle Informationen
      prüfen.
    </p>
  </div>
);

export const kroatienKraftstoffpreiseCharter2026: NewsItem = {
  content,
  slug: "kroatien-kraftstoffpreise-charter-2026",
  title: "Kroatien: Kraftstoffpreise für Charteryachten – aktueller Stand Oktober 2026",
  excerpt:
    "Seit 20. Oktober 2026 gelten in Kroatien neue staatliche Kraftstoff-Höchstpreise: Eurodiesel 1,87 EUR/l, Eurosuper 95 1,73 EUR/l, Plavi dizel 1,43 EUR/l. Die Preise werden wöchentlich neu festgelegt. Für Chartercrews: Törnbudget realistisch anpassen, Rückgabe-Tankstopp rechtzeitig planen.",
  content_type: "update",
  region: "Kroatien",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-08-25",
  published_at: "2026-05-15",
  updated_at: "2026-10-23",
  priority: "hoch",
  category: "Gebühren & Permit-Kosten",
  source_name: "Vlada RH / nafta.hr",
  source_url: "https://nafta.hr/de/",
  customer_impact:
    "Kraftstoffpreise in Kroatien ab 20. Oktober 2026: Eurodiesel 1,87 EUR/l, Eurosuper 95 1,73 EUR/l. Gültig für sieben Tage, danach erneute staatliche Festsetzung. Für Chartercrews: Törnbudget anpassen, Rückgabe-Tankstopp rechtzeitig planen.",
  action_advice:
    "Törnbudget mit realistischem Kraftstoffpuffer planen. Rückgabe-Tankstopp spätestens am Vortag vorsehen. Bei größerem Tankbedarf Bootstankstelle telefonisch vorab kontaktieren. INA-Website für Öffnungszeiten und Kontaktdaten nutzen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_kraftstoffpreise_staatlich_2026",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
  ],
  seo_title: "Kroatien Kraftstoffpreise Oktober 2026: Diesel 1,87 EUR/l ab 20. Oktober",
  meta_description:
    "Seit 20. Oktober 2026 gelten in Kroatien neue Kraftstoff-Höchstpreise: Eurodiesel 1,87 EUR/l, Eurosuper 95 1,73 EUR/l. Was Chartercrews zum Törnbudget und Tanken wissen müssen.",
  is_featured: false,
  cta_text:
    "Wenn Sie einen Kroatien-Törn planen, helfen wir Ihnen, Revier, Yacht und Kosten realistisch einzuordnen.",
};
