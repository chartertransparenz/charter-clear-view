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
      Chalkidiki – auch Halkidiki geschrieben – kennen viele Reisende vom Landurlaub: die
      drei Halbinsel-„Finger" Kassandra, Sithonia und Athos, kilometerlange Sandstrände und
      Ferienorte mit gut ausgebauter Infrastruktur. Vom Wasser aus zeigt sich die Region
      deutlich ursprünglicher, als es der Landurlaub vermuten lässt: bewaldete Küsten,
      stille Buchten, der Blick auf den Heiligen Berg Athos – und spürbar weniger
      Charterverkehr als in den bekannten griechischen Segelrevieren.
    </p>
    <p>
      Genau das macht die Planung anspruchsvoller. Anders als in Athen, an der Kykladen-Küste
      oder auf Lefkas gibt es in Nordgriechenland nur eine Handvoll Charterbasen – und sie
      liegen nicht alle gleich günstig für jede Route. Wer sich für die falsche Basis
      entscheidet, verliert wertvolle Segeltage für Transfer und Anreise oder verpasst genau
      die Buchten, wegen derer er eigentlich losgefahren ist. Dieser Artikel ordnet die
      Optionen ein: welche Basis zu welcher Route passt, was Nikiti von Keramoti und Kavala
      unterscheidet – und wie eine sinnvolle Woche oder zwei Wochen Chalkidiki aussehen können.
    </p>

    {/* ── Section 1: Chalkidiki vom Wasser ─────────────────────────────── */}
    <h2 id="chalkidiki-vom-wasser">Chalkidiki vom Wasser aus</h2>
    <p>
      Wer Chalkidiki bisher nur von Strandurlauben in Kassandra oder Sithonia kennt, wird
      an Bord einer Yacht eine andere Seite der Region entdecken. Zwischen den belebten
      Ferienorten liegen lange, unbewohnte Küstenabschnitte mit Pinienwald bis zum
      Wasser, kleine Fischerhäfen und Buchten, die vom Landweg kaum oder gar nicht zu
      erreichen sind. Dazu kommt die Nähe zum Heiligen Berg Athos, dessen Klosterküste sich
      ausschließlich vom Meer aus besichtigen lässt – ein Erlebnis, das es in dieser Form
      sonst nirgendwo in der Ägäis gibt.
    </p>
    <p>
      Im Vergleich zu den{" "}
      <a href="/reviere/mittelmeer/griechenland/kykladen">Kykladen</a> oder dem{" "}
      <a href="/reviere/mittelmeer/griechenland">Saronischen Golf</a> ist Nordgriechenland
      seglerisch noch ein Nischenrevier. Das bedeutet weniger überlaufene Ankerbuchten und
      entspanntere Häfen – aber auch weniger Infrastruktur, kleinere Charterflotten und eine
      Basiswahl, die deutlich sorgfältiger getroffen werden sollte als in etablierten
      Charterzentren.
    </p>

    {/* ── Section 2: Warum die Basiswahl wichtiger ist ─────────────────── */}
    <h2 id="basiswahl">Warum die Basiswahl in Nordgriechenland wichtiger ist als anderswo</h2>
    <p>
      In Athen oder auf Lefkas kann eine falsche Basisentscheidung meist noch durch die
      schiere Dichte an Zielen in der Nähe ausgeglichen werden. In Nordgriechenland ist das
      anders: Die Region ist großflächig, die Distanzen zwischen den einzelnen
      Revierabschnitten sind spürbar länger, und es gibt schlicht nur wenige Orte, an denen
      überhaupt eine Charterflotte stationiert ist.
    </p>
    <p>
      Thessaloniki ist dabei ein wichtiger, aber oft missverstandener Faktor. Als größter
      Flughafen Nordgriechenlands ist Thessaloniki die naheliegende Anreiseoption für
      Chalkidiki, Nikiti und Sithonia – die passenden Yachtbasen liegen aber meist nicht in
      der Stadt selbst, sondern rund eine bis zwei Stunden Transferzeit entfernt auf der
      Halbinsel. Für einen klassischen Chalkidiki-Törn ist Thessaloniki also in erster Linie
      der Anreiseflughafen, nicht zwingend der praktischste Ausgangshafen.
    </p>
    <p>
      Welche Basis am Ende sinnvoll ist, hängt stark vom gewünschten Törncharakter ab:
    </p>
    <ul>
      <li>
        <strong>Nikiti</strong> – naheliegend für klassische Chalkidiki-Routen: Sithonia,
        die Lagunen um Diaporos und der Blick Richtung Athos liegen in überschaubarer
        Distanz.
      </li>
      <li>
        <strong>Keramoti oder Kavala</strong> – spannend für Crews, die Thasos, Athos und
        Sithonia in einer größeren Nordägäis-Route verbinden möchten, dafür aber auch
        längere Übergangsetappen einplanen.
      </li>
      <li>
        <strong>Kleinere Basen</strong> wie Nea Peramos oder Avdira – je nach Charterreederei
        und Saison eine Option, aber mit deutlich kleinerer Flottenauswahl und individuell
        zu prüfender Verfügbarkeit.
      </li>
    </ul>

    {/* ── Section 3: Basisvergleich ─────────────────────────────────────── */}
    <h2 id="basisvergleich">Die wichtigsten Ausgangsbasen im Vergleich</h2>
    <p>
      Aktuell gelten Nikiti und Keramoti beziehungsweise Kavala als die beiden
      nennenswerten Charterstützpunkte Nordgriechenlands. Daneben tauchen bei einzelnen
      Reedereien weitere, kleinere Stützpunkte auf – deren Flottengröße und Verfügbarkeit
      aber deutlich stärker vom jeweiligen Anbieter und von der Saison abhängt. Die folgende
      Übersicht ordnet die Optionen ein:
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
              Basis
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Passt für
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Vorteil
            </th>
            <th style={{ padding: "12px 16px", textAlign: "left", fontWeight: 600 }}>
              Einschränkung
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Nikiti",
              "Chalkidiki, Sithonia, Diaporos, Athos-Blick",
              "Kurze Wege in die schönsten Buchten der Region",
              "Kleinere Flottenauswahl als in großen griechischen Charterzentren",
            ],
            [
              "Keramoti / Kavala",
              "Thasos, Athos, Sithonia, Nordägäis",
              "Ursprünglicher, abwechslungsreicher Routenzuschnitt",
              "Längere Übergangsetappen zwischen den Revierteilen",
            ],
            [
              "Nea Peramos",
              "Festlandküste, Thasos, Athos-Landenge",
              "Gute Zwischenposition zwischen Kavala und Chalkidiki",
              "Verfügbarkeit und Flottengröße je nach Anbieter prüfen",
            ],
            [
              "Avdira / Xanthi",
              "Thasos / Nordägäis",
              "Ruhiger, wenig frequentierter Startpunkt",
              "Nischenbasis, Yachtauswahl auf Anfrage zu klären",
            ],
            [
              "Thessaloniki",
              "Anreise, Stadtaufenthalt, Orientierung",
              "Größter Flughafen der Region, gute Flugverbindungen",
              "Für klassische Chalkidiki-Törns meist nicht die praktischste Yachtbasis",
            ],
          ].map(([basis, passt, vorteil, einschraenkung], i) => (
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
                  color: "#1a5276",
                  verticalAlign: "top",
                  whiteSpace: "nowrap",
                }}
              >
                {basis}
              </td>
              <td style={{ padding: "12px 16px", color: "#111827", verticalAlign: "top" }}>
                {passt}
              </td>
              <td style={{ padding: "12px 16px", color: "#374151", verticalAlign: "top" }}>
                {vorteil}
              </td>
              <td style={{ padding: "12px 16px", color: "#374151", verticalAlign: "top" }}>
                {einschraenkung}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <InlineImage
      src="/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/nikiti-marina-chalkidiki.jpg"
      alt="Marina und Küste bei Nikiti in Chalkidiki mit Pinienwald"
      caption="Nikiti auf Sithonia ist für viele klassische Chalkidiki-Routen die naheliegende Basis – mit kurzen Wegen zu den schönsten Buchten der Halbinsel."
    />

    <CtaBox
      headline="Unsicher, welche Basis zu Ihrer Route passt?"
      body="Nikiti, Keramoti, Kavala oder eine kleinere Basis – wir ordnen die Optionen für Ihre Crew, Reisezeit und Wunschroute ein."
      buttonLabel="Unverbindlich beraten lassen"
    />

    {/* ── Section 4: Route A – Nikiti ──────────────────────────────────── */}
    <h2 id="route-nikiti">Route A: 7 bis 10 Tage ab Nikiti</h2>
    <p>
      Diese Route trifft am ehesten das, was die meisten unter „Yachtcharter Chalkidiki"
      verstehen: kurze bis mittlere Etappen, viele Badebuchten und ein Revier, das sich
      innerhalb einer Woche gut erleben lässt, ohne jeden Tag lange Strecken zurücklegen zu
      müssen. Sie eignet sich für Crews mit einer Woche Zeit ebenso wie – etwas entspannter
      getaktet – für zehn Tage.
    </p>
    <p>Eine mögliche, flexibel anpassbare Reihenfolge:</p>
    <ul>
      <li><strong>Nikiti</strong> – Übernahme, erste kurze Schläge entlang der Sithonia-Küste.</li>
      <li><strong>Neos Marmaras / Porto Carras</strong> – geschützte Marina, guter Zwischenstopp mit Infrastruktur.</li>
      <li><strong>Porto Koufo</strong> – einer der am besten geschützten Naturhäfen der gesamten Ägäis.</li>
      <li><strong>Sarti oder Kavourotrypes</strong> – Badebuchten an der Ostküste Sithonias.</li>
      <li><strong>Vourvourou / Diaporos</strong> – flache Lagunen mit karibisch anmutenden Farben.</li>
      <li><strong>Ammouliani / Drenia</strong> – kleine Inseln zwischen Sithonia und Athos, ideal für Badestopps.</li>
      <li><strong>Ouranoupoli</strong> – letzter ziviler Ort vor der Athos-Halbinsel, mit Blick Richtung Kloster­küste.</li>
      <li>Rückweg nach <strong>Nikiti</strong>, mit Puffertag für Wetter oder einen zweiten Stopp in einer Lieblingsbucht.</li>
    </ul>
    <p>
      Diese Route lebt von kurzen bis mittleren Etappen und vielen Ankerstopps zum Baden und
      Schnorcheln – sie ist bewusst als Idee zu verstehen, nicht als starres Muss. Je nach
      Wetter, Crew-Erfahrung und verfügbarer Zeit lässt sich die Reihenfolge tauschen oder
      um einen Tag in einer besonders schönen Bucht verlängern.
    </p>

    {/* ── Section 5: Route B – Keramoti/Kavala ─────────────────────────── */}
    <h2 id="route-keramoti">Route B: 10 bis 14 Tage ab Keramoti oder Kavala</h2>
    <p>
      Wer mehr Zeit mitbringt und ein ursprünglicheres Nordägäis-Erlebnis sucht, findet ab
      Keramoti oder Kavala eine der spannendsten Routenkombinationen Griechenlands: Thasos,
      die Athos-Küste und Sithonia lassen sich in einem großen Rundtörn verbinden – auf
      Kosten etwas längerer Übergangsetappen, die wetterabhängig geplant werden sollten.
    </p>
    <p>Eine mögliche Route für erfahrenere Crews oder einen Törn mit Skipper:</p>
    <ul>
      <li><strong>Keramoti oder Kavala</strong> – Übernahme, kurzer Schlag hinüber nach Thasos.</li>
      <li><strong>Limenas (Thasos)</strong> – Hafenstadt mit antikem Theater direkt im Ortskern.</li>
      <li><strong>Aliki</strong> – Doppelbucht an den antiken Marmorbrüchen, einer der schönsten Ankerplätze der Insel.</li>
      <li><strong>Nea Peramos</strong> – Übergang zur Festlandküste des Strymonischen Golfs.</li>
      <li><strong>Ierissos / Nea Roda</strong> – an der schmalen Landenge zur Athos-Halbinsel.</li>
      <li><strong>Ammouliani</strong> – letzter ziviler Stopp vor der Klosterküste.</li>
      <li>Fahrt entlang der <strong>Athos-Küste</strong> im geschützten Singitischen Golf, mit Blick auf die Klöster vom Wasser aus.</li>
      <li><strong>Sarti oder Kavourotrypes</strong> – Badestopp an der Ostküste Sithonias.</li>
      <li><strong>Porto Koufo</strong> und <strong>Toroni</strong> – Naturhafen und antike Ausgrabungsstätte am Wasser.</li>
      <li><strong>Vourvourou / Diaporos</strong> – Lagunen-Highlight vor dem Rückweg.</li>
      <li>Rückweg mit eingeplantem <strong>Wetterpuffer</strong> nach Keramoti oder Kavala.</li>
    </ul>
    <p>
      Der Rundtörn braucht spürbar mehr Zeit als die Nikiti-Route – zehn bis vierzehn Tage
      sind realistisch, je nachdem wie viele Ankertage eingeplant werden. Die Übergänge
      zwischen Thasos und Chalkidiki sind die längsten Etappen der Route und sollten mit
      frühem Start und einem wachsamen Blick aufs Wetterfenster geplant werden.
    </p>

    <InlineImage
      src="/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/thasos-aliki-luftaufnahme.jpg"
      alt="Luftaufnahme der Doppelbucht von Aliki auf Thasos"
      caption="Aliki auf Thasos verbindet klares Wasser, antike Marmorbrüche und einen geschützten Ankerplatz – ein beliebter Auftakt für Törns ab Keramoti oder Kavala."
    />

    <p>
      Ein Highlight dieser Route ist die Passage entlang der Athos-Küste. Der autonome
      Mönchsstaat lässt sich ausschließlich vom Wasser aus besichtigen: Fremden Booten ist
      das Anlegen und Anlanden untersagt, üblicherweise wird ein Küstenabstand von rund 500
      Metern eingehalten, der auch von Patrouillenbooten kontrolliert wird. Innerhalb dieses
      Abstands lassen sich die dramatisch auf Felsvorsprüngen gebauten Klöster – etwa
      Simonopetra oder Dionysiou – gut erkennen, ohne die Regeln der Mönchsrepublik zu
      verletzen.
    </p>

    <InlineImage
      src="/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/athos-kloster-simonopetra.jpg"
      alt="Kloster Simonopetra auf einem Felsvorsprung am Berg Athos"
      caption="Die Klöster am Berg Athos, hier Simonopetra, sind nur vom Wasser aus zu sehen – Landgang und Anlegen sind für fremde Boote nicht gestattet."
    />

    {/* ── Section 6: Schönste Stopps ────────────────────────────────────── */}
    <h2 id="schoenste-stopps">Die schönsten Stopps auf dem Weg</h2>

    <h3>Limenas und Aliki auf Thasos</h3>
    <p>
      Limenas, die Hafenstadt von Thasos, verbindet ein antikes Theater und eine antike Agora
      direkt im Ortskern mit einem lebendigen Hafenalltag. Aliki, an der Südostküste der
      Insel, gilt als eine der schönsten und geschütztesten Buchten von Thasos – eine
      Doppelbucht an alten Marmorbrüchen, mit Tavernen direkt am Wasser.
    </p>

    <h3>Ammouliani und Drenia</h3>
    <p>
      Die kleine, bewohnte Insel Ammouliani liegt der Athos-Landzunge direkt vorgelagert und
      ist der letzte zivile Stopp vor der Mönchsrepublik. Die vorgelagerten Drenia-Inseln
      bieten türkisfarbene Badebuchten, die sich gut in kurze Tagesetappen einbauen lassen.
    </p>

    <h3>Die Athos-Küste</h3>
    <p>
      Vom Wasser aus zeigt sich der Berg Athos als bewaldete, steile Küste mit den Klöstern
      als markanten Ausblickpunkten. Die Fahrt entlang der Westseite im Singitischen Golf
      ist landschaftlich einer der eindrucksvollsten Abschnitte der gesamten Nordägäis.
    </p>

    <h3>Sarti und Kavourotrypes</h3>
    <p>
      An der Ostküste Sithonias liegen mit Sarti und den Kavourotrypes-Buchten einige der
      bekanntesten Badestopps der Region: klares Wasser, helle Felsen und Kiefernwald bis
      an den Strand.
    </p>

    <InlineImage
      src="/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/sithonia-sarti-strand.jpg"
      alt="Küstenort Sarti an der Ostküste von Sithonia bei Sonnenuntergang"
      caption="Sarti an der Ostküste Sithonias: langer Sandstrand, Kiefernwald und ein beliebter Zwischenstopp auf dem Weg Richtung Porto Koufo."
    />

    <h3>Porto Koufo</h3>
    <p>
      Der geschlossene Naturhafen an der Südspitze Sithonias gilt vielen Seglern als einer
      der besten und sichersten Naturhäfen der gesamten Ägäis – ein ruhiger Ankerplatz mit
      Tavernen und kleiner Infrastruktur an Land.
    </p>

    <h3>Toroni</h3>
    <p>
      Die antike Stadt Toroni war in der Antike von strategischer Bedeutung; Reste der alten
      Hafenanlage sind beim Schnorcheln im flachen Wasser sichtbar. An Land lockt einer der
      ausgedehntesten Strände Chalkidikis.
    </p>

    <h3>Vourvourou und Diaporos</h3>
    <p>
      Die Lagunen rund um die kleine Insel Diaporos zählen zu den fotogensten Ankerplätzen
      Nordgriechenlands: flaches, sehr klares Wasser über Sandgrund, geschützt zwischen
      vorgelagerten Inselchen – ideal zum Baden, Schnorcheln und für einen entspannten
      Ankertag.
    </p>

    {/* ── Section 7: Kassandra ──────────────────────────────────────────── */}
    <h2 id="kassandra">Kassandra: möglich, aber nicht immer sinnvoll</h2>
    <p>
      Wer alle drei „Finger" Chalkidikis auf einem Törn erleben möchte, braucht dafür mehr
      Zeit oder muss die Route bewusst anders zuschneiden. Für einen ersten Törn ab Nikiti
      sind Sithonia, Diaporos, Ammouliani und der Blick Richtung Athos meist die rundere
      Wahl – Kassandra liegt zusätzlich im Thermaischen beziehungsweise Toronäischen Golf
      und würde die Route um weitere Etappen verlängern. Ab Keramoti oder Kavala liegt der
      sinnvolle Schwerpunkt ohnehin auf Thasos, Athos und Sithonia; Kassandra ist von dort
      aus ein zusätzlicher Umweg. Als eigenständige Erweiterung für einen längeren oder
      speziell auf Chalkidiki fokussierten Törn ist Kassandra mit seinen langen Sandstränden
      und der Marina Miraggio dennoch eine Option, die sich individuell mit einer
      Charterberatung abstimmen lässt.
    </p>

    {/* ── Section 8: Wetter ─────────────────────────────────────────────── */}
    <h2 id="wetter">Wetter, Wind und Törnplanung</h2>
    <p>
      Nordgriechenland gilt im Vergleich zu den Kykladen als das ruhigere Ägäis-Revier – der
      Meltemi weht hier in der Regel schwächer und berechenbarer. Ganz ausschließen lässt er
      sich aber nicht: Auch im September kann er noch auftreten, meist mit einem typischen
      Tagesgang, der ab dem späten Vormittag auffrischt und zum Abend hin wieder nachlässt.
      An Landzungen und in Meerengen können lokale Düseneffekte den Wind zusätzlich
      verstärken – das betrifft insbesondere die Übergänge zwischen Thasos, der
      Festlandküste und der Athos-Landenge.
    </p>
    <p>
      Kap Athos selbst gilt seit der Antike als wetteranfällig; eine Umrundung der Spitze
      sollte nicht leichtfertig geplant werden. Die Fahrt durch den geschützteren
      Singitischen Golf entlang der Westküste ist die sinnvollere Wahl, um die Klosterküste
      zu erleben, ohne sich unnötigem Seegang auszusetzen. Auf den längeren Etappen –
      insbesondere zwischen Thasos und Chalkidiki – empfiehlt sich generell ein früher
      Start, um am Nachmittag, wenn der Wind meist am stärksten steht, bereits im
      geschützten Ankerplatz zu liegen.
    </p>

    {/* ── Section 9: Für wen ────────────────────────────────────────────── */}
    <h2 id="fuer-wen">Für wen passt ein Chalkidiki-Törn?</h2>
    <ul>
      <li>
        <strong>Einsteiger:</strong> eher die kurze Variante ab Nikiti, bei Bedarf mit
        Skipper an Bord.
      </li>
      <li>
        <strong>Fortgeschrittene:</strong> Nikiti oder Keramoti/Kavala – je nachdem, wie
        viel Zeit zur Verfügung steht.
      </li>
      <li>
        <strong>Familien:</strong> Nikiti und Sithonia mit kurzen Etappen und vielen
        Badebuchten.
      </li>
      <li>
        <strong>Entdecker:</strong> die große Route ab Keramoti oder Kavala mit Thasos und
        Athos.
      </li>
      <li>
        <strong>Katamaran-Crews:</strong> buchtenorientierte Routen wie Diaporos oder Porto
        Koufo – Verfügbarkeit der Yacht vorab prüfen.
      </li>
      <li>
        <strong>Crews mit rund einer Woche Zeit:</strong> eher Nikiti als der große
        Keramoti-Sithonia-Rundtörn.
      </li>
      <li>
        <strong>Crews mit zehn bis vierzehn Tagen:</strong> die Route ab Keramoti oder
        Kavala ist gut umsetzbar.
      </li>
    </ul>
    <p>
      Wer sich grundsätzlich noch nicht sicher ist, ob Bareboat oder ein Törn mit Skipper die
      passendere Wahl ist, findet dazu Hintergründe im Artikel{" "}
      <a href="/blog/bareboat-oder-skipper">Bareboat oder Skipper?</a>. Gerade auf den
      längeren Etappen der Keramoti-Route und entlang der Athos-Küste kann lokale
      Ortskenntnis den Unterschied machen.
    </p>

    {/* ── Section 10: Fazit ─────────────────────────────────────────────── */}
    <h2 id="fazit">Fazit: Die Basis entscheidet über den Charakter Ihres Chalkidiki-Törns</h2>
    <p>
      Nordgriechenland ist kein Revier, in dem jede Basis zu jeder Route passt. Nikiti ist
      für die meisten klassischen Chalkidiki-Törns die naheliegende Wahl, Keramoti und Kavala
      öffnen die Tür zu einer größeren, ursprünglicheren Nordägäis-Route mit Thasos und
      Athos. Kleinere Stützpunkte wie Nea Peramos oder Avdira können je nach Anbieter eine
      zusätzliche Option sein, sollten aber individuell geprüft werden. Wer diese
      Unterschiede kennt, bevor die Buchung steht, plant nicht nur entspannter, sondern
      erlebt am Ende auch die Route, die wirklich zur Crew passt.
    </p>
    <p>
      Mehr zu Wind, Marinas und Saisonzeiten in der gesamten Region finden Sie auf unserer{" "}
      <a href="/reviere/mittelmeer/griechenland/nordgriechenland">
        Revierseite Yachtcharter Nordgriechenland
      </a>
      . Wer sich für weitere griechische Reviere interessiert, findet einen Überblick unter{" "}
      <a href="/reviere/mittelmeer/griechenland">Yachtcharter Griechenland</a>.
    </p>

    <CtaBox
      size="lg"
      headline="Welche Basis passt zu Ihrem Chalkidiki-Törn?"
      body="Ob Nikiti, Keramoti, Kavala oder eine kleinere Basis auf Sithonia: In Nordgriechenland ist die Auswahl an Yachten kleiner als in Athen, Lefkas oder Korfu. Wir prüfen, welche Basis, Yacht und Route zu Ihrer Crew, Reisezeit und Erfahrung passt – und ob Bareboat, Katamaran oder ein Törn mit Skipper die bessere Wahl ist."
      buttonLabel="Griechenland-Charter anfragen"
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────
   Export
───────────────────────────────────────────────────────────────────────── */
export const yachtcharterChalkidikiThessalonikiNikitiKeramoti: BlogPost = {
  slug: "yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti",
  title: "Yachtcharter Chalkidiki: Welche Basis passt zu Ihrem Törn?",
  seoTitle:
    "Yachtcharter Chalkidiki ab Thessaloniki: Nikiti, Keramoti & Törnideen | CharterTransparenz",
  metaDescription:
    "Chalkidiki vom Wasser aus erleben: Welche Charterbasis passt – Nikiti, Keramoti oder Kavala? Törnideen für Sithonia, Athos, Thasos, Diaporos und Porto Koufo.",
  ogImage:
    "/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/chalkidiki-sithonia-blaue-lagune-hero.jpg",
  category: "Reviere & Destinationen",
  date: "2026-09-04",
  teaser:
    "Nikiti, Keramoti oder Kavala? In Nordgriechenland entscheidet die Basiswahl stärker über Ihren Törn als anderswo in Griechenland – ein Routenguide für Chalkidiki, Sithonia, Thasos und Athos.",
  heroImage:
    "/images/blog/yachtcharter-chalkidiki-thessaloniki-nikiti-keramoti/chalkidiki-sithonia-blaue-lagune-hero.jpg",
  heroImageAlt:
    "Segelyachten in der Blauen Lagune von Sithonia, Chalkidiki, Griechenland",
  readingTime: 10,
  relatedSlugs: [
    "yachtcharter-griechenland-welches-revier-passt",
    "bareboat-oder-skipper",
    "richtig-ankern-yachtcharter",
  ],
  content,
  faq: [
    {
      question: "Wo startet man am besten für einen Yachtcharter in Chalkidiki?",
      answer:
        "Für klassische Chalkidiki-Routen mit Sithonia, Diaporos und Athos-Blick ist Nikiti meist die naheliegendste Basis. Wer zusätzlich Thasos und die Athos-Küste in einer größeren Nordägäis-Route verbinden möchte, startet besser ab Keramoti oder Kavala. Welche Basis im Detail passt, hängt von Reisezeit, Crew-Erfahrung und Wunschroute ab.",
    },
    {
      question: "Ist Thessaloniki eine gute Charterbasis für Chalkidiki?",
      answer:
        "Thessaloniki ist der bekannteste Anreiseflughafen für Chalkidiki, Nikiti und Sithonia, aber nicht automatisch der praktischste Ausgangshafen. Die passenden Yachtbasen liegen meist rund ein bis zwei Stunden Transferzeit entfernt auf der Halbinsel selbst, etwa in Nikiti.",
    },
    {
      question: "Welche Route passt für eine Woche ab Nikiti?",
      answer:
        "Für sieben bis zehn Tage ab Nikiti eignet sich eine Route über Sithonia mit Stopps wie Porto Carras, Porto Koufo, Sarti oder Kavourotrypes, Vourvourou/Diaporos und Ammouliani – mit kurzen bis mittleren Etappen und vielen Badebuchten.",
    },
    {
      question: "Kann man ab Keramoti nach Thasos und Chalkidiki segeln?",
      answer:
        "Ja. Ab Keramoti oder Kavala lässt sich ein größerer Rundtörn planen, der Thasos, die Athos-Küste und Sithonia verbindet. Diese Route braucht mit zehn bis vierzehn Tagen mehr Zeit als eine reine Nikiti-Route, da die Übergangsetappen zwischen Thasos und Chalkidiki länger sind und wetterabhängig geplant werden sollten.",
    },
    {
      question: "Darf man am Berg Athos anlegen?",
      answer:
        "Nein. Fremden Booten ist das Anlegen und Anlanden an der Küste des Athos nicht gestattet. Es gilt ein Küstenabstand von üblicherweise rund 500 Metern, der auch von Patrouillenbooten kontrolliert wird. Die Klöster lassen sich innerhalb dieses Abstands gut vom Wasser aus betrachten.",
    },
    {
      question: "Ist Chalkidiki für Einsteiger geeignet?",
      answer:
        "Ja, insbesondere die kürzere Route ab Nikiti mit überschaubaren Etappen und geschützten Buchten. Für die längere Route ab Keramoti oder Kavala mit den Übergangsetappen zwischen Thasos und Chalkidiki empfiehlt sich mehr Erfahrung oder ein Törn mit Skipper.",
    },
    {
      question: "Wann ist die beste Reisezeit zum Segeln in Chalkidiki?",
      answer:
        "Mai bis Oktober gilt als Kernsaison. Der Meltemi weht in Nordgriechenland im Vergleich zu den Kykladen meist schwächer und berechenbarer, kann aber auch im September noch auftreten – mit typischem Tagesgang und Verstärkung an Landzungen und Meerengen.",
    },
  ],
};
