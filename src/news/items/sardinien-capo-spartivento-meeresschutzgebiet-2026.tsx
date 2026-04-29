import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Südwestsardinien ist für viele Crews ein besonders reizvoller Teil des Reviers: klare
      Buchten, landschaftlich schöne Küstenabschnitte und attraktive Etappen zwischen
      Cagliari, Chia, Capo Spartivento und Teulada. Zur Saison 2026 bekommt dieser
      Abschnitt aber mehr Gewicht in der Törnplanung: Das Meeresschutzgebiet Capo
      Spartivento ist nun mit aktiven Zonenregeln und Kontrollen relevant.
    </p>
    <p>
      Für Charterkunden bedeutet das nicht, dass das Revier unattraktiver wird. Es bedeutet
      vor allem, dass Ankern und Buchtenwahl bewusster geplant werden sollten. Wer die
      Zonierung kennt und Posidonia-Flächen meidet, kann die Region weiterhin gut in den
      Törn einbauen.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Das Meeresschutzgebiet Capo Spartivento umfasst den Küstenabschnitt im Südwesten
      Sardiniens zwischen Chia und dem Kap Capo Spartivento. Für die Saison 2026 sind die
      Regeln und Kontrollen laut internem Report erstmals wirklich aktiv.
    </p>
    <p>
      Besonders wichtig sind die unterschiedlichen Schutzbereiche. In streng geschützten
      Zonen ist Durchfahrt oder Ankern nicht erlaubt. In anderen Bereichen kann die
      Durchfahrt nur in bestimmten Korridoren erlaubt sein. In weniger strengen Zonen ist
      Ankern grundsätzlich eher dort vorgesehen, wo Sandgrund oder Bojenfelder vorhanden
      sind. Posidonia-Wiesen sollten unbedingt gemieden werden.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Wer von Cagliari aus Richtung Chia, Capo Spartivento oder Teulada plant, sollte die
      Etappen nicht nur nach Wind, Entfernung und schönen Buchten auswählen. Entscheidend
      ist auch, ob der geplante Ankerplatz in einer erlaubten Zone liegt.
    </p>
    <p>
      Für Chartercrews heißt das: Nicht jede Bucht, die früher als spontaner Ankerplatz
      infrage kam, ist automatisch weiterhin geeignet. Bojenfelder, Sandflächen und lokale
      Hinweise sollten bei der Planung Vorrang haben. Besonders in der Hochsaison kann es
      sinnvoll sein, Alternativen einzuplanen, falls ein Ankerplatz wegen Schutzregeln,
      Bojenbelegung oder Kontrollen nicht passt.
    </p>

    <h2>Was sollte man vor dem Törn prüfen?</h2>
    <ul>
      <li>Liegt die geplante Route im Bereich Chia, Capo Spartivento oder Teulada?</li>
      <li>Gibt es aktuelle Karten oder Hinweise zur Zonierung des Meeresschutzgebiets?</li>
      <li>Welche Bereiche sind für Durchfahrt, Ankern oder Bojen vorgesehen?</li>
      <li>Gibt es Bojenfelder, die reserviert oder bezahlt werden müssen?</li>
      <li>Sind Posidonia-Flächen in der Navigations-App oder im Revierführer erkennbar?</li>
      <li>Hat die Charterbasis aktuelle lokale Hinweise für Südwestsardinien?</li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Capo Spartivento bleibt ein attraktiver Abschnitt für Sardinien-Törns. Für
        Charterkunden wird die Vorbereitung aber wichtiger: Wer Schutzbereiche, Bojenfelder
        und Posidonia-Flächen berücksichtigt, plant entspannter und vermeidet Probleme
        vor Ort.
      </p>
    </div>
  </div>
);

export const sardinienCapoSpartiventoMeeresschutzgebiet2026: NewsItem = {
  content,
  slug: "sardinien-capo-spartivento-meeresschutzgebiet-2026",
  title: "Sardinien 2026: Neues Meeresschutzgebiet Capo Spartivento aktiv",
  excerpt:
    "An der Südwestküste Sardiniens gelten zur Saison 2026 neue Regeln im Meeresschutzgebiet Capo Spartivento. Für Chartercrews sind vor allem Zonierung, Ankerverbote und der Schutz von Posidonia-Wiesen wichtig.",
  content_type: "basis_hinweis",
  region: "Italien / Sardinien / Capo Spartivento",
  country_or_area: "Italien / Sardinien",
  status: "in_kraft",
  effective_from: "2026-04-01",
  published_at: "2026-04-29",
  updated_at: "2026-04-29",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name: "barcheamotore.com; auch berichtet von Unica Radio und L'Unione Sarda",
  source_url: "",
  customer_impact:
    "Neue Zonenregeln und Kontrollen im Meeresschutzgebiet Capo Spartivento ab Saison 2026. Nicht jede Bucht eignet sich noch als Ankerplatz. Posidonia-Flächen müssen gemieden werden.",
  action_advice:
    "Törnplanung im Südwesten Sardiniens auf Zonierung des Schutzgebiets abstimmen. Bojenfelder und Sandflächen bevorzugen. Charterbasis nach aktuellen lokalen Hinweisen fragen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "sardinien_capo_spartivento_meeresschutzgebiet_2026",
  cta_text:
    "Wenn Sie einen Sardinien-Törn ab Cagliari oder entlang der Südküste planen, prüfen wir gerne mit Ihnen, welche Etappen und Ankerplätze sinnvoll sind.",
  image: "/yachtcharter-costa-smeralda.jpg",
  imageAlt: "Yachtcharter an der Küste Sardiniens mit türkisblauem Wasser",
  imageCaption:
    "Sardiniens Südwestküste rund um Chia und Capo Spartivento: ein reizvolles Revier, in dem Schutzbereiche und Ankerregeln zur Saison 2026 wichtiger werden.",
};
