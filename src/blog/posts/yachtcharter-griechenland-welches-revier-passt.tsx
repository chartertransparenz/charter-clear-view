import type { BlogPost } from "../types";

/* ─────────────────────────────────────────────────────────────────────────
   Shared inline-image style helper (figure + figcaption)
   blog-content CSS does not define figure/figcaption rules, so we use
   inline styles for consistency across themes.
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
  <figure
    style={{
      margin: "2.5rem 0",
      padding: 0,
    }}
  >
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
  size = "md",
}: {
  headline: string;
  body: string;
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
    <p style={{ marginBottom: "20px", lineHeight: 1.65, color: "#e8edf2" }}>
      {body}
    </p>
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

/* ─────────────────────────────────────────────────────────────────────────
   Article content
───────────────────────────────────────────────────────────────────────── */
const content = (
  <div>

    {/* ── Intro ──────────────────────────────────────────────────────── */}
    <p>
      Griechenland steht für viele Segler auf der Wunschliste – und das zu Recht. Über 2.000
      Inseln, warmes Licht, türkisblaues Wasser und eine Segeltradition, die Jahrtausende
      zurückreicht. Wer aber „Yachtcharter Griechenland" sucht, als gäbe es nur eine Antwort,
      wird schnell feststellen: Das Land ist kein einziges Segelrevier, sondern viele – und
      sie unterscheiden sich erheblich in Windverhältnissen, Distanzen, Stimmung und dem,
      was eine Crew dort erwartet.
    </p>
    <p>
      Wer das richtige Revier wählt, segelt entspannter, sicherer und mit mehr Freude. Wer
      das falsche Revier bucht, kämpft vielleicht gegen einen Meltemi, den die Crew so nicht
      geplant hatte – oder langweilt sich in einer Region, die ihr zu ruhig ist. Dieser
      Artikel hilft Ihnen, eine realistische Entscheidung zu treffen.
    </p>

    {/* ── Section 1: Überblick ─────────────────────────────────────── */}
    <h2 id="uebersicht">Griechenland ist nicht ein Revier – sondern viele</h2>
    <p>
      Das{" "}
      <a href="/reviere/mittelmeer/griechenland">Segelrevier Griechenland</a>{" "}
      lässt sich grob in fünf Hauptregionen unterteilen, die sehr unterschiedliche
      Chartercharaktere haben:
    </p>
    <ul>
      <li>
        <strong>Ionisches Meer</strong> – die westliche Seite Griechenlands. Grüner,
        geschützter, idealer für Einsteiger und Familien. Start typischerweise ab Korfu,
        Lefkas oder Preveza.
      </li>
      <li>
        <strong>Saronischer / Argolischer Golf</strong> – rund um Athen. Gut erreichbar,
        vielseitig, ideal für eine Woche mit gemischter Crew. Start ab Athen oder Lavrion.
      </li>
      <li>
        <strong>Kykladen</strong> – das ikonische Griechenland mit weißen Dörfern und
        blauer Ägäis. Windreicher, längere Schläge, sportlicher. Ab Lavrion, Paros oder
        Mykonos.
      </li>
      <li>
        <strong>Sporaden</strong> – grüne, ursprüngliche Inseln im Norden der Ägäis.
        Weniger touristisch, ruhigere Atmosphäre. Ab Volos oder Skiathos.
      </li>
      <li>
        <strong>Dodekanes</strong> – die südöstliche Inselgruppe rund um Rhodos und Kos.
        Abwechslungsreich, lange Saison, ideal für Griechenland-Wiederholer.
      </li>
    </ul>
    <p>
      Das beste Revier ist nicht das schönste auf dem Papier – es ist das, das zur Crew,
      zur Saison und zu den Erwartungen passt.
    </p>

    {/* ── Section 2: Entscheidungstabelle ───────────────────────────── */}
    <h2 id="entscheidungshilfe">Schnelle Entscheidungshilfe: Welches Revier passt zu wem?</h2>
    <p>
      Die folgende Tabelle gibt eine erste Orientierung. Darunter erläutern wir jedes Revier
      ausführlicher.
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
              Crew / Wunsch
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Passendes Revier
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Warum
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Einsteiger oder Familien",
              "Ionisches Meer",
              "Geschützt, grün, kurze und flexible Etappen, weniger Wind",
            ],
            [
              "Kurze Anreise, gute Mischung",
              "Saronischer Golf",
              "Direkt ab Athen, vielseitig, kulturreiche Häfen, überschaubare Planung",
            ],
            [
              "Sportliche, erfahrene Crew",
              "Kykladen",
              "Ikonische Landschaft, offene Ägäis, Meltemi, längere Schläge",
            ],
            [
              "Grüne Inseln, ruhigere Atmosphäre",
              "Sporaden",
              "Ursprünglicher, weniger Mainstream, grünere Natur, entspanntere Häfen",
            ],
            [
              "Griechenland-Wiederholer oder längere Saison",
              "Dodekanes",
              "Abwechslungsreich, sonnig, andere Inselwelt, Rhodos bis Kastellorizo",
            ],
            [
              "Unsichere Crew-Zusammensetzung",
              "Ionisches Meer oder Saronischer Golf",
              "Geschütztere Reviere, kürzere Etappen, weniger Stress, mehr Planbarkeit",
            ],
          ].map(([crew, revier, warum], i) => (
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
                {crew}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  color: "#1a5276",
                  fontWeight: 600,
                  verticalAlign: "top",
                  whiteSpace: "nowrap",
                }}
              >
                {revier}
              </td>
              <td
                style={{
                  padding: "12px 16px",
                  color: "#374151",
                  verticalAlign: "top",
                }}
              >
                {warum}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <InlineImage
      src="/images/blog/griechenland-reviere/yachtcharter-griechenland-reviere-detail1.jpg"
      alt="Türkisfarbene Bucht mit bewaldeter Küste in Griechenland"
      caption="Türkisfarbenes Wasser, grüne Hänge und ruhige Ankerplätze: Gerade die geschützteren Reviere Griechenlands zeigen, wie entspannt ein Yachtcharter sein kann."
    />

    <CtaBox
      headline="Sie sind unsicher, welches Revier zu Ihrer Crew passt?"
      body="Wir helfen Ihnen, Saison, Erfahrung und gewünschte Route realistisch einzuordnen – persönlich und ohne Verkaufsdruck."
      buttonLabel="Griechenland-Törn anfragen"
    />

    {/* ── Section 3: Ionisches Meer ────────────────────────────────── */}
    <h2 id="ionisches-meer">Ionisches Meer – entspannt, grün und ideal für Einsteiger</h2>
    <p>
      Das Ionische Meer ist die erste Empfehlung für Crews, die noch nicht viel
      Griechenland-Erfahrung haben – oder einfach einen ruhigen, entspannten Urlaub
      auf dem Wasser wollen. Die Inseln Korfu, Lefkas, Ithaka, Kefalonia, Zakynthos und
      Meganisi bieten kurze Etappen, geschützte Buchten und eine Infrastruktur, die
      Chartercrews gut versorgt.
    </p>
    <p>
      <strong>Typische Startpunkte:</strong> Korfu, Lefkas (Nikiana, Nydri), Preveza.
    </p>
    <p>
      Der Wind ist im Sommer meist moderat – der Maestros bläst zuverlässig, ohne die
      Extremwerte zu erreichen, die man in der Ägäis kennt. Die Inseln sind grüner als im
      östlichen Griechenland, die Buchten ruhiger, die Atmophäre etwas entspannter.
      Tagesrouten von 15 bis 25 Seemeilen sind typisch – genug, um das Segeln zu genießen,
      ohne sich zu überfordern.
    </p>
    <p>
      Das Ionische Meer klingt nach der „einfachen Wahl" – aber das täuscht. Für viele
      Crews ist es der entspannendste und schönste Weg, Griechenland auf einer Yacht zu
      erleben: Baden in türkisfarbenem Wasser, abends in einem kleinen Fischerhafen liegen,
      am nächsten Morgen wieder aufbrechen. Wer das sucht, liegt hier goldrichtig.
    </p>

    {/* ── Section 4: Saronischer Golf ──────────────────────────────── */}
    <h2 id="saronischer-golf">Saronischer Golf – die vielseitige Wahl ab Athen</h2>
    <p>
      Wer von Deutschland aus reist, schätzt die Logistik des Saronischen Golfs. Der
      Flughafen Athen liegt nah an den Startbasen in Alimos oder Lavrion – kein langer
      Transfer, keine Fähre vorab. Das macht den Saronischen Golf zu einer der am leichtesten
      erreichbaren Charteroptionen in Griechenland.
    </p>
    <p>
      <strong>Typische Startpunkte:</strong> Athen (Marina Alimos), Lavrion.
    </p>
    <p>
      Die Reiseziele sind vielseitig: Ägina mit dem Apollotempel, das autofreie Hydra mit
      seinen Steinhäusern und Eseln, das geschäftige Poros, die kleinen Buchten der
      Argolis-Küste am Peloponnes. Eine Woche lässt sich hier gut planen, ohne dabei
      dieselbe Route zweimal fahren zu müssen.
    </p>
    <p>
      Die Windverhältnisse sind in der Regel angenehmer als in den Kykladen. Für eine Crew
      mit gemischter Erfahrung – manche segeln regelmäßig, andere zum ersten Mal – ist das
      ein wichtiger Vorteil. Man kann sportlich segeln, wenn der Wind passt, und ruhig
      einlaufen, wenn er nicht so will.
    </p>

    {/* ── Section 5: Kykladen ──────────────────────────────────────── */}
    <h2 id="kykladen">Kykladen – ikonisch, sportlich und windreicher</h2>
    <p>
      Wenn jemand „Griechenland" sagt und dabei an weiße Dörfer, blaue Kuppeln und offenes
      Meer denkt – dann meint er die Kykladen. Santorin, Mykonos, Paros, Naxos, Milos: Die
      Inseln zählen zu den schönsten und bekanntesten der Welt. Der Preis dafür ist der
      Meltemi.
    </p>
    <p>
      <strong>Typische Startpunkte:</strong> Lavrion, Paros, Syros, gelegentlich Mykonos.
    </p>
    <p>
      Der Meltemi ist ein saisonaler Nordwind, der im Hochsommer – Juli und August – in
      der Ägäis kräftig aufdrehen kann. Windstärke 5 bis 6, manchmal mehr, über mehrere
      Tage: für erfahrene Crews ein tolles Segelerlebnis, für unerfahrene Crews ein
      ernstes Thema. Die Überfahrten zwischen den Inseln sind oft 20 bis 40 Seemeilen –
      längere Schläge als im Ionischen Meer, mit mehr offenem Wasser.
    </p>
    <p>
      Das heißt nicht, dass die Kykladen gefährlich sind. Es heißt, dass Crew, Route und
      Jahreszeit zusammenpassen müssen. Mai und Juni sowie September sind oft die
      angenehmsten Monate – der Meltemi ist schwächer, die Häfen noch nicht überfüllt.
      Wer im August segeln möchte, sollte Reservetage einplanen und flexibel in der
      Routenwahl sein.
    </p>
    <p>
      Wer sich nicht sicher ist, ob Bareboat die richtige Wahl ist, sollte abwägen: Ein
      erfahrener{" "}
      <a href="/blog/bareboat-oder-skipper">Skipper an Bord</a>{" "}
      kann in den Kykladen den Unterschied zwischen einem stressigen und einem
      fantastischen Törn ausmachen – nicht weil die Crew schwach ist, sondern weil lokale
      Kenntnis in windreicheren Revieren viel wert ist.
    </p>

    {/* ── Section 6: Sporaden ──────────────────────────────────────── */}
    <h2 id="sporaden">Sporaden – grün, ursprünglicher und oft unterschätzt</h2>
    <p>
      Wer Griechenland segeln möchte, aber nicht das Touristenmeer der Kykladen sucht,
      sollte die Sporaden in Betracht ziehen. Die nördliche Inselgruppe mit Skiathos,
      Skopelos, Alonnisos und den kleineren Inseln rundherum ist grüner, ruhiger und
      weniger erschlossen als die meisten anderen griechischen Reviere.
    </p>
    <p>
      <strong>Typische Startpunkte:</strong> Volos, Skiathos.
    </p>
    <p>
      Das Nationalpark-Gebiet rund um Alonnisos ist eines der wenigen Meeresschutzgebiete
      Griechenlands – Schildkröten, Mönchsrobben und sauberes Wasser. Die Häfen sind
      kleiner und charaktervoller, die Tavernen authentischer. Wer den Reiz des „noch nicht
      überall entdeckten" Griechenlands sucht, findet ihn hier.
    </p>
    <p>
      Die Windverhältnisse sind moderat und gut planbar. Für Crews mit etwas Erfahrung –
      die die Kykladen vielleicht zu anspruchsvoll finden, das Ionische Meer aber schon
      kennen – sind die Sporaden eine ausgezeichnete Wahl.
    </p>

    {/* ── Section 7: Dodekanes ─────────────────────────────────────── */}
    <h2 id="dodekanes">Dodekanes – sonnig, abwechslungsreich und ideal für Wiederholer</h2>
    <p>
      Die Dodekanes erstrecken sich entlang der türkischen Küste – von Rhodos im Süden bis
      Patmos im Norden, mit Kos, Kalymnos, Simi und Kastellorizo dazwischen. Die Region
      bietet eine andere Inselwelt als die Kykladen oder das Ionische Meer: kleinstädtische
      Hafenatmosphäre, venetianische und osmanische Bausubstanz, viel Sonne und eine
      längere Chartersaison.
    </p>
    <p>
      <strong>Typische Startpunkte:</strong> Kos, Rhodos.
    </p>
    <p>
      Der Dodekanes ist ideal für Crews, die Griechenland bereits kennen und etwas anderes
      sehen möchten – oder für Reisende, die im Frühjahr oder Herbst fahren und eine
      verlässlich gute Saison suchen. Die Etappen sind gut planbar, der Wind im Sommer
      moderat bis frisch. Wer längere Schläge mag und zugleich kulturreiche Häfen schätzt,
      findet hier beides.
    </p>
    <p>
      Wichtig zu wissen: Die Distanzen zwischen den Inseln sind im Dodekanes größer als
      im Saronischen Golf oder Ionischen Meer. Eine gute Törnplanung – idealerweise mit
      Ortskenntnis – ist hier besonders wertvoll.
    </p>

    {/* ── Section 8: Törngefühl ────────────────────────────────────── */}
    <h2 id="toernfuehl">Törngefühl: Nicht nur Wind und Route entscheiden</h2>
    <p>
      Wer einen Griechenland-Törn plant, denkt zuerst an Seemeilen, Windstärke und
      Buchtenoptionen. Das ist richtig – aber nur ein Teil der Gleichung.
    </p>

    <InlineImage
      src="/images/blog/griechenland-reviere/yachtcharter-griechenland-reviere-detail2.jpg"
      alt="Taverne am Wasser in einem griechischen Hafen"
      caption="Nach einem Segeltag in der Ägäis beginnt oft der schönste Teil des Abends: festmachen, ankommen und in einer kleinen Taverne direkt am Wasser den Törn Revue passieren lassen."
    />

    <p>
      Ein Griechenland-Törn lebt auch von den Abenden in einem kleinen Hafen, von einem
      Ouzo an der Kaimauer, von einem Fischerboot, das gerade anlegt. Manche Crews wollen
      genau das: viel Ruhe, wenige Häfen, lange Badeaufenthalte in abgelegenen Buchten.
      Andere wollen jeden Tag woanders sein, die Märkte der Inseln erkunden und abends
      gut essen gehen.
    </p>
    <p>
      Das beeinflusst die Revierwahl stärker, als viele denken. Die Kykladen bieten
      spektakuläre Inseln – aber im August sind manche Häfen sehr voll. Das Ionische Meer
      bietet grüne Ruhe – aber weniger den typischen griechischen Inselflair. Der
      Saronische Golf kombiniert Stadtnähe mit Inselerfahrung. Die Sporaden bieten
      Abgeschiedenheit ohne Einsamkeit.
    </p>
    <p>
      Es lohnt sich, diese Fragen offen zu besprechen – vor der Buchung, nicht danach.
      Eine gute persönliche Beratung fragt genau hier nach: Was erwartet die Crew wirklich
      von diesem Urlaub?
    </p>

    {/* ── Section 9: Häufiger Fehler ───────────────────────────────── */}
    <h2 id="haeufiger-fehler">Häufiger Fehler: Griechenland wie ein einziges Revier behandeln</h2>
    <p>
      Der häufigste Planungsfehler bei einem Griechenland-Charter ist nicht die falsche
      Yacht oder das falsche Budget – es ist die Wahl des falschen Reviers.
    </p>
    <p>
      Eine Familie mit zwei Kindern und Grundkenntnissen im Segeln, die im August die
      Kykladen bucht, wird unter Umständen kämpfen. Eine erfahrene Crew mit sportlichem
      Anspruch, die im Saronischen Golf bleibt, wird vielleicht zu wenig Segelerfahrung
      bekommen. Beides passiert – nicht weil die Buchung schlecht war, sondern weil die
      Passung gefehlt hat.
    </p>
    <p>
      Die gute Nachricht: Das lässt sich vermeiden. Wer sich vor der Buchung kurz beraten
      lässt, wählt das Revier nicht nach dem schönsten Instagram-Bild, sondern nach dem,
      was zur Crew, zur Saison und zum gewünschten Erlebnis passt. Die Startbasis ist
      dabei genauso wichtig wie die Yacht: Wer von der falschen Basis startet, verliert
      wertvolle Törntage für An- und Abreise innerhalb des Reviers.
    </p>

    {/* ── Section 10: Fazit ────────────────────────────────────────── */}
    <h2 id="fazit">Unser Fazit: Das beste Griechenland-Revier hängt von Ihrer Crew ab</h2>
    <p>
      Es gibt kein objektiv bestes Segelrevier in Griechenland – aber es gibt eines, das
      zu Ihrer Crew passt. Hier die Kurzfassung:
    </p>
    <ul>
      <li>
        <strong>Ionisches Meer:</strong> ruhig, grün, einsteigertauglich – ideal für
        Familien und Erstbesucher
      </li>
      <li>
        <strong>Saronischer Golf:</strong> vielseitig, gut erreichbar, kulturreicher Mix
        – ideal für gemischte Crews
      </li>
      <li>
        <strong>Kykladen:</strong> ikonisch, windreicher, sportlicher – ideal für
        erfahrene Crews mit Flexibilität
      </li>
      <li>
        <strong>Sporaden:</strong> grün, ursprünglich, weniger touristisch – ideal für
        Crews, die Ruhe und Natur suchen
      </li>
      <li>
        <strong>Dodekanes:</strong> abwechslungsreich, lange Saison, kulturreiche Häfen
        – ideal für Wiederholer und Herbst-Törns
      </li>
    </ul>
    <p>
      Wer mehr über die einzelnen Reviere erfahren möchte, findet auf unserer{" "}
      <a href="/reviere/mittelmeer/griechenland">Griechenland-Revier-Übersicht</a> alle
      Details zu Startbasen, Windverhältnissen und Saisonzeiten. Und wer sich fragt, was
      ein solcher Törn kostet: Ein realistischer Überblick findet sich im Artikel zu den{" "}
      <a href="/blog/was-kostet-ein-yachtcharter">Kosten eines Yachtcharters</a>.
    </p>

    {/* ── End CTA ──────────────────────────────────────────────────── */}
    <CtaBox
      size="lg"
      headline="Sie planen einen Yachtcharter in Griechenland?"
      body="Wir helfen Ihnen, das passende Revier, die richtige Yacht und einen realistischen Startort zu finden – persönlich, unabhängig und mit über 30 Jahren Charter-Erfahrung."
      buttonLabel="Jetzt Griechenland-Törn anfragen"
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   Export
───────────────────────────────────────────────────────────────────────── */
export const yachtcharterGriechenlandWelchesRevierPasst: BlogPost = {
  slug: "yachtcharter-griechenland-welches-revier-passt",
  title: "Yachtcharter Griechenland: Welches Revier passt zu Ihrer Crew?",
  seoTitle:
    "Yachtcharter Griechenland: Welches Revier passt zu Ihrer Crew? | CharterTransparenz",
  metaDescription:
    "Ionisches Meer, Kykladen, Saronischer Golf, Sporaden oder Dodekanes? Wir zeigen, welches Segelrevier in Griechenland zu Ihrer Crew, Erfahrung und Törnplanung passt.",
  ogImage:
    "/images/blog/griechenland-reviere/yachtcharter-griechenland-revierwahl-hero.jpg",
  category: "Reviere & Destinationen",
  date: "2026-04-28",
  teaser:
    "Griechenland ist nicht ein Segelrevier, sondern viele. Wer das passende Revier wählt, segelt entspannter, sicherer und mit mehr Freude.",
  heroImage:
    "/images/blog/griechenland-reviere/yachtcharter-griechenland-revierwahl-hero.jpg",
  heroImageAlt:
    "Segelyachten vor Santorini als Symbol für Yachtcharter in Griechenland",
  readingTime: 8,
  relatedSlugs: [
    "bareboat-oder-skipper",
    "kroatien-einsteiger",
    "was-kostet-ein-yachtcharter",
  ],
  content,
  faq: [
    {
      question: "Welches Segelrevier in Griechenland eignet sich für Einsteiger?",
      answer:
        "Das Ionische Meer ist die beste Wahl für Einsteiger und Familien. Geschützte Buchten, moderate Winde, kurze Etappen und gute Infrastruktur machen es zum entspanntesten Einstieg in das griechische Chartern. Typische Startbasen sind Lefkas, Preveza und Korfu.",
    },
    {
      question: "Ist der Meltemi in den Kykladen ein Problem?",
      answer:
        "Der Meltemi ist ein saisonaler Nordwind, der in den Kykladen vor allem im Juli und August kräftig wehen kann (Windstärke 5–6, manchmal mehr). Für erfahrene Crews ist das ein tolles Segelerlebnis. Für unerfahrene Crews oder Familien empfehlen wir eher das Ionische Meer oder den Saronischen Golf. Mai, Juni und September sind in den Kykladen deutlich entspannter.",
    },
    {
      question: "Wie unterscheidet sich der Saronische Golf von den Kykladen?",
      answer:
        "Der Saronische Golf liegt direkt vor Athen, ist gut erreichbar und bietet eine Mischung aus Kultur, Inselerfahrung und überschaubarer Segeldistanz. Die Kykladen sind ikonischer, windreicher und bieten längere Überfahrten. Der Saronische Golf passt gut für eine Woche mit gemischter Erfahrung; die Kykladen sind besser für erfahrene Crews.",
    },
    {
      question: "Welches griechische Revier ist am ruhigsten und ursprünglichsten?",
      answer:
        "Die Sporaden in Nordgriechenland sind grüner, weniger touristisch und ruhiger als die Kykladen oder der Saronische Golf. Das Nationalpark-Gebiet rund um Alonnisos ist eines der schönsten Meeresschutzgebiete des Mittelmeers. Die Sporaden eignen sich für Crews, die Natur und Abgeschiedenheit suchen.",
    },
    {
      question: "Brauche ich einen Skipper für die Kykladen?",
      answer:
        "Nicht zwingend – aber für Crews mit wenig Erfahrung im offenen Wasser oder ohne Erfahrung mit dem Meltemi kann ein Skipper den Unterschied zwischen einem stressigen und einem fantastischen Törn ausmachen. Er kennt die lokalen Wetter- und Strömungsmuster und kann flexibel reagieren. Mehr dazu im Artikel Bareboat oder mit Skipper.",
    },
    {
      question: "Wann ist die beste Reisezeit für einen Griechenland-Charter?",
      answer:
        "Mai, Juni und September sind für die meisten Reviere die angenehmsten Monate: angenehme Temperaturen, moderate Winde, weniger überfüllte Häfen. Juli und August sind die sonnigsten Monate, aber der Meltemi in der Ägäis kann stark sein und Häfen sind voller. Das Ionische Meer und der Dodekanes sind auch im Frühjahr und Herbst sehr attraktiv.",
    },
  ],
};
