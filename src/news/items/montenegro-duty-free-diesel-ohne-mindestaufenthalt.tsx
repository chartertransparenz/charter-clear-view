import type { NewsItem } from "../types";

const content = (
  <div>
    <p>
      Montenegro liegt zentral in der Adria und wird von vielen Charterkunden auf dem Weg
      von Kroatien in die Ionischen Inseln oder zurück als Zwischenstopp eingeplant. Ein
      konkreter Vorteil: Diesel ist in Montenegro deutlich günstiger als in Kroatien oder
      Griechenland, und unter bestimmten Bedingungen kann dieser Treibstoff steuerfrei
      (Duty-Free) gebunkert werden. Dieser Hinweis erklärt, wann das möglich ist und was
      Charterkunden dabei beachten müssen.
    </p>

    <h2>Was ist neu?</h2>
    <p>
      Früher war für den Duty-Free-Dieseleinkauf in Montenegro ein Mindestaufenthalt von
      72 Stunden Voraussetzung. Neuere Berichte aus der Charter-Community deuten darauf hin,
      dass dieser Mindestaufenthalt in der Praxis nicht mehr strikt durchgesetzt wird –
      allerdings ist die offizielle Regelungslage nicht vollständig einheitlich dokumentiert.
      Charterkunden sollten die aktuelle Situation direkt bei der Marina oder dem Bunkerlieferanten
      vor Ort klären.
    </p>
    <p>
      Was grundsätzlich gilt:
    </p>
    <ul>
      <li>
        <strong>Duty-Free-Diesel für ausländische Yachten:</strong> Montenegro ist kein
        EU-Mitglied. Ausländische Yachten können daher unter bestimmten Bedingungen
        steuerfreien Schiffsdiesel bunkern – ähnlich wie in anderen Nicht-EU-Adriastaaten.
      </li>
      <li>
        <strong>Cruising Permit / Vignette:</strong> Für das Einlaufen in montenegrinische
        Gewässer ist eine gültige Einklarierungsgenehmigung erforderlich. Das Verfahren
        läuft in der Regel über den Hafenkapitän des ersten angelaufenen Hafens (meist Bar
        oder Herceg Novi). Charterfirmen aus Kroatien klären das oft im Vorfeld.
      </li>
      <li>
        <strong>Günstige Kraftstoffpreise:</strong> Der Dieselpreis in Montenegro liegt
        saisonal teils deutlich unter dem Preisniveau in Kroatien und Griechenland.
        Genaue Preise schwanken – aktuell vor Ort erfragen.
      </li>
      <li>
        <strong>Beliebte Tankstopps:</strong> Die Marinas in Bar und Budva bieten
        Betankungsanleger für Freizeitfahrzeuge. Die Bucht von Kotor mit den Marinas
        Tivat und Kotor ist gut erreichbar und bietet eine spektakuläre Kulisse.
      </li>
    </ul>

    <h2>Was bedeutet das für Charterkunden?</h2>
    <p>
      Ein Tankstopp in Montenegro kann sich lohnen – besonders auf längeren Adriatörns,
      bei denen der Tank ohnehin aufgefüllt werden müsste. Die Bucht von Kotor ist
      außerdem eines der eindrucksvollsten Reiseziele der gesamten Adria, sodass der
      Umweg in die Regel kaum ein Umweg ist.
    </p>
    <p>
      Wer nur kurz einläuft, um zu tanken, sollte vorab klären:
    </p>
    <ul>
      <li>
        Ob die Marina Betankung ohne längeren Aufenthalt anbietet (das ist nicht überall
        selbstverständlich – telefonische Voranmeldung empfohlen).
      </li>
      <li>
        Ob das Einklarierungsverfahren für einen kurzen Aufenthalt vereinfacht möglich ist.
      </li>
      <li>
        Ob die Charteryacht für internationalen Gewässerverkehr freigegeben ist
        (steht im Charterschein – nicht alle Charteryachten dürfen nach Montenegro).
      </li>
    </ul>

    <h2>Was sollte man jetzt tun?</h2>
    <ul>
      <li>
        Charterschein prüfen: Sind internationale Gewässer (außerhalb Kroatiens) erlaubt?
      </li>
      <li>
        Charterfirma vorab informieren und ggf. Genehmigung einholen.
      </li>
      <li>
        Gewünschte Marina direkt anschreiben oder anrufen und nach aktuellem Dieselpreis
        und Einklarierungsverfahren fragen.
      </li>
      <li>
        Reisepass/ID für alle Crew-Mitglieder mitführen – Montenegro ist nicht Schengen.
      </li>
    </ul>

    <h2>Quelle und Stand</h2>
    <p>
      Informationen basieren auf Berichten aus der Charter-Community und allgemeinen
      Informationen zur Kraftstoffbesteuerung in Montenegro. Die Duty-Free-Regelung ist
      nicht offiziell auf einer staatlichen Website dokumentiert. Wir empfehlen, die
      aktuellen Konditionen direkt bei der Marina oder dem Vercharterer zu erfragen.
      Stand: Frühjahr 2026.
    </p>
    <p className="text-sm text-gray-500 mt-4 border-t border-gray-100 pt-4">
      Regeln können sich kurzfristig ändern. Prüfen Sie vor dem Törn immer die aktuellen
      Informationen direkt vor Ort.
    </p>
  </div>
);

export const montenegroDutyFreeDieselOhneMindestaufenthalt: NewsItem = {
  slug: "montenegro-duty-free-diesel-ohne-mindestaufenthalt",
  title: "Montenegro als Tankstopp: Duty-Free-Diesel ohne Mindestaufenthalt",
  excerpt:
    "Ein Tankstopp in Montenegro kann auf Adriatörns sinnvoll sein: Diesel ist günstiger als in Kroatien, und der frühere 72-Stunden-Mindestaufenthalt für Duty-Free-Treibstoff wird in der Praxis offenbar nicht mehr strikt durchgesetzt.",
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
  source_url: "https://mmpi.gov.hr",
  customer_impact:
    "Charterkunden auf Adriatörns können in Montenegro günstig tanken. Voraussetzung: Charterschein muss internationale Gewässer erlauben, Einklarierung ist erforderlich.",
  action_advice:
    "Charterschein auf internationale Erlaubnis prüfen, Marina vorab kontaktieren, Pässe für alle Crew-Mitglieder mitführen.",
  show_on_blog: true,
  show_on_region_page: true,
  linked_region_slug: "montenegro",
  canonical_topic_key: "montenegro_duty_free_diesel_2026",
  seo_title:
    "Montenegro Tankstopp: Duty-Free-Diesel für Charteryachten – Was gilt 2026?",
  meta_description:
    "Günstig tanken in Montenegro: Was Charterkunden über Duty-Free-Diesel, Einklarierung und den früheren 72-Stunden-Mindestaufenthalt wissen müssen.",
};
