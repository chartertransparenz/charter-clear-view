import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Toskana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Westliches Italien" },
    { icon: Calendar, label: "Beste Zeit", value: "Mai-September" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Besonderheit", value: "Insel Elba" }
  ];

  const cities = [
    "Castiglioncello",
    "Elba"
  ];

  const highlights = [
    "Traumhafte Insel Elba",
    "Toskanische Küstenlandschaft",
    "Kulturreiche Küstenstädte",
    "Exzellente toskanische Küche",
    "Wunderschöne Weinregion",
    "Geschützte Naturparks",
    "Kristallklares Wasser",
    "Kurze Entfernungen",
    "Perfekt für Wochenendtörns"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img 
          src="/lovable-uploads/6d28d345-9301-486e-865a-9cd75aa0a966.png" 
          alt="Traumhafte Bucht in der Toskana mit türkisfarbenem Wasser und Segelbooten" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Toskana</h1>
            <p className="text-xl max-w-2xl">
              Kultur und Natur an der toskanischen Küste
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer/italien" 
          className="absolute top-6 left-6"
        >
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
                <BreadcrumbPage>Toskana</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Toskana: Segeln zwischen Zypressenhügeln und der Insel Elba</h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  Erleben Sie die Toskana von ihrer schönsten Seite – vom Deck einer Yacht aus. Während das Landesinnere mit seinen Renaissance-Städten und sanften Hügeln weltberühmt ist, wartet entlang der Küste ein Segelrevier von unvergleichlicher Schönheit auf Sie: der Toskanische Archipel. Ein Yachtcharter in der Toskana ist die perfekte Symbiose aus italienischer Kultur, entspanntem Inselleben und erstklassigen Segelbedingungen.
                </p>
                
                <p>
                  Lichten Sie den Anker in einer der modernen Marinas am Festland und nehmen Sie Kurs auf ein Abenteuer, das Sie zu Napoleons Exilinsel Elba, zur wilden Schönheit von Capraia und zu den versteckten Juwelen wie Giglio und Giannutri führt. Stellen Sie sich vor, Sie segeln tagsüber durch azurblaues Wasser, ankern in abgeschiedenen Buchten zum Schwimmen und legen abends in einem malerischen Hafen an, um die weltberühmte toskanische Küche bei einem Glas Chianti zu genießen.
                </p>
                
                <p>
                  Das Revier ist ein Paradies für Segler jeder Erfahrungsstufe. Die moderaten Distanzen zwischen den Inseln, die Vielzahl an geschützten Ankerplätzen und die hervorragende maritime Infrastruktur machen die Toskana zum idealen Ziel für Familien, Genuss-Segler und alle, die zum ersten Mal das Mittelmeer unter Segeln erkunden. Gleichzeitig bieten die vorherrschenden Winde und die abwechslungsreiche Topografie auch für den erfahrenen Skipper genügend navigatorische Herausforderungen.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Die Festlandküste: Ihr perfekter Ausgangspunkt ins Inselparadies</h3>
                
                <p>
                  Die toskanische Küste selbst ist mehr als nur ein Starthafen. Sie ist geprägt von langen Sandstränden, duftenden Pinienwäldern und der berühmten Landschaft der Maremma. Unsere Charterbasen sind strategisch günstig gelegen und bieten modernsten Komfort für einen reibungslosen Start in Ihren Törn.
                </p>
                
                <ul className="space-y-4">
                  <li>
                    <strong>Marina di Scarlino & Punta Ala:</strong> Eingebettet im geschützten Golf von Follonica, gelten diese beiden Marinas als die modernsten und am besten ausgestatteten der Region. Sie bieten eine hervorragende Infrastruktur mit sicheren Liegeplätzen, professionellen Servicebetrieben, Restaurants und Einkaufsmöglichkeiten. Von hier aus ist der Schlag nach Elba kurz, und die nördlichen Inseln des Archipels sind ebenfalls bequem erreichbar. Die Lage ist ideal, um den Törn mit einem Besuch der mittelalterlichen Dörfer im Hinterland zu verbinden.
                  </li>
                  <li>
                    <strong>Salivoli (Piombino):</strong> Diese Marina ist das buchstäbliche Sprungbrett nach Elba. Direkt gegenüber dem Kanal von Piombino gelegen, bietet Salivoli die kürzeste Verbindung zur Inselhauptstadt Portoferraio. Wer keine Zeit verlieren und direkt ins Herz des Archipels segeln möchte, findet hier den optimalen Ausgangspunkt. Die Marina ist modern und bietet alle notwendigen Dienstleistungen für einen entspannten Charterbeginn.
                  </li>
                  <li>
                    <strong>Livorno:</strong> Als eine der größten Hafenstädte Italiens bietet Livorno eine andere Atmosphäre. Von hier aus können Sie längere Törns planen, die Sie nicht nur in den Toskanischen Archipel, sondern auch weiter nach Norden in Richtung Ligurien oder nach Korsika führen.
                  </li>
                </ul>
                
                <p>
                  An all unseren Basen erwartet Sie eine breite Auswahl an erstklassig gewarteten Segelyachten und Katamaranen. Ob Sie eine wendige Yacht für sportliches Segeln oder einen geräumigen Katamaran für maximalen Komfort bevorzugen – wir haben das passende Schiff für Ihre Crew.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Die Perlen des Tyrrhenischen Meeres: Der Toskanische Archipel</h3>
                
                <p>
                  Jede Insel dieses Nationalparks hat ihren eigenen, unverwechselbaren Charakter. Ein Törn hier ist wie eine Reise durch sieben verschiedene Welten.
                </p>

                <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">Elba – Die Königin des Archipels</h4>
                
                <p>
                  Mit über 147 Kilometern Küstenlinie ist Elba ein Mikrokosmos für sich und das unbestrittene Zentrum jedes Toskana-Törns. Die Insel begeistert durch ihre Vielfalt: Der Westen ist rau und gebirgig, der Osten sanfter und grüner, während der Süden mit traumhaften Sandbuchten lockt.
                </p>
                
                <ul className="space-y-2">
                  <li><strong>Portoferraio:</strong> Die geschichtsträchtige Hauptstadt empfängt Sie mit einer imposanten Festungsanlage und einem der sichersten Naturhäfen des Mittelmeers. Ein Bummel durch die Altstadt auf den Spuren Napoleons ist ein Muss.</li>
                  <li><strong>Porto Azzurro & Capoliveri:</strong> An der Ostküste gelegen, bezaubert Porto Azzurro mit seinem lebhaften Hafenplatz und den engen Gassen. Hoch darüber thront das Bergdorf Capoliveri mit einem atemberaubenden Panoramablick.</li>
                  <li><strong>Marciana Marina & die Westküste:</strong> Dieser elegante Hafenort an der Nordwestküste ist der ideale Ausgangspunkt, um die dramatischsten Klippen und die schönsten Sonnenuntergänge der Insel zu erleben.</li>
                  <li><strong>Die südlichen Buchten:</strong> Buchten wie Fetovaia, Cavoli oder der Golfo della Lacona bieten feinen Sand und karibisch anmutendes Wasser – perfekte Ankerplätze für einen ausgedehnten Badetag.</li>
                </ul>

                <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">Capraia – Die wilde Vulkaninsel</h4>
                
                <p>
                  Etwa 30 Seemeilen nordwestlich von Elba liegt Capraia, ein Paradies für Naturliebhaber und Ruhesuchende. Die ehemalige Gefängnisinsel ist vulkanischen Ursprungs, was sich in ihrer rauen, zerklüfteten Küste und den rötlichen Felsen widerspiegelt. Der einzige kleine Hafen ist oft schnell belegt, was den exklusiven Charakter der Insel unterstreicht. Ankern Sie in der Cala Rossa, einer spektakulären Bucht, deren Felswände in allen Rottönen leuchten – ein unvergessliches Erlebnis.
                </p>

                <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">Giglio – Die malerische Schönheit</h4>
                
                <p>
                  Südlich von Elba liegt die Insel Giglio. Ihr Hafen, Giglio Porto, ist ein Postkartenmotiv mit seinen bunten Häusern, die sich um das Hafenbecken drängen. Ein Bus bringt Sie hinauf nach Giglio Castello, einem vollständig erhaltenen mittelalterlichen Dorf, das von einer massiven Stadtmauer umgeben ist. Die Küste bietet kristallklares Wasser, das ideal zum Schnorcheln und Tauchen ist.
                </p>

                <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">Giannutri – Das stille Refugium</h4>
                
                <p>
                  Die südlichste und kleinste Insel des Archipels ist Giannutri. Die sichelförmige Insel ist fast vollständig ein Naturreservat, das Ankern ist nur in ausgewiesenen Bereichen erlaubt. Ein Landgang lohnt sich, um die Ruinen einer römischen Villa zu erkunden und die absolute Stille zu genießen.
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Routenvorschlag für eine Woche (Beispiel ab Salivoli)</h3>
                
                <ul className="space-y-2">
                  <li><strong>Tag 1:</strong> Check-in in Salivoli und kurzer Schlag nach Portoferraio.</li>
                  <li><strong>Tag 2:</strong> Segeln entlang der Nordküste Elbas nach Marciana Marina.</li>
                  <li><strong>Tag 3:</strong> Törn zur wilden Insel Capraia.</li>
                  <li><strong>Tag 4:</strong> Zurück nach Elba, Ankern in einer der Südbuchten wie Fetovaia.</li>
                  <li><strong>Tag 5:</strong> Erkundung der Ostküste mit Stopp in Porto Azzurro.</li>
                  <li><strong>Tag 6:</strong> Segeln zur malerischen Insel Giglio.</li>
                  <li><strong>Tag 7:</strong> Entspannter Rückschlag zum Festland nach Salivoli.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Wind, Wetter und die beste Reisezeit</h3>
                
                <p>
                  Das Segelrevier der Toskana ist für seine generell moderaten und gutmütigen Wetterbedingungen bekannt.
                </p>
                
                <ul className="space-y-2">
                  <li><strong>Wind:</strong> Im Sommer dominieren thermische Winde, die tagsüber für eine zuverlässige Brise (3-4 Bft) sorgen und nachts abflauen. Die vorherrschenden überregionalen Winde sind der Maestrale (Mistral) aus Nordwest und der Scirocco aus Südost, die jedoch seltener und meist schwächer auftreten als in anderen Mittelmeerrevieren wie Sardinien.</li>
                  <li><strong>Beste Reisezeit:</strong> Die idealen Monate für einen Segeltörn sind Mai, Juni, Juli und September. Das Wetter ist stabil und sonnig, die Temperaturen sind angenehm warm, und das Wasser lädt zum Baden ein. Die Häfen und Buchten sind belebt, aber nicht überfüllt. Der Hochsommer im Juli und August ist ebenfalls sehr beliebt, aber es ist deutlich heißer und voller.</li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fazit: Ihr unvergesslicher Törn in der Toskana</h3>
                
                <p>
                  Ein Yachtcharter in der Toskana ist eine einzigartige Erfahrung, die das Beste Italiens vereint: Sie kombinieren erstklassiges Segeln mit kulturellen Entdeckungen, kulinarischen Höhepunkten und purer Natur. Die einfache Erreichbarkeit, die sichere Navigation und die Vielfalt der Inseln machen das Revier zur perfekten Wahl für jeden Segler.
                </p>
                
                <p>
                  Sind Sie bereit, die Segel zu setzen und den Zauber des Toskanischen Archipels zu entdecken?
                </p>
                
                <p>
                  Kontaktieren Sie uns noch heute für ein persönliches und unverbindliches Angebot. Unser Team aus erfahrenen Revierkennern hilft Ihnen dabei, die perfekte Yacht für Ihren Traumurlaub zu finden.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Wichtige Häfen & Ziele</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {cities.map((city, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800">{city}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Toskana?</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="font-medium text-gray-800">{highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für toskanisches Flair auf dem Wasser?
            </h3>
            <p className="mb-6 text-blue-100">
              Kombinieren Sie die berühmte toskanische Kultur mit entspanntem Segeln 
              an einer der schönsten Küsten Italiens.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toskana;