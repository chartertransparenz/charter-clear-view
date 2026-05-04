import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Die Anreise ist für viele Kroatien-Törns ein wichtiger Teil der Planung. Besonders
      Crews, die im Kvarner starten – etwa rund um Krk, Rijeka, Rab oder Lošinj – sind auf
      passende Flugverbindungen angewiesen. Nachdem Lufthansa-Verbindungen nach Rijeka,
      Ljubljana und Tivat für 2026 gestrichen wurden, gibt es nun zumindest für einen Teil
      der Kunden eine neue Option.
    </p>
    <p>
      SWISS nimmt im Sommer 2026 eine direkte Verbindung von Zürich nach Rijeka in den
      Flugplan auf. Für Crews aus der Schweiz oder mit guter Anbindung an Zürich kann das
      die Anreise in den Kvarner erleichtern.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Für Juli und August 2026 ist eine direkte SWISS-Verbindung von Zürich nach Rijeka
      vorgesehen. Das ist besonders für Charterkunden interessant, die im nördlichen
      Kroatien starten oder deren Basis im Kvarner liegt.
    </p>
    <p>
      Die Verbindung ersetzt die gestrichenen Lufthansa-Routen nicht vollständig. Sie ist
      eher eine ergänzende Option für bestimmte Abflughäfen und Reisegruppen. Wer aus
      Deutschland oder Österreich anreist, muss weiterhin Alternativen wie Zadar, Split,
      Zagreb, Triest, Venedig oder Umsteigeverbindungen prüfen.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für Crews mit Start im Kvarner kann Rijeka ein sehr praktischer Zielflughafen sein.
      Die neue Verbindung kann Transfers verkürzen und die Anreise entspannter machen, wenn
      Flugzeiten und Charterbeginn gut zusammenpassen.
    </p>
    <p>
      Trotzdem sollte man nicht nur nach dem nächstgelegenen Flughafen entscheiden. Je nach
      Basis, Crewgröße, Gepäck, Transferkosten und Flugzeiten kann eine etwas weiter
      entfernte Alternative sinnvoller sein. Besonders bei Samstag-zu-Samstag-Charter ist
      der zeitliche Puffer wichtig.
    </p>

    <h2>Was sollte man jetzt prüfen?</h2>
    <ul>
      <li>Liegt die Charterbasis im Kvarner, auf Krk, Rab, Cres oder Lošinj?</li>
      <li>Passt Rijeka als Zielflughafen besser als Zadar, Split oder Zagreb?</li>
      <li>Gibt es passende Flugtage zu Charterbeginn und Charterende?</li>
      <li>Wie lange dauert der Transfer vom Flughafen zur Marina?</li>
      <li>Sind Gepäck, Crewgröße und Transferkosten berücksichtigt?</li>
      <li>Gibt es bei bestehenden Lufthansa-Buchungen Umbuchungs- oder Erstattungsoptionen?</li>
    </ul>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Die neue SWISS-Verbindung nach Rijeka ist eine hilfreiche Ergänzung für
        Kroatien-Törns im Kvarner. Sie löst nicht alle Anreiseprobleme, kann aber für
        Crews aus der Schweiz oder mit Umstieg über Zürich eine gute Option sein.
      </p>
    </div>
  </div>
);

export const kroatienAnreiseSwissRijeka2026: NewsItem = {
  content,
  slug: "kroatien-anreise-swiss-rijeka-2026",
  title: "Kroatien-Anreise 2026: SWISS fliegt neu nach Rijeka",
  excerpt:
    "Nach den gestrichenen Lufthansa-Verbindungen nach Rijeka gibt es für den Sommer 2026 eine neue Option: SWISS nimmt eine Direktverbindung von Zürich nach Rijeka auf. Für Charterkunden im Kvarner kann das die Anreise erleichtern.",
  content_type: "update",
  region: "Kroatien / Kvarner / Rijeka",
  country_or_area: "Kroatien",
  status: "angekuendigt",
  effective_from: "2026-07-01",
  published_at: "2026-05-04",
  updated_at: "2026-05-04",
  priority: "mittel",
  category: "Anreise & Logistik",
  source_name: "InsideFlyer DE; Lufthansa Group Newsroom",
  source_url: "",
  customer_impact:
    "Neue Direktverbindung Zürich–Rijeka mit SWISS im Sommer 2026. Kvarner-Crews haben eine zusätzliche Anreiseoption. Gestrichene Lufthansa-Verbindungen werden nicht vollständig ersetzt.",
  action_advice:
    "Flugoptionen nach Rijeka für Juli/August 2026 frühzeitig prüfen. Transferzeiten zur Charterbasis einplanen. Bestehende Lufthansa-Buchungen auf Umbuchmöglichkeiten prüfen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "kroatien",
  canonical_topic_key: "kroatien_anreise_swiss_rijeka_2026",
  // Kein related_base_slug: kein passendes Lufthansa/Reise-Basisitem vorhanden (nur Anker-Regeln-Item)
  cta_text:
    "Wenn Sie einen Kroatien-Törn planen, helfen wir gerne dabei, Charterbasis, Flughafen und Transfer sinnvoll aufeinander abzustimmen.",
};
