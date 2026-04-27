import type { NewsItem } from "../types";

const content = (
  <div>
    <h2>Einordnung</h2>
    <p>
      Montenegro liegt für viele Adriatörns strategisch günstig: südlich von Kroatien,
      nördlich von Albanien und auf manchen Routen Richtung Griechenland. Neben der Bucht
      von Kotor und modernen Marinas ist für Yachten auch das Thema Kraftstoff
      interessant.
    </p>
    <p>
      Duty-Free-Diesel kann den Tankstopp in Montenegro attraktiv machen. Entscheidend
      ist aber immer, ob die eigene Route, die Charterbedingungen und die lokalen
      Formalitäten dazu passen. Ein günstiger Kraftstoffpreis allein sollte nie der
      einzige Grund für eine Routenentscheidung sein.
    </p>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Für Crews, die ohnehin in Richtung Montenegro oder weiter nach Süden unterwegs
      sind, kann ein Tankstopp sinnvoll sein. Je nach Yachtgröße und Tankvolumen kann
      die Ersparnis spürbar sein. Gleichzeitig müssen Ein- und Ausklarieren, mögliche
      Permit- oder Vignettenpflichten und die Vorgaben der Charterbasis berücksichtigt
      werden.
    </p>
    <p>
      Nicht jede Charteryacht darf ohne Weiteres jedes Land anlaufen. Deshalb sollte
      vorab geklärt werden, ob Montenegro im Chartervertrag erlaubt ist, welche Dokumente
      benötigt werden und ob die Route zeitlich realistisch bleibt.
    </p>

    <h2>Was sollte man vor dem Törn prüfen?</h2>
    <p>Vor einem Tankstopp in Montenegro sollte man klären:</p>
    <ul>
      <li>Darf die Charteryacht laut Vertrag Montenegro anlaufen?</li>
      <li>Welche Formalitäten gelten beim Ein- und Ausklarieren?</li>
      <li>Wird ein Cruising Permit oder eine Vignette benötigt?</li>
      <li>Welche Marinas oder Häfen bieten Duty-Free-Kraftstoff an?</li>
      <li>Lohnt sich der Umweg im Verhältnis zur geplanten Route?</li>
      <li>Gibt es Vorgaben der Charterbasis zur Rückgabe mit vollem Tank?</li>
    </ul>

    <div className="my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
        Kurz gesagt
      </p>
      <p className="text-gray-700 leading-relaxed">
        Montenegro kann ein sinnvoller Tank- und Zwischenstopp sein, wenn die Route
        ohnehin passt. Die Entscheidung sollte aber immer zusammen mit Charterbasis,
        Route und Formalitäten betrachtet werden.
      </p>
    </div>
  </div>
);

export const montenegroDutyFreeDieselOhneMindestaufenthalt: NewsItem = {
  content,
  slug: "montenegro-duty-free-diesel-ohne-mindestaufenthalt",
  title: "Montenegro als Tankstopp: Duty-Free-Diesel ohne Mindestaufenthalt",
  excerpt:
    "Montenegro kann auf Adria-Routen ein interessanter Zwischenstopp sein. Besonders für Crews auf längeren Törns kann Duty-Free-Diesel ein praktischer Kostenfaktor sein – sofern Route, Formalitäten und Charterbedingungen passen.",
  content_type: "basis_hinweis",
  region: "Montenegro",
  country_or_area: "Montenegro",
  status: "in_kraft",
  effective_from: "2026-01-01",
  published_at: "2026-04-20",
  updated_at: "2026-04-20",
  priority: "mittel",
  category: "Gebühren & Permit-Kosten",
  source_name: "Charter-Community / Marinas Montenegro",
  source_url: "",
  customer_impact:
    "Charterkunden auf Adriatörns können in Montenegro günstig tanken. Voraussetzung: Charterschein muss Montenegro erlauben, Einklarierung ist erforderlich.",
  action_advice:
    "Charterschein auf Erlaubnis prüfen, Marina vorab kontaktieren, Pässe für alle Crew-Mitglieder mitführen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "montenegro",
  canonical_topic_key: "montenegro_duty_free_diesel_2026",
  seo_title:
    "Montenegro Tankstopp: Duty-Free-Diesel für Charteryachten – Was gilt 2026?",
  meta_description:
    "Günstig tanken in Montenegro: Was Charterkunden über Duty-Free-Diesel, Einklarierung und Vignettenpflicht wissen sollten.",
  cta_text:
    "Wenn Montenegro Teil Ihrer Adria-Route werden soll, prüfen wir gerne, ob das zur Yacht, Route und Charterbasis passt.",
};
