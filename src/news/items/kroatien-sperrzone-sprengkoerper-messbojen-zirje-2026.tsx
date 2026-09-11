import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Das Kroatische Hydrographische Institut HHI hat zwei aktuelle Navigationswarnungen
      für die kroatische Adria veröffentlicht. Für Chartercrews sind zwei Punkte relevant:
      Vor der istrischen Westküste nördlich von Luka Dajla gilt wegen eines gemeldeten
      Sprengkörpers ein Sperrbereich. Bei der Insel Žirje im Šibenik-Archipel wurden
      außerdem neue Messbojen ausgebracht, in deren Nähe nicht geankert werden darf.
    </p>

    <div className="not-prose my-6 p-5 bg-blue-50 rounded-lg border border-blue-100">
      <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
        Schneller Überblick
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-2 text-sm list-none p-0 m-0">
        <li>
          • Vor der istrischen Westküste nördlich von Luka Dajla wurde ein Sprengkörper
          im Meer gemeldet.
        </li>
        <li>
          • Um die ungefähr angegebene Position gilt ein Sperrbereich von 100 m Radius.
        </li>
        <li>
          • Durchfahrt, Ankern, Baden, Tauchen, Schnorcheln, Angeln und sonstige
          Aktivitäten sind dort verboten.
        </li>
        <li>
          • Bei Žirje wurden drei rot-gelbe ADCP-Messbojen in Uvala Stupica Mala und
          Uvala Kabal ausgebracht.
        </li>
        <li>
          • An den Messbojen darf nicht festgemacht werden; im Umkreis von 50 m ist
          Ankern verboten.
        </li>
        <li>
          • Chartercrews sollten aktuelle HHI-Warnungen, Plotterdaten und Hinweise der
          Charterbasis vor dem Törn prüfen.
        </li>
      </ul>
    </div>

    <h2>Sperrzone vor Istrien: Sprengkörper nördlich von Luka Dajla</h2>
    <p>
      Nach HHI-Warnung 324/2026 vom 1. September 2026 wurde nördlich von Luka Dajla, an
      der istrischen Westküste zwischen Novigrad und Umag, ein Sprengkörper im Meer
      gemeldet. Die angegebene Position liegt bei etwa 45° 21,850′ N / 013° 32,417′ E
      (WGS 84) und ist ausdrücklich als ungefähr gekennzeichnet.
    </p>
    <div className="not-prose my-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        HHI Warnung 324/2026 – im Überblick
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-2 text-sm list-none p-0 m-0">
        <li>Region: Westküste Istriens, nördlich von Luka Dajla</li>
        <li>Position (ungefähr, WGS 84): 45° 21,850′ N / 013° 32,417′ E</li>
        <li>Sperrbereich: 100 m Radius um die gemeldete Position</li>
        <li>
          Im Sperrbereich verboten: Durchfahrt, Ankern, Baden, Tauchen, Schnorcheln,
          Angeln und sonstige Aktivitäten
        </li>
        <li>Kein Enddatum veröffentlicht – die Warnung gilt bis zur Aufhebung</li>
      </ul>
    </div>
    <p>
      Für Chartercrews bedeutet das: Die Position sollte nicht als punktgenaue
      Markierung verstanden werden. Weil die Warnung die Lage nur ungefähr angibt, ist
      ein deutlich größerer Sicherheitsabstand sinnvoll als die reinen 100 Meter. Wer
      entlang der{" "}
      <a href="/reviere/mittelmeer/kroatien/istrien" className="text-blue-600 hover:underline">
        istrischen Westküste
      </a>{" "}
      unterwegs ist, sollte die Position vor dem Törn in Plotter oder Navigations-App
      markieren und den Bereich weiträumig meiden, bis die Warnung offiziell aufgehoben
      wird.
    </p>

    <h2>Žirje: Messbojen in Stupica Mala und Kabal</h2>
    <p>
      Nach HHI-Warnung 320/2026 vom 31. August 2026 wurden bei der Insel Žirje im
      Šibenik-Archipel drei automatische ADCP-Strömungsmessstationen verankert. Betroffen
      sind die Uvala Stupica Mala und die Uvala Kabal. Alle drei Stationen sind mit
      rot-gelben Bojen gekennzeichnet.
    </p>
    <div className="not-prose my-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        HHI Warnung 320/2026 – im Überblick
      </p>
      <ul className="text-gray-700 leading-relaxed space-y-2 text-sm list-none p-0 m-0">
        <li>Region: Insel Žirje, Šibenik-Archipel (Uvala Stupica Mala und Uvala Kabal)</li>
        <li>Drei automatische ADCP-Messstationen, jeweils rot-gelb bebojt (WGS 84):</li>
        <li className="pl-4">A) 43° 38,029′ N / 015° 42,280′ E</li>
        <li className="pl-4">B) 43° 37,665′ N / 015° 42,620′ E</li>
        <li className="pl-4">C) 43° 37,868′ N / 015° 42,816′ E</li>
        <li>Festmachen an den Bojen und Ankern im Umkreis von 50 m verboten</li>
        <li>Langsame Fahrt und ausreichender Abstand beim Passieren erbeten</li>
        <li>Kein Enddatum veröffentlicht – die Warnung gilt bis zur Aufhebung</li>
      </ul>
    </div>
    <p>
      Für Crews im Šibenik-Revier ist wichtig: Die Bojen sind keine freien Mooring-Bojen.
      Sie markieren Messstationen und dürfen nicht zum Festmachen genutzt werden. Wer in
      Stupica Mala oder Kabal ankern möchte, sollte ausreichend Abstand zu den rot-gelben
      Bojen halten und die Umgebung vor dem Fallenlassen des Ankers sorgfältig prüfen.
      Der übrige Ankerraum in beiden Buchten bleibt nutzbar – lediglich der unmittelbare
      Nahbereich der drei Messstationen ist betroffen.
    </p>

    <h2>Was Chartercrews praktisch tun sollten</h2>
    <p>
      Beide Warnungen betreffen begrenzte, klar umrissene Bereiche – nicht ganze Reviere.
      Für die Törnplanung im{" "}
      <a href="/reviere/mittelmeer/kroatien" className="text-blue-600 hover:underline">
        Kroatien-Törn
      </a>{" "}
      empfiehlt sich:
    </p>
    <ul>
      <li>
        Position der Sperrzone bei Luka Dajla vor dem Törn in Plotter oder
        Navigations-App markieren und mit deutlichem Abstand großräumig meiden.
      </li>
      <li>
        In Stupica Mala und Kabal die rot-gelben Bojen als Messstationen erkennen –
        nicht festmachen, Mindestabstand von 50 m beim Ankern einhalten.
      </li>
      <li>
        Vor dem Auslaufen die aktuellen HHI-Warnungen unter hhi.hr prüfen – beide
        Warnungen gelten bis zur Aufhebung, eine kurzfristige Änderung ist möglich.
      </li>
      <li>
        Seekarten, ENCs und Plottersoftware aktuell halten und mit Hinweisen der
        Charterbasis vor Ort abgleichen.
      </li>
    </ul>

    <h2>Warum aktuelle Navigationshinweise zur Törnplanung gehören</h2>
    <p>
      Kroatien zählt zu den attraktivsten Charterrevieren im Mittelmeer – gerade in
      beliebten Gebieten wie der istrischen Westküste oder dem Šibenik-Archipel können
      lokale Navigationshinweise aber kurzfristig relevant werden. Eine gute
      Charterplanung berücksichtigt deshalb nicht nur Yacht, Preis und Saison, sondern
      auch Route, Rückkehrzeiten, aktuelle Sperrzonen, Bojenfelder, Wetter, Marinas und
      sichere Alternativen. Genau hier unterstützt CharterTransparenz: Wir helfen Ihnen,
      passende Yacht, Revier und Route realistisch und mit aktuellem Revierwissen zu
      planen.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        HHI 324/2026: Sperrzone (100 m Radius) nördlich von Luka Dajla an der istrischen
        Westküste wegen eines gemeldeten Sprengkörpers – Durchfahrt, Ankern, Baden,
        Tauchen, Schnorcheln und Angeln dort untersagt. HHI 320/2026: Drei rot-gelbe
        ADCP-Messbojen in Uvala Stupica Mala und Uvala Kabal bei Žirje – nicht
        festmachen, im Umkreis von 50 m nicht ankern. Beide Warnungen gelten bis zur
        Aufhebung. Vor dem Törn aktuelle HHI-Warnungen, Plotterdaten und Hinweise der
        Charterbasis prüfen.
      </p>
    </div>

    {/* ── CTA ──────────────────────────────────────────────────── */}
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
        Kroatien-Törn sicher planen
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Ob Istrien, Kvarner, Kornaten oder Dalmatien: In Kroatien lohnt sich eine saubere
        Törnplanung mit aktuellen Revierhinweisen, passenden Etappen und realistischen
        Alternativen. Wir helfen Ihnen, die passende Yacht, Route und Charterbasis für
        Ihre Crew zu finden.
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
        Kroatien-Charter anfragen
      </a>
    </div>

    <p className="text-sm text-gray-400 mt-8">
      Redaktionsstand: 11. September 2026. Navigationswarnungen können kurzfristig
      geändert oder aufgehoben werden. Maßgeblich sind die aktuellen Hinweise des
      Kroatischen Hydrographischen Instituts, lokale Behörden, die Charterbasis und die
      nautischen Unterlagen an Bord.
    </p>
  </div>
);

export const kroatienSperrzoneSprengkoerperMessbojenZirje2026: NewsItem = {
  content,
  slug: "kroatien-sperrzone-sprengkoerper-messbojen-zirje-2026",
  title: "Kroatien: Neue Navigationshinweise vor Istrien und bei Žirje",
  excerpt:
    "Das HHI meldet eine Sperrzone (100 m Radius) nördlich von Luka Dajla an der istrischen Westküste wegen eines Sprengkörpers sowie drei neue ADCP-Messbojen bei Žirje mit Ankerverbot im 50-m-Nahbereich. Was Chartercrews vor dem Törn beachten sollten.",
  content_type: "basis_hinweis",
  region: "Kroatien / Istrien / Šibenik-Archipel / Žirje",
  country_or_area: "Kroatien",
  status: "in_kraft",
  effective_from: "2026-08-31",
  published_at: "2026-09-11",
  updated_at: "2026-09-11",
  priority: "hoch",
  category: "Revier & Sicherheit",
  source_name: "HHI – Hrvatski hidrografski institut",
  source_url: "https://www.hhi.hr/en/e-services/radio-navigational-warnings",
  customer_impact:
    "Sperrzone (100 m Radius) nördlich von Luka Dajla an der istrischen Westküste wegen eines gemeldeten Sprengkörpers: Durchfahrt, Ankern, Baden, Tauchen, Schnorcheln und Angeln dort untersagt. Bei Žirje (Uvala Stupica Mala und Uvala Kabal) drei rot-gelbe ADCP-Messbojen: nicht festmachen, im Umkreis von 50 m nicht ankern. Beide Warnungen gelten bis zur Aufhebung.",
  action_advice:
    "Position der Sperrzone bei Luka Dajla vor dem Törn markieren und großräumig meiden. Bei Žirje die rot-gelben Messbojen nicht mit Mooring-Bojen verwechseln, nicht festmachen, 50-m-Abstand beim Ankern einhalten. Vor dem Auslaufen aktuelle HHI-Warnungen unter hhi.hr sowie Hinweise der Charterbasis prüfen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_sperrzone_dajla_messbojen_zirje_2026",
  seo_title: "Kroatien: Sperrzone vor Istrien und Messbojen bei Žirje",
  meta_description:
    "Aktuelle Navigationshinweise für Kroatien: Sperrzone wegen eines Sprengkörpers vor Istrien und neue Messbojen mit Ankerverbot bei Žirje.",
  is_featured: true,
  cta_text:
    "Ob Istrien, Kvarner, Kornaten oder Dalmatien: Wir helfen Ihnen, Route, Etappen und Charterbasis für Ihren Kroatien-Törn realistisch und mit aktuellem Revierwissen zu planen.",
  image: "/images/news/kroatien-sperrzone-sprengkoerper-messbojen-zirje-2026.jpg",
  imageAlt: "Segelyacht vor der kroatischen Adriaküste",
  imageCaption:
    "Aktuelle Navigationshinweise können auch beliebte kroatische Reviere betreffen. Chartercrews sollten Sperrzonen, Messbojen und lokale Warnungen vor dem Törn prüfen.",
  region_links: [
    { label: "Kroatien", href: "/reviere/mittelmeer/kroatien" },
    { label: "Istrien", href: "/reviere/mittelmeer/kroatien/istrien" },
    { label: "Norddalmatien / Šibenik", href: "/reviere/mittelmeer/kroatien/zadar" },
  ],
};
