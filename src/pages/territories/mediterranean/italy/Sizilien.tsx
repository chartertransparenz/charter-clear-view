import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight, Landmark, Mountain, Waves, ChefHat, Compass, Building2, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import TerritoryMap from "@/components/TerritoryMap";
const Sizilien = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Größte Mittelmeerinsel"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Vielfältige Küsten"
  }];
  const cities = ["Capo d'Orlando", "Marsala", "Palermo", "Portorosa", "Sant'Agata di Militello", "Trapani"];
  const sizilienHighlights = [
    { icon: Landmark, title: "Valle dei Templi", description: "Antike griechische Tempel in Agrigent" },
    { icon: Mountain, title: "Ätna & Stromboli", description: "Aktive Vulkane mit spektakulären Landschaften" },
    { icon: Waves, title: "Äolische Inseln", description: "7 einzigartige Vulkaninseln vor der Nordküste" },
    { icon: ChefHat, title: "Sizilianische Küche", description: "Arancini, Cannoli und frische Meeresfrüchte" },
    { icon: Compass, title: "Ganzjähriges Segeln", description: "Mildes Klima ermöglicht Segeln das ganze Jahr" },
    { icon: Building2, title: "Barocke Städte", description: "Noto, Modica und Ragusa - UNESCO Welterbe" },
    { icon: Shield, title: "Geschützte Buchten", description: "Sichere Ankerplätze rund um die gesamte Insel" },
    { icon: Anchor, title: "Vielfältige Häfen", description: "Von Palermo bis Catania - exzellente Marina-Infrastruktur" }
  ];
  return <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/b7d7c0a7-0a06-469c-b6e5-08e0ff93bd91.png" alt="Sizilien Küste mit historischen Mauern und türkisfarbenem Meer" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sizilien</h1>
            <p className="text-xl max-w-2xl">
              Größte Insel des Mittelmeers
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/italien" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Italien
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/italien">Italien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Sizilien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Territory Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelrevier Sizilien & Liparische Inseln</h2>
          <TerritoryMap 
            region="Sizilien"
            center={{ lat: 38.2, lng: 14.8 }}
            zoom={8}
            maptype="satellite"
            className="shadow-lg"
          />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Yachtcharter Sizilien: Segeln zwischen Vulkanen, Mythen und antiker Geschichte</h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Setzen Sie die Segel für eine Reise ins Herz des Mittelmeers, zu einer Insel, die wie keine andere von Mythen, Geschichte und den Kräften der Natur geprägt ist. Ein Yachtcharter auf Sizilien ist eine Expedition für die Sinne: der Duft von Zitronenblüten in der Luft, das nächtliche Feuerspektakel des Stromboli am Horizont und der Geschmack einer Küche, die das Erbe unzähliger Kulturen in sich vereint. Sizilien ist kein gewöhnliches Segelrevier – es ist eine lebendige Bühne der Geschichte.
            </p>
            
            <p>
              Lichten Sie den Anker in einer der erstklassigen Marinas und nehmen Sie Kurs auf Abenteuer, die Sie zu den sieben vulkanischen Wundern der Liparischen Inseln oder zu den kristallklaren Gewässern der Ägadischen Inseln führen. Jeder Tag auf See enthüllt eine neue Facette dieser faszinierenden Insel: antike griechische Tempel, die majestätisch über der Küste thronen, normannische Kathedralen von atemberaubender Schönheit und pulsierende Märkte, auf denen das wahre sizilianische Leben pulsiert.
            </p>
            
            <p>
              Sizilien bietet zwei weltberühmte, aber grundverschiedene Segelreviere. Ob Sie das spektakuläre Inselhopping im vulkanischen Norden bevorzugen oder die ruhigeren, geschichtsträchtigen Gewässer im Westen erkunden möchten – ein Törn rund um die größte Insel des Mittelmeers ist ein unvergessliches Erlebnis für jeden Skipper, vom ambitionierten Seemann bis zum genussvollen Entdecker.
            </p>
          </div>

          {/* Für wen das Revier geeignet ist */}
          <div className="border border-gray-300 p-6 rounded-lg mb-8 mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Für wen das Revier geeignet ist & Schwierigkeitsgrad</h3>
            <p className="text-gray-600">
              Das Revier rund um die Liparischen Inseln eignet sich hervorragend für Einsteiger und Familien, die kurze Etappen, gut geschützte Ankerbuchten und lebendige Hafenorte schätzen. Genießer finden auf nahezu jeder Insel ausgezeichnete Trattorien, lokale Weine (z. B. Malvasia auf Salina) und authentische Dörfer. Für sportlich ambitionierte Skipper bietet das Frühjahr und der Herbst oft frischere Winde und mehr Taktik an den Kaps. Der Schwierigkeitsgrad ist in der Hauptsaison überwiegend moderat; Aufmerksamkeit erfordern thermische Winde, gelegentlicher Schwell und der Scirocco. Mit umsichtigem Wetterbriefing, frühzeitiger Platzreservierung und einem Plan B für die Nacht segeln Sie entspannt und sicher.
            </p>
          </div>

          {/* Der vulkanische Norden */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Der vulkanische Norden: Törn zu den Liparischen (Äolischen) Inseln</h3>
            <p className="text-gray-600 mb-6">
              Dies ist zweifellos eines der spektakulärsten Segelreviere Europas. Das Tor zu diesem vulkanischen Paradies ist die Nordküste Siziliens, die eine Reihe von erstklassigen Charterbasen beherbergt, die perfekt als Ausgangspunkt für Ihren Törn zu den Liparischen Inseln positioniert sind.
            </p>
            
            <ul className="space-y-4 text-gray-600 mb-6">
              <li>
                <strong>Marina di Portorosa:</strong> Die wohl bekannteste und größte Charterbasis Siziliens. Portorosa ist ein speziell für den Yachtsport konzipierter Hafenkomplex, der keine Wünsche offenlässt. Mit umfassenden Serviceeinrichtungen, Restaurants und Supermärkten direkt in der Marina können Sie Ihren Törn perfekt vorbereiten. Die Lage im Herzen des Golfs von Patti macht Portorosa zum idealen und kürzesten Sprungbrett nach Vulcano und Lipari.
              </li>
              <li>
                <strong>Capo d'Orlando:</strong> Eine fantastische und hochmoderne Alternative ist die Marina von Capo d'Orlando. Diese neue Anlage besticht durch ihre exzellente Infrastruktur und einen atemberaubenden, direkten Blick auf die Liparischen Inseln, die am Horizont zum Greifen nah erscheinen. Sie ist die perfekte Wahl für Crews, die modernen Komfort und eine schnelle Anbindung an das Archipel schätzen.
              </li>
              <li>
                <strong>Sant'Agata di Militello:</strong> Für Skipper, die eine authentischere sizilianische Erfahrung suchen, ist der Hafen von Sant'Agata di Militello eine exzellente Wahl. Statt einer reinen Touristenmarina starten Sie hier aus einem lebhaften Küstenstädtchen mit einer tiefen Verbindung zum Meer. Die Proviantierung auf dem lokalen Markt wird hier zum kulturellen Erlebnis, bevor Sie Kurs auf die Inseln nehmen.
              </li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              Von diesen Basen ist es nur ein kurzer Schlag zum Archipel der sieben einzigartigen Inseln, die von der UNESCO zum Weltnaturerbe erklärt wurden:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-6">
              <li><strong>Stromboli:</strong> Erleben Sie das nächtliche Feuerspektakel des aktivsten Vulkans Europas von Ihrer Yacht aus.</li>
              <li><strong>Panarea:</strong> Entdecken Sie das mondäne Flair, die weißen Dörfer und die exklusiven Ankerbuchten.</li>
              <li><strong>Vulcano:</strong> Wandern Sie zum rauchenden Krater und entspannen Sie in den natürlichen Schwefel-Fango-Bädern.</li>
              <li><strong>Lipari:</strong> Das pulsierende Zentrum des Archipels mit seiner charmanten Altstadt und dem archäologischen Museum.</li>
              <li><strong>Salina:</strong> Die grüne Oase, berühmt für Kapern und den süßen Malvasia-Wein.</li>
              <li><strong>Filicudi & Alicudi:</strong> Die wilden und abgeschiedenen Inseln für alle, die Ruhe und unberührte Natur suchen.</li>
            </ul>
          </div>

          {/* Törnempfehlung */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Törnempfehlung: 7 Tage ab Marina di Portorosa</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 1 – Portorosa → Vulcano</h5>
                <p className="text-gray-600">Check-in, Proviantierung und Sicherheitsbriefing. Nachmittags erster Schlag nach Vulcano. Baden in der warmen Lagune, Sundowner an Bord, Nacht in der Marina oder an ausgewiesenen Bojen/Ankerplätzen je nach Bedingungen.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 2 – Vulcano → Lipari</h5>
                <p className="text-gray-600">Vormittags Kraterwanderung oder Küstenerkundung per Dinghy. Weiter nach Lipari, Bummel durch die Altstadt und Besuch des Castello. Abends lokale Küche in der Marina oder in der Nähe des Ankerplatzes.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 3 – Lipari → Salina</h5>
                <p className="text-gray-600">Gemütlicher Start, Badestopp an einer der türkisfarbenen Buchten zwischen Lipari und Salina. Einlaufen nach Santa Marina Salina oder alternativ Pollara/Lingua je nach Wetter. Malvasia-Verkostung zum Sonnenuntergang.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 4 – Salina → Panarea</h5>
                <p className="text-gray-600">Früh los, um Liegeplätze oder Bojen in Panarea zu sichern. Nachmittags Ankerbucht Cala Junco oder Bojenfeld vor San Pietro (Regelungen beachten). Abends mondänes Ambiente im Ort.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 5 – Panarea → Stromboli (mit nächtlichem Vulkanschauspiel)</h5>
                <p className="text-gray-600">Weiterfahrt nach Stromboli, Badestopp unterwegs. Gegen Abend mit sicherem Abstand zur Sciara del Fuoco, um die Eruptionen vom Wasser aus zu beobachten. Übernachtung je nach Bedingungen im Hafen oder an genehmigten Bojen.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 6 – Stromboli → Rückweg via Lipari/Vulcano</h5>
                <p className="text-gray-600">Entspannter Schlag zurück ins Herz des Archipels. Zeit für letzte Einkäufe, Strandpause oder Thermalbäder. Nacht in der Marina oder geschützter Ankerbucht.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-gray-800">Tag 7 – Zurück nach Portorosa</h5>
                <p className="text-gray-600">Früher Start für einen gelassenen Rückweg. Tanken, Auscheck und je nach Flug/Transfer gemütlicher Ausklang an der Promenade.</p>
              </div>
            </div>
          </div>

          {/* Der historische Westen */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Der historische Westen: Die Ägadischen Inseln und die Küste von Palermo</h3>
            <p className="text-gray-600 mb-6">
              Der Westen Siziliens erzählt eine andere Geschichte – eine von Phöniziern, Römern, Arabern und der legendären Tonnara. Unsere Charterbasen hier sind perfekt positioniert, um diese kulturell reiche und landschaftlich atemberaubende Region zu erkunden.
            </p>
            
            <ul className="space-y-4 text-gray-600 mb-6">
              <li>
                <strong>Palermo:</strong> Als pulsierende Hauptstadt Siziliens ist Palermo eine Charterbasis wie keine andere. Die modernen Marinas der Stadt bieten einen sicheren Hafen, von dem aus Sie die UNESCO-Welterbestätten, die lebhaften Märkte und die einzigartige Street-Food-Kultur erkunden können, bevor Sie die Segel setzen. Die Nähe zum internationalen Flughafen macht Palermo zu einem außergewöhnlich bequemen Ausgangspunkt für Ihren Törn in den Westen.
              </li>
              <li>
                <strong>Trapani:</strong> Die historische Hafenstadt Trapani ist das unbestrittene Tor zu den Ägadischen Inseln. Von ihrem gut geschützten Hafen aus ist es der kürzeste Schlag nach Favignana, Levanzo und Marettimo. Die Stadt selbst, mit ihrer eleganten barocken Altstadt und den berühmten Salinen, die in der Abendsonne rosa leuchten, ist allein schon einen Besuch wert.
              </li>
              <li>
                <strong>Marsala:</strong> Weiter südlich liegt Marsala, eine Stadt, die weltweit für ihren Likörwein berühmt ist. Ein Charter von Marsala aus bietet eine einzigartige Perspektive und verbindet das Segeln in den paradiesischen Gewässern der Ägadischen Inseln mit einer Reise in die reiche kulinarische Geschichte Siziliens. Das nahegelegene Naturschutzgebiet Stagnone mit seiner flachen Lagune und den historischen Windmühlen bietet eine einzigartige Kulisse.
              </li>
            </ul>
            
            <p className="text-gray-600 mb-4">
              Von diesen Basen aus erreichen Sie die Highlights des Westens:
            </p>
            
            <ul className="space-y-2 text-gray-600 mb-6">
              <li><strong>Die Ägadischen Inseln:</strong> Ein Paradies für Schwimmer und Schnorchler mit Buchten wie der Cala Rossa und Cala Azzurra auf Favignana.</li>
              <li><strong>San Vito Lo Capo & das Zingaro Naturreservat:</strong> Einer der schönsten Strände Italiens und ein unberührtes Küstenschutzgebiet.</li>
              <li><strong>Cefalù:</strong> Das malerische Städtchen mit seinem imposanten Normannendom direkt am Meer.</li>
            </ul>
          </div>

          {/* Wind, Wetter und die sizilianische See */}
          <div className="border border-gray-300 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Wind, Wetter und die sizilianische See</h3>
            <p className="text-gray-600 mb-4">
              Das Klima ist mediterran, aber die Winde können hier ihren eigenen Charakter haben.
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li><strong>Wind:</strong> Neben dem aus Nordwest kommenden Maestrale (Mistral) spielt hier der Scirocco eine wichtige Rolle. Dieser heiße Wind aus dem Süden kann feinen Saharasand mit sich bringen, die Sicht trüben und eine unangenehme Dünung aufbauen. Eine sorgfältige Beobachtung des Wetterberichts ist unerlässlich. Im Sommer sorgen stabile Hochdrucklagen oft für moderate thermische Winde.</li>
              <li><strong>Beste Reisezeit:</strong> Die idealen Monate für einen Segeltörn sind Mai, Juni und September. Das Wetter ist warm und sonnig, aber nicht unerträglich heiß. Die Inseln sind belebt, aber nicht überfüllt. Im Juli und August ist Hochsaison mit sehr hohen Temperaturen und vollen Häfen, besonders auf den Liparischen Inseln.</li>
            </ul>
          </div>

          {/* Fazit */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fazit: Sizilien – Eine Segelreise durch Zeit und Elemente</h3>
            <p className="text-gray-600">
              Ein Yachtcharter auf Sizilien ist mehr als nur ein Urlaub. Es ist eine intensive Erfahrung, die Sie tief in die Kultur, Geschichte und Natur des Mittelmeers eintauchen lässt. Es ist die einzigartige Möglichkeit, an einem Tag in einer Bucht unter einem aktiven Vulkan zu ankern und am nächsten Tag vor den Ruinen eines 2.500 Jahre alten griechischen Tempels zu segeln. Die Kombination aus spektakulärer Natur, tiefgründiger Geschichte und einer der besten Küchen der Welt macht Sizilien zu einem unvergesslichen Ziel für jeden Seefahrer.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sind Sie bereit, das Feuer Siziliens zu spüren und auf den Spuren antiker Seefahrer zu segeln?
            </h3>
            <p className="text-gray-600 mb-6">
              Kontaktieren Sie uns für Ihr persönliches Angebot. Wir helfen Ihnen, die perfekte Yacht für Ihre Entdeckungsreise durch dieses magische Revier zu finden.
            </p>
            <CharterRequestForm>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Persönliches Angebot anfordern
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Die Highlights auf Sizilien</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sizilienHighlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für sizilianisches Abenteuer?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die größte Insel des Mittelmeers mit ihrer einzigartigen 
              Mischung aus Kultur, Geschichte und spektakulären Segelrevieren.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Sizilien;