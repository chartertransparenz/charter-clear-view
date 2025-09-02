import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves, Star, ChevronDown } from "lucide-react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [
    { 
      name: "Britische Jungferninseln (BVI)", 
      description: "Das weltweit beliebteste Charterrevier",
      link: "/reviere/karibik/britische-jungferninseln",
      areas: ["Tortola", "Virgin Gorda", "Jost Van Dyke", "Anegada"]
    },
    { 
      name: "US Virgin Islands", 
      description: "Amerikaniches Karibik-Territorium",
      link: "/reviere/karibik/us-jungferninseln",
      areas: ["St. Thomas", "St. John", "St. Croix"]
    },
    { 
      name: "Leeward Inseln", 
      description: "Antigua, St. Martin, Guadeloupe",
      link: "/reviere/karibik/leeward-inseln",
      areas: ["Antigua", "St. Martin", "Guadeloupe", "St. Kitts"]
    },
    { 
      name: "Windward Inseln", 
      description: "Grenadinen, St. Vincent, Martinique",
      link: "/reviere/karibik/windward-inseln", 
      areas: ["St. Vincent", "Bequia", "Tobago Cays", "Martinique"]
    },
    { 
      name: "Kuba", 
      description: "Zunehmend beliebter, ursprünglicher",
      link: "/reviere/karibik/kuba",
      areas: ["Havanna", "Cienfuegos", "Trinidad", "Cayo Largo"]
    }
  ];

  const advantages = [
    "Warmes Wasser",
    "Stabile Passatwinde", 
    "Unzählige Inseln",
    "Line of Sight Sailing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/092bc1eb-a5ff-4dd3-9b22-1838f44ee4c6.png"
          alt="Karibik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🏝️ Karibik & Atlantik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Karibik</h1>
            <p className="text-xl max-w-2xl">
              Traumhafte Inseln mit perfekten Segelbedingungen
            </p>
          </div>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('reviere')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
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
                <BreadcrumbPage>Karibik</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg prose prose-lg max-w-none">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-orange-500" />
              <h2 className="text-3xl font-bold text-gray-800 m-0">Yachtcharter Karibik: Ihr Traumtörn im Paradies der Passatwinde</h2>
            </div>
            <div className="text-gray-700 space-y-6">
              <p>
                Die Karibik – ein Name, der Sehnsüchte weckt und Bilder von Postkartenmotiven heraufbeschwört. Türkisfarbenes Wasser, unzählige palmengesäumte Inseln, lebendige Unterwasserwelten und eine faszinierende Vielfalt an Kulturen machen dieses Archipel zu einem der faszinierendsten Segelreviere weltweit. Ein Yachtcharter in der Karibik ist nicht nur ein Urlaub, es ist eine Einladung, in eine Welt einzutauchen, in der jeder Sonnenaufgang ein neues Abenteuer verspricht und jeder Ankerplatz ein Stück Paradies offenbart.
              </p>
              <p>
                Stellen Sie sich vor, Sie werden die Leinen in einer modernen Marina los, die Segel füllen sich mit den beständigen Passatwinden, und vor Ihnen liegt das endlose Blau des Atlantiks oder des Karibischen Meeres. Jeder Tag bringt neue Horizonte: bezaubernde Fischerdörfer, deren bunte Häuser sich an grüne Hügel schmiegen, einsame Ankerbuchten mit puderzuckerfeinem Sand, der zum Entspannen einlädt, und pulsierende Städte, in denen die Rhythmen von Reggae und Salsa die Luft erfüllen.
              </p>
              <p>
                Ob Sie die geschützten Gewässer der <Link to="/reviere/karibik/britische-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">British Virgin Islands</Link> erkunden, die anspruchsvolleren Passagen der <Link to="/reviere/karibik/windward-inseln" className="text-blue-600 hover:text-blue-800 underline">Windward Islands</Link> meistern oder die einzigartige Kultur <Link to="/reviere/karibik/kuba" className="text-blue-600 hover:text-blue-800 underline">Kubas</Link> vom Wasser aus erleben möchten – die Karibik bietet für jeden Geschmack und jede Erfahrungsstufe das passende Segelabenteuer. Die Top-Charterreviere wie die <Link to="/reviere/karibik/britische-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">British Virgin Islands (BVI)</Link>, die <Link to="/reviere/karibik/us-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">US Virgin Islands</Link>, die <Link to="/reviere/karibik/windward-inseln" className="text-blue-600 hover:text-blue-800 underline">Windward Inseln</Link> (z. B. Martinique, St. Lucia, St. Vincent & die Grenadinen), die <Link to="/reviere/karibik/leeward-inseln" className="text-blue-600 hover:text-blue-800 underline">Leeward Inseln</Link> (z. B. Antigua, St. Martin) und das einzigartige <Link to="/reviere/karibik/kuba" className="text-blue-600 hover:text-blue-800 underline">Kuba</Link> warten darauf, von Ihnen entdeckt zu werden. Tauchen Sie ein in das karibische Lebensgefühl und lassen Sie sich von der Freiheit des Meeres verzaubern.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-800 mt-8">Die Regionen der Karibik: Ein Segelparadies in vielen Facetten</h3>
              <p>
                Die Karibik ist kein homogenes Segelrevier, sondern ein Mosaik aus Inselgruppen, die sich in ihrer Topografie, Kultur und den nautischen Herausforderungen unterscheiden. Jede Region bietet einzigartige Erlebnisse und ist auf ihre Weise ein Traumziel für Segler.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 mt-6">1. <Link to="/reviere/karibik/britische-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">British Virgin Islands (BVI)</Link>: Das Segelparadies für Einsteiger und Genießer</h4>
              <p>
                Die BVI sind zweifellos das bekannteste und beliebteste Yachtcharter-Revier der Karibik. Sie bestehen aus über 60 Inseln und Cays, von denen viele unbewohnt sind.
              </p>
              <ul>
                <li><strong>Besonderheiten:</strong> Die BVI sind berühmt für ihre geschützten Gewässer, die durch die Nähe der Inseln zueinander entstehen. Die Navigation ist einfach und meist auf Sicht möglich, was sie ideal für weniger erfahrene Skipper und Familien macht. Es gibt eine hohe Dichte an Mooring-Bojen, was das Ankern erleichtert.</li>
                <li><strong>Beliebte Törnziele:</strong>
                  <ul>
                    <li>Tortola: Die größte Insel und das Haupt-Charterzentrum mit Marinas wie Road Town.</li>
                    <li>Virgin Gorda: Bekannt für "The Baths", eine einzigartige Ansammlung von riesigen Granitfelsen, die natürliche Pools und Grotten bilden.</li>
                    <li>Jost Van Dyke: Berühmt für seine entspannte Atmosphäre, die "Soggy Dollar Bar" und die "Bubbly Pool".</li>
                    <li>Norman Island: Angeblich die Inspiration für Robert Louis Stevensons "Schatzinsel", mit faszinierenden Höhlen zum Schnorcheln.</li>
                    <li>Anegada: Die einzige Koralleninsel der BVI, bekannt für ihre Hummer und flachen, türkisfarbenen Gewässer.</li>
                  </ul>
                </li>
                <li><strong>Highlights:</strong> Kristallklares Wasser, weiße Sandstrände, entspannte Beach Bars, hervorragende Schnorchel- und Tauchspots.</li>
                <li><strong>Windbedingungen:</strong> Beständige Nordost-Passatwinde (15-25 Knoten) sorgen für hervorragende Segelbedingungen.</li>
                <li><strong>Routenvorschläge:</strong> Ein typischer 7-Tages-Törn führt von Tortola über Norman Island, Virgin Gorda, Anegada, Jost Van Dyke und wieder zurück.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6">2. <Link to="/reviere/karibik/us-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">US Virgin Islands (USVI)</Link>: Amerikanischer Komfort im Karibik-Setting</h4>
              <p>
                Die USVI – St. Thomas, St. John und St. Croix – bieten eine ähnliche Segelerfahrung wie die BVI, jedoch unter amerikanischer Flagge.
              </p>
              <ul>
                <li><strong>Besonderheiten:</strong> Für US-Bürger ist die Einreise unkompliziert. Die Infrastruktur ist sehr gut entwickelt. St. John ist zu zwei Dritteln Nationalpark, was unberührte Natur und hervorragende Schnorchel- und Wanderwege garantiert.</li>
                <li><strong>Beliebte Törnziele:</strong>
                  <ul>
                    <li>St. Thomas: Haupt-Charterbasis und lebhaftes Zentrum mit Duty-Free-Shopping.</li>
                    <li>St. John: Unberührte Schönheit mit Buchten wie Trunk Bay und Cinnamon Bay.</li>
                    <li>St. Croix: Die größte der USVI, bietet eine Mischung aus historischen Städten und unberührter Natur.</li>
                  </ul>
                </li>
                <li><strong>Highlights:</strong> Weltklasse-Strände, Nationalparks, historische Plantagen, lebendige Städte.</li>
                <li><strong>Windbedingungen:</strong> Ähnlich den BVI, beständige Passatwinde.</li>
                <li><strong>Routenvorschläge:</strong> Von St. Thomas aus lassen sich St. John und St. Croix gut erkunden, oft mit Abstechern zu den nahegelegenen BVI (hierfür sind jedoch Einreiseformalitäten zu beachten).</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6">3. <Link to="/reviere/karibik/windward-inseln" className="text-blue-600 hover:text-blue-800 underline">Windward Islands</Link>: Das Abenteuer ruft – von Martinique bis zu den Grenadinen</h4>
              <p>
                Die Windward Islands (Inseln über dem Wind) erstrecken sich von Martinique im Norden bis zu den Grenadinen im Süden und bieten anspruchsvolleres, aber unglaublich lohnendes Segeln.
              </p>
              <ul>
                <li><strong>Besonderheiten:</strong> Längere Schläge auf offener See zwischen den Inseln, was mehr Seemannschaft erfordert. Die Inseln sind vulkanischen Ursprungs, grüner und bergiger als die BVI, mit dramatischen Landschaften.</li>
                <li><strong>Martinique:</strong>
                  <ul>
                    <li>Besonderheiten: Französisches Überseedepartement, bietet französische Infrastruktur, Küche und Kultur. Exzellente Marinas und Proviantierungsmöglichkeiten.</li>
                    <li>Törnziele: Fort-de-France (Hauptstadt), St. Pierre (historische Stadt), Ankerbuchten wie Anses d'Arlet.</li>
                  </ul>
                </li>
                <li><strong>St. Lucia:</strong>
                  <ul>
                    <li>Besonderheiten: Berühmt für die ikonischen Pitons, zwei vulkanische Zwillingsgipfel, die dramatisch aus dem Meer ragen. Eine Mischung aus französischer und britischer Kultur.</li>
                    <li>Törnziele: Rodney Bay (Haupt-Charterbasis), Marigot Bay (malerische Bucht), Soufrière (Zugang zu den Pitons).</li>
                  </ul>
                </li>
                <li><strong>St. Vincent & die Grenadinen:</strong>
                  <ul>
                    <li>Besonderheiten: Eine Kette von über 30 Inseln und Cays, die sich südlich von St. Vincent erstrecken. Bieten einige der schönsten und unberührtesten Ankerplätze der Karibik.</li>
                    <li>Törnziele:
                      <ul>
                        <li>Bequia: Charmante Insel mit entspannter Atmosphäre und ausgezeichneten Restaurants.</li>
                        <li>Mustique: Exklusive Privatinsel, bekannt für ihre luxuriösen Villen und Prominente.</li>
                        <li>Tobago Cays: Das absolute Highlight. Ein geschützter Marinepark mit fünf unbewohnten Inseln und einem riesigen Korallenriff, das ein natürliches Aquarium bildet. Perfekt zum Schnorcheln, Tauchen und für unvergessliche Nächte unter Sternen.</li>
                        <li>Union Island: Lebhafter Hafen und guter Ausgangspunkt für die südlichen Grenadinen.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><strong>Highlights:</strong> Dramatische Vulkanlandschaften, üppige Regenwälder, Wasserfälle, kreolische Küche, authentische Inselkultur.</li>
                <li><strong>Windbedingungen:</strong> Beständige Passatwinde, die auf offener See kräftiger sein können.</li>
                <li><strong>Routenvorschläge:</strong> Ein klassischer Törn führt von Martinique oder St. Lucia südwärts durch die Grenadinen bis Union Island und zurück.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6">4. <Link to="/reviere/karibik/leeward-inseln" className="text-blue-600 hover:text-blue-800 underline">Leeward Islands</Link>: Vielfalt und Geschichte im Nordosten</h4>
              <p>
                Die Leeward Islands (Inseln unter dem Wind) liegen im nordöstlichen Teil der Karibik und bieten eine Mischung aus historischen Stätten, lebhaften Häfen und unberührten Buchten.
              </p>
              <ul>
                <li><strong>Antigua:</strong>
                  <ul>
                    <li>Besonderheiten: Bekannt für ihre "365 Strände" – einen für jeden Tag des Jahres. Reiche britische Seefahrtsgeschichte.</li>
                    <li>Törnziele: English Harbour (historischer Marinestützpunkt, UNESCO-Welterbe), Falmouth Harbour (lebhaftes Yachtzentrum), Green Island (geschützter Ankerplatz).</li>
                  </ul>
                </li>
                <li><strong>St. Martin / Sint Maarten:</strong>
                  <ul>
                    <li>Besonderheiten: Einzigartige Insel, die in einen französischen (St. Martin) und einen niederländischen (Sint Maarten) Teil geteilt ist. Bietet eine faszinierende Mischung aus Kulturen, hervorragende Marinas und Duty-Free-Shopping.</li>
                    <li>Törnziele: Marigot (französische Hauptstadt), Philipsburg (niederländische Hauptstadt), Ankerbuchten wie Grand Case.</li>
                  </ul>
                </li>
                <li><strong>Guadeloupe:</strong>
                  <ul>
                    <li>Besonderheiten: Französisches Überseedepartement, bekannt für seine Schmetterlingsform, üppige Natur, den aktiven Vulkan La Soufrière und hervorragende kreolische Küche.</li>
                    <li>Törnziele: Pointe-à-Pitre (Haupt-Charterbasis), Les Saintes (malerische Inselgruppe), Pigeon Island (Cousteau Marine Park).</li>
                  </ul>
                </li>
                <li><strong>Highlights:</strong> Koloniale Geschichte, lebhafte Städte, exzellente Küche, vielfältige Segelbedingungen.</li>
                <li><strong>Windbedingungen:</strong> Beständige Passatwinde, oft etwas moderater als die Windward Islands.</li>
                <li><strong>Routenvorschläge:</strong> Von Antigua aus lassen sich St. Martin, St. Barth und Anguilla gut erreichen. Von Guadeloupe aus sind Les Saintes und Dominica beliebte Ziele.</li>
              </ul>

              <h4 className="text-xl font-semibold text-gray-800 mt-6">5. <Link to="/reviere/karibik/kuba" className="text-blue-600 hover:text-blue-800 underline">Kuba</Link>: Einzigartige Kultur und unberührte Reviere</h4>
              <p>
                Kuba bietet ein völlig anderes Karibik-Erlebnis – eine Zeitreise in eine einzigartige Kultur mit noch weitgehend unberührten Segelrevieren.
              </p>
              <ul>
                <li><strong>Besonderheiten:</strong> Die Infrastruktur für Yachtcharter ist noch weniger entwickelt als in anderen Karibikregionen, aber die Authentizität und die kulturellen Erlebnisse sind unvergleichlich.</li>
                <li><strong>Törnziele:</strong>
                  <ul>
                    <li>Cienfuegos: Eine der Haupt-Charterbasen an der Südküste, bekannt für ihre französische Kolonialarchitektur und den Naturhafen. Von hier aus sind die Inselgruppen Jardines de la Reina und Canarreos erreichbar.</li>
                    <li>Havanna: Die faszinierende Hauptstadt Kubas, ein Muss für jeden Besucher. Die Marina Hemingway ist der wichtigste Hafen für Yachten.</li>
                    <li>Jardines de la Reina: Ein streng geschützter Marinepark mit unberührten Korallenriffen und einer reichen Unterwasserwelt, ideal für Taucher.</li>
                    <li>Cayo Largo del Sur: Eine Insel der Canarreos-Inselgruppe mit wunderschönen Stränden und Tauchmöglichkeiten.</li>
                  </ul>
                </li>
                <li><strong>Highlights:</strong> Koloniale Städte, Oldtimer, Zigarrenfabriken, Salsa-Musik, unberührte Natur.</li>
                <li><strong>Windbedingungen:</strong> Beständige Passatwinde, jedoch können auch Nordwinde (Nortes) auftreten.</li>
                <li><strong>Routenvorschläge:</strong> Ein Törn ab Cienfuegos konzentriert sich oft auf die Inselgruppen im Süden Kubas.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Erreichbarkeit: Ihr schneller Weg ins Paradies</h3>
              <p>
                Die Anreise zu den Karibik-Charterbasen ist unkompliziert, insbesondere während der Hauptsaison:
              </p>
              <ul>
                <li><strong>Direktflüge:</strong> Zahlreiche internationale Flughäfen in der Karibik werden von Europa (insbesondere Deutschland, Frankreich, Großbritannien), den USA und Kanada aus direkt angeflogen. Die wichtigsten Zielflughäfen für unsere Chartergäste sind:
                  <ul>
                    <li>Martinique (FDF): Für die Windward Islands.</li>
                    <li>Tortola (EIS) / St. Thomas (STT): Für die BVI und USVI.</li>
                    <li>Antigua (ANU): Für die Leeward Islands.</li>
                    <li>St. Martin (SXM): Für die Leeward Islands.</li>
                    <li>Havanna (HAV) / Cienfuegos (CFG): Für Kuba.</li>
                  </ul>
                </li>
                <li><strong>Anschlussflüge & Fähren:</strong> Viele Inseln sind auch per Anschlussflug von größeren Drehkreuzen (z.B. Miami, New York, London, Paris) oder per Fähre von benachbarten Inseln erreichbar. Vom Flughafen zur Marina organisieren wir gerne einen zuverlässigen Transfer für Sie und Ihre Crew.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Marinas & Ausgangshäfen: Perfekte Infrastruktur für Ihren Törn</h3>
              <p>
                Die Karibik verfügt über eine hervorragende maritime Infrastruktur, die sich ständig weiterentwickelt. Von großen, modernen Marinas mit vollem Serviceangebot (Wasser, Strom, Sanitäranlagen, WLAN, Werften) bis hin zu kleinen, charmanten Stadthäfen und unzähligen Bojenfeldern finden Sie entlang der Inseln sichere Liegeplätze.
              </p>
              <p>
                Unsere Flotte umfasst eine große Auswahl an Charteryachten für jeden Anspruch und jede Crewgröße:
              </p>
              <ul>
                <li><strong>Moderne Segelyachten (Monohulls):</strong> Ideal für sportliches Segeln und klassisches Seemannsgefühl.</li>
                <li><strong>Geräumige Katamarane:</strong> Perfekt für Familien und Gruppen, die Wert auf Komfort, Stabilität und viel Platz an Deck legen. Ideal für entspanntes Inselhopping und Ankern in flachen Buchten.</li>
                <li><strong>Schnelle Motoryachten:</strong> Für alle, die in kurzer Zeit große Distanzen zurücklegen und mehrere Highlights miteinander verbinden möchten.</li>
              </ul>
              <p>
                Sie haben die Wahl: Entscheiden Sie sich für eine Bareboat-Charter, wenn Sie über die nötige Erfahrung und die erforderlichen Lizenzen verfügen, um die Yacht selbst zu führen. Oder genießen Sie einen rundum entspannten Urlaub und buchen Sie einen unserer erfahrenen Skipper, der Sie sicher zu den schönsten Plätzen des Reviers führt und Ihnen wertvolle Geheimtipps verrät.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Wetter & Windbedingungen: Im Rhythmus der Passatwinde</h3>
              <p>
                Das Klima in der Karibik ist tropisch, mit zwei Hauptsaisons:
              </p>
              <ul>
                <li><strong>Trockenzeit (Dezember - Mai):</strong> Dies ist die Hauptsaison für Yachtcharter. Das Wetter ist stabil, sonnig und trocken. Die Temperaturen sind angenehm warm (ca. 25-30°C), und die Luftfeuchtigkeit ist geringer. Die Passatwinde aus Nordost sind in dieser Zeit am beständigsten und wehen meist mit 15-25 Knoten, was für hervorragende Segelbedingungen sorgt.</li>
                <li><strong>Regenzeit (Juni - November):</strong> In dieser Zeit ist die Luftfeuchtigkeit höher, und es kann zu kurzen, aber intensiven tropischen Regenschauern kommen. Die Winde sind tendenziell etwas schwächer und variabler. Dies ist auch die Hurrikansaison, wobei das höchste Risiko zwischen August und Oktober liegt. Viele Charterunternehmen verlegen ihre Flotten während dieser Zeit in sicherere Gebiete oder bieten reduzierte Preise an.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Revier-Eignung je nach Erfahrungslevel:</h3>
              <ul>
                <li><strong>Einsteiger & Familien:</strong> Die <Link to="/reviere/karibik/britische-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">British Virgin Islands (BVI)</Link> und die <Link to="/reviere/karibik/us-jungferninseln" className="text-blue-600 hover:text-blue-800 underline">US Virgin Islands</Link> sind aufgrund ihrer geschützten Gewässer, kurzen Schläge und hohen Dichte an Bojenfeldern ideal für Segelneulinge und Familien.</li>
                <li><strong>Fortgeschrittene Segler:</strong> Die <Link to="/reviere/karibik/windward-inseln" className="text-blue-600 hover:text-blue-800 underline">Windward Islands</Link> (St. Lucia, St. Vincent & die Grenadinen) und die <Link to="/reviere/karibik/leeward-inseln" className="text-blue-600 hover:text-blue-800 underline">Leeward Islands</Link> (Antigua, St. Martin) bieten anspruchsvollere Segelbedingungen mit längeren Schlägen auf offener See und sind perfekt für Segler, die ihre Fähigkeiten erweitern möchten.</li>
                <li><strong>Erfahrene Skipper & Abenteurer:</strong> <Link to="/reviere/karibik/kuba" className="text-blue-600 hover:text-blue-800 underline">Kuba</Link> bietet ein einzigartiges kulturelles Erlebnis und weniger entwickelte, aber faszinierende Reviere für diejenigen, die das Besondere suchen.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Beste Reisezeit: Wann Ihr Karibik-Traum wahr wird</h3>
              <p>
                Die beste Reisezeit für Yachtcharter in der Karibik ist von Mitte Dezember bis Ende Mai. In diesen Monaten ist das Wetter am stabilsten, die Passatwinde sind beständig, und das Risiko von Hurrikans ist minimal.
              </p>
              <ul>
                <li><strong>Dezember - Februar:</strong> Angenehme Temperaturen, geringe Luftfeuchtigkeit, beständige Winde. Ideal für die Flucht vor dem europäischen Winter.</li>
                <li><strong>März - Mai:</strong> Die Winde können etwas nachlassen, aber die Bedingungen sind immer noch ausgezeichnet. Weniger Touristen als in der Hochsaison.</li>
                <li><strong>Juni - November:</strong> Regenzeit und Hurrikansaison. Charterpreise sind niedriger, aber das Risiko von Wetterstörungen ist höher. Für erfahrene Segler, die flexibel sind und ein Auge auf die Wettervorhersage haben, können sich hier Schnäppchen ergeben.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mt-8">Fazit: Ihr Karibik-Abenteuer wartet</h3>
              <p>
                Ein Yachtcharter in der Karibik ist ein Versprechen für einen unvergesslichen Urlaub. Es ist die Freiheit, jeden Tag aufs Neue zu entscheiden, ob Sie eine versteckte Bucht ansteuern, in einem lebhaften Hafenstädtchen anlegen oder einfach auf dem offenen Meer die Sonne und den Wind genießen. Es ist die Kombination aus:
              </p>
              <ul>
                <li><strong>Vielseitigen Segelbedingungen:</strong> Von geschützten Archipelen bis zu anspruchsvollen Passagen ist für jede Erfahrungsstufe etwas dabei.</li>
                <li><strong>Atemberaubender Natur:</strong> Türkisfarbenes Wasser, palmengesäumte Strände, dramatische Vulkanlandschaften und lebendige Korallenriffe.</li>
                <li><strong>Karibischem Lebensgefühl:</strong> Entspannung, Gastfreundschaft, bunte Kulturen und mitreißende Rhythmen.</li>
                <li><strong>Kultureller Vielfalt:</strong> Die einzigartige Mischung aus afrikanischen, europäischen und indigenen Einflüssen.</li>
              </ul>
              <p>
                Sind Sie bereit, die Segel zu setzen und Ihr Karibik-Abenteuer zu beginnen?
              </p>
              <p>
                Fordern Sie jetzt Ihr unverbindliches Angebot für einen Yachtcharter in der Karibik an! Durchstöbern Sie unsere Online-Yachtsuche oder kontaktieren Sie unser Expertenteam direkt. Wir beraten Sie persönlich und finden die ideale Yacht im perfekten Revier für Sie.
              </p>
            </div>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:scale-105 cursor-pointer border border-transparent hover:border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{region.name}</h3>
                  </div>
                  {region.description && (
                    <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700">{region.description}</p>
                  )}
                  {region.areas && (
                    <div className="space-y-2">
                      {region.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-600"></div>
                          <span className="text-gray-600 group-hover:text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Waves className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ab in die Karibik?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie das Karibik-Feeling mit türkisem Wasser, weißen Stränden 
              und entspannter Inselatmosphäre.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Karibik-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Häufig gestellte Fragen (FAQ) zum Yachtcharter in der Karibik
          </h2>
          <div className="space-y-4">
            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wie sind die Passatwinde in der Karibik?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Die Karibik ist bekannt für ihre beständigen Nordost-Passatwinde, die während der Trockenzeit (Dezember bis Mai) meist mit 15-25 Knoten wehen. Sie sorgen für hervorragende Segelbedingungen, können aber zwischen den Inseln durch Düseneffekte verstärkt werden.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wie sicher sind die Ankerplätze und Marinas in der Karibik?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Die Karibik verfügt über viele sichere Ankerplätze in geschützten Buchten und eine wachsende Anzahl moderner Marinas. Besonders in den BVI gibt es viele Mooring-Bojen. Es ist ratsam, sich vorab über die lokalen Gegebenheiten und Wettervorhersagen zu informieren und stets aufmerksam zu sein.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Welche nautischen Besonderheiten gibt es in den verschiedenen Revieren?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <div className="text-gray-700 space-y-2">
                    <p><strong>BVI/USVI:</strong> Geschützte Gewässer, einfache Navigation auf Sicht, viele Bojen.</p>
                    <p><strong>Windward Islands:</strong> Längere Schläge auf offener See, teils kräftigere Winde, dramatische Vulkanlandschaften.</p>
                    <p><strong>Leeward Islands:</strong> Mischung aus offenen Passagen und geschützten Buchten, historische Häfen.</p>
                    <p><strong>Kuba:</strong> Weniger entwickelte Infrastruktur, aber authentische Kultur und unberührte Natur.</p>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Welche Segelscheine werden für eine Bareboat-Charter in der Karibik benötigt?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Für eine Bareboat-Charter in der Karibik benötigt der Skipper einen amtlichen Sportbootführerschein, der für die Küstengewässer seines Heimatlandes gültig ist (z.B. SBF See für deutsche Staatsbürger). Oft wird auch ein international anerkannter Nachweis wie der ICC (International Certificate of Competence) akzeptiert. Zusätzlich verlangen die meisten Vercharterer einen Nachweis über Segelerfahrung (Meilennachweise oder Segel-Lebenslauf) und ein gültiges Funkzeugnis (SRC oder LRC).
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wie viel Segelerfahrung brauche ich, um selbstständig eine Yacht in der Karibik zu führen?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Für die geschützten BVI und USVI ist moderate Segelerfahrung ausreichend. Für die Windward und Leeward Islands sowie Kuba ist aufgrund der längeren Schläge auf offener See und potenziell kräftigerer Winde eine solide Seemannschaft und Erfahrung im Umgang mit verschiedenen Bedingungen vorteilhaft.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wann ist die beste Reisezeit für die Windward Islands?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Die beste Reisezeit für die Windward Islands ist von Mitte Dezember bis Ende Mai. In diesen Monaten ist das Wetter am stabilsten, die Passatwinde sind beständig, und das Risiko von Hurrikans ist minimal.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wie gut ist die Infrastruktur auf den kleineren Inseln?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Auf den Hauptinseln und in den Charterzentren ist die Infrastruktur sehr gut. Auf kleineren, abgelegeneren Inseln kann die Infrastruktur einfacher sein, aber oft gibt es charmante lokale Restaurants und kleine Geschäfte. Eine gute Proviantierung vor dem Start ist immer ratsam.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible>
              <CollapsibleTrigger className="w-full">
                <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 hover:border-blue-300 transition-all duration-200 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 text-left">Wie funktioniert die Proviantierung unterwegs?</h3>
                    <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                  </div>
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="bg-gray-50 p-4 rounded-b-lg">
                  <p className="text-gray-700">
                    Die Proviantierung ist in den größeren Marinas und Städten unkompliziert. Dort finden Sie Supermärkte und lokale Märkte. Viele Charterunternehmen bieten auch einen Vorbestellservice an, bei dem Ihre Yacht bereits bei Ankunft mit den gewünschten Lebensmitteln und Getränken bestückt ist. Auf kleineren Inseln können die Möglichkeiten begrenzter sein.
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;