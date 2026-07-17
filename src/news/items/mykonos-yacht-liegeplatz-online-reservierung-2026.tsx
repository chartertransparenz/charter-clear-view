import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Wer mit einer Charteryacht in Mykonos anlegen möchte, muss seit 2026 vor dem Törn
      aktiv tätig werden: Beide Häfen der Insel – der Neue Hafen Tourlos und der Alte Hafen
      Chora – verlangen eine verbindliche Online-Voranmeldung über das Buchungssystem des{" "}
      <a href="https://mykonosports.gr/en/service/yachts/" rel="nofollow">
        Mykonos Port Fund
      </a>
      . Ohne bestätigte und bezahlte Reservierung gibt es keinen Liegeplatz. Mykonos
      bleibt ein lohnenswerter Stopp im{" "}
      <a href="/reviere/mittelmeer/griechenland/kykladen">Kykladen</a>-Törn – wer sich
      rechtzeitig anmeldet, kann den Aufenthalt gut einplanen.
    </p>

    <div className="not-prose my-8 p-5 bg-blue-50 rounded-lg border border-blue-200">
      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wide mb-2">
        Wichtig vorab
      </p>
      <p className="text-gray-800 leading-relaxed">
        Das System nimmt Anmeldungen nur für die nächsten 30 Tage entgegen. Wer Mykonos
        im Juli plant, kann frühestens ab Anfang Juni buchen. Eine Anmeldung garantiert
        keinen Platz – die endgültige Zuweisung liegt im Ermessen des Port Fund. Bezahlte
        Reservierungen sind nicht rückerstattungsfähig.
      </p>
    </div>

    <h2>Zwei Häfen – zwei verschiedene Regeln</h2>
    <p>
      Mykonos hat zwei getrennte Anlaufpunkte mit unterschiedlichen Zulassungsregeln:
    </p>

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
              Hafen
            </th>
            <th
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              Zugelassene Yachttypen
            </th>
            <th
              style={{
                border: "1px solid #cbd5e1",
                padding: "8px 14px",
                textAlign: "left",
                fontWeight: 600,
              }}
            >
              Max. Länge
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Neuer Hafen Tourlos
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>
              Motoryachten, Segelyachten, RIBs
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>
              Unter 25 m ÜWL
            </td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Alter Hafen Chora
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>
              <strong>Ausschließlich Motoryachten über 25 m ÜWL</strong>
              <br />
              <span style={{ color: "#dc2626", fontSize: "0.85rem" }}>
                Segelyachten: strikt untersagt
              </span>
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>
              Nur über 25 m ÜWL
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      Für die große Mehrheit der Charteryachten ist der Neue Hafen Tourlos der einzige
      relevante Anlaufpunkt. Segelyachten sind im Alten Hafen ausdrücklich nicht
      zugelassen.
    </p>

    <h2>Der Buchungsprozess im Überblick</h2>
    <p>
      Die Anmeldung erfolgt ausschließlich online über{" "}
      <a href="https://booking.mykonosports.gr/home" rel="nofollow">
        booking.mykonosports.gr
      </a>
      . Der Ablauf ist verbindlich und läuft in vier Schritten:
    </p>
    <ol>
      <li>
        <strong>Antrag stellen:</strong> Online-Formular mit Schiffsdaten und
        Besatzungsliste einreichen. Das System akzeptiert nur Anfragen für die nächsten
        30 Tage ab Antragsdatum.
      </li>
      <li>
        <strong>Prüfung durch den Port Fund:</strong> Die Unterlagen werden geprüft.
        Unvollständige Anträge werden abgelehnt. Bei Genehmigung kommt die
        Bestätigung per E-Mail.
      </li>
      <li>
        <strong>Zahlung innerhalb von 24 Stunden:</strong> Nach Genehmigung müssen die
        Liegegebühren innerhalb von 24 Stunden bezahlt werden – sonst verfällt die
        Reservierung automatisch.
      </li>
      <li>
        <strong>Online Check-in:</strong> Mindestens 24 Stunden vor Ankunft muss der
        Online Check-in abgeschlossen sein.
      </li>
    </ol>

    <p>
      Wichtig: Auch eine genehmigte und bezahlte Reservierung ist keine absolute
      Platzgarantie. Die endgültige Liegeplatz-Zuweisung liegt im alleinigen Ermessen des
      Mykonos Port Fund. Gezahlte Beträge werden nicht erstattet – weder bei Stornierung
      noch bei Nichterscheinen (No-Show).
    </p>

    <h2>Zeitliche Einschränkungen im Neuen Hafen Tourlos</h2>
    <p>
      Für Charteryachten, die Tourlos anlaufen, gelten zwei zeitliche Regeln, die bei
      der Törnplanung unbedingt berücksichtigt werden müssen:
    </p>
    <ul>
      <li>
        <strong>Einlaufen und Auslaufen nur von 12:00 Uhr bis Sonnenuntergang.</strong>{" "}
        Nachtankünfte oder Ausfahrten nach Sonnenuntergang sind nicht gestattet.
      </li>
      <li>
        <strong>Fährsperrzeit 09:30–10:30 Uhr:</strong> Während der An- und Abfahrt
        der Linienfähren ist Ein- und Ausfahrt für alle Schiffe strikt untersagt.
      </li>
    </ul>
    <p>
      Wer von einer Nachbarinsel kommt und einen späten Nachmittag einplant, sollte die
      Entfernung entsprechend kalkulieren. Bei Unsicherheiten empfiehlt sich ein früherer
      Start, damit die 12:00-Uhr-Einlaufregel komfortabel eingehalten werden kann.
    </p>

    <h2>Pflicht für den Skipper: Auf der Insel bleiben</h2>
    <p>
      Der Skipper der Charteryacht muss während der gesamten Liegedauer auf Mykonos
      anwesend bleiben. Diese Regel ist ebenfalls Bestandteil der Buchungsbedingungen des
      Port Fund und sollte bei der Törnplanung einkalkuliert werden.
    </p>

    <h2>Liegegebühren (offizielle Angaben des Port Fund)</h2>
    <p>
      Die Gebühren werden auf Basis der Schiffslänge und der Liegedauer berechnet.
      Verbrauchsgebühren kommen hinzu:
    </p>

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
            <th style={{ border: "1px solid #cbd5e1", padding: "8px 14px", textAlign: "left", fontWeight: 600 }}>
              Kategorie
            </th>
            <th style={{ border: "1px solid #cbd5e1", padding: "8px 14px", textAlign: "left", fontWeight: 600 }}>
              Länge
            </th>
            <th style={{ border: "1px solid #cbd5e1", padding: "8px 14px", textAlign: "left", fontWeight: 600 }}>
              Gebühr
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Private Yacht (Heckanleger)
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>7,01–10 m</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>0,41 €/m/Tag</td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Private Yacht (Heckanleger)
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>10,01–15 m</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>0,47 €/m/Tag</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Private Yacht (Heckanleger)
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>Ab 15,01 m</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>0,55 €/m/Tag</td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Professionelle Yacht
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>Ab 7,01 m</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>0,20 €/m/Tag</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Seitwärtsanleger (Parabola)
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>Alle Längen</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>+25 % Aufschlag</td>
          </tr>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Wasser
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>—</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>15 €/m³</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px", fontWeight: 600 }}>
              Strom
            </td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>—</td>
            <td style={{ border: "1px solid #cbd5e1", padding: "8px 14px" }}>1 €/kWh</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={{ fontSize: "0.85rem", color: "#64748b", marginTop: "0.5rem" }}>
      Quelle: Mykonos Port Fund, mykonosports.gr (Stand: Juli 2026). Alle Angaben ohne
      Gewähr – bitte aktuelle Gebühren vor dem Törn direkt beim Port Fund prüfen.
    </p>

    <h2>Was bedeutet das für Chartercrews?</h2>
    <p>
      Mykonos ist kein spontaner Anlaufpunkt mehr. Wer die Insel in den{" "}
      <a href="/reviere/mittelmeer/griechenland/kykladen">Kykladen-Törn</a> einplant,
      sollte folgende Punkte beachten:
    </p>
    <ul>
      <li>
        <strong>Frühzeitig buchen:</strong> Das System erlaubt Anfragen nur bis zu 30
        Tage im Voraus. Für einen Aufenthalt Mitte August muss die Buchung ab Mitte Juli
        erfolgen – nicht früher, aber auch nicht zu spät.
      </li>
      <li>
        <strong>Unterlagen vollständig einreichen:</strong> Unvollständige Anträge werden
        abgelehnt. Schiffsdaten, Besatzungsliste und alle geforderten Dokumente bereithalten.
      </li>
      <li>
        <strong>24-Stunden-Zahlungsfrist einhalten:</strong> Nach der Genehmigung sofort
        zahlen. Die Reservierung verfällt sonst automatisch.
      </li>
      <li>
        <strong>Ankunft zwischen 12:00 Uhr und Sonnenuntergang:</strong> Die
        Tagestour entsprechend vorausplanen und bei der vorherigen Station rechtzeitig
        ablegen.
      </li>
      <li>
        <strong>Segelyacht in Tourlos einplanen:</strong> Segelyachten dürfen ausschließlich
        im Neuen Hafen Tourlos liegen, nicht im Alten Hafen.
      </li>
      <li>
        <strong>Skipper bleibt an Bord bzw. auf der Insel:</strong> Das ist eine
        Vertragsbedingung und sollte bei der Crew-Planung berücksichtigt werden.
      </li>
      <li>
        <strong>Keine Rückerstattung bei Änderungen:</strong> Wer nach der Buchung
        umdisponiert, verliert die Liegegebühren. Mykonos sollte daher nur dann fest
        eingeplant werden, wenn die Crew wirklich dort anlegen möchte.
      </li>
    </ul>

    <h2>Praktischer Hinweis vor dem Törn</h2>
    <ul>
      <li>
        Buchung über{" "}
        <a href="https://booking.mykonosports.gr/home" rel="nofollow">
          booking.mykonosports.gr
        </a>{" "}
        – frühestens 30 Tage vor dem geplanten Anlegedatum
      </li>
      <li>Bestätigung und Bezahlung sofort nach Genehmigung sicherstellen</li>
      <li>Einlaufzeit 12:00–Sonnenuntergang bei der Törnplanung fix einrechnen</li>
      <li>
        Bei Fragen: Kontakt zum Port Fund über{" "}
        <a href="mailto:marina@mykonosports.gr">marina@mykonosports.gr</a>
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
        Planen Sie einen Kykladen-Törn mit Mykonos?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Route und Buchungsschritte realistisch zu planen –
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
      Mykonos ist als Kykladen-Stopp weiterhin möglich und lohnend – erfordert aber mehr
      Vorlauf als früher. Wer die Online-Buchung rechtzeitig in die Törnvorbereitung
      einbaut, die Einlaufzeiten kennt und die Buchungsbedingungen versteht, kann den
      Aufenthalt entspannt einplanen. Für Segelyachten ist Tourlos der einzige Hafen;
      Spontananläufe sind mit diesem System nicht mehr möglich.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Mykonos Liegeplatz 2026: Online-Voranmeldung beim Mykonos Port Fund zwingend
        erforderlich. System öffnet frühestens 30 Tage vor Ankunft. Zahlung innerhalb
        24 h nach Genehmigung, sonst Reservierung weg. Ankunft nur 12:00–Sonnenuntergang.
        Segelyachten ausschließlich Neuer Hafen Tourlos. Keine Rückerstattung.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quelle: Mykonos Port Fund, offizielle Informationsseite{" "}
      <a href="https://mykonosports.gr/en/service/yachts/" rel="nofollow">
        mykonosports.gr/en/service/yachts/
      </a>
      . Buchungssystem:{" "}
      <a href="https://booking.mykonosports.gr/home" rel="nofollow">
        booking.mykonosports.gr
      </a>
      . Redaktionsstand: 17. Juli 2026. Alle Angaben ohne Gewähr – bitte vor dem Törn
      aktuelle offizielle Informationen und Buchungsbedingungen direkt beim Mykonos
      Port Fund prüfen.
    </p>
  </div>
);

export const mykonosYachtLiegeplatzOnlineReservierung2026: NewsItem = {
  content,
  slug: "mykonos-yacht-liegeplatz-online-reservierung-2026",
  title:
    "Mykonos 2026: Online-Reservierung für Charteryachten jetzt Pflicht",
  excerpt:
    "Wer mit einer Charteryacht in Mykonos anlegen möchte, braucht seit 2026 eine Online-Voranmeldung beim Mykonos Port Fund. Das System öffnet nur 30 Tage im Voraus – Einlaufzeiten, Hafenregeln und Stornobedingungen sollten Chartercrews kennen.",
  content_type: "basis_hinweis",
  region: "Griechenland / Mykonos / Kykladen",
  country_or_area: "Griechenland",
  status: "in_kraft",
  effective_from: "2026-01-01",
  published_at: "2026-07-17",
  updated_at: "2026-07-17",
  priority: "hoch",
  category: "Marinas & Infrastruktur",
  source_name: "Mykonos Port Fund (mykonosports.gr)",
  source_url: "https://mykonosports.gr/en/service/yachts/",
  customer_impact:
    "Charteryachten können Mykonos nicht mehr spontan anlaufen. Online-Voranmeldung bis 30 Tage im Voraus, Zahlung innerhalb 24 h nach Genehmigung, Einlaufzeit nur 12:00–Sonnenuntergang, keine Rückerstattung. Segelyachten ausschließlich Neuer Hafen Tourlos.",
  action_advice:
    "Frühestens 30 Tage vor Ankunft über booking.mykonosports.gr anmelden. Unterlagen vollständig einreichen. Nach Genehmigung sofort zahlen. Einlaufzeit 12:00–Sonnenuntergang einplanen. Bei Fragen: marina@mykonosports.gr.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kykladen",
  canonical_topic_key: "mykonos_yacht_liegeplatz_online_reservierung_2026",
  seo_title:
    "Mykonos Charteryacht 2026: Online-Reservierung, Regeln & Gebühren",
  meta_description:
    "Charteryachten müssen Mykonos 2026 vorab online buchen. Alles zu Buchungsprozess, Einlaufzeiten, Hafenregeln und Liegegebühren aus der offiziellen Quelle.",
  is_featured: true,
  image: "/images/news/mykonos-yacht-liegeplatz-online-reservierung-2026.jpg",
  imageAlt:
    "Segelyachten und Motorboote im Hafen von Mykonos bei Sonnenuntergang, weiße Kykladenhäuser im Hintergrund",
  imageCaption:
    "Hafen von Mykonos mit Segelyachten und Motorbooten beim Einlaufen – seit 2026 ist eine Online-Voranmeldung Pflicht. © Dmitry Rukhlenko / Shutterstock",
  region_links: [
    {
      label: "Kykladen",
      href: "/reviere/mittelmeer/griechenland/kykladen",
    },
    {
      label: "Griechenland",
      href: "/reviere/mittelmeer/griechenland",
    },
    {
      label: "Yachtcharter Griechenland – welches Revier passt?",
      href: "/blog/yachtcharter-griechenland-welches-revier-passt",
    },
  ],
};
