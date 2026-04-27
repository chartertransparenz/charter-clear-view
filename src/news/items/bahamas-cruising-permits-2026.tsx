import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Was ist neu?</h2>
    <p>
      Wer mit einem Boot – eigenes Schiff oder Charter – in die Bahamas fährt, brauchte
      bisher ein Jahres-Cruising-Permit, selbst wenn der Aufenthalt nur wenige Wochen
      dauerte. Das hatte seinen Preis: Für eine Segelyacht bis 100 Fuß (ca. 30 Meter)
      lagen die Kosten bisher bei mindestens USD 1.000 für die Jahresversion.
    </p>
    <p>
      Seit dem 1. April 2026 gibt es zwei neue Optionen:
    </p>
    <ul>
      <li>
        <strong>30-Tage-Permit:</strong> USD 350 für Segelyachten bis 100 Fuß. Gut
        geeignet für einen typischen Karibik-Charter-Urlaub.
      </li>
      <li>
        <strong>6-Monats-Permit:</strong> Für längere Aufenthalte oder Blauwassersegler,
        die mehrere Wochen in den Bahamas verbringen.
      </li>
      <li>
        <strong>Jahres-Permit:</strong> Bleibt unverändert für alle, die dauerhaft oder
        saisonweise in bahamaischen Gewässern unterwegs sind.
      </li>
    </ul>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für alle, die einen kurzen Karibik-Charter mit Bahamas-Stopps planen, ist das
      30-Tage-Permit eine deutliche Erleichterung. Die Kalkulation wird ehrlicher:
      Man zahlt für die Zeit, die man tatsächlich dort verbringt – und nicht
      pauschal für ein ganzes Jahr.
    </p>
    <p>
      Praktisch bedeutet das für einen typischen zweiwöchigen Charter-Törn in der
      Karibik mit Bahamas-Etappe: Statt bisher USD 1.000+ reichen jetzt USD 350 für
      das Permit. Die Ersparnis ist real und relevant, gerade bei Charter-Paketen, bei
      denen die Nebenkosten schnell summieren.
    </p>
    <p>
      Das Permit wird online über die offizielle Plattform der bahamaischen
      Regierung gebucht und bezahlt. Es sollte vor dem Einlaufen in bahamaische
      Gewässer vorliegen.
    </p>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Für Karibik-Törns 2026/2027 mit Bahamas-Stopps: Permit-Kosten mit dem
        neuen 30-Tage-Tarif kalkulieren.
      </li>
      <li>
        Permit online vor dem Törn beantragen – offizielle Plattform der
        bahamaischen Regierung nutzen.
      </li>
      <li>
        Charterbasis oder -veranstalter fragen, ob das Permit im Paket enthalten
        ist oder separat beantragt werden muss.
      </li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Neue Kurzzeit-Permits für die Bahamas ab 1. April 2026: 30 Tage für
        USD 350 statt bisher Jahrespaket ab USD 1.000. Gute Nachricht für
        Karibik-Charter mit Bahamas-Stopps.
      </p>
    </div>

    <h2>Quelle und Stand</h2>
    <p>
      Quellen: Southern Boating, The Triton. Redaktionsstand: 24. April 2026.
      Alle Angaben ohne Gewähr – Permit-Tarife können sich ändern. Bitte vor
      dem Törn die aktuelle offizielle Bahamas-Plattform prüfen.
    </p>
  </div>
);

export const bahamasCruisingPermits2026: NewsItem = {
  content,
  slug: "bahamas-cruising-permits-2026",
  title: "Bahamas: Neue 30-Tage- und 6-Monats-Cruising-Permits ab April 2026",
  excerpt:
    "Seit 1. April 2026 gibt es für die Bahamas neue Kurzzeit-Permits: 30 Tage für USD 350 statt bisher Jahrespaket ab USD 1.000. Relevante Kostenersparnis für Karibik-Charter mit Bahamas-Stopps.",
  content_type: "basis_hinweis",
  region: "Bahamas / Karibik",
  country_or_area: "Bahamas",
  status: "in_kraft",
  effective_from: "2026-04-01",
  published_at: "2026-04-24",
  updated_at: "2026-04-24",
  priority: "mittel",
  category: "Gebühren & Permit-Kosten",
  source_name: "Southern Boating / The Triton",
  source_url: "https://www.southernboating.com",
  customer_impact:
    "30-Tage-Permit für Segelyachten bis 100 Fuß: USD 350 (vorher Jahrespaket ab USD 1.000). Deutliche Kostenersparnis für Kurztörns in den Bahamas.",
  action_advice:
    "Permit online vorbestellen. Charterbasis fragen ob inklusive. 30-Tage-Tarif in Karibik-Charter-Kalkulation einplanen.",
  show_on_blog: false,
  show_on_region_page: true,
  linked_region_slug: "bahamas",
  canonical_topic_key: "bahamas_cruising_permits_30_tage_2026",
  seo_title:
    "Bahamas Cruising Permit 2026: Neue 30-Tage-Option ab USD 350",
  meta_description:
    "Neue Bahamas Cruising Permits ab 1. April 2026: 30-Tage für USD 350, 6-Monate als neue Option. Was Karibik-Charterkunden jetzt wissen sollten.",
};
