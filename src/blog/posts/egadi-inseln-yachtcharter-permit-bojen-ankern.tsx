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
   Reusable CTA box – explicit colors on every text node
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
      src="/images/blog/egadi-inseln-yachtcharter-permit-bojen-ankern/Cala-azzurra-beach-in-favignana.jpg"
      alt="Cala Azzurra auf Favignana mit türkisfarbenem Wasser und Segelyachten vor der Küste"
      caption="Cala Azzurra auf Favignana zeigt, warum die Ägadischen Inseln für Crews so reizvoll sind: klares Wasser, helle Felsen und Anker- beziehungsweise Bojenplätze in traumhafter Umgebung."
    />

    {/* ── Einleitung ────────────────────────────────────────────────────── */}
    <p>
      Wer an Sizilien denkt, denkt zuerst an die Liparischen Inseln. Vulcano, Stromboli,
      Lipari – diese Namen sind in keinem Segelführer zu übersehen. Doch westlich von
      Sizilien, kaum zwanzig Seemeilen von Trapani entfernt, liegen drei Inseln, die
      einen ganz anderen Ton setzen: Favignana, Levanzo und Marettimo.
    </p>
    <p>
      Die Ägadischen Inseln wirken wie ein anderes Sizilien. Kleiner, ruhiger, näher
      am Wasser. Statt großer Marinas und langer Strandpromenaden warten helle Felsen,
      türkisfarbene Buchten, Fischerboote in kleinen Hafengassen und Abende in einfachen
      Restaurants, in denen man noch auf Einheimische trifft. Wer hier mit der
      Charteryacht unterwegs ist, erlebt kein lautes Standardrevier – sondern ein Stück
      italienisches Mittelmeer, das angenehm eigenständig geblieben ist.
    </p>
    <p>
      Gleichzeitig gehören die drei Inseln zur{" "}
      <strong>Area Marina Protetta Isole Egadi</strong>, einem der größten Meeresschutzgebiete
      Italiens. Das bedeutet: Bojenfelder, Schutzzonen und Autorisierungen sind Teil der
      Törnplanung. Wer das vorab versteht, erlebt das Revier entspannt. Wer darauf
      hofft, es vor Ort zu improvisieren, kommt ins Stolpern.
    </p>
    <p>
      Dieser Guide erklärt beides: den Charakter des Reviers und die Logik des
      Schutzgebiets – in der richtigen Reihenfolge.
    </p>

    {/* ── H2: Warum so reizvoll ────────────────────────────────────────── */}
    <h2 id="warum-so-reizvoll">Warum die Ägadischen Inseln so reizvoll sind</h2>
    <p>
      Die Ägadischen Inseln sind kein Geheimtipp im Sinne von unentdeckt – sie haben
      ihre Fans, und im Hochsommer merkt man das. Aber verglichen mit den Liparischen
      Inseln oder der sardischen Costa Smeralda wirken sie immer noch überschaubar,
      authentisch und entspannt. Das hat Gründe.
    </p>
    <p>
      Favignana, Levanzo und Marettimo liegen dicht beieinander. Die Überfahrten
      zwischen den Inseln sind kurz, die Schläge übersichtlich. Chartercrews, die
      keine langen Passagen mögen, können hier in wenigen Tagen drei völlig
      unterschiedliche Inselwelten erleben. Das Wasser ist klar, der Untergrund hell,
      die Buchten oft geschützt – kurzum: ein Revier, das auf den ersten Blick
      Badefreiheit und Ankerstopps verspricht.
    </p>
    <p>
      Was das Revier von vergleichbaren Zielen unterscheidet, ist der Ton. In
      Favignana gibt es Fahrräder und Mofas statt Luxusboutiquen, in Levanzo
      zählt die Bevölkerung kaum zweihundert Menschen, in Marettimo trifft man
      eher auf Wanderer und Taucher als auf Chartergäste. Die Inseln haben eine
      eigene Würde.
    </p>
    <p>
      Für Crews, die nicht nur Marina-Hopping möchten, sondern ein Revier mit
      Charakter suchen, sind die Ägadischen Inseln eine ernsthafte Option. Ein
      Revier, das gute Vorbereitung belohnt.
    </p>

    {/* ── H2: Die drei Inseln ─────────────────────────────────────────── */}
    <h2 id="die-drei-inseln">Die drei Inseln: Favignana, Levanzo und Marettimo</h2>

    <h3 id="favignana">Favignana – Buchten, Hafenort und italienischer Sommer</h3>
    <p>
      Favignana ist die größte und lebendigste der drei Inseln. Der gleichnamige
      Hafenort hat ein Zentrum mit kleinen Läden, Restaurants und Bars, einer
      alten Thunfischfabrik, die heute als Museum genutzt wird, und einem
      Hafen mit regelmäßigem Fährverkehr nach Trapani. Für Chartercrews ist
      Favignana der natürliche Ausgangspunkt: Versorgung, Landgang, Liegeplatz –
      alles hier, wenn auch ohne große Marinainfrastruktur.
    </p>
    <p>
      Die Buchten rund um Favignana gehören zu den bekanntesten Anlaufzielen des
      Reviers: <strong>Cala Rossa</strong> im Nordosten mit ihren roten Felsen und
      klarem Wasser, <strong>Cala Azzurra</strong> im Südosten als einer der
      beliebtesten Badestopps, <strong>Cala Rotonda</strong> und{" "}
      <strong>Lido Burrone</strong> an der Südküste. Wer an der Nordküste unterwegs
      ist, sollte die dort vorhandenen Unterwasserfelsen beachten – sie sind teils
      nicht vollständig in allen Seekarten verzeichnet.
    </p>
    <p>
      Favignana liegt in der Zone C des Schutzgebiets, die vergleichsweise wenige
      Einschränkungen für die freie Navigation vorsieht. Bojenfelder sind saisonal
      installiert. Ankern ist zonenabhängig und an ökologisch sensiblen Meeresböden
      – insbesondere Posidoniawiesen – nicht zulässig. Mehr dazu im Abschnitt zur
      Schutzgebietslogik.
    </p>

    <h3 id="levanzo">Levanzo – klein, ruhig und fast entrückt</h3>
    <p>
      Levanzo ist die kleinste der drei Inseln. Wer hier einläuft, kommt in einen
      der beschaulichsten Orte des tyrrhenischen Mittelmeers: weiße Häuser, ein
      kleiner Kai, ein Café, kaum Verkehr, viel Stille. Der Ort zählt nur wenige
      hundert Einwohner – und das ist auch im Sommer noch spürbar.
    </p>
    <p>
      Bekannte Anlaufstellen rund um Levanzo sind die{" "}
      <strong>Cala Minnola</strong> als geschützter Anker- und Bojenbereich sowie
      die <strong>Grotta del Genovese</strong> an der Westküste, eine Höhle mit
      prähistorischen Wandmalereien, die mehr als zehntausend Jahre alt sind.
      Der Besuch der Grotte erfolgt zu Fuß oder mit einem kleinen Boot –
      kein Yachtstopp, aber ein kultureller Kontrapunkt zum Segelalltag.
    </p>
    <p>
      Levanzo liegt teils in Zone B, teils in Zone C. In Zone B – westliche
      Seite der Insel – gelten strengere Regeln; Navigation und Aktivitäten sind
      reguliert und teilweise autorisierungspflichtig. Die östliche Seite und
      Cala Minnola liegen in Zone C. Wer hier ankern oder eine Boje nutzen
      möchte, prüft vorab, welche Zone gilt und ob eine Autorisierung notwendig
      ist.
    </p>

    <h3 id="marettimo">Marettimo – wild, felsig und abgelegen</h3>
    <p>
      Marettimo ist die westlichste und wildeste der drei Inseln. Felswände fallen
      steil ins Meer, die Küste ist buchtenreicher und rauer als auf Favignana.
      Es gibt Wanderwege, Grotten, klares Wasser und eine Stille, die selbst im
      Hochsommer erhalten bleibt. Taucher schätzen Marettimo für seine
      Unterwasserwelt – das Revier gilt als eines der schönsten
      Tauchgebiete Siziliens.
    </p>
    <p>
      Marettimo ist stärker wetterabhängig als Favignana. Die Insel liegt
      exponierter, Liegeoptionen sind begrenzter und Wind aus ungünstiger
      Richtung kann Stopps unangenehm machen. Für Crews mit Zeitpuffer und
      Interesse an Natur und Einsamkeit ist Marettimo der lohnendste Abstecher.
      Wer unter Zeitdruck steht oder eine anspruchslose Crew hat, denkt den
      Marettimo-Stopp gut durch.
    </p>
    <p>
      Die Westküste Marettimos liegt in Zone A, dem streng geschützten
      Kernbereich des Schutzgebiets – für normale Charterplanung praktisch
      kein Anker- oder Liegeplatz. Der östliche Teil und der kleine Hafen
      liegen in Zone C. Die Bojenfelder bei Marettimo sind saisonal; Autorisierung
      ist auch hier erforderlich.
    </p>

    {/* ── H2: Von wo starten ─────────────────────────────────────────────── */}
    <h2 id="von-wo-starten">Von wo startet man am besten?</h2>
    <p>
      Die Wahl der Charterbasis entscheidet, wie gut die Ägadischen Inseln in den
      Törn passen.
    </p>

    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "24px 28px",
        margin: "2rem 0",
      }}
    >
      {[
        {
          ort: "Trapani",
          beschreibung:
            "Der ideale Ausgangspunkt für einen Egadi-fokussierten Törn. Trapani liegt nur rund zwanzig Seemeilen von Favignana entfernt. Die Stadt selbst – mit ihrer barocken Altstadt und den berühmten Salinen südlich der Stadt – ist ein lohnender Aufenthalt vor dem Ablegen. Wer die Inseln intensiv erleben möchte, wählt Trapani.",
        },
        {
          ort: "Marsala",
          beschreibung:
            "Etwas südlicher gelegen, ebenfalls gut für Westsizilien und die Egadi-Inseln. Der Hafen liegt nahe der historischen Altstadt und dem Stagnone-Naturschutzgebiet. Für Crews, die Westsizilien und die Egadi-Inseln verbinden möchten, eine gute Alternative zu Trapani.",
        },
        {
          ort: "Palermo",
          beschreibung:
            "Für einen längeren Törn mit zehn bis vierzehn Tagen geeignet. Palermo ist eine größere Charterbasis mit sehr guter Fluganbindung. Von Palermo aus lässt sich Westsizilien mit San Vito lo Capo, dem Golfo di Castellammare, Trapani und den Egadi-Inseln als zusammenhängende Route planen. Als reiner Egadi-Ausgangspunkt ist die Entfernung jedoch spürbar.",
        },
      ].map(({ ort, beschreibung }) => (
        <div
          key={ort}
          style={{
            borderLeft: "4px solid #0f3460",
            paddingLeft: "16px",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontWeight: 700, color: "#0f3460", margin: "0 0 6px" }}>
            {ort}
          </p>
          <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>
            {beschreibung}
          </p>
        </div>
      ))}
      <p style={{ margin: "12px 0 0", color: "#6b7280", fontSize: "0.9rem", fontStyle: "italic" }}>
        Nicht suggerieren, dass die Ägadischen Inseln ein schneller Tagesabstecher
        von Palermo sind – für einen entspannten Aufenthalt braucht es mindestens
        drei bis vier Tage ab Trapani oder Marsala.
      </p>
    </div>

    {/* ── H2: Westsizilien mitdenken ─────────────────────────────────── */}
    <h2 id="westsizilien-mitdenken">
      Westsizilien mitdenken: San Vito, Zingaro und der Weg zu den Inseln
    </h2>
    <p>
      Wer genug Zeit hat, verbindet die Ägadischen Inseln mit der westsizilianischen
      Küste zu einem runden Törnbild.
    </p>
    <p>
      Der <strong>Golfo di Castellammare</strong> nördlich von Trapani ist eine
      breite, gut zehn Seemeilen messende Bucht mit authentischen Fischerorten
      wie Terrasini und Castellammare del Golfo. Keine glamouröse Kulisse,
      aber echte sizilianische Atmosphäre.
    </p>
    <p>
      <strong>San Vito lo Capo</strong> am nördlichen Kap des Golfs gilt als einer
      der schönsten Strände Italiens: weißer Sand, türkisfarbenes Wasser, ein
      Yachthafen mit guter Infrastruktur. Im Hochsommer ist der Ort belebt und
      Liegeplätze können knapp werden. Als Übergangsstation zwischen der
      Nordküste und dem Egadi-Revier funktioniert San Vito gut.
    </p>
    <p>
      Südlich von San Vito liegt das <strong>Zingaro-Naturschutzgebiet</strong>,
      eine der schönsten Küstenlandschaften Siziliens. Ankern ist im Naturschutzgebiet
      nicht erlaubt – aber die Küste von See aus zu erleben, als stille Passagekulisse,
      lohnt sich.
    </p>
    <p>
      Zwischen der Westküste Siziliens und den Inseln sollte man Wind, Strömung und
      See einkalkulieren. Bei Nordwestwind können kurze, kabbelige Wellen zwischen
      Festland und Inseln stehen. Ein Wetterfenster für den Hin- und Rückweg ist
      keine Vorsichtsmaßnahme, sondern gute Törnplanung.
    </p>

    {/* ── CTA 1 ──────────────────────────────────────────────────────────── */}
    <CtaBox
      headline="Ein Sizilien-Törn zu den Ägadischen Inseln?"
      body="Favignana, Levanzo und Marettimo sind ideal für Crews, die klares Wasser, kleine Orte und italienisches Flair suchen. Wir helfen Ihnen, Route, Yacht und realistische Liegeplatzplanung zusammenzudenken."
      buttonLabel="Sizilien-Törn persönlich planen lassen"
    />

    {/* ── H2: Schutzgebiet ────────────────────────────────────────────────── */}
    <h2 id="schutzgebiet-bojen-permits">
      Schutzgebiet, Bojen und Permits: Was Crews vorab klären sollten
    </h2>
    <p>
      Die Ägadischen Inseln liegen vollständig innerhalb der{" "}
      <strong>Area Marina Protetta Isole Egadi</strong>, einem der flächenmäßig
      größten Meeresschutzgebiete Italiens mit knapp 54.000 Hektar Schutzfläche.
      Das klingt bürokratisch – ist in der Praxis aber gut strukturiert und
      für Chartercrews überschaubar, wenn man es vorab versteht.
    </p>
    <p>
      Die Regeln nehmen dem Revier nicht den Reiz. Im Gegenteil: Sie erklären,
      warum das Wasser hier so klar ist, warum Posidoniawiesen geschützt werden
      und warum die Buchten nicht überlaufen sind. Bojenfelder sind Teil der
      Törnplanung – nicht als Einschränkung, sondern als Orientierungshilfe
      für ein schönes und naturverträgliches Ankern.
    </p>

    <InlineImage
      src="/images/blog/egadi-inseln-yachtcharter-permit-bojen-ankern/Favignana-sizilien.jpg"
      alt="Blick über türkisfarbenes Wasser und Boote vor Favignana auf den Ägadischen Inseln"
      caption="Traumbuchten gehören zum Reiz der Ägadischen Inseln. Gerade deshalb sollten Crews Bojenfelder, Schutzgebietszonen und Autorisierungen vor dem Törn prüfen."
    />

    {/* ── H2: Zonen verstehen ─────────────────────────────────────────── */}
    <h2 id="zonen-verstehen">Zonen verstehen: Was bedeutet Zone A, B, C und D praktisch?</h2>
    <p>
      Die AMP Isole Egadi gliedert sich in vier Schutzzonen. Für Chartercrews
      ist entscheidend, welche Zone die geplante Bucht oder der geplante
      Ankerplatz betrifft.
    </p>

    {[
      {
        zone: "Zone A – Integraler Schutz",
        color: "#991b1b",
        bg: "#fef2f2",
        border: "#fca5a5",
        beschreibung:
          "Die strengste Schutzzone. Sie umfasst die Westküste Marettimos und das kleine Inselchen Maraone. Für normale Chartercrews ist Zone A kein Anker- oder Liegeplatz. Erlaubt sind Schwimmen, geführte Tauchgänge in bestimmten Zeiträumen sowie autorisierte Schiffe der Inselbewohner.",
        praxis:
          "Nicht anlaufen oder ankern. Die Westküste Marettimos umfahren und im östlichen Teil des Hafens orientieren.",
      },
      {
        zone: "Zone B – Allgemeiner Schutz",
        color: "#92400e",
        bg: "#fffbeb",
        border: "#fcd34d",
        beschreibung:
          "Umfasst den Faraglione di Favignana, die westliche Seite Levanzo und Teile Marettimos. In Zone B ist freie Navigation für nicht motorisierte Boote möglich (Segeln, Rudern, Elektroantrieb); geführte Tauchgänge und Sport- sowie Berufsfischerei mit Genehmigung. Die Küstendistanzregelung für motorisierte Boote gilt bevorzugt für Inselbewohner.",
        praxis:
          "Zone B erfordert Aufmerksamkeit. Bevor man an der Westseite Levanzo oder nahe Faraglione di Favignana ankert oder liegt, die aktuelle AMP-Regelung prüfen.",
      },
      {
        zone: "Zone C – Teilweiser Schutz",
        color: "#065f46",
        bg: "#ecfdf5",
        border: "#6ee7b7",
        beschreibung:
          "Die für Chartercrews relevanteste Zone. Sie umfasst die gesamte Insel Favignana sowie die Ostseiten von Levanzo und Marettimo. Freie Navigation ist möglich; autorisierte Einzel-Tauchgänge sind erlaubt. Sport- und Kleinfischerei ebenfalls mit entsprechender Genehmigung.",
        praxis:
          "Zone C erlaubt Navigation und – an geeignetem Meeresboden – Ankern oder das Nutzen eines Bojenfelds. Posidoniawiesen und ökologisch sensible Böden sind auch in Zone C zu meiden.",
      },
      {
        zone: "Zone D – Pufferzone",
        color: "#1e40af",
        bg: "#eff6ff",
        border: "#93c5fd",
        beschreibung:
          "Das Seegebiet zwischen den Inseln. Hier sind Schleppnetzfischerei und Großreusen unter bestimmten Bedingungen erlaubt. Für Segelyachten und Charterboote ist Zone D praktisch die normale Transitzone zwischen den Inseln.",
        praxis:
          "Für Chartercrews keine wesentlichen Einschränkungen beim Transit. Zone D ist das offene Wasser zwischen Favignana, Levanzo und Marettimo.",
      },
    ].map(({ zone, color, bg, border, beschreibung, praxis }) => (
      <div
        key={zone}
        style={{
          background: bg,
          border: `1px solid ${border}`,
          borderLeft: `4px solid ${color}`,
          borderRadius: "0 8px 8px 0",
          padding: "18px 22px",
          marginBottom: "12px",
        }}
      >
        <p style={{ fontWeight: 700, color, margin: "0 0 8px" }}>{zone}</p>
        <p style={{ margin: "0 0 10px", color: "#374151", lineHeight: 1.65 }}>
          {beschreibung}
        </p>
        <p style={{ margin: 0, color: "#374151", lineHeight: 1.65 }}>
          <strong>Für Crews praktisch:</strong> {praxis}
        </p>
      </div>
    ))}

    <p>
      Die verbindliche Zonenkarte und aktuelle Detailregelungen finden sich auf der
      offiziellen Website der Area Marina Protetta Isole Egadi. Vor dem Törn die
      eigene Route gegen die aktuelle Zonenlogik prüfen – nicht nur gegen den
      Reiseführer.
    </p>

    {/* ── H2: Bojenfelder ─────────────────────────────────────────────────── */}
    <h2 id="bojenfelder">Bojenfelder bei Favignana, Levanzo und Marettimo</h2>
    <p>
      An allen drei Inseln installiert die AMP Isole Egadi saisonal Bojenfelder.
      Diese Felder sind durch geografische Koordinaten abgegrenzt und werden von
      der Schutzgebietsverwaltung betrieben. Sie schützen den Meeresboden vor
      Ankerschäden und geben Chartercrews die Möglichkeit, ohne eigenes Ankern
      schön zu liegen.
    </p>
    <p>
      Für Crews ist der wichtigste Grundsatz: <strong>nicht einfach an irgendeine
      Boje gehen</strong>. Das Nutzen einer Boje im Bojenfeld der AMP erfordert
      eine Autorisierung. Wer ohne gültige Genehmigung an einer AMP-Boje liegt,
      riskiert eine Geldstrafe.
    </p>

    <div
      style={{
        background: "#eef3f8",
        border: "1px solid #b8cfe0",
        borderLeft: "4px solid #0f3460",
        borderRadius: "0 8px 8px 0",
        padding: "18px 22px",
        margin: "1.5rem 0",
      }}
    >
      <p style={{ fontWeight: 700, color: "#0f3460", margin: "0 0 8px" }}>
        Autorisierungen: So funktioniert das System
      </p>
      <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.8 }}>
        <li>
          <strong>Online:</strong> über das offizielle Portal der AMP unter
          autorizzazionionline.ampisoleegadi.it
        </li>
        <li>
          <strong>In den AMP-Büros:</strong> Piazza Europa 3, 91023 Favignana,
          Mo–Fr 10:00–12:00 Uhr
        </li>
        <li>
          <strong>Vor Ort im Bojenfeld:</strong> beim Servicepersonal, jedoch gegen
          eine zusätzliche Verwaltungsgebühr
        </li>
        <li>
          <strong>Gültigkeitsdauern:</strong> täglich, wöchentlich oder monatlich –
          je nach Aufenthalt wählen
        </li>
      </ul>
    </div>

    <p>
      Maßgeblich für aktuelle Gebühren und Konditionen sind die Angaben der Area
      Marina Protetta und des jeweiligen Autorisierungssystems. Preise können
      saisonal angepasst werden – bitte keine Beträge aus älteren Reiseführern
      als verbindlich betrachten.
    </p>
    <p>
      Bojenfelder sind kein Notbehelf, sondern ein durchdachtes System: Sie
      machen klar, wo sicher und erlaubt gelegen werden kann – und schützen
      gleichzeitig Posidonia und sensible Meeresböden, die das Revier erst
      so attraktiv machen.
    </p>

    {/* ── H2: BlueDiscovery-App ───────────────────────────────────────────── */}
    <h2 id="bluediscovery-app">BlueDiscovery-App und Online-Autorisierung</h2>
    <p>
      Die AMP Isole Egadi stellt eine eigene App bereit: <strong>BlueDiscovery</strong>.
      Sie ist kostenlos in den App-Stores von Apple und Google Play verfügbar.
    </p>
    <p>
      Was die App bietet:
    </p>
    <ul>
      <li>
        <strong>Virtuelle Karte:</strong> alle relevanten Punkte des Schutzgebiets
        auf einen Blick – Zoneneinteilung, Bojenstandorte, Ankerpunkte, Tauchbereiche
      </li>
      <li>
        <strong>Autorisierungssystem:</strong> Anträge und Zahlungen für Navigation,
        Ankern, Mooring, Sportfischerei und Tauchen direkt in der App möglich
      </li>
      <li>
        <strong>Meldungsfunktion:</strong> georeferenzierte Fotos für Hinweise oder
        Auffälligkeiten im Schutzgebiet einreichen
      </li>
    </ul>
    <p>
      Die App ist kein lästiges Formular, sondern eine praktische Orientierungshilfe:
      Wo bin ich? Welche Zone gilt? Wo liegen die Bojen? Welche Autorisierung brauche
      ich für diese Bucht?
    </p>
    <p>
      Wichtig: <strong>Die App nicht erst in der Bucht öffnen.</strong> App installieren,
      Karte vorab prüfen und Genehmigungen vor dem Ablegen beantragen. Digitale
      Genehmigungen an Bord verfügbar halten – Screenshot oder PDF-Dokument.
    </p>
    <p>
      Bei einer Charteryacht empfiehlt es sich, die Planung mit der Charterbasis
      abzustimmen. Manche Vercharterer informieren Crews über aktuelle AMP-Regelungen,
      andere setzen voraus, dass sich die Crew eigenständig informiert hat.
    </p>

    {/* ── CTA 2 ──────────────────────────────────────────────────────────── */}
    <CtaBox
      headline="Traumbuchten ja – aber bitte entspannt geplant"
      body="In Schutzgebieten entscheiden nicht nur Wind und Distanz, sondern auch Bojen, Zonen und Autorisierungen. Wir beraten Sie, ob die Ägadischen Inseln zu Ihrer Crew, Saison und Route passen."
      buttonLabel="Beratung für Sizilien anfragen"
    />

    {/* ── H2: Ankern und Baden ─────────────────────────────────────────────── */}
    <h2 id="ankern-und-baden">Ankern und Baden: schön bleiben, richtig planen</h2>
    <p>
      Viele Buchten rund um die Ägadischen Inseln sind malerisch – aber nicht
      jede Bucht ist automatisch ein freier Ankerplatz. Die Zonierung der AMP,
      der Meeresboden und eine eventuelle Autorisierungspflicht bestimmen,
      was wo möglich ist.
    </p>
    <p>
      Einige Orientierungspunkte für Chartercrews:
    </p>
    <ul>
      <li>
        <strong>Posidonia und sensible Meeresböden meiden.</strong> Ankern auf
        Posidoniawiesen ist in der gesamten AMP nicht zulässig. Die Pflanzenbetten
        sind in der BlueDiscovery-App sichtbar und auf nautischen Karten häufig
        markiert. Im Zweifel: Boje statt Anker.
      </li>
      <li>
        <strong>Zone C erlaubt freie Navigation.</strong> In den Bereichen, die
        offiziell als Zone C ausgewiesen sind, ist Ankern an geeignetem Grund
        – also außerhalb ökologisch sensibler Flächen – nach der AMP-Zonierung
        grundsätzlich möglich. Bojenfelder, sofern installiert, haben Vorrang.
      </li>
      <li>
        <strong>Zone B: Autorisierung prüfen.</strong> An der Westseite Levanzo
        und anderen Zone-B-Bereichen gelten strengere Regeln. Vor dem Ankern oder
        Festmachen die aktuelle Regelung über die BlueDiscovery-App oder die AMP
        direkt klären.
      </li>
      <li>
        <strong>Unterwasserfischen und Organismus-Entnahme</strong> sind im
        gesamten Schutzgebiet nicht erlaubt – das gilt für alle Chartercrews,
        unabhängig von Nationalität oder Lizenz.
      </li>
      <li>
        <strong>Bade- und Schnorchelstopps</strong> sind in den meisten Buchten
        möglich und erfreulich. Naturverträglich planen: Abstand zu sensiblen
        Zonen halten, nicht auf Posidonia stehen oder tauchen, keine Tiere
        berühren oder mitnehmen.
      </li>
    </ul>
    <p>
      Bei Unsicherheit gilt: Boje statt Anker, und im Zweifel die AMP-Büros in
      Favignana fragen. Das Personal ist erreichbar und erteilt Auskunft.
    </p>

    {/* ── H2: Törnplanung ──────────────────────────────────────────────────── */}
    <h2 id="toernplanung">Törnplanung: So baut man die Ägadischen Inseln sinnvoll ein</h2>

    <InlineImage
      src="/images/blog/egadi-inseln-yachtcharter-permit-bojen-ankern/Insel-levanzo-cala-dogana.jpg"
      alt="Cala Dogana auf Levanzo mit kleinem Hafenort und türkisfarbenem Wasser"
      caption="Levanzo ist die ruhige Seite der Ägadischen Inseln: ein kleiner Ort, klares Wasser und kurze Wege an Land – ideal für Crews, die bewusst langsamer planen."
    />

    <h3 id="eine-woche-trapani-marsala">Eine Woche ab Trapani oder Marsala</h3>
    <p>
      Für eine Woche ist Favignana als Einstieg ideal. Von Trapani aus erreicht
      man die Insel in zwei bis drei Stunden – je nach Wind auch seglerisch
      anspruchslos. Cala Rossa, Cala Azzurra und der Hafenort geben genug Stoff
      für zwei Nächte und einen vollen Landtag.
    </p>
    <p>
      Levanzo bietet danach den ruhigen Gegenpol: kleinerer Ort, weniger Betrieb,
      Cala Minnola als Ankerstopp. Wer noch Zeit und ein gutes Wetterfenster hat,
      verlängert auf Marettimo – aber ohne Zeitdruck. Marettimo am letzten
      Chartertag zu erzwingen, wenn der Rückweg nach Trapani noch bevorsteht,
      ist kein entspannter Plan.
    </p>
    <p>
      Eine Woche ab Marsala oder Trapani mit Favignana, Levanzo und Rückweg
      funktioniert entspannt. Marettimo als optionalen Bonus planen.
    </p>

    <h3 id="zehn-vierzehn-tage-palermo">Zehn bis vierzehn Tage ab Palermo</h3>
    <p>
      Wer mehr Zeit hat, baut Westsizilien als Route ein:
    </p>
    <div
      style={{
        borderLeft: "4px solid #0f3460",
        paddingLeft: "16px",
        margin: "1.5rem 0",
        color: "#374151",
        lineHeight: 1.8,
      }}
    >
      <p style={{ margin: "0 0 8px", fontWeight: 600, color: "#0f3460" }}>
        Mögliche Route (10–14 Tage)
      </p>
      <p style={{ margin: 0 }}>
        Palermo → Golfo di Castellammare (Tagesstopp oder Übernachtung) →
        San Vito lo Capo → Trapani → Favignana → Levanzo →
        Marettimo (bei passendem Wetter) → Rückweg mit Wetterreserve nach
        Trapani oder Marsala → Palermo
      </p>
    </div>
    <p>
      Diese Route gibt dem Törn Tiefe: Kulturstädte, Naturküste, Fischerdörfer
      und die Inselwelt der Egadi in einem Bogen. Die Strecken sind gut planbar,
      die Infrastruktur ausreichend.
    </p>

    <h3 id="ruhige-variante">Ruhige Variante: weniger Inseln, mehr Zeit</h3>
    <p>
      Wer nicht alle drei Inseln erzwingen möchte, fährt besser mit weniger.
      Favignana und Levanzo geben bereits ein vollständiges Bild des Reviers:
      eine belebte und eine ruhige Insel, gute Buchten, schöne Landgänge.
    </p>
    <p>
      Mehr Zeit pro Insel bedeutet: Landtag mit Fahrrad oder Moped auf Favignana,
      Besuch der Grotta del Genovese auf Levanzo, mehr Badestopps, mehr Ruhe.
      Das Wetterfenster für Marettimo kann man abwarten – und dann entscheiden,
      ob es passt. Kein Törn verliert seinen Wert, wenn Marettimo ausfällt.
    </p>

    {/* ── H2: Typische Fehler ──────────────────────────────────────────────── */}
    <h2 id="typische-fehler">Typische Fehler von Chartercrews</h2>

    <ul>
      <li>
        <strong>Autorisierungen zu spät prüfen.</strong> Wer die BlueDiscovery-App
        erst im Bojenfeld öffnet, verliert Zeit und zahlt ggf. die Vor-Ort-Gebühr.
      </li>
      <li>
        <strong>Bojenfelder wie freie Moorings behandeln.</strong> AMP-Bojen sind
        nicht spontan nutzbar. Eine gültige Autorisierung ist Voraussetzung.
      </li>
      <li>
        <strong>Ankern nach App-Kommentaren statt nach Zone und Meeresboden.</strong>{" "}
        Social-Media-Tipps und alte Reiseführer können veraltet sein. Die aktuelle
        AMP-Karte hat Vorrang.
      </li>
      <li>
        <strong>Marettimo ohne Wetterreserve planen.</strong> Die Insel liegt
        exponiert – ein Puffertag für Wind und See ist keine Vorsichtsmaßnahme,
        sondern vernünftige Planung.
      </li>
      <li>
        <strong>Trapani oder Marsala nicht als Ausweichoptionen denken.</strong>{" "}
        Wenn eine Bucht nicht passt, bieten die westsizilianischen Häfen immer
        eine gute Alternative.
      </li>
      <li>
        <strong>Posidonia-Risiko unterschätzen.</strong> Wer auf Posidoniawiesen
        ankert, riskiert nicht nur eine Strafe, sondern beschädigt irreversibel
        einen wichtigen Lebensraum.
      </li>
      <li>
        <strong>Zu viele Inseln in zu wenig Zeit pressen.</strong> Drei Inseln in
        zwei Tagen – das klingt machbar, ist aber kein entspannter Törn. Lieber
        eine Insel gut als drei Inseln gehetzt.
      </li>
    </ul>

    {/* ── H2: Checkliste ──────────────────────────────────────────────────── */}
    <h2 id="checkliste">Checkliste vor dem Ablegen</h2>

    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "24px 28px",
        margin: "2rem 0",
      }}
    >
      <ul style={{ margin: 0, paddingLeft: "20px", color: "#374151", lineHeight: 1.9 }}>
        <li>Welche Inseln sind für diese Woche realistisch?</li>
        <li>Welche AMP-Zonen werden berührt – Zone A, B, C oder D?</li>
        <li>
          Brauche ich eine Navigation-, Anker- oder Mooring-Autorisierung für die
          geplanten Stopps?
        </li>
        <li>Sind die Bojenfelder bei Favignana, Levanzo und Marettimo saisonal installiert?</li>
        <li>
          Ist die BlueDiscovery-App installiert und getestet – mit Karte und
          Autorisierungsfunktion?
        </li>
        <li>Ist die Genehmigung digital an Bord gespeichert (Screenshot oder PDF)?</li>
        <li>Wo sind Ausweichhäfen bei Wetter oder vollen Bojenfeldern?</li>
        <li>Was sagt die Charterbasis zu aktuellen AMP-Regelungen?</li>
        <li>Gibt es ein Wetterfenster für den Marettimo-Stopp?</li>
        <li>Sind Posidonia-Bereiche in der Karte geprüft und markiert?</li>
        <li>
          Sind Tank, Frischwasser und Proviant für die Inseltage aufgefüllt?
          (Marettimo hat kaum Versorgungsinfrastruktur.)
        </li>
      </ul>
    </div>

    {/* ── H2: Fazit ────────────────────────────────────────────────────────── */}
    <h2 id="fazit">Fazit: Ein Revierjuwel mit klarer Logik</h2>
    <p>
      Die Ägadischen Inseln sind kein Ersatzprogramm für die Liparen – sondern
      ein eigenes kleines Revierjuwel. Favignana bringt Buchten, Ortsleben und
      italienischen Sommer zusammen. Levanzo entschleunigt. Marettimo liefert
      Felsen, klares Wasser und Natur auf engstem Raum.
    </p>
    <p>
      Wer Schutzgebiet, Bojenfelder und Wetterfenster von Anfang an mitdenkt,
      erlebt westlich von{" "}
      <a href="/reviere/mittelmeer/italien/sizilien">Sizilien</a> einen Törn,
      der lange in Erinnerung bleibt: klares Wasser, kleine Orte, Fischerhäfen,
      italienischer Abend und das Bewusstsein, an einem der am besten geschützten
      Teile des Mittelmeers gewesen zu sein.
    </p>
    <p>
      Wer bei der Planung unsicher ist – ob die Egadi-Inseln zur eigenen Crew passen,
      welche Route ab Trapani oder Palermo realistisch ist, oder wie Bojen und
      Autorisierungen in die Charterlogistik passen – kann sich von uns beraten
      lassen. Wir kennen das Revier und helfen, Sizilien-Törns vernünftig
      aufzubauen. Für weitere Orientierung zur Planung von Schutzgebiets-Stopps
      lohnt sich auch ein Blick auf unseren{" "}
      <a href="/blog/richtig-ankern-yachtcharter">
        Guide zum richtigen Ankern mit der Charteryacht
      </a>{" "}
      oder den{" "}
      <a href="/blog/cabrera-yachtcharter-permit-bojen">
        Erfahrungsbericht zu Cabrera
      </a>{" "}
      – einem ähnlich strukturierten Schutzgebiets-Stopp auf den Balearen.
    </p>

    {/* ── Final CTA ──────────────────────────────────────────────────────── */}
    <CtaBox
      size="lg"
      headline="Westsizilien und die Ägadischen Inseln richtig planen"
      body="Ob Favignana, Levanzo, Marettimo, San Vito lo Capo oder Palermo – wir unterstützen Sie bei Revierwahl, Yacht und Törnplanung."
      buttonLabel="Jetzt unverbindlich anfragen"
    />

    {/* ── FAQ ────────────────────────────────────────────────────────────── */}
    <h2 id="faq">Häufige Fragen zu den Ägadischen Inseln mit der Charteryacht</h2>

    <div style={{ marginTop: "1.5rem" }}>
      {[
        {
          q: "Brauche ich für die Ägadischen Inseln eine Genehmigung?",
          a: "Für die Nutzung von Bojenfeldern und das Ankern in bestimmten Zonen der AMP Isole Egadi ist eine Autorisierung erforderlich. Diese kann online über autorizzazionionline.ampisoleegadi.it, in den AMP-Büros in Favignana oder vor Ort beim Servicepersonal (gegen Zusatzgebühr) beantragt werden. Die BlueDiscovery-App bietet ebenfalls eine Antragsmöglichkeit.",
        },
        {
          q: "Darf man auf den Ägadischen Inseln ankern?",
          a: "Ankern ist zonenabhängig. In Zone C (umfasst ganz Favignana und die Ostseiten von Levanzo und Marettimo) ist Ankern an geeignetem Meeresboden nach der Zonierung grundsätzlich möglich – allerdings nicht auf Posidoniawiesen oder ökologisch sensiblen Böden. In Zone B gelten strengere Regeln. In Zone A ist Ankern für Charterboote praktisch nicht möglich. Bojenfelder haben in den entsprechenden Bereichen Vorrang.",
        },
        {
          q: "Was ist die BlueDiscovery-App?",
          a: "Die offizielle App der Area Marina Protetta Isole Egadi. Sie zeigt eine virtuelle Karte mit Zoneneinteilung, Bojenstandorten und Tauchbereichen und ermöglicht Anträge und Zahlungen für Autorisierungen (Navigation, Ankern, Mooring, Sportfischerei, Tauchen). Kostenlos in den App-Stores verfügbar.",
        },
        {
          q: "Welche Insel ist für Einsteiger am besten?",
          a: "Favignana ist der zugänglichste Einstieg: guter Hafen, Versorgung, Liegeplätze, schöne Buchten in Zone C. Levanzo ist ruhiger und kleiner, aber überschaubar. Marettimo ist am anspruchsvollsten und wetterabhängigsten – für Einsteiger besser als optionaler Bonus planen.",
        },
        {
          q: "Von wo startet man am besten zu den Egadi-Inseln?",
          a: "Trapani ist der ideale Ausgangspunkt für einen Egadi-fokussierten Törn – nur rund zwanzig Seemeilen von Favignana entfernt. Marsala ist eine gute Alternative. Ab Palermo empfiehlt sich ein längerer Törn mit mindestens zehn bis vierzehn Tagen, der Westsizilien als Route einbezieht.",
        },
        {
          q: "Darf man auf den Ägadischen Inseln fischen?",
          a: "Sportfischerei ist in bestimmten Zonen mit Genehmigung möglich. Unterwasserfischen und die Entnahme von Organismen aus dem Meer sind im gesamten Schutzgebiet verboten – ohne Ausnahme für Chartercrews.",
        },
        {
          q: "Was kosten die Bojenfelder?",
          a: "Maßgeblich sind die aktuellen Angaben der Area Marina Protetta Isole Egadi und des jeweiligen Autorisierungssystems. Gültigkeitsdauern sind täglich, wöchentlich oder monatlich. Wer die Genehmigung vor Ort beim Personal beantragt, zahlt eine zusätzliche Verwaltungsgebühr.",
        },
        {
          q: "Ist Marettimo für alle Crews geeignet?",
          a: "Marettimo ist für erfahrene und gut vorbereitete Crews ein lohnender Stopp – felsige Küste, klares Wasser, ursprüngliche Natur. Die Insel liegt jedoch exponierter als Favignana und ist stärker wetterabhängig. Für Crews mit engen Zeitplänen oder wenig Erfahrung ist ein Puffertag wichtig. Wer Marettimo nicht erzwingen kann, verliert nichts – Favignana und Levanzo sind bereits ein vollständiges Egadi-Erlebnis.",
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
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   Export
───────────────────────────────────────────────────────────────────────── */
export const egadiInselnYachtcharterPermitBojenAnkern: BlogPost = {
  slug: "egadi-inseln-yachtcharter-permit-bojen-ankern",
  title:
    "Ägadische Inseln mit der Charteryacht: Traumbuchten, Bojen und italienisches Flair",
  seoTitle: "Ägadische Inseln Yachtcharter: Favignana, Levanzo & Marettimo",
  metaDescription:
    "Favignana, Levanzo und Marettimo sind ein Traumziel westlich von Sizilien. Was Chartercrews zu Buchten, Bojen, Permits und Törnplanung wissen sollten.",
  ogImage:
    "/images/blog/egadi-inseln-yachtcharter-permit-bojen-ankern/Cala-azzurra-beach-in-favignana.jpg",
  category: "Reviere & Destinationen",
  date: "2026-06-09",
  teaser:
    "Türkisfarbene Buchten, kleine Fischerorte, italienische Gelassenheit und ein Hauch Geheimtipp: Die Ägadischen Inseln gehören zu den schönsten Zielen ab Westsizilien. Wer Favignana, Levanzo und Marettimo mit der Charteryacht erleben möchte, sollte aber auch Bojenfelder, Schutzgebietszonen und Autorisierungen in die Planung einbeziehen.",
  heroImage:
    "/images/blog/egadi-inseln-yachtcharter-permit-bojen-ankern/Cala-azzurra-beach-in-favignana.jpg",
  heroImageAlt:
    "Cala Azzurra auf Favignana mit türkisfarbenem Wasser und Segelyachten vor der Küste",
  readingTime: 11,
  relatedSlugs: [
    "richtig-ankern-yachtcharter",
    "cabrera-yachtcharter-permit-bojen",
    "yachtcharter-griechenland-welches-revier-passt",
  ],
  content,
  faq: [
    {
      question: "Brauche ich für die Ägadischen Inseln eine Genehmigung?",
      answer:
        "Für die Nutzung von Bojenfeldern und das Ankern in bestimmten Zonen ist eine Autorisierung der AMP Isole Egadi erforderlich. Beantragung online, in den AMP-Büros in Favignana oder vor Ort beim Servicepersonal (gegen Zusatzgebühr).",
    },
    {
      question: "Darf man auf den Ägadischen Inseln ankern?",
      answer:
        "Ankern ist zonenabhängig. In Zone C (Favignana gesamt, Ostseiten von Levanzo und Marettimo) ist Ankern an geeignetem Meeresboden möglich – aber nicht auf Posidoniawiesen. In Zone B gelten strengere Regeln, in Zone A ist Ankern für Charterboote praktisch nicht möglich.",
    },
    {
      question: "Was ist die BlueDiscovery-App?",
      answer:
        "Die offizielle App der AMP Isole Egadi. Sie zeigt Zonenkarte, Bojenstandorte und Tauchbereiche und ermöglicht Autorisierungsanträge für Navigation, Ankern, Mooring, Sportfischerei und Tauchen. Kostenlos in den App-Stores verfügbar.",
    },
    {
      question: "Von wo startet man am besten zu den Egadi-Inseln?",
      answer:
        "Trapani ist der ideale Ausgangspunkt – nur rund zwanzig Seemeilen von Favignana entfernt. Marsala ist eine gute Alternative. Ab Palermo empfiehlt sich ein längerer Törn mit mindestens zehn bis vierzehn Tagen, der Westsizilien als Route einbezieht.",
    },
    {
      question: "Ist Marettimo für alle Crews geeignet?",
      answer:
        "Marettimo ist ein lohnender Stopp für erfahrene Crews mit Zeitpuffer. Die Insel liegt exponierter als Favignana und ist stärker wetterabhängig. Für Crews unter Zeitdruck ist Marettimo als optionaler Bonus besser geeignet als als fixer Pflichtpunkt.",
    },
    {
      question: "Was kosten die Bojenfelder?",
      answer:
        "Maßgeblich sind die aktuellen Angaben der Area Marina Protetta Isole Egadi und des Autorisierungssystems. Gültigkeitsdauern sind täglich, wöchentlich oder monatlich. Vor-Ort-Anträge beim Servicepersonal sind mit einer zusätzlichen Verwaltungsgebühr verbunden.",
    },
    {
      question: "Darf man auf den Ägadischen Inseln fischen?",
      answer:
        "Unterwasserfischen und Organismus-Entnahme sind im gesamten Schutzgebiet verboten. Sportfischerei ist in bestimmten Zonen mit Genehmigung möglich.",
    },
    {
      question: "Welche Insel ist für Einsteiger am besten?",
      answer:
        "Favignana: guter Hafen, Versorgung, schöne Buchten in Zone C. Levanzo ist ruhiger und überschaubar. Marettimo ist am anspruchsvollsten – besser als optionaler Bonus planen.",
    },
  ],
};
