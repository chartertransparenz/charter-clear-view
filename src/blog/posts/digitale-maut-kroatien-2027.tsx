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
───────────────────────────────────────────────────────────────────────── */
const content = (
  <div>
    <InlineImage
      src="/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png"
      alt="Digitale Maut in Kroatien ab 2027 für die Auto-Anreise zum Yachtcharter"
      caption="Ab 2027 soll Kroatien die Autobahnmaut digital und schrankenlos erheben – für Chartercrews wird die Vorbereitung vor der Abfahrt wichtiger."
      credit="Symbolbild, KI-generiert."
    />

    <p>
      Wer mit dem Auto zur kroatischen Charterbasis fährt, kennt das: Samstagvormittag,
      die Autobahn gut belegt, an der Grenze eine kurze Wartezeit, dann die erste
      Mautstation. Kleingeld bereithalten, Karte zücken, weiterfahren. Ab dem 1. März
      2027 soll dieser Ablauf anders aussehen – nicht weil die Maut entfällt, sondern
      weil sie anders erhoben wird.
    </p>
    <p>
      Kroatien plant, sein Mautsystem auf ein volldigitales, schrankenfreies Verfahren
      umzustellen. Für Chartercrews, die ohnehin mit prall gefüllten Autos, engem
      Zeitplan und dem Gedanken an den Proviantmarkt unterwegs sind, kann das die
      Anreise flüssiger machen. Vorausgesetzt, man hat sich vorher kurz vorbereitet.
    </p>

    <h2 id="was-aendert-sich-2027">Was ändert sich ab 2027?</h2>
    <p>
      Das neue System trägt den Namen <strong>Crolibertas</strong> und soll laut
      kroatischen Behörden ab dem <strong>1. März 2027</strong> vollständig in Betrieb
      gehen. Es handelt sich um eine sogenannte Free-Flow-Maut: Fahrzeuge passieren
      Mautportale, ohne an Schranken halten oder anhalten zu müssen. Die Erfassung
      erfolgt automatisch während der Fahrt.
    </p>
    <p>
      Klassische Mautstationen mit Schranken und Kassenhäuschen sollen dann nicht
      mehr der normale Zahlungsweg sein. Stattdessen werden Kennzeichen automatisch
      erkannt und die anfallende Maut digital abgerechnet. Die kroatische Regierung
      hat die rechtlichen Grundlagen mit dem Gesetz über die Mauterhebung
      (<em>Zakon o naplati cestarine</em>) geschaffen.
    </p>
    <p>
      Wichtig zu verstehen: Kroatien führt dabei <strong>keine Vignette</strong> wie
      Österreich oder Slowenien ein. Die Maut bleibt streckenabhängig – wer weniger
      Autobahn fährt, zahlt entsprechend weniger.
    </p>

    <h2 id="wie-funktioniert-digitale-maut">Wie funktioniert die digitale Maut?</h2>
    <p>
      Das System stützt sich auf zwei Wege der Fahrzeugerkennung:
    </p>
    <ul>
      <li>
        <strong>Automatische Kennzeichenerfassung:</strong> Kameras an den
        Mautportalen lesen das Kennzeichen und ordnen es einem hinterlegten Profil
        oder Fahrzeug zu.
      </li>
      <li>
        <strong>ENC / OBU-Gerät:</strong> Ein elektronisches Bordgerät (On-Board
        Unit), das direkt mit einem Konto verknüpft ist und die Maut automatisch
        bucht.
      </li>
    </ul>
    <p>
      Für die meisten Chartergäste mit privatem Pkw oder Mietwagen bis 3,5 Tonnen
      wird vor allem entscheidend sein, dass <strong>Kennzeichen und Zahlungsmittel
      korrekt hinterlegt sind</strong>. Fahrzeuge ab 3,5 Tonnen – also schwere Vans,
      Transporter oder Wohnmobile – können je nach Fahrzeugklasse anderen Anforderungen
      unterliegen und möglicherweise ein OBU-Gerät benötigen.
    </p>
    <p>
      Wer ohne korrekte Einbindung durch ein Mautportal fährt, riskiert
      Nachforderungen und zusätzliche Gebühren beziehungsweise Sanktionen. Das
      sollte kein Thema sein, wenn die Registrierung vor der Abfahrt erledigt ist.
    </p>

    <h2 id="anreise-charterbasis">Was bedeutet das für die Auto-Anreise zur Charterbasis?</h2>
    <p>
      Die kroatische Adria liegt für viele Crews am Ende einer langen Fahrt durch
      Österreich und Slowenien, mit Grenzübergang und dann der kroatischen Autobahn
      nach{" "}
      <a href="/reviere/mittelmeer/kroatien/zadar">Zadar</a>, Biograd, Sukošan,
      Murter, Šibenik oder weiter nach Trogir, Kaštela und{" "}
      <a href="/reviere/mittelmeer/kroatien/dalmatien-split">Split</a>. Der
      Samstag ist der klassische Anreisetag im{" "}
      <a href="/reviere/mittelmeer/kroatien">Yachtcharter in Kroatien</a> – und
      entsprechend belebt ist die Strecke.
    </p>
    <p>
      Bislang bedeuteten Mautstationen kurze Stopps, die sich bei vollem Verkehr
      durchaus summieren konnten. Mit dem Free-Flow-System entfallen diese Halts
      vollständig. Das kann die Fahrt auf der kroatischen Autobahn gerade in der
      Hochsaison merklich entspannen.
    </p>
    <p>
      Gleichzeitig verschiebt sich die notwendige Vorbereitung: Statt an der
      Schranke zu zahlen, muss das Kennzeichen vorab registriert sein. Wer das
      vergisst oder auf den letzten Metern erledigen möchte, hat ein Problem –
      denn die Portale warten nicht.
    </p>
    <p>
      Der übrige Samstagsablauf bleibt der gleiche: Grenzübergang, kurzer
      Einkaufsmarkt-Stopp, Parkplatz an der Marina, Check-in-Papiere und die
      Crew, die womöglich an verschiedenen Orten startet. All das braucht Puffer.
      Die Maut ist dabei nur ein Baustein – aber einer, der jetzt früher geplant
      sein will.
    </p>

    {/* ── Mid-article CTA ─────────────────────────────────────────────────── */}
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
        Planen Sie Ihren Kroatien-Törn mit Auto-Anreise?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Charterbasis, Yacht und Anreise realistisch
        zusammenzudenken – damit der Törn nicht erst am Steg, sondern schon bei
        der Planung entspannter beginnt.
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
        Kroatien-Törn persönlich planen lassen
      </a>
    </div>

    <h2 id="registrierung">Registrierung: Nicht erst unterwegs klären</h2>
    <p>
      Der offizielle Ausgangspunkt für die Registrierung ist{" "}
      <strong>crolibertas.hr</strong> – die zentrale Projektseite des kroatischen
      Mautsystems. Ob und wie die finale Registrierung für ausländische
      Reisende dort bis zum Reiseantritt 2027 vollständig implementiert sein
      wird, sollte vor der ersten Fahrt im Jahr 2027 nochmals geprüft werden.
      Angekündigt sind Registrierungsmöglichkeiten online, per App, an
      Servicepunkten und an speziellen Spuren – aber die Details sollten kurz
      vor der Saison anhand aktueller offizieller Informationen bestätigt werden.
    </p>
    <p>
      Crews sollten diese Frage nicht auf die lange Bank schieben. Die Erfahrung
      mit ähnlichen Systemumstellungen zeigt: Wer kurz nach dem Start der Saison
      bucht und fährt, trifft auf eine Situation, die sich noch einspielt. Wer
      vorab registriert ist, fährt entspannter.
    </p>

    <p>
      <strong>Checkliste vor der Registrierung:</strong>
    </p>
    <ul>
      <li>Ist das korrekte Kennzeichen des reisenden Fahrzeugs registriert?</li>
      <li>Ist ein gültiges Zahlungsmittel hinterlegt?</li>
      <li>Stimmt die Fahrzeugklasse (Pkw bis 3,5 t oder schweres Fahrzeug)?</li>
      <li>Handelt es sich um ein Mietauto, und wie regelt der Verleih die Maut?</li>
      <li>Sind Van, Wohnmobil oder Anhänger korrekt eingeordnet?</li>
      <li>Reisen mehrere Fahrzeuge der Crew? Dann müssen alle Kennzeichen registriert sein.</li>
    </ul>

    <h2 id="mietwagen-vans-wohnmobile">Mietwagen, Vans, Anhänger und Wohnmobile</h2>
    <p>
      Viele Chartercrews reisen nicht im klassischen Pkw an. Größere Gruppen
      nutzen Vans oder Transporter für Gepäck und Crew, manche kommen mit
      Mietwagen, andere mit Wohnmobil oder Anhänger.
    </p>
    <p>
      Für <strong>Mietwagen</strong> lohnt sich vorab ein kurzer Blick in die
      Mietbedingungen: Manche Mietanbieter regeln Mautzahlungen im Ausland über
      eigene Systeme oder berechnen sie nachträglich. Es sollte klar sein, ob
      das Fahrzeug automatisch eingebunden ist oder ob eine eigene Registrierung
      nötig ist – und was das kostet.
    </p>
    <p>
      Bei <strong>Fahrzeugen über 3,5 Tonnen</strong> – also schweren Vans,
      Transportern, Wohnmobilen oder Gespannen – kann eine andere Fahrzeugklasse
      greifen. Das ist bei der Registrierung anzugeben; falsche Klassenangaben
      können zu Nachforderungen führen. Im Zweifel die offizielle Kategorisierung
      bei crolibertas.hr prüfen.
    </p>
    <p>
      <strong>Anhänger</strong> verändern in vielen Mautsystemen die Fahrzeugklasse.
      Wer mit Bootstrailer oder Gepäckanhänger reist, sollte das vorab klären.
    </p>

    <h2 id="mautpreise">Werden die Mautpreise steigen?</h2>
    <p>
      Die Umstellung auf ein digitales System bedeutet nicht automatisch höhere
      Mautpreise. Tarife und Systemtechnik sind getrennte Themen. Wie sich die
      Mautpreise 2027 konkret entwickeln, lässt sich zum jetzigen Zeitpunkt noch
      nicht abschließend sagen.
    </p>
    <p>
      Die konkreten Preise für einzelne Strecken – etwa von der österreichischen
      Grenze bis Split oder Zadar – sollten vor der Reise über die aktuellen
      Preislisten der <strong>Hrvatske autoceste (HAC)</strong> oder direkt über
      crolibertas.hr geprüft werden. Eine eigene Preistabelle an dieser Stelle
      würde bis 2027 möglicherweise nicht mehr zutreffen.
    </p>

    <h2 id="was-gilt-2026">Was gilt noch 2026?</h2>
    <p>
      Für die Saison 2026 gilt weiterhin das bestehende Mautsystem. Wer in diesem
      Jahr nach Kroatien fährt, zahlt wie gewohnt an klassischen Mautstationen –
      mit Karte, Bargeld oder ENC-Gerät. Daran ändert sich bis zum geplanten
      Start von Crolibertas am 1. März 2027 offiziell nichts.
    </p>
    <p>
      Das Crolibertas-System sollte ab 2027 fester Bestandteil der
      Kroatien-Anreiseplanung werden – ähnlich wie heute die Vignettenprüfung
      vor der Einfahrt nach Österreich oder Slowenien.
    </p>

    <h2 id="checkliste">Praktische Checkliste für Kroatien-Crews ab 2027</h2>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-sm font-semibold text-gray-700 mb-3">Vor der Abfahrt prüfen:</p>
      <ul className="space-y-2">
        {[
          "Kennzeichen bei Crolibertas registriert?",
          "Gültiges Zahlungsmittel hinterlegt?",
          "Richtige Fahrzeugklasse angegeben?",
          "Mietwagenregelung des Anbieters geklärt?",
          "Anhänger, Van oder Wohnmobil korrekt eingeordnet?",
          "Mehrere Crew-Fahrzeuge? Alle Kennzeichen registriert?",
          "Route und Ausfahrt zur Charterbasis geprüft?",
          "Zeitpuffer für Grenze, Einkauf und Check-in eingeplant?",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
            <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <h2 id="fazit">Fazit</h2>
    <p>
      Die digitale Maut könnte die Fahrt zur Adria tatsächlich flüssiger machen –
      besonders an gut belegten Samstagen, wenn Mautstationen bisher für kurze,
      aber spürbare Verzögerungen gesorgt haben. Statt an der Schranke zu warten,
      fährt man einfach durch.
    </p>
    <p>
      Die Kehrseite: Die Vorbereitung findet nicht mehr am Kassenhäuschen statt,
      sondern vorher zu Hause. Wer Kennzeichen und Zahlungsmittel korrekt
      hinterlegt hat, hat am Tag der Anreise nichts zu tun. Wer es vergisst,
      riskiert Nachforderungen – und Stress, den niemand am Beginn eines
      Törns braucht.
    </p>
    <p>
      Je besser die Anreise vorbereitet ist, desto entspannter beginnt der Törn.
    </p>

    <p className="text-sm text-gray-400 mt-6">
      Stand: Mai 2026. Maßgeblich sind die jeweils aktuellen Informationen von
      Crolibertas (crolibertas.hr), Hrvatske autoceste (HAC) und den kroatischen
      Behörden. Alle Angaben ohne Gewähr – Details zum Registrierungsverfahren
      und zu Tarifen sollten vor der ersten 2027-Fahrt nochmals geprüft werden.
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
        Unsicher, welche kroatische Charterbasis zu Ihrer Crew passt?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Ob Zadar, Biograd, Šibenik, Trogir, Kaštela oder Split – wir beraten
        Sie persönlich bei Revierwahl, Yacht und sinnvoller Anreiseplanung.
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

export const digitaleMautKroatien2027: BlogPost = {
  slug: "digitale-maut-kroatien-2027",
  title: "Digitale Maut in Kroatien ab 2027: Was Chartercrews bei der Anreise wissen sollten",
  seoTitle: "Digitale Maut Kroatien 2027: Anreise zum Yachtcharter | CharterTransparenz",
  metaDescription:
    "Kroatien stellt 2027 auf digitale Maut um. Was Chartercrews bei Auto-Anreise, Kennzeichenregistrierung, Zahlung und Planung beachten sollten.",
  ogImage: "/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png",
  category: "Törnplanung & Vorbereitung",
  date: "2026-05-21",
  teaser:
    "Ab 2027 soll Kroatien die Autobahnmaut digital und schrankenlos erheben. Für Chartercrews wird die Anreise zur Adria voraussichtlich flüssiger – aber die Vorbereitung wichtiger.",
  heroImage: "/images/blog/kroatien-digitale-maut-2027/kroatien-digitale-maut-2027-hero.png",
  heroImageAlt:
    "Digitale Maut in Kroatien ab 2027 – Anreise zum Yachtcharter an der Adria",
  readingTime: 7,
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
        "Crolibertas ist der Name des neuen digitalen Mautsystems in Kroatien. Es soll ab 1. März 2027 vollständig in Betrieb gehen und die klassischen Mautstationen mit Schranken ablösen. Fahrzeuge werden dabei automatisch per Kennzeichenerkennung oder OBU-Gerät erfasst.",
    },
    {
      question: "Brauche ich für Kroatien 2027 eine Vignette?",
      answer:
        "Nein. Kroatien führt keine klassische Vignette ein, wie sie in Österreich oder Slowenien gilt. Die Maut bleibt streckenabhängig – wer die Autobahn nutzt, zahlt für die gefahrene Strecke.",
    },
    {
      question: "Was muss ich vor der Anreise nach Kroatien 2027 tun?",
      answer:
        "Vor der ersten Fahrt im Jahr 2027 sollten Kennzeichen und Zahlungsmittel bei Crolibertas registriert sein. Die genaue Vorgehensweise ist über crolibertas.hr oder offizielle kroatische Quellen zu prüfen, da die finale Registrierungsplattform für ausländische Reisende erst kurz vor Reiseantritt 2027 in der endgültigen Form verfügbar sein wird.",
    },
    {
      question: "Was gilt für Mietwagen in Kroatien?",
      answer:
        "Bei Mietwagen sollte vorab geprüft werden, wie der Mietanbieter die kroatische Maut handhabt. Manche Anbieter haben das Fahrzeug bereits eingebunden oder berechnen die Maut nachträglich. Eine eigene Registrierung ist dann unter Umständen nicht nötig – oder aber ausdrücklich vorgesehen. Die Mietbedingungen geben hier Auskunft.",
    },
    {
      question: "Was ändert sich 2026 an der kroatischen Maut?",
      answer:
        "Für die Saison 2026 ändert sich offiziell nichts. Das bestehende System mit klassischen Mautstationen gilt weiterhin. Crolibertas soll planmäßig ab 1. März 2027 in Betrieb gehen.",
    },
  ],
};
