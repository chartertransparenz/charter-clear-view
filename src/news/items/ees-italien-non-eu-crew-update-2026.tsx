import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Das EU-Einreisesystem EES (Entry/Exit System) ist seit dem 10. April 2026 in
      Betrieb. Passfotos und biometrische Daten ersetzen den bisherigen Passstempel.
      Ein- und Ausreisen aller Nicht-EU- und Nicht-Schengen-Bürger werden digital
      erfasst. Betroffen sind unter anderem Briten, US-Bürger, Kanadier, Australier
      und alle anderen Drittstaatsangehörigen, die nicht der EU oder dem Schengen-Raum
      angehören, aber visumfrei einreisen dürfen.
    </p>
    <p>
      Die neue Entwicklung: In <strong>Italien</strong> wird das System offenbar strenger
      ausgelegt als in anderen EU-Ländern. Berichten zufolge verlangen italienische
      Behörden, dass Crewmitglieder ohne EU-Pass nach spätestens 10 Tagen in
      italienischen Gewässern offiziell ausgecheckt werden. Ob das auch normale
      Chartergäste betrifft oder primär bezahlte Crew, ist noch nicht abschließend
      geklärt.
    </p>
    <p>
      Den Hintergründen und der allgemeinen EES-Situation widmet sich der{" "}
      <a href="/news/neue-eu-grenzregeln-non-eu-crew-yachtcharter">
        Basis-Hinweis zu EU-Grenzregeln und Non-EU-Crew
      </a>
      . Dieser Beitrag konzentriert sich auf die konkrete Situation in Italien.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für Crews, die ausschließlich EU- oder Schengen-Staatsangehörige an Bord haben,
      ändert sich praktisch nichts. Relevant wird der Punkt, sobald Crewmitglieder aus
      Großbritannien, den USA, Australien oder anderen Drittstaaten mitfahren.
    </p>
    <p>
      Für diese Personen gilt weiterhin das Schengen-90-Tage-Fenster. Neu ist die
      striktere Auslegung in Italien: Wer mehrere Wochen auf einer Charteryacht in
      italienischen Gewässern verbringt, sollte vorab klären, ob und wie das
      Entry/Exit-System hier praktisch angewendet wird. Charterbüros und Marinas
      direkt ansprechen – die Lage ist noch im Fluss.
    </p>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Pässe und Staatsangehörigkeiten aller Crewmitglieder vorab prüfen – sind
        Nicht-EU- und Nicht-Schengen-Bürger dabei?
      </li>
      <li>
        Bei langen Italien-Törns mit Non-EU-Crew: Charterbasis in Italien vorab
        kontaktieren und nach aktuellen Hinweisen zum EES fragen.
      </li>
      <li>
        Offizielle Ein- und Ausreisehäfen auf der Route identifizieren.
      </li>
      <li>
        EES-Status und aktuelle Handhabung kurz vor Reiseantritt nochmals recherchieren,
        da sich die Umsetzung noch entwickelt.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Hinweis – Lage noch unklar
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die genaue Anwendung des EES in Italien entwickelt sich noch. Für reine
        Urlaubsgäste (keine bezahlte Crew) dürfte das 90-Tage-Schengen-Fenster wie
        bisher gelten. Bei Unsicherheit: Charterbüros in Italien oder die zuständige
        Grenzbehörde direkt anfragen.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: YachtCharterFleet (EES für Charter), SuperYacht24. Redaktionsstand:
      24. April 2026. Alle Angaben ohne Gewähr – die Situation entwickelt sich.
      Bitte vor dem Törn aktuelle offizielle Quellen und die Charterbasis prüfen.
    </p>
  </div>
);

export const eesItalienNonEuCrewUpdate2026: NewsItem = {
  content,
  slug: "ees-italien-non-eu-crew-update-2026",
  title: "EES in Italien: Strengere Handhabung für Non-EU-Crew auf Charteryachten",
  excerpt:
    "Seit 10. April 2026 ist das EU-Einreisesystem EES aktiv. Italien legt es offenbar strenger aus als andere Länder: Non-EU-Crew soll nach 10 Tagen in italienischen Gewässern offiziell auschecken. Was Charterkunden mit internationaler Crew jetzt wissen sollten.",
  content_type: "update",
  region: "Italien",
  country_or_area: "Italien",
  status: "in_kraft",
  effective_from: "2026-04-10",
  published_at: "2026-04-24",
  updated_at: "2026-04-24",
  priority: "hoch",
  category: "Einreise & Schengen",
  source_name: "YachtCharterFleet / SuperYacht24",
  source_url: "https://www.yachtcharterfleet.com",
  customer_impact:
    "Non-EU- und Nicht-Schengen-Crew auf Charteryachten in Italien muss möglicherweise nach 10 Tagen offiziell auschecken. Lage für reine Urlaubsgäste noch unklar.",
  action_advice:
    "Staatsangehörigkeiten aller Crew prüfen. Charterbasis in Italien vorab kontaktieren. Offizielle Ein-/Ausreisehäfen auf der Route identifizieren.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "italien",
  canonical_topic_key: "ees_italien_non_eu_crew_update_2026",
  related_base_slug: "neue-eu-grenzregeln-non-eu-crew-yachtcharter",
  is_update_of: "neue-eu-grenzregeln-non-eu-crew-yachtcharter",
  seo_title:
    "EES Italien 2026: Strengere Regeln für Non-EU-Crew auf Charteryachten",
  meta_description:
    "Italien wendet das EU-Einreisesystem EES strenger an: Non-EU-Crew muss nach 10 Tagen auschecken. Was das für Yachtcharter-Kunden mit internationaler Besatzung bedeutet.",
};
