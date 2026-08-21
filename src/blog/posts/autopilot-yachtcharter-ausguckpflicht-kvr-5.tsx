import type { BlogPost } from "../types";

const content = (
  <div>
    <p>
      Autopiloten gehören auf modernen Charteryachten zur Standardausrüstung.
      Sie halten die Yacht auf Kurs, entlasten den Skipper auf langen Schlägen
      und machen es möglich, zwischendurch die Segel zu trimmen oder kurz nach
      unten zu gehen. Was viele Crews dabei unterschätzen: Der Autopilot
      übernimmt das Steuern – aber nicht die Verantwortung für das, was rund
      um die Yacht passiert. Genau das regelt{" "}
      <strong>KVR 5</strong> (international: COLREG Rule 5), eine der
      grundlegendsten Vorschriften des internationalen Seerechts.
    </p>
    <p>
      Dieser Ratgeber erklärt, was KVR 5 für Charterskipper bedeutet, welche
      Situationen rechtlich problematisch sind – und wie man den Autopiloten
      sinnvoll nutzt, ohne seine Pflichten als Skipper zu vernachlässigen.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Das Wichtigste auf einen Blick
      </p>
      <table className="w-full text-sm text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700 w-1/2">
              Autopilot erlaubt?
            </td>
            <td className="py-2 text-gray-600">
              Grundsätzlich ja – soweit keine lokalen Sonderregeln entgegenstehen
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">
              Ausguckpflicht entfällt?
            </td>
            <td className="py-2 text-gray-600">
              Nein – gilt unverändert, auch mit Autopilot
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">
              Gilt in Kroatien?
            </td>
            <td className="py-2 text-gray-600">
              Ja – Kroatien ist COLREG-Vertragsstaat
            </td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">
              AIS ersetzt den Ausguck?
            </td>
            <td className="py-2 text-gray-600">
              Nein – AIS ist Ergänzung, kein Ersatz
            </td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-medium text-gray-700">
              Haftung bei Kollision mit Autopilot?
            </td>
            <td className="py-2 text-gray-600">
              Skipper bleibt verantwortlich – Autopilot ändert daran nichts
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="kvr-5-text">KVR 5: Was genau steht da drin?</h2>
    <p>
      Die Kollisionsverhütungsregeln (KVR) – international als COLREGs bekannt –
      sind das weltweit gültige Regelwerk zur Verhütung von Schiffskollisionen.
      Sie wurden von der Internationalen Seeschifffahrtsorganisation (IMO)
      verabschiedet und von nahezu allen Küstenstaaten ratifiziert. Artikel 5
      lautet in vereinfachter Fassung:
    </p>
    <blockquote>
      <p>
        „Jedes Fahrzeug muss zu jeder Zeit mit Blick, Gehör und allen
        verfügbaren Mitteln, die den gegebenen Umständen und Bedingungen
        entsprechen, ordentlichen Ausguck halten, um die Lage und die
        Möglichkeit einer Kollision vollständig beurteilen zu können."
      </p>
    </blockquote>
    <p>
      Drei Begriffe daraus sind für den Praxisbetrieb auf Charteryachten
      besonders wichtig.
    </p>
    <p>
      <strong>„Zu jeder Zeit"</strong> bedeutet: keine Ausnahmen. Weder bei
      gutem Wetter, noch auf freier See, noch mit aktivem AIS-Alarm. Die
      Pflicht gilt rund um die Uhr und in jedem Seegebiet.
    </p>
    <p>
      <strong>„Blick und Gehör"</strong> bedeutet in der Praxis: Der Ausguck
      muss so organisiert sein, dass Verkehr, Geräusche, Signale und
      Veränderungen der Lage tatsächlich wahrgenommen werden können. In
      befahrenen Revieren, nachts oder bei eingeschränkter Sicht spricht
      das regelmäßig für eine aktive Wache an Deck. Kopfhörer – auch harmlos
      wirkende Noise-Cancelling-Modelle – können das Gehör als
      Sicherheitsinstrument stark einschränken.
    </p>
    <p>
      <strong>„Alle verfügbaren Mittel"</strong> heißt: AIS, Radar und
      Plotteralarm sollen genutzt werden – aber als <em>Ergänzung</em>, nicht
      als Ersatz für den persönlichen Ausguck. Kleine Fischerboote aus Holz,
      nicht motorisierte Fahrzeuge und Treibgut sind auf AIS oft unsichtbar.
    </p>

    <h2 id="autopilot-was-erlaubt">Autopilot und Ausguckpflicht: Was ist erlaubt?</h2>
    <p>
      Der Autopilot selbst ist nicht das Problem. Er ist ein rechtlich
      zulässiges Steuerungsmittel und auf{" "}
      <a href="/reviere/mittelmeer/kroatien">Charteryachten in Kroatien</a>{" "}
      wie überall sonst völlig normal. Die entscheidende Frage lautet immer:
      Ist während des Autopilotbetriebs ein ordentlicher Ausguck
      sichergestellt?
    </p>
    <p>
      Für typische Situationen auf Charteryachten bedeutet das:
    </p>
    <ul>
      <li>
        <strong>Allein nachts, 10–15 Minuten unter Deck:</strong> besonders
        riskant und kann bei einem Unfall schnell als Verletzung der
        Ausguckpflicht bewertet werden. Kurze Abwesenheiten mögen in ruhigem
        Fahrwasser unter bestimmten Bedingungen toleriert werden – aber
        „nachts" ist für die Ausguckpflicht besonders kritisch, und „kurz"
        lässt sich schwer belegen.
      </li>
      <li>
        <strong>Ausschließlich auf AIS-Alarm verlassen:</strong> Verletzung von
        KVR 5. AIS zeigt nicht alle Fahrzeuge und ersetzt keine visuelle
        Beobachtung.
      </li>
      <li>
        <strong>Gute Sicht, offene See, ganze Crew beim Essen unter Deck:</strong>{" "}
        rechtlich und praktisch riskant, wenn niemand aktiv Verkehrslage und
        Umgebung beobachtet. Auch bei guter Sicht kann sich die Situation
        schnell ändern.
      </li>
      <li>
        <strong>Noise-Cancelling-Kopfhörer am Steuer, Autopilot ein:</strong>{" "}
        können problematisch sein, wenn sie Motorengeräusche, Nebelsignale,
        Zurufe oder Warnsignale überdecken. Bei einer Unfalluntersuchung wäre
        das ein belastender Umstand.
      </li>
    </ul>
    <p>
      Allgemein gilt: Wer den Autopiloten nutzt und trotzdem einen effektiven
      Ausguck sicherstellt, handelt korrekt. Wer die technische Steuerung
      nutzt, um die Brücke vollständig zu verlassen, riskiert bei einem Unfall,
      dass dies als Verstoß gegen die Ausguckpflicht bewertet wird.
    </p>

    {/* ── Mid-article CTA ──────────────────────────────────────────────────── */}
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
        Bareboat oder mit Skipper – was passt zu Ihrer Crew?
      </p>
      <p
        style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}
      >
        Wir helfen Ihnen, Erfahrungsstand, Route und Verantwortung realistisch
        einzuschätzen – und empfehlen bei Bedarf einen erfahrenen Skipper dazu.
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
        Yachtcharter-Beratung starten
      </a>
    </div>

    <h2 id="kvr-5-kroatien">Gilt KVR 5 auch in Kroatien?</h2>
    <p>
      Ja. Die COLREGs gelten weltweit auf hoher See und in den Küstengewässern
      aller Vertragsstaaten. Kroatien hat die COLREGs ratifiziert und in
      nationales Seerecht überführt. KVR 5 gilt damit auf der Adria, in
      dalmatinischen Kanälen und im Kvarner genauso wie auf der Nordsee oder
      im Ärmelkanal.
    </p>
    <p>
      Unterschiede zwischen Kroatien und anderen Revieren bestehen nicht in
      KVR 5 selbst, sondern allenfalls in nationalen Ergänzungsregelungen:
      Geschwindigkeitslimits in Häfen, Mindestabstände zu Schwimmern oder die
      Höhe von Bußgeldern können von Staat zu Staat abweichen. Die
      Grundpflicht zum Ausguck ist überall identisch.
    </p>
    <p>
      Auf einzelnen Wasserstraßen oder in besonderen Revieren können lokale
      Sonderregeln gelten. Für Chartercrews sind deshalb neben KVR 5 immer
      auch die jeweiligen Revier-, Hafen- und Verkehrsvorschriften maßgeblich.
    </p>

    <h2 id="maib-beispiel">Reales Beispiel: Kollision vor Felixstowe</h2>
    <p>
      Im Juni 2014 kollidierte die Segelyacht <em>Orca</em> mit dem Bagger{" "}
      <em>Shoreway</em> rund sieben Seemeilen vor Felixstowe an der englischen
      Ostküste. Die Yacht sank infolge der Kollision; eine Person kam ums Leben.
      Die britische Unfalluntersuchungsbehörde MAIB (Marine Accident Investigation
      Branch) untersuchte den Fall.
    </p>
    <p>
      Die MAIB bewertete unter anderem den mangelhaften Ausguck als wesentlichen
      Faktor: Der Skipper der Yacht befand sich zum Zeitpunkt der Kollision
      unter Deck. Auch auf der Brücke des Baggers war der Ausguck nicht
      durchgehend wirksam. Die Untersuchung verwies auf Verstöße gegen KVR 5
      (Ausguck), KVR 6 (sichere Fahrt) und KVR 8 (Kollisionsverhütung).
    </p>
    <p>
      Die Schlussfolgerungen des Berichts sind klar: Ein Autopilot ersetzt
      keinen Ausguck. Technische Mittel ergänzen die visuelle und akustische
      Beobachtung – sie ersetzen sie nicht. In belebten Gewässern ist eine
      frühzeitige und deutliche Kursänderung die sicherste Reaktion.
    </p>

    <h2 id="empfehlungen">Praktische Empfehlungen für Charterskipper</h2>
    <p>
      KVR 5 klingt streng – in der Praxis ist es vor allem ein solider Rahmen,
      den erfahrene Segler ohnehin einhalten. Konkrete Punkte für den
      Charteralltag:
    </p>
    <ul>
      <li>
        <strong>Autopilot ein, Ausguck bleibt:</strong> Wer den Autopiloten
        nutzt, sollte trotzdem regelmäßig einen 360°-Blick über den Horizont
        machen – auch bei guter Sicht und freier See. In engen Fahrwassern,
        bei Nacht oder bei Nebel ist permanenter Ausguck auf Deck gesetzt.
      </li>
      <li>
        <strong>Alleinsegler ehrlich einschätzen:</strong> Allein an Bord,
        Autopilot ein, kurz unter Deck – das ist nur dann vertretbar, wenn die
        Lage es erlaubt: freie See, kein Verkehr, Kompanjetreppe offen,
        AIS-Alarm aktiv. In Fahrwassern oder bei Nacht ist diese Situation
        regelmäßig eine KVR-5-Verletzung.
      </li>
      <li>
        <strong>AIS-Alarm als Hinweis, nicht als Ausguck:</strong> Wenn ein
        AIS-Alarm ausgelöst wird, ist das ein Signal zum Hinschauen – nicht
        die Erfüllung der Ausguckpflicht. Viele kleine Boote, Fischerfahrzeuge
        und Treibgut sind auf AIS nicht sichtbar.
      </li>
      <li>
        <strong>Kopfhörer ablegen:</strong> Noise-Cancelling-Kopfhörer
        unterdrücken Nebelhörner, Motorengeräusche und Zurufe. Das widerspricht
        dem Gehörgebot aus KVR 5 und ist bei einer Unfalluntersuchung ein
        erheblicher Belastungsfaktor.
      </li>
      <li>
        <strong>Crew einbeziehen:</strong> Mit mehreren Personen an Bord
        lässt sich Ausguck zuverlässig organisieren. Eine einfache
        Wacheinteilung – auch tagsüber auf langen Schlägen – stellt sicher,
        dass immer jemand aktiv beobachtet. Das gilt besonders auf dem Weg
        zwischen Inseln im{" "}
        <a href="/reviere/mittelmeer/kroatien">kroatischen Revier</a>, wo
        Fischerboote, Fähren und Schnellboote unvermittelt auftauchen können.
      </li>
    </ul>

    <h2 id="fazit">Fazit</h2>
    <p>
      Der Autopilot ist ein sinnvolles und legales Hilfsmittel – er entlastet,
      erleichtert das Segeln und macht es sicherer, wenn er richtig eingesetzt
      wird. Die Grenze ist klar: Er steuert das Boot, übernimmt aber keine
      Beobachtungspflicht. Die liegt beim Skipper, immer und ohne Ausnahme.
    </p>
    <p>
      Wer KVR 5 kennt und verinnerlicht hat, kann den Autopiloten entspannt und
      regelkonform nutzen. Für Chartercrews, die den Schein erst seit kurzer
      Zeit haben oder selten segeln, kann ein Törn mit einem erfahrenen{" "}
      <a href="/blog/bareboat-oder-skipper">Mietskipper</a> helfen, die eigenen
      Stärken und Grenzen realistisch einzuschätzen.
    </p>

    {/* ── Final CTA ────────────────────────────────────────────────────────── */}
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
        Ihren nächsten Törn sicher planen
      </p>
      <p
        style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}
      >
        Wir helfen Ihnen, Revier, Crewstärke und den richtigen Charter-Typ
        passend zu Ihrer Erfahrung zu finden – persönlich und unverbindlich.
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
        Törn persönlich planen lassen
      </a>
    </div>

    <p className="text-sm text-gray-500" style={{ marginTop: "2rem" }}>
      Redaktionsstand: 21. August 2026. Dieser Artikel dient der allgemeinen
      Information und ersetzt keine rechtliche Beratung. Maßgeblich sind die
      jeweils geltenden Kollisionsverhütungsregeln und lokale Vorschriften
      im Revier.
    </p>
  </div>
);

export const autopilotYachtcharterAusguckpflichtKvr5: BlogPost = {
  content,
  slug: "autopilot-yachtcharter-ausguckpflicht-kvr-5",
  title:
    "Autopilot und Ausguckpflicht: Was KVR 5 für Charterskipper bedeutet",
  seoTitle:
    "Autopilot Yachtcharter: KVR 5 Ausguckpflicht einfach erklärt",
  metaDescription:
    "Autopilot auf Charteryachten ist erlaubt – die Ausguckpflicht nach KVR 5 (COLREG Rule 5) gilt trotzdem jederzeit. Was das bedeutet, welche Situationen problematisch sind und wie man richtig reagiert.",
  ogImage: "/images/blog/autopilot/autopilot-navigation.jpg",
  category: "Segelpraxis & Sicherheit",
  date: "2026-08-21",
  teaser:
    "Der Autopilot übernimmt das Steuern – aber nicht den Ausguck. KVR 5 gilt auf Charteryachten weltweit und ohne Ausnahme. Was Chartercrews wissen sollten, bevor sie die Brücke verlassen.",
  heroImage: "/images/blog/autopilot/autopilot-navigation.jpg",
  heroImageAlt:
    "Navigationsdisplay und Autopilot an Bord einer Charteryacht",
  readingTime: 7,
  relatedSlugs: [
    "kroatien-yachtcharter-sicherheitsregeln",
    "bareboat-oder-skipper",
    "richtig-ankern-yachtcharter",
  ],
  faq: [
    {
      question:
        "Darf ich den Autopiloten auf einer Charteryacht benutzen?",
      answer:
        "Ja, der Autopilot ist grundsätzlich erlaubt und auf modernen Charteryachten Standard. Entscheidend ist, dass während des Autopilotbetriebs ein ordentlicher Ausguck sichergestellt bleibt. Der Autopilot steuert – die Beobachtungspflicht liegt weiterhin beim Skipper.",
    },
    {
      question: "Was sagt KVR 5 genau?",
      answer:
        "KVR 5 (COLREG Rule 5) verpflichtet jedes Fahrzeug dazu, zu jeder Zeit ordentlichen Ausguck mit Blick, Gehör und allen verfügbaren Mitteln zu halten, um eine Kollision rechtzeitig erkennen zu können. Die Regel gilt weltweit auf hoher See und in den Küstengewässern aller Vertragsstaaten – also auch in Kroatien, Griechenland, der Türkei und auf dem gesamten Mittelmeer.",
    },
    {
      question: "Darf ich bei aktivem Autopilot unter Deck gehen?",
      answer:
        "Das hängt von der Situation ab. In ruhigem Fahrwasser und freier See tagsüber kann eine sehr kurze Abwesenheit toleriert werden, wenn alle Alarme aktiv sind und schnelles Reagieren möglich bleibt. In Fahrwassern, bei Nacht, in dichtem Verkehr oder bei eingeschränkter Sicht ist das grundsätzlich problematisch und bei einem Unfall ein klarer Mitverschuldensfaktor.",
    },
    {
      question: "Ersetzt AIS den visuellen Ausguck?",
      answer:
        "Nein. AIS ist ein sinnvolles Ergänzungsmittel, aber kein Ersatz für den Ausguck. Viele kleine Boote, Fischerfahrzeuge aus Holz und nicht motorisierte Fahrzeuge haben kein AIS an Bord und sind auf dem Plotter unsichtbar. KVR 5 verlangt ausdrücklich auch visuelle und akustische Beobachtung.",
    },
    {
      question: "Gilt KVR 5 auch in Kroatien?",
      answer:
        "Ja. Kroatien ist Vertragsstaat der COLREGs und hat die Regeln in nationales Seerecht überführt. KVR 5 gilt auf der Adria genauso wie auf der Nordsee oder im Mittelmeer. Unterschiede bestehen allenfalls in nationalen Ergänzungsregelungen wie Geschwindigkeitslimits oder Bußgeldhöhen.",
    },
  ],
};
