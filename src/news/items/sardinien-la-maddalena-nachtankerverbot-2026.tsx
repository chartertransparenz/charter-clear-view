import type { NewsItem } from "../types";

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
        <strong>Aktualisiert: 29. Mai 2026.</strong> Rettungskorridore ergänzt,
        probeweise Geltung für 2026 präzisiert.
      </p>
      <p style={{ color: "#1a4a7a", fontSize: "0.85rem", margin: "6px 0 0 0" }}>
        <em>Frühere Aktualisierung (15. Mai 2026):</em> Inkrafttreten auf 1. Juni 2026
        korrigiert. 5-Meter-Baderegel und Nachtankern-Thema fachlich präzisiert.
      </p>
    </div>

    <h2>Was tritt wann in Kraft?</h2>
    <p>
      Die Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena tritt am{" "}
      <strong>1. Juni 2026</strong> in Kraft. Die Verordnung präzisiert die geltenden
      Regeln für das Revier rund um La Maddalena und den{" "}
      <a href="/reviere/mittelmeer/italien/sardinien">Nationalpark Sardinien</a> – und
      macht damit die Planung für Charterkunden konkreter. Die Regelungen gelten zunächst
      probeweise für die Saison 2026; eine Überprüfung für 2027 ist vorgesehen.
    </p>

    <h2>Was ändert sich – und was nicht?</h2>
    <p>
      Das zuvor diskutierte generelle Nachtankerverbot wird in der Ordinanza 33/2026 nicht
      erneut pauschal ausgesprochen. Maßgeblich bleiben die jeweils geltenden Zonen,
      Ankerverbote, Parkvorgaben und sonstigen Schutzregeln des Nationalparks.
    </p>
    <p>
      Das bedeutet: Ankerübernachtungen im Revier sind nicht pauschal verboten. Wo, wann
      und unter welchen Bedingungen Übernachten auf Anker möglich ist, ergibt sich aus den
      jeweils gültigen Zonenkarten, Bojenfeldern und lokalen Schutzgebietsvorgaben.
    </p>
    <p>
      La Maddalena und die umliegenden Inseln – Spargi, Budelli mit dem berühmten Rosa
      Strand, Santa Maria, Razzoli – gehören zu den schönsten Ankerplätzen des Mittelmeers.
      Wer die Regeln kennt und die aktuellen Zonen vor dem Törn prüft, segelt entspannter.
    </p>
    <p>
      Einige Regeln bleiben unverändert oder werden ab 1. Juni 2026 konkretisiert:
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
        ökologisch wichtig.
      </li>
      <li>
        <strong>5-Meter-Baderegel für Bojenlieger:</strong> Bei ordnungsgemäß an einer
        Boje festgemachten Booten ist Baden in unmittelbarer Nähe des eigenen Bootes bis
        zu einem maximalen Radius von 5 Metern erlaubt. Diese Regelung betrifft Boote, die
        regulär an einer Nationalpark-Boje liegen.
      </li>
      <li>
        <strong>Rettungskorridore freihalten.</strong> Zufahrtswege für Rettungsfahrzeuge
        und Nationalparkwächter müssen jederzeit ungehindert passierbar bleiben. Beim
        Festmachen darauf achten, keine Durchfahrten zu blockieren.
      </li>
      <li>
        <strong>Sanktionen bei Verstößen.</strong> Verstöße gegen die Vorgaben der
        Verordnung können sanktioniert werden. Bitte aktuelle offizielle Nationalpark- und
        Küstenwachhinweise beachten.
      </li>
    </ul>

    <h2>Was müssen Chartercrews jetzt prüfen?</h2>
    <ul>
      <li>
        Permit für den La-Maddalena-Nationalpark frühzeitig online bestellen –
        Frühbucherrabatt von 5&nbsp;% nutzen.
      </li>
      <li>
        Aktuelle Zonenkarten, Bojenfelder und Ankerverbotszonen vor dem Törn prüfen. Die
        geltenden Schutzgebiete bestimmen, wo Übernachten auf Anker möglich ist.
      </li>
      <li>
        Navigations-App und Seekarte aktuell halten, um Posidonia-Gebiete und Schutzzonen
        zu erkennen und zu meiden.
      </li>
      <li>
        Charterbasis vor dem Törn nach aktuellen Revierhinweisen fragen – lokale
        Auslegungen und Kontrollen können variieren.
      </li>
    </ul>

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
        Sie planen einen Sardinien-Törn rund um La Maddalena?
      </p>
      <p style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}>
        Wir helfen Ihnen, Revier, Route und Yacht passend zu Ihrer Crew zu planen – damit
        besondere Reviere nicht nur schön, sondern auch gut vorbereitet sind.
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
        Sardinien-Törn persönlich anfragen
      </a>
    </div>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die Ordinanza 33/2026 tritt am 1. Juni 2026 in Kraft – probeweise für Saison 2026.
        Kein pauschales Nachtankerverbot – maßgeblich bleiben die geltenden Zonenkarten und
        Schutzregelungen. Permit bleibt Pflicht, Posidonia bleibt tabu.
        5-Meter-Baderegel gilt für Bojenlieger. Rettungskorridore freihalten.
        Verstöße können sanktioniert werden.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena; YACHT.de.
      Redaktionsstand: 29. Mai 2026. Alle Angaben ohne Gewähr – bitte vor dem Törn
      aktuelle offizielle Quellen, die Informationen der Capitaneria und des Nationalparks
      prüfen, da lokale Auslegungen variieren können.
    </p>
  </div>
);

export const sardinienLaMaddalenaNachtankerverbot2026: NewsItem = {
  content,
  slug: "sardinien-la-maddalena-nachtankerverbot-2026",
  title: "Sardinien: Neue Parkregeln für La Maddalena ab 1. Juni 2026",
  excerpt:
    "Die Ordinanza 33/2026 der Capitaneria di Porto di La Maddalena tritt am 1. Juni 2026 in Kraft – probeweise für Saison 2026. Kein pauschales Nachtankerverbot – Zonenkarten und Schutzregelungen maßgeblich. Permit Pflicht, 5-Meter-Baderegel für Bojenlieger, Rettungskorridore freihalten.",
  content_type: "basis_hinweis",
  region: "Sardinien / La Maddalena",
  country_or_area: "Italien",
  status: "angekuendigt",
  effective_from: "2026-06-01",
  published_at: "2026-04-24",
  updated_at: "2026-05-29",
  priority: "hoch",
  category: "Ankern & Bojen",
  source_name: "Capitaneria di Porto di La Maddalena; YACHT.de",
  source_url: "https://www.yacht.de",
  customer_impact:
    "Ordinanza 33/2026 tritt am 1. Juni 2026 in Kraft – probeweise für Saison 2026. Kein pauschales Nachtankerverbot – geltende Zonen und Schutzregelungen beachten. Permit bleibt Pflicht. 5-Meter-Baderegel für Bojenlieger. Rettungskorridore freihalten. Verstöße können sanktioniert werden.",
  action_advice:
    "Nationalparkpermit online vorbestellen (5 % Rabatt). Aktuelle Zonenkarten und Bojenfelder prüfen. Charterbasis nach aktuellen Revierhinweisen fragen. Posidonia-Zonen in Seekarte markieren.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "sardinien_la_maddalena_ankern_nationalpark_2026",
  seo_title:
    "Sardinien La Maddalena 2026: Neue Parkregeln ab 1. Juni – was Charterkunden wissen müssen",
  meta_description:
    "Ordinanza 33/2026 für La Maddalena tritt am 1. Juni 2026 in Kraft. Kein pauschales Nachtankerverbot – Permit bleibt Pflicht, 5-Meter-Baderegel für Bojenlieger, Zonenkarten prüfen.",
  is_featured: true,
};
