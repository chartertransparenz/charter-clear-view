import type { NewsItem } from "../types";

/* Quelle: Nacrt zakona o jahtama (Ministarstvo pomorstva, öffentliche Anhörung
   02.–23.11.2026, gov.me/clanak/javni-poziv-74) – insbesondere Art. 5, 60, 76–99,
   109–110, 119–125 – sowie Izvještaj o sprovedenoj analizi procjene uticaja propisa
   (RIA) zum Entwurf. Stand 13.11.2026. */

const content = (
  <div>
    {/* Status-Hinweis */}
    <div
      className="not-prose"
      style={{
        background: "#f5f3ff",
        border: "1px solid #ddd6fe",
        borderRadius: "8px",
        padding: "12px 16px",
        marginBottom: "1.5rem",
      }}
    >
      <p style={{ color: "#4c1d95", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>
        Gesetzentwurf – öffentliche Anhörung bis 23. November 2026
      </p>
      <p style={{ color: "#5b21b6", fontSize: "0.85rem", margin: "6px 0 0 0", lineHeight: 1.55 }}>
        Stand: 13. November 2026. Die hier beschriebenen Regeln sind noch nicht
        beschlossen. Nach der Anhörung kann das Ministerium den Entwurf ändern; erst
        danach entscheiden Regierung und Parlament über das Gesetz.
      </p>
    </div>

    <h2>Warum Montenegro das Yachtgesetz reformieren will</h2>
    <p>
      Das geltende Yachtgesetz stammt aus dem Jahr 2007 – aus einer Zeit, als in Tivat
      der Bau von Porto Montenegro gerade begann. Seitdem sind mit Porto Montenegro,
      Portonovi, der Marina Bar und weiteren Häfen moderne Yachthäfen entstanden, der
      Rechtsrahmen ist aber weitgehend gleich geblieben. Nach der Begründung des Seefahrtsministeriums laufen Vignette
      und Crewliste bislang über Papierdokumente, und das Chartergeschäft ist über
      mehrere Gesetze verteilt. Das öffne Raum für nicht angemeldete Charter.
    </p>
    <p>
      Der Entwurf soll die Regeln für Yachten in einem Gesetz bündeln, die Verfahren auf
      eine elektronische Plattform verlagern und das montenegrinische Yachtregister für
      Eigner attraktiver machen. Als Vergleich nennt das Ministerium Malta, Zypern,
      Griechenland und Kroatien.
    </p>

    <h2>Chartergenehmigung und elektronische Chartermeldung</h2>
    <p>
      Nach dem Entwurf soll das Ministerium für <strong>jede Charteryacht einzeln</strong>{" "}
      eine Chartergenehmigung erteilen. Sie wäre nötig, wenn ein Törn in Montenegro
      beginnt oder endet – und ebenso für Yachten, die während einer Charter in
      montenegrinische Gewässer einlaufen, unabhängig davon, wo die Crew an Bord gegangen
      ist. In diesem Fall müsste die Genehmigung vor der Einfahrt vorliegen. Sie soll in
      der Regel drei Jahre gelten; die Gebühr soll sich nach der Länge der Yacht richten.
    </p>
    <p>
      Zusätzlich müsste der Vercharterer <strong>jede Charter vor Beginn elektronisch
      melden</strong> und den Chartervertrag übermitteln. Die Meldung enthält nach dem
      Entwurf unter anderem:
    </p>
    <ul>
      <li>Angaben zur Yacht und zur Chartergenehmigung,</li>
      <li>den Charterkunden,</li>
      <li>Charterzeitraum, Ein- und Ausschiffungshafen sowie Fahrtgebiet,</li>
      <li>den Charterpreis,</li>
      <li>die Crew mit Befähigungsnachweisen und alle Gäste an Bord.</li>
    </ul>
    <p>
      Diese Meldung soll zugleich als Crew- und Passagierliste gelten, die die
      Hafenbehörde elektronisch bestätigt. Wer nicht auf der Liste steht, darf während
      der Charter nicht an Bord sein; Änderungen wären vorab zu melden. Der Entwurf hält
      ausdrücklich fest, dass Genehmigung, Meldung und Crewliste Pflichten des
      Vercharterers bleiben und nicht auf Charterkunden oder Skipper übergehen.
    </p>
    <p>
      Charter ohne Genehmigung oder ohne Meldung wären ausdrücklich verboten. Stellen
      Inspektoren einen solchen Fall fest, sollen sie das Auslaufen untersagen können;
      dem Vercharterer drohen Bußgelder und der Entzug der Genehmigung.
    </p>

    <h2>Elektronische Vignette für ausländische Yachten</h2>
    <p>
      Eine Vignette für ausländische Yachten gibt es in Montenegro bereits. Neu wäre, dass
      sie als <strong>elektronische Vignette</strong> über die Online-Plattform beantragt
      und ausgestellt wird. Sie betrifft ausländische Yachten über sieben Meter Länge und
      entsprechend auch kleinere ausländische Boote – privat genutzte ebenso wie
      Charteryachten. Der Entwurf sieht vor:
    </p>
    <ul>
      <li>
        Die Vignette soll vor der Einfahrt vorliegen, spätestens bis zum Abschluss der
        Grenzkontrolle im ersten Hafen mit Grenzübergang.
      </li>
      <li>Die Hafenbehörde stellt sie innerhalb von 24 Stunden aus.</li>
      <li>
        Sie gilt für einen oder mehrere Monate, höchstens ein Jahr – den Zeitraum wählt
        der Eigner beziehungsweise Betreiber.
      </li>
      <li>Beiboote sind mit abgedeckt.</li>
      <li>
        Die Gebühr soll sich nach Länge, Antriebsart und Gültigkeitszeitraum richten.
      </li>
    </ul>
    <p>
      <strong>Wie hoch die Gebühren künftig ausfallen, ist noch offen.</strong> Der
      Entwurf nennt keine Beträge; festlegen soll sie die Regierung. In seiner
      Folgenabschätzung weist das Ministerium darauf hin, dass Gebühren für Vignette und
      Chartergenehmigung schon nach geltendem Recht bestehen und ihre Höhe per
      Verordnung bestimmt wird.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für die Saisonplanung besteht aktuell kein Anlass, Montenegro zu meiden oder
      Buchungen zurückzustellen. Die Reform befindet sich noch im
      Gesetzgebungsverfahren.
    </p>
    <p>
      Wer beim{" "}
      <a href="/reviere/mittelmeer/montenegro">Yachtcharter in Montenegro</a> direkt ab
      Tivat oder in der Bucht von Kotor startet, hätte nach dem Entwurf voraussichtlich
      keinen eigenen zusätzlichen Behördengang: Genehmigung, Chartermeldung und Crewliste
      wären Aufgabe des Vercharterers. Praktisch heißt das: Die Daten aller Mitsegler
      werden vor dem Törn gebraucht, und zusätzliche Gäste oder ein Crewwechsel müssten
      vorher gemeldet werden.
    </p>
    <p>
      Eine Pflicht träfe Bareboat-Kunden direkt: Sie müssten sicherstellen, dass die Yacht
      von einem Skipper mit anerkanntem Befähigungsnachweis geführt wird; der Vercharterer
      prüft den Schein vor der Übergabe. Ausländische Sportbootführerscheine sollen gelten,
      wenn sie auf einer Liste stehen, die das Ministerium veröffentlicht – mit Grenzen
      nach Yachtgröße und Fahrtgebiet. Welche Scheine darauf stehen werden, ist noch nicht
      bekannt.
    </p>
    <p>
      Im Kern geht es dem Staat darum, nicht angemeldete Charter stärker zu kontrollieren
      und den Markt zu formalisieren. Wer bei einem regulär arbeitenden Vercharterer
      bucht, dürfte davon eher profitieren.
    </p>

    <h2>Kroatien–Montenegro-Törns: noch keine neuen Kosten festgelegt</h2>
    <p>
      Viele Crews, die in{" "}
      <a href="/reviere/mittelmeer/kroatien/dubrovnik">Süddalmatien rund um Dubrovnik</a>{" "}
      chartern, möchten einen Abstecher in die Bucht von Kotor einplanen. Für solche Törns
      wären nach dem Entwurf vor allem zwei Punkte relevant: Die Yacht bräuchte vor der
      Einfahrt eine montenegrinische Chartergenehmigung, und für sie müsste eine Vignette
      vorliegen. Die Genehmigung beantragt der Vercharterer, die Vignette können Eigner,
      Betreiber oder Skipper elektronisch beantragen. Außerdem sieht der Entwurf vor,
      dass die Yacht nach der Einfahrt auf direktem Weg einen Hafen mit Grenzübergang
      anläuft und vor dem Verlassen der Gewässer dort wieder ausklariert.
    </p>
    <p>
      Das heißt nicht, dass jeder Abstecher automatisch teurer wird. Die geplante Reform
      kann künftig Einfluss auf Formalitäten und Kosten für ausländische Yachten haben.
      Die konkrete Gebührenstaffel steht nach aktuellem Stand aber noch nicht fest. Ein
      Vorschlag aus der Branche, Vignetten für gewerblich genutzte Yachten erst ab sechs
      Monaten auszustellen, wurde laut Folgenabschätzung nicht übernommen – eine Vignette
      für einen Monat bliebe damit möglich. Ob ein Montenegro-Abstecher mit einer
      bestimmten Yacht vorgesehen ist, klärt man am besten bei der Buchung mit dem
      Vercharterer.
    </p>

    <h2>Was passiert als Nächstes?</h2>
    <p>
      Die öffentliche Anhörung läuft bis 23. November 2026. Danach wertet das
      Ministerium die Stellungnahmen aus und veröffentlicht einen Bericht; der Entwurf
      kann sich dabei noch ändern. Sollte das Gesetz so beschlossen werden, träte es acht
      Tage nach der Veröffentlichung im Amtsblatt in Kraft. Die Durchführungsvorschriften,
      darunter die Gebührenhöhen, sollen innerhalb von sechs Monaten folgen, die
      elektronische Plattform innerhalb eines Jahres. Bis dahin wären Anträge schriftlich
      oder per E-Mail möglich. Bereits erteilte Vignetten und Charterlizenzen sollen bis
      zu ihrem Ablauf gültig bleiben.
    </p>
    <p>
      CharterTransparenz beobachtet den weiteren Gesetzgebungsprozess und aktualisiert
      diese Meldung, sobald die endgültigen Regeln feststehen.
    </p>

    {/* CTA */}
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "2.5rem 0 1rem",
      }}
    >
      <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontSize: "1rem" }}>
        Sie planen einen Chartertörn ab Montenegro oder möchten von Kroatien aus nach
        Montenegro segeln?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir prüfen bei der Buchung gemeinsam mit dem Vercharterer, welche Genehmigungen und
        Formalitäten für den konkreten Törn erforderlich sind.
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
        Yachtcharter anfragen
      </a>
    </div>
  </div>
);

export const montenegroNeuesYachtgesetzCharterVignette2026: NewsItem = {
  content,
  slug: "montenegro-neues-yachtgesetz-charter-vignette-2026",
  title:
    "Montenegro plant neues Yachtgesetz: Was sich für Charter und Vignette ändern könnte",
  excerpt:
    "Montenegros Seefahrtsministerium hat den Entwurf für ein neues Yachtgesetz vorgelegt. Geplant sind unter anderem eine Chartergenehmigung für jede einzelne Yacht, eine elektronische Meldung jeder Charter und eine elektronische Vignette für ausländische Yachten. Die öffentliche Anhörung läuft bis 23. November 2026 – beschlossen ist noch nichts.",
  content_type: "basis_hinweis",
  region: "Montenegro / Bucht von Kotor",
  country_or_area: "Montenegro",
  status: "entwurf",
  effective_from: "",
  published_at: "2026-11-13",
  updated_at: "2026-11-13",
  priority: "mittel",
  category: "Vorschriften & Formalitäten",
  source_name:
    "Ministarstvo pomorstva Crne Gore – Nacrt zakona o jahtama, öffentliche Anhörung (gov.me)",
  source_url: "https://www.gov.me/clanak/javni-poziv-74",
  customer_impact:
    "Noch keine Änderung: Gesetzentwurf in der Anhörung. Geplant sind Chartergenehmigung je Yacht, elektronische Chartermeldung als Crewliste und eine elektronische Vignette für ausländische Yachten; Gebühren noch nicht festgelegt.",
  action_advice:
    "Montenegro-Törns wie geplant buchen. Bei Kroatien-Charter mit Abstecher nach Montenegro vorab mit dem Vercharterer klären, ob die Yacht dafür vorgesehen ist.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "montenegro",
  canonical_topic_key: "montenegro_yachtgesetz_entwurf_2026",
  seo_title: "Montenegro plant neues Yachtgesetz: Charter & Vignette",
  meta_description:
    "Montenegro arbeitet an einem neuen Yachtgesetz. Geplant sind neue Charterformalitäten und eine elektronische Vignette – was Charterkunden wissen sollten.",
  is_featured: false,
  image: "/images/news/montenegro-yachtgesetz-tivat-yachthafen.webp",
  imageAlt:
    "Luftbild des Yachthafens von Tivat in der Bucht von Kotor, Montenegro, mit Segel- und Motoryachten an den Stegen",
  imageCaption:
    "Yachthafen in Tivat, Bucht von Kotor – ein zentraler Ausgangspunkt für Yachtcharter in Montenegro.",
  region_links: [
    {
      label: "Montenegro",
      href: "/reviere/mittelmeer/montenegro",
    },
  ],
  cta_text:
    "Sie sind unsicher, ob ein Abstecher nach Montenegro zu Ihrem Törn passt? Wir klären das gern gemeinsam mit Ihnen und dem Vercharterer.",
};
