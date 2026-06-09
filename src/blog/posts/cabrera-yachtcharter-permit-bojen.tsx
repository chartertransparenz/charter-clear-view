import type { BlogPost } from "../types";

/* ─────────────────────────────────────────────────────────────────────────
   Shared inline-image style helper (figure + figcaption)
───────────────────────────────────────────────────────────────────────── */
const InlineImage = ({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) => (
  <figure style={{ margin: "2.5rem 0", padding: 0 }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        width: "100%",
        borderRadius: "10px",
        display: "block",
        objectFit: "cover",
        maxHeight: "420px",
      }}
    />
    <figcaption
      style={{
        marginTop: "10px",
        fontSize: "0.875rem",
        color: "#6b7280",
        lineHeight: 1.55,
        fontStyle: "italic",
      }}
    >
      {caption}
    </figcaption>
  </figure>
);

/* ─────────────────────────────────────────────────────────────────────────
   Reusable CTA box – explicit colors on every text node to prevent
   blog-content CSS from overriding the white-on-dark scheme.
───────────────────────────────────────────────────────────────────────── */
const CtaBox = ({
  headline,
  body,
  buttonLabel,
  href = "/charter-anfrage",
  size = "md",
}: {
  headline: string;
  body: string;
  buttonLabel: string;
  href?: string;
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
    <p style={{ marginBottom: "20px", lineHeight: 1.65, color: "#e8edf2" }}>
      {body}
    </p>
    <a
      href={href}
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

/* ─────────────────────────────────────────────────────────────────────────
   Article content
───────────────────────────────────────────────────────────────────────── */
const content = (
  <div>

    {/* ── Hero-Bild ──────────────────────────────────────────────────────── */}
    <InlineImage
      src="/images/blog/cabrera-yachtcharter-permit-bojen/cabrera-yachtcharter-permit-bojen-hero.jpg"
      alt="Segelyachten an Bojen vor Cabrera im Nationalpark südlich von Mallorca"
      caption="Cabrera ist einer der schönsten Stopps ab Mallorca – aber kein spontanes Ankerziel. Wer hier mit der Charteryacht liegen möchte, plant Genehmigung und Boje vorab."
    />

    {/* ── Einleitung ────────────────────────────────────────────────────── */}
    <p>
      Südlich von Mallorca, kaum zwanzig Seemeilen vom Cap de ses Salines entfernt, liegt
      ein Archipel, der zu den stillen Höhepunkten eines Balearen-Törns gehören kann:
      Cabrera. Kristallklares Wasser, eine geschützte Bucht, eine kleine Burg auf dem Hügel,
      kein Straßenlärm, kaum Licht in der Nacht – ein Ankerstopp, der lange in Erinnerung bleibt.
    </p>
    <p>
      Wer mit der Charteryacht oder dem eigenen Boot nach Cabrera möchte, muss eines wissen:
      Das funktioniert hier anders als in einer normalen Bucht. Cabrera ist ein maritimer
      Nationalpark. Es gibt keine freien Ankerplätze, keine spontane Einfahrt ohne Papiere
      und keine Marina-Infrastruktur. Wer Cabrera in den Törn einbauen möchte, plant
      Genehmigung, Boje und Verhalten vor Ort vorab – und hat dann einen entspannten,
      lohnenden Aufenthalt.
    </p>
    <p>
      Dieser Guide erklärt, was Chartercrews und Wassersportler brauchen: Navigationserlaubnis,
      Tagesbojen, Übernachtungsreservierung, Regeln vor Ort und praktische Tipps für die
      Einbindung in einen{" "}
      <a href="/reviere/mittelmeer/spanien/balearen/mallorca">Mallorca-Törn</a>.
    </p>

    {/* ── H2: Warum kein spontanes Ankerziel ──────────────────────────── */}
    <h2 id="warum-kein-spontanes-ankerziel">Warum Cabrera kein spontanes Ankerziel ist</h2>
    <p>
      Der Parque Nacional Marítimo-Terrestre del Archipiélago de Cabrera ist einer der am
      strengsten geschützten Meeresparks Spaniens. Das bedeutet konkret: Freies Ankern mit
      eigenem Anker ist im gesamten Nationalpark nicht erlaubt – auch nicht „kurz auf Sand",
      auch nicht auf Posidonia-Seegras, auch nicht außerhalb der Hauptbucht. Alle Boote
      liegen an genehmigten Parkbojen.
    </p>
    <p>
      Zusätzlich braucht jede Yacht – ob Charter oder privat – eine Navigationserlaubnis,
      um in die Parkgewässer einzufahren. Diese Erlaubnis ist kostenlos und gilt zwölf
      Monate, muss aber vorab beantragt werden. Wer ohne Genehmigung einläuft, riskiert
      eine empfindliche Geldbuße.
    </p>
    <p>
      Gleichzeitig ist die Kapazität begrenzt: Maximal 50 Übernachtungsbojen stehen pro
      Nacht im Puerto de Cabrera zur Verfügung. In der Hochsaison sind diese Kontingente
      regelmäßig ausgebucht. Wer Cabrera als festen Törnpunkt plant, braucht einen
      Vorlauf von bis zu zwanzig Tagen.
    </p>
    <p>
      Das klingt aufwendig – ist es aber nicht, wenn man einmal verstanden hat, wie das
      System aufgebaut ist.
    </p>

    {/* ── H2: Unterschied Erlaubnis / Tagesboje / Übernachtungsboje ────── */}
    <h2 id="navigationserlaubnis-tagesboje-uebernachtungsboje">
      Navigationserlaubnis, Tagesboje und Übernachtungsboje: der Unterschied
    </h2>
    <p>
      Viele Crews verwechseln diese drei Dinge. Der Unterschied ist wichtig, weil er
      bestimmt, was man wann tun muss.
    </p>

    {/* Drei Erklärungsboxen */}
    <div
      style={{
        background: "#eef3f8",
        border: "1px solid #b8cfe0",
        borderLeft: "4px solid #0f3460",
        borderRadius: "0 8px 8px 0",
        padding: "18px 22px",
        marginBottom: "12px",
      }}
    >
      <p style={{ fontWeight: 700, color: "#0f3460", margin: "0 0 8px" }}>
        1. Navigationserlaubnis (Permiso de Navegación)
      </p>
      <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>
        Die Eintrittskarte für die Fahrt in die Parkgewässer. Kostenlos, gilt zwölf Monate,
        wird online beantragt. Ohne diese Erlaubnis darf man nicht einlaufen – aber sie
        berechtigt weder zu einem Liegeplatz noch zu einer Übernachtung. Die
        Navigationserlaubnis ist die Grundvoraussetzung für alle anderen Schritte.
      </p>
    </div>

    <div
      style={{
        background: "#fef7ec",
        border: "1px solid #f0c97a",
        borderLeft: "4px solid #e8a020",
        borderRadius: "0 8px 8px 0",
        padding: "18px 22px",
        marginBottom: "12px",
      }}
    >
      <p style={{ fontWeight: 700, color: "#a06800", margin: "0 0 8px" }}>
        2. Tagesbojen (Boyas de Día)
      </p>
      <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>
        Für Tagesbesucher nennt die offizielle Navigationsseite drei Bojenbereiche
        mit insgesamt 50 Tagesbojen: <strong>Es Burrí</strong> (30 Bojen),{" "}
        <strong>Sa Coveta Roja</strong> (8 Bojen) und der{" "}
        <strong>Hafenbereich nahe dem Hauptkai</strong> (12 Bojen). Diese Bojen sind
        nicht vorab reservierbar – man kommt hin und schaut, ob eine frei ist.
        Tagesbojen sind nur für Boote bis 15 Meter Länge und dürfen nur tagsüber
        genutzt werden: von einer Stunde nach Sonnenaufgang bis eine Stunde vor
        Sonnenuntergang. Übernachten ist an Tagesbojen nicht gestattet – sie ersetzen
        keine Übernachtungsreservierung und machen Cabrera nicht zu einem spontan frei
        beankerbaren Ziel.
      </p>
    </div>

    <div
      style={{
        background: "#e8f0f6",
        border: "1px solid #9bb8cc",
        borderLeft: "4px solid #1a5276",
        borderRadius: "0 8px 8px 0",
        padding: "18px 22px",
        marginBottom: "24px",
      }}
    >
      <p style={{ fontWeight: 700, color: "#1a5276", margin: "0 0 8px" }}>
        3. Übernachtungsboje (Reserva de Fondeo)
      </p>
      <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>
        Wer auf Cabrera übernachten möchte, braucht zusätzlich zur Navigationserlaubnis eine
        reservierte Übernachtungsboje. Offiziell heißt das System „Reserva de Fondeo" – was
        wörtlich nach Ankern klingt, aber hier die genehmigte Nutzung einer Parkboje meint.
        Diese Reservierung ist kostenpflichtig, zeitlich begrenzt und muss im offiziellen
        Buchungssystem vorgebucht werden.
      </p>
    </div>

    <p>
      Kurz zusammengefasst: Navigationserlaubnis = Einfahrt erlaubt. Tagesboje = Tagesaufenthalt
      möglich, wenn eine frei ist. Übernachtungsboje = vorab reservierte, kostenpflichtige Boje
      für die Nacht.
    </p>

    {/* ── H2: So reservieren Crews eine Boje ─────────────────────────────── */}
    <h2 id="boje-reservieren">So reservieren Crews eine Boje auf Cabrera</h2>
    <p>
      Das Reservierungssystem ist online und vergleichsweise übersichtlich – wenn man die
      Reihenfolge kennt.
    </p>

    <InlineImage
      src="/images/blog/cabrera-yachtcharter-permit-bojen/cabrera-hafen-bojen-landgang.jpg"
      alt="Puerto de Cabrera mit Anleger, Bojenfeld und Burg im Nationalpark"
      caption="Im Puerto de Cabrera liegen Yachten nicht frei vor Anker, sondern an genehmigten Bojen. Der Landgang erfolgt mit dem Beiboot an den erlaubten Anlandestellen."
    />

    {[
      {
        nr: "1",
        title: "Törnzeitraum und Wetterfenster festlegen",
        text: `Cabrera liegt offen nach Süden. Bei auflandigem Wind aus dieser Richtung
               kann die Bucht ungemütlich werden. Ein stabiles Wetterfenster mit moderaten
               Winden aus nördlichen oder westlichen Richtungen ist ideal. Den Cabrera-Tag
               nicht auf die letzte Charternacht legen – ein Ausweichplan auf Mallorca
               sollte immer möglich bleiben.`,
      },
      {
        nr: "2",
        title: "Navigationserlaubnis beantragen",
        text: `Über das offizielle Reservierungsportal der Parques Nacionales beantragt man
               die kostenlose Navigationserlaubnis. Sie gilt zwölf Monate. Bei einer
               Charteryacht müssen die Daten der tatsächlich genutzten Yacht korrekt
               eingetragen sein – Bootsnamen, Länge, Kennzeichen. Die Genehmigung gilt
               nicht für ein anderes Boot.`,
      },
      {
        nr: "3",
        title: "Tagesbesuch oder Übernachtung entscheiden",
        text: `Ein Tagesbesuch ist mit der Navigationserlaubnis möglich, wenn eine
               Tagesboje frei ist. Das lässt sich nicht vorab garantieren. Wer sicher
               Cabrera erleben möchte, plant eine Übernachtungsreservierung ein.`,
      },
      {
        nr: "4",
        title: "Boje im 20-Tage-Fenster prüfen und buchen",
        text: `Übernachtungsbojen können maximal zwanzig Tage im Voraus reserviert werden.
               Im Juli und August sind nach aktuellem Stand maximal zwei aufeinanderfolgende
               Nächte möglich; in der Nebensaison bis zu sieben Nächte. Zwischen zwei
               Reservierungsanträgen müssen mindestens sieben Tage liegen.
               Die Buchung der Nachtstunden gilt von 18:00 Uhr am Ankunftstag bis
               17:00 Uhr am letzten Reservierungstag.`,
      },
      {
        nr: "5",
        title: "Passende Bootslänge und Bojenfarbe wählen",
        text: `Die Bojen sind farblich nach Bootslänge sortiert (Weiß bis 12 m, Gelb bis
               15 m, Orange bis 20 m, Rot bis 35 m). Man muss an der Boje der passenden
               Kategorie festmachen. Wer eine größere Boje reserviert, zahlt den Tarif
               der reservierten Boje.`,
      },
      {
        nr: "6",
        title: "Charter oder Privatboot korrekt angeben",
        text: `Das Buchungssystem unterscheidet zwischen Charterbooten und Privatbooten.
               Korrekte Angaben sind wichtig – die Reservierungsbedingungen weisen darauf
               hin, dass bei Charterbooten auch die Charterfirma subsidiär für
               Regelverstöße verantwortlich sein kann. Im Zweifelsfall mit der Charterbasis
               abstimmen.`,
      },
      {
        nr: "7",
        title: "Bestätigung an Bord verfügbar halten",
        text: `Die Buchungsbestätigung (digital oder ausgedruckt) an Bord mitführen. Das
               Parkpersonal kann sie beim Einlaufen verlangen. Maßgeblich sind immer die
               im offiziellen Buchungssystem angezeigten Bedingungen – bei Abweichungen
               von diesem Guide gilt die offizielle Quelle.`,
      },
    ].map(({ nr, title, text }) => (
      <div
        key={nr}
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderLeft: "4px solid #0f3460",
          borderRadius: "0 8px 8px 0",
          padding: "16px 22px",
          marginBottom: "12px",
        }}
      >
        <p
          style={{ margin: "0 0 6px", fontSize: "1rem", fontWeight: 700, color: "#0f3460" }}
        >
          Schritt {nr}: {title}
        </p>
        <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>{text}</p>
      </div>
    ))}

    <p>
      Das Kontingent ist begrenzt: Nach aktueller Regelung können bis zu 20 Plätze für
      Charterboote und bis zu 30 für Privatboote vergeben werden; nicht genutzte Plätze
      aus einem Kontingent können in das andere übergehen. Bei Stornierung mindestens eine
      Stunde vor dem gebuchten Zeitraum werden nach offizieller Reservierungslogik 50 % der
      Gebühr erstattet. Maßgeblich sind die im System angezeigten aktuellen Bedingungen.
    </p>

    {/* ── CTA 1 ──────────────────────────────────────────────────────────── */}
    <CtaBox
      headline="Planen Sie einen Mallorca-Törn mit Cabrera als Ziel?"
      body="Wir helfen Ihnen, Route, Yacht, Saison und Liegeplatzplanung realistisch zusammenzudenken – damit Cabrera nicht zur Stressstelle im Törn wird."
      buttonLabel="Balearen-Törn persönlich planen lassen"
    />

    {/* ── H2: Was kostet eine Cabrera-Boje ───────────────────────────────── */}
    <h2 id="kosten-boje">Was kostet eine Cabrera-Boje?</h2>
    <p>
      Die Gebühren richten sich nach Bootslänge und Saison. Die folgende Tabelle gibt den
      Stand Juni 2026 wieder, basierend auf der offiziellen Tarifstruktur. Maßgeblich ist
      immer der im offiziellen Buchungssystem angezeigte Preis – bei Abweichungen gilt die
      offizielle Quelle.
    </p>

    <div style={{ overflowX: "auto", margin: "2rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.95rem",
          lineHeight: 1.5,
        }}
      >
        <thead>
          <tr style={{ background: "#0f3460", color: "#fff" }}>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Bojenfarbe
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Bootslänge
            </th>
            <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 600 }}>
              Nebensaison (1. Okt – 30. Apr)
            </th>
            <th style={{ padding: "12px 16px", textAlign: "right", fontWeight: 600 }}>
              Hauptsaison (1. Mai – 30. Sep)
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Weiß", "bis 12 m", "9,12 €", "18,23 €"],
            ["Gelb", "über 12–15 m", "14,64 €", "29,17 €"],
            ["Orange", "über 15–20 m", "25,53 €", "66,59 €"],
            ["Rot", "über 20–35 m", "78,42 €", "204,53 €"],
          ].map(([farbe, laenge, neben, haupt], i) => (
            <tr
              key={i}
              style={{
                background: i % 2 === 0 ? "#f8fafc" : "#ffffff",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <td
                style={{
                  padding: "12px 16px",
                  fontWeight: 600,
                  color: "#111827",
                  verticalAlign: "top",
                }}
              >
                {farbe}
              </td>
              <td style={{ padding: "12px 16px", color: "#374151", verticalAlign: "top" }}>
                {laenge}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  color: "#374151",
                  verticalAlign: "top",
                  textAlign: "right",
                }}
              >
                {neben}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  color: "#374151",
                  verticalAlign: "top",
                  textAlign: "right",
                  fontWeight: 600,
                }}
              >
                {haupt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p>
      <em>Stand: Juni 2026. Alle Preise pro Nacht. Änderungen vorbehalten – maßgeblich
      sind die im offiziellen Buchungssystem angezeigten Preise.</em>
    </p>

    <p>
      Die meisten Charteryachten liegen in der Weiß- oder Gelb-Kategorie. Für eine
      typische 40-Fuß-Yacht (rund 12 m) liegt die Übernachtungsgebühr in der Hauptsaison
      also bei etwa 18–29 Euro – ein überschaubarer Betrag für einen Platz in einem der
      schönsten Naturparks des Mittelmeers.
    </p>

    {/* ── CTA 2 ──────────────────────────────────────────────────────────── */}
    <CtaBox
      headline="Unsicher, ob Cabrera in Ihre Route passt?"
      body="Nicht jede Crew muss Cabrera erzwingen. Wir beraten Sie, ob Tagesbesuch, Übernachtung oder eine entspannte Alternative auf Mallorca besser zu Ihrem Törn passt."
      buttonLabel="Törnplanung anfragen"
    />

    {/* ── H2: Was ist erlaubt und was nicht ──────────────────────────────── */}
    <h2 id="erlaubt-verboten">Was ist auf Cabrera erlaubt – und was nicht?</h2>
    <p>
      Cabrera ist ein streng geschützter Nationalpark. Die Regeln sind klar und werden vom
      Parkpersonal kontrolliert. Für Chartercrews gilt: Wer die Regeln kennt, kann sich
      entspannt bewegen. Wer sie ignoriert, riskiert Bußgelder – und im schlimmsten Fall
      auch Konsequenzen für die Charterfirma.
    </p>

    <h3 id="verbote">Was nicht erlaubt ist</h3>
    <ul>
      <li>
        <strong>Freies Ankern mit eigenem Anker</strong> – im gesamten Nationalpark
        verboten, ohne Ausnahme.
      </li>
      <li>
        <strong>Sportfischen, Angeln vom Boot, Speerfischen</strong> – alle Formen der
        Sportfischerei sind im Park verboten, einschließlich Unterwasserfischerei.
      </li>
      <li>
        <strong>Drohnen</strong> – nicht erlaubt.
      </li>
      <li>
        <strong>Feuer</strong> – kein offenes Feuer, keine Grills an Land.
      </li>
      <li>
        <strong>Hunde und andere Tiere an Land bringen</strong> – verboten.
      </li>
      <li>
        <strong>Natur- oder Kulturgüter verändern oder mitnehmen</strong> – kein Sammeln
        von Steinen, Muscheln, Pflanzen, historischen Gegenständen.
      </li>
      <li>
        <strong>Anlanden außerhalb der genehmigten Stellen</strong> – an beliebigen
        Stränden oder Küstenabschnitten ist Anlanden nicht erlaubt.
      </li>
      <li>
        <strong>Ankern bei der Cova Blava</strong> – auch diese bekannte Blaue Grotte
        kann nicht frei beankert werden; der Besuch erfolgt von einer Boje aus mit dem
        Beiboot oder nach aktueller offizieller Regelung.
      </li>
    </ul>

    <h3 id="verhalten-vor-ort">Was beachtet werden sollte</h3>
    <ul>
      <li>Nur auf freigegebenen Wegen an Land gehen.</li>
      <li>Pflanzen und Tiere nicht berühren, stören oder füttern.</li>
      <li>Anweisungen des Parkpersonals befolgen.</li>
      <li>Keinen Müll zurücklassen – es gibt keine Müllbehälter im Park; alles
          zurück nach Mallorca bringen.</li>
      <li>
        In den Parkgewässern gilt nach offizieller Navigationsseite eine
        Höchstgeschwindigkeit von <strong>10 Knoten</strong>. Für Crews heißt
        das: langsam, leise und rücksichtsvoll fahren. Übermäßige Geräusche durch
        Motoren, Hupen oder Musik sind laut offizieller Regelung zu vermeiden.
      </li>
      <li>Rücksicht auf andere Boote und Besucher im Bojenfeld.</li>
    </ul>

    <p>
      Gerätetauchen ist möglich, braucht aber eine zusätzliche Genehmigung. Wer tauchen
      möchte, sollte sich vorab im Informationsbüro des Parks anmelden und die
      geltenden Bedingungen prüfen. Schnorcheln und Baden sind in geeigneten und
      freigegebenen Bereichen möglich. SUP und Kajak im Hafenbereich nur regelkonform
      und mit ausreichend Abstand zum Bootsverkehr. Quer durch den Hafen zu schwimmen
      ist wegen des Bootsverkehrs nicht zu empfehlen.
    </p>

    {/* ── H2: Landgang, Baden, Verhalten ──────────────────────────────────── */}
    <h2 id="landgang-baden">Landgang, Baden und Verhalten im Nationalpark</h2>

    <InlineImage
      src="/images/blog/cabrera-yachtcharter-permit-bojen/cabrera-landgang-baden-nationalpark.jpg"
      alt="Badebucht auf Cabrera mit klarem Wasser und geschützter Küstenlandschaft"
      caption="Cabrera wirkt entspannt, ist aber streng geschützt: Baden, Landgang und Wege an Land sind nur in den freigegebenen Bereichen sinnvoll und erlaubt."
    />

    <p>
      Die Charteryacht bleibt an der zugewiesenen Boje. Man geht nicht einfach am Hauptkai
      fest – dieser ist für Fähren, Parkboote und Sicherheitskräfte reserviert. Der Landgang
      erfolgt mit dem Beiboot (Dinghy) zu den offiziell erlaubten Anlandestellen:
    </p>
    <ul>
      <li>
        <strong>Hauptkai im Hafen (Moll Principal del Port)</strong> – die primäre
        Anlandestelle für Besucher.
      </li>
      <li>
        <strong>Mollet de Cas Pagès bei Sa Platgeta</strong> – eine zweite erlaubte
        Anlandestelle.
      </li>
    </ul>
    <p>
      An beliebigen Stränden oder Küstenabschnitten anlanden ist nicht erlaubt. Das
      Parkpersonal ist präsent und kontrolliert die Einhaltung.
    </p>
    <p>
      An Land gibt es öffentliche Toiletten, aber keine Duschen. Es gibt keine
      Restaurants – nur eine kleine Kantine (Cantina) mit Getränken. Proviant muss
      vollständig von Mallorca mitgebracht werden. Bezahlung: Es sollte davon ausgegangen
      werden, dass Barzahlung notwendig ist; Kartenleser sind vor Ort möglicherweise nicht
      verfügbar. Im Zweifelsfall vorab prüfen.
    </p>
    <p>
      Für Boote gibt es keine Strom- oder Wasseranschlüsse, keine Tankstelle, keine
      Müllentsorgung. Alles, was die Crew an Bord hat, bleibt an Bord oder wird
      zurück nach Mallorca gebracht.
    </p>

    {/* ── H2: Versorgung / Infrastruktur ──────────────────────────────────── */}
    <h2 id="versorgung-infrastruktur">Versorgung und Infrastruktur: Was Cabrera nicht ist</h2>
    <p>
      Cabrera ist kein Versorgungshafen. Das ist keine Kritik – es ist eine wichtige
      Information für die Törnplanung.
    </p>

    <div style={{ overflowX: "auto", margin: "2rem 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.95rem",
          lineHeight: 1.5,
        }}
      >
        <thead>
          <tr style={{ background: "#0f3460", color: "#fff" }}>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Was gibt es?
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Verfügbar
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Öffentliche Toiletten", "Ja"],
            ["Duschen", "Nein"],
            ["Trinkwasser an Bord füllen", "Nein"],
            ["Diesel / Treibstoff", "Nein"],
            ["Strom / Landstrom", "Nein"],
            ["Müllentsorgung im Park", "Nein"],
            ["Restaurants", "Nein – nur eine kleine Kantine mit Getränken"],
            ["Geldautomat", "Nein"],
            ["Lebensmittel kaufen", "Nein – Proviant vollständig mitbringen"],
            ["WLAN / Mobilfunk", "Eingeschränkt – nicht verlassen"],
          ].map(([was, verfuegbar], i) => (
            <tr
              key={i}
              style={{
                background: i % 2 === 0 ? "#f8fafc" : "#ffffff",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <td
                style={{
                  padding: "10px 16px",
                  color: "#374151",
                  verticalAlign: "top",
                  fontWeight: 500,
                }}
              >
                {was}
              </td>
              <td
                style={{
                  padding: "10px 16px",
                  color: verfuegbar === "Ja" ? "#166534" : "#991b1b",
                  verticalAlign: "top",
                  fontWeight: verfuegbar === "Ja" ? 600 : 400,
                }}
              >
                {verfuegbar}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p>
      Vor dem Cabrera-Stopp sollten Diesel, Frischwasser, Proviant, Batteriekapazität und
      ausreichend Müllkapazität an Bord sichergestellt sein. Wer diese Dinge in
      Portocolom, Colonia de Sant Jordi oder einer Mallorca-Marina erledigt, startet
      entspannt und ohne Stress in Richtung Nationalpark.
    </p>

    {/* ── H2: Cabrera in den Törn einbauen ─────────────────────────────── */}
    <h2 id="toern-planung">Cabrera sinnvoll in den Mallorca-Törn einbauen</h2>
    <p>
      Cabrera ist am schönsten als bewusst geplanter Höhepunkt – nicht als spontane
      Abweichung vom Kurs. Ein paar praktische Überlegungen:
    </p>

    <h3 id="ausgangshafen">Von wo aus einplanen?</h3>
    <p>
      Colonia de Sant Jordi an der Südküste Mallorcas ist die klassische Ausgangsposition.
      Von dort sind es rund zwölf Seemeilen bis zum Eingang der Cabrera-Bucht – ein
      überschaubarer Schlag, auch für Crews, die keine langen Überfahrten mögen. Alternativ
      bieten sich Portocolom und Cala d'Or an, jeweils 15 bis 20 Seemeilen entfernt.
    </p>

    <h3 id="letzter-tag">Nicht auf die letzte Charternacht legen</h3>
    <p>
      Ein häufiger Fehler: Cabrera als finalen Stopp einplanen, direkt vor der Rückgabe.
      Das ist riskant. Wenn die Boje storniert wird oder das Wetter nicht mitspielt, muss
      die Crew von der Möglichkeit einer entspannten Alternative Gebrauch machen können.
      Wer Cabrera als vorletzten Abend einplant und danach eine Nacht in Portocolom oder
      Colonia de Sant Jordi vorsieht, hat eine gute Pufferposition.
    </p>

    <h3 id="wetterplanung">Wetter und Windrichtung</h3>
    <p>
      Cabrera liegt zur Südseite offen. Bei auflandigem Wind aus Süd oder Südost kann die
      Bucht unruhig werden. Die besten Bedingungen bieten Windrichtungen aus Norden oder
      Nordwesten – dann liegt man geschützt und ruhig. Wetterfenster sollten zwei bis drei
      Tage im Voraus beobachtet werden.
    </p>

    <h3 id="crew-erfahrung">Crew und Erfahrung</h3>
    <p>
      Cabrera ist kein technisch schwieriges Revier, aber ein Revier mit klaren Regeln
      und begrenzten Ausweichmöglichkeiten an Land. Für erfahrene und gut vorbereitete
      Crews ist es ein ausgezeichneter Stopp. Für sehr unerfahrene Crews, die noch mit
      der Yacht eingesegelt werden müssen, empfiehlt sich ein Tagesbesuch als erste Option –
      oder der Stopp wird auf einen späteren Törn verschoben. Wer unsicher ist: Es gibt
      auf den{" "}
      <a href="/reviere/mittelmeer/spanien/balearen">Balearen</a> viele schöne Alternativen,
      die weniger Vorlaufplanung erfordern.
    </p>

    <h3 id="ausweichplan">Ausweichplan bereithalten</h3>
    <p>
      Falls Cabrera ausfällt – wegen Wetter, wegen voller Bojen oder weil die Reservierung
      nicht geklappt hat – gibt es gute Alternativen: Cala Pi südöstlich von Palma, Es Trenc
      und seine Umgebung oder ein ruhiger Ankerplatz an der Ostküste. Ein guter Törn plant
      nicht nur das Ziel, sondern auch das sinnvolle Ausweichszenario.
    </p>

    {/* ── H2: Checkliste ──────────────────────────────────────────────────── */}
    <h2 id="checkliste">Checkliste für Chartercrews: Cabrera richtig vorbereiten</h2>

    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "24px 28px",
        margin: "2rem 0",
      }}
    >
      <p style={{ fontWeight: 700, color: "#0f3460", marginBottom: "16px", marginTop: 0 }}>
        Vor dem Törn
      </p>
      <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
        <li>Navigationserlaubnis online beantragen (kostenlos, gilt 12 Monate)</li>
        <li>Übernachtungsboje im 20-Tage-Fenster reservieren</li>
        <li>Buchungsbestätigung auf Mobilgerät oder ausgedruckt an Bord verfügbar</li>
        <li>Bootslänge und Bojenfarbe korrekt gebucht</li>
        <li>Charter- oder Privatboot korrekt angegeben</li>
        <li>Wetterfenster für Anreisetag beobachtet</li>
        <li>Ausweichplan auf Mallorca festgelegt</li>
        <li>Cabrera nicht auf die letzte Charternacht gelegt</li>
      </ul>

      <p
        style={{
          fontWeight: 700,
          color: "#0f3460",
          marginBottom: "16px",
          marginTop: "20px",
        }}
      >
        Proviant und Technik
      </p>
      <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
        <li>Diesel vollständig aufgefüllt (keine Tankstelle auf Cabrera)</li>
        <li>Frischwasser vollständig aufgefüllt (kein Wasser im Park)</li>
        <li>Proviant für die Cabrera-Zeit komplett an Bord</li>
        <li>Getränke und Eis mitbringen – Kantine bietet nur Grundversorgung</li>
        <li>Barzahlung für die Kantine einplanen</li>
        <li>Müllsäcke für Rückbringung nach Mallorca an Bord</li>
        <li>Batteriekapazität geprüft (kein Landstrom)</li>
      </ul>

      <p
        style={{
          fontWeight: 700,
          color: "#0f3460",
          marginBottom: "16px",
          marginTop: "20px",
        }}
      >
        Verhalten vor Ort
      </p>
      <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
        <li>Beiboot für Landgang bereit machen</li>
        <li>Nur an erlaubten Stellen anlanden (Hauptkai, Mollet de Cas Pagès)</li>
        <li>Nur auf freigegebenen Wegen an Land bewegen</li>
        <li>Keinen Müll im Park zurücklassen</li>
        <li>Keine Hunde oder Tiere an Land bringen</li>
        <li>Kein Fischen, kein Speerfischen vom Boot oder zu Wasser</li>
        <li>Keine Drohnen</li>
        <li>Anweisungen des Parkpersonals befolgen</li>
      </ul>
    </div>

    {/* ── H2: Fazit ────────────────────────────────────────────────────────── */}
    <h2 id="fazit">Fazit: Cabrera ist gut machbar – mit der richtigen Vorbereitung</h2>
    <p>
      Cabrera ist kein komplizierter Stopp, aber ein Stopp, der Vorbereitung braucht. Wer
      die Navigationserlaubnis hat, eine Boje im richtigen Zeitfenster reserviert und mit
      einem voll ausgerüsteten Boot einläuft, wird dort einen der stilsten und
      eindrucksvollsten Abende eines Balearen-Törns erleben. Klares Wasser, wenig Licht,
      viele Sterne – und das Wissen, an einem der wenigen wirklich geschützten Plätze
      des westlichen Mittelmeers zu liegen.
    </p>
    <p>
      Wer bei der Planung unsicher ist – ob Cabrera in die Route passt, ob die
      Boje noch frei sein wird, ob eine Tagesvariante sinnvoller ist – kann sich
      mit uns beraten. Wir unterstützen Chartercrews nicht nur bei Yachtwahl und
      Buchung, sondern auch bei realistischer{" "}
      <a href="/blog/richtig-ankern-yachtcharter">Ankerstrategie</a> und Törnplanung
      für Reviere mit besonderen Regeln.
    </p>
    <p>
      Für aktuelle Hinweise zur Posidonia-Bojenreservierung auf den Balearen generell
      lohnt sich auch ein Blick auf unsere{" "}
      <a href="/news/balearen-posidonia-bojenfelder-buchungsstart-2026">
        Revierupdate-News zu den Balearen
      </a>
      .
    </p>

    {/* ── H2: FAQ ────────────────────────────────────────────────────────── */}
    <h2 id="faq">Häufige Fragen zu Cabrera mit der Charteryacht</h2>

    <div style={{ marginTop: "1.5rem" }}>
      {[
        {
          q: "Braucht man für Cabrera eine Genehmigung?",
          a: "Ja. Jede Yacht – Charter oder privat – braucht eine kostenlose Navigationserlaubnis, um in die Parkgewässer einzufahren. Wer übernachten möchte, braucht zusätzlich eine reservierte Übernachtungsboje. Beides wird online beantragt.",
        },
        {
          q: "Darf man auf Cabrera ankern?",
          a: "Nein. Freies Ankern mit eigenem Anker ist im gesamten Nationalpark nicht erlaubt – auch nicht kurz auf Sand und auch nicht auf Posidonia. Alle Boote liegen an genehmigten Parkbojen.",
        },
        {
          q: "Wie reserviert man eine Boje auf Cabrera?",
          a: "Über das offizielle Buchungssystem der CAIB (reservacabrera.caib.es) und das Portal der Parques Nacionales. Die Navigationserlaubnis und die Übernachtungsboje werden getrennt beantragt. Übernachtungsbojen können maximal 20 Tage im Voraus gebucht werden.",
        },
        {
          q: "Wie lange darf man auf Cabrera bleiben?",
          a: "Nach aktuellem Stand maximal zwei aufeinanderfolgende Nächte in der Hochsaison (Juli–August) und bis zu sieben Nächte in der Nebensaison. Zwischen zwei Reservierungen müssen mindestens sieben Tage liegen. Maßgeblich sind die aktuellen Bedingungen im offiziellen Buchungssystem.",
        },
        {
          q: "Was kostet eine Boje auf Cabrera?",
          a: "Die Kosten richten sich nach Bootslänge und Saison. Für eine Yacht bis 12 Meter liegen die Kosten bei ca. 18 Euro (Hauptsaison) bzw. ca. 9 Euro (Nebensaison) pro Nacht (Stand: Juni 2026). Maßgeblich ist der im Buchungssystem angezeigte Preis.",
        },
        {
          q: "Darf man mit dem Dinghy an Land?",
          a: "Ja – aber nur an den erlaubten Anlandestellen: dem Hauptkai im Hafen (Moll Principal) und dem Mollet de Cas Pagès bei Sa Platgeta. An beliebigen Stränden oder Küstenabschnitten ist das Anlanden nicht erlaubt.",
        },
        {
          q: "Gibt es Restaurants, Duschen oder Müllentsorgung?",
          a: "Nein. Es gibt öffentliche Toiletten, aber keine Duschen, keine Restaurants, keine Tankstelle, keinen Landstrom und keine Müllentsorgung. Es gibt eine kleine Kantine mit Getränken. Proviant muss vollständig mitgebracht werden. Müll zurück nach Mallorca.",
        },
        {
          q: "Ist Cabrera für Chartercrews geeignet?",
          a: "Ja – mit guter Vorbereitung. Navigationserlaubnis und Bojenreservierung müssen vorab beantragt sein. Das Boot sollte vollständig versorgt sein. Für erfahrene Crews ist Cabrera ein wunderbarer Stopp; für sehr unerfahrene Crews oder ohne Vorlaufplanung gibt es auf den Balearen entspanntere Alternativen.",
        },
      ].map(({ q, a }, i) => (
        <div
          key={i}
          style={{ borderBottom: "1px solid #e5e7eb", padding: "18px 0" }}
        >
          <p
            style={{
              fontWeight: 700,
              color: "#0f3460",
              marginBottom: "8px",
              margin: "0 0 8px",
            }}
          >
            {q}
          </p>
          <p style={{ color: "#374151", lineHeight: 1.65, margin: 0 }}>{a}</p>
        </div>
      ))}
    </div>

    {/* ── Final CTA ──────────────────────────────────────────────────────── */}
    <CtaBox
      size="lg"
      headline="Balearen-Törn gut vorbereitet starten"
      body="Ob Cabrera, Mallorca, Menorca oder Ibiza – wir unterstützen Sie bei Revierwahl, Yacht und realistischer Planung für Ihre Crew."
      buttonLabel="Jetzt unverbindlich anfragen"
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   Export
───────────────────────────────────────────────────────────────────────── */
export const cabreraYachtcharterPermitBojen: BlogPost = {
  slug: "cabrera-yachtcharter-permit-bojen",
  title:
    "Cabrera mit der Charteryacht: Permit, Bojen und Übernachtung richtig planen",
  seoTitle: "Cabrera Yachtcharter: Permit, Bojen & Übernachtung",
  metaDescription:
    "Cabrera ist kein spontanes Ankerziel. Was Chartercrews zu Navigationserlaubnis, Bojenreservierung, Übernachtung und Regeln vor Ort wissen sollten.",
  ogImage:
    "/images/blog/cabrera-yachtcharter-permit-bojen/cabrera-yachtcharter-permit-bojen-hero.jpg",
  category: "Törnplanung & Vorbereitung",
  date: "2026-06-03",
  teaser:
    "Cabrera gehört zu den schönsten Stopps ab Mallorca – aber der Nationalpark funktioniert anders als eine normale Bucht. Wer mit der Charteryacht hinüber möchte, plant Genehmigung, Boje und Verhalten vor Ort vorab.",
  heroImage:
    "/images/blog/cabrera-yachtcharter-permit-bojen/cabrera-yachtcharter-permit-bojen-hero.jpg",
  heroImageAlt:
    "Segelyachten an Bojen vor Cabrera im Nationalpark südlich von Mallorca",
  readingTime: 11,
  relatedSlugs: [
    "richtig-ankern-yachtcharter",
    "neue-ankerregeln-kroatien-2026-70-meter-zone",
    "was-kostet-ein-yachtcharter",
  ],
  content,
  faq: [
    {
      question: "Braucht man für Cabrera eine Genehmigung?",
      answer:
        "Ja. Jede Yacht braucht eine kostenlose Navigationserlaubnis für die Einfahrt in die Parkgewässer. Wer übernachten möchte, benötigt zusätzlich eine reservierte Übernachtungsboje. Beides wird online beantragt.",
    },
    {
      question: "Darf man auf Cabrera ankern?",
      answer:
        "Nein. Freies Ankern mit eigenem Anker ist im gesamten Nationalpark verboten. Alle Boote liegen an genehmigten Parkbojen.",
    },
    {
      question: "Wie reserviert man eine Boje auf Cabrera?",
      answer:
        "Über das offizielle Buchungssystem der CAIB (reservacabrera.caib.es) und das Portal der Parques Nacionales. Übernachtungsbojen können maximal 20 Tage im Voraus gebucht werden.",
    },
    {
      question: "Wie lange darf man auf Cabrera bleiben?",
      answer:
        "Maximal zwei aufeinanderfolgende Nächte in der Hochsaison (Juli–August) und bis zu sieben Nächte in der Nebensaison. Zwischen zwei Reservierungen müssen mindestens sieben Tage liegen.",
    },
    {
      question: "Was kostet eine Boje auf Cabrera?",
      answer:
        "Die Kosten richten sich nach Bootslänge und Saison. Für eine Yacht bis 12 Meter ca. 18 Euro in der Hauptsaison bzw. ca. 9 Euro in der Nebensaison pro Nacht (Stand: Juni 2026). Maßgeblich ist der aktuelle Preis im Buchungssystem.",
    },
    {
      question: "Darf man mit dem Dinghy an Land?",
      answer:
        "Ja – aber nur an zwei erlaubten Anlandestellen: dem Hauptkai im Hafen und dem Mollet de Cas Pagès bei Sa Platgeta. An beliebigen Stränden ist das Anlanden nicht erlaubt.",
    },
    {
      question: "Gibt es Restaurants, Duschen oder Müllentsorgung?",
      answer:
        "Nein. Es gibt öffentliche Toiletten, aber keine Duschen, keine Restaurants, keine Tankstelle, keinen Landstrom und keine Müllentsorgung. Nur eine kleine Kantine mit Getränken. Müll zurück nach Mallorca.",
    },
    {
      question: "Ist Cabrera für Chartercrews geeignet?",
      answer:
        "Ja – mit guter Vorbereitung. Navigationserlaubnis und Bojenreservierung müssen vorab beantragt sein, das Boot sollte vollständig versorgt sein. Für erfahrene Crews ist Cabrera ein wunderbarer Stopp.",
    },
  ],
};
