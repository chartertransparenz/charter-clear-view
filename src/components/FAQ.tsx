import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail, FileText, Anchor, CreditCard, Ship, Headphones, Send } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Buchung & Vertrag",
      icon: FileText,
      questions: [
        {
          question: "Wie funktioniert der Buchungsprozess für eine Yacht?",
          answer: "Der Buchungsprozess beginnt mit Ihrer Anfrage (online, telefonisch oder per E-Mail). Nach Auswahl der gewünschten Yacht erhalten Sie ein detailliertes Angebot und einen Chartervertrag zur Ansicht. Die Buchung wird verbindlich, sobald der Vertrag von allen Parteien unterzeichnet und die vereinbarte Anzahlung geleistet wurde. Im Vertrag sind alle Details zu Yacht, Reise, Kosten und Vertragsparteien transparent festgehalten."
        },
        {
          question: "Wer ist mein Vertragspartner beim Chartern einer Yacht?",
          answer: "Ihr direkter Vertragspartner ist in der Regel der Vercharterer, also der Eigner der Yacht oder die Charterfirma, die die Yacht betreibt. Wir als Agentur agieren als Ihr Vermittler und Berater. Wir unterstützen Sie bei der Auswahl, der Abwicklung und stehen Ihnen bei Fragen oder im unwahrscheinlichen Fall von Problemen als Ansprechpartner zur Seite."
        },
        {
          question: "Was kostet mich der Service der Agentur?",
          answer: "Unsere Vermittlungsleistungen sind für Sie als Charterkunden kostenlos. Das bedeutet für Sie: volle Unterstützung und Expertise ohne zusätzliche Kosten."
        },
        {
          question: "Wie laufen die Zahlungsmodalitäten ab und sind Rabatte möglich?",
          answer: "Die Charterpreise und Zahlungsmodalitäten (Anzahlung, Restzahlung) werden vom jeweiligen Vercharterer festgelegt und sind im Chartervertrag detailliert aufgeführt. In der Regel ist eine Anzahlung bei Vertragsabschluss und die Restzahlung einige Wochen vor Charterbeginn fällig. Wir können Ihnen gegebenenfalls zusätzliche Rabatte gewähren, die unsere Provision mindern, nicht aber den offiziellen Charterpreis des Vercharterers."
        },
        {
          question: "Was passiert bei Stornierung oder Umbuchung?",
          answer: "Die Stornierungsbedingungen sind in den Allgemeinen Geschäftsbedingungen (AGB) des jeweiligen Vercharterers geregelt und im Chartervertrag festgehalten. In der Regel fallen bei einer Stornierung Gebühren an, die sich nach dem Zeitpunkt der Absage richten. Umbuchungen oder Verschiebungen sind oft nach individueller Absprache und Verfügbarkeit möglich. Wir empfehlen dringend den Abschluss einer Reiserücktrittsversicherung, um sich gegen unvorhergesehene Ereignisse abzusichern."
        }
      ]
    },
    {
      title: "Vorbereitung & Dokumente",
      icon: Anchor,
      questions: [
        {
          question: "Welche Dokumente und Nachweise benötige ich für den Charter?",
          answer: "Für Bareboat-Charter (ohne Skipper) ist in den meisten Revieren ein gültiger Sportbootführerschein (z.B. SBF See, SKS) sowie ein Funkzeugnis (z.B. SRC) für Yachten mit Funkgerät erforderlich. Eine vollständige Crewliste sowie gültige Ausweisdokumente aller Personen an Bord müssen ebenfalls vorgelegt werden. Die genauen Anforderungen variieren je nach Charterrevier. In Griechenland ist der SKS Vorschrift. Ferner benötigt ein Crewmitglied nachweislich Segelerfahrung."
        },
        {
          question: "Kann ich auch ohne eigenen Führerschein chartern?",
          answer: "Ja, das ist problemlos möglich! Sie können einen erfahrenen Skipper zu Ihrer Yacht hinzubuchen. In einigen Revieren und für kleinere Boote ist auch ein Chartern ohne Führerschein nach einer Einweisung durch den Vercharterer möglich."
        },
        {
          question: "Welche Versicherungen sind für meinen Charter wichtig oder empfehlenswert?",
          answer: "Alle Charteryachten sind kasko- und haftpflichtversichert. Die Selbstbeteiligung entspricht dabei meist der Höhe der Kaution. Wir empfehlen Ihnen dringend, zusätzlich folgende Versicherungen abzuschließen: • Skipperhaftpflichtversicherung: Deckt Schäden ab, die Sie als Skipper Dritten zufügen. • Kautionsversicherung: Reduziert Ihr finanzielles Risiko im Schadensfall, indem sie die Kaution oder einen Teil davon abdeckt. • Reiserücktrittsversicherung: Schützt Sie vor Stornokosten bei unvorhergesehenen Ereignissen. • Reisekrankenversicherung: Für medizinische Notfälle im Ausland. Für persönliche Gegenstände an Bord empfiehlt sich eine private Reisegepäckversicherung."
        }
      ]
    },
    {
      title: "Kosten & Kaution",
      icon: CreditCard,
      questions: [
        {
          question: "Was ist im Charterpreis enthalten und was nicht?",
          answer: "Im Charterpreis sind in der Regel die Nutzung der Yacht, die Standardausstattung und die Versicherung der Yacht enthalten. Nicht enthalten sind meist: • Treibstoff • Hafengebühren und Liegeplatzkosten • Verpflegung und Getränke • Optionale Extras (z.B. Außenborder, Bettwäsche, Handtücher, WLAN, SUPs, spezielle Wassersportausrüstung) • Endreinigung (oft obligatorisch und vor Ort zu zahlen) • Transitlog (obligatorische Gebühr für Formalitäten im Revier) • Trinkgelder für die Crew (bei Crewed Chartern). Alle zusätzlichen Kosten werden Ihnen im Angebot transparent ausgewiesen."
        },
        {
          question: "Gibt es zusätzliche Kosten, die nicht im Charterpreis enthalten sind?",
          answer: "Ja, neben den oben genannten Punkten können weitere Kosten anfallen, z.B. für Yachtüberführungen (wenn Start- und Zielhafen unterschiedlich sind), die Buchung eines Skippers oder einer Hostess, oder spezielle Wünsche. Bei Luxuschartern wird oft eine APA (Advance Provisioning Allowance) erhoben, eine Vorauszahlung für variable Kosten wie Treibstoff, Verpflegung, Hafengebühren und andere Ausgaben während des Charters."
        },
        {
          question: "Wie hoch ist die Kaution und gibt es Alternativen?",
          answer: "Eine Kaution ist bei Bareboat-Chartern üblich und dient als Sicherheit für Schäden an der Yacht oder fehlende Ausrüstung. Die Höhe wird vom Vercharterer festgelegt und vor Ort in bar oder per Kreditkarte hinterlegt. Viele Anbieter bieten die Möglichkeit einer Kautionsversicherung (Kautionsabgeltung) an, die das Risiko für Sie als Charterer erheblich reduziert und im Schadensfall die Selbstbeteiligung abdeckt."
        },
        {
          question: "Was ist eine Bordkasse?",
          answer: "Die Bordkasse ist ein gemeinsamer Topf der Crew oder der Gäste, aus dem die laufenden Kosten während des Charters bestritten werden. Dazu gehören Treibstoff, Hafengebühren, Proviant, Getränke und ggf. Trinkgelder für die Crew. Die Verwaltung der Bordkasse liegt meist in der Hand eines benannten Crewmitglieds."
        }
      ]
    },
    {
      title: "An Bord & Während des Charters",
      icon: Ship,
      questions: [
        {
          question: "Welche Arten von Yachten kann ich chartern?",
          answer: "Wir bieten eine breite Palette an Yachten an: • Segelyachten: Ideal für Segelbegeisterte. • Motoryachten: Für schnelle Reisen und Komfort. • Katamarane: Bieten viel Platz, Stabilität und geringen Tiefgang. • Superyachten: Für luxuriöse und exklusive Erlebnisse mit voller Crew. Wir unterscheiden zudem zwischen Bareboat-Charter (ohne Crew) und Crewed-Charter (mit professioneller Crew)."
        },
        {
          question: "Wie lange dauert ein Charter in der Regel und welche Starttage sind üblich?",
          answer: "Die Standard-Charterdauer für die meisten Yachten ist eine Woche (Wochencharter). Im Mittelmeer ist der Charterrhythmus dabei meist Samstag zu Samstag. Es gibt jedoch Ausnahmen davon wie z.B. außerhalb der Hochsaison. In Überseedestinationen wie der Karibik oder dem Pazifik sind häufig auch andere Starttage und flexiblere Charterdauern (z.B. 10 Tage oder längere Zeiträume) nach Absprache möglich, um Ihren individuellen Reiseplänen entgegenzukommen."
        },
        {
          question: "Wie läuft die Übergabe (Check-in) und Rückgabe (Check-out) der Yacht ab?",
          answer: "Bei der Übergabe (Check-in) wird die Yacht gemeinsam mit einem Mitarbeiter des Vercharterers inspiziert. Dabei werden der Zustand der Yacht, die Funktionsfähigkeit der Ausrüstung und die Vollständigkeit des Inventars geprüft und in einem Protokoll festgehalten. Bei der Rückgabe (Check-out) erfolgt eine erneute gemeinsame Prüfung. Sofern keine Schäden vorliegen und die Yacht ordnungsgemäß zurückgegeben wird, wird die Kaution erstattet."
        },
        {
          question: "Was muss ich zur Verpflegung und Bordausstattung wissen?",
          answer: "Alle Charteryachten verfügen über eine voll ausgestattete Pantry (Küche) mit Kochfeld, Kühlschrank und Essgeschirr. Proviant kann selbst mitgebracht, in lokalen Supermärkten eingekauft oder über einen Lieferservice direkt zur Yacht bestellt werden. Bettwäsche und Handtücher sind je nach Yacht und Vercharterer entweder inklusive oder als zubuchbares Extra erhältlich."
        },
        {
          question: "Kann ich einen Skipper oder eine Crew buchen?",
          answer: "Ja, Sie können zu fast allen Yachten einen erfahrenen Skipper hinzubuchen. Für zusätzlichen Komfort sind auch Hostessen (für Service und leichte Mahlzeiten) oder Köche (für Gourmet-Erlebnisse) verfügbar. Unsere Crewmitglieder sprechen in der Regel Englisch und/oder Deutsch."
        },
        {
          question: "Dürfen Haustiere mit an Bord?",
          answer: "Haustiere sind auf Anfrage bei vielen Yachten erlaubt. Bitte informieren Sie uns unbedingt vorab, da eine zusätzliche Reinigungsgebühr anfallen kann und nicht alle Yachten für Haustiere geeignet sind."
        },
        {
          question: "Sind Kinder an Bord erlaubt?",
          answer: "Familien mit Kindern sind herzlich willkommen! Bitte informieren Sie uns bei der Buchung über die Anzahl und das Alter der Kinder, damit wir sicherstellen können, dass passende Schwimmwesten und gegebenenfalls weitere Sicherheitsmaßnahmen (z.B. Netze) vorbereitet werden können."
        },
        {
          question: "Gibt es eine Mindest- oder Maximalbelegung für die Yacht?",
          answer: "Die maximale Personenzahl pro Yacht ist aus Sicherheitsgründen und gemäß den Zulassungsvorschriften begrenzt und im Angebot sowie im Chartervertrag klar angegeben. Die Maximalbelegung im Bareboatcharter beträgt auch bei größeren Yachten in der Regel maximal 12 Personen."
        },
        {
          question: "Was passiert bei schlechtem Wetter?",
          answer: "Die Sicherheit an Bord hat oberste Priorität. Bei schlechtem Wetter (z.B. starker Wind, hohe Wellen, Gewitter) wird in Absprache mit dem Skipper (falls gebucht) entschieden, ob die Route angepasst werden muss."
        },
        {
          question: "Was passiert bei technischen Problemen unterwegs?",
          answer: "Im unwahrscheinlichen Fall eines technischen Problems steht Ihnen ein Notdienst des Vercharterers zur Verfügung. Die Kontaktdaten erhalten Sie bei der Übergabe. Kleinere Probleme können oft mit telefonischer Unterstützung selbst behoben werden, größere Schäden werden vom Stützpunkt aus organisiert und behoben."
        },
        {
          question: "Wie läuft die Routenplanung ab?",
          answer: "Wir stellen Ihnen gerne Routenvorschläge und Revierinformationen zur Verfügung. Die endgültige Route kann individuell an Ihre Wünsche angepasst werden. Bei Crewed Chartern wird die Route gemeinsam mit dem Skipper abgestimmt und kann je nach Wetterlage und Ihren Vorlieben flexibel angepasst werden."
        },
        {
          question: "Welche Aktivitäten und Extras sind an Bord möglich?",
          answer: "Je nach Yacht und Reiseziel stehen verschiedene Wassersportgeräte wie Stand-Up-Paddles (SUPs), Kajaks, Schnorchelausrüstung oder Angelzubehör zur Verfügung. Viele Extras können im Voraus gebucht werden, um Ihr Chartererlebnis zu perfektionieren."
        }
      ]
    },
    {
      title: "Support & Sonstiges",
      icon: Headphones,
      questions: [
        {
          question: "Was passiert bei Streitfällen oder Problemen während des Charters?",
          answer: "Sollten während Ihres Charters Probleme oder Unstimmigkeiten auftreten, stehen wir Ihnen als Agentur jederzeit als Ansprechpartner zur Verfügung. Wir vermitteln zwischen Ihnen und dem Vercharterer, um eine schnelle und zufriedenstellende Lösung zu finden."
        },
        {
          question: "Was ist Tipping/Trinkgeld für die Crew?",
          answer: "Bei Crewed Chartern ist es in vielen Ländern üblich, der Crew am Ende des Charters ein Trinkgeld zu geben. Die Höhe liegt meist zwischen 5 % und 15 % des Charterpreises und hängt von Ihrer Zufriedenheit mit dem Service ab."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Telefon-Hotline",
      description: "Mo-Fr 8:00-18:00 Uhr",
      action: "+49 7543 499 080",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "E-Mail Support",
      description: "Antwort binnen 24h",
      action: "info@chartertransparenz.de",
      color: "bg-blue-500"
    },
    {
      icon: Send,
      title: "WhatsApp Support",
      description: "Direkter Chat verfügbar",
      action: "WhatsApp öffnen",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="haeufige-fragen" className="py-20 bg-ocean-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Häufige Fragen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            FAQ – Ihre Fragen, unsere Antworten zum Yachtcharter
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wir haben die häufigsten Fragen unserer Kunden gesammelt und beantwortet, 
            um Ihnen die Planung Ihres Yachtcharters so einfach wie möglich zu machen.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-ocean border-ocean-light/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-ocean-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-ocean-dark">{category.title}</CardTitle>
                    <CardDescription>
                      {category.questions.length} häufige Fragen
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`item-${categoryIndex}-${faqIndex}`}
                      className="border-ocean-light/30"
                    >
                      <AccordionTrigger className="text-left hover:text-ocean-blue transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-ocean-dark mb-4">
              Deine Frage war nicht dabei?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kein Problem! Unser Kundenservice-Team hilft dir gerne weiter. 
              Kontaktiere uns über einen der folgenden Kanäle:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 border-ocean-light/50">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-ocean-dark mb-2">{option.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
                    onClick={() => {
                      if (option.title === "WhatsApp Support") {
                        const phoneNumber = "497543499080";
                        const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihre Yacht Charter Services.");
                        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                      }
                    }}
                  >
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;