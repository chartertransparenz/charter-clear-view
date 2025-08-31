import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const frenchAtlanticCoast = "/lovable-uploads/dbea27be-ce97-4174-8a0b-b1908596fb03.png";
const FrenchAtlanticCoast = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Französische Westküste"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-September"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Tidenreviere"
  }];
  const regions = [{
    name: "Biskaya",
    link: "/reviere/atlantik/franzoesische-atlantikkueste/biskaya",
    description: "Von Bordeaux bis zur spanischen Grenze",
    cities: ["Bordeaux", "Arcachon", "Biarritz"]
  }, {
    name: "Bretagne & Normandie",
    link: "/reviere/atlantik/franzoesische-atlantikkueste/bretagne-normandie",
    description: "Raue Küsten und maritime Tradition",
    cities: ["Saint-Malo", "Brest", "La Rochelle"]
  }];
  const highlights = ["Anspruchsvolle Tidenreviere", "Raue, dramatische Küstenlandschaft", "Traditionelle französische Seehäfen", "Exzellente französische Küche", "Starke Winde und Strömungen", "Authentische Seefahrertradition", "Spektakuläre Gezeitenunterschiede"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={frenchAtlanticCoast} alt="Französische Atlantikküste" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇫🇷 Französische Atlantikküste</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Französische Atlantikküste</h1>
            <p className="text-xl max-w-2xl">
              Anspruchsvolle Tidenreviere
            </p>
          </div>
        </div>
        <Link to="/reviere/atlantik" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Atlantik
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
                <BreadcrumbLink asChild><Link to="/#reviere">Reviere</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/atlantik">Atlantik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Französische Atlantikküste</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yachtcharter Bretagne & Atlantikküste Frankreich – Segeln zwischen Gezeiten, Inseln & maritimer Kultur</h2>
            
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Die französische Atlantikküste gilt als eines der spannendsten Segelreviere Europas. Zwischen der rauen Schönheit der Bretagne und den malerischen Stränden der Biskaya erwartet Skipper und Crews ein Revier voller Kontraste: zerklüftete Klippen, idyllische Buchten, charmante Fischerhäfen, historische Festungen und kulinarische Hochgenüsse von Austern bis Cidre.
              </p>
              
              <p>
                Die Region ist bekannt für ihre anspruchsvolle Gezeitennavigation, ihre starken Strömungen und das besondere Licht, das Maler, Dichter und Segler seit Jahrhunderten inspiriert. Wer hier segelt, erlebt echtes Atlantik-Feeling, das sowohl sportlich ambitionierte Crews als auch Genießer anspricht.
              </p>
              
              <p>
                Wichtige Ausgangspunkte für den Yachtcharter Bretagne sind traditionsreiche Häfen wie La Rochelle, Lorient oder La Trinité-sur-Mer. Von hier aus lassen sich die berühmten Inseln und Küstenabschnitte entdecken:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Die Südbretagne:</strong> Ein Mosaik aus Inseln wie der majestätischen Belle-Île, der kleineren Île de Groix und den idyllischen Zwillingsinseln Hoëdic und Houat. Nicht zu vergessen das sagenumwobene Glénan-Archipel, die „bretonische Karibik".</li>
                <li><strong>Die Küste der Biskaya:</strong> Hier locken sonnenverwöhnte Inseln wie die elegante Île de Ré, die weitläufige Île d'Oléron und die wilde, ursprüngliche Île d'Yeu.</li>
              </ul>
              
              <p>
                Ein Yachtcharter in der Bretagne oder der Biskaya ist eine Einladung, im Einklang mit den Elementen zu segeln, die französische Lebensart zu genießen und unvergessliche nautische Erfahrungen zu sammeln.
              </p>

              {/* Anreise Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ihre Anreise ins Herz des französischen Segelsports</h3>
                <p className="mb-4">
                  Die Planung Ihres Törns an der französischen Atlantikküste gestaltet sich dank der hervorragenden Infrastruktur denkbar einfach. Die wichtigsten Charterbasen sind aus Deutschland, Österreich und der Schweiz bequem zu erreichen.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Mit dem Auto:</strong> Die Anreise mit dem eigenen PKW ist besonders für Crews mit viel Gepäck eine flexible Option. Das französische Autobahnnetz ist exzellent ausgebaut.</li>
                  <li><strong>Mit dem Hochgeschwindigkeitszug (TGV):</strong> Reisen Sie entspannt und schnell. Direkte Verbindungen führen Sie von vielen europäischen Städten nach Nantes, La Rochelle oder Lorient. Von dort aus sind es nur kurze Strecken per Taxi oder Regionalzug zu Ihrer Marina.</li>
                  <li><strong>Per Flugzeug:</strong> Regionale Flughäfen wie Nantes (NTE), La Rochelle (LRH) oder Lorient (LRT) werden von verschiedenen Fluggesellschaften angeflogen und ermöglichen eine schnelle Anreise.</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Marinas & Ausgangshäfen: Die Weltklasse-Infrastruktur einer Segelnation</h3>
              <p>
                Frankreich ist eine der führenden Segelnationen der Welt, und das spiegelt sich in der Dichte und Qualität seiner Marinas wider. Sie finden hier eine perfekte maritime Infrastruktur mit allen erdenklichen Serviceleistungen und eine riesige Auswahl an top-gewarteten Charteryachten.
              </p>
              
              <p><strong>Unsere wichtigsten Charterbasen und empfohlene Marinas im Revier:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>La Trinité-sur-Mer:</strong> Das unbestrittene Mekka des französischen Regattasports. Ein Hafen, der Segelgeschichte atmet und der perfekte Ausgangspunkt für Törns in die Bucht von Quiberon und zu den bretonischen Inseln ist.</li>
                <li><strong>Lorient:</strong> Die „Stadt der fünf Häfen" ist die Heimat vieler Hochsee-Profis und bietet eine riesige Charterflotte. Von hier aus sind die Île de Groix und das Glénan-Archipel zum Greifen nah.</li>
                <li><strong>Le Crouesty / Port du Crouesty:</strong> Eine der größten Marinas Europas, perfekt gelegen am Eingang des Golfs von Morbihan. Sie bietet Schutz bei jedem Wetter und ist ein idealer Startpunkt für Familien und Crews, die das geschützte Binnenmeer erkunden wollen.</li>
                <li><strong>La Rochelle (Port des Minimes):</strong> Eine der größten und modernsten Marinas an der Atlantikküste. Der historische Hafen von La Rochelle ist nur einen Steinwurf entfernt und die Lage ist ideal für Törns zu den Inseln Île de Ré, Île d'Oléron und Île d'Yeu.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Inselhopping für Kenner: Törnziele mit Charakter</h3>
              <p>
                Die französische Atlantikküste ist ein Paradies für Inselhopping. Jede Insel hat ihre eigene Identität, ihre eigenen kulinarischen Spezialitäten und ihren eigenen Charme. Die Törnplanung richtet sich hier nicht nur nach dem Wind, sondern vor allem nach der Tide.
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Die Südbretagne: Von Festungen und Lagunen</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Belle-Île-en-Mer:</strong> Die „schöne Insel im Meer" macht ihrem Namen alle Ehre. Erkunden Sie die imposante Zitadelle von Vauban in Le Palais, ankern Sie in der malerischen Bucht von Sauzon und umrunden Sie die wilde Westküste mit ihren spektakulären Klippen. Ein Inselhopping zur Belle-Île ist ein absolutes Muss.</li>
                <li><strong>Glénan-Archipel:</strong> Etwa zehn Seemeilen südlich von Concarneau liegt ein Naturparadies, das an die Karibik erinnert. Ein Ring aus kleinen Inseln umschließt eine türkisfarbene Lagune mit weißem Sand. Das Ankern und Navigieren in diesem flachen, von Strömungen durchzogenen Gebiet erfordert Präzision, belohnt aber mit unvergesslichen Momenten.</li>
                <li><strong>Hoëdic und Houat:</strong> Diese beiden kleineren Inseln sind Oasen der Ruhe. Autofrei und ursprünglich bieten sie wunderschöne Strände, kleine Fischerhäfen und die perfekte Entschleunigung vom Alltag.</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">Die Biskaya: Sonne, Austern und Savoir-vivre</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Île de Ré:</strong> Verbunden durch eine Brücke mit La Rochelle, ist diese Insel ein Inbegriff französischer Lebensart. Erkunden Sie die charmanten Dörfer mit dem Fahrrad, genießen Sie frische Austern direkt vom Erzeuger und entspannen Sie an den endlosen Sandstränden. Der Hafen von Saint-Martin-de-Ré ist ein Juwel. Ein Törn von La Rochelle zur Île de Ré ist ein Klassiker.</li>
                <li><strong>Île d'Yeu:</strong> Weiter draußen im Atlantik gelegen, ist die Île d'Yeu wilder und rauer. Die Côte Sauvage im Westen erinnert an Irland, während der Osten mit schönen Stränden und dem lebhaften Hafen von Port-Joinville lockt.</li>
                <li><strong>Île d'Oléron:</strong> Die größte der französischen Atlantikinseln ist bekannt für ihre Austernzucht, ihre Pinienwälder und ihre familienfreundlichen Strände. Der Hafen von Boyardville bietet einen berühmten Blick auf das Fort Boyard.</li>
              </ul>

              {/* Wetter Section */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Wetter & Windbedingungen: Im Rhythmus der Gezeiten</h3>
                <p className="mb-4">
                  Das Segeln an der französischen Atlantikküste ist untrennbar mit dem Phänomen der Gezeiten verbunden. Dies ist die größte nautische Herausforderung und zugleich der größte Reiz des Reviers.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Die Gezeiten:</h4>
                    <p className="mb-2">Der Tidenhub kann, je nach Region und Mondphase (Spring- oder Nipptide), zwischen drei und über sechs Metern betragen. Dies bedeutet:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Starke Strömungen:</strong> In Engstellen und um Kaps können Gezeitenströme Geschwindigkeiten von mehreren Knoten erreichen. Die präzise Berechnung von Strom und Abdrift ist essenziell.</li>
                      <li><strong>Veränderliche Wassertiefen:</strong> Häfen und Ankerbuchten können bei Ebbe trockenfallen. Die Navigation erfordert ständigen Blick auf Seekarte und Tidentabelle.</li>
                      <li><strong>Timing ist alles:</strong> Die Ansteuerung von Häfen oder die Passage von Engstellen muss exakt mit der Tide geplant werden. Segeln gegen den Strom ist oft unmöglich.</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Wind:</strong> Die vorherrschenden Winde kommen aus westlichen Richtungen. Im Sommer sind sie oft moderat, können aber durch durchziehende Atlantiktiefs jederzeit auffrischen. Die Küste bietet bei fast allen Windrichtungen geschützte Abschnitte.</p>
                  </div>
                  <div>
                    <p><strong>Welle:</strong> Die lange Atlantikdünung ist immer präsent und erfordert eine seegängige Yacht und eine erfahrene Crew. In den Küstengewässern kann sich bei Wind gegen Strom eine kurze, steile und unangenehme Welle aufbauen.</p>
                  </div>
                  <div>
                    <p><strong>Erfahrungsstufe:</strong> Dieses Revier ist ideal für erfahrene Skipper, die ihre Kenntnisse im Gezeitensegeln anwenden und vertiefen wollen. Für Segler ohne Tiden-Erfahrung ist eine Bareboat-Charter nur nach gründlicher Vorbereitung oder idealerweise mit einem ortskundigen Skipper zu empfehlen.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Beste Reisezeit für Ihren Atlantik-Törn</h3>
              <p>Die ideale Saison für einen Yachtcharter an der französischen Atlantikküste erstreckt sich von Mai bis September.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mai, Juni & September:</strong> Diese Monate gelten als die beste Zeit. Das Wetter ist oft stabil und sonnig, die Temperaturen sind angenehm und die Häfen sind noch nicht überfüllt. Die Natur zeigt sich von ihrer schönsten Seite.</li>
                <li><strong>Juli & August:</strong> In der französischen Hauptsaison ist das Wetter am wärmsten, aber die Häfen und Ankerplätze sind sehr belebt. Eine frühzeitige Reservierung von Liegeplätzen ist unerlässlich.</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Fazit: Warum ein Yachtcharter an der französischen Atlantikküste unvergesslich ist</h3>
              <p>
                Ein Yachtcharter in der Bretagne oder der Biskaya ist eine Belohnung für jeden ambitionierten Segler. Es ist die perfekte Symbiose aus sportlicher Herausforderung und genussvollem Reisen. Die Notwendigkeit, sich intensiv mit den Naturgewalten auseinanderzusetzen, schafft ein tiefes Gefühl der Verbundenheit mit dem Meer. Gepaart mit der unvergleichlichen Schönheit der Inseln, der tief verwurzelten maritimen Kultur und den kulinarischen Verlockungen an jeder Ecke, wird dieser Törn zu einem Erlebnis, das weit über einen normalen Segelurlaub hinausgeht.
              </p>

              <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Bereit, die Gezeiten zu meistern?</h3>
              <p>
                Fühlen Sie sich bereit für die Herausforderung und die unvergleichlichen Belohnungen der französischen Atlantikküste? Unser erfahrenes Team ist spezialisiert auf dieses anspruchsvolle Revier und hilft Ihnen, die perfekte Segelyacht oder den idealen Katamaran für Ihr Abenteuer zu finden.
              </p>
              <p>
                Kontaktieren Sie uns jetzt für ein maßgeschneidertes Angebot für Ihren Yachtcharter in der Bretagne!
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ – Häufig gestellte Fragen zum Yachtcharter an der französischen Atlantikküste</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wie sind die Wind- und Gezeitenbedingungen an der französischen Atlantikküste?</AccordionTrigger>
              <AccordionContent>
                Die vorherrschenden Winde sind Westwinde, die im Sommer meist moderat sind. Die größte Besonderheit sind die starken Gezeiten mit einem Tidenhub von bis zu 6 Metern oder mehr. Dies verursacht starke Gezeitenströme und erfordert eine exakte Törnplanung.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie findet man sichere Liegeplätze an der französischen Atlantikküste?</AccordionTrigger>
              <AccordionContent>
                Das Revier verfügt über eine exzellente Infrastruktur mit unzähligen modernen Marinas, die Schutz bei jedem Wetter bieten. Zusätzlich gibt es viele Mooringfelder und Ankerbuchten. Wichtig ist, bei der Planung die Wassertiefe bei Ebbe zu berücksichtigen, da viele Plätze trockenfallen können.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Welche nautischen Besonderheiten gibt es dort?</AccordionTrigger>
              <AccordionContent>
                Die alles beherrschende nautische Besonderheit ist die Tide. Die Navigation erfordert die ständige Nutzung von Tidentabellen und Stromatlanten. Starke Strömungen, sich schnell ändernde Wassertiefen und das Phänomen „Wind gegen Strom" sind die zentralen Herausforderungen beim Gezeitensegeln.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Welche Segelscheine werden für eine Bareboat-Charter in Frankreich benötigt?</AccordionTrigger>
              <AccordionContent>
                Für eine Bareboat-Charter wird in der Regel der deutsche Sportbootführerschein See (SBF See) als Minimum verlangt, der Sportküstenschifferschein (SKS) wird dringend empfohlen. Entscheidend ist jedoch der Erfahrungsnachweis des Skippers, insbesondere in Gezeitenrevieren. Ein Funkzeugnis (SRC oder höher) ist obligatorisch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Wie viel Segelerfahrung brauche ich, um selbstständig eine Yacht an der französischen Atlantikküste zu führen?</AccordionTrigger>
              <AccordionContent>
                Solide Erfahrung als Skipper ist unerlässlich. Sie sollten mit der Tiden-Navigation vertraut sein und Erfahrung in Revieren mit Starkwind und Strömung haben. Für Skipper ohne Gezeitenerfahrung ist die Buchung eines ortskundigen Skippers für die ersten Tage oder den gesamten Törn die sicherste und lehrreichste Option.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Wann ist die beste Reisezeit für die französische Atlantikküste?</AccordionTrigger>
              <AccordionContent>
                Die beste Reisezeit ist von Mai bis September. Die Vor- und Nachsaison (Mai, Juni, September) bieten angenehmes Wetter bei weniger überlaufenen Häfen. Juli und August sind die wärmsten, aber auch belebtesten Monate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Wie gut sind die Häfen und Marinas auf den einzelnen Inseln ausgebaut?</AccordionTrigger>
              <AccordionContent>
                Die Infrastruktur ist erstklassig. Selbst auf den kleineren Inseln finden sich gut geschützte und ausgestattete Häfen. Frankreich ist eine Segelnation, und die Marinas bieten in der Regel alle notwendigen Dienstleistungen wie Strom, Wasser, Sanitäranlagen und oft auch technische Services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Wie gut sind die Proviantierungsmöglichkeiten unterwegs?</AccordionTrigger>
              <AccordionContent>
                Die Proviantierung ist ausgezeichnet und ein Teil des Erlebnisses. In jedem Hafenort finden Sie Bäckereien, Metzger und kleine Supermärkte. Besonders reizvoll sind die Wochenmärkte mit frischem Fisch, Meeresfrüchten, Gemüse und lokalen Spezialitäten.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die französische Atlantikküste?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie anspruchsvolles Segeln in den traditionellen 
              Tidenrevieren mit authentischer französischer Seefahrertradition.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Französische Atlantikküste Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default FrenchAtlanticCoast;