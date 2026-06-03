import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Im Hafenbereich von Poros gilt seit Ende April 2026 eine offiziell festgelegte
      Einschränkung für eine koordinatendefinierte Wasserfläche. Poros bleibt als Stopp im{" "}
      <a href="/reviere/mittelmeer/griechenland/athen-saronischer-golf">Saronischen Golf</a>{" "}
      grundsätzlich planbar – Chartercrews sollten aber vor dem Anlaufen prüfen, wo sie
      innerhalb des Hafenbereichs liegen, ankern oder festmachen dürfen. Ältere Törnführer
      oder gespeicherte Ankerplätze aus früheren Saisons können die aktuelle Regelung nicht
      widerspiegeln.
    </p>

    <h2>Was in Poros 2026 geregelt wurde</h2>
    <p>
      Grundlage ist die Entscheidung 06/2026 des Hafenamts Poros, veröffentlicht im
      Griechischen Staatsanzeiger FEK B 2370 vom 27. April 2026. Die Regelung gilt bis
      einschließlich 31. Oktober 2026 und betrifft alle Schiffe – unabhängig davon, unter
      welcher Flagge sie fahren.
    </p>
    <p>
      Es handelt sich nicht um ein allgemeines Ankerverbot für ganz Poros, sondern um eine
      räumlich klar abgegrenzte Wasserfläche im Hafenbereich.
    </p>

    <h2>Was in der betroffenen Fläche untersagt ist</h2>
    <p>Innerhalb der definierten Wasserfläche sind bis 31. Oktober 2026 untersagt:</p>
    <ul>
      <li>Ankern</li>
      <li>Ausbringen von Mooring-, Anker- oder Befestigungspunkten</li>
      <li>Festmachen an festen oder nicht festen Punkten der Küstenlinie</li>
    </ul>

    <h2>Wo die Einschränkung gilt</h2>
    <p>
      Die eingeschränkte Zone liegt im Hafenbereich von Poros – zwischen Poros-Stadt und
      dem gegenüberliegenden Ufer Richtung Galatas. Die genaue Abgrenzung ist durch fünf
      WGS84-Koordinaten (Punkte A bis E) festgelegt, die in der Entscheidung 06/2026
      veröffentlicht sind.
    </p>
    <p>
      Maßgeblich sind die offiziellen Koordinaten, lokale Hafeninformationen und aktuelle
      nautische Unterlagen. Die Karte zur Entscheidung dient nur dem besseren Verständnis
      der Verbotszone und ist nicht für Navigationszwecke geeignet.
    </p>

    <h2>Koordinaten der Zone (WGS84)</h2>
    <div className="not-prose overflow-x-auto my-6">
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f1f5f9" }}>
            <th
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              Punkt
            </th>
            <th
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              Breite (N)
            </th>
            <th
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              Länge (E)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              A
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              37°30′16,54″
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              23°27′12,45″
            </td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              B
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              37°30′17,27″
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              23°27′04,96″
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              C
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              37°30′05,06″
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              23°26′43,44″
            </td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              D
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              37°29′58,87″
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              23°26′51,02″
            </td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontWeight: 600,
              }}
            >
              E
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              37°30′09,58″
            </td>
            <td
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                fontFamily: "monospace",
              }}
            >
              23°27′13,20″
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
      Quelle: Entscheidung 06/2026 des Hafenamts Poros, FEK B 2370 vom 27.04.2026.
      Maßgeblich sind die offiziellen Koordinaten, lokale Hafeninformationen und aktuelle
      nautische Unterlagen. Nicht zur Navigation verwenden.
    </p>

    <h2>Was bedeutet das für Chartercrews?</h2>
    <p>
      <a href="/reviere/mittelmeer/griechenland">Griechenland</a>-Crews, die Poros auf
      ihrer Route im Saronischen Golf einplanen, können das weiterhin tun. Poros bleibt
      ein attraktiver Zwischenstopp mit guter Infrastruktur. Die neue Regelung erfordert
      aber mehr Sorgfalt bei der Planung:
    </p>
    <ul>
      <li>
        <strong>Liegeplatz vorab klären:</strong> Nicht auf ältere Törnführer oder
        gespeicherte Ankerplätze aus früheren Saisons verlassen – die betroffene Zone kann
        bisher genutzte Plätze einschließen.
      </li>
      <li>
        <strong>Charterbasis fragen:</strong> Lokale Hinweise zur aktuellen Situation
        einholen. Die Charterbasis kennt die verfügbaren Optionen für Hafen, Anker und Boje.
      </li>
      <li>
        <strong>Aktuelle Unterlagen prüfen:</strong> Navigationssoftware und Seekarten sind
        möglicherweise noch nicht aktualisiert. Koordinaten vor dem Törn manuell prüfen.
      </li>
      <li>
        <strong>Defensiv planen:</strong> Bei Unsicherheit lieber außerhalb der Zone ankern
        oder einen alternativen Liegeplatz wählen.
      </li>
    </ul>

    <h2>Praktischer Hinweis vor dem Anlaufen</h2>
    <ul>
      <li>Koordinaten A–E vor dem Törn in der Navigationssoftware prüfen</li>
      <li>
        Charterbasis oder lokales Hafenamt nach verfügbaren Liegeplatz-Optionen fragen
      </li>
      <li>
        Keine improvisierten Landleinen oder Befestigungen in der betroffenen Fläche nutzen
      </li>
      <li>
        Alternativen für Hafen, Ankerplatz oder nächsten Stopp im Saronischen Golf
        mitdenken – das Revier bietet gut planbare Ausweichmöglichkeiten
      </li>
      <li>
        Für einen hilfreichen Überblick zum{" "}
        <a href="/blog/richtig-ankern-yachtcharter">Ankern beim Yachtcharter</a> lohnt
        sich auch ein Blick in unseren Ratgeber
      </li>
    </ul>

    {/* ── CTA ──────────────────────────────────────────────────── */}
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
        Planen Sie einen Törn im Saronischen Golf?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Route und Yacht realistisch zusammenzudenken –
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
        Griechenland-Törn persönlich planen lassen
      </a>
    </div>

    <h2>Fazit</h2>
    <p>
      Poros bleibt für Törns im Saronischen Golf interessant. Die Einschränkung im
      Hafenbereich macht den Stopp nicht unmöglich – sie verlangt aber mehr Aufmerksamkeit
      beim Ankern, Liegen und Festmachen. Wer sich vor dem Törn informiert, die Koordinaten
      der Zone kennt und die Charterbasis fragt, kann Poros weiterhin entspannt einplanen.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Poros bleibt planbar. Im Hafenbereich gilt bis 31. Oktober 2026 eine
        Einschränkung für eine koordinatendefinierte Fläche: kein Ankern, keine
        Moorings, kein Festmachen an der Küstenlinie. Gilt für alle Schiffe unabhängig
        von der Flagge. Vor dem Anlaufen: Koordinaten prüfen, Charterbasis fragen,
        aktuell planen.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: Entscheidung 06/2026 des Hafenamts Poros; Griechischer Staatsanzeiger FEK B
      2370 vom 27. April 2026; Hellenic Coast Guard. Redaktionsstand: 3. Juni 2026. Alle
      Angaben ohne Gewähr – bitte vor dem Anlaufen aktuelle offizielle Quellen, lokale
      Hafeninformationen und aktuelle nautische Unterlagen prüfen.
    </p>
  </div>
);

export const porosAnkernFestmachenHafenbereich2026: NewsItem = {
  content,
  slug: "poros-ankern-festmachen-hafenbereich-2026",
  title:
    "Neue Liege- und Ankerregeln in Poros bis Oktober 2026: Was Crews wissen sollten",
  excerpt:
    "Poros bleibt als Stopp im Saronischen Golf planbar. Crews sollten aber eine offiziell definierte Wasserfläche im Hafenbereich beachten, in der Ankern, Moorings und Festmachen bis Ende Oktober 2026 untersagt sind.",
  content_type: "basis_hinweis",
  region: "Griechenland / Poros / Saronischer Golf",
  country_or_area: "Griechenland",
  status: "in_kraft",
  effective_from: "2026-04-27",
  published_at: "2026-06-03",
  updated_at: "2026-06-03",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name: "Hafenamt Poros; FEK B 2370/27.04.2026; Hellenic Coast Guard",
  source_url:
    "https://www.hcg.gr/el/epikairothta/apagoreysh-agkyrobolias-ploiwn-sth-8alassia-perioxh-toy-limena-poroy/",
  customer_impact:
    "Im Hafenbereich von Poros gilt bis 31. Oktober 2026 ein Ankern-, Mooring- und Festmachverbot für eine koordinatendefinierte Wasserfläche (Punkte A–E). Gilt für alle Schiffe unabhängig von der Flagge. Poros bleibt grundsätzlich planbar.",
  action_advice:
    "Koordinaten A–E vor dem Törn prüfen. Charterbasis nach verfügbaren Liegeplätzen fragen. Nicht auf ältere Törnführer verlassen. Bei Unsicherheit außerhalb der Zone ankern oder alternativen Stopp planen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "athen-saronischer-golf",
  canonical_topic_key: "poros_ankern_festmachen_hafenbereich_2026",
  seo_title: "Poros 2026: Ankern und Festmachen im Hafenbereich",
  meta_description:
    "Im Hafenbereich von Poros gilt bis 31. Oktober 2026 eine Einschränkung für Ankern, Moorings und Festmachen. Was Chartercrews im Saronischen Golf wissen sollten.",
  is_featured: true,
  image: "/images/news/poros-ankern-festmachen-hafenbereich-2026.png",
  imageAlt:
    "Schematische Karte des eingeschränkten Hafenbereichs von Poros mit Polygon der Liege- und Ankerbeschränkung 2026",
  imageCaption:
    "Schematische Darstellung des eingeschränkten Hafenbereichs von Poros. Die Karte dient nur dem besseren Verständnis der Verbotszone und ist nicht für Navigationszwecke geeignet; maßgeblich sind die offiziellen Koordinaten, lokale Hafeninformationen und aktuelle nautische Unterlagen.",
  region_links: [
    {
      label: "Athen & Saronischer Golf",
      href: "/reviere/mittelmeer/griechenland/athen-saronischer-golf",
    },
    { label: "Griechenland", href: "/reviere/mittelmeer/griechenland" },
    {
      label: "Richtig ankern beim Yachtcharter",
      href: "/blog/richtig-ankern-yachtcharter",
    },
  ],
};
