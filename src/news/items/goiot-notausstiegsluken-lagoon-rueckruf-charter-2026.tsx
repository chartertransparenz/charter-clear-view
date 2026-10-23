import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Worum geht es?</h2>
    <p>
      Lagoon hat im Juni 2026 einen Hinweis veröffentlicht, der Charterkunden mit Törnplänen
      auf älteren Lagoon-Katamaranen betrifft: Notausstiegsluken des Herstellers GOIOT, die in
      Katamaranen aus dem Bauzeitraum 2007 bis 2019 verbaut wurden, können nach zehn oder mehr
      Jahren im Außeneinsatz ein Sicherheitsproblem entwickeln.
    </p>
    <p>
      Das Sicherheitsglas kann sich durch UV-Strahlung, Salzwasser und Temperaturschwankungen
      vom Aluminiumrahmen lösen. Im Extremfall besteht das Risiko, dass die Scheibe
      herausfällt – eine Gefahr für Personen darunter und für die Wasserdichtigkeit.
    </p>

    <h2>Was Lagoon mitteilt</h2>
    <p>
      Lagoon hatte das Problem bereits 2019 erkannt und seinerzeit ein sogenanntes Holding Kit
      entwickelt, das an betroffenen Luken nachgerüstet werden kann, um ein Herausfallen des
      Glases zu verhindern. Mit der aktualisierten Mitteilung vom 17. Juni 2026 empfiehlt
      Lagoon nun, diese Luken nach spätestens zehn Jahren Betriebsdauer grundsätzlich zu
      ersetzen – unabhängig davon, ob das Holding Kit bereits montiert wurde.
    </p>
    <p>
      Die Empfehlung gilt für alle Katamarane mit festeingebauten GOIOT-Notausstiegsluken aus
      dem Bauzeitraum 2007 bis 2019. Welche konkreten Modelle betroffen sind, nennt Lagoon in
      der Mitteilung nicht namentlich. Eigentümer und Flottenbetreiber können sich direkt an
      Lagoon wenden, um die Situation für ihre Yacht einzuordnen.
    </p>

    <h2>Was das für Charterkunden bedeutet</h2>
    <p>
      Charterflotten nutzen ältere Lagoon-Katamarane regelmäßig. In den Revieren des
      Mittelmeers und der Karibik sind Modelle aus den Jahren 2007 bis 2019 häufig anzutreffen.
      Die Frage, ob eine bestimmte Charteryacht von diesem Hinweis betroffen ist und ob die
      Luken geprüft oder erneuert wurden, lässt sich als Charterkunde nicht selbst beantworten –
      das liegt in der Verantwortung der Charterbasis oder des Flottenbetreibers.
    </p>
    <p>
      Seriöse Charterunternehmen prüfen ihre Flotten regelmäßig auf sicherheitsrelevante
      Herstellerhinweise und technische Empfehlungen. Für Charterkunden, die auf Nummer sicher
      gehen möchten, ist es dennoch sinnvoll, vor dem Törn gezielt nachzufragen.
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
      <p style={{ color: "#ffffff", fontWeight: 700, marginBottom: "8px", fontSize: "1rem" }}>
        Sie planen einen Törn auf einem Lagoon-Katamaran?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, die richtigen Fragen zu stellen und die passende Yacht und Basis zu
        finden – persönlich, unabhängig und mit über 30 Jahren Charter-Erfahrung.
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
        Persönliche Beratung anfragen
      </a>
    </div>

    <h2>Praktischer Hinweis vor dem Törn</h2>
    <p>
      Wenn Sie eine Charteryacht auf Basis eines Lagoon-Katamarans aus dem Bauzeitraum
      2007 bis 2019 gebucht haben oder dies planen, empfehlen wir folgende Schritte:
    </p>
    <ul>
      <li>
        <strong>Baujahr der Yacht prüfen:</strong> Das Baujahr ist in der Regel im Angebot der
        Charterbasis oder im Chartervertrag angegeben. Liegt es zwischen 2007 und 2019, ist die
        Frage nach den Notausstiegsluken relevant.
      </li>
      <li>
        <strong>Charterbasis ansprechen:</strong> Fragen Sie, ob die GOIOT-Notausstiegsluken
        auf Ihrer Yacht geprüft oder erneuert wurden. Eine kompetente Charterbasis kann diese
        Frage beantworten oder gezielt nachschlagen.
      </li>
      <li>
        <strong>Bei der Übergabe kontrollieren:</strong> Schauen Sie sich beim Briefing die
        Notausstiegsluken an und überprüfen Sie, ob der Rahmen und das Glas optisch intakt
        sind. Bereits sichtbare Risse, Verfärbungen oder Lockerungen sollten Sie sofort
        ansprechen.
      </li>
      <li>
        <strong>Kein Grund zur Panik:</strong> Viele Charteryachten sind bereits gewartet und
        haben das Holding Kit oder neue Luken. Die Empfehlung von Lagoon zeigt, dass das Thema
        ernst genommen wird – und dass eine Nachfrage im Vorfeld sinnvoll, aber kein Anlass zur
        Stornierung ist.
      </li>
    </ul>

    <h2>Hintergrund: GOIOT-Notausstiegsluken</h2>
    <p>
      Notausstiegsluken sind ein wichtiges Sicherheitselement auf Katamaranen: Sie ermöglichen
      im Notfall das Entkommen aus dem Rumpf, wenn der Katamaran kenternd umgedreht im Wasser
      liegt. Die von GOIOT gefertigten Luken sind feste Einbauten aus Sicherheitsglas im
      Aluminiumrahmen. Lagoon hatte sie über viele Baujahre verbaut.
    </p>
    <p>
      Das beschriebene Alterungsproblem – Ablösung des Glases vom Rahmen durch UV, Salz und
      Temperatur – ist bei Außenbauteilen auf Segelyachten grundsätzlich nicht unbekannt. Die
      Empfehlung zum regelmäßigen Austausch nach zehn Jahren entspricht dem üblichen Vorgehen
      bei alterungsempfindlichen Sicherheitsbauteilen.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Lagoon empfiehlt seit Juni 2026, GOIOT-Notausstiegsluken in Katamaranen der Baujahre
        2007 bis 2019 nach spätestens zehn Jahren zu ersetzen – unabhängig davon, ob bereits
        ein Holding Kit montiert ist. Für Charterkunden: Baujahr der gebuchten Yacht prüfen
        und bei der Charterbasis gezielt nachfragen, ob die Luken geprüft oder erneuert wurden.
      </p>
    </div>

    <h2>Quelle</h2>
    <p>
      Quelle: Lagoon Catamarans / Bénéteau Group (Sicherheitshinweis vom 17. Juni 2026).
      Eigentümer und Vercharterer von betroffenen Yachten können sich direkt an Lagoon
      wenden: lagoon19009@beneteau-group.com.
    </p>
  </div>
);

export const goiotNotausstiegslukeLagoonRueckrufCharter2026: NewsItem = {
  content,
  slug: "goiot-notausstiegsluken-lagoon-rueckruf-charter-2026",
  title: "GOIOT-Notausstiegsluken auf Lagoon-Katamaranen: Lagoon empfiehlt Austausch nach zehn Jahren",
  excerpt:
    "Lagoon hat im Juni 2026 seinen Sicherheitshinweis zu GOIOT-Notausstiegsluken aktualisiert: Katamarane der Baujahre 2007 bis 2019 sollen die Luken nach spätestens zehn Jahren ersetzen lassen – auch wenn bereits ein Holding Kit montiert ist. Was das für Charterkunden bedeutet und welche Fragen Sie vor dem Törn stellen sollten.",
  content_type: "basis_hinweis",
  region: "International / Katamaranflotten",
  country_or_area: "International",
  status: "in_kraft",
  effective_from: "2026-06-17",
  published_at: "2026-10-23",
  updated_at: "2026-10-23",
  priority: "mittel",
  category: "Vorschriften & Formalitäten",
  source_name: "Lagoon Catamarans / Bénéteau Group",
  source_url: "https://www.lagoon-catamarans.com/en/",
  customer_impact:
    "Lagoon empfiehlt, GOIOT-Notausstiegsluken in Katamaranen der Baujahre 2007–2019 nach spätestens zehn Jahren zu ersetzen. Betrifft Charteryachten in diesem Altersbereich. Charterkunden sollten vor dem Törn bei der Basis nachfragen, ob die Luken geprüft oder erneuert wurden.",
  action_advice:
    "Baujahr der Charteryacht prüfen. Bei Baujahr 2007–2019: Charterbasis fragen, ob GOIOT-Notausstiegsluken geprüft oder ersetzt wurden. Bei der Übergabe Rahmen und Glas der Luken optisch kontrollieren.",
  show_on_blog: true,
  show_on_region_page: false,
  linked_region_slug: "kroatien",
  canonical_topic_key: "goiot_notausstiegsluke_lagoon_sicherheit_2026",
  seo_title: "GOIOT-Notausstiegsluken Lagoon: Austausch nach 10 Jahren empfohlen | CharterTransparenz",
  meta_description:
    "Lagoon empfiehlt seit Juni 2026, GOIOT-Notausstiegsluken auf Katamaranen der Baujahre 2007–2019 nach zehn Jahren zu ersetzen. Was Charterkunden wissen und fragen sollten.",
  image: "/images/news/goiot-notausstiegsluken-lagoon-rueckruf-charter-2026.jpg",
  imageAlt: "Zwei Katamarane ankern in einer türkisblauen Bucht vor bewaldeter Bergküste",
  imageCaption: "Ältere Lagoon-Katamarane sind in Charterflotten weltweit verbreitet.",
  is_featured: false,
  cta_text:
    "Sie planen einen Törn auf einem Lagoon-Katamaran? Wir helfen Ihnen, die richtigen Fragen zu stellen und die passende Yacht zu finden.",
};
