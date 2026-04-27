import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Das nächtliche Ankerverbot im La-Maddalena-Nationalpark fällt weg. Bisher galt
      in den Schutzzonen des Nationalparks von Sonnenuntergang bis Sonnenaufgang ein
      striktes Ankerverbot. Die neue Verordnung 33/2026, die am 2. Juni 2026 in Kraft
      tritt, enthält diese Regelung nicht mehr. Zunächst auf zwei Jahre befristet, dürfen
      Segelboote und Yachten damit künftig wieder auf Anker übernachten – eine Rückkehr
      zu dem, was viele Segler noch aus früheren Saisons kennen.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      La Maddalena und die umliegenden Inseln – Spargi, Budelli mit dem berühmten Rosa
      Strand, Santa Maria, Razzoli – gehören zu den schönsten Ankerplätzen des
      Mittelmeers. Die Möglichkeit, dort wieder ruhige Ankernächte zu verbringen, macht
      Charter in diesem Revier deutlich attraktiver als in den letzten Jahren.
    </p>
    <p>
      Allerdings bleiben einige Regeln unverändert oder werden ab 2. Juni 2026 neu
      präzisiert:
    </p>
    <ul>
      <li>
        <strong>Das Permit bleibt Pflicht.</strong> Auch für die reine Durchfahrt durch
        den Nationalpark wird weiterhin ein Nationalparkpermit benötigt. Wer es online im
        Voraus kauft, bekommt 5&nbsp;% Rabatt. Segelboote zahlen generell 40&nbsp;%
        weniger als Motorboote.
      </li>
      <li>
        <strong>Ankern nur auf Sand oder Fels</strong> – nie über Posidonia-Seegras. Das
        ist keine neue Regel, wird aber aktiv kontrolliert. Posidonia ist geschützt und
        ökologisch wichtig; Verstöße können empfindliche Strafen nach sich ziehen.
      </li>
      <li>
        <strong>Schwimmen vom Boot aus</strong> ist ab Inkrafttreten der Verordnung am
        2. Juni 2026 nur noch in einem Umkreis von 5 Metern um das eigene Schiff
        erlaubt. Diese neue Einschränkung gilt für alle Boote im Nationalpark.
      </li>
    </ul>
    <p>
      Die Charterbasis informiert in der Regel über aktuelle Revierhinweise. Dennoch
      lohnt es sich, das Permit schon vor dem Törn online zu bestellen und die aktuelle
      Verordnung kurz zu überprüfen, da sich Details bis Saisonbeginn noch ändern können.
    </p>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>Permit für den La-Maddalena-Nationalpark frühzeitig online bestellen.</li>
      <li>
        Törnplanung auf Sardinien für Sommer 2026 anpassen – Übernachtungsanker in
        La Maddalena sind ab 2. Juni 2026 wieder möglich.
      </li>
      <li>
        Navigations-App und Seekarte aktuell halten, um Posidonia-Gebiete zu meiden.
      </li>
      <li>
        Charterbasis vor dem Törn nach aktuellen Revierhinweisen fragen, da die
        Verordnung erst ab 2. Juni 2026 gilt und lokale Auslegungen variieren können.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Das Nachtankerverbot im La-Maddalena-Nationalpark entfällt ab 2. Juni 2026.
        Permit bleibt Pflicht, Posidonia bleibt tabu, Schwimmen gilt ab Verordnungsbeginn
        nur noch 5&nbsp;m ums Boot. Wer sorgfältig plant, hat wieder Zugang zu einem der
        schönsten Ankerreviere des Mittelmeers.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quelle: YACHT.de. Redaktionsstand: 24. April 2026. Alle Angaben ohne Gewähr –
      bitte vor dem Törn aktuelle offizielle Quellen und die Informationen des
      Nationalparks prüfen, da die Verordnung erst ab 2. Juni 2026 gilt und lokale
      Anwendungen variieren können.
    </p>
  </div>
);

export const sardinienLaMaddalenaNachtankerverbot2026: NewsItem = {
  content,
  slug: "sardinien-la-maddalena-nachtankerverbot-2026",
  title: "Sardinien: Nachtankerverbot im La-Maddalena-Nationalpark fällt weg",
  excerpt:
    "Ab dem 2. Juni 2026 dürfen Segelboote im La-Maddalena-Nationalpark wieder über Nacht ankern. Das bisherige Nachtankerverbot entfällt. Das Permit bleibt Pflicht – neu ist eine 5-Meter-Schwimmregel um das Boot.",
  content_type: "basis_hinweis",
  region: "Sardinien / La Maddalena",
  country_or_area: "Italien",
  status: "angekuendigt",
  effective_from: "2026-06-02",
  published_at: "2026-04-24",
  updated_at: "2026-04-24",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name: "YACHT.de",
  source_url: "https://www.yacht.de",
  customer_impact:
    "Übernachten auf Anker im La-Maddalena-Nationalpark ist ab 2. Juni 2026 wieder erlaubt. Permit bleibt Pflicht. Ankern nur auf Sand/Fels – nicht über Posidonia. Schwimmen ab Verordnungsbeginn nur 5 m ums Boot.",
  action_advice:
    "Nationalparkpermit online vorbestellen (5 % Rabatt). Törnplanung anpassen. Charterbasis nach aktuellen Hinweisen fragen. Posidonia-Zonen in Seekarte markieren.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "sardinien_la_maddalena_ankern_nationalpark_2026",
  seo_title:
    "Sardinien La Maddalena 2026: Nachtankerverbot fällt weg – was Charterkunden wissen müssen",
  meta_description:
    "Nachtankerverbot im La-Maddalena-Nationalpark fällt ab 2. Juni 2026. Permit bleibt Pflicht, Posidonia weiter tabu. Alle wichtigen Infos für Charterkunden.",
  is_featured: true,
};
