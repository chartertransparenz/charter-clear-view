import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Griechenland gehört zu den beliebtesten Charterrevieren im Mittelmeer. Gerade die
      Kykladen, der Dodekanes und viele kleinere Inselgruppen leben von ihrer besonderen
      Mischung aus klaren Buchten, kleinen Häfen und naturnahen Ankerplätzen. Gleichzeitig
      rückt der Schutz sensibler Küsten- und Meeresräume stärker in den Mittelpunkt.
    </p>
    <p>
      Aktuell geht es nicht um ein sofortiges neues Ankerverbot für die Saison 2026.
      Wichtig ist aber die Entwicklung: Griechenland treibt größere Meeresschutzpläne in
      der südlichen Ägäis voran und hat die Liste geschützter, besonders unberührter Strände
      erweitert. Für Chartercrews bedeutet das vor allem, künftige Revierhinweise und lokale
      Regeln genauer im Blick zu behalten.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Zum einen plant Griechenland einen größeren Meeresschutzpark in der südlichen Ägäis.
      Das Gebiet soll unter anderem die Kykladen, Teile des Dodekanes und weitere
      Inselgruppen betreffen. Im Mittelpunkt stehen der Schutz von Posidonia-Wiesen,
      sensible Buchten und die mögliche Einrichtung umweltfreundlicher Bojenfelder.
    </p>
    <p>
      Zum anderen wurde die Liste offiziell geschützter „Unberührter Strände" auf 251
      Standorte erweitert. Die neu aufgenommenen Bereiche liegen in Natura-2000-Gebieten.
      Dort geht es vor allem um den Schutz vor kommerzieller Nutzung, touristischer
      Infrastruktur und Eingriffen in das natürliche Umfeld. Welche konkreten Auswirkungen
      einzelne Standorte für Yachten und Ankerplätze haben, muss je nach Gebiet geprüft
      werden.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für die Saison 2026 sind aus diesen Meldungen noch keine pauschalen neuen Regeln für
      alle Charteryachten abzuleiten. Wer in Griechenland chartert, kann seinen Törn also
      weiterhin normal planen. Trotzdem zeigt die Entwicklung klar: Ankern auf
      Posidonia-Wiesen, sensible Buchten und Schutzgebiete werden mittelfristig wichtiger.
    </p>
    <p>
      Gerade in beliebten Revieren wie den Kykladen kann es künftig mehr ausgewiesene
      Bojenfelder, lokale Einschränkungen oder genauere Regeln für bestimmte Buchten geben.
      Das ist nicht negativ, wenn es gut vorbereitet wird. Für Charterkunden bedeutet es
      vor allem, dass aktuelle Karten, Revierführer und Hinweise der Charterbasis wichtiger
      werden.
    </p>

    <h2>Was sollte man vor dem Törn prüfen?</h2>
    <ul>
      <li>Liegt die geplante Route in oder nahe Natura-2000-Gebieten?</li>
      <li>Gibt es lokale Hinweise zu Posidonia-Wiesen oder geschützten Buchten?</li>
      <li>Sind in bestimmten Buchten bereits Bojenfelder geplant oder vorhanden?</li>
      <li>Sind Navigations-App und Seekarten aktuell?</li>
      <li>Gibt es Hinweise der Charterbasis zu Ankern, Schutzgebieten oder lokalen Kontrollen?</li>
      <li>Gibt es Alternativbuchten, falls freies Ankern vor Ort nicht sinnvoll oder erlaubt ist?</li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Für Griechenland-Törns 2026 ändert sich zunächst nichts Grundsätzliches. Die
        Entwicklung zeigt aber, dass Meeresschutz, Posidonia und Bojenfelder künftig stärker
        in die Törnplanung gehören – besonders in beliebten Inselrevieren.
      </p>
    </div>
  </div>
);

export const griechenlandMeeresschutzBuchtenAnkern2026: NewsItem = {
  content,
  slug: "griechenland-meeresschutz-buchten-ankern-2026",
  title: "Griechenland: Mehr Meeresschutz in Buchten und Inselrevieren geplant",
  excerpt:
    "Griechenland baut den Schutz sensibler Küsten- und Inselgebiete aus. Für Charterkunden ändern sich 2026 noch keine konkreten Ankerregeln, aber Posidonia-Wiesen, Natura-2000-Buchten und künftige Bojenfelder werden bei der Törnplanung wichtiger.",
  content_type: "basis_hinweis",
  region: "Griechenland / Ägäis / Kykladen / Dodekanes",
  country_or_area: "Griechenland",
  status: "angekuendigt",
  effective_from: "2026-01-01",
  published_at: "2026-05-04",
  updated_at: "2026-05-04",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name:
    "GreekCityTimes; Tovima.com; GreekReporter; KeepTalkingGreece",
  source_url: "",
  customer_impact:
    "Mittelfristig mehr Meeresschutz in der südlichen Ägäis. Posidonia-Wiesen und Natura-2000-Buchten werden relevanter. Für 2026 noch keine pauschalen neuen Ankerregeln.",
  action_advice:
    "Törnplanung auf Natura-2000-Gebiete und Posidonia-Flächen abstimmen. Aktuelle Seekarten und Charterbasis-Hinweise nutzen. Bojenfelder bevorzugen wo vorhanden.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "griechenland",
  canonical_topic_key: "griechenland_meeresschutz_buchten_ankern_2026",
  cta_text:
    "Wenn Sie einen Griechenland-Törn planen und unsicher sind, welche Buchten und Routen gut zu Ihrer Crew passen, prüfen wir das gerne gemeinsam mit Ihnen.",
};
