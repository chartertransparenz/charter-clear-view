import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Buchung & Preise",
      icon: "💰",
      questions: [
        {
          question: "Wie erfolgt die Buchung und Bezahlung?",
          answer: "Die Buchung erfolgt ganz einfach über unser Online-System oder telefonisch. Nach der Buchungsbestätigung erhalten Sie eine Rechnung mit verschiedenen Zahlungsmöglichkeiten. Eine Anzahlung von 30% sichert Ihre Reservierung, der Restbetrag ist 4 Wochen vor Törn-Beginn fällig."
        },
        {
          question: "Welche Kosten sind im Charterpreis enthalten?",
          answer: "Der Charterpreis beinhaltet das Boot mit kompletter Ausstattung, Bettwäsche, Handtücher, Endreinigung und die gesetzlich vorgeschriebene Haftpflichtversicherung. Zusätzliche Kosten können für Kraftstoff, Kaution, optionale Extras und Hafengebühren anfallen."
        },
        {
          question: "Kann ich kurzfristig stornieren?",
          answer: "Bis 8 Wochen vor Törn-Beginn können Sie kostenfrei stornieren. Bei späteren Stornierungen staffeln sich die Gebühren je nach Zeitpunkt. Wir empfehlen den Abschluss einer Reiserücktrittsversicherung für maximale Flexibilität."
        },
        {
          question: "Gibt es Rabatte für Stammkunden?",
          answer: "Ja! Stammkunden erhalten ab der zweiten Buchung 5% Rabatt, ab der fünften Buchung 10%. Zusätzlich bieten wir Frühbucherrabatte und Saisonspecials an."
        }
      ]
    },
    {
      title: "Segelscheine & Erfahrung",
      icon: "⚓",
      questions: [
        {
          question: "Welchen Führerschein benötige ich?",
          answer: "Für den Bodensee benötigen Sie mindestens den Sportbootführerschein Binnen (SBF-Binnen). Für Seereisen ist der Sportküstenschifferschein (SKS) oder vergleichbare internationale Scheine erforderlich. Gerne beraten wir Sie zu den Anforderungen."
        },
        {
          question: "Können Anfänger auch ein Boot chartern?",
          answer: "Auf dem Bodensee können auch Segelanfänger mit entsprechender Einweisung ein Boot chartern. Für andere Reviere empfehlen wir eine Skipperausbildung oder einen erfahrenen Skipper an Bord."
        },
        {
          question: "Bieten Sie Segelkurse an?",
          answer: "Ja, wir bieten komplette Segelausbildungen vom Grundkurs bis zum Hochseeschein an. Unsere lizenzierten Segellehrer vermitteln Theorie und Praxis auf modernen Schulungsyachten."
        },
        {
          question: "Was passiert bei schlechtem Wetter?",
          answer: "Sicherheit geht vor! Bei zu starkem Wind oder Unwetter bleiben wir im Hafen. Unser erfahrenes Team gibt Ihnen jederzeit Wetterberatung und alternative Empfehlungen für Ihren Törn."
        }
      ]
    },
    {
      title: "Boot & Ausstattung",
      icon: "🛥️",
      questions: [
        {
          question: "Wie ist die Bootsausstattung?",
          answer: "Alle unsere Boote sind komplett ausgestattet mit Navigation, Sicherheitsausrüstung, Küchenausstattung, Bettwäsche und Handtüchern. Eine detaillierte Ausstattungsliste erhalten Sie bei der Buchung."
        },
        {
          question: "Kann ich zusätzliche Ausrüstung mieten?",
          answer: "Ja, wir bieten verschiedene Extras wie SUP-Boards, Schnorchelausrüstung, Grill, zusätzliche Fender und vieles mehr. Diese können Sie bei der Buchung oder vor Ort dazu buchen."
        },
        {
          question: "Wie alt sind die Boote in Ihrer Flotte?",
          answer: "Unsere Flotte wird kontinuierlich erneuert. Die meisten Boote sind nicht älter als 8 Jahre und befinden sich in einwandfreiem, gewarteten Zustand. Jedes Boot wird vor jeder Charter gründlich überprüft."
        },
        {
          question: "Was ist bei einem technischen Defekt?",
          answer: "Wir haben ein 24h-Notfallsystem und Partnerwerkstätten in allen Revieren. Bei größeren Defekten organisieren wir kostenfrei ein Ersatzboot oder erstatten anteilig die Charterkosten."
        }
      ]
    },
    {
      title: "Service & Support",
      icon: "🛠️",
      questions: [
        {
          question: "Erhalte ich eine Einweisung ins Boot?",
          answer: "Selbstverständlich! Vor jeder Charter erhalten Sie eine ausführliche Einweisung in die Technik, Navigation und Sicherheitsausrüstung. Diese dauert je nach Bootstyp 1-2 Stunden."
        },
        {
          question: "Gibt es Support während des Törns?",
          answer: "Ja, unser Support-Team ist 24/7 telefonisch erreichbar. Bei technischen Problemen oder Fragen zur Navigation helfen wir Ihnen jederzeit weiter."
        },
        {
          question: "Können Sie bei der Törnplanung helfen?",
          answer: "Gerne! Unsere Revierexperten kennen die schönsten Routen und besten Ankerplätze. Wir erstellen Ihnen kostenlose Törnvorschläge passend zu Ihrer Erfahrung und Ihren Wünschen."
        },
        {
          question: "Was ist mit Provisioning/Verpflegung?",
          answer: "Auf Wunsch organisieren wir Ihr Provisioning. Sie erhalten eine gut gefüllte Küche bei Ihrer Ankunft. Auch spezielle Wünsche oder Diäten berücksichtigen wir gerne."
        }
      ]
    }
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Telefon-Hotline",
      description: "Mo-Fr 8:00-18:00 Uhr",
      action: "+49 (0) 7543 123456",
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
      icon: MessageCircle,
      title: "Live Chat",
      description: "Sofort-Hilfe online",
      action: "Chat starten",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-ocean-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Häufige Fragen
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um 
            Yacht-Charter, Buchung und unsere Services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-ocean border-ocean-light/50">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{category.icon}</div>
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
              Ihre Frage war nicht dabei?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kein Problem! Unser Kundenservice-Team hilft Ihnen gerne weiter. 
              Kontaktieren Sie uns über einen der folgenden Kanäle:
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
                  <Button variant="outline" className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
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