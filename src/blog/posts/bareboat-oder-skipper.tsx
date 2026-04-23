import type { BlogPost } from "../types";

const content = (
  <div>
    <p>
      Eine der häufigsten Fragen bei der Charter-Planung lautet: Sollen wir eigenständig segeln
      oder einen professionellen Skipper buchen? Beide Optionen haben ihre Berechtigung — die
      Antwort hängt weniger vom Budget ab als von Erfahrung, Crew-Zusammensetzung und dem,
      was man vom Urlaub erwartet.
    </p>

    <h2 id="bareboat">Bareboat-Charter: Freiheit mit Verantwortung</h2>
    <p>
      Beim Bareboat-Charter mieten Sie die Yacht ohne professionelle Crew. Sie sind Skipper,
      Steuermann und Entscheidungsträger in einem — das bedeutet Freiheit, aber auch Verantwortung.
      Routen, Ankerplätze, Zeitplanung: alles liegt bei Ihnen.
    </p>
    <p>
      Bareboat ist die richtige Wahl, wenn:
    </p>
    <ul>
      <li>Sie oder jemand in Ihrer Crew einen gültigen Segelschein besitzen</li>
      <li>Sie bereits Erfahrung im An- und Ablegen sowie auf See haben</li>
      <li>Sie die vollständige Autonomie schätzen und gerne selbst entscheiden</li>
      <li>Die Crew grundlegende Manöver (Ankern, Kreuzschlag, Reffen) beherrscht</li>
    </ul>
    <p>
      Der Hauptvorteil: Bareboat ist in der Regel <strong>günstiger</strong> und bietet die
      maximale Unabhängigkeit. Sie bestimmen, wo Sie anlegen, wie lange Sie bleiben und
      welche Route Sie segeln.
    </p>

    <h2 id="skippered">Charter mit Skipper: Expertise an Bord</h2>
    <p>
      Ein professioneller Skipper übernimmt die nautische Führung des Bootes. Für die Crew
      bedeutet das: mithelfen wenn man möchte, entspannen wenn man das vorzieht.
      Der Skipper kennt das Revier, die Wettermuster und die besten Ankerplätze.
    </p>
    <p>
      Charter mit Skipper empfiehlt sich besonders, wenn:
    </p>
    <ul>
      <li>Kein gültiger Führerschein in der Crew vorhanden ist</li>
      <li>Es der erste Charter-Urlaub ist und Sicherheit Vorrang hat</li>
      <li>Kinder oder ältere Personen an Bord sind</li>
      <li>Man ein anspruchsvolleres Revier (Nordsee, Atlantik) plant</li>
      <li>Man das Revier kennenlernen möchte, um später eigenständig zu segeln</li>
    </ul>

    <h2 id="kosten">Was ein Skipper kostet</h2>
    <p>
      Skipper-Kosten liegen je nach Region und Qualifikation bei
      <strong> 150 bis 350 € pro Tag</strong>. Bei einer Wochenbuchung sind das 1.050 bis
      2.450 € zusätzlich zur Charterrate. Hinzu kommen Verpflegung und — je nach
      Absprache — eine separate Koje oder Unterkunft an Bord.
    </p>
    <p>
      Bei 6–8 Personen an Bord macht der Skipper-Anteil pro Person oft weniger als
      200–300 € aus — ein überschaubarer Aufpreis für professionelle Führung.
    </p>

    <h2 id="mittelweg">Der Mittelweg: Skipperled mit Lerneffekt</h2>
    <p>
      Viele Crews wählen eine clevere Kombination: Sie buchen für den ersten Charter einen
      erfahrenen Skipper, nehmen aber aktiv am Segeln teil — Steuer übernehmen, Manöver
      durchführen, Wetter analysieren. Ein guter Skipper wird das gerne unterstützen.
    </p>
    <p>
      So bauen Sie in einer Woche praxisnah Wissen auf, das Sie beim nächsten Törn
      als Bareboat-Skipper einsetzen können.
    </p>

    <h2 id="empfehlung">Unsere Einschätzung</h2>
    <p>
      Wählen Sie Bareboat, wenn Sie die Erfahrung und den Führerschein mitbringen — und die
      Verantwortung als Teil des Erlebnisses verstehen. Wählen Sie einen Skipper, wenn Sie
      sich erstmals auf das Meer wagen, mit einer gemischten Crew reisen oder einfach
      einen entspannten Urlaub ohne nautische Pflichten möchten. Beides ist richtig.
      Entscheidend ist, dass Sie ehrlich mit sich selbst und Ihrer Crew sind.
    </p>
  </div>
);

export const bareboatOderSkipper: BlogPost = {
  slug: "bareboat-oder-skipper",
  title: "Bareboat oder Charter mit Skipper: Was passt zu Ihnen?",
  seoTitle: "Bareboat oder Skipper buchen? Entscheidungshilfe für Ihren Yachtcharter | CharterTransparenz",
  metaDescription:
    "Eigenständig segeln oder Skipper buchen? Wir erklären die Unterschiede, Kosten und wann welche Option wirklich sinnvoll ist – für eine entspannte Charter-Entscheidung.",
  ogImage: "/images/charter_with_skipper.jpg",
  category: "Yachtwahl & Bordleben",
  date: "2025-03-28",
  teaser:
    "Bareboat oder mit Skipper? Die Entscheidung hängt von Erfahrung, Crew und Erwartungen ab – nicht nur vom Budget. Eine klare Entscheidungshilfe.",
  heroImage: "/images/charter_with_skipper.jpg",
  heroImageAlt: "Crew an Bord einer Segelyacht – Bareboat oder Charter mit Skipper?",
  readingTime: 5,
  relatedSlugs: ["was-kostet-ein-yachtcharter", "kroatien-einsteiger"],
  content,
  faq: [
    {
      question: "Kann ich eine Yacht chartern ohne Segelschein?",
      answer:
        "Ja, indem Sie einen Skipper buchen. In den meisten europäischen Ländern ist für Bareboat-Charter ein anerkannter Segelschein Pflicht. Ohne Schein können Sie trotzdem an Bord sein — als aktiver Teil der Crew, aber nicht als verantwortlicher Skipper.",
    },
    {
      question: "Was kostet ein Skipper pro Tag?",
      answer:
        "Je nach Region und Qualifikation 150–350 € pro Tag, zuzüglich Verpflegung. Bei 6 Personen an Bord sind das bei 200 €/Tag rund 200 € pro Person für eine Woche — oft ein sehr lohnender Aufpreis.",
    },
    {
      question: "Darf ich beim Charter mit Skipper selbst segeln?",
      answer:
        "Das kommt auf den Skipper und die Absprache an. Die meisten professionellen Skipper freuen sich, wenn Crewmitglieder aktiv mitsegeln möchten — solange der Skipper die Verantwortung behält. Sagen Sie beim Buchen klar, dass Sie lernen oder mithelfen möchten.",
    },
  ],
};
