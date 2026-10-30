import type { NewsItem } from "../types";

const thStyle = {
  padding: "8px 10px",
  textAlign: "left" as const,
  color: "#1a4a7a",
  fontWeight: 600,
};

const tdStyle = { padding: "8px 10px", whiteSpace: "nowrap" as const };

const content = (
  <div>
    <h2>Neue Direktverbindung ab Mai 2027</h2>
    <p>
      Ryanair nimmt Zadar in den Sommerflugplan 2027 des Bodensee-Airports auf. Der erste Flug ist
      für den 3. Mai 2027 eingeplant, geflogen wird montags und freitags, im aktuellen Flugplan bis
      Ende Oktober. Die Flugzeit beträgt rund 85 Minuten.
    </p>

    {/* Flugzeiten */}
    <div className="not-prose" style={{ overflowX: "auto", margin: "1.5rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
          lineHeight: 1.5,
        }}
      >
        <thead>
          <tr style={{ background: "#e8f0fe", borderBottom: "2px solid #b8d4f0" }}>
            <th style={thStyle}>Strecke</th>
            <th style={thStyle}>Montag</th>
            <th style={thStyle}>Freitag</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
            <td style={{ padding: "8px 10px" }}>Friedrichshafen → Zadar</td>
            <td style={tdStyle}>09:50–11:15</td>
            <td style={tdStyle}>12:20–13:45</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
            <td style={{ padding: "8px 10px" }}>Zadar → Friedrichshafen</td>
            <td style={tdStyle}>08:00–09:25</td>
            <td style={tdStyle}>10:30–11:55</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Alle Zeiten sind Ortszeiten. Flugtage und Flugzeiten können sich bis zum Sommer 2027 noch
      ändern.
    </p>
    <p>
      Neu ist die Verbindung für den Bodenseeraum, nicht für die weitere Region: Ab Memmingen wird
      Zadar bereits angeflogen, und auch der Flugplan für 2027 sieht diese Flüge vor. Charterkunden
      gewinnen also eine zusätzliche, sehr wohnortnahe Direktverbindung.
    </p>

    <h2>Zadar ist mehr als eine Charterbasis</h2>
    <p>
      Wer nach Zadar fliegt, muss seine Yacht nicht in Zadar übernehmen. Vom Flughafen aus erreichen
      Sie eine Küste mit sehr vielen Charterbasen: in Zadar die Marina Zadar, auch als Marina
      Tankerkomerc bekannt, und D-Marin Borik, in Sukošan D-Marin Dalmacija, in Biograd na Moru die
      Marina Kornati und die Marina Šangulin. Weiter südlich folgen die Charterstandorte Pakoštane,
      Drage und Pirovac, schließlich die Insel Murter mit Murter, Betina und Jezera.
    </p>
    <p>
      Mit dem Flug nach Zadar erschließt sich damit ein großer Teil des norddalmatinischen
      Charterangebots.
    </p>

    <h2>Sukošan und Biograd besonders schnell erreichbar</h2>
    <p>
      Sukošan liegt rund 15 Kilometer vom Flughafen entfernt, Biograd rund 30 Kilometer. Bis in den
      Raum Murter sind es etwa 65 bis 75 Kilometer, also gut eine Stunde Fahrt. Für einen Transfer
      ist das gut planbar. An Wechseltagen in der Hauptsaison sollten Sie etwas mehr Zeit
      einrechnen.
    </p>

    <h2>Kornaten, Telašćica und Dugi Otok vor der Haustür</h2>
    <p>
      Für Segler zählt, was hinter der Marina beginnt. Je nach Ausgangsbasis liegen Ugljan und
      Pašman, Dugi Otok mit der Telašćica-Bucht, Žut und die Kornaten direkt im Törngebiet, von
      Murter aus auch Kaprije und Žirje. Geschützte Etappen und längere Schläge lassen sich hier gut
      verbinden, auch für eine Crew mit unterschiedlicher Erfahrung.
    </p>
    <p>
      Nach rund 85 Minuten Flugzeit steht Ihre Crew damit praktisch am Eingang zu einem der
      wichtigsten Charterreviere Kroatiens. Mehr dazu finden Sie auf unserer Seite zu{" "}
      <a href="/reviere/mittelmeer/kroatien/zadar" className="text-blue-600 hover:underline">
        Norddalmatien
      </a>
      .
    </p>

    <h2>Freitag anreisen, Samstag die Yacht übernehmen</h2>
    <p>
      Nach unserer langjährigen Erfahrung laufen viele Charterwochen in{" "}
      <a href="/reviere/mittelmeer/kroatien" className="text-blue-600 hover:underline">
        Kroatien
      </a>{" "}
      von Samstag bis Samstag. Dazu passt der Freitagsflug gut: Abflug in Friedrichshafen um
      12:20 Uhr, Ankunft in Zadar um 13:45 Uhr. Am Nachmittag fahren Sie in aller Ruhe nach Zadar,
      Sukošan, Biograd oder Murter und bleiben eine Nacht vor Ort.
    </p>
    <p>
      Am Samstag kann die Crew ausschlafen, einkaufen und sich in Ruhe treffen, bevor die Yacht
      übernommen wird. Der Übernahmetag beginnt so ohne Flugstress. Ob es am Samstagabend noch
      hinausgeht, hängt von Übernahme, Check-in und Crew ab.
    </p>

    <h2>Memmingen macht die Rückreise zusätzlich interessant</h2>
    <p>
      Samstags gibt es nach aktuellem Flugplan keinen Flug von Zadar nach Friedrichshafen. Nach dem
      derzeit veröffentlichten Ryanair-Flugplan ist samstags jedoch ein Rückflug von Zadar nach
      Memmingen vorgesehen: FR1962, Abflug 15:50 Uhr, Ankunft 17:10 Uhr. Bei vielen klassischen
      Samstag-Samstag-Chartern wird die Yacht bereits am Freitagabend zur Basis zurückgebracht und
      der Check-out am Samstagvormittag abgeschlossen. Bis zum Abflug um 15:50 Uhr bleibt damit in
      der Regel ein guter zeitlicher Puffer – auch für den Transfer von weiter südlich gelegenen
      Basen.
    </p>
    <p>
      Daraus ergibt sich eine Kombination, die flugtechnisch erstaunlich gut zur
      Samstag-Samstag-Charter passt:
    </p>
    <ul>
      <li>
        <strong>Hinflug:</strong> Freitag, Friedrichshafen → Zadar, 12:20–13:45 Uhr
      </li>
      <li>
        <strong>Rückflug:</strong> Samstag eine Woche später, Zadar → Memmingen, 15:50–17:10 Uhr
      </li>
    </ul>
    <p>
      Das passt nicht für jede Crew. Ankunfts- und Abflughafen unterscheiden sich, zwischen den
      beiden Flughäfen liegen auf der Straße rund 80 Kilometer. Wer sein Auto in Friedrichshafen
      abstellt, muss die Rückfahrt ab Memmingen organisieren. Für viele Crews aus Oberschwaben, vom
      Bodensee oder aus Vorarlberg können trotzdem beide Flughäfen gut erreichbar sein, entscheidend
      ist die eigene Wohnlage.
    </p>
    <p>
      Da sich Flugpläne bis Sommer 2027 noch ändern können, sollte die Verbindung vor der Buchung
      erneut geprüft werden.
    </p>

    <h2>Zwei Regionalflughäfen für die Bodenseeregion</h2>
    <p>
      Das Einzugsgebiet reicht über Friedrichshafen, Ravensburg, Konstanz, Lindau, den Bodenseekreis
      und Oberschwaben bis ins Allgäu, nach Bregenz und Dornbirn in Vorarlberg sowie nach St. Gallen,
      in den Thurgau und die angrenzende Ostschweiz. Für viele Charterkunden entsteht damit eine
      regionale Alternative zu längeren Anfahrten nach Stuttgart, München oder Zürich.
    </p>
    <p>
      Friedrichshafen und Memmingen ergänzen sich dabei. Memmingen bietet laut Flugplan an jedem
      Wochentag Flüge nach Zadar, Friedrichshafen die kurze Anreise für alle, die direkt am See
      wohnen. Welcher Flughafen besser passt, entscheiden Wohnort und Flugtag.
    </p>

    <h2>Welche Charterbasis passt zu welchem Flug?</h2>
    <p>
      Genau an dieser Stelle beginnt die eigentliche Planung. Bevor es um die Yacht geht, stellen
      sich praktische Fragen: Von wo reist die Crew an? Welcher Flugtag passt? Welche Charterbasis
      liegt dazu günstig? Wann ist die Übernahme, und welche Rückflugoption ist sinnvoll?
    </p>
    <p>
      Als unabhängige Full-Service-Yachtcharteragentur mit über 30 Jahren Erfahrung im
      Chartergeschäft stimmen wir Yacht, Vercharterer, Charterbasis, Revier, Flugzeiten, Transfer und
      die Wünsche Ihrer Crew aufeinander ab. Sie erhalten keine möglichst lange Trefferliste: Wir
      stellen eine passende Auswahl zusammen.
    </p>

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
        Sie möchten die neuen Flugmöglichkeiten für Ihren Kroatien-Törn 2027 nutzen?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir prüfen für Sie, welche Yacht und welche Charterbasis zwischen Zadar, Sukošan, Biograd und
        Murter zu Ihrer Crew und Ihren Flugzeiten passt. Als unabhängige
        Full-Service-Yachtcharteragentur beraten wir Sie persönlich und wählen gezielt passende
        Angebote unserer geprüften Charterpartner aus.
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
        Jetzt Yachtcharter für Zadar 2027 anfragen
      </a>
    </div>
  </div>
);

export const friedrichshafenZadarRyanairYachtcharter2027: NewsItem = {
  content,
  slug: "friedrichshafen-zadar-ryanair-yachtcharter-2027",
  title: "Direkt vom Bodensee ins Charterrevier: Ryanair fliegt 2027 von Friedrichshafen nach Zadar",
  excerpt:
    "Ab dem 3. Mai 2027 fliegt Ryanair zweimal pro Woche direkt von Friedrichshafen nach Zadar. Für Chartercrews aus der Bodenseeregion wird damit der Weg zu den großen Charterbasen zwischen Zadar, Sukošan, Biograd und Murter deutlich kürzer. Zusammen mit den Zadar-Flügen ab Memmingen ergeben sich neue Möglichkeiten für die klassische Samstag-Samstag-Charter.",
  content_type: "basis_hinweis",
  region: "Kroatien / Norddalmatien",
  country_or_area: "Kroatien",
  status: "angekuendigt",
  effective_from: "2027-05-03",
  published_at: "2026-10-30",
  updated_at: "2026-10-30",
  priority: "mittel",
  category: "Anreise & Logistik",
  source_name: "",
  source_url: "",
  customer_impact:
    "Ab dem 3. Mai 2027 fliegt Ryanair montags und freitags direkt von Friedrichshafen nach Zadar. Für Crews aus der Bodenseeregion wird der Weg zu den Charterbasen zwischen Zadar, Sukošan, Biograd und Murter kürzer. Samstags ist laut aktuellem Flugplan ein Rückflug Zadar–Memmingen vorgesehen.",
  action_advice:
    "Flugtag, Charterbasis und Übernahmezeit gemeinsam planen. Bei der Kombination Friedrichshafen hin, Memmingen zurück die Rückfahrt ab Memmingen vorab organisieren. Flugpläne vor der Buchung erneut prüfen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "friedrichshafen_zadar_ryanair_yachtcharter_2027",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
    { label: "Norddalmatien", href: "/reviere/mittelmeer/kroatien/zadar" },
  ],
  seo_title: "Friedrichshafen–Zadar: Ryanair-Flüge für Yachtcharter 2027",
  meta_description:
    "Ryanair fliegt ab Mai 2027 direkt von Friedrichshafen nach Zadar. Was das für Chartercrews vom Bodensee bedeutet – mit Rückflugoption über Memmingen.",
  is_featured: false,
  image: "/images/news/friedrichshafen-zadar-ryanair-yachtcharter-2027.jpg",
  imageAlt:
    "Bildmontage: Oben eine Hafenstadt mit Kirchturm, Ausflugsschiffen und Zeppelin an einem ruhigen See, unten eine Altstadt mit roten Dächern auf einer Landzunge im türkisblauen Meer, dazwischen ein weiß-blaues Passagierflugzeug im Steigflug",
  imageCaption: "Symbolische Bildmontage: vom Bodensee an die dalmatinische Küste.",
  cta_text:
    "Sie planen Ihren Kroatien-Törn 2027 und möchten Flug, Charterbasis und Yacht sinnvoll aufeinander abstimmen? Wir beraten Sie gerne persönlich.",
};
