import type { NewsItem } from "../types";
import { Button } from "@/components/ui/button";
import CharterRequestForm from "@/components/CharterRequestForm";

const faqItems: Array<{ question: string; answer: string }> = [
  {
    question: "Ist Nachtankern im La-Maddalena-Archipel wieder erlaubt?",
    answer:
      "Ja. Ein pauschales Nachtankerverbot gibt es nicht mehr. Die Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena fasst die Befahrungs- und Ankerregeln für die Saisons 2026 und 2027 neu und enthält kein generelles Verbot, nachts vor Anker zu bleiben. Übernachten ist aber nur dort möglich, wo die geltenden Zonen- und Schutzregeln es zulassen: mit gültigem Park-Permit, auf Sand- oder Schlickgrund oder an einer offiziellen Parkboje.",
  },
  {
    question: "Wo darf man im La-Maddalena-Archipel ankern?",
    answer:
      "Geankert werden darf nur auf Sand- oder Schlickgrund und nur dort, wo keine zusätzliche Sperre gilt. Auf Posidonia-Seegras und anderen geschützten Lebensräumen ist das Ankern verboten. In den integralen Schutzbereichen (Reserva integrale) sowie in ausgewiesenen Sperr- und Rettungskorridorzonen ist das Ankern ebenfalls untersagt. Maßgeblich ist immer die aktuelle Zonierung des Nationalparks vor dem Törn.",
  },
  {
    question: "Darf man auf Posidonia ankern?",
    answer:
      "Nein. Das Ankern auf Posidonia-Seegraswiesen und anderen sensiblen Lebensräumen ist im gesamten Archipel verboten und wird aktiv kontrolliert. Ein geeigneter Sand- oder Schlickgrund allein genügt aber nicht: Es müssen gleichzeitig die Schutzzone, mögliche Sperrgebiete und lokale Vorgaben passen.",
  },
  {
    question: "Welche Bojenfelder gibt es und darf man an einer Boje übernachten?",
    answer:
      "Der Nationalpark stellt an einzelnen Stellen offizielle Parkbojen bereit, unter anderem im Bereich Porto Palma und Cala Portese auf Caprera sowie rund um Budelli; die Belegung ist begrenzt und sollte vorab reserviert werden. An einer offiziellen Parkboje ist das Übernachten mit gültigem Permit möglich. Innerhalb markierter Bojenfelder ist das Ankern untersagt. Eine vorhandene Boje bedeutet nicht automatisch, dass eine Charteryacht dort liegen oder übernachten darf: private oder für Ausflugsboote reservierte Moorings sind ausgenommen.",
  },
  {
    question: "Welche Genehmigung benötigt eine Charteryacht?",
    answer:
      "Für das Befahren, Ankern und Verweilen in den Parkgewässern ist ein Park-Permit Pflicht. Segelyachten zahlen 40 Prozent weniger als Motorboote, bei Online-Kauf gibt es zusätzlich 5 Prozent Rabatt. Der Preis richtet sich nach Bootslänge und Dauer. Kommerziell vermietete Yachten (Locazione für Bareboat, Noleggio für Charter mit Crew) unterliegen zusätzlich eigenen Park-Regelwerken; die Charterbasis hält die nötige gewerbliche Autorisierung. Die Yacht selbst braucht weiterhin das Navigations-Permit und einen Fäkalientank.",
  },
  {
    question: "Welche Geschwindigkeit ist im Nationalpark erlaubt?",
    answer:
      "Laut Ordinanza 33/2026 gilt in Verdrängerfahrt: höchstens 7 Knoten innerhalb von 500 Metern zur Küste und höchstens 10 Knoten zwischen 500 und 1.000 Metern. In einzelnen Bereichen können strengere lokale Vorgaben gelten.",
  },
  {
    question: "Darf man im Nationalpark schwimmen?",
    answer:
      "Bei ordnungsgemäß an einer Boje festgemachten Booten ist das Baden in unmittelbarer Nähe des eigenen Bootes bis zu einem Radius von 5 Metern erlaubt. Für lizenzierte Passagierboote gilt bei ausgeschaltetem oder im Leerlauf befindlichem Motor ein Radius von bis zu 10 Metern. Die Regel begrenzt das Baden rund ums Boot, sie ist kein generelles Badeverbot im Park.",
  },
  {
    question: "Wo kann man eine Yacht für einen La-Maddalena-Törn chartern?",
    answer:
      "Übliche Charterbasen für das Archipel liegen in Olbia, Portisco und Cannigione; je nach Yacht und Route können weitere Basen sinnvoll sein. CharterTransparenz berät Sie bei der Auswahl der passenden Segelyacht oder des Katamarans und eines zuverlässigen Vercharterers, organisiert die Buchung und begleitet Sie von der ersten Anfrage bis zur Rückkehr vom Törn.",
  },
];

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
        <strong>Stand: 22. September 2026.</strong> Das frühere pauschale Nachtankerverbot
        ist Geschichte – aber das heißt nicht, dass überall im Archipel geankert und
        übernachtet werden darf. Maßgeblich sind die geltenden Schutzzonen, die
        Ordinanza 33/2026 der Capitaneria di Porto sowie die aktuellen Park-Regelwerke.
        Dieser Ratgeber ordnet ein, wo Chartercrews tatsächlich ankern, an Bojen liegen
        und übernachten dürfen.
      </p>
    </div>

    <div className="not-prose my-6 p-5 bg-slate-50 rounded-lg border border-slate-200">
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
        Schnellübersicht
      </p>
      <ul className="text-sm text-gray-700 leading-relaxed space-y-1.5 list-disc pl-5">
        <li>Kein pauschales Nachtankerverbot mehr – Übernachten vor Anker ist grundsätzlich möglich.</li>
        <li>Ankern nur auf Sand oder Schlick, nie auf Posidonia; nur wo keine Sperre gilt.</li>
        <li>Park-Permit ist Pflicht: 40&nbsp;% Rabatt für Segelyachten, 5&nbsp;% bei Online-Kauf.</li>
        <li>An offiziellen Parkbojen darf übernachtet werden; im Bojenfeld ist Ankern verboten.</li>
        <li>Tempo: 7&nbsp;kn bis 500&nbsp;m, 10&nbsp;kn bis 1.000&nbsp;m zur Küste (Verdrängerfahrt).</li>
        <li>Fäkalientank Pflicht, kein Einleiten von Abwasser.</li>
      </ul>
    </div>

    <h2>Ist Nachtankern im La-Maddalena-Archipel wieder erlaubt?</h2>
    <p>
      Ja. Ein generelles Verbot, nachts vor Anker in den Buchten des Nationalparks zu
      bleiben, gibt es nicht mehr. Die{" "}
      <strong>Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena</strong> hat die
      Befahrungs- und Ankerregeln für den{" "}
      <a href="/reviere/mittelmeer/italien/sardinien">Nationalpark im Norden Sardiniens</a>{" "}
      neu gefasst. Sie gilt probeweise für die Saisons 2026 und 2027, ist seit dem{" "}
      <strong>1. Juni 2026</strong> in Kraft und wirkt saisonal jeweils vom 1. Juni bis
      30. September.
    </p>
    <p>
      Wichtig für die Törnplanung: Das Ende des pauschalen Nachtankerverbots bedeutet
      nicht, dass im gesamten Archipel überall geankert und übernachtet werden darf. Wo,
      wie und unter welchen Bedingungen das möglich ist, ergibt sich aus den geltenden
      Schutzzonen, Ankerverbotsbereichen und Bojenfeldern. Wer diese Unterschiede kennt und
      die aktuelle Zonierung vor dem Törn prüft, segelt spürbar entspannter.
    </p>

    <h2>Warum wurde das frühere Nachtankerverbot aufgehoben?</h2>
    <p>
      Den Ausgangspunkt bildete die Ordinanza 1/2024 der Parkbehörde vom 6. August 2024.
      Sie untersagte in den Buchten des Parks nachts das Übernachten vor Anker. Gegen
      dieses pauschale Verbot klagte ein Verband nautischer Betriebe. Das
      Verwaltungsgericht der Region Sardinien (TAR Sardegna) setzte das Verbot im Juni 2025
      vorläufig aus – so lief bereits die Saison 2025 wieder ohne generelles
      Nachtankerverbot.
    </p>
    <p>
      Für die folgende Saison hat die Capitaneria di Porto die Regeln mit der
      Ordinanza 33/2026 neu geordnet, ohne ein erneutes pauschales Nachtankerverbot.
      Entscheidend ist damit nicht mehr ein generelles Verbot, sondern die Frage, wo und
      unter welchen Bedingungen geankert werden darf. Genau darum geht es in den folgenden
      Abschnitten.
    </p>

    <h2>Wo darf man im La-Maddalena-Archipel ankern?</h2>
    <p>
      Geankert werden darf nur auf Sand- oder Schlickgrund – und nur dort, wo keine
      zusätzliche Sperre gilt. Verboten ist das Ankern:
    </p>
    <ul>
      <li>auf Posidonia-Seegras und anderen geschützten Lebensräumen,</li>
      <li>in den integralen Schutzbereichen (Reserva integrale), in die ohne Sondergenehmigung weder eingefahren noch geankert werden darf,</li>
      <li>in ausgewiesenen Ankerverbots- und Rettungskorridorzonen, die Zufahrten für Rettungs- und Parkfahrzeuge freihalten (in der Ordinanza als Anlage geführt).</li>
    </ul>
    <p>
      Für das Ankern und Verweilen in den Parkgewässern ist ein gültiges Permit Pflicht.
      Welche Buchten aktuell frei, eingeschränkt oder gesperrt sind, bestimmt die jeweils
      geltende Zonierung des Nationalparks – prüfen Sie sie deshalb kurz vor dem Törn.
    </p>

    <h2>Auf welchem Meeresgrund darf geankert werden?</h2>
    <p>
      Sand und Schlick sind grundsätzlich zulässige Ankergründe, Posidonia und andere
      sensible Lebensräume sind tabu. Posidonia steht unter Schutz und erholt sich von
      Ankerschäden nur sehr langsam. Wie Sie Posidonia-Felder zuverlässig erkennen,
      erklärt unser Ratgeber{" "}
      <a href="/blog/richtig-ankern-yachtcharter">Richtig ankern beim Yachtcharter</a>.
    </p>
    <p>
      Ein geeigneter Grund allein genügt aber nicht. Entscheidend sind immer gleichzeitig
      der Meeresgrund, die Schutzzone, mögliche Sperrgebiete und lokale Vorgaben. Ein
      Sandfleck mitten in einem Bojenfeld oder in einer Sperrzone bleibt tabu.
    </p>

    <h2>Welche offiziellen Bojenfelder gibt es?</h2>
    <p>
      Der Nationalpark stellt an einzelnen Stellen offizielle Parkbojen bereit – unter
      anderem im Bereich Porto Palma und Cala Portese auf Caprera sowie rund um Budelli.
      Die Zahl der Bojen ist begrenzt und in der Hauptsaison stark nachgefragt, eine
      Reservierung vorab ist deshalb sinnvoll. Innerhalb markierter Bojenfelder ist das
      Ankern untersagt: Dort wird an der Boje festgemacht, nicht geankert.
    </p>
    <p>
      Wichtig ist die Unterscheidung der Bojen. Nicht jede Boje ist eine offizielle
      Parkboje, an der eine Charteryacht liegen darf:
    </p>
    <ul>
      <li>offizielle Parkbojen (für die Übernachtung relevant),</li>
      <li>private oder konzessionierte Moorings,</li>
      <li>Bojen und Wasserflächen, die vorrangig lizenzierten Ausflugs- und Passagierbooten vorbehalten sind – etwa an Cala Corsara und Cala Coticcio,</li>
      <li>Badezonen- und sonstige nautische Markierungen.</li>
    </ul>
    <p>
      Eine vorhandene Boje bedeutet also nicht automatisch, dass eine Charteryacht dort
      festmachen oder übernachten darf.
    </p>

    <h2>Darf man an den Bojen übernachten?</h2>
    <p>
      An einer offiziellen Parkboje ist das Übernachten mit gültigem Permit möglich. Die
      Parkbojen sind auf Boote bis zu einer bestimmten Größe ausgelegt; größere Yachten
      sollten dies vorab mit dem Park oder der Charterbasis klären. Voraussetzung ist in
      jedem Fall ein Fäkalientank (kein Einleiten von Schwarz- oder Grauwasser).
    </p>
    <p>
      Wer nicht an einer Boje liegt, kann – außerhalb der gesperrten Bereiche – auf Sand
      oder Schlick ankern und dort auch übernachten. In den integralen Schutzzonen und in
      den ausgewiesenen Sperrbereichen ist das Übernachten dagegen ausgeschlossen.
    </p>

    <h2>Welche Buchten unterliegen besonderen Regeln?</h2>
    <p>
      Einige der bekanntesten Ziele des Archipels sind besonders geregelt. Statt einer
      langen, möglicherweise überholten Liste hier die belastbaren Punkte:
    </p>
    <ul>
      <li>
        <strong>Spiaggia Rosa auf Budelli:</strong> Der berühmte rosa Strand liegt in
        einem streng geschützten Bereich; Betreten und ein Annähern des Ufers sind
        untersagt. Halten Sie Abstand.
      </li>
      <li>
        <strong>Cala Coticcio auf Caprera („Tahiti“):</strong> Der Landzugang ist stark
        reglementiert und wird kontrolliert (Zutritt in der Regel nur mit autorisierter
        Führung). Die Wasserfläche ist zeitweise stark frequentiert.
      </li>
      <li>
        <strong>Cala Corsara auf Spargi und weitere stark besuchte Buchten:</strong> Hier
        sind Bereiche vorrangig lizenzierten Passagierbooten vorbehalten – das schränkt
        die frei nutzbaren Flächen für Yachten ein.
      </li>
      <li>
        <strong>Zwischen Santa Maria und Budelli</strong> gilt zusätzlich eine gesondert
        ausgewiesene, zeitlich befristete Sperrzone wegen eines Kampfmittelfundes. Details
        siehe unten.
      </li>
    </ul>
    <p>
      Wir nennen bewusst keine pauschalen „Hier darf geankert werden“-Empfehlungen für
      einzelne Buchten: Zonierung und temporäre Anordnungen ändern sich saisonal. Die
      verlässliche Grundlage ist die aktuelle offizielle Zonierung – ergänzt um den
      Hinweis Ihrer Charterbasis.
    </p>

    {/* Dezenter Hinweis / Übergang zur Beratung */}
    <div
      className="not-prose"
      style={{
        background: "#f7f9fb",
        borderLeft: "3px solid #1a5276",
        borderRadius: "6px",
        padding: "14px 18px",
        margin: "1.75rem 0",
      }}
    >
      <p style={{ color: "#33475b", fontSize: "0.92rem", margin: 0, lineHeight: 1.6 }}>
        Unsicher, welche Buchten und Bojen zu Ihrer Yacht und Route passen? Bei der{" "}
        <a href="/charter-anfrage" style={{ color: "#1a5276", fontWeight: 600 }}>
          Törnplanung für Sardinien
        </a>{" "}
        ordnen wir Reviervorgaben, Permit und Yachtwahl gemeinsam mit Ihnen ein.
      </p>
    </div>

    <h2>Welche Geschwindigkeit gilt – und was bedeutet die 5-Meter-Baderegel?</h2>
    <p>
      Laut Ordinanza 33/2026 gilt in Verdrängerfahrt: höchstens <strong>7 Knoten</strong>{" "}
      innerhalb von 500 Metern zur Küste und höchstens <strong>10 Knoten</strong> zwischen
      500 und 1.000 Metern. In einzelnen Bereichen können strengere lokale Vorgaben gelten.
    </p>
    <p>
      Für das Baden gilt: Bei ordnungsgemäß an einer Boje festgemachten Booten ist das
      Baden in unmittelbarer Nähe des eigenen Bootes bis zu einem Radius von 5 Metern
      erlaubt. Für lizenzierte Passagierboote gilt bei ausgeschaltetem oder im Leerlauf
      befindlichem Motor ein Radius von bis zu 10 Metern. Die Regel begrenzt also das Baden
      rund ums Boot – sie ist kein generelles Badeverbot im Park.
    </p>

    <h2>Welche Genehmigung benötigt eine Charteryacht?</h2>
    <p>
      Für das Navigieren, Ankern und Verweilen in den Parkgewässern ist ein Park-Permit
      Pflicht. Die Tarife sind nach Bootslänge und Dauer gestaffelt (tageweise oder für
      mehrere Tage). Zwei Punkte helfen Chartercrews beim Sparen:
    </p>
    <ul>
      <li><strong>Segelyachten zahlen 40&nbsp;% weniger als Motorboote.</strong></li>
      <li><strong>Beim Online-Kauf gibt es zusätzlich 5&nbsp;% Rabatt.</strong> Permit deshalb am besten vorab online lösen.</li>
    </ul>
    <p>
      Wer ohne gültige Genehmigung in den Parkgewässern angetroffen wird, muss mit
      Sanktionen rechnen. Permit und aktuelle Tarife:{" "}
      <a
        href="https://autorizzazioni.lamaddalenapark.it/"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        autorizzazioni.lamaddalenapark.it
      </a>
      .
    </p>
    <p>
      Bei kommerziell vermieteten Yachten unterscheidet der Park zusätzlich zwei
      Nutzungsarten: <strong>Locazione</strong> (Vermietung ohne Crew – der klassische
      Bareboat-Charter) und <strong>Noleggio</strong> (Vermietung mit Crew bzw. Skipper).
      Für beide hat die Parkbehörde 2026 eigene Regelwerke mit begrenzten
      Autorisierungskontingenten und einer Obergrenze für die täglichen Zufahrten zum
      Meeresschutzgebiet beschlossen. Diese Vorgaben betreffen in erster Linie die
      Vercharterer und Basen, nicht direkt den einzelnen Gast: Die gewerbliche
      Autorisierung hält die Charterbasis. Ihre Yacht braucht davon unabhängig weiterhin
      das Navigations-Permit und einen Fäkalientank. Wir empfehlen, vor dem Törn kurz mit
      der Basis zu bestätigen, dass die Yacht ordnungsgemäß für die Parkgewässer
      autorisiert ist.
    </p>

    <h2>Welche Karten helfen bei der Törnplanung?</h2>
    <p>
      Verlassen Sie sich auf die aktuellen offiziellen Informationen des Parco Nazionale
      dell'Arcipelago di La Maddalena und eine aktuelle Navigations-App bzw. Seekarte, um
      Schutzzonen und Posidonia-Gebiete zu erkennen. Ältere Zonierungskarten (etwa die
      englischsprachige Karte von 2021) taugen allenfalls zur räumlichen Orientierung –
      ihre Regeltexte sind teilweise überholt und sollten nicht als aktueller Rechtsstand
      verstanden werden.
    </p>

    {/* ── Charteragentur-Abschnitt ─────────────────────────────── */}
    <h2>Mit einer Charteryacht durch das La-Maddalena-Archipel</h2>
    <p>
      Das Archipel ist eines der schönsten Ziele für einen Sardinien-Törn: über 60 Inseln
      und Felsen, geschützte Buchten, klares Wasser und kurze Distanzen. Übliche
      Ausgangsbasen sind <strong>Olbia, Portisco und Cannigione</strong>; je nach Yacht,
      Route und Reisezeit können weitere Basen sinnvoll sein. Welche Basis am besten passt,
      hängt von Ihrer Crew, der Yachtverfügbarkeit und dem gewünschten Törn ab.
    </p>
    <p>
      Genau hier setzt unsere Arbeit an: CharterTransparenz ist eine Yachtcharteragentur mit
      mehr als 30 Jahren Erfahrung. Wir beraten Sie bei der Auswahl der passenden Segelyacht
      oder eines Katamarans und eines zuverlässigen Vercharterers, organisieren Ihre Buchung
      und sind von der ersten Anfrage bis zur Rückkehr vom Törn für Sie da. So wird der
      Nationalpark nicht zur Unsicherheitsstelle, sondern zum Höhepunkt Ihres Törns.
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
      <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontSize: "1.05rem" }}>
        Sie planen einen Törn durch La Maddalena?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, die passende Yacht und Charterbasis auf Sardinien zu finden.
        Gemeinsam klären wir, welche Route zu Ihrer Crew passt, und begleiten Sie von der
        Beratung und Buchung bis zur Rückkehr.
      </p>
      <CharterRequestForm>
        <Button
          className="bg-[#e8a020] hover:bg-[#d6931c] text-white font-semibold rounded-lg px-6 py-3"
          size="lg"
        >
          Sardinien-Charter anfragen
        </Button>
      </CharterRequestForm>
    </div>

    {/* Zusätzlicher Hinweis: Sperrzone */}
    <div
      className="not-prose"
      style={{
        background: "#fff8e6",
        border: "1px solid #f0d68a",
        borderRadius: "8px",
        padding: "12px 16px",
        margin: "1.75rem 0",
      }}
    >
      <p style={{ color: "#6b5900", fontSize: "0.85rem", fontWeight: 600, margin: "0 0 4px 0" }}>
        Zusätzlicher Hinweis: Begrenzte Sperrzone bei Santa Maria / Budelli
      </p>
      <p style={{ color: "#6b5900", fontSize: "0.85rem", margin: "0 0 8px 0" }}>
        Unabhängig von den allgemeinen Park- und Ankerregeln gilt zwischen Isola Santa
        Maria und Isola Budelli eine gesondert ausgewiesene, zeitlich befristete Sperrzone
        wegen eines Kampfmittelfundes. Sie betrifft einen konkreten Bereich und ist
        zusätzlich zu den Parkregeln zu beachten.
      </p>
      <a
        href="/news/sardinien-la-maddalena-sperrzone-kampfmittelfund-2026"
        style={{ color: "#8b6f00", fontSize: "0.85rem", fontWeight: 500 }}
      >
        Details zur Sperrzone bei Santa Maria / Budelli →
      </a>
    </div>

    {/* FAQ */}
    <h2>Häufige Fragen zu La Maddalena 2026</h2>
    {faqItems.map((f) => (
      <div key={f.question} style={{ marginBottom: "1rem" }}>
        <p style={{ fontWeight: 600, color: "#33475b", marginBottom: "0.25rem" }}>{f.question}</p>
        <p style={{ margin: 0 }}>{f.answer}</p>
      </div>
    ))}

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Kein pauschales Nachtankerverbot mehr – aber auch keine pauschale Anker- oder
        Übernachtungserlaubnis. Geankert wird auf Sand oder Schlick, nie auf Posidonia und
        nur außerhalb der Sperr- und Schutzzonen. An offiziellen Parkbojen darf übernachtet
        werden, im Bojenfeld nicht geankert. Permit bleibt Pflicht (40&nbsp;% günstiger für
        Segelyachten, 5&nbsp;% online), Fäkalientank vorausgesetzt. Wer eine passende Yacht
        und Route sucht, plant den Törn am besten gemeinsam mit uns.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Grundlage sind die Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena sowie
      die geltenden Regelwerke und Tarife des Ente Parco Nazionale dell'Arcipelago di La
      Maddalena. Aktuelle Permit-Tarife und die Autorisierungsplattform:{" "}
      <a
        href="https://autorizzazioni.lamaddalenapark.it/"
        rel="nofollow noopener noreferrer"
        target="_blank"
      >
        autorizzazioni.lamaddalenapark.it
      </a>
      . Redaktionsstand: 22. September 2026. Alle Angaben ohne Gewähr – bitte vor dem Törn
      die aktuellen offiziellen Informationen der Capitaneria und des Nationalparks prüfen,
      da Zonierungen und lokale Auslegungen variieren können.
    </p>
  </div>
);

export const sardinienLaMaddalenaNachtankerverbot2026: NewsItem = {
  content,
  slug: "sardinien-la-maddalena-nachtankerverbot-2026",
  title: "La Maddalena 2026: Nachtankern, Ankerplätze und Bojen",
  excerpt:
    "Ist Nachtankern im La-Maddalena-Archipel wieder erlaubt – und wo dürfen Chartercrews tatsächlich ankern und übernachten? Der Ratgeber ordnet die aktuellen Regeln zu Nachtankern, Ankergrund, Bojen, Schutzzonen, Geschwindigkeit und Permit ein.",
  content_type: "basis_hinweis",
  region: "Sardinien / La Maddalena",
  country_or_area: "Italien",
  status: "in_kraft",
  effective_from: "2026-06-01",
  published_at: "2026-04-24",
  updated_at: "2026-09-22",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name:
    "Capitaneria di Porto di La Maddalena (Ordinanza 33/2026); Ente Parco Nazionale dell'Arcipelago di La Maddalena",
  source_url: "https://autorizzazioni.lamaddalenapark.it/",
  customer_impact:
    "Kein pauschales Nachtankerverbot mehr, aber keine pauschale Anker- oder Übernachtungserlaubnis. Geankert wird nur auf Sand oder Schlick, nie auf Posidonia und außerhalb der Sperr- und Schutzzonen. An offiziellen Parkbojen darf übernachtet werden, im Bojenfeld nicht geankert. Permit bleibt Pflicht (40 % günstiger für Segelyachten, 5 % online), Fäkalientank vorausgesetzt.",
  action_advice:
    "Park-Permit vorab online lösen (5 % Rabatt, 40 % günstiger für Segelyachten) auf autorizzazioni.lamaddalenapark.it. Aktuelle Zonierung, Ankerverbots- und Sperrzonen sowie Bojenfelder vor dem Törn prüfen. Posidonia meiden. Fäkalientank sicherstellen. Charterbasis nach aktueller Autorisierung und Revierhinweisen fragen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "sardinien_la_maddalena_ankern_nationalpark_2026",
  seo_title: "La Maddalena 2026: Nachtankern, Ankerplätze & Bojen",
  meta_description:
    "La Maddalena 2026: Wo dürfen Chartercrews ankern und übernachten? Aktuelle Regeln zu Nachtankern, Bojen, Schutzzonen und Permit im Nationalpark.",
  is_featured: true,
  image: "/lovable-uploads/dec3e030-3572-47d6-8aec-cb5e616c181e.webp",
  imageAlt:
    "Luftaufnahme der granitgeprägten Küste im Nordosten Sardiniens mit türkisfarbenem Meer – typisch für das La-Maddalena-Archipel",
  imageCaption:
    "Küstenlandschaft im Revier rund um das La-Maddalena-Archipel im Norden Sardiniens.",
  region_links: [
    { label: "Sardinien", href: "/reviere/mittelmeer/italien/sardinien" },
    { label: "Italien", href: "/reviere/mittelmeer/italien" },
  ],
  faq: faqItems,
};
