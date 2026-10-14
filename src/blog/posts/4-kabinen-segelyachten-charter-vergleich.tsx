import type { ReactNode } from "react";
import type { BlogPost } from "../types";

const IMG = "/images/blog/4-kabinen-segelyachten-charter-vergleich";

/* ─────────────────────────────────────────────────────────────────────────
   Partnerbild mit sichtbarer Bildunterschrift + Credit.
   Bewusst ohne maxHeight/objectFit, damit Cockpit- und Innenaufnahmen
   nicht beschnitten werden.
───────────────────────────────────────────────────────────────────────── */
const PartnerImage = ({
  src,
  alt,
  width,
  height,
  caption,
  credit,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  credit: string;
}) => (
  <figure style={{ margin: "2.5rem 0", padding: 0 }}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ width: "100%", height: "auto", borderRadius: "10px", display: "block" }}
    />
    <figcaption
      style={{
        marginTop: "10px",
        fontSize: "0.875rem",
        color: "#6b7280",
        lineHeight: 1.55,
      }}
    >
      <span style={{ fontStyle: "italic" }}>{caption}</span>
      <br />
      <span>Foto: {credit} – vielen Dank für die freundliche Bereitstellung des Bildes.</span>
    </figcaption>
  </figure>
);

/* ─────────────────────────────────────────────────────────────────────────
   CTA-Box – explizite Farben auf jedem Textknoten (siehe CLAUDE.md §12)
───────────────────────────────────────────────────────────────────────── */
const CtaBox = ({
  headline,
  body,
  buttonLabel,
  size = "md",
}: {
  headline: string;
  body: ReactNode;
  buttonLabel: string;
  size?: "md" | "lg";
}) => (
  <div
    style={{
      background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
      borderRadius: "12px",
      padding: size === "lg" ? "32px 36px" : "28px 32px",
      margin: size === "lg" ? "48px 0 24px" : "40px 0",
    }}
  >
    <p
      style={{
        fontSize: size === "lg" ? "1.15rem" : "1.05rem",
        fontWeight: 700,
        marginBottom: "8px",
        color: "#ffffff",
      }}
    >
      {headline}
    </p>
    {typeof body === "string" ? (
      <p style={{ marginBottom: "20px", lineHeight: 1.65, color: "#e8edf2" }}>{body}</p>
    ) : (
      body
    )}
    <a
      href="/charter-anfrage"
      style={{
        display: "inline-block",
        background: "#e8a020",
        color: "#ffffff",
        padding: size === "lg" ? "14px 32px" : "12px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: size === "lg" ? "1rem" : "0.95rem",
      }}
    >
      {buttonLabel}
    </a>
  </div>
);

/* Stärken / „Darauf würden wir achten" nebeneinander */
const ProCheck = ({ pros, checks }: { pros: string[]; checks: string[] }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "16px",
      margin: "1.5rem 0 2rem",
    }}
  >
    <div style={{ background: "#f0f7f4", borderRadius: "10px", padding: "18px 20px" }}>
      <p style={{ fontWeight: 700, color: "#14532d", marginBottom: "8px", fontSize: "1rem" }}>
        Stärken
      </p>
      <ul style={{ margin: 0 }}>
        {pros.map((t) => (
          <li key={t} style={{ fontSize: "1rem" }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
    <div style={{ background: "#fdf6ec", borderRadius: "10px", padding: "18px 20px" }}>
      <p style={{ fontWeight: 700, color: "#7c4a03", marginBottom: "8px", fontSize: "1rem" }}>
        Darauf würden wir achten
      </p>
      <ul style={{ margin: 0 }}>
        {checks.map((t) => (
          <li key={t} style={{ fontSize: "1rem" }}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

/* „Unsere Einschätzung" */
const Verdict = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      borderLeft: "4px solid #1a5276",
      background: "#f8fafc",
      borderRadius: "0 10px 10px 0",
      padding: "16px 20px",
      margin: "0 0 2.5rem",
    }}
  >
    <p style={{ fontWeight: 700, color: "#0f3460", marginBottom: "6px", fontSize: "1rem" }}>
      Unsere Einschätzung
    </p>
    <p style={{ marginBottom: 0, color: "#374151", fontSize: "1.05rem" }}>{children}</p>
  </div>
);

const th = { padding: "12px 14px", textAlign: "left" as const, fontWeight: 600, verticalAlign: "top" as const };
const td = { padding: "12px 14px", color: "#374151", verticalAlign: "top" as const };

/* ─────────────────────────────────────────────────────────────────────────
   Artikel
───────────────────────────────────────────────────────────────────────── */
const content = (
  <div>
    {/* ── Einleitung ─────────────────────────────────────────────────── */}
    <p>
      Vier Kabinen, rund 45 Fuß und Platz für acht Personen – auf den ersten Blick sehen viele
      Charterangebote sehr ähnlich aus. In der Praxis unterscheiden sich eine Bavaria Cruiser 46,
      eine Beneteau Oceanis 46.1 oder eine Dufour 470 aber deutlich. Und diese Unterschiede merkt
      eine Crew nicht erst beim Segeln, sondern jeden Morgen beim Frühstück, beim Anlegen, beim
      Duschen und abends im Cockpit.
    </p>
    <p>
      Wer eine Woche mit Freunden oder Familie an Bord verbringt, lebt auf rund 14 Metern
      Bootslänge sehr eng zusammen. Ob zwei oder vier Nasszellen an Bord sind, ob die vierte
      Kabine ein Doppelbett oder ein Stockbett hat und ob acht Erwachsene im Cockpit gemeinsam
      essen können, entscheidet oft mehr über die Stimmung an Bord als ein halber Knoten mehr
      Geschwindigkeit.
    </p>
    <p>
      Deshalb beantworten wir in diesem Artikel nicht die Frage, welche Yacht „die beste“ ist.
      Wir zeigen, <strong>welche 4-Kabinen-Segelyacht zu welcher Chartercrew passt</strong> – und
      worauf Sie bei einem konkreten Charterangebot achten sollten. Grundlage sind
      Herstellerangaben, unabhängige Yachttests und unsere Erfahrung aus mehr als 30 Jahren
      Yachtcharter.
    </p>

    <CtaBox
      headline="Sie wissen noch nicht, welches 4-Kabinen-Modell zu Ihrer Crew passt?"
      body="Wir vergleichen für Sie die tatsächlich verfügbaren Yachten – nicht nur nach Preis, sondern auch nach Layout, Baujahr, Ausstattung und Vercharterer."
      buttonLabel="Passende Yacht finden"
    />

    {/* ── Warum beliebt ──────────────────────────────────────────────── */}
    <h2 id="warum-beliebt">Warum 4 Kabinen um 45 Fuß so beliebt sind</h2>
    <p>
      In unserer täglichen Charterpraxis gehören Segelyachten von etwa 40 bis 46 Fuß mit vier
      Kabinen zu den besonders häufig nachgefragten Größen. Das hat handfeste Gründe:
    </p>
    <ul>
      <li>
        <strong>Die Kosten verteilen sich auf viele Schultern.</strong> Charterpreis, Liegegebühren,
        Diesel und Bordkasse werden durch acht statt durch vier oder sechs Personen geteilt.
      </li>
      <li>
        <strong>Die Größe ist noch gut beherrschbar.</strong> Eine Monohull-Yacht um 14 Meter lässt
        sich von einer erfahrenen Crew gut führen – auch in vollen Häfen mit Mooringleinen.
      </li>
      <li>
        <strong>Die Auswahl ist groß.</strong> In nahezu allen großen Mittelmeerrevieren – von{" "}
        <a href="/reviere/mittelmeer/kroatien">Kroatien</a> über Griechenland und die Türkei bis
        nach Sardinien und auf die Balearen – gehört diese Klasse zum Kernangebot der
        Charterflotten.
      </li>
      <li>
        <strong>Der Preisabstand zum Katamaran ist spürbar.</strong> Wer acht Personen
        unterbringen möchte, bekommt mit einer 4-Kabinen-Monohull in der Regel die günstigere
        Lösung.
      </li>
    </ul>
    <p>
      Gleichzeitig ist diese Klasse besonders heterogen. Hinter „4 Kabinen, 45 Fuß“ verbergen sich
      Yachten mit sehr unterschiedlicher Breite, Cockpitgestaltung und Kabinenaufteilung – und
      vor allem mit sehr unterschiedlicher Ausstattung.
    </p>

    {/* ── Für wie viele Personen ─────────────────────────────────────── */}
    <h2 id="wie-viele-personen">Für wie viele Personen ist eine 4-Kabinen-Yacht wirklich komfortabel?</h2>
    <p>
      Eine 4-Kabinen-Segelyacht um 44 bis 47 Fuß eignet sich nach unserer Erfahrung typischerweise
      für:
    </p>
    <ul>
      <li><strong>6 Personen</strong> mit sehr viel Komfort – eine Kabine bleibt frei für Gepäck oder als Rückzugsort.</li>
      <li><strong>8 Personen</strong> mit vier nutzbaren Kabinen – die klassische Belegung.</li>
      <li><strong>zwei Familien</strong> mit Kindern, bei denen die Kinder gern eine gemeinsame Kabine teilen.</li>
      <li><strong>vier Paare</strong> – vorausgesetzt, alle vier Kabinen haben ein vollwertiges Doppelbett.</li>
      <li><strong>größere Familien</strong>, bei denen auch eine kleinere Kabine gut belegt werden kann.</li>
      <li>
        <strong>teilweise 8 + 2 Personen</strong> – wobei die zusätzlichen Schlafplätze meist im
        umgebauten Salon liegen. Das ist für zwei Kinder oder eine kurze Etappe in Ordnung, als
        Dauerlösung für zwei Erwachsene aber selten komfortabel.
      </li>
    </ul>
    <p>
      Ein Punkt, der in Charterangeboten oft untergeht: <strong>„Zugelassen für 10 Personen“ ist
      nicht gleichbedeutend mit „für 10 Erwachsene komfortabel“.</strong> Die Zulassung beschreibt,
      wie viele Personen sicher an Bord sein dürfen. Wie angenehm eine Woche mit zehn Erwachsenen
      wird, hängt von Kojen, Nasszellen, Stauraum und Cockpit ab – und hier stoßen auch große
      45-Füßer an Grenzen. Wer mit zehn Erwachsenen reisen möchte, sollte zumindest auch größere
      Monohulls oder einen Katamaran in den Vergleich aufnehmen.
    </p>

    {/* ── Schnellvergleich ───────────────────────────────────────────── */}
    <h2 id="schnellvergleich">Sechs beliebte Modelle im Schnellvergleich</h2>
    <p>
      Die folgende Übersicht ist bewusst qualitativ. Sie beruht auf Herstellerangaben,
      veröffentlichten Yachttests und unserer Charterpraxis – und sie beschreibt Tendenzen, keine
      Rangfolge. Gerade bei Cockpit und Badeplattform entscheidet die konkrete Ausstattung der
      einzelnen Yacht.
    </p>
    <div style={{ overflowX: "auto", margin: "2rem 0" }}>
      <table style={{ width: "100%", minWidth: "820px", borderCollapse: "collapse", fontSize: "0.92rem", lineHeight: 1.5 }}>
        <thead>
          <tr style={{ background: "#0f3460", color: "#fff" }}>
            <th style={th}>Modell</th>
            <th style={th}>Platzgefühl</th>
            <th style={th}>Cockpit</th>
            <th style={th}>Segelcharakter</th>
            <th style={th}>Handling</th>
            <th style={th}>Badeplattform</th>
            <th style={th}>Besonders interessant für</th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Bavaria Cruiser 46",
              "viel Volumen, bewährte Raumaufteilung",
              "großer fester Tisch, klassisch",
              "gutmütig, eher komfortorientiert",
              "unkompliziert, vertraut für viele Skipper",
              "groß, klappbar",
              "Crews, die ein bewährtes Allround-Schiff suchen",
            ],
            [
              "Beneteau Oceanis 46.1",
              "sehr breit wirkend durch Rumpfkante",
              "lang, mit großem Tisch",
              "ausgewogen, solide Leistung",
              "Winschen an den Steuerständen",
              "absenkbar, teils elektrisch",
              "vier Paare, Komfort plus gute Segeleigenschaften",
            ],
            [
              "Dufour 470",
              "größte Breite im Vergleich",
              "sehr großzügig, teils mit Außenküche",
              "kraftvoll, komfortorientiert",
              "Charterversion mit vereinfachter Leinenführung",
              "groß, mittig absenkbar",
              "Crews, die viel Zeit vor Anker verbringen",
            ],
            [
              "Hanse 458",
              "etwas weniger Volumen als die breitesten Modelle",
              "funktional, auf Bedienung ausgelegt",
              "etwas sportlicher",
              "Selbstwendefock, einfach mit kleiner Crew",
              "vorhanden, je nach Ausstattung",
              "segelorientierte Crews",
            ],
            [
              "Jeanneau Sun Odyssey 440",
              "kompakter, kürzeste Yacht im Vergleich",
              "gut nutzbar, offener Übergang zum Heck",
              "agil, segelfreudig",
              "durchgehende, stufenlose Seitendecks",
              "offenes Heck mit Badestufe",
              "Crews, die gern segeln und es übersichtlich mögen",
            ],
            [
              "Elan Impression 45.1",
              "schmalste Yacht im Vergleich",
              "geteilte Tische, Liegefläche",
              "ausgewogen, gutes Verhältnis Komfort/Leistung",
              "einfach, gut mit kleiner Crew",
              "je nach Version groß und klappbar",
              "Familien und Crews mit Fokus auf Preis-Leistung",
            ],
          ].map((row, i) => (
            <tr key={row[0]} style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff", borderBottom: "1px solid #e5e7eb" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={j === 0 ? { ...td, fontWeight: 600, color: "#1a5276", whiteSpace: "nowrap" } : td}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>
      Eine Gemeinsamkeit vorweg: Alle sechs Modelle gibt es in mehreren Layoutvarianten. Wie viele
      Kabinen, Doppelbetten und Nasszellen eine konkrete Charteryacht hat, steht im Datenblatt der
      jeweiligen Yacht – nicht im Prospekt des Herstellers.
    </p>

    {/* ── Bavaria Cruiser 46 ─────────────────────────────────────────── */}
    <h3 id="bavaria-cruiser-46">Bavaria Cruiser 46</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Die Bavaria Cruiser 46 gehört aus unserer
      Erfahrung seit Jahren zu den sehr häufig gebuchten Charteryachten dieser Klasse. Viele
      Skipper kennen sie bereits von früheren Törns – und genau das ist einer ihrer Vorteile: Man
      findet sich an Bord schnell zurecht. Das Schiff stammt aus der Feder von Farr Yacht Design
      und wurde ab 2013 als Weiterentwicklung der Cruiser 45 gebaut, mit neuem Deck, Cockpit und
      Innenausbau.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Das Raumkonzept ist auf viele Menschen an Bord ausgelegt. Der
      Salon bietet eine große Sitzgruppe, die lange, gerade Pantry hat für diese Größe viel
      Arbeitsfläche und Stauraum – ein Vorteil, wenn für acht Personen gekocht wird. Die große
      klappbare Badeplattform ist im Charterurlaub ein echter Mehrwert: Hier wird gebadet,
      geduscht, das Dinghy bestiegen und abends gesessen. Mit gut 4,35 Metern Breite ist die
      Cruiser 46 geräumig, ohne in engen Häfen unhandlich zu wirken.
    </p>
    <p>
      <strong>Mögliche Nachteile:</strong> Die 4-Kabinen-Version entsteht, indem die große
      Eignerkabine im Vorschiff durch eine Trennwand in zwei Kabinen geteilt wird. Diese beiden
      Bugkabinen sind entsprechend kleiner als die Achterkabinen. Fachtests haben zudem die
      Belüftung der Nasszellen und die etwas weniger bequemen Cockpitsitze kritisiert. Beim
      Segeln ist sie gutmütig und manövriert sauber, wirkt aber eher komfort- als sportorientiert.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für Crews, die ein bewährtes, verlässliches Schiff suchen,
      für zwei Familien und für Gruppen, bei denen nicht jeder Gast den gleichen Kabinenanspruch
      hat.
    </p>

    <PartnerImage
      src={`${IMG}/bavaria-cruiser-46-salon-waypoint-charter.jpg`}
      alt="Salon einer Bavaria Cruiser 46 mit großer U-förmiger Sitzgruppe, ausklappbarem Holztisch und Niedergang"
      width={1280}
      height={576}
      caption="Der Salon der Bavaria Cruiser 46: Die große Sitzgruppe ist bei schlechtem Wetter der gemeinsame Treffpunkt für die ganze Crew."
      credit="WayPoint Charter"
    />

    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Da die Cruiser 46 über viele Jahre
      gebaut wurde, ist die Bandbreite in den Charterflotten groß. Es gibt Exemplare mit drei und
      mit zwei Nasszellen, mit Rollgroß oder Lattengroß, mit und ohne Bugstrahlruder und mit sehr
      unterschiedlichem Pflegezustand. Ein Blick auf Baujahr, letzte Refits und Ausstattungsliste
      lohnt hier besonders.
    </p>
    <ProCheck
      pros={[
        "Bewährtes Raumkonzept, viele Skipper kennen das Schiff",
        "Lange Pantry mit viel Arbeitsfläche",
        "Große Badeplattform",
        "Breite Auswahl in vielen Revieren",
      ]}
      checks={[
        "Bugkabinen in der 4-Kabinen-Version spürbar kleiner",
        "Anzahl der Nasszellen je Yacht prüfen (zwei oder drei)",
        "Baujahr, Pflegezustand und Ausstattung variieren stark",
        "Cockpitpolster und Bimini – im Sommer entscheidend",
      ]}
    />
    <Verdict>
      Die Cruiser 46 ist ein solides Allround-Schiff für acht Personen. Für vier Paare würden wir
      vor allem darauf achten, wer die beiden kleineren Bugkabinen bezieht – und bei älteren
      Exemplaren vor der Buchung genau nachfragen, was zuletzt erneuert wurde.
    </Verdict>

    {/* ── Oceanis 46.1 ───────────────────────────────────────────────── */}
    <h3 id="oceanis-46-1">Beneteau Oceanis 46.1</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Die Oceanis 46.1 (das Titelbild dieses
      Artikels zeigt eine Charteryacht dieses Modells) wirkt an Bord deutlich größer, als es die
      Länge vermuten lässt. Der Grund ist die ausgeprägte Rumpfkante knapp über der Wasserlinie:
      Der Rumpf wird dadurch oberhalb der Wasserlinie breiter, während der Bug vergleichsweise schlank bleibt.
      Mit rund 4,50 Metern Breite und etwa 14,60 Metern Länge über alles trägt sie viel Volumen
      bis weit nach achtern – das merkt man im Cockpit und in den Achterkabinen.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Das Cockpit ist lang und gut proportioniert, mit zwei
      Steuerständen und einem großen Cockpittisch, an dem acht Personen essen können. Alle
      Winschen sitzen an den Steuerständen, sodass der Skipper Segel bedienen kann, ohne die
      Gäste am Tisch zu stören. Die Badeplattform lässt sich – je nach Ausstattung elektrisch –
      absenken und wird so zur kleinen Terrasse am Wasser. In Tests zeigte die Yacht für ihre
      Größe ein angenehm ausgewogenes Segelverhalten.
    </p>
    <p>
      <strong>Mögliche Nachteile:</strong> Die Bandbreite der Layouts ist groß – von drei bis zu
      fünf Kabinen. In einer verbreiteten 4-Kabinen-Variante ist eine der Kabinen eine
      Stockbettkabine und es gibt zwei Nasszellen. Für vier Paare ist das eine andere Ausgangslage
      als vier Doppelkabinen mit vier Nasszellen. Ist ein Rollgroß verbaut, ist das bequem, kostet
      aber etwas Segelleistung – das merkten auch Tester an.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für Crews, die Komfort und ein großzügiges Cockpit suchen,
      aber trotzdem gern segeln – und für vier Paare, sofern das Layout passt.
    </p>
    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Vor allem auf das Layout: Wie viele
      echte Doppelkabinen, wie viele Nasszellen? Dazu Rollgroß oder Lattengroß, Bugstrahlruder,
      elektrische Badeplattform und – bei Revieren mit Hitze – Bimini und Cockpitpolster.
    </p>
    <ProCheck
      pros={[
        "Großes Raumgefühl durch Rumpfkante und Breite",
        "Langes Cockpit mit großem Tisch",
        "Winschen an den Steuerständen – ruhiger Cockpitbetrieb",
        "Ausgewogenes Segelverhalten",
      ]}
      checks={[
        "4-Kabinen-Layout: Stockbettkabine oder vier Doppelkabinen?",
        "Anzahl der Nasszellen (zwei bis vier möglich)",
        "Rollgroß oder Lattengroß",
        "Funktion der Badeplattform (elektrisch oder manuell)",
      ]}
    />
    <Verdict>
      Die Oceanis 46.1 ist besonders interessant für Crews, die viel Platz an Deck schätzen und
      trotzdem nicht auf ein gutes Segelgefühl verzichten möchten. Für vier Paare würden wir bei
      diesem Modell gezielt nach einer Version mit vier Doppelkabinen suchen.
    </Verdict>

    {/* ── Dufour 470 ─────────────────────────────────────────────────── */}
    <h3 id="dufour-470">Dufour 470</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Mit ihrer großen Breite trägt die Dufour 470
      viel Volumen bis weit nach achtern. Für Chartercrews merkt man das vor allem im Cockpit und
      bei der Bewegungsfreiheit an Deck. Mit rund 4,74 Metern ist sie die breiteste Yacht in diesem
      Vergleich, bei einer Länge über alles von etwa 14,85 Metern. Sie kam 2021 auf den Markt und
      gehört damit zu den jüngeren Modellen in den Charterflotten.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Das Cockpit ist sehr großzügig. Je nach Ausstattung gibt es
      am Heck eine Außenküche mit Spüle und Plancha – im Sommer ein echter Gewinn, weil Kochen und
      Grillen draußen stattfinden und der Salon kühl bleibt. Die Badeplattform entsteht durch das
      mittig abklappbare Heck, mit Stufen auf beiden Seiten. Dufour bietet eine eigene
      Charter-Decksversion („Easy“) an, bei der Schoten und Strecker zu einer Winsch hinten im
      Cockpit laufen; die Seitendecks sind dort mit rutschfestem GFK statt Teak belegt.
    </p>

    <PartnerImage
      src={`${IMG}/dufour-470-heck-badeplattform-angelina.jpg`}
      alt="Heck einer Dufour 470 mit abgeklappter Badeplattform, zwei Steuerrädern und Bimini über dem Cockpit"
      width={1600}
      height={1066}
      caption="Das mittig abklappbare Heck der Dufour 470 wird zur großen Badeplattform – mit Stufen auf beiden Seiten zum Cockpit."
      credit="Angelina"
    />

    <p>
      <strong>Mögliche Nachteile:</strong> Die Werft bietet vier Grundlayouts an – von drei Kabinen
      mit drei Nasszellen bis zu vier Kabinen plus Pullman-Kabine. Gerade die Varianten mit
      Pullman-Kabine oder zusätzlicher Skipperkabine erhöhen die Bettenzahl, nicht zwingend den
      Komfort. Die große Breite bringt außerdem ein höheres Gewicht und in engen Boxen etwas mehr
      Aufmerksamkeit beim Anlegen mit sich.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für Crews, die viel Zeit vor Anker und im Cockpit
      verbringen, für Komforturlaub und für zwei Familien, bei denen das Leben an Deck im
      Mittelpunkt steht.
    </p>
    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Ist die Außenküche tatsächlich an Bord
      oder steht sie bloß im Prospekt? Welches der Layouts liegt vor – vier Kabinen mit vier Nasszellen oder
      eine Version mit Pullman-Kabine und weniger Bädern? Und welche Decksversion: Die
      Charterausführung ist bewusst einfach gehalten.
    </p>
    <ProCheck
      pros={[
        "Sehr großzügiges Cockpit und viel Bewegungsfläche",
        "Optionale Außenküche mit Spüle und Plancha",
        "Große, mittig absenkbare Badeplattform",
        "Layout mit vier Kabinen und vier Nasszellen möglich",
      ]}
      checks={[
        "Außenküche ist Option – an der konkreten Yacht prüfen",
        "Pullman- oder Skipperkabine ≠ zusätzliche Doppelkabine",
        "Breite und Gewicht in engen Häfen einplanen",
        "Decksversion und Leinenführung erfragen",
      ]}
    />
    <Verdict>
      Die Dufour 470 würden wir vor allem Crews empfehlen, die ihren Törn mit vielen Ankerbuchten,
      langen Abenden an Deck und gemeinsamen Mahlzeiten draußen planen. Dafür ist sie in dieser
      Klasse eine der stärksten Optionen – vorausgesetzt, die Ausstattung der konkreten Yacht
      passt.
    </Verdict>

    {/* ── Hanse 458 ──────────────────────────────────────────────────── */}
    <h3 id="hanse-458">Hanse 458</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Die Hanse 458 ist die Yacht in diesem
      Vergleich, die am deutlichsten auf einfaches Segeln ausgelegt ist. Standard ist eine
      Selbstwendefock: Bei der Wende muss niemand Schoten bedienen, das Vorsegel geht von allein
      über. Auch die Großschot liegt in Reichweite der Steuerstände. Fachtests beschreiben die
      Yacht als leicht zu segeln – selbst mit zwei Personen.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Für eine Crew, in der nicht alle Mitsegler erfahren sind, ist
      dieses Konzept ein großer Vorteil. Der Skipper kann Manöver weitgehend allein fahren,
      während der Rest der Crew entspannt sitzen bleibt. Bei rund 14 Metern Länge über alles und
      etwa 4,38 Metern Breite ist sie etwas schlanker als die breitesten Modelle im Vergleich und
      eher auf Segelvergnügen als auf maximales Volumen ausgelegt.
    </p>
    <p>
      <strong>Mögliche Nachteile:</strong> Fachtests haben ihr etwas weniger Raumgefühl unter Deck
      und im Cockpit bescheinigt als manchen Wettbewerbern. Bei achterlichem Wind fehlt einer
      Selbstwendefock etwas Segelfläche – ob ein zusätzliches Vorwindsegel an Bord ist, hängt von
      der jeweiligen Yacht ab. Hanse bietet traditionell viele Layoutvarianten an; entsprechend
      unterschiedlich sind die Charterversionen.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für segelorientierte Crews, für Skipper mit kleiner aktiver
      Mannschaft und für Gruppen, die gern auch längere Schläge segeln.
    </p>

    <PartnerImage
      src={`${IMG}/hanse-458-cockpit-charter-novak.jpg`}
      alt="Cockpit einer Hanse 458 mit zwei Steuerrädern, Teakboden, gepolsterten Cockpitbänken, Kompass in der Mitte und Sprayhood"
      width={1000}
      height={750}
      caption="Cockpit der Hanse 458: Die beiden Steuerstände liegen weit außen, dazwischen bleibt ein freier Durchgang zum Heck."
      credit="Charter Novak"
    />
    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Layout und Anzahl der Nasszellen,
      Rollgroß oder Lattengroß, elektrische Winschen, Bugstrahlruder – und ob für
      Raumschotskurse ein Gennaker oder Code 0 verfügbar ist.
    </p>
    <ProCheck
      pros={[
        "Selbstwendefock – Wenden ohne Schotarbeit",
        "Leinen in Reichweite der Steuerstände",
        "Etwas sportlicheres Segelgefühl",
        "Gut mit kleiner aktiver Crew zu segeln",
      ]}
      checks={[
        "Etwas weniger Raumgefühl als bei den breitesten Modellen",
        "Raumschots weniger Segelfläche – Zusatzsegel erfragen",
        "Layoutvarianten stark unterschiedlich",
        "Cockpitgröße für acht Personen realistisch einschätzen",
      ]}
    />
    <Verdict>
      Die Hanse 458 ist für uns die naheliegende Wahl für Crews, bei denen das Segeln im
      Mittelpunkt steht und an Bord nicht jeder mit anpacken möchte. Wer mit acht Erwachsenen vor
      allem Platz sucht, sollte sie direkt mit den breiteren Modellen vergleichen.
    </Verdict>

    {/* ── Sun Odyssey 440 ────────────────────────────────────────────── */}
    <h3 id="sun-odyssey-440">Jeanneau Sun Odyssey 440</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Das prägende Merkmal der Sun Odyssey 440 ist
      das Walkaround-Deck: Die Seitendecks laufen sanft geneigt bis ins Cockpit und bis zum Heck
      durch. Man kommt vom Steuerstand zum Bug, ohne über einen Süllrand steigen zu müssen. Im
      Charteralltag bedeutet das: Beim Anlegen, beim Ankern und beim Bedienen der Mooringleinen
      bewegt sich die Crew sicherer und schneller an Deck.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Der Bewegungsfluss an Deck ist in dieser Klasse vorbildlich.
      Das Cockpit reicht bis an die Heckkante, eine Heckpforte öffnet zur Badestufe. Die Yacht
      gilt als segelfreudig mit vergleichsweise großem Rigg für ein Fahrtenschiff. Mit rund 13,40
      Metern Länge über alles und etwa 4,29 Metern Breite ist sie die kompakteste Yacht in diesem
      Vergleich – in vollen Häfen und beim Anlegen ein Vorteil.
    </p>

    <PartnerImage
      src={`${IMG}/sun-odyssey-440-cockpit-charter-novak.jpg`}
      alt="Cockpit einer Jeanneau Sun Odyssey 440 mit zwei Steuerrädern, Teakboden, Cockpittisch und Sprayhood"
      width={1163}
      height={872}
      caption="Cockpit der Sun Odyssey 440: Die Winschen sitzen nah an den Steuerständen, der Tisch in der Mitte bleibt für die Crew frei."
      credit="Charter Novak"
    />

    <p>
      <strong>Mögliche Nachteile:</strong> In der 4-Kabinen-Version haben die Kabinen im Vor- und
      Achterschiff kleinere Doppelbetten. Unabhängig vom Layout gibt es zwei Nasszellen. Ein
      bekannter Yachtkonstrukteur merkte in seinem Test an, dass es im Salon für acht Personen beim
      Essen eng wird. Für acht Erwachsene ist sie daher eher die sportlich-kompakte als die
      komfortable Lösung.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für Crews, die gern segeln, für Familien und für sechs
      Erwachsene mit hohem Komfortanspruch. Für acht Erwachsene funktioniert sie gut, wenn das
      Leben ohnehin im Cockpit stattfindet.
    </p>
    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Kabinenzahl und Bettgrößen, Bimini,
      Bugstrahlruder und Rollgroß oder Lattengroß. Mit der Sun Odyssey 455 hat Jeanneau inzwischen
      einen Nachfolger vorgestellt. In den Flotten unserer Charterpartner finden wir die Sun
      Odyssey 440 weiterhin regelmäßig.
    </p>
    <ProCheck
      pros={[
        "Walkaround-Deck ohne Stufen – sichere Wege an Deck",
        "Kompakt und gut handhabbar in Häfen",
        "Segelfreudig",
        "Offenes Heck mit Zugang zur Badestufe",
      ]}
      checks={[
        "Zwei Nasszellen auch in der 4-Kabinen-Version",
        "Kleinere Doppelbetten in der 4-Kabinen-Version",
        "Salon für acht Personen eher knapp",
        "Ausstattung je nach Version und Baujahr prüfen",
      ]}
    />
    <Verdict>
      Die Sun Odyssey 440 ist besonders interessant für Crews, die Wert auf gutes Segeln und
      übersichtliches Handling legen. Für vier Paare würden wir bei diesem Modell die Frage der
      Nasszellen offen ansprechen: Zwei Bäder für acht Erwachsene funktionieren – mit etwas
      Organisation.
    </Verdict>

    {/* ── Elan Impression 45.1 ───────────────────────────────────────── */}
    <h3 id="elan-impression-45-1">Elan Impression 45.1</h3>
    <p>
      <strong>Was fällt im Charteralltag auf?</strong> Die Impression-Reihe der slowenischen Werft
      Elan ist auf Fahrtensegeln mit Familie und Freunden ausgelegt. Die Impression 45.1 hat ein
      gegenüber dem Vorgänger längeres und breiteres Cockpit mit zwei Steuerständen, geteilten
      Cockpittischen und einer klappbaren Liegefläche. Nach unserer Erfahrung begegnen uns
      Elan-Yachten besonders häufig in kroatischen Charterflotten.
    </p>
    <p>
      <strong>Echte Stärken:</strong> Die Cockpittische lassen sich zu einer Tafel für acht Personen
      kombinieren oder zu Liegeflächen umbauen. Mit geschlossenem Heck gibt es eine große
      klappbare Badeplattform, die in Tests auch als Standfläche zum Grillen am Heck gelobt wurde.
      Das Verhältnis von Komfort und Segelleistung ist ausgewogen, die Yacht lässt sich gut mit
      kleiner Crew segeln.
    </p>

    <PartnerImage
      src={`${IMG}/elan-impression-45-1-unter-segeln-more-sailing.jpg`}
      alt="Elan Impression 45.1 unter Segeln mit Bimini über dem Cockpit, im Hintergrund eine Küste mit Hügeln und Ortschaften"
      width={1600}
      height={1199}
      caption="Elan Impression 45.1 unter Segeln: Die Yacht verbindet Fahrtenkomfort mit einem ausgewogenen Segelverhalten."
      credit="More Sailing"
    />

    <p>
      <strong>Mögliche Nachteile:</strong> Mit rund 4,18 Metern ist sie die schmalste Yacht im
      Vergleich – und das spürt man im Raumgefühl. In der 4-Kabinen-Version, wie sie Werft und
      Tests beschreiben, ersetzt eine kleine Stockbettkabine einen Teil des Eignerbereichs, und es
      bleibt bei zwei Nasszellen. Ein Tester empfand die Plätze an den Tischenden als etwas
      eingeengt.
    </p>
    <p>
      <strong>Für welche Crew?</strong> Für Familien mit Kindern, für sechs Erwachsene und für
      Crews, die ein gutes Preis-Leistungs-Verhältnis suchen und nicht auf jeden Zentimeter
      Innenraum angewiesen sind.
    </p>
    <p>
      <strong>Worauf beim konkreten Angebot achten?</strong> Offenes oder geschlossenes Heck (und
      damit: große Badeplattform ja oder nein), Kabinenlayout mit Stockbettkabine, Wassertank
      (es gibt eine größere Option) und Ausstattung wie Bugstrahlruder und Bimini.
    </p>
    <ProCheck
      pros={[
        "Flexible Cockpittische mit Liegefläche",
        "Große klappbare Badeplattform (bei geschlossenem Heck)",
        "Ausgewogenes Verhältnis von Komfort und Segelleistung",
        "Gut mit kleiner Crew zu segeln",
      ]}
      checks={[
        "Schmalste Yacht im Vergleich – weniger Raumgefühl",
        "4-Kabinen-Version mit Stockbettkabine",
        "Zwei Nasszellen für bis zu acht Personen",
        "Heckvariante und Wassertank erfragen",
      ]}
    />
    <Verdict>
      Die Impression 45.1 ist besonders interessant für Familien und Crews mit Kindern, für die
      eine Stockbettkabine eher ein Vorteil als ein Nachteil ist. Für vier Paare würden wir sie
      nicht als erste Wahl vorschlagen.
    </Verdict>

    <CtaBox
      headline="Zwei ähnliche Angebote – aber welche Yacht ist die bessere?"
      body="Schicken Sie uns Revier, Termin und Crewgröße. Wir schauen uns die verfügbaren Yachten im Detail an und sagen Ihnen, worauf wir bei der Auswahl achten würden."
      buttonLabel="Charterangebote vergleichen lassen"
    />

    {/* ── Cockpit ────────────────────────────────────────────────────── */}
    <h2 id="cockpit">Das Cockpit ist im Charterurlaub wichtiger, als viele bei der Buchung denken</h2>
    <p>
      Bei der Buchung schauen die meisten auf Kabinen und Salon. Im Urlaub verbringen acht
      Personen aber einen großen Teil des Tages im Cockpit: beim Frühstück vor Anker, beim Segeln,
      beim Anleger-Getränk und beim Abendessen. Unter Deck ist man im Mittelmeersommer vor allem
      zum Schlafen, Kochen und Duschen. Ein gutes Cockpit für acht Personen erkennt man an diesen
      Punkten:
    </p>
    <ul>
      <li>
        <strong>Sitzplätze:</strong> Sitzen alle acht bequem, auch während gesegelt wird – oder
        bloß dann, wenn niemand steuert?
      </li>
      <li>
        <strong>Cockpittisch:</strong> Können acht Erwachsene gleichzeitig essen? Ein langer,
        stabiler Tisch mit Klappflügeln ist im Alltag Gold wert.
      </li>
      <li>
        <strong>Durchgang:</strong> Kommt man bei aufgeklapptem Tisch noch zur Badeplattform und
        zu den Steuerständen?
      </li>
      <li>
        <strong>Steuerstände und Winschen:</strong> Sitzen die Winschen am Steuerstand, kann der
        Skipper bedienen, ohne dass die Crew aufstehen muss.
      </li>
      <li>
        <strong>Bewegungsraum bei Manövern:</strong> Wer beim Anlegen Leinen und Fender bedient,
        braucht freie Wege – das Walkaround-Deck der Sun Odyssey 440 ist hier ein gutes Beispiel.
      </li>
      <li>
        <strong>Beschattung:</strong> Ein großes, intaktes Bimini ist im Hochsommer keine
        Komfortfrage, sondern eine Voraussetzung für einen entspannten Tag.
      </li>
      <li>
        <strong>Kommunikation:</strong> Steht der Skipper weit hinten am Steuer, sollte die Crew
        ihn auch bei Wind noch verstehen.
      </li>
      <li>
        <strong>Liegeflächen:</strong> Wer gern vor Anker liest oder in der Sonne liegt, achtet auf
        umbaubare Tische oder Polster auf dem Vordeck.
      </li>
    </ul>

    <PartnerImage
      src={`${IMG}/dufour-470-cockpit-aussenkueche-angelina.jpg`}
      alt="Cockpit einer Dufour 470 vom Heck aus gesehen: Außenküche mit Spüle und Plancha, zwei Steuerräder, Teakbänke und Bimini"
      width={1600}
      height={1066}
      caption="Cockpit der Dufour 470 mit optionaler Außenküche: Spüle und Plancha am Heck, dahinter zwei Steuerstände und der Cockpittisch unter dem Bimini."
      credit="Angelina"
    />

    <p>
      Das Beispiel der Dufour 470 zeigt, wie sehr sich die Nutzung verschieben kann: Mit
      Außenküche wird das Heck zur Terrasse, auf der gekocht, gegessen und gebadet wird. Ob eine
      solche Ausstattung an Bord ist, steht allerdings im Datenblatt der einzelnen Yacht – nicht
      in der Modellbeschreibung.
    </p>

    {/* ── Kabinen ────────────────────────────────────────────────────── */}
    <h2 id="kabinen">Vier Kabinen sind nicht automatisch vier gleichwertige Kabinen</h2>
    <p>
      Für vier Paare und für acht Erwachsene ist dieser Abschnitt vielleicht der wichtigste im
      ganzen Artikel. Denn „4 Kabinen, 8 Kojen“ sagt wenig darüber aus, wie gleichwertig die
      Schlafplätze tatsächlich sind.
    </p>
    <h3>Doppelbett oder Stockbett?</h3>
    <p>
      Bei mehreren Modellen in diesem Vergleich gibt es 4-Kabinen-Versionen, in denen eine Kabine
      ein Stockbett hat – etwa bei der Elan Impression 45.1 oder bei einer verbreiteten Variante der
      Oceanis 46.1. Für Kinder ist das ideal, für ein Paar eher nicht. Wer mit vier Paaren reist,
      sollte gezielt nach Yachten mit vier Doppelkabinen fragen.
    </p>
    <h3>Vorschiff und Heck</h3>
    <p>
      Die Achterkabinen sind bei allen sechs Modellen meist großzügig in der Breite, haben aber
      oft weniger Stehhöhe am Fußende. Im Vorschiff gilt: Ist die Bugpartie in zwei Kabinen
      geteilt, wie bei der Bavaria Cruiser 46 in der 4-Kabinen-Version, werden beide Kabinen
      schmaler. Eine einzelne große Vorschiffskabine mit Inselbett ist dagegen oft die schönste
      Kabine an Bord – und im Seegang die unruhigste.
    </p>
    <h3>Zugang, Stauraum, Belüftung</h3>
    <p>
      Wie leicht kommt man ins Bett, ohne über den Partner zu klettern? Gibt es pro Kabine einen
      Hängeschrank und Ablagen für zwei Reisetaschen? Haben die Kabinen ein zu öffnendes Luk oder
      ausschließlich ein Rumpffenster? In warmen Nächten vor Anker macht Belüftung einen großen Unterschied.
    </p>
    <h3>Zwei, drei oder vier Nasszellen?</h3>
    <p>
      Die Anzahl der Nasszellen kann im Alltag entscheidender sein als 20 Zentimeter mehr
      Rumpflänge. Zwei Bäder für acht Erwachsene bedeuten morgens Wartezeit und Absprachen. Drei
      Bäder entspannen die Lage spürbar, vier Bäder – je eins pro Kabine – sind für vier Paare der
      Idealfall. Die Bandbreite ist groß: Die Sun Odyssey 440 und die Elan Impression 45.1 haben
      zwei Nasszellen, die Dufour 470 und die Oceanis 46.1 gibt es je nach Layout auch mit vier.
    </p>
    <h3>Privatsphäre</h3>
    <p>
      Auf einer Monohull liegen die Kabinen nah beieinander, getrennt durch dünne Schotten. Wer
      Wert auf Privatsphäre legt, achtet darauf, dass jede Kabine eine eigene Tür zum Salon hat und
      dass zwei Kabinen nicht durch ein gemeinsames Bad verbunden sind – oder denkt über einen
      Katamaran nach (siehe unten).
    </p>

    {/* ── Gleiches Modell ────────────────────────────────────────────── */}
    <h2 id="gleiches-modell">Dasselbe Modell ist nicht dieselbe Charteryacht</h2>
    <p>
      Das ist aus unserer Sicht die wichtigste Erkenntnis für jede Charterbuchung: Eine Bavaria
      Cruiser 46 aus unterschiedlichen Baujahren oder von unterschiedlichen Vercharterern kann sich
      erheblich unterscheiden. Das betrifft:
    </p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "8px 24px",
        margin: "0 0 1.5rem",
      }}
    >
      {[
        "Kabinenlayout",
        "Anzahl der Nasszellen",
        "Rollgroß oder Lattengroß",
        "Bugstrahlruder",
        "elektrische Winschen",
        "Klimaanlage",
        "Generator",
        "Solaranlage",
        "Teak an Deck und im Cockpit",
        "Dinghy und Außenborder",
        "Navigationsausstattung",
        "Cockpitpolster und Bimini",
        "Sicherheitsausrüstung",
        "Pflegezustand",
      ].map((t) => (
        <p key={t} style={{ margin: 0, fontSize: "1rem", color: "#374151" }}>
          ✓ {t}
        </p>
      ))}
    </div>
    <p>
      Zwei Angebote für „Oceanis 46.1, 4 Kabinen“ können also für zwei völlig verschiedene Wochen
      stehen: die eine mit vier Doppelkabinen, vier Bädern, Bugstrahlruder und neuem Bimini, die
      andere mit Stockbettkabine, zwei Bädern und abgenutzten Polstern. Deshalb reicht es bei einer
      Charterbuchung nicht aus, den Modellnamen und den Preis zu vergleichen.
    </p>
    <p>
      Dazu kommt der Vercharterer selbst. Wie gut eine Yacht gewartet wird, wie die Übergabe
      abläuft, wie schnell bei einem technischen Problem geholfen wird und wie fair die Kaution
      gehandhabt wird, hängt von der Charterfirma und ihrer Basis ab – nicht von der Werft.
    </p>

    {/* ── Neu = besser? ──────────────────────────────────────────────── */}
    <h2 id="neue-yacht">Ist eine neue Charteryacht automatisch besser?</h2>
    <p>
      Nein. Eine neue Yacht hat unbestreitbare Vorteile: frische Polster, moderne Elektronik,
      wenig Verschleiß. Aber ein gepflegtes, drei oder vier Jahre altes Schiff eines sehr guten
      Vercharterers kann die bessere Wahl sein als eine fast neue Yacht eines schwächeren
      Operators. Neue Yachten haben in ihrer ersten Saison zudem manchmal noch kleinere
      Kinderkrankheiten, die erst im Betrieb auffallen.
    </p>
    <p>Für Charterkunden zählen gemeinsam:</p>
    <ul>
      <li><strong>Modell und Layout</strong> – passt die Kabinenaufteilung zur Crew?</li>
      <li><strong>Baujahr und tatsächlicher Zustand</strong> – wann wurden Segel, Polster und Technik zuletzt erneuert?</li>
      <li><strong>Ausstattung</strong> – was ist wirklich an Bord?</li>
      <li><strong>Charterfirma und Charterbasis</strong> – wie zuverlässig sind Wartung, Übergabe und Service?</li>
      <li><strong>Preis</strong> – im Verhältnis zu allem oben Genannten.</li>
      <li><strong>Revier und Erfahrung der Crew</strong> – was braucht diese Crew in diesem Revier wirklich?</li>
    </ul>
    <p>
      Wie sich der Charterpreis zusammensetzt und welche Nebenkosten realistisch einzuplanen sind,
      erklären wir ausführlich im Artikel{" "}
      <a href="/blog/was-kostet-ein-yachtcharter">Was kostet ein Yachtcharter?</a>
    </p>

    {/* ── Wer passt zu wem ───────────────────────────────────────────── */}
    <h2 id="welche-crew">Welche 4-Kabinen-Yacht passt zu welcher Crew?</h2>
    <p>
      Pauschale Sieger gibt es nicht. Aber es gibt Kriterien, die je nach Crew unterschiedlich
      schwer wiegen.
    </p>

    <h3>Für vier Paare</h3>
    <p>
      Hier zählen vier vollwertige Doppelkabinen und möglichst drei oder vier Nasszellen. Achten
      Sie darauf, dass keine Kabine deutlich kleiner ist – sonst ist die Kabinenverteilung schnell
      das erste Diskussionsthema an Bord. Gute Kandidaten sind Versionen der Oceanis 46.1 oder der
      Dufour 470 mit vier Doppelkabinen und mehreren Bädern.
    </p>

    <h3>Für zwei Familien</h3>
    <p>
      Eine Stockbettkabine für die Kinder ist hier oft kein Nachteil, sondern genau richtig. Wichtiger
      sind eine große Badeplattform, ein sicheres Cockpit, viel Schatten und ausreichend
      Wasservorrat. Bavaria Cruiser 46, Elan Impression 45.1 und Dufour 470 passen je nach Layout
      gut zu dieser Konstellation.
    </p>

    <h3>Für acht Erwachsene</h3>
    <p>
      Schnell eng werden Nasszellen, Stauraum für Gepäck und der Cockpittisch. Acht Erwachsene
      bringen mehr Gepäck mit als eine Familie – weiche Taschen statt Koffer sind fast immer die bessere Wahl. Bei
      kompakteren Yachten wie der Sun Odyssey 440 lohnt ein ehrlicher Blick darauf, ob alle
      gleichzeitig am Tisch Platz finden.
    </p>

    <h3>Für eine segelorientierte Crew</h3>
    <p>
      Hier zählen Lattengroß statt Rollgroß, eine gute Leinenführung, gegebenenfalls ein
      Gennaker und ein Rumpf, der nicht ausschließlich auf Volumen optimiert ist. Hanse 458 und Sun
      Odyssey 440 sind naheliegende Kandidaten, auch die Oceanis 46.1 segelt für ihre Größe
      ausgewogen.
    </p>

    <h3>Für Komforturlaub</h3>
    <p>
      Hier zählen Breite, Cockpitgröße, Anzahl der Bäder, Bimini, eventuell Generator und
      Klimaanlage. Dufour 470 und Oceanis 46.1 bieten in dieser Hinsicht die meisten
      Möglichkeiten – vorausgesetzt, die konkrete Yacht ist entsprechend ausgestattet.
    </p>

    <h3>Für eine weniger erfahrene Crew</h3>
    <p>
      Wichtig sind einfaches Handling, ein Bugstrahlruder für Hafenmanöver, ein bequem zu
      bergendes Großsegel (Rollgroß ist hier ein Vorteil) und eine übersichtliche Leinenführung. Die
      Selbstwendefock der Hanse 458 und das Walkaround-Deck der Sun Odyssey 440 erleichtern Manöver
      spürbar. Wer unsicher ist, ob die eigene Erfahrung für eine Yacht dieser Größe reicht, findet
      Orientierung im Artikel{" "}
      <a href="/blog/bareboat-oder-skipper">Bareboat oder Skipper?</a> – und für einen ersten Törn
      sind gut geschützte Reviere wie in{" "}
      <a href="/blog/kroatien-einsteiger">Kroatien für Einsteiger</a> beschrieben eine gute Wahl.
    </p>

    {/* ── Katamaran ──────────────────────────────────────────────────── */}
    <h2 id="katamaran">4 Kabinen – oder gleich Katamaran?</h2>
    <p>
      Wer acht Personen unterbringen möchte, sollte zumindest kurz über einen Katamaran
      nachdenken. Die Lagoon 42 ist aus unserer Erfahrung eine sehr beliebte
      Charterkatamaran-Größe – und das passende Gegenmodell zu den 45-Fuß-Monohulls in diesem
      Vergleich. Mit rund 12,80 Metern ist sie kürzer, mit etwa 7,70 Metern aber fast doppelt so
      breit.
    </p>

    <PartnerImage
      src={`${IMG}/lagoon-42-katamaran-istion.jpg`}
      alt="Katamaran Lagoon 42 unter Segeln mit Dinghy in den Davits, großem Cockpit und Salon auf einer Ebene"
      width={1600}
      height={1067}
      caption="Lagoon 42: Cockpit und Salon liegen auf einer Ebene, die Kabinen verteilen sich auf zwei getrennte Rümpfe."
      credit="Istion"
    />

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px", margin: "1.5rem 0 2rem" }}>
      <div style={{ background: "#f0f7f4", borderRadius: "10px", padding: "18px 20px" }}>
        <p style={{ fontWeight: 700, color: "#14532d", marginBottom: "8px", fontSize: "1rem" }}>
          Was für den Katamaran spricht
        </p>
        <ul style={{ margin: 0 }}>
          {[
            "Getrennte Rümpfe – deutlich mehr Privatsphäre",
            "Meist vier ähnlich große Doppelkabinen mit eigenem Bad",
            "Cockpit und Salon auf einer Ebene, viel Aufenthaltsfläche",
            "Kein Krängen unter Segeln",
            "Sehr viel Platz vor Anker",
          ].map((t) => (
            <li key={t} style={{ fontSize: "1rem" }}>{t}</li>
          ))}
        </ul>
      </div>
      <div style={{ background: "#fdf6ec", borderRadius: "10px", padding: "18px 20px" }}>
        <p style={{ fontWeight: 700, color: "#7c4a03", marginBottom: "8px", fontSize: "1rem" }}>
          Was man einplanen sollte
        </p>
        <ul style={{ margin: 0 }}>
          {[
            "Deutlich höhere Charterpreise",
            "Höhere Marina- und Liegeplatzkosten",
            "Große Breite – nicht jeder Hafen hat passende Plätze",
            "Andere Hafen- und Routenplanung",
            "Verbrauch und Nebenkosten können höher sein",
            "Anderes Segelgefühl als auf einer Monohull",
          ].map((t) => (
            <li key={t} style={{ fontSize: "1rem" }}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
    <p>
      Viele Lagoon 42 in Charterflotten haben vier Doppelkabinen mit je eigenem Bad und zusätzlich
      eine oder zwei kleine Kabinen im Bug, die als Skipperkojen dienen. Für vier Paare ist das eine
      sehr komfortable Lösung. Für manche 8-Personen-Crews kann ein Katamaran deshalb sinnvoller
      sein als eine große Monohull – aber nicht automatisch. Wer gern segelt, wer die Krängung und
      das Gefühl einer Monohull schätzt oder wer ein festes Budget hat, ist mit einer gut
      ausgewählten 4-Kabinen-Segelyacht oft besser bedient.
    </p>

    <CtaBox
      headline="Monohull oder Katamaran?"
      body="Wir vergleichen beide Varianten für Ihre konkrete Crew und Ihr Budget."
      buttonLabel="Unverbindlich beraten lassen"
    />

    {/* ── Nächste Generation ─────────────────────────────────────────── */}
    <h2 id="naechste-generation">Die nächste Generation kommt bereits in die Charterflotten</h2>
    <p>
      Die Werften haben in den vergangenen Jahren Nachfolger für alle großen Modelle dieser Klasse
      vorgestellt, darunter die Bavaria C46, die Beneteau Oceanis 47, die Dufour 48, die Hanse 461
      und die Jeanneau Sun Odyssey 455. Diese Yachten werden die etablierte Charterflotte in den
      kommenden Jahren schrittweise ergänzen.
    </p>
    <p>
      Für Charterkunden heißt das vor allem: In den nächsten Saisons stehen ältere und neue
      Generationen nebeneinander in den Flotten. Die bewährten Modelle aus diesem Vergleich werden
      in vielen Revieren noch lange das Rückgrat des Angebots bilden – und ein gut gepflegtes
      Exemplar ist oft die vernünftigere Wahl als die neueste Yacht zum deutlich höheren Preis.
    </p>

    {/* ── Reviere ────────────────────────────────────────────────────── */}
    <h2 id="reviere">Welche Modelle findet man in welchem Revier?</h2>
    <p>
      Yachten dieser Klasse sind in allen großen Mittelmeerrevieren gut vertreten. Welche Modelle
      an einer bestimmten Basis tatsächlich verfügbar sind, unterscheidet sich aber stark je nach
      Charterfirma, Saison und Buchungszeitpunkt. Aus unserer Praxis einige Tendenzen:
    </p>
    <ul>
      <li>
        <strong><a href="/reviere/mittelmeer/kroatien">Kroatien</a>:</strong> sehr große Auswahl
        in dieser Klasse; nach unserer Erfahrung sind hier auch Elan-Yachten aus dem benachbarten
        Slowenien besonders häufig vertreten.
      </li>
      <li>
        <strong><a href="/reviere/mittelmeer/griechenland">Griechenland</a>:</strong> breites
        Angebot an allen großen Basen. Welches Revier zu Ihrer Crew passt, beschreiben wir im
        Artikel{" "}
        <a href="/blog/yachtcharter-griechenland-welches-revier-passt">
          Yachtcharter Griechenland: Welches Revier passt?
        </a>
      </li>
      <li>
        <strong><a href="/reviere/mittelmeer/tuerkei">Türkei</a>:</strong> gute Auswahl rund um
        die großen Charterzentren der Ägäis- und Lykischen Küste.
      </li>
      <li>
        <strong>Italien und Spanien:</strong> etwa auf{" "}
        <a href="/reviere/mittelmeer/italien/sardinien">Sardinien</a> oder den{" "}
        <a href="/reviere/mittelmeer/spanien/balearen">Balearen</a> ist die Auswahl je Basis
        kleiner – frühzeitige Planung lohnt sich besonders.
      </li>
    </ul>

    {/* ── Unsere Einschätzung / Priorisierung ────────────────────────── */}
    <h2 id="prioritaeten">Unsere Einschätzung: Was würden wir bei der Auswahl priorisieren?</h2>
    <p>Wenn wir für eine Crew von acht Personen eine 4-Kabinen-Yacht auswählen, gehen wir in dieser Reihenfolge vor:</p>
    <ol>
      <li><strong>Crewstruktur klären:</strong> Paare, Familien, Freundesgruppe? Daraus ergibt sich, wie viele echte Doppelkabinen und Bäder nötig sind.</li>
      <li><strong>Layout prüfen:</strong> Kabinen, Bettgrößen, Nasszellen – an der konkreten Yacht, nicht am Modell.</li>
      <li><strong>Zustand und Vercharterer einbeziehen:</strong> Baujahr, letzte Erneuerungen, unsere Erfahrung mit dem Partner und seiner Basis.</li>
      <li><strong>Ausstattung abgleichen:</strong> Bimini, Bugstrahlruder, Großsegeltyp, Dinghy und Außenborder, eventuell Generator oder Klimaanlage.</li>
      <li><strong>Revier und Erfahrung:</strong> Häfen, Ankerbuchten, typische Windverhältnisse – und was die Crew sich zutraut.</li>
      <li><strong>Preis:</strong> erst am Ende – im Verhältnis zu allem, was die Yacht tatsächlich bietet.</li>
    </ol>
    <p>
      Genau so arbeiten wir bei CharterTransparenz. Wir vergleichen nicht nur Preis, Hersteller und
      Modell, sondern auch Baujahr, konkrete Layoutversion, Ausstattung, Charterbasis und
      Vercharterer – einschließlich unserer Erfahrungen mit dem jeweiligen Partner und dem, was
      wir über Zustand und Flottenpflege wissen. Dazu kommen Ihre Anforderungen, das Revier und
      die Zusammensetzung Ihrer Crew. Und wir begleiten Sie von der Auswahl und Buchung bis zur
      Rückkehr von Ihrem Törn.
    </p>

    {/* ── Fazit ──────────────────────────────────────────────────────── */}
    <h2 id="fazit">Fazit: Nicht das Modell allein entscheidet</h2>
    <p>
      Es gibt nicht <em>die</em> beste 4-Kabinen-Yacht. Es gibt die Yacht, die am besten zu Ihrer
      Crew, Ihrem Revier, Ihrem Termin, Ihrem Budget, Ihrer Erfahrung und Ihrem Komfortanspruch
      passt. Vier Kabinen sagen allein wenig über den tatsächlichen Komfort aus, das Cockpit ist
      für acht Personen mindestens so wichtig wie der Salon, und die Zahl der Bäder prägt den
      Alltag oft stärker als ein paar Zentimeter mehr Rumpflänge.
    </p>
    <p>
      Vor allem aber kann dieselbe Yacht je nach Baujahr, Layout und Vercharterer sehr
      unterschiedlich ausfallen. Genau deshalb schauen wir bei einer Charteranfrage nicht nur auf
      das Modell, sondern auf die konkrete Yacht.
    </p>

    <CtaBox
      size="lg"
      headline="Welche Yacht passt zu Ihrer Crew?"
      body={
        <>
          <p style={{ marginBottom: "10px", lineHeight: 1.65, color: "#e8edf2" }}>Teilen Sie uns mit:</p>
          <ul style={{ margin: "0 0 14px", paddingLeft: "1.4rem", listStyle: "disc" }}>
            {[
              "Revier",
              "Reisetermin",
              "Crewgröße",
              "gewünschte Kabinen",
              "Budget",
              "besondere Wünsche",
            ].map((t) => (
              <li key={t} style={{ color: "#e8edf2", fontSize: "1rem" }}>{t}</li>
            ))}
          </ul>
          <p style={{ marginBottom: "20px", lineHeight: 1.65, color: "#e8edf2" }}>
            Wir suchen passende Yachten aus unserem Partnernetzwerk und vergleichen die Angebote
            für Sie – persönlich, unabhängig und mit mehr als 30 Jahren Charter-Erfahrung.
          </p>
        </>
      }
      buttonLabel="4-Kabinen-Yacht anfragen"
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   Export
───────────────────────────────────────────────────────────────────────── */
export const vierKabinenSegelyachtenCharterVergleich: BlogPost = {
  slug: "4-kabinen-segelyachten-charter-vergleich",
  title: "Welche 4-Kabinen-Segelyacht passt zu Ihrer Chartercrew?",
  seoTitle: "4-Kabinen-Segelyachten im Chartervergleich: 6 beliebte Modelle | CharterTransparenz",
  metaDescription:
    "Bavaria Cruiser 46, Oceanis 46.1, Dufour 470 & Co.: Wir vergleichen beliebte 4-Kabinen-Charteryachten nach Platz, Handling, Ausstattung und Revier.",
  ogImage: `${IMG}/oceanis-46-1-unter-segeln-istion.jpg`,
  category: "Yachtwahl & Bordleben",
  date: "2026-10-14",
  teaser:
    "Bavaria Cruiser 46, Oceanis 46.1, Dufour 470, Hanse 458, Sun Odyssey 440 und Elan Impression 45.1 im Vergleich – aus Sicht der Chartercrew: Kabinen, Bäder, Cockpit, Handling und worauf Sie beim konkreten Angebot achten sollten.",
  heroImage: `${IMG}/oceanis-46-1-unter-segeln-istion.jpg`,
  heroImageAlt:
    "Beneteau Oceanis 46.1 unter Segeln auf tiefblauem Wasser, eine Person steht am Steuer, im Hintergrund eine bergige Küste",
  heroImageCredit:
    "Foto: Istion – vielen Dank für die freundliche Bereitstellung des Bildes.",
  readingTime: 18,
  relatedSlugs: [
    "bareboat-oder-skipper",
    "was-kostet-ein-yachtcharter",
    "yachtcharter-griechenland-welches-revier-passt",
  ],
  content,
  faq: [
    {
      question: "Welche Segelyacht eignet sich für 8 Personen?",
      answer:
        "Für acht Personen sind Segelyachten um 44 bis 47 Fuß mit vier Kabinen die klassische Wahl, etwa Bavaria Cruiser 46, Beneteau Oceanis 46.1, Dufour 470, Hanse 458, Jeanneau Sun Odyssey 440 oder Elan Impression 45.1. Welche am besten passt, hängt weniger vom Modell als von Layout, Anzahl der Nasszellen, Ausstattung und Zustand der konkreten Yacht ab.",
    },
    {
      question: "Bavaria Cruiser 46 oder Oceanis 46.1 – welche ist besser für den Charter?",
      answer:
        "Keine ist pauschal besser. Die Bavaria Cruiser 46 ist ein bewährtes Allround-Schiff mit langer Pantry und großer Badeplattform, in der 4-Kabinen-Version sind die beiden Bugkabinen aber kleiner. Die Oceanis 46.1 wirkt durch ihre Rumpfkante geräumiger und hat ein langes Cockpit; hier lohnt der Blick, ob das Layout vier Doppelkabinen oder eine Stockbettkabine hat. Entscheidend ist der Vergleich der konkret verfügbaren Yachten.",
    },
    {
      question: "Ist eine 4-Kabinen-Yacht für 10 Personen komfortabel?",
      answer:
        "Meist eingeschränkt. Die Zusatzschlafplätze liegen bei vielen Yachten im umgebauten Salon. Für zwei Kinder ist das in Ordnung, für zwei weitere Erwachsene über eine ganze Woche selten komfortabel. Die Zulassung für zehn Personen beschreibt die Sicherheit, nicht den Komfort.",
    },
    {
      question: "Wie viele Nasszellen braucht eine Crew von acht Personen?",
      answer:
        "Zwei Nasszellen funktionieren mit etwas Organisation, drei entspannen den Alltag spürbar, vier sind für vier Paare ideal. Je nach Modell und Layout gibt es 4-Kabinen-Yachten dieser Größe mit zwei bis vier Bädern.",
    },
    {
      question: "Ist eine neue Charteryacht immer die bessere Wahl?",
      answer:
        "Nicht automatisch. Ein gepflegtes, drei oder vier Jahre altes Schiff eines sehr guten Vercharterers kann die bessere Wahl sein als eine fast neue Yacht eines schwächeren Anbieters. Modell, Layout, Zustand, Ausstattung, Charterfirma, Basis und Preis sollten gemeinsam betrachtet werden.",
    },
    {
      question: "Wann ist ein Katamaran die bessere Alternative zur 4-Kabinen-Segelyacht?",
      answer:
        "Wenn Privatsphäre, gleichwertige Kabinen mit eigenem Bad und viel Platz vor Anker im Vordergrund stehen, etwa bei vier Paaren. Ein Katamaran wie die Lagoon 42 kostet in Charter und Marina allerdings deutlich mehr und segelt sich anders als eine Monohull.",
    },
  ],
};
