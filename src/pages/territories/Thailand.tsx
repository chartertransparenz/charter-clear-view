import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import TerritoryMap from "@/components/TerritoryMap";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
const destinationThailand = "/destination-thailand.jpg";

const Thailand = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Andamanensee, Südthailand" },
    { label: "Beste Zeit", value: "November - April" },
    { label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { label: "Besonderheit", value: "Exotische Felseninseln" }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/b8d7c49e-e173-4854-b08c-755db093505f.png"
          alt="Thailand Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇹🇭</span>
            <Badge className="bg-yellow-500 text-white">Top #8 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Thailand</h1>
          <p className="text-lg text-white/90 max-w-md">
            Phuket & Andamanensee - Exotische Segelträume in Fernost
          </p>
        </div>
        <Link 
          to="/reviere/indischer-ozean/asien" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
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
                  <Link to="/reviere/indischer-ozean">Indischer Ozean</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/indischer-ozean/asien">Asien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Thailand</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-orange-500 mb-2">
                {index === 0 && <MapPin className="w-6 h-6 mx-auto" />}
                {index === 1 && <Sun className="w-6 h-6 mx-auto" />}
                {index === 2 && <Anchor className="w-6 h-6 mx-auto" />}
                {index === 3 && <Star className="w-6 h-6 mx-auto" />}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Territory Map */}
        <div className="max-w-6xl mx-auto mb-12">
          <TerritoryMap
            region="Thailand - Andamanensee"
            center={{ lat: 7.9519, lng: 98.3381 }}
            zoom={8}
            maptype="satellite"
            className="mb-12"
          />
        </div>

        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12 space-y-8">
          {/* First Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Thailand: Segeln im Land des Lächelns – Ihr Traumtörn im Andamanischen Meer</h2>
            <p className="text-lg text-gray-600 mb-4">
              Thailand – ein Name, der Bilder von atemberaubenden Kalksteinkarsten, türkisfarbenem Wasser, goldenen Stränden und einer reichen Kultur heraufbeschwört. Ein Yachtcharter in Thailand ist weit mehr als ein gewöhnlicher Segelurlaub; es ist eine Einladung, in eine Welt einzutauchen, in der tropische Natur auf faszinierende Tempel, pulsierende Märkte und eine weltberühmte Küche trifft. Hier, wo die ikonischen Felsformationen majestätisch aus dem Meer ragen und das Wasser in unzähligen Blautönen schimmert, erwartet Sie ein Segelabenteuer, das alle Ihre Sinne berühren wird.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Stellen Sie sich vor, Sie lichten den Anker in einer modernen Marina auf Phuket, lassen die tropische Kulisse hinter sich und nehmen Kurs auf eine Inselwelt, die einem Märchen gleicht. Jeder Tag bringt neue Horizonte: malerische Buchten, die zum Schnorcheln und Schwimmen einladen, versteckte Lagunen, die nur vom Meer aus zugänglich sind, und die Möglichkeit, die einzigartige Flora und Fauna dieses Paradieses hautnah zu erleben.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Gerade in diesem Revier, das von spektakulären Kalksteinfelsen, flachen Gewässern und unzähligen Ankerbuchten geprägt ist, spielt ein Katamaran seine Stärken voll aus. Mit seinem geringen Tiefgang ermöglicht er das sichere Ansteuern von Lagunen und abgelegenen Buchten, die für Monohulls oft unerreichbar bleiben. Die Stabilität eines Katamarans sorgt für maximalen Liegekomfort, auch bei leichtem Schwell, und das großzügige Platzangebot an Deck und im Salon bietet Crew und Gepäck den nötigen Raum für einen entspannten und luxuriösen Urlaub. Ein Katamaran ist die ideale Wahl für Familien, Freunde und alle, die das Inselhopping in Thailand in vollen Zügen genießen möchten.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Die Inselwelten Thailands: Ein Paradies in zwei Meeren</h3>
            <p className="text-lg text-gray-600 mb-4">
              Thailand bietet zwei Haupt-Segelregionen, die unterschiedliche Erlebnisse versprechen. Der Schwerpunkt für Yachtcharter liegt jedoch klar auf der Andamanensee.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Die Andamanensee (Westküste): Das Herz des Yachtcharters</h4>
            <p className="text-lg text-gray-600 mb-4">
              Die Andamanensee ist das beliebteste und am besten entwickelte Charterrevier Thailands. Sie ist bekannt für ihre dramatischen Kalksteinkarste, die aus dem Meer ragen, ihre unzähligen Inseln, versteckten Lagunen (sogenannte "Hongs") und ihre farbenprächtige Unterwasserwelt.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li><strong>Phuket:</strong> Die größte Insel Thailands und das Haupttor zur Andamanensee. Hier befinden sich der internationale Flughafen und die meisten Charterbasen. Phuket bietet eine Mischung aus lebhaften Stränden, luxuriösen Resorts, aber auch ruhigen Ecken und authentischen Märkten.</li>
              <li><strong>Phang Nga Bucht:</strong> Eine der ikonischsten Landschaften Thailands. Hunderte von Kalksteinfelsen, die wie grüne Zuckerhüte aus dem smaragdgrünen Wasser ragen. Hier finden Sie die berühmte James Bond Insel (Koh Tapu) und das schwimmende Dorf Koh Panyee.</li>
              <li><strong>Krabi:</strong> Eine Provinz auf dem Festland, die für ihre spektakulären Klippen, Kletterparadiese wie Railay Beach und wunderschöne Strände bekannt ist.</li>
              <li><strong>Koh Phi Phi:</strong> Eine Inselgruppe, die für ihre atemberaubende Schönheit und ihr pulsierendes Nachtleben bekannt ist. Maya Bay, berühmt aus dem Film "The Beach", ist ein absolutes Highlight.</li>
              <li><strong>Koh Lanta:</strong> Südlich von Krabi gelegen, bietet Koh Lanta eine entspanntere Atmosphäre mit langen Sandstränden und einer charmanten Inselkultur.</li>
              <li><strong>Similan und Surin Inseln:</strong> Diese Inselgruppen, weiter westlich im Andamanischen Meer gelegen, sind streng geschützte Nationalparks und zählen zu den Top-Tauchzielen der Welt. Sie sind nur saisonal und mit speziellen Genehmigungen zugänglich.</li>
            </ul>
            
            <h4 className="text-xl font-semibold text-gray-800 mb-3">Der Golf von Thailand (Ostküste): Ein alternatives Segelrevier</h4>
            <p className="text-lg text-gray-600 mb-4">
              Der Golf von Thailand bietet ein anderes Segelerlebnis und ist besonders attraktiv, wenn die Monsunbedingungen in der Andamanensee weniger günstig sind.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Koh Samui, Koh Phangan, Koh Tao:</strong> Diese Inseln sind bekannt für ihre lebhaften Strände, Tauchschulen und Full Moon Partys.</li>
              <li><strong>Ang Thong Marine National Park:</strong> Ein spektakulärer Archipel aus 42 Inseln mit Kalksteinfelsen, Höhlen, Lagunen und unberührten Stränden.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Erreichbarkeit: Ihr direkter Weg ins Inselparadies</h3>
            <p className="text-lg text-gray-600 mb-4">
              Thailand ist hervorragend an das internationale Flugnetz angebunden, was die Anreise zu Ihrem Yachtcharter-Abenteuer einfach und bequem macht.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Per Direktflug:</strong> Der Phuket International Airport (HKT) ist der wichtigste Ankunftsort für Yachtcharter in der Andamanensee. Er wird von zahlreichen internationalen Flughäfen in Europa (z.B. Deutschland, Österreich, Schweiz, Frankreich) und Asien direkt oder mit bequemen Umsteigeverbindungen angeflogen.</li>
              <li><strong>Weitere Flughäfen:</strong> Krabi International Airport (KBV) bietet ebenfalls gute Verbindungen. Für Charter im Golf von Thailand ist der Samui International Airport (USM) der Hauptflughafen.</li>
              <li><strong>Kurze Transfers:</strong> Von den Flughäfen sind die meisten Charterbasen in der Regel nur eine kurze Taxifahrt entfernt.</li>
            </ul>
          </div>
          
          {/* Second Box */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Marinas & Ausgangshäfen: Moderne Infrastruktur im Tropenparadies</h3>
            <p className="text-lg text-gray-600 mb-4">
              Thailand verfügt über eine moderne und gut ausgebaute maritime Infrastruktur, die speziell auf die Bedürfnisse von Yachtcharter-Gästen zugeschnitten ist.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Phuket:</strong> Die Hauptinsel beherbergt die wichtigsten Charterbasen, darunter: 
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Yacht Haven Marina:</strong> Eine der größten und modernsten Marinas im Norden von Phuket, ideal gelegen für Törns in die Phang Nga Bucht.</li>
                  <li><strong>Ao Po Grand Marina:</strong> Eine weitere luxuriöse Marina mit umfassendem Service.</li>
                  <li><strong>Royal Phuket Marina:</strong> Ein exklusiver Komplex mit Marina, Residenzen und Einkaufsmöglichkeiten.</li>
                  <li><strong>Chalong Pier:</strong> Ein wichtiger Anlaufpunkt im Süden Phukets, besonders für Boote, die zu den südlichen Inseln aufbrechen.</li>
                </ul>
              </li>
              <li><strong>Koh Samui:</strong> Im Golf von Thailand gibt es ebenfalls Charterbasen, die einen direkten Start in die Inselwelt der Ostküste ermöglichen.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beliebte Törnziele: Ein Kaleidoskop tropischer Schönheit</h3>
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Thailand ist ein ständiges Inselhopping-Abenteuer, bei dem jeder Tag neue Höhepunkte bereithält.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Phang Nga Bucht:</strong> Segeln Sie zwischen den ikonischen Kalksteinkarsten hindurch, erkunden Sie versteckte "Hongs" (Lagunen, die nur durch schmale Höhlen zugänglich sind) mit dem Dingi oder Kajak, und besuchen Sie die berühmte James Bond Insel (Koh Tapu) und das schwimmende Dorf Koh Panyee. Katamarane sind hier dank ihres geringen Tiefgangs und ihrer Manövrierfähigkeit unschlagbar.</li>
              <li><strong>Krabi:</strong> Ankern Sie vor den spektakulären Kalksteinfelsen von Railay Beach, einem Paradies für Kletterer und Badegäste. Besuchen Sie die belebte Stadt Ao Nang oder die ruhige Koh Hong mit ihrer atemberaubenden Lagune.</li>
              <li><strong>Koh Phi Phi:</strong> Diese Inselgruppe ist ein Muss. Die Maya Bay (oft über die Loh Samah Bay erreichbar) ist ein Naturwunder, dessen Zugang jedoch streng reglementiert ist, um die Natur zu schützen. Genießen Sie Schnorcheln und Schwimmen in den umliegenden Buchten und erleben Sie das lebhafte Treiben auf Phi Phi Don.</li>
              <li><strong>Koh Lanta:</strong> Entspannen Sie an den langen Sandstränden, erkunden Sie die Höhlen und genießen Sie die entspannte Atmosphäre.</li>
              <li><strong>Similan und Surin Inseln:</strong> Für längere Törns und Tauchbegeisterte sind diese Nationalparks ein absolutes Highlight. Sie bieten eine unberührte Unterwasserwelt und sind nur saisonal zugänglich.</li>
              <li><strong>Ang Thong Marine National Park (Golf von Thailand):</strong> Ein weiteres Naturwunder mit spektakulären Inseln, Höhlen und dem smaragdgrünen "Emerald Lake" (Thale Nai).</li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ihr 7-Tage-Traumtörn in der Andamanensee (ab Phuket)</h3>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 1: Ankunft & Inselzauber</h5>
                <p className="text-sm text-muted-foreground">Nach dem Check-in auf Phuket setzen Sie die Segel für einen kurzen Schlag zu einer ruhigen Bucht nahe der Phang Nga Bucht. Genießen Sie das erste Bad im tropischen Wasser und lassen Sie den Ankerabend ausklingen.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 2: Phang Nga Bay – Die Welt der Karste</h5>
                <p className="text-sm text-muted-foreground">Tauchen Sie ein in die ikonische Phang Nga Bucht. Erkunden Sie mit dem Dingi oder Kajak die versteckten "Hongs" (Lagunen) und besuchen Sie die berühmte James Bond Insel (Koh Tapu) und das schwimmende Dorf Koh Panyee.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 3: Kurs auf Krabi – Klippen und Strände</h5>
                <p className="text-sm text-muted-foreground">Segeln Sie weiter nach Krabi. Ankern Sie vor den spektakulären Felsen von Railay Beach, einem Paradies für Kletterer und Badegäste. Genießen Sie den Sonnenuntergang vor dieser atemberaubenden Kulisse.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 4: Phi Phi Islands – Das Juwel der Andamanensee</h5>
                <p className="text-sm text-muted-foreground">Ein kurzer Schlag bringt Sie zu den weltberühmten Phi Phi Inseln. Erkunden Sie die Maya Bay (unter Beachtung der Zugangsregeln), schnorcheln Sie in den umliegenden Buchten und erleben Sie das lebhafte Treiben auf Phi Phi Don.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 5: Entspannung und südliche Inseln</h5>
                <p className="text-sm text-muted-foreground">Genießen Sie einen entspannten Tag auf See. Segeln Sie zu einer der südlicheren Inseln wie Koh Lanta oder Koh Bida Nok/Nai für weitere Schnorchel- und Bademöglichkeiten in ruhiger Atmosphäre.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 6: Rückfahrt und Abschiedsbucht</h5>
                <p className="text-sm text-muted-foreground">Beginnen Sie die Rückreise in Richtung Phuket. Legen Sie einen letzten Stopp an einer schönen, ruhigen Bucht an der Ostküste Phukets oder einer nahegelegenen Insel ein, um den letzten Abend an Bord zu genießen.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold">Tag 7: Abschied vom Paradies</h5>
                <p className="text-sm text-muted-foreground">Nach einem letzten Frühstück an Bord segeln Sie zurück zu Ihrer Charterbasis auf Phuket und treten die Heimreise an – erfüllt von unvergesslichen Eindrücken aus dem Land des Lächelns.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Wetter & Windbedingungen: Segeln im tropischen Klima</h3>
            <p className="text-lg text-gray-600 mb-4">
              Thailand liegt in den Tropen und ist von einem Monsunklima geprägt, das zwei Hauptjahreszeiten bestimmt:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
              <li><strong>Nordostmonsun (November bis April):</strong> Dies ist die trockene und sonnige Jahreszeit und die beste Reisezeit für die Andamanensee. Die Winde wehen meist aus Nordost mit 10-20 Knoten, das Meer ist ruhig und die Sicht unter Wasser ist hervorragend. Ideal für entspanntes Segeln und Inselhopping.</li>
              <li><strong>Südwestmonsun (Mai bis Oktober):</strong> Dies ist die Regenzeit, die jedoch oft durch kurze, intensive Schauer gekennzeichnet ist, gefolgt von Sonnenschein. Die Winde wehen aus Südwest und können in dieser Zeit stärker sein (15-25 Knoten), was zu rauerem Seegang führen kann. Für die Andamanensee ist diese Zeit weniger ideal, während der Golf von Thailand (Koh Samui) dann oft ruhigere Bedingungen bietet.</li>
            </ul>
            
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700"><strong>Wichtiger Sicherheitshinweis:</strong> Obwohl es in Thailand kein strenges gesetzliches Nachtfahrverbot wie auf den Seychellen gibt, wird dringend davon abgeraten, nachts zu segeln. Dies liegt an der hohen Anzahl unbeleuchteter Fischerboote, Fischernetze und treibender Hindernisse, die eine erhebliche Gefahr darstellen. Planen Sie Ihre Etappen so, dass Sie Ihren Ankerplatz immer bei Tageslicht erreichen.</p>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Beste Reisezeit: Wann Ihr Thailand-Traum wahr wird</h3>
            <p className="text-lg text-gray-600 mb-4">
              Die beste Reisezeit für einen Yachtcharter in der Andamanensee (Phuket, Krabi, Phi Phi) ist von November bis April. In diesen Monaten sind die Wetterbedingungen ideal mit viel Sonne, moderaten Winden und ruhigem Meer.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Für den Golf von Thailand (Koh Samui, Ang Thong) sind die Monate Juli bis September oft eine gute Wahl, da die Bedingungen dort ruhiger sein können, wenn in der Andamanensee der Südwestmonsun herrscht.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fazit: Ein Katamaran-Paradies im Land des Lächelns</h3>
            <p className="text-lg text-gray-600 mb-4">
              Ein Yachtcharter in Thailand ist eine unvergleichliche Erfahrung, die alle Sinne anspricht. Es ist die einzigartige Kombination aus atemberaubender Natur, tiefgründiger Kultur, abwechslungsreichen Segelbedingungen und einer entspannten Atmosphäre. Thailand ist ein Revier, das zum Entschleunigen einlädt, zum Eintauchen in eine Welt voller natürlicher Wunder und herzlicher Gastfreundschaft.
            </p>
            <p className="text-lg text-gray-600">
              Insbesondere die Wahl eines Katamarans maximiert Ihr Thailand-Erlebnis. Sein geringer Tiefgang, die Stabilität, das großzügige Platzangebot und der hohe Komfort machen ihn zum idealen Begleiter für Crews und Familien, die die verborgenen Schätze dieser Inselwelt entdecken möchten. Erleben Sie Thailand vom Wasser aus – es wird ein Abenteuer, das Sie nie vergessen werden.
            </p>
          </div>
        </div>


        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für Fernost-Abenteuer?
            </h3>
            <p className="mb-6 text-gray-700">
              Erleben Sie exotisches Segeln zwischen Kalksteinfelsen und 
              entdecken Sie die versteckten Schätze der Andamanensee.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Thailand-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Thailand;