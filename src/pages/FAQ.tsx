import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import TopDestinations from "@/components/TopDestinations";
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";
import { JsonLd } from "@/seo/JsonLd";


const FAQPage = () => {
  const m = META.faq;
  
  const absoluteOg = (path: string) => {
    const base = "https://chartertransparenz.de";
    return path.startsWith("http") ? path : `${base}${path}`;
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie funktioniert der Buchungsprozess für eine Yacht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Buchungsprozess beginnt mit Ihrer Anfrage (online, telefonisch oder per E-Mail). Nach Auswahl der gewünschten Yacht erhalten Sie ein detailliertes Angebot und einen Chartervertrag zur Ansicht. Die Buchung wird verbindlich, sobald der Vertrag von allen Parteien unterzeichnet und die vereinbarte Anzahlung geleistet wurde."
        }
      },
      {
        "@type": "Question",
        "name": "Wer ist mein Vertragspartner beim Chartern einer Yacht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ihr direkter Vertragspartner ist in der Regel der Vercharterer, also der Eigner der Yacht oder die Charterfirma, die die Yacht betreibt. Wir als Agentur agieren als Ihr Vermittler und Berater."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet mich der Service der Agentur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Vermittlungsleistungen sind für Sie als Charterkunden kostenlos. Das bedeutet für Sie: volle Unterstützung und Expertise ohne zusätzliche Kosten."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Dokumente und Nachweise benötige ich für den Charter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für Bareboat-Charter ist in den meisten Revieren ein gültiger Sportbootführerschein sowie ein Funkzeugnis erforderlich. Eine vollständige Crewliste sowie gültige Ausweisdokumente aller Personen an Bord müssen ebenfalls vorgelegt werden."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich auch ohne eigenen Führerschein chartern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, das ist problemlos möglich! Sie können einen erfahrenen Skipper zu Ihrer Yacht hinzubuchen. In einigen Revieren und für kleinere Boote ist auch ein Chartern ohne Führerschein nach einer Einweisung möglich."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist im Charterpreis enthalten und was nicht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Im Charterpreis sind die Nutzung der Yacht, die Standardausstattung und die Versicherung enthalten. Nicht enthalten sind meist: Treibstoff, Hafengebühren, Verpflegung, Extras, Endreinigung und Transitlog."
        }
      },
      {
        "@type": "Question",
        "name": "Wie hoch ist die Kaution und gibt es Alternativen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Kaution ist bei Bareboat-Chartern üblich und dient als Sicherheit für Schäden an der Yacht. Viele Anbieter bieten eine Kautionsversicherung an, die das Risiko für Sie erheblich reduziert."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Arten von Yachten kann ich chartern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten Segelyachten, Motoryachten, Katamarane und Superyachten an. Wir unterscheiden zwischen Bareboat-Charter (ohne Crew) und Crewed-Charter (mit professioneller Crew)."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft die Übergabe und Rückgabe der Yacht ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei der Übergabe wird die Yacht gemeinsam inspiziert und der Zustand protokolliert. Bei der Rückgabe erfolgt eine erneute Prüfung. Sofern keine Schäden vorliegen, wird die Kaution erstattet."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich einen Skipper oder eine Crew buchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Sie können zu fast allen Yachten einen erfahrenen Skipper hinzubuchen. Für zusätzlichen Komfort sind auch Hostessen oder Köche verfügbar."
        }
      }
    ]
  };
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <JsonLd json={faqStructuredData} />
      <div className="min-h-screen bg-background">
        <Navigation />
        <FAQ />
        <TopDestinations />
      </div>
    </>
  );
};

export default FAQPage;