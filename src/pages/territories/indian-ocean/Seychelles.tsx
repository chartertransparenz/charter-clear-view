import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, Plane, Wind, Ship } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";

const Seychelles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "Welche Segelscheine und Befähigungsnachweise sind für das Chartern einer Yacht auf den Seychellen erforderlich?",
      answer: "Für das Chartern einer Yacht auf den Seychellen benötigen Sie einen gültigen internationalen Führerschein für Sportbootfahrer (International Certificate of Competence - ICC) oder einen äquivalenten nationalen Segelschein wie den Sportbootführerschein See (SBF See) oder den Sportküstenschifferschein (SKS). Zusätzlich ist ein aktuelles Funkzeugnis (Short Range Certificate - SRC) erforderlich. Bei größeren Yachten über 24 Meter Länge kann ein erweiterte Qualifikation wie der Sportseeschifferschein (SSS) verlangt werden."
    },
    {
      question: "Welche Kosten sind beim Yachtcharter auf den Seychellen zu erwarten?",
      answer: "Die Charterkosten für eine Yacht auf den Seychellen variieren je nach Saison, Yachttyp und -größe. Eine Katamaran für 8-10 Personen kostet in der Hauptsaison (Dezember-Januar, Juli-August) etwa 4.000-8.000 Euro pro Woche, in der Nebensaison 2.500-5.000 Euro. Hinzu kommen Nebenkosten wie Endreinigung (200-500 Euro), Treibstoff, Hafengebühren, Verpflegung und optionale Extras wie Skipper (1.200-1.500 Euro/Woche) oder Cook/Hostess."
    },
    {
      question: "Wann ist die beste Reisezeit für einen Segelurlaub auf den Seychellen?",
      answer: "Die beste Zeit für einen Segelurlaub auf den Seychellen sind die Übergangszeiten von April bis Mai und Oktober bis November. In diesen Monaten herrschen milde Winde (10-15 Knoten), ruhige See und minimale Regenfälle. Die Trockenzeit von Mai bis September bietet stabile Südost-Passatwinde, kann aber windiger sein. Die Regenzeit von Dezember bis März sollte vermieden werden, da häufige Regenschauer und stärkere Nordwest-Winde auftreten können."
    },
    {
      question: "Welche Route ist für eine einwöchige Segelreise auf den Seychellen empfehlenswert?",
      answer: "Eine klassische einwöchige Route startet in Mahé und führt über Praslin nach La Digue, mit Stopps in Cousin Island, Curieuse Island und St. Pierre. Diese Route bietet die perfekte Mischung aus den drei Hauptinseln mit ihren unterschiedlichen Charakteristiken: moderne Infrastruktur auf Mahé, das UNESCO-Welterbe Vallée de Mai auf Praslin und die berühmten Granitfelsen-Strände von La Digue. Die Distanzen sind überschaubar (15-25 Seemeilen zwischen den Inseln) und bieten auch weniger erfahrenen Seglern entspanntes Inselhüpfen."
    },
    {
      question: "Welche Besonderheiten gelten beim Segeln und Ankern auf den Seychellen?",
      answer: "Beim Segeln auf den Seychellen müssen Sie besonders auf Korallenriffe und Untiefen achten, da viele Bereiche nur bei Flut passierbar sind. Ankern ist nur in ausgewiesenen Bereichen erlaubt, um die empfindlichen Korallenriffe zu schützen. In vielen Buchten stehen Mooringbojen zur Verfügung, deren Nutzung bevorzugt werden sollte. Der Besuch der meisten Inseln erfordert eine Genehmigung, die über die Charterfirma arrangiert werden kann. Beachten Sie die strengen Naturschutzbestimmungen, insbesondere in den Nationalparks und Meeresschutzgebieten."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/753887c4-55b0-40ea-890c-1a64defa8c5f.png"
          alt="Seychellen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇸🇨 Seychellen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Seychellen</h1>
            <p className="text-xl max-w-2xl">
              Tropisches Inselparadies mit Granit-Felsen
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Indischen Ozean
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/indischer-ozean">Indischer Ozean</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Seychellen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Seychellen - Segeln im Paradies des Indischen Ozeans</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Die Seychellen, ein Archipel aus 115 Inseln im westlichen Indischen Ozean, gelten als eines der schönsten und exklusivsten Segelreviere der Welt. Mit ihren berühmten Granitfelsen-Stränden, kristallklarem türkisfarbenem Wasser und einer einzigartigen tropischen Flora und Fauna bieten die Seychellen Seglern ein unvergleichliches Naturerlebnis.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Das Segeln zwischen den Inner Islands der Seychellen ist ideal für entspannte Charter-Touren geeignet. Die Distanzen zwischen den Hauptinseln Mahé, Praslin und La Digue sind überschaubar (15-25 Seemeilen), was auch weniger erfahrenen Seglern traumhafte Inselhüpfen-Erlebnisse ermöglicht. Die geschützten Gewässer zwischen den Inseln bieten ruhige Segelbedingungen und spektakuläre Ankerplätze in paradiesischen Buchten.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Die Seychellen beheimaten zwei UNESCO-Weltnaturerbestätten: das berühmte Vallée de Mai auf Praslin mit der weltweit größten natürlichen Population der seltenen Seychellenpalme (Coco de Mer) und das Aldabra-Atoll, eines der größten Korallenatolle der Welt mit über 100.000 Riesenschildkröten. Diese einmaligen Naturschätze machen einen Segelurlaub auf den Seychellen zu einem unvergesslichen Erlebnis für Naturliebhaber.
            </p>

            <p className="text-lg text-gray-600 mb-6">
              Beim Yachtcharter auf den Seychellen stehen vor allem Katamarane im Vordergrund, da sie aufgrund ihrer geringen Tiefgangs ideal für das Navigieren in den teilweise seichten Gewässern rund um die Korallenriffe geeignet sind. Die modernen Charter-Katamarane bieten zudem den Komfort und Platz, der für entspannte Tage in diesem tropischen Paradies erforderlich ist.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Die Seychellen zeichnen sich durch ihre politische Stabilität, ausgezeichnete touristische Infrastruktur und die Gastfreundschaft der kreolischen Bevölkerung aus. Das ganzjährig warme tropische Klima mit Wassertemperaturen zwischen 26-29°C macht die Seychellen zu einem perfekten Segelrevier für alle, die exotische Natur, traumhafte Strände und entspanntes Segeln in einer der schönsten Inselwelten der Erde erleben möchten.
            </p>

            {/* Erreichbarkeit */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                Erreichbarkeit: Ihr direkter Weg ins Inselparadies
              </h3>
              <p className="text-gray-600 mb-4">
                Die Seychellen sind über den internationalen Flughafen Mahé (SEZ) erreichbar, der etwa 45 Flugminuten von der Hauptstadt Victoria entfernt liegt. Direktflüge gibt es von Europa (Emirates, Qatar Airways, Turkish Airlines) mit einer Flugzeit von etwa 9-11 Stunden.
              </p>
              <p className="text-gray-600">
                Die meisten Charterbasen befinden sich in der Eden Bleu Marina auf Mahé oder im Praslin Island Marina. Transfer vom Flughafen zur Marina dauert etwa 45 Minuten per Taxi oder 15 Minuten per Helikopter.
              </p>
            </div>

            {/* Wetter & Windbedingungen */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Wind className="w-5 h-5 text-blue-600" />
                Wetter & Windbedingungen: Segeln im tropischen Klima
              </h3>
              <p className="text-gray-600 mb-4">
                Die Seychellen haben ein tropisches Klima mit zwei Hauptjahreszeiten: die Trockenzeit (Mai-September) mit südöstlichen Passatwinden von 15-20 Knoten und die Regenzeit (Dezember-März) mit nordwestlichen Winden und häufigen kurzen Regenschauern.
              </p>
              <p className="text-gray-600">
                Die besten Segelbedingungen herrschen in den Übergangszeiten (April-Mai, Oktober-November) mit mäßigen Winden von 10-15 Knoten und ruhiger See.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Tage-Törnvorschlag */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">7-Tage-Törnvorschlag Seychellen</h3>
            
            <div className="border-l-4 border-blue-600 pl-4 space-y-4">
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 1: Mahé - Eden Bleu Marina</h4>
                <p className="text-gray-600">Übernahme der Yacht, Einweisung und erste Übernachtung in der Marina. Einkauf und Proviantierung für die Woche.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 2: Mahé - St. Anne Island (8 SM)</h4>
                <p className="text-gray-600">Kurzer erster Schlag zur geschützten St. Anne Island. Schnorcheln im Meerespark und Besuch des Luxury Resorts.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 3: St. Anne - Praslin/Baie Sainte Anne (22 SM)</h4>
                <p className="text-gray-600">Segeln nach Praslin. Besuch des berühmten UNESCO-Welterbes Vallée de Mai mit den seltenen Coco de Mer Palmen.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 4: Praslin - La Digue (6 SM)</h4>
                <p className="text-gray-600">Kurzer Schlag zur malerischen La Digue. Besuch der berühmten Anse Source d'Argent mit den ikonischen Granitfelsen.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 5: La Digue - Cousin Island - Praslin (15 SM)</h4>
                <p className="text-gray-600">Besuch der Vogelschutzinsel Cousin Island am Morgen, dann weiter nach Praslin zum Anse Volbert Beach.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 6: Praslin - Curieuse Island - St. Pierre (10 SM)</h4>
                <p className="text-gray-600">Ausflug zur Curieuse Island mit Riesenschildkröten-Beobachtung. Schnorcheln bei St. Pierre Island.</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-800">Tag 7: St. Pierre - Mahé/Eden Bleu (25 SM)</h4>
                <p className="text-gray-600">Rücksegeln nach Mahé mit letztem Stopp in einer geschützten Bucht vor der Yacht-Rückgabe am nächsten Morgen.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Häufig gestellte Fragen - Yachtcharter Seychellen</h3>
            
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Seychellen?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das tropische Paradies mit seinen einzigartigen 
              Granitfelsen-Stränden und der faszinierenden Tier- und Pflanzenwelt.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Seychellen Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seychelles;