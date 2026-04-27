import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Der Golf von Göcek gehört zu den schönsten Segelrevieren der Türkei: geschützte Buchten,
      türkisfarbenes Wasser, bewaldete Hügel und eine entspannte Atmosphäre abseits der großen
      Touristenströme. Genau deshalb ist das Revier beliebt – und genau deshalb steht es unter
      zunehmendem Druck. Die türkischen Behörden planen, das freie Ankern in sensiblen Buchten
      durch ein Bojenfeldsystem besser zu regulieren. Dieser Hinweis erklärt den Hintergrund.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Die türkischen Behörden haben angekündigt, in mehreren Buchten des Golfs von Göcek und
      des angrenzenden Reviers weitere Bojenfelder einzurichten. Ziel ist es, das freie Ankern
      in ökologisch empfindlichen Bereichen zu reduzieren und die Meeresumwelt zu schützen.
    </p>
    <p>
      Was bisher bekannt ist:
    </p>
    <ul>
      <li>
        <strong>Bojenfelder als Steuerungsmittel:</strong> Statt ein generelles Ankerverbot
        auszusprechen, setzen die Behörden auf ausgewiesene Mooringbojen. Ankern soll künftig
        nur noch in dafür vorgesehenen Zonen erlaubt sein – ähnlich dem kroatischen Modell
        in den Nationalparks.
      </li>
      <li>
        <strong>Betroffene Buchten:</strong> Konkret betroffen sind unter anderem Buchten
        innerhalb der Skopea Limanı (auch bekannt als Göcek-Inseln-Bucht), Buchten in der
        Nähe von Bozburun sowie einige Ankerplätze im Fethiye-Golf. Die vollständige Liste
        der betroffenen Zonen war zum Zeitpunkt dieser Meldung noch nicht offiziell
        veröffentlicht.
      </li>
      <li>
        <strong>Gebühren für Bojennutzung:</strong> Die Benutzung der neuen Mooringbojen
        ist in der Regel gebührenpflichtig. Preise und Buchungsmodus werden lokal
        geregelt – Informationen dazu gibt es in den Marinas von Göcek und Fethiye.
      </li>
      <li>
        <strong>Umsetzungsstand:</strong> Die Maßnahme befindet sich in der Umsetzungsphase.
        Nicht alle angekündigten Bojenfelder sind bereits vollständig eingerichtet. Charterkunden
        sollten vor dem Törn den aktuellen Stand in den jeweiligen Buchten erfragen.
      </li>
    </ul>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für die meisten Charterkunden ändert sich der Charakter des Reviers nicht grundlegend.
      Die schönsten Buchten des Göcek-Golfs bleiben zugänglich – allerdings künftig vorwiegend
      über Mooringbojen statt freies Ankern. Das hat auch Vorteile: weniger Schaukeln durch
      andere ankernde Yachten, klare Platzverhältnisse, weniger Ankerplatzkonflikte.
    </p>
    <p>
      Was sich ändern kann:
    </p>
    <ul>
      <li>
        Spontanes Ankern in der Lieblingsbuchten wie früher ist nicht mehr überall möglich.
      </li>
      <li>
        Beliebte Buchten können in der Hochsaison ausgebucht sein – frühere Ankunft und
        ggf. Vorabreservierung empfohlen.
      </li>
      <li>
        Zusätzliche Kosten für Bojennutzung einplanen.
      </li>
    </ul>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Charter-Basis in Göcek oder Fethiye vor dem Törn nach dem aktuellen Stand der
        Bojenfelder fragen – die lokalen Charterfirmen sind am besten informiert.
      </li>
      <li>
        Geplante Ankerstellen mit aktueller Navigationssoftware prüfen: Navionics und
        Aqua Map aktualisieren ihre Daten regelmäßig.
      </li>
      <li>
        Für die Hochsaison (Juli/August) frühzeitig planen: Bojenplätze in besonders
        beliebten Buchten können knapp werden.
      </li>
      <li>
        Budget für Bojengebühren einplanen – Richtwert: ca. 10–30 EUR pro Nacht, je nach
        Buchengröße und Lage.
      </li>
    </ul>

    <h2>Quelle und Stand</h2>
    <p>
      Die Informationen basieren auf Ankündigungen türkischer Umwelt- und Küstenbehörden
      sowie Berichten aus der lokalen Charter-Community. Da sich die Umsetzung noch in
      der Entwicklung befindet, empfehlen wir eine direkte Rückfrage bei der Charterbasis
      kurz vor dem Törn. Stand: Frühjahr 2026.
    </p>
    <p className="text-sm text-gray-500 mt-4 border-t border-gray-100 pt-4">
      Diese Maßnahme befindet sich in der Umsetzungsphase. Regeln können sich kurzfristig
      ändern. Prüfen Sie vor dem Törn immer die aktuellen Informationen vor Ort.
    </p>
  </div>
);

export const tuerkeiGoecekBojenfelder2026: NewsItem = {
  slug: "tuerkei-goecek-bojenfelder-2026",
  title: "Göcek 2026: Bojenfelder sollen freies Ankern besser regulieren",
  excerpt:
    "Im Golf von Göcek sollen neue Bojenfelder das freie Ankern in sensiblen Buchten ersetzen. Die Maßnahme ist angekündigt und in der Umsetzung – Charterkunden sollten den aktuellen Stand vor dem Törn erfragen.",
  content_type: "basis_hinweis",
  region: "Türkei / Göcek",
  country_or_area: "Türkei",
  status: "angekuendigt",
  effective_from: "2026-05-01",
  published_at: "2026-04-20",
  updated_at: "2026-04-20",
  priority: "mittel",
  category: "Ankern & Bojen",
  source_name: "Türkische Küsten- und Umweltbehörden",
  source_url: "https://www.kiyiemniyeti.gov.tr",
  customer_impact:
    "Freies Ankern in beliebten Göcek-Buchten wird schrittweise durch gebührenpflichtige Mooringbojen ersetzt. Spontane Ankerstellen können entfallen.",
  action_advice:
    "Charterbasis vor Törn nach aktuellem Bojenfeld-Stand fragen, Budget für Bojengebühren einplanen, Navigationssoftware aktuell halten.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "tuerkei-goecek",
  canonical_topic_key: "tuerkei_goecek_bojenfelder_2026",
  seo_title:
    "Göcek 2026: Bojenfelder regulieren freies Ankern – Was Charterkunden wissen müssen",
  meta_description:
    "Im Golf von Göcek sollen neue Mooringbojen das freie Ankern ersetzen. Alles, was Charterkunden über die Regelung, betroffene Buchten und Gebühren wissen sollten.",
};
