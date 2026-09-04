import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Zwei aktuelle Befeuerungsänderungen an der kroatischen Küste</h2>
    <p>
      Das Hydrografische Institut der Republik Kroatien (HHI) hat Ende August 2026 zwei
      Navigationswarnungen veröffentlicht, die Charterkunden im laufenden Herbsttörn
      beachten sollten: In der Marina Kaštela bei Split wurde ein neues rotes Hafenfeuer
      eingerichtet. Im kleinen Hafen Bakarac in der Kvarner Bucht ist das dortige
      Hafenfeuer derzeit ausgefallen.
    </p>
    <p>
      Beide Änderungen betreffen die Befeuerungssituation in bekannten Ansteuerungsgebieten.
      Crews, die diese Revierteile befahren, sollten ihre Seekarten und Plottersoftware
      entsprechend prüfen.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Überblick – HHI Warnungen 312 und 313/2026
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-2 text-sm list-none p-0 m-0">
        <li>
          • <strong>Marina Kaštela, HHI 312/2026 (ab 27.08.2026):</strong> Neues Fl R 3s Feuer
          am westlichen Wellenbrecherkopf, abgedunkelter Sektor 033°–114°
        </li>
        <li>
          • <strong>Bakarac, Stara lučica, HHI 313/2026 (ab 28.08.2026):</strong> Hafenfeuer
          LL 203 / E2862 derzeit ausgefallen (unlit)
        </li>
        <li>• Status: beide Warnungen aktiv – Plotter und ENCs entsprechend prüfen</li>
      </ul>
    </div>

    <h2>Marina Kaštela: Neues rotes Hafenfeuer am Wellenbrecher</h2>
    <p>
      Am westlichen Wellenbrecherkopf der Marina Kaštela in der Kaštelaner Bucht
      (Raum Split / Mitteldalmatien) wurde ein neues seitliches Hafenfeuer eingerichtet,
      das die Backbordseite der Einfahrt markiert:
    </p>
    <ul>
      <li>Kennung: <strong>Fl R 3s</strong> (rotes Blinkfeuer, 3-Sekunden-Takt)</li>
      <li>Höhe: 5 Meter – Tragweite: 2 Seemeilen</li>
      <li>Turm: Roter Turm</li>
      <li>Position: 43° 32,683' N / 016° 24,333' E (WGS 84)</li>
      <li>Abgedunkelter Sektor: 033°–114° (Bogenweite 081°)</li>
    </ul>
    <p>
      Der abgedunkelte Sektor bedeutet, dass das Feuer aus bestimmten Ansteuerungsrichtungen
      nicht sichtbar ist. Wer die Marina Kaštela anläuft, sollte prüfen, ob dieser Sektor
      mit der eigenen Ansteuerungsroute überschneidet – und ob die Plottersoftware bereits
      auf dem aktuellen Kartenstand ist.
    </p>

    <h2>Bakarac: Hafenfeuer ausgefallen – erhöhte Aufmerksamkeit beim Einlaufen</h2>
    <p>
      Im Hafen Bakarac in der Bucht von Bakar (nördlicher Kvarner, südöstlich von Rijeka)
      ist das Hafenfeuer am Molenkopf der Stara lučica derzeit nicht in Betrieb.
      Betroffen ist das Feuer LL 203 / E2862 an Position 45° 16,82' N / 014° 34,86' E.
    </p>
    <p>
      Das Feuer ist auf Seekarten und Plottern weiterhin als vorhanden eingetragen,
      leuchtet aber aktuell nicht. Crews, die Bakarac anlaufen oder passieren, sollten
      sich beim Einlaufen nicht auf dieses Feuer verlassen.
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
        Sie planen einen Kroatien-Törn im Kvarner oder im Raum Split?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir beraten Sie persönlich zu Revier, Route und aktuellen Hinweisen – unabhängig
        und auf Basis langjähriger Erfahrung in der Adria.
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

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Befeuerungsänderungen dieser Art sind für Charterkunden vor allem dann relevant,
      wenn sie bei eingeschränkter Sicht, in der Abenddämmerung oder nachts in solche
      Häfen einlaufen. Im gut beleuchteten Sommer und Frühherbst ist das Risiko kleiner –
      dennoch sollten aktuelle Seekartenstände Pflicht sein.
    </p>
    <p>
      Für die Törnplanung gilt:
    </p>
    <ul>
      <li>
        Seekarten, ENCs und Plottersoftware vor dem Törn aktualisieren. Das HHI
        veröffentlicht seine Korrekturen als Radionavigationswarnungen und als
        Notice to Mariners.
      </li>
      <li>
        Für Bakarac: Das Hafenfeuer LL 203 / E2862 ist derzeit nicht verlässlich.
        Aktuelle HHI-Warnungen vor dem Einlaufen prüfen.
      </li>
      <li>
        Für Marina Kaštela: Den abgedunkelten Sektor des neuen Fl R 3s Feuers bei
        der Ansteuerung berücksichtigen.
      </li>
    </ul>
    <p>
      Kroatien-Revierführer und Revier-Apps, die auf HHI-Daten basieren, werden diese
      Änderungen schrittweise einpflegen. Ein kurzer Check der aktuellen HHI-Warnseite
      vor dem Auslaufen ist eine gute Gewohnheit für jeden{" "}
      <a href="/reviere/mittelmeer/kroatien" className="text-blue-600 hover:underline">
        Kroatien-Törn
      </a>
      .
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        HHI 312/2026: Marina Kaštela (Kaštelaner Bucht / Split) – neues Fl R 3s Feuer
        am westlichen Wellenbrecherkopf, abgedunkelter Sektor 033°–114°. HHI 313/2026:
        Bakarac (Kvarner) – Hafenfeuer LL 203 / E2862 ausgefallen. Plotter und
        Seekarten vor dem Törn auf aktuellen Stand bringen.
      </p>
    </div>

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
        Kroatien-Charter persönlich planen
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Ob Kvarner, Dalmatien oder Dubrovnik – wir helfen Ihnen, Revier, Saison und
        Yacht realistisch einzuordnen und stellen das passende Angebot zusammen.
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
        Unverbindlich anfragen
      </a>
    </div>
  </div>
);

export const kroatienHafenfeuerKastelaBakarac2026: NewsItem = {
  content,
  slug: "kroatien-hafenfeuer-kastela-bakarac-2026",
  title:
    "Kroatien: Neues Hafenfeuer Marina Kaštela und ausgefallenes Feuer in Bakarac – HHI Warnungen 312 und 313/2026",
  excerpt:
    "Das Hydrografische Institut Kroatiens (HHI) meldet zwei aktuelle Befeuerungsänderungen: In der Marina Kaštela (Kaštelaner Bucht) wurde ein neues Fl R 3s Feuer mit abgedunkeltem Sektor eingerichtet. In Bakarac (Kvarner) ist das Hafenfeuer LL 203 / E2862 derzeit ausgefallen. Charterkunden sollten Plotter und Seekarten vor dem Törn prüfen.",
  content_type: "basis_hinweis",
  region: "Kroatien / Dalmatien / Kvarner",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-08-27",
  published_at: "2026-09-04",
  updated_at: "2026-09-04",
  priority: "mittel",
  category: "Revier & Sicherheit",
  source_name: "HHI – Hrvatski hidrografski institut",
  source_url: "https://www.hhi.hr/en/e-services/radio-navigational-warnings",
  customer_impact:
    "In der Marina Kaštela gibt es ein neues rotes Hafenfeuer (Fl R 3s) mit abgedunkeltem Sektor. In Bakarac ist das Hafenfeuer LL 203 / E2862 ausgefallen. Crews sollten Plottersoftware und ENCs vor dem Törn aktualisieren und beim Einlaufen keine veralteten Befeuerungsangaben zugrunde legen.",
  action_advice:
    "Seekarten und Plotter vor dem Törn aktualisieren. Für Bakarac kein Verlass auf Feuer LL 203 / E2862. In Marina Kaštela den abgedunkelten Sektor des neuen Fl R 3s Feuers bei der Ansteuerung beachten. Aktuelle HHI-Warnungen prüfen unter hhi.hr.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_hafenfeuer_kastela_bakarac_2026",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
    { label: "Kvarner Bucht", href: "/reviere/mittelmeer/kroatien/kvarner" },
    { label: "Dalmatien / Split", href: "/reviere/mittelmeer/kroatien/dalmatien-split" },
  ],
  seo_title:
    "Kroatien 2026: Neues Hafenfeuer Kaštela und Ausfall Bakarac – HHI Warnungen 312+313",
  meta_description:
    "HHI Warnung 312/2026: Neues Fl R 3s Feuer Marina Kaštela, abgedunkelter Sektor. HHI Warnung 313/2026: Hafenfeuer Bakarac ausgefallen. Was Charterkunden jetzt wissen müssen.",
  is_featured: false,
  cta_text:
    "Wir beraten Sie zu Kroatien-Törns im Kvarner und Dalmatien – persönlich, unabhängig und mit langjähriger Erfahrung.",
  image: "/images/news/kroatien-hafenfeuer-kastela-kvarner-2026.jpg",
  imageAlt: "Hafeneinfahrt in Kroatien bei Abenddämmerung mit rotem Feuer am Wellenbrecher",
  imageCaption:
    "Symbolbild, KI-generiert. Aktuelle Befeuerungsänderungen in Kroatien – HHI Warnungen August 2026.",
};
