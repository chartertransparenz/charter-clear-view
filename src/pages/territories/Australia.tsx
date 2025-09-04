import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import destinationAustralia from "@/assets/destination-australia.jpg";

const Australia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [{
    label: "Lage",
    value: "Whitsunday Islands, Queensland"
  }, {
    label: "Beste Zeit",
    value: "April - Oktober"
  }, {
    label: "Geeignet für",
    value: "Mit Skipper empfohlen"
  }, {
    label: "Besonderheit",
    value: "Great Barrier Reef"
  }];

  const regions = [{
    name: "Whitsunday Islands",
    bases: ["Airlie Beach", "Hamilton Island"],
    description: "74 tropische Inseln im Great Barrier Reef Marine Park"
  }, {
    name: "Hamilton Island",
    bases: ["Hamilton Island Marina"],
    description: "Hauptbasis mit eigenem Flughafen und Luxus-Resorts"
  }, {
    name: "Whitehaven Beach",
    bases: ["Ankerplatz"],
    description: "Einer der schönsten Strände der Welt mit purem Silica-Sand"
  }, {
    name: "Great Barrier Reef",
    bases: ["Verschiedene Ankerplätze"],
    description: "Weltgrößtes Korallenriff-System mit einzigartiger Unterwasserwelt"
  }];

  const highlights = ["Unberührte Inselwelt", "Traumhafte Ankerbuchten", "Great Barrier Reef", "Tropisches Klima", "Bestes Segelrevier Südhalbkugel", "Meist mit Skipper empfohlen", "Whitehaven Beach", "Einzigartige Tierwelt"];

  const routes = ["Hamilton Island - Whitehaven Beach", "Airlie Beach - Hook Island", "Whitsunday Island - Hayman Island", "Great Barrier Reef Expedition"];

  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/6c0bd0d6-fffa-4af9-ad9d-cf725e99ab68.png" alt="Australien Segelrevier" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇦🇺</span>
            <Badge className="bg-orange-600 text-white">Top #10 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Australien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Whitsunday Islands - Bestes Segelrevier der Südhalbkugel
          </p>
        </div>
        <Link to="/" className="absolute top-6 left-6" onClick={() => {
        setTimeout(() => {
          document.getElementById('reviere')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }}>
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
                  <Link to="/reviere/suedpazifik">Südpazifik</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Australien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-orange-500 mb-2">
                {index === 0 && <MapPin className="w-6 h-6 mx-auto" />}
                {index === 1 && <Sun className="w-6 h-6 mx-auto" />}
                {index === 2 && <Anchor className="w-6 h-6 mx-auto" />}
                {index === 3 && <Star className="w-6 h-6 mx-auto" />}
              </div>
              <h3 className="font-bold text-gray-800 mb-1">{fact.label}</h3>
              <p className="text-gray-600 text-sm">{fact.value}</p>
            </div>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Yachtcharter Australien – große Küsten, große Freiheit</h2>
            <p className="text-lg text-gray-600 mb-6">
              Yachtcharter Australien verbindet spektakuläre Natur mit erstklassiger Nautik-Infrastruktur. Von den tropischen <Link to="/reviere/suedpazifik/australien/whitsundays" className="text-ocean-blue hover:text-ocean-dark underline font-medium">Whitsunday Islands</Link> am Great Barrier Reef über den ikonischen Sydney Harbour bis zu den wilden Revieren Tasmaniens und der entlegenen Kimberley-Küste – Segeln in Australien bietet kurze Etappen zwischen Traumbuchten ebenso wie anspruchsvolle Routen mit Tiden- und Passatwindtaktik. Ob Bareboat Australia, mit Skipper, auf Segelyacht oder Katamaran mieten Australien: Hier finden Sie für jede Crew und jedes Erfahrungslevel das passende Revier.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Wo segeln? Die wichtigsten Reviere</h3>
            <div className="space-y-3 mb-6">
              <p className="text-gray-600"><strong>Whitsunday Islands (Queensland):</strong> 74 Inseln, geschützte Passagen, starke Tiden – perfekt für Inselhüpfen mit Whitehaven Beach, Hill Inlet, Nara Inlet oder Butterfly Bay. Beste Zeit: meist April–Oktober.</p>
              <p className="text-gray-600"><strong>Sydney & Pittwater (New South Wales):</strong> Urbanes Segeln vor Oper und Harbour Bridge, danach nordwärts in die ruhigen Buchten von Pittwater und Broken Bay. Sommer ist Hauptsaison.</p>
              <p className="text-gray-600"><strong>Tasmanien (Hobart, D'Entrecasteaux Channel, Bruny Island):</strong> Kühler, rauer, landschaftlich grandios – für ambitionierte Crews, die Natur und Seemannschaft lieben. High Season: Dezember–Februar.</p>
              <p className="text-gray-600"><strong>Great Sandy Strait & K'gari/Fraser Island (QLD):</strong> Flaches, geschütztes Fahrwasser, Delfine und Sandbänke – ideal für Katamarane.</p>
              <p className="text-gray-600"><strong>Western Australia (Ningaloo, Abrolhos, Kimberley):</strong> Expeditionstaugliche Ziele mit gewaltigem Tidenhub und atemberaubender Küstengeologie – meist als Crewed oder Expeditionscharter.</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Wetter, Wind & Saison</h3>
            <p className="text-gray-600 mb-6">
              An der Ostküste dominieren südöstliche Passatwinde; im tropischen Norden gilt: Zyklonzeit und Stinger-Saison (Quallen) beachten – leichte Stinger-Suits sind im Sommerhalbjahr Standard. Weiter südlich bestimmen Seebriese und Frontdurchgänge das Programm. Wer flexibel plant, segelt vormittags mit der Brise, nutzt Tide und Stromfenster an Engstellen und wählt abends eine Ankerbucht mit Leeschutz.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Vorschriften & Umweltschutz</h3>
            <p className="text-gray-600 mb-6">
              Australien schützt seine Meeresparks konsequent. Im Great Barrier Reef Marine Park gelten Zonierungen: In sensiblen Bereichen sind Ankerverbotszonen ausgebracht; nutzen Sie Mooringbojen, ankern Sie nur auf Sand und führen Sie aktuelle Karten/Apps mit. Abfall gehört in den Hafen, Abwasser wird nicht eingeleitet. In Buchten und Häfen gilt Langsamfahrt. Respektieren Sie Wildlife-Distanzen (Wale, Schildkröten, Dugongs) und vermeiden Sie nächtliche Störungen.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Lizenzen, Qualifikation & Schiffe</h3>
            <p className="text-gray-600 mb-6">
              Für Bareboat verlangen Vercharterer einen international anerkannten Bootsführerschein (z. B. ICC/RYA) plus Revier- und Tiden-Erfahrung; ein Funkzeugnis ist empfohlen. Wer entspannt einsteigen will, bucht Skipper Australien oder gleich eine Crewed-Yacht. Katamarane sind populär: viel Platz, Stabilität und geringer Tiefgang für Flachwasserbuchten; Monohulls punkten mit direktem Segelgefühl bei Passatwind. Für schnelle Distanzen stehen Motoryachten zur Wahl.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Marinas & Logistik</h3>
            <p className="text-gray-600 mb-6">
              Dreh- und Angelpunkte sind Airlie Beach (Coral Sea Marina, Port of Airlie) und Hamilton Island Marina für die Whitsundays; in Sydney wählen Sie u. a. CYCA/Rushcutters Bay, The Spit oder Pittwater/Newport. Alle bieten Wasser/Strom, Fuel, Pump-out, Chandlery, WLAN und Proviant (Woolworths/Coles oft in Nähe). Transfers vom Flughafen sind kurz und planbar – ideal, um am Anreisetag noch in Ruhe zu übernehmen.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Warum jetzt Yachtcharter Australien?</h3>
            <p className="text-gray-600 mb-6">
              Weil kaum ein Land so viel Vielfalt auf dem Wasser bietet: tropische Riffe, schneeweiße Strände, urbane Skylines, kühle Wildnisse – und dazwischen eine Infrastruktur, die Sicherheit und Komfort mit echter Abenteuerluft verbindet. Sie segeln planbare Tagesetappen, schnorcheln über Korallen, beobachten Wale in der Saison, ankern unter Millionen Sternen – und wachen auf mit dem Gefühl, an einem Ort zu sein, der wie für Seefahrer gemacht ist.
            </p>

            <p className="text-gray-600">
              Ihr Törn beginnt hier: Teilen Sie uns Reisezeit, Crewgröße und Yachtwunsch mit. Wir empfehlen Reviere, sichern Moorings/Marinas, planen Tide & Route und organisieren Transfers. Yachtcharter Australien – das ist Segeln ohne Umwege zum Wesentlichen: Freiheit, Weite und Wasser in seiner schönsten Form.
            </p>
          </div>
        </div>

        {/* Highlights */}
        

        {/* Regions */}
        

        {/* Popular Routes */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für Down Under?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie das Great Barrier Reef und segeln Sie durch 
              die traumhaften Whitsunday Islands - Australiens Segelparadies.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Australien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>;
};

export default Australia;
