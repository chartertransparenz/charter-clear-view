import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import atlantic from "@/assets/atlantic.jpg";
const Azores = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Mittelatlantik"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Erfahrene Segler"
  }, {
    icon: Anchor,
    label: "Inseln",
    value: "9 vulkanische Inseln"
  }];
  const regions = [{
    name: "São Miguel",
    link: "/reviere/atlantik/azoren/sao-miguel",
    description: "Hauptinsel mit Ponta Delgada",
    cities: ["Ponta Delgada", "Vila Franca do Campo"]
  }, {
    name: "Terceira",
    link: "/reviere/atlantik/azoren/terceira",
    description: "UNESCO-Weltkulturerbe Angra do Heroísmo",
    cities: ["Angra do Heroísmo", "Praia da Vitória"]
  }, {
    name: "Faial",
    link: "/reviere/atlantik/azoren/faial",
    description: "Blaue Insel mit dem berühmten Peter Café Sport",
    cities: ["Horta", "Castelo Branco"]
  }];
  const highlights = ["Spektakuläre Vulkanlandschaften", "Unberührte Natur und Kraterseen", "Authentische portugiesische Kultur", "Walbeobachtung und Delfine", "Wenig befahrene Gewässer", "Thermalbäder und heiße Quellen", "Anspruchsvolles Hochsee-Segeln"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={atlantic} alt="Azoren" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇵🇹 Azoren</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Azoren</h1>
            <p className="text-xl max-w-2xl">
              Vulkanische Perlen im Atlantik
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
                <BreadcrumbPage>Azoren</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yachtcharter Azoren: Segeln im Herzen des Atlantiks – Ein Abenteuer für Entdecker</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Die Azoren – ein Archipel von neun vulkanischen Inseln, die wie smaragdgrüne Juwelen im weiten Blau des Atlantiks liegen. Ein Yachtcharter auf den Azoren ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Expedition in ein Revier von unvergleichlicher natürlicher Schönheit, tief verwurzelter maritimer Geschichte und einer einzigartigen Atmosphäre, die jeden Segler in ihren Bann zieht. Hier, wo die Wale tanzen und die Vulkane schlafen, erwartet Sie ein Segelabenteuer, das Ihre Sinne belebt und Ihre Seele berührt.
              </p>
              <p>
                Stellen Sie sich vor, Sie setzen die Segel in einem traditionsreichen Hafen wie Horta auf Faial oder Ponta Delgada auf São Miguel, lassen die bunten Wandmalereien der Weltumsegler hinter sich und nehmen Kurs auf eine der nächsten Inseln. Jeder Tag bringt neue Horizonte: majestätische Vulkankegel, die aus dem Meer ragen, malerische Fischerdörfer, die sich an steile Klippen schmiegen, und versteckte Buchten mit kristallklarem Wasser, das zum Schwimmen und Schnorcheln einlädt. Die Azoren sind ein Mikrokosmos voller Kontraste: Von den üppig grünen Kraterseen bis zu den rauen Lavafeldern, von den pulsierenden Hafenstädten bis zu den stillen, unberührten Landschaften der westlichen Inseln.
              </p>
              <p>
                Dieses Revier im Nordatlantik ist ideal für erfahrene Skipper, die zuverlässige Ausrüstung, gute Seemannschaft und flexible Routenplanung mitbringen. Es belohnt Sie mit unvergesslichen Naturerlebnissen, der Begegnung mit Walen und Delfinen und dem Gefühl, an einem der letzten unberührten Paradiese Europas zu segeln.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Die Inselgruppen der Azoren: Ein Archipel voller Vielfalt</h3>
              <p>
                Die neun Azoreninseln gliedern sich in drei geografische Gruppen, die jeweils ihren eigenen Charme und ihre spezifischen Segelbedingungen bieten.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Die Ostgruppe: São Miguel & Santa Maria – Das Tor zum Archipel</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>São Miguel:</strong> Die größte und bevölkerungsreichste Insel, oft als „Grüne Insel" bezeichnet. Ponta Delgada ist die Hauptstadt der Azoren und der wichtigste Charterstützpunkt. Hier finden Sie eine moderne Marina, eine lebhafte Stadt mit historischen Gebäuden, botanischen Gärten und zahlreichen Restaurants. Von Ponta Delgada aus können Sie die beeindruckenden Kraterseen von Sete Cidades und Lagoa do Fogo erkunden oder die heißen Quellen von Furnas besuchen.</li>
                <li><strong>Santa Maria:</strong> Die südlichste und älteste Insel der Azoren, bekannt für ihre weißen Sandstrände und trockeneres Klima. Ein Besuch der Bucht von São Lourenço mit ihren terrassierten Weinbergen ist ein Highlight.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Die Zentralgruppe: Faial, Pico, São Jorge, Terceira & Graciosa – Das Herzstück der Segelrouten</h4>
              <p>Diese Inseln sind das Herzstück vieler Azoren-Törns und bieten die kürzesten Distanzen zwischen den Inseln.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Faial:</strong> Die Insel der Atlantiksegler. Horta auf Faial ist der legendäre Treffpunkt für Weltumsegler und Transatlantik-Segler. Die Marina ist berühmt für die bunten Wandmalereien, die Crews aus aller Welt hinterlassen. Ein Besuch im Peter Café Sport, einer Institution unter Seglern, ist Pflicht. Faial bietet zudem den beeindruckenden Vulkankrater Caldeira und den jüngsten Vulkan der Azoren, Capelinhos.</li>
                <li><strong>Pico:</strong> Die „Berginsel", dominiert vom majestätischen Vulkankegel des Ponta do Pico, dem höchsten Berg Portugals. Madalena ist der Hauptort und ein guter Hafen. Die Insel ist bekannt für ihre einzigartigen, UNESCO-geschützten Weinanbaugebiete, die in Lavasteinmauern eingebettet sind. Walbeobachtungstouren starten von hier aus.</li>
                <li><strong>São Jorge:</strong> Die „Dracheninsel", eine lange, schmale Insel, die für ihre steilen Klippen, grünen Fajãs (flache Landzungen am Fuße der Klippen) und den berühmten São Jorge Käse bekannt ist.</li>
                <li><strong>Terceira:</strong> Die „Lila Insel", Heimat von Angra do Heroísmo, einer UNESCO-Welterbestadt mit farbenfrohen Häusern und einer reichen Geschichte. Die Insel bietet zudem den Algar do Carvão, einen begehbaren Vulkanschlot.</li>
                <li><strong>Graciosa:</strong> Die „Weiße Insel", die kleinste der Zentralgruppe, bekannt für ihre Windmühlen und den schwefelhaltigen Thermalquellen.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Die Westgruppe: Flores & Corvo – Die unberührte Wildnis</h4>
              <p>Diese Inseln sind weiter entfernt und bieten ein noch ursprünglicheres Erlebnis.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Flores:</strong> Die „Blumeninsel", die ihrem Namen mit üppiger Vegetation, Wasserfällen und tiefblauen Kraterseen alle Ehre macht. Die Küsten sind spektakulär und bieten atemberaubende Natur.</li>
                <li><strong>Corvo:</strong> Die kleinste und nördlichste Insel, ein wahres Naturparadies mit einem beeindruckenden Kratersee im Inselinneren.</li>
              </ul>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Erreichbarkeit: Ihr Weg ins Atlantikparadies</h4>
                  <p className="mb-3">Die Azoren sind überraschend gut angebunden, insbesondere durch Flugverbindungen.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Per Flugzeug:</strong> Die Hauptflughäfen auf São Miguel (Ponta Delgada – PDL), Terceira (Lajes – TER) und Faial (Horta – HOR) werden von verschiedenen europäischen Städten angeflogen.
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Aus Deutschland, Österreich und der Schweiz: Es gibt Direktflüge oder bequeme Verbindungen mit Zwischenstopp in Lissabon oder Porto. TAP Air Portugal bietet regelmäßige Flüge an.</li>
                      </ul>
                    </li>
                    <li><strong>Inselhopping per Flugzeug:</strong> Zwischen den Hauptinseln gibt es regelmäßige Inlandsflüge, die das Inselhopping erleichtern, wenn Sie nicht alle Distanzen segeln möchten.</li>
                    <li><strong>Mit dem Schiff von Portugal (Festland):</strong> Für eine längere Anreise mit dem eigenen Schiff oder einer Überführung ist die Atlantikpassage von Lissabon oder Porto aus möglich, erfordert aber eine sorgfältige Planung und ausreichend Zeit.</li>
                  </ul>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Marinas & Ausgangshäfen: Exzellente Infrastruktur im Atlantik</h4>
              <p>Die Azoren verfügen über eine gute maritime Infrastruktur, die für Atlantiksegler von entscheidender Bedeutung ist. Die Marinas sind modern ausgestattet und bieten alle notwendigen Dienstleistungen.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Ponta Delgada (São Miguel):</strong> Der größte und modernste Hafen der Azoren, ideal für den Start eines Törns durch die Ost- und Zentralgruppe. Hier finden Sie eine große Auswahl an Charteryachten, Katamaranen und Motorbooten.</li>
                <li><strong>Horta (Faial):</strong> Der legendäre Seglerhafen, ein Muss für jeden Törn. Die Marina bietet eine lebendige Atmosphäre und alle Serviceleistungen für Yachten.</li>
                <li><strong>Angra do Heroísmo (Terceira):</strong> Eine charmante Marina in einer historischen Stadt, gut geeignet für Törns in der Zentralgruppe.</li>
                <li><strong>Madalena (Pico):</strong> Ein guter Ausgangspunkt, um die Insel Pico und die nahegelegenen Inseln Faial und São Jorge zu erkunden.</li>
                <li><strong>Vila do Porto (Santa Maria), Velas (São Jorge), Lajes das Flores (Flores):</strong> Kleinere, aber wichtige Häfen auf den jeweiligen Inseln, die Basen für lokale Erkundungen bieten.</li>
              </ul>
              <p>Die Flotten umfassen eine gute Auswahl an Monohulls und Katamaranen, die für die Atlantikbedingungen ausgelegt sind.</p>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mt-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Wetter & Windbedingungen: Segeln im Rhythmus des Atlantiks</h4>
                  <p className="mb-3">Das Klima auf den Azoren ist ozeanisch-subtropisch, geprägt vom Golfstrom und der Dynamik des Azorenhochs. Dies führt zu milden Temperaturen das ganze Jahr über, aber auch zu wechselhaftem Wetter.</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Vorherrschende Winde:</strong> Im Sommer (Juni bis September) dominieren oft moderate bis frische Nordost- bis Nordwest-Passatwinde oder Gradientwinde. Diese bieten hervorragende Segelbedingungen.</li>
                    <li><strong>Atlantische Einflüsse:</strong> Die Azoren liegen im Einflussbereich von Tiefdruckgebieten, die besonders außerhalb der Hochsaison für stärkere Winde, Schauerstaffeln und atlantischen Schwell sorgen können. Wetterfenster müssen sorgfältig geplant werden.</li>
                    <li><strong>Lokale Effekte:</strong> Um die Inseln herum können lokale Beschleunigungseffekte und Lee-Wirkungen auftreten, die die Windverhältnisse komplexer machen.</li>
                    <li><strong>Revier-Eignung für Erfahrungsstufen:</strong>
                      <ul className="list-disc list-inside ml-4 mt-1">
                        <li>Erfahrene Skipper: Die Azoren sind ausdrücklich für erfahrene Segler empfohlen. Ozeansegel-Praxis, Kenntnisse über Wetterfenster, Strömungen und Schwell sind von Vorteil. Das Revier erfordert gute Seemannschaft, Reffmanagement und Seegangstauglichkeit.</li>
                        <li>Crewed Charter: Für weniger erfahrene Segler oder solche, die die Azoren entspannt und sicher erleben möchten, bieten sich Crewed-Charter mit erfahrenem Skipper an. Viele Anbieter bieten auch spezialisierte Segel- und Tauchexpeditionen an.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Beste Reisezeit: Wann die Azoren am schönsten sind</h4>
              <p>Die Segelsaison auf den Azoren erstreckt sich von April bis Oktober, wobei bestimmte Monate besonders empfehlenswert sind:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Frühling (April - Mai):</strong> Die Inseln sind üppig grün, die Temperaturen angenehm mild. Die Winde können noch etwas unbeständiger sein, was das Revier für ambitionierte Segler interessant macht. Weniger touristischer Andrang.</li>
                <li><strong>Sommer (Juni - September):</strong> Dies ist die Hauptsaison. Die Temperaturen sind warm, die Winde am stabilsten und die Tage lang. Ideal für Badeurlaub, Walbeobachtung und Inselhopping. In dieser Zeit sind die Marinas belebter und eine frühzeitige Buchung ist ratsam.</li>
                <li><strong>Herbst (Oktober):</strong> Das Wasser ist noch warm, die Touristenmassen sind abgezogen, und die Preise sinken. Das Wetter kann wechselhafter werden, bietet aber oft noch sehr schöne Segeltage.</li>
              </ul>
              <p>Unsere Empfehlung für die beste Reisezeit für einen Yachtcharter auf den Azoren sind die Monate Juni bis September.</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Fazit: Ein Segelabenteuer, das in Erinnerung bleibt</h4>
              <p>
                Ein Yachtcharter auf den Azoren ist eine einzigartige Erfahrung, die alle Sinne anspricht. Es ist die Freiheit, zwischen einem Badetag in einer vulkanischen Bucht und einer Wanderung zu einem Kratersee zu wählen, zwischen einem Abendessen in einem traditionsreichen Hafen und einer stillen Nacht unter dem Sternenhimmel, umgeben vom weiten Atlantik. Die Kombination aus herausfordernden Segelbedingungen, beeindruckenden Landschaften, atlantischem Flair und einer besonderen Mischung aus Natur und Kultur macht die Azoren zu einem unvergesslichen Ziel für jeden Seefahrer.
              </p>
              <p>
                Sind Sie bereit, die Segel zu setzen und die smaragdgrünen Juwelen des Atlantiks zu entdecken?
              </p>
              <p>
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter auf den Azoren an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <CharterRequestForm>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-lg px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Jetzt Charter anfragen für die Azoren
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Regions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für die Azoren?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die vulkanischen Perlen des Atlantiks mit ihrer 
              unberührten Natur und authentischen portugiesischen Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Azoren Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Azores;