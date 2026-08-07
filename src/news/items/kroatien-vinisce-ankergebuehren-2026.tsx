import type { NewsItem } from "../types";

const content = (
  <div>
    {/* ── Infobox: Schneller Überblick ──────────────────────────────────────── */}
    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-200">
      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-3">
        Schneller Überblick
      </p>
      <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
        <li>
          <strong>Vinišće</strong>, eine Bucht westlich von Trogir (Mitteldalmatien), wird seit
          Sommer 2026 als kostenpflichtiger Ankerbereich bewirtschaftet.
        </li>
        <li>
          Zuständig ist nach aktueller Quellenlage die Hafenbehörde der Gespanschaft
          Split-Dalmatien (<em>Lučka uprava Splitsko-dalmatinske županije</em>).
        </li>
        <li>
          Die Gebühr richtet sich nach Bootslänge, Hafenkategorie und Art der Nutzung
          (Ankern ohne Mooring oder mit Mooring-Einrichtungen) gemäß der Gebührenordnung der
          Hafenbehörde.
        </li>
        <li>
          Crews sollten beim Kassieren immer eine offizielle Quittung verlangen – mit
          Aussteller, Datum, Bootslänge und Betrag.
        </li>
        <li>
          Vinišće zeigt, dass beliebte Ankerbuchten in Kroatien zunehmend auch ohne klassisches
          Bojenfeld bewirtschaftet werden können.
        </li>
        <li>
          Ankern bleibt fester Bestandteil vieler Kroatien-Törns – sollte aber nicht
          automatisch als kostenlos angenommen werden.
        </li>
      </ul>
    </div>

    <h2>Was ist in Vinišće neu?</h2>
    <p>
      Vinišće ist eine ruhige, gut geschützte Ankerbucht an der mitteldalmatinischen Küste, rund
      acht Kilometer westlich von Trogir. Die Bucht liegt abseits der großen Marinas, bietet
      guten Schutz und ist bei Chartercrews auf Dalmatien-Törns beliebt. Seit Sommer 2026
      ist Vinišće kein kostenlos nutzbarer Ankerplatz mehr: Die Hafenbehörde der Gespanschaft
      Split-Dalmatien erhebt dort Ankergebühren.
    </p>
    <p>
      Das Verfahren ist dabei das gleiche wie in regulären Häfen: Berechtigte Mitarbeiter
      der Hafenbehörde kommen zum ankernden Boot, erfassen die Bootslänge und kassieren die
      Gebühr. Eine offizielle Quittung wird ausgestellt. Die Rechtsgrundlage dafür ist die
      Gebührenordnung der Lučka uprava Splitsko-dalmatinske županije (Pravilnik o visini
      lučkih pristojbi), zuletzt aktualisiert im Juni 2023.
    </p>

    <h2>Warum das für Chartercrews wichtig ist</h2>
    <p>
      Vinišće liegt genau in dem Revier, das viele Chartercrews für Mitteldalmatien-Törns
      nutzen: Trogir als Charterbasis, Ausflüge zur Insel Šolta, nach Drvenik oder in die
      Buchten der Halbinsel Kaštela. Die Region ist gut erschlossen, verkehrstechnisch
      günstig gelegen und bietet eine Mischung aus Marinas, Stadtkaianlagen und freien
      Ankerbuchten.
    </p>
    <p>
      Genau diese Ankerbuchten – nicht ausgewiesene Bojenfelder, sondern klassische
      Schottenbuchten mit freiem Ankern – waren bislang für viele Crews ein günstigerer
      Tagesabschluss neben den teuren Marina-Stopps. Dass in Vinišće jetzt Gebühren
      anfallen, ändert nichts Grundlegendes am Revier. Aber es verändert die Erwartung:
      Freie Ankerbuchten sind nicht automatisch kostenlos.
    </p>

    <h2>Was kostet das Ankern – und wie berechnet sich die Gebühr?</h2>
    <p>
      Die Gebühr richtet sich nach der Gebührenordnung der Hafenbehörde Split-Dalmatien.
      Vinišće ist darin offiziell als <strong>Hafen der Kategorie III</strong> eingestuft
      (Tabelle IX der Gebührenordnung, Juni 2023). Die Liegegebühr (Pristojba za vez)
      wird pro Laufmeter Bootslänge und pro Tag berechnet.
    </p>
    <p>
      Für Boote, die ausschließlich ankern – also keine fest installierten Mooring-Einrichtungen
      nutzen –, sieht Artikel 5 der Gebührenordnung eine Reduzierung der regulären
      Liegegebühr um 50 Prozent vor. Das ergibt nach Gebührenordnung folgende
      Beispielberechnung für Kategorie III:
    </p>
    <ul>
      <li>
        <strong>Boot bis 10 Meter:</strong> Reguläre Kategorie-III-Gebühr 2,00 €/m/Tag –
        beim Ankern ohne Mooring also 1,00 €/m/Tag, d.h. rund <strong>10 € je Nacht</strong>{" "}
        für ein 10-Meter-Boot.
      </li>
      <li>
        <strong>Boot bis 15 Meter:</strong> Reguläre Gebühr 3,00 €/m/Tag – beim Ankern
        ohne Mooring 1,50 €/m/Tag, d.h. rund <strong>21 € je Nacht</strong> für ein
        14-Meter-Boot.
      </li>
    </ul>
    <p>
      Diese Beträge ergeben sich rechnerisch aus der offiziellen Gebührenordnung. Die
      tatsächlich vor Ort erhobene Gebühr kann je nach Anwendung, Zahlungsmodalität und
      etwaiger Zusatzgebühren (etwa für Abfallentsorgung, sofern diese lokal eingeführt wird)
      abweichen. Entscheidend ist die offizielle Quittung.
    </p>

    <h2>Quittung und Kontrolle: Worauf Crews achten sollten</h2>
    <p>
      Artikel 16 der Gebührenordnung hält fest, dass alle Hafengebühren – auch in
      Ankerbereichen – bar oder per Karte an eine berechtigte Person der Hafenbehörde
      gezahlt werden, die dem Boot eine offizielle Quittung (<em>račun</em>) ausstellt.
      Dieses Verfahren gilt ohne Ausnahme.
    </p>
    <p>Praktisch bedeutet das für Crews in Vinišće:</p>
    <ul>
      <li>
        <strong>Quittung verlangen</strong> – immer, ohne Ausnahme. Die Quittung sollte
        Aussteller (Lučka uprava), Datum, Bootslänge und kassierten Betrag enthalten.
      </li>
      <li>
        <strong>Auf Dienstausweis achten</strong> – wer kassiert, sollte sich auf Nachfrage
        als Mitarbeiter der Hafenbehörde ausweisen können. Ein ruhiges Nachfragen nach
        Zuständigkeit ist bei Unsicherheit völlig legitim.
      </li>
      <li>
        <strong>Betrag vor der Zahlung klären</strong> – kurz nachfragen, auf welcher
        Grundlage der Betrag berechnet wird, wenn er unklar erscheint.
      </li>
      <li>
        <strong>Bei Zweifel Charterbasis kontaktieren</strong> – Basismitarbeiter kennen
        die lokale Situation in der Regel gut und können einschätzen, ob die Situation
        regulär ist.
      </li>
    </ul>
    <p>
      Wichtig: Keine Konfliktsituation aufbauen. Gebührenkontrollen in kroatischen
      Häfen und Ankerbereichen sind reguläre Verwaltungsakte, kein Grund zur Aufregung.
    </p>

    <h2>Größerer Trend: Bewirtschaftete Ankerbereiche in Kroatien</h2>
    <p>
      Vinišće ist kein Einzelfall im Sinne einer komplett neuen Regelung, sondern die
      Anwendung einer Rechtsgrundlage, die für alle Häfen und Ankerbereiche in der
      Zuständigkeit der Lučka uprava Splitsko-dalmatinske županije gilt. Die
      Gespanschaft Split-Dalmatien verwaltet neben Marinas und Stadthäfen auch eine
      Reihe natürlicher Ankerbereiche, für die grundsätzlich Gebühren erhoben werden
      können.
    </p>
    <p>
      Ob und wo diese Gebühren in der Praxis auch tatsächlich eingehoben werden, hängt von
      Entscheidungen der Hafenbehörde ab. Vinišće zeigt, dass man in beliebten und gut
      zugänglichen Buchten in Dalmatien nicht mehr davon ausgehen sollte, automatisch
      kostenlos zu ankern. Das gilt insbesondere für Buchten in der Nähe von Städten wie
      Trogir, Split oder Makarska sowie an stark frequentierten Küstenabschnitten.
    </p>
    <p>
      Gleichzeitig gilt: Weite Teile der kroatischen Küste – mit Tausenden von Buchten und
      Ankerplätzen – sind nach wie vor frei zugänglich. Die Entwicklung in Vinišće ist ein
      Hinweis auf eine Tendenz, kein pauschales Urteil über das gesamte Revier.
    </p>
    <p>
      Wer sich über die allgemeinen Ankerregeln in Kroatien informieren möchte – Küstenabstände,
      die 70-Meter-Regel, Naturschutzgebiete und das Festmachen mit Landleinen – findet
      einen ausführlichen Überblick im{" "}
      <a href="/blog/neue-ankerregeln-kroatien-2026-70-meter-zone">
        Beitrag zu den Ankerregeln in Kroatien 2026
      </a>.
    </p>

    <h2>Was bedeutet das für die Törnplanung?</h2>
    <p>
      Vinišće ändert nicht den Charakter des kroatischen Reviers. Kroatien bleibt eines
      der attraktivsten und vielseitigsten Charterreviere im Mittelmeer – mit kurzen
      Distanzen, guter Infrastruktur und einer riesigen Auswahl an Ankerplätzen.
    </p>
    <p>Für eine realistische Törnplanung empfiehlt sich trotzdem ein Umdenken in einem Punkt:</p>
    <ul>
      <li>
        <strong>Nebenkosten vollständig einplanen</strong> – das Budget sollte nicht nur
        Charterrate, Marinas und Bojenfelder umfassen, sondern auch mögliche Gebühren in
        Ankerbuchten. Auch wenn nicht alle Buchten kostenpflichtig sind: In populären
        Regionen kann die Überraschung klein bleiben, wenn man von Anfang an etwas
        Spielraum einrechnet.
      </li>
      <li>
        <strong>Alternativen kennen</strong> – wer Vinišće meiden möchte oder dort keinen
        Platz findet, hat in der Region Trogir–Šolta–Drvenik zahlreiche weitere Optionen.
        Mehrere Buchten auf der Route im Blick zu haben, ist generell guter Törn-Stil.
      </li>
      <li>
        <strong>Mix aus Marina, Stadtkai und Ankerbucht planen</strong> – wer Marina-Stopps
        bewusst einsetzt und Ankertage als günstigere Alternative nutzt, sollte beim
        Budgetrechnen jetzt auch für Ankerbuchten einen kleinen Puffer einbauen. Ein
        Dalmatien-Törn mit 2–3 Ankernächten pro Woche bleibt trotzdem deutlich günstiger
        als reine Marina-Navigation.
      </li>
      <li>
        <strong>Sicherheit und Eignung vor Gebühren</strong> – wer aus reiner Gebührenvermeidung
        auf eine ungeeignete oder unsichere Ankerposition ausweicht, riskiert mehr als den
        eingesparten Betrag. Wetter, Ankergrund, Seegang und Platzverhältnisse bleiben das
        Wichtigste bei der Buchtenwahl.
      </li>
      <li>
        <strong>Naturschutz und Seegras beachten</strong> – in Buchten mit Posidonia-Seegras
        ist das Ankern unabhängig von Gebühren eingeschränkt. Aktuelle Navigationssoftware
        (Navionics, Orca) zeigt entsprechende Bereiche an.
      </li>
    </ul>

    {/* ── CTA ───────────────────────────────────────────────────────────────── */}
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
        Kroatien-Törn realistisch planen
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Sie planen einen Kroatien-Törn und möchten Route, Ankerbuchten, Marinas und mögliche
        Zusatzkosten realistisch einschätzen? CharterTransparenz unterstützt Sie bei der
        passenden Yacht- und Revierplanung – persönlich, unabhängig und mit über 30 Jahren
        Charter-Erfahrung.
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
        Jetzt unverbindlich anfragen
      </a>
    </div>
  </div>
);

export const kroatienVinisceAnkergebuehren2026: NewsItem = {
  content,
  slug: "kroatien-vinisce-ankergebuehren-2026",
  title: "Kroatien: In Vinišće werden Ankergebühren erhoben",
  excerpt:
    "In der Bucht Vinišće westlich von Trogir müssen Chartercrews seit Sommer 2026 mit Ankergebühren rechnen. Der Fall zeigt, dass in Kroatien zunehmend auch klassische Ankerbuchten bewirtschaftet werden können.",
  content_type: "kurzmeldung",
  region: "Kroatien / Dalmatien",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-07-01",
  published_at: "2026-08-07",
  updated_at: "2026-08-07",
  priority: "hoch",
  category: "Gebühren & Permit-Kosten",
  source_name: "Lučka uprava Splitsko-dalmatinske županije – Pravilnik o visini lučkih pristojbi 2023",
  source_url: "https://www.lusdz.hr/Portals/0/adam/Documents/4T8EmwsaZUyU-OIRrV9Ykw/Files/Pravilnik%20o%20lu%C4%8Dkim%20pristojbama/PRAVILNIK%20O%20LU%C4%8CKIM%20PRISTOJBAMA%202023.pdf",
  customer_impact:
    "Chartercrews, die in Vinišće (Trogir-Region) ankern, müssen seit Sommer 2026 mit Ankergebühren rechnen. Die Gebühr richtet sich nach Bootslänge und Nutzungsart gemäß der offiziellen Hafengebührenordnung.",
  action_advice:
    "In Vinišće nicht mehr von kostenlosem Ankern ausgehen. Offizielle Quittung verlangen. Törnbudget um mögliche Ankergebühren in beliebten Buchten erweitern.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_vinisce_ankergebuehren_2026",
  image: "/images/news/kroatien-vinisce-ankergebuehren-2026.jpg",
  imageAlt: "Yacht in einer kroatischen Ankerbucht",
  imageCaption:
    "Symbolbild, KI-generiert. In beliebten kroatischen Buchten sollten Chartercrews neben Wetter, Ankergrund und Schutz künftig auch mögliche lokale Gebühren im Blick behalten.",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
    { label: "Dalmatien ab Split", href: "/reviere/mittelmeer/kroatien/dalmatien-split" },
    { label: "Kroatien Charter anfragen", href: "/charter-anfrage" },
  ],
  seo_title: "Ankergebühren in Vinišće (Kroatien) 2026 – Was Chartercrews wissen sollten",
  meta_description:
    "In der Bucht Vinišće westlich von Trogir werden seit Sommer 2026 Ankergebühren erhoben. Rechtsgrundlage, Gebührenberechnung und praktische Hinweise für Chartercrews in Mitteldalmatien.",
  is_featured: true,
  cta_text:
    "Sie planen einen Kroatien-Törn und möchten Route, Ankerbuchten, Marinas und mögliche Zusatzkosten realistisch einschätzen? CharterTransparenz unterstützt Sie bei der passenden Yacht- und Revierplanung.",
};
