import type { BlogPost } from "../types";

const content = (
  <div>
    <p>
      Wer in Kroatien chartern möchte, trifft auf eines der schönsten und am
      besten ausgebauten Reviere Europas. Klares Wasser, gut kartierte Kanäle,
      hunderte Inseln – und ein Regelwerk, das in den letzten Jahren deutlich
      klarer geworden ist. Mit der Verordnung NN 52/2025 hat Kroatien seine
      Vorschriften für den Sportbootverkehr präzisiert und in Teilen verschärft.
      Was das für{" "}
      <a href="/reviere/mittelmeer/kroatien">Yachtcharter in Kroatien</a>{" "}
      konkret bedeutet, zeigt dieser Ratgeber.
    </p>
    <p>
      Viele der Regeln galten bereits zuvor. Neu ist vor allem die Klarheit:
      Küstenabstände sind jetzt präzise nach Bootslänge gestaffelt, die Tender-Regel
      ist eindeutig definiert, und die Behörden kontrollieren spürbar häufiger als
      früher. Wer die Adria kennt, wird wenig überrascht sein – wer zum ersten Mal
      in Kroatien chartern möchte, findet hier einen kompakten Überblick.
    </p>

    <div className="not-prose my-8 p-5 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
        Schneller Überblick – Die wichtigsten Regeln
      </p>
      <table className="w-full text-sm text-left border-collapse">
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700 w-1/2">Rettungswesten (offene Motorboote / RIBs &gt;20 kn)</td>
            <td className="py-2 text-gray-600">Pflicht für alle Personen an Deck</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">Quickstop auf schnellen offenen Booten</td>
            <td className="py-2 text-gray-600">Pflicht, muss mit Fahrer verbunden sein</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">Küstenabstand beim Fahren (&lt; 15 m LÜA)</td>
            <td className="py-2 text-gray-600">mindestens 50 m</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">Küstenabstand beim Fahren (15–30 m LÜA)</td>
            <td className="py-2 text-gray-600">mindestens 150 m</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">Küstenabstand beim Fahren (&gt; 30 m LÜA)</td>
            <td className="py-2 text-gray-600">mindestens 300 m</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">Tender ohne eigene Zulassung</td>
            <td className="py-2 text-gray-600">max. 500 m vom Mutterschiff</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-2 pr-4 font-medium text-gray-700">SUP, Kajak, E-Surfboard</td>
            <td className="py-2 text-gray-600">nur tagsüber, max. 300 m von der Küste</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-medium text-gray-700">Alkohol am Steuer</td>
            <td className="py-2 text-gray-600">max. 0,5 Promille</td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-3">
        Rechtsgrundlage: Pravilnik o sigurnosti pomorske plovidbe, NN 52/2025 (in Kraft seit März 2025)
      </p>
    </div>

    <h2 id="rettungswesten">Rettungswesten auf schnellen Booten – wann sie Pflicht sind</h2>
    <p>
      Auf offenen Motorbooten und Festrumpfschlauchbooten (RIBs), die
      bauartbedingt mehr als 20 Knoten erreichen können, müssen alle Personen
      an Deck eine Rettungsweste tragen. Ausgenommen sind nur Personen in einer
      geschlossenen Kabine.
    </p>
    <p>
      Für die meisten Charteryachten – Segelboote und Motoryachten mit Rumpfgeschwindigkeit
      – gilt diese Regel nicht direkt. Relevant wird sie aber, wenn an Bord ein schnelles
      Beiboot oder ein Charter-RIB als Transfermittel genutzt wird: Wer damit zum Strand
      fährt oder Gäste zu einem Restaurant bringt, ist auf einem Boot, für das die
      Westenpflicht gilt.
    </p>
    <p>
      Rettungswesten müssen für alle Personen an Bord vorhanden sein – das gilt auf
      Charteryachten bereits als Standardausrüstung. Die kroatischen Behörden können
      bei Kontrollen prüfen, ob die Westen zugänglich und gebrauchstauglich sind.
    </p>

    <figure className="not-prose my-8">
      <img
        src="/images/blog/kroatien-sicherheit/kroatien-rettungswesten-pflicht.jpg"
        alt="Frau am Steuer einer Segelyacht in kroatischen Gewässern – Sicherheitsausrüstung und Rettungswesten an Bord"
        className="w-full rounded-xl object-cover"
        style={{ maxHeight: "480px" }}
        loading="lazy"
      />
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Rettungswesten müssen auf Charteryachten für alle Personen erreichbar sein. Auf schnellen offenen Motorbooten gilt Tragepflicht.{" "}
        <span className="text-gray-400">© Shutterstock</span>
      </figcaption>
    </figure>

    <h2 id="quickstop">Quickstop – die einfachste Sicherheitsleine an Bord</h2>
    <p>
      Schnelle offene Motorboote und RIBs müssen mit einem Quickstop-System ausgerüstet
      sein. Das ist eine kurze Sicherheitsleine, die am Handgelenk des Bootsführers
      befestigt wird und den Motor automatisch stoppt, sobald der Fahrer seinen
      Platz verlässt oder über Bord geht.
    </p>
    <p>
      Das klingt simpel – und das ist es auch. Gerade deshalb wird der Quickstop
      im Alltag oft ignoriert. In Kroatien ist er auf geeigneten Booten
      vorgeschrieben, und die Behörden achten darauf. Wer das Beiboot der Charteryacht
      als Transfermittel nutzt: Quickstop anlegen, bevor es losgeht.
    </p>

    <h2 id="kuestenabstand">Küstenabstände beim Fahren – nach Bootslänge gestaffelt</h2>
    <p>
      Eine der praxisrelevantesten Neuerungen der SSVO betrifft die Mindestabstände
      zur Küste beim Fahren. Die Regel gilt im gesamten kroatischen Hoheitsgebiet –
      also sowohl in der Nähe besiedelter Küsten als auch vor einsamen Buchten.
    </p>

    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-ocean-dark text-white">
            <th className="py-3 px-4 text-left font-semibold">Bootslänge (LÜA)</th>
            <th className="py-3 px-4 text-left font-semibold">Mindestabstand zur Küste</th>
            <th className="py-3 px-4 text-left font-semibold">Typische Charteryacht</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 bg-white">
            <td className="py-3 px-4 text-gray-700">unter 15 m</td>
            <td className="py-3 px-4 font-medium text-gray-800">50 m</td>
            <td className="py-3 px-4 text-gray-600">kleinere Segelyachten, Daycharter</td>
          </tr>
          <tr className="border-b border-gray-200 bg-gray-50">
            <td className="py-3 px-4 text-gray-700">15 m bis 30 m</td>
            <td className="py-3 px-4 font-medium text-gray-800">150 m</td>
            <td className="py-3 px-4 text-gray-600">die meisten Bareboats, Katamarane</td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 text-gray-700">über 30 m</td>
            <td className="py-3 px-4 font-medium text-gray-800">300 m</td>
            <td className="py-3 px-4 text-gray-600">große Yachten, Gulets</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p>
      In der Praxis bedeutet das: Wer mit einer typischen Chartersegelyacht
      zwischen 10 und 14 Metern Länge unterwegs ist, hält beim Fahren mindestens
      50 Meter Abstand zur Küstenlinie. Das war bisher schon Usus in der Adria –
      jetzt ist es klar geregelt. Eine Charteryacht mit 15 bis 18 Metern sollte
      entsprechend 150 Meter Abstand einplanen, was bei der Buchtenwahl
      berücksichtigt werden sollte.
    </p>
    <p>
      Die Regel bezieht sich auf das <em>Fahren</em> entlang der Küste, nicht
      auf das Ankern. Wer ankern möchte, findet die dafür geltenden Abstände
      im{" "}
      <a href="/blog/neue-ankerregeln-kroatien-2026-70-meter-zone">
        Beitrag zu den Ankerregeln in Kroatien
      </a>
      . Beide Regeln gelten gleichzeitig und ergänzen sich.
    </p>

    <figure className="not-prose my-8">
      <img
        src="/images/blog/kroatien-sicherheit/kroatien-kuestenabstand-bucht.jpg"
        alt="Luftaufnahme einer kroatischen Bucht mit Booten – Mindestküstenabstände für Charteryachten in der Adria"
        className="w-full rounded-xl object-cover"
        style={{ maxHeight: "480px" }}
        loading="lazy"
      />
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Luftaufnahme einer kroatischen Bucht: Die Mindestabstände zur Küste beim Fahren richten sich nach der Bootslänge.{" "}
        <span className="text-gray-400">© Aerial-motion / Shutterstock</span>
      </figcaption>
    </figure>

    <h2 id="tender">Tender und Beiboot – was das Dinghy wirklich darf</h2>
    <p>
      Für das Beiboot einer Charteryacht gilt eine klare Einschränkung: Ein Tender, der
      nicht eigenständig registriert und versichert ist, darf sich maximal 500 Meter
      vom Mutterschiff entfernen.
    </p>
    <p>
      Ausgenommen sind Fahrten vom Ankerplatz zum nächstgelegenen Hafen, zum Restaurant
      oder zum Einkaufen. Das ist die alltagstaugliche Ausnahme: Wer mit dem Dinghy
      ans Ufer fährt, um Brot zu holen oder abends in einer Taverna zu essen, bewegt
      sich innerhalb des erlaubten Rahmens – sofern es sich um die nächstgelegene
      sinnvolle Anlegestelle handelt.
    </p>
    <p>
      Was nicht mehr erlaubt ist: den Tender als eigenständiges Tagesausflugboot zu
      nutzen, während die Yacht am Anker liegt. Wer das Beiboot für längere
      Ausflüge oder größere Distanzen nutzen möchte, benötigt eine eigene
      kroatische Vignette und Zulassung für das Tender. Die meisten Charterfirmen
      stellen Tender ohne eigenständige Zulassung – hier gilt die 500-Meter-Regel.
    </p>

    <figure className="not-prose my-8">
      <img
        src="/images/blog/kroatien-sicherheit/kroatien-tender-beiboot-yacht.jpg"
        alt="Aufblasbares Beiboot (Dinghy) auf türkisblauem Wasser – Tenderregeln in Kroatien"
        className="w-full rounded-xl object-cover"
        style={{ maxHeight: "480px" }}
        loading="lazy"
      />
      <figcaption className="mt-2 text-center text-sm text-gray-500">
        Das Beiboot darf sich ohne eigene Zulassung maximal 500 Meter vom Mutterschiff entfernen – Fahrten zur nächstgelegenen Anlegestelle sind ausgenommen.{" "}
        <span className="text-gray-400">© Shutterstock</span>
      </figcaption>
    </figure>

    <h2 id="sup-kajak">SUP, Kajak und elektrische Sportgeräte</h2>
    <p>
      Kroatien hat 2025 erstmals einen klaren rechtlichen Rahmen für sogenannte
      „persönliche Wasserfahrzeuge" geschaffen. Dazu gehören Kajaks, Kanus, SUP-Boards,
      Windsurfbretter, Kiteboard, elektrische Surfboards und Foilboards sowie
      Unterwasserscooter.
    </p>
    <p>
      Für all diese Geräte gilt: Sie dürfen grundsätzlich nur zwischen Sonnenaufgang
      und Sonnenuntergang genutzt werden und sich maximal 300 Meter von der Küste
      entfernen. Eine eigene Registrierungspflicht besteht nicht – das ist neu und
      klärt eine lange bestehende Rechtsunsicherheit.
    </p>
    <p>
      Für Chartercrews bedeutet das: Wer ein SUP-Board oder Kajak an Bord hat, sollte
      die Crew kurz briefen. Keine Nachtfahrten, keine weiten Ausfahrten aus der Bucht
      heraus. Innerhalb dieser Grenzen ist der Einsatz problemlos.
    </p>

    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, #0f3460 0%, #1a5276 100%)",
        borderRadius: "12px",
        padding: "28px 32px",
        margin: "2rem 0",
      }}
    >
      <p
        style={{
          color: "#ffffff",
          fontWeight: 700,
          marginBottom: "8px",
          fontSize: "1rem",
        }}
      >
        Kroatien-Törn planen – mit persönlicher Beratung
      </p>
      <p
        style={{ color: "#e8edf2", marginBottom: "20px", lineHeight: 1.6 }}
      >
        Welche Yacht passt zur Crewgröße? Welches Revier ist für Einsteiger oder
        erfahrene Familien besonders geeignet? Wir helfen Ihnen, Revier, Route
        und Yacht realistisch einzuordnen – und aktuelle Vorschriften vorab
        einzuplanen.
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
        Kroatien Charter anfragen
      </a>
    </div>

    <h2 id="bussgelder-kontrollen">Bußgelder und Kontrollen – realistisch einschätzen</h2>
    <p>
      Die kroatischen Behörden kontrollieren regelmäßig, vor allem in der
      Hauptsaison: Lučka kapetanija (Hafenkapitänäter), Küstenwache und Polizei
      sind auf der Adria präsent. Kontrolliert werden kroatische und ausländische
      Boote gleichermaßen.
    </p>
    <p>
      Bußgelder richten sich nach Art und Schwere des Verstoßes und können von
      mehreren hundert Euro bis in den vierstelligen Bereich gehen. In schweren
      Fällen kann die Weiterfahrt untersagt werden. Wer ohne Rettungsweste auf
      einem schnellen RIB unterwegs ist, den Tender weit außerhalb des erlaubten
      Bereichs nutzt oder einen Küstenabstand deutlich unterschreitet, muss damit
      rechnen, dass es teuer wird.
    </p>
    <p>
      Für die meisten Chartercrews gilt: Wer die Grundregeln kennt und einhält,
      hat nichts zu befürchten. Die kroatische Adria bleibt eines der
      entspanntesten Reviere Europas – solange man sich gut vorbereitet.
    </p>

    <h2 id="checkliste">Was Chartercrews vor dem Törn prüfen sollten</h2>
    <ul>
      <li>
        <strong>Rettungswesten prüfen:</strong> Für alle Personen an Bord vorhanden
        und zugänglich? Gültige FSR-Prüfplakette (bei aufblasbaren Westen)?
      </li>
      <li>
        <strong>Quickstop vorhanden:</strong> Liegt ein Quickstop-System für das
        Beiboot oder eventuell mitgecharterte RIBs bereit?
      </li>
      <li>
        <strong>Bootslänge kennen:</strong> LÜA der Charteryacht beim Eincheckgespräch
        notieren – daraus ergibt sich der geltende Küstenabstand beim Fahren.
      </li>
      <li>
        <strong>Tender-Nutzung klären:</strong> Ist das Beiboot eigenständig
        zugelassen? Falls nicht: 500-Meter-Regel einhalten.
      </li>
      <li>
        <strong>SUP/Kajak briefen:</strong> Crew kurz informieren: nur tagsüber,
        max. 300 Meter von der Küste.
      </li>
      <li>
        <strong>Ankerregeln separat prüfen:</strong> Für das Ankern in der Nähe
        der Küste gilt die{" "}
        <a href="/blog/neue-ankerregeln-kroatien-2026-70-meter-zone">
          70-Meter-Zone
        </a>{" "}
        – ein eigenes Thema, das sich lohnt, vorab zu lesen.
      </li>
      <li>
        <strong>Charterbasis fragen:</strong> Die Basis kennt aktuelle Revierhinweise,
        eventuelle Kontrollschwerpunkte und besondere Regelungen auf der geplanten
        Route.
      </li>
    </ul>

    <h2 id="fazit">Kroatien bleibt entspannt planbar</h2>
    <p>
      Das überarbeitete kroatische Regelwerk klingt auf den ersten Blick nach viel
      Bürokratie – tatsächlich ist es vor allem Klarheit. Wer bisher schon vernünftig
      unterwegs war, ändert wenig. Die meisten Regeln spiegeln das, was erfahrene
      Segler ohnehin tun: Abstand zur Küste halten, Westen griffbereit haben, das
      Beiboot nicht weit weg schicken.
    </p>
    <p>
      Was sich verändert hat, ist die Kontrolldichte. Und das ist kein Grund zur
      Sorge – sondern ein Grund, gut vorbereitet zu sein. Kroatien ist und bleibt
      eines der schönsten Charterreviere der Welt. Wer die Regeln kennt, genießt
      die Adria so unbeschwert wie eh und je.
    </p>
    <p>
      Noch offene Fragen zur Yachtwahl, zur richtigen Saison oder zu den Kosten
      eines Kroatien-Törns? Unsere{" "}
      <a href="/blog/kroatien-einsteiger">Einsteiger-Übersicht für Kroatien</a>{" "}
      und der{" "}
      <a href="/blog/was-kostet-ein-yachtcharter">Überblick zu Charterkosten</a>{" "}
      helfen weiter.
    </p>

    <div className="not-prose my-8 p-5 bg-ocean-light/20 rounded-lg border border-ocean-light/40">
      <p className="text-sm font-medium text-ocean-dark mb-1">
        Kroatien-Törn planen lassen
      </p>
      <p className="text-gray-700 leading-relaxed">
        Sie planen Ihren ersten oder nächsten Kroatien-Törn und möchten Revier,
        Yacht und Route realistisch einschätzen? Wir beraten persönlich – und
        helfen Ihnen, die passende{" "}
        <a href="/reviere/mittelmeer/kroatien">Charterbasis in Kroatien</a> zu
        finden.
      </p>
      <p className="mt-3">
        <a href="/charter-anfrage" className="text-ocean-dark font-medium hover:underline">
          Jetzt unverbindlich anfragen →
        </a>
      </p>
    </div>
  </div>
);

export const kroatienYachtcharterSicherheitsregeln: BlogPost = {
  slug: "kroatien-yachtcharter-sicherheitsregeln",
  title:
    "Kroatien Yachtcharter: Diese Sicherheitsregeln sollten Crews kennen",
  seoTitle:
    "Kroatien Yachtcharter: Sicherheitsregeln, Rettungswesten und Küstenabstände | CharterTransparenz",
  metaDescription:
    "Rettungswesten, Küstenabstände, Tender, Quickstop und Kontrollen: Die wichtigsten Sicherheitsregeln für Chartercrews in Kroatien – verständlich erklärt.",
  ogImage:
    "/images/blog/kroatien-sicherheit/kroatien-segelyacht-adria-hero.jpg",
  category: "Segelpraxis & Sicherheit",
  date: "2026-07-17",
  teaser:
    "Kroatien hat seine Sicherheitsvorschriften für den Sportbootverkehr präzisiert. Was Chartercrews zu Rettungswesten, Küstenabständen, Tender-Nutzung und Kontrollen wissen sollten.",
  heroImage:
    "/images/blog/kroatien-sicherheit/kroatien-segelyacht-adria-hero.jpg",
  heroImageAlt:
    "Segelyacht segelt in der kroatischen Adria zwischen Inseln – Charterreviere Dalmatien",
  readingTime: 7,
  relatedSlugs: [
    "neue-ankerregeln-kroatien-2026-70-meter-zone",
    "kroatien-einsteiger",
    "richtig-ankern-yachtcharter",
  ],
  content,
  faq: [
    {
      question:
        "Müssen auf einer Segelyacht in Kroatien immer Rettungswesten getragen werden?",
      answer:
        "Nein – auf Segelyachten und langsamen Motoryachten besteht keine durchgehende Westenpflicht während der Fahrt. Vorgeschrieben ist das Tragen nur auf offenen Motorbooten und RIBs, die bauartbedingt mehr als 20 Knoten erreichen können. Für alle Boote gilt aber: Rettungswesten müssen für alle Personen an Bord vorhanden und erreichbar sein.",
    },
    {
      question: "Wie weit darf sich das Beiboot (Tender) vom Mutterschiff entfernen?",
      answer:
        "Ein Tender ohne eigenständige kroatische Zulassung und Versicherung darf sich maximal 500 Meter vom Mutterschiff entfernen. Ausgenommen sind Fahrten zur nächstgelegenen Anlegestelle – also zum Einkaufen, ins Restaurant oder in den Hafen. Wer den Tender als eigenständiges Tagesboot nutzen möchte, benötigt eine eigene kroatische Vignette.",
    },
    {
      question: "Welchen Abstand zur Küste muss ich beim Fahren in Kroatien einhalten?",
      answer:
        "Der Mindestabstand richtet sich nach der Bootslänge: Yachten unter 15 Metern halten mindestens 50 Meter Abstand, Yachten zwischen 15 und 30 Metern mindestens 150 Meter, Yachten über 30 Metern mindestens 300 Meter. Diese Regel gilt beim Fahren entlang der Küste. Für das Ankern gelten separate Regelungen – dazu mehr im Beitrag zur 70-Meter-Ankerzone.",
    },
    {
      question: "Darf man mit dem SUP-Board oder Kajak überall in Kroatien fahren?",
      answer:
        "SUP-Boards, Kajaks, Kiteboards und elektrische Surfboards dürfen in Kroatien grundsätzlich nur tagsüber (zwischen Sonnenaufgang und Sonnenuntergang) und maximal 300 Meter von der Küste entfernt genutzt werden. Eine eigene Registrierungspflicht besteht nicht.",
    },
    {
      question: "Wie hoch sind die Bußgelder bei Verstößen in kroatischen Gewässern?",
      answer:
        "Das hängt von Art und Schwere des Verstoßes ab. Bußgelder können von mehreren hundert Euro bis in den vierstelligen Bereich gehen. Bei schwerwiegenden Verstößen kann auch die Weiterfahrt untersagt werden. Die Kontrolldichte auf der Adria hat in den letzten Jahren spürbar zugenommen.",
    },
  ],
};
