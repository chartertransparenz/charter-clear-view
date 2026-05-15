import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Für das aktuell geltende staatliche Preisfenster nennt die kroatische Regierung
      Obergrenzen von 1,64 Euro je Liter Benzin und 1,72 Euro je Liter Diesel. Diese
      Preisdeckelung gilt für das jeweils laufende staatliche Preisfenster und wird
      regelmäßig neu bewertet. Die Werte können sich bei der nächsten Festsetzung ändern.
    </p>

    <h2>Warum ist das für Charterkunden relevant?</h2>
    <p>
      Für Crews, die in{" "}
      <a href="/reviere/mittelmeer/kroatien">Kroatien</a> segeln, bedeuten staatlich
      gedeckelte Kraftstoffpreise vor allem eines: bessere Planbarkeit. Wer einen Törn mit
      längeren Motoretappen plant – etwa durch den Kvarner oder entlang Dalmatiens – kann
      Treibstoffkosten realistischer kalkulieren als in Revieren ohne Preisregulierung.
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

    <h2>Was bedeutet das für Törnplanung und Budget?</h2>
    <p>
      Die gedeckelten Preise machen Kraftstoffkosten für den laufenden Buchungszeitraum gut
      kalkulierbar. Allerdings sollten Charterkunden dabei einige Punkte beachten:
    </p>
    <ul>
      <li>
        Die Preisdeckelung gilt für das jeweils aktuelle staatliche Preisfenster. Bei der
        nächsten Neubewertung können die Werte angepasst werden.
      </li>
      <li>
        Straßentankstellen und Hafentankstellen haben nicht immer exakt dieselben Preise.
        Tankstellen im Hafen können leicht abweichen.
      </li>
      <li>
        Bei der Charterbasis prüfen, welcher Kraftstoff für die gebuchte Yacht relevant ist –
        Segelboote mit Hilfsmotor, Katamarane und Motorboote haben unterschiedliche
        Verbrauchsprofile.
      </li>
      <li>
        Bei längeren Motoretappen oder wenig Wind lohnt sich ein kleiner Puffer im
        Kraftstoffbudget.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Kroatien hat staatliche Kraftstoffhöchstpreise. Für das aktuelle Preisfenster
        (ab 4. Mai 2026) gelten: Benzin 1,64 EUR/l, Diesel 1,72 EUR/l. Die Preise werden
        regelmäßig neu festgesetzt. Für Charterkunden bedeutet das gut planbare
        Treibstoffkosten – mit einem realistischen Puffer für Abweichungen vor Ort.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quelle: Kroatische Regierung / Regierungsmitteilung vom 4. Mai 2026.
      Redaktionsstand: 15. Mai 2026. Alle Angaben ohne Gewähr – die Preisfestsetzung wird
      regelmäßig neu bewertet. Bitte vor dem Törn aktuelle Tankpreise und die Informationen
      der Charterbasis prüfen.
    </p>
  </div>
);

export const kroatienKraftstoffpreiseCharter2026: NewsItem = {
  content,
  slug: "kroatien-kraftstoffpreise-charter-2026",
  title: "Kroatien: Staatlich gedeckelte Kraftstoffpreise entlasten Törn-Budgets",
  excerpt:
    "Die kroatische Regierung hat am 4. Mai 2026 erneut Höchstpreise für Kraftstoffe festgelegt: Benzin 1,64 EUR/l, Diesel 1,72 EUR/l. Für Charterkunden bedeutet das besser planbare Treibstoffkosten im Revier.",
  content_type: "kurzmeldung",
  region: "Kroatien",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-05-04",
  published_at: "2026-05-15",
  updated_at: "2026-05-15",
  priority: "mittel",
  category: "Gebühren & Permit-Kosten",
  source_name: "Kroatische Regierung",
  source_url: "",
  customer_impact:
    "Staatlich gedeckelte Kraftstoffpreise machen Treibstoffkosten für Kroatien-Törns besser planbar. Preise gelten für das laufende Preisfenster und werden regelmäßig neu bewertet.",
  action_advice:
    "Bei Charterbasis prüfen, welcher Kraftstoff für die Yacht relevant ist. Aktuelle Tankpreise vor Ort beachten. Kleinen Puffer im Kraftstoffbudget einplanen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_kraftstoffpreise_staatlich_2026",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
  ],
  seo_title: "Kroatien Kraftstoffpreise 2026: Was Charterkunden wissen müssen",
  meta_description:
    "Kroatien deckt Kraftstoffpreise staatlich: Benzin 1,64 €/l, Diesel 1,72 €/l (Stand Mai 2026). Gut planbare Kosten für Yachtcharter-Crews.",
  is_featured: false,
  cta_text:
    "Wenn Sie einen Kroatien-Törn 2026 planen, helfen wir Ihnen, Revier, Yacht und Kosten realistisch einzuordnen.",
};
