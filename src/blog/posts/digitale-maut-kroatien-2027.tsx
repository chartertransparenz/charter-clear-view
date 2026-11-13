import type { BlogPost } from "../types";

/* ─────────────────────────────────────────────────────────────────────────
   Inline image helper
───────────────────────────────────────────────────────────────────────── */
const InlineImage = ({
  src,
  alt,
  caption,
  credit,
}: {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
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
      {credit && (
        <span style={{ display: "block", fontSize: "0.775rem", marginTop: "3px", color: "#9ca3af" }}>
          {credit}
        </span>
      )}
    </figcaption>
  </figure>
);

/* ─────────────────────────────────────────────────────────────────────────
   Article content
   Rechtsgrundlage: Zakon o naplati cestarine (NN 156/2025), insbesondere
   Art. 3, 15–18, 22, 41, 42, 52, 59, 67; Pravilnik o nazivu i vizualnom
   identitetu ESNC (NN 123/2026). Betreiberabdeckung und Testbetrieb laut
   crolibertas.hr (HAC), Stand 13.11.2026.
───────────────────────────────────────────────────────────────────────── */
/* .blog-content li setzt text-lg – im Update-Kasten explizit überschreiben */
const updateItemStyle = {
  color: "#1a4a7a",
  fontSize: "0.85rem",
  lineHeight: 1.5,
  marginTop: "2px",
};

const content = (
  <div>
    {/* Update-Hinweis */}
    <div
      className="not-prose"
      style={{
        background: "#f0f7ff",
        border: "1px solid #b8d4f0",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "#1a4a7a", fontSize: "0.85rem", margin: 0 }}>
        <strong>Aktualisiert am 13. November 2026.</strong> Inzwischen liegen die
        maßgeblichen kroatischen Rechtsgrundlagen vor. Neu in diesem Beitrag:
      </p>
      <ul style={{ color: "#1a4a7a", fontSize: "0.85rem", margin: "6px 0 0 0", paddingLeft: "1.2rem", listStyle: "disc" }}>
        <li style={updateItemStyle}>offizieller Systemname Crolibertas</li>
        <li style={updateItemStyle}>Start der neuen Regeln am 1. März 2027</li>
        <li style={updateItemStyle}>Pflicht zur Registrierung vor der Autobahnfahrt konkretisiert</li>
        <li style={updateItemStyle}>gesetzlicher Zuschlag von 120 Euro bei Fahrten ohne Registrierung</li>
        <li style={updateItemStyle}>Bußgeldrahmen von 300 bis 600 Euro für Fahrer</li>
      </ul>
    </div>

    <InlineImage
      src="/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png"
      alt="Elektronische Maut Crolibertas in Kroatien ab 2027 – Auto-Anreise zum Yachtcharter"
      caption="Ab 1. März 2027 erhebt Kroatien die Autobahnmaut mit dem System Crolibertas elektronisch und ohne Schranken – für Chartercrews wird die Vorbereitung vor der Abfahrt wichtiger."
      credit="Symbolbild, KI-generiert."
    />

    <p>
      Wer mit dem Auto zur kroatischen Charterbasis fährt, kennt das: Samstagvormittag,
      die Autobahn gut belegt, an der Grenze eine kurze Wartezeit, dann die erste
      Mautstation. Ticket ziehen, an der Ausfahrt mit Karte oder Bargeld zahlen,
      weiterfahren. Ab dem 1. März 2027 sieht dieser Ablauf anders aus – nicht weil die
      Maut entfällt, sondern weil sie anders erhoben wird.
    </p>
    <p>
      Mit dem neuen elektronischen Mautsystem <strong>Crolibertas</strong> stellt
      Kroatien auf eine Maut im freien Verkehrsfluss um: ohne Schranken, ohne Anhalten,
      abgerechnet über Kennzeichen oder Bordgerät. Für Chartercrews heißt das vor allem:
      Die Maut wird nicht mehr unterwegs erledigt, sondern vor der Abfahrt vorbereitet.
    </p>

    <h2 id="was-aendert-sich-2027">Was ändert sich am 1. März 2027?</h2>
    <p>
      Grundlage ist das neue kroatische Mautgesetz (<em>Zakon o naplati cestarine</em>),
      das im Dezember 2025 verabschiedet wurde. Die Bestimmungen zur elektronischen
      Mauterhebung, zu den Pflichten der Autofahrer und zu den Bußgeldern treten am{" "}
      <strong>1. März 2027</strong> in Kraft. Zum selben Datum laufen die bisherigen
      Mautregeln aus. Ab dann gilt:
    </p>
    <ul>
      <li>
        Die Maut wird im <strong>freien Verkehrsfluss</strong> erhoben – Portale über
        der Fahrbahn erfassen die Fahrzeuge, ohne dass jemand anhalten muss.
      </li>
      <li>
        Das Bezahlen an der Mautstation mit Ticket, Karte oder Bargeld entfällt. Die
        Maut wird über ein vorab hinterlegtes Zahlungsmittel abgebucht.
      </li>
      <li>
        Wer die Autobahn nutzt, muss sein Fahrzeug vorher in das System einbinden, also
        registrieren.
      </li>
    </ul>
    <p>
      Die Maut bleibt streckenabhängig. Eine Vignette wie in Österreich oder Slowenien
      führt Kroatien nicht ein. Fahrzeuge mit ausländischem Kennzeichen sind nicht
      ausgenommen: Die Maut wird für alle Fahrzeuge erhoben, die die Autobahn nutzen,
      und darf laut Gesetz nicht nach Zulassungsland unterscheiden. Für deutsche,
      österreichische oder Schweizer Kennzeichen gelten also dieselben Regeln wie für
      kroatische.
    </p>
    <p>
      Crolibertas wird einheitlich auf dem gesamten mautpflichtigen Autobahnnetz
      eingeführt – auf den Strecken von Hrvatske autoceste (HAC), zu denen die A1
      Richtung Zadar, Šibenik und Split gehört, ebenso wie auf den Konzessionsstrecken
      von Bina Istra (Istrisches Ypsilon, wichtig für die Anreise zu den Charterbasen
      in <a href="/reviere/mittelmeer/kroatien/istrien">Istrien</a>) und der Autocesta
      Zagreb–Macelj (A2).
    </p>

    <h2 id="so-funktioniert-crolibertas">So funktioniert Crolibertas</h2>
    <p>
      Crolibertas ist der offizielle Name des elektronischen Mautsystems der Republik
      Kroatien, im Gesetz mit der kroatischen Abkürzung ESNC bezeichnet. Festgelegt
      wurde der Name per Verordnung des Verkehrsministeriums, veröffentlicht im
      Oktober 2026. Das System arbeitet mit zwei Techniken:
    </p>
    <ul>
      <li>
        <strong>Automatische Kennzeichenerkennung:</strong> Kameras an den Mautportalen
        erfassen das Kennzeichen und ordnen die Fahrt dem registrierten Fahrzeug und
        dessen Zahlungsmittel zu.
      </li>
      <li>
        <strong>ENC-Gerät:</strong> ein kleines Bordgerät an der Windschutzscheibe, das
        per Funk mit den Portalen kommuniziert. ENC-Geräte sind in Kroatien schon heute
        im Einsatz.
      </li>
    </ul>
    <p>
      Für Pkw und andere Fahrzeuge bis 3,5 Tonnen zulässiger Gesamtmasse besteht die
      Wahl: Registrierung über das Kennzeichen oder über ein ENC-Gerät. Für Fahrzeuge
      über 3,5 Tonnen ist ein ENC-Gerät Pflicht.
    </p>
    <p>
      Wer bereits ein kroatisches ENC-Gerät besitzt: Nach dem Gesetz müssen die
      Mautbetreiber vorhandene Geräte spätestens zum Systemstart in Crolibertas
      übernehmen. Ob Besitzer dafür selbst etwas tun müssen, sollte vor der ersten
      Fahrt 2027 beim Betreiber geprüft werden.
    </p>
    <p>
      Laut Hrvatske autoceste werden die Portale bereits unter realen
      Verkehrsbedingungen getestet. Dabei kann ein vorhandenes ENC-Gerät mit einem
      Signalton reagieren, und die Durchfahrt wird fotografiert. Bis zum Start am
      1. März 2027 gilt weiterhin das bisherige Mautsystem mit Mautstationen.
    </p>

    <h2 id="registrierung">Registrierung vor der Autobahnfahrt</h2>
    <p>
      Das Gesetz spricht von der „Einbindung“ in das System. Gemeint ist die
      Registrierung des Fahrzeugs: Für einen Pkw werden das Kennzeichen und ein gültiges
      Zahlungsmittel erfasst, bei der Variante mit Bordgerät zusätzlich die Daten des
      ENC-Geräts. Als Zahlungsmittel nennt das Gesetz Kredit-, Debit- oder
      Servicekarten sowie ein ausreichendes Guthaben. Welche Varianten konkret
      akzeptiert werden, legen die Geschäftsbedingungen der Mautbetreiber fest.
    </p>
    <p>
      Die Registrierung muss vor Beginn der Autobahnfahrt bestehen und während der
      gesamten Fahrt gültig bleiben. Verantwortlich dafür ist ausdrücklich auch der
      Fahrer, nicht allein der Halter. Für die Registrierung sieht das Gesetz mehrere
      Wege vor:
    </p>
    <ul>
      <li>die nationale Registrierungsseite crolibertas.hr</li>
      <li>mobile Apps, weitere digitale Dienste und Online-Banking</li>
      <li>eigene Fahrspuren zur schnellen Registrierung an der Autobahn</li>
      <li>Verkaufsstellen der Mautbetreiber und ihrer Vertragspartner</li>
    </ul>
    <p>
      Die Registrierung soll rund um die Uhr möglich sein. Wer mit dem Pkw ohne
      vorherige Registrierung auf die Autobahn fährt, muss sie spätestens an der ersten
      Spur zur Schnellregistrierung nachholen. Entspannter ist es, das bereits vor der
      Abreise zu erledigen.
    </p>
    <p>
      Wie die praktische Registrierung für ausländische Fahrzeuge im Detail ablaufen
      wird, sollte vor Saisonbeginn 2027 nochmals geprüft werden. Stand 13. November
      2026 informiert crolibertas.hr über das System; eine Registrierungsfunktion oder
      App wird dort noch nicht angeboten.
    </p>
    <p>
      Das Kennzeichen sollte genau so erfasst werden, wie es im Fahrzeugschein steht.
      Während der Fahrt muss es gut lesbar sein – auch das schreibt das Gesetz vor.
    </p>

    <h2 id="ohne-registrierung">Was passiert ohne Registrierung?</h2>
    <p>
      Fährt ein Fahrzeug ohne gültige Registrierung unter einem Portal hindurch, wird
      das erfasst. Nach dem Gesetz schuldet der Fahrer dann zweierlei:
    </p>
    <ul>
      <li>
        einen Betrag in Höhe der regulären Maut, die bei ordnungsgemäßer Registrierung
        angefallen wäre, und
      </li>
      <li>
        einen gesetzlichen Zuschlag von <strong>120 Euro</strong>.
      </li>
    </ul>
    <p>
      Für diese Beträge haften neben dem Fahrer auch der Halter sowie, bei Leasing oder
      ähnlichen Verträgen, der Nutzungsberechtigte. Wird die Fahrt erst im Nachhinein
      ausgewertet, erhält der Halter eine schriftliche Zahlungsaufforderung. Bei
      Fahrzeugen aus anderen EU-Staaten kann Kroatien die Halterdaten über den
      europäischen Datenaustausch abfragen.
    </p>
    <p>
      Kontrollen sind auch direkt auf der Autobahn möglich, durch eigene
      Kontrollfahrzeuge des Mautsystems. Wer angehalten wird, muss die Registrierung vor
      Ort nachholen und die offenen Beträge begleichen. Wer das verweigert, muss die
      Autobahn an der nächsten Ausfahrt verlassen und die Beträge dennoch zahlen.
    </p>
    <p>
      Ein <strong>Bußgeld von 300 bis 600 Euro</strong> für den Fahrer sieht das Gesetz
      vor, wenn der Verstoß nicht bereinigt wird. Wer bei einer Kontrolle der
      Aufforderung nachkommt oder die schriftliche Zahlungsaufforderung begleicht, für
      den wird nach dem Gesetz kein Bußgeldverfahren eingeleitet.
    </p>
    <p>
      <strong>Technische Störungen:</strong> Das Gesetz berücksichtigt Fälle, in denen
      eine Registrierung aus Gründen, die beim System selbst liegen, nicht möglich ist.
      Für diese Zeit gelten die Registrierungspflichten nicht. Die Registrierung muss
      aber unverzüglich nachgeholt werden, sobald sie wieder möglich ist, und die Maut
      ist ab der Auffahrt zu zahlen.
    </p>

    <h2 id="bis-zu-720-euro">Bis zu 720 € zusätzlich zur Maut: So setzt sich der Betrag zusammen</h2>
    <p>
      Die oft genannte Summe von 720 Euro ist kein fester Strafbetrag, sondern der
      ungünstigste Fall aus mehreren Positionen:
    </p>
    <ul>
      <li>
        <strong>Maut:</strong> ein Betrag in Höhe der regulären Maut für die gefahrene
        Strecke – er fällt in jedem Fall an.
      </li>
      <li>
        <strong>Gesetzlicher Zuschlag:</strong> 120 Euro für die Nutzung der Autobahn
        ohne Registrierung.
      </li>
      <li>
        <strong>Bußgeld:</strong> 300 bis 600 Euro für den Fahrer, wenn der Verstoß
        weder bei der Kontrolle noch nach der Zahlungsaufforderung bereinigt wird.
      </li>
    </ul>
    <p>
      Wer die Autobahn ohne ordnungsgemäße Einbindung in das neue Mautsystem nutzt, muss
      also mit der regulären Maut und einem gesetzlichen Zuschlag von 120 Euro rechnen.
      Wird der Verstoß nicht bereinigt, kann zusätzlich ein Bußgeld von 300 bis 600 Euro
      hinzukommen. Im ungünstigsten Fall können damit bis zu 720 Euro zusätzlich zur
      eigentlichen Maut zusammenkommen.
    </p>
    <p>
      Der Zuschlag gilt für jede Nutzung der Autobahn ohne Registrierung. Es lohnt
      sich deshalb, die Registrierung vor der Abfahrt zu erledigen – sie zu versäumen,
      kann deutlich teurer werden als die Maut selbst.
    </p>

    <h2 id="yachtcharter-crews">Was bedeutet das für Yachtcharter-Crews?</h2>
    <p>
      Für Crews, die zum{" "}
      <a href="/reviere/mittelmeer/kroatien">Yachtcharter in Kroatien</a> mit dem Auto
      anreisen, ist die neue Maut gut planbar. Die Fahrt führt meist über Österreich und
      Slowenien auf die kroatische Autobahn – nach Istrien und in die Kvarner-Bucht oder
      über die A1 nach Dalmatien.
    </p>
    <p>Für die Planung zählen vor allem diese Punkte:</p>
    <ul>
      <li>
        <strong>Die Registrierung hängt am Fahrzeug, nicht am Fahrer.</strong> Wechseln
        sich mehrere Fahrer innerhalb der Crew ab, ist keine neue Registrierung nötig.
        Für eine gültige Registrierung zu sorgen, ist aber Pflicht jedes Fahrers, und ein
        mögliches Bußgeld richtet sich an den, der am Steuer sitzt.
      </li>
      <li>
        <strong>Jedes Fahrzeug braucht eine eigene Registrierung.</strong> Reist die
        Crew in zwei oder drei Autos an, muss jedes Kennzeichen eingebunden sein.
      </li>
      <li>
        <strong>Das Zahlungsmittel gehört dazu.</strong> Die Maut wird über die
        hinterlegte Karte abgebucht. Wer in der Crew die Karte hinterlegt, sollte das
        vorher absprechen und darauf achten, dass sie bis zur Rückfahrt gültig ist. Ohne
        gültiges Zahlungsmittel gilt ein Fahrzeug als abgemeldet.
      </li>
      <li>
        <strong>Die Rückreise mitdenken.</strong> Nach dem Törn geht es wieder über die
        Autobahn. Kontrollen finden laut Gesetz bevorzugt an Ausfahrten in Richtung der
        Grenzübergänge statt.
      </li>
      <li>
        <strong>Größere Fahrzeuge.</strong> Wer mit Wohnmobil oder Kleinbus über
        3,5 Tonnen zulässiger Gesamtmasse anreist, benötigt ein ENC-Gerät. Bei
        Anhängern sollte vor der Fahrt geprüft werden, wie die Registrierung konkret
        erfolgt.
      </li>
    </ul>
    <p>
      Am übrigen Ablauf des Anreisetags ändert sich wenig: Grenze, Einkauf, Parkplatz an
      der Marina, Check-in. Ob die Crew nach{" "}
      <a href="/reviere/mittelmeer/kroatien/zadar">Zadar</a>, Biograd, Šibenik oder
      weiter nach{" "}
      <a href="/reviere/mittelmeer/kroatien/dalmatien-split">Split</a> fährt – die
      Stopps an den Mautstationen fallen weg. Das kann gerade an vollen Samstagen Zeit
      sparen.
    </p>

    <h2 id="mietwagen-fahrzeugwechsel">Mietwagen und Fahrzeugwechsel</h2>
    <p>
      Viele Crews kombinieren Flug und Mietwagen oder wechseln unterwegs das Fahrzeug.
      Weil die Registrierung an das Kennzeichen gebunden ist, lohnt sich hier ein
      zweiter Blick.
    </p>
    <ul>
      <li>
        <strong>Mietwagen:</strong> Bei Miet- oder Leihfahrzeugen sollte vor der
        Autobahnfahrt geklärt werden, ob das Fahrzeug bereits korrekt im System
        registriert ist beziehungsweise wer die Registrierung übernimmt. Wie einzelne
        Vermieter das 2027 handhaben, ist derzeit nicht bekannt. Für gewerblich
        genutzte Fahrzeuge ist nach dem Gesetz zunächst der Halter zuständig; hat er die
        Registrierung nicht vorgenommen, muss der Fahrer selbst dafür sorgen.
      </li>
      <li>
        <strong>Geliehenes Fahrzeug:</strong> Wer sich ein Auto von Freunden oder
        Familie leiht, sollte klären, ob der Halter es bereits registriert hat und über
        welches Zahlungsmittel abgerechnet wird. Der Halter haftet für offene Beträge
        mit und muss auf Anfrage angeben, wer gefahren ist.
      </li>
      <li>
        <strong>Kurzfristiger Fahrzeugwechsel:</strong> Fällt das eigene Auto aus und
        geht es mit einem Ersatzwagen weiter, gilt die bestehende Registrierung nicht
        für das neue Kennzeichen. Vor der nächsten Autobahnfahrt sollte das
        Ersatzfahrzeug eingebunden werden. Auch Änderungen von Kennzeichen oder
        Zahlungsmittel müssen im System gemeldet werden.
      </li>
    </ul>

    <h2 id="noch-offen">Was wir vor der Saison 2027 noch nicht wissen</h2>
    <p>
      Die Rechtslage ist klar, viele praktische Details stehen aber noch aus. Stand
      13. November 2026 sind unter anderem offen:
    </p>
    <ul>
      <li>
        wie die Registrierung für Fahrzeuge mit ausländischem Kennzeichen konkret abläuft
        und ab wann sie möglich ist,
      </li>
      <li>welche Zahlungsmittel die Mautbetreiber im Einzelnen akzeptieren,</li>
      <li>wo die Spuren zur Schnellregistrierung eingerichtet werden,</li>
      <li>wie Fahrzeuge mit Anhänger im Detail eingebunden werden,</li>
      <li>wie sich die Streckentarife 2027 entwickeln.</li>
    </ul>
    <p>
      Geregelt werden diese Details in einer technischen Durchführungsverordnung und in
      den Geschäftsbedingungen der Mautbetreiber. Maßgeblich sind vor der Abfahrt die
      aktuellen Angaben auf crolibertas.hr und bei den Betreibern.
    </p>

    <h2 id="checkliste">Kurze Checkliste für die Anreise</h2>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-sm font-semibold text-gray-700 mb-3">Vor der Kroatien-Anreise 2027:</p>
      <ul className="space-y-2">
        {[
          "Kurz vor der Abfahrt prüfen, ob Crolibertas wie geplant in Betrieb ist und wie die Registrierung funktioniert.",
          "Jedes Fahrzeug vor der ersten Autobahnfahrt registrieren – mit Kennzeichen und Zahlungsmittel oder ENC-Gerät.",
          "Kennzeichen genau wie im Fahrzeugschein erfassen und am Fahrzeug gut lesbar halten.",
          "Zahlungsmittel hinterlegt und bis zur Rückreise gültig?",
          "Fahrzeug über 3,5 Tonnen? Dann ist ein ENC-Gerät Pflicht.",
          "Mietwagen oder geliehenes Auto: Zuständigkeit für die Registrierung klären.",
          "Fahrzeugwechsel unterwegs: neues Kennzeichen vor der nächsten Autobahnfahrt registrieren.",
          "Hat es vorab nicht geklappt: Registrierung spätestens an der ersten Spur zur Schnellregistrierung nachholen.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <p>
      Die neue Maut ist ein Baustein der Anreise, der sich gut vorbereiten lässt. Wer
      seinen Kroatien-Törn 2027 plant, sollte neben Yacht und Revier auch Anreise und
      Nebenkosten rechtzeitig berücksichtigen. Genau dabei unterstützen wir als
      unabhängige Full-Service-Yachtcharteragentur.
    </p>

    <p className="text-sm text-gray-400 mt-6">
      Stand: 13. November 2026. Grundlage sind das kroatische Mautgesetz (Zakon o
      naplati cestarine, Narodne novine 156/2025), die Verordnung zu Name und
      Erscheinungsbild des Systems (Narodne novine 123/2026) sowie die Informationen von
      Hrvatske autoceste auf crolibertas.hr. Alle Angaben ohne Gewähr – Details zu
      Registrierung und Tarifen sollten vor der ersten Fahrt 2027 nochmals geprüft
      werden.
    </p>

    {/* ── Final CTA ────────────────────────────────────────────────────────── */}
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "2.5rem 0",
      }}
    >
      <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontSize: "1rem" }}>
        Sie planen Ihren Kroatien-Törn 2027?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir beraten Sie unabhängig bei der Auswahl von Yacht, Vercharterer und
        Charterbasis – und behalten dabei auch die praktische Anreise im Blick.
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
        Yachtcharter Kroatien anfragen
      </a>
    </div>
  </div>
);

export const digitaleMautKroatien2027: BlogPost = {
  slug: "digitale-maut-kroatien-2027",
  title: "Kroatien-Maut 2027: Crolibertas startet am 1. März – was Chartercrews wissen sollten",
  seoTitle: "Kroatien-Maut 2027: Crolibertas, Registrierung & Strafen",
  metaDescription:
    "Ab 1. März 2027 gilt Kroatiens neues Mautsystem Crolibertas. Was Autofahrer und Yachtcharter-Crews zu Registrierung, Kosten und Bußgeldern wissen sollten.",
  ogImage: "/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png",
  category: "Törnplanung & Vorbereitung",
  date: "2026-05-21",
  updatedAt: "2026-11-13",
  teaser:
    "Ab 1. März 2027 erhebt Kroatien die Autobahnmaut über das elektronische System Crolibertas. Was Chartercrews zu Registrierung, Mietwagen und Kosten bei fehlender Registrierung wissen sollten.",
  heroImage: "/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png",
  heroImageAlt:
    "Kroatien-Maut 2027 mit Crolibertas – Auto-Anreise zum Yachtcharter an der Adria",
  readingTime: 9,
  relatedSlugs: [
    "kroatien-einsteiger",
    "neue-ankerregeln-kroatien-2026-70-meter-zone",
    "was-kostet-ein-yachtcharter",
  ],
  content,
  faq: [
    {
      question: "Was ist Crolibertas?",
      answer:
        "Crolibertas ist der offizielle Name des elektronischen Mautsystems in Kroatien, im Gesetz als ESNC bezeichnet. Ab 1. März 2027 wird die Maut auf den mautpflichtigen kroatischen Autobahnen im freien Verkehrsfluss ohne Schranken erhoben. Fahrzeuge werden über ihr Kennzeichen oder ein ENC-Bordgerät erfasst, abgerechnet wird über ein hinterlegtes Zahlungsmittel.",
    },
    {
      question: "Brauche ich für Kroatien 2027 eine Vignette?",
      answer:
        "Nein. Kroatien führt keine Vignette ein, wie sie in Österreich oder Slowenien gilt. Die Maut bleibt streckenabhängig – wer die Autobahn nutzt, zahlt für die gefahrene Strecke.",
    },
    {
      question: "Muss ich mein Auto für die Kroatien-Maut 2027 registrieren?",
      answer:
        "Ja. Ab 1. März 2027 muss ein Fahrzeug vor der Autobahnfahrt in Crolibertas eingebunden sein – beim Pkw mit Kennzeichen und gültigem Zahlungsmittel oder über ein ENC-Gerät. Das gilt auch für Fahrzeuge mit ausländischem Kennzeichen. Wie die Registrierung für ausländische Fahrzeuge praktisch abläuft, sollte vor Saisonbeginn 2027 auf crolibertas.hr geprüft werden.",
    },
    {
      question: "Was kostet es, ohne Registrierung auf der Autobahn zu fahren?",
      answer:
        "Fällig werden ein Betrag in Höhe der regulären Maut und ein gesetzlicher Zuschlag von 120 Euro. Wird der Verstoß weder bei einer Kontrolle noch nach der schriftlichen Zahlungsaufforderung bereinigt, kann zusätzlich ein Bußgeld von 300 bis 600 Euro für den Fahrer hinzukommen. Im ungünstigsten Fall sind das bis zu 720 Euro zusätzlich zur Maut.",
    },
    {
      question: "Was gilt für Mietwagen in Kroatien?",
      answer:
        "Bei Miet- oder Leihfahrzeugen sollte vor der Autobahnfahrt geklärt werden, ob das Fahrzeug bereits korrekt im System registriert ist beziehungsweise wer die Registrierung übernimmt. Wie einzelne Vermieter das 2027 handhaben, ist derzeit nicht bekannt. Ist das Fahrzeug nicht eingebunden, muss der Fahrer selbst dafür sorgen.",
    },
    {
      question: "Was gilt bis Ende Februar 2027?",
      answer:
        "Bis zum 28. Februar 2027 gilt das bisherige Mautsystem mit Mautstationen. Die neuen Regeln mit Crolibertas treten am 1. März 2027 in Kraft.",
    },
  ],
};
