import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import mediterranean from "@/assets/mediterranean.jpg";
const Malta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Zentrales Mittelmeer"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Kompakte Inselgruppe"
  }];
  const regions = [{
    name: "Malta Xlokk",
    link: "/reviere/mittelmeer/malta/malta-xlokk",
    description: "Haupthafen und maritime Basis der maltesischen Inseln"
  }];
  const highlights = ["Kristallklares, türkisfarbenes Wasser", "Reiche Geschichte und Kultur", "Kompakte Segelreviere", "Ganzjährig mildes Klima", "UNESCO-Weltkulturerbe Valletta", "Authentische mediterrane Atmosphäre", "Exzellente Sicherheitsstandards"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/6bb00564-b9b9-4c18-956d-8be418e27f77.png" alt="Malta Mittelmeer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇹 Malta</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malta</h1>
            <p className="text-xl max-w-2xl">
              Das Herz des Mittelmeers
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
          </Button>
        </Link>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Yachtcharter Malta: Segeln durch 7.000 Jahre Geschichte im Herzen des Mittelmeers</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                Willkommen in einem Segelrevier, das so einzigartig ist wie kein anderes. Ein Yachtcharter auf Malta ist nicht nur ein Urlaub auf dem Wasser – es ist eine Zeitreise. Hier, an diesem strategischen Knotenpunkt des Mittelmeers, segeln Sie durch ein lebendiges Freilichtmuseum, umgeben von honigfarbenen Festungsmauern, geheimnisvollen prähistorischen Tempeln und einem Meer, dessen tiefes Blau einen atemberaubenden Kontrast zur goldenen Kalksteinarchitektur bildet.
              </p>
              <p>
                Stellen Sie sich vor, Sie lichten den Anker in einem der spektakulärsten Naturhäfen der Welt, nehmen Kurs entlang imposanter Klippen und entdecken versteckte Buchten mit kristallklarem Wasser, die einst phönizischen Händlern und den Rittern des Johanniterordens Schutz boten. Das maltesische Archipel – bestehend aus den drei Inseln Malta, Gozo und Comino – ist ein Mikrokosmos voller Kontraste: britischer Charme trifft auf mediterrane Lebensfreude, prähistorische Mysterien auf barocke Pracht.
              </p>
              <p>
                Dank seiner kompakten Größe ist Malta das perfekte Revier für einen einwöchigen Törn. Jeder Tag bringt neue, faszinierende Ziele in greifbare Nähe, ohne dass lange Schläge erforderlich sind. Entdecken Sie mit uns ein Segelparadies, das Kultur, Natur und Abenteuer auf unvergessliche Weise vereint.
              </p>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Ihr Ausgangspunkt: Die Kalkara Marina im majestätischen Grand Harbour</h3>
              <p>
                Ihr Törn beginnt an einem Ort, der Ihnen vom ersten Moment an den Atem rauben wird: der Kalkara Marina, eingebettet in den weltberühmten Grand Harbour. Dies ist kein gewöhnlicher Hafen. Sie liegen mit Ihrer Yacht inmitten einer der größten und am stärksten befestigten Naturhäfen der Welt, direkt gegenüber der UNESCO-geschützten Hauptstadt Valletta. Der Anblick der gewaltigen Bastionen und der eleganten Paläste, die sich über Ihnen erheben, ist eine unvergleichliche Kulisse für den Beginn Ihres Segelabenteuers. Die Marina selbst bietet moderne Einrichtungen und perfekten Schutz, während Sie sich in unmittelbarer Nähe zu den historischen „Drei Städten" – Vittoriosa, Senglea und Cospicua – befinden.
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Erreichbarkeit: Schnell und unkompliziert an Bord</h4>
                <p className="mb-3">Malta ist eines der am einfachsten zu erreichenden Segelreviere im Mittelmeer.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Per Flugzeug:</strong> Der Malta International Airport (MLA) wird von allen großen Flughäfen in Deutschland, Österreich und der Schweiz regelmäßig und oft direkt angeflogen.</li>
                  <li><strong>Kurzer Transfer:</strong> Vom Flughafen zur Kalkara Marina oder anderen Basen ist es nur eine kurze Fahrt von etwa 15-20 Minuten. So verlieren Sie keine wertvolle Urlaubszeit und können schon kurz nach der Landung das maritime Flair genießen.</li>
                </ul>
              </div>
              
              {/* Blue Lagoon Image */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/db059046-e2cd-4a2d-8933-6bc8c3e02c4e.png" 
                  alt="Von der eigenen Yacht aus: Schnorcheln und Baden in der weltberühmten Blue Lagoon Comino" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-center text-gray-600 text-sm italic">
                  Von der eigenen Yacht aus: Schnorcheln und Baden in der weltberühmten Blue Lagoon Comino
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Die Perlen des Archipels: Ihre Törnziele rund um Malta, Gozo und Comino</h3>
              <p>
                Das Revier ist so reich an Zielen, dass Sie jeden Tag etwas Neues entdecken können.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Entlang der maltesischen Küste: Von Fischerdörfern zu blauen Grotten</h4>
              <p>Von der Kalkara Marina aus können Sie die Hauptinsel Malta erkunden:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Marsaxlokk:</strong> Segeln Sie in Richtung Süden zur malerischsten Bucht Maltas. Marsaxlokk ist ein traditionelles Fischerdorf, berühmt für seine unzähligen bunten „Luzzu"-Boote, deren aufgemalte Osiris-Augen die Fischer vor Gefahren schützen sollen. Der tägliche Markt und die ausgezeichneten Fischrestaurants direkt am Wasser machen diesen Ort zu einem perfekten Mittagsstopp.</li>
                <li><strong>St. Peter's Pool:</strong> Nur eine kurze Strecke weiter liegt dieser atemberaubende natürliche Swimmingpool. Die vom Meer geformten Kalksteinfelsen bilden ein perfektes Amphitheater zum Sonnenbaden und für mutige Sprünge ins türkisblaue Wasser. Vom Meer aus ist dieser Ort am besten zu erreichen.</li>
                <li><strong>Blue Grotto:</strong> An der Südküste gelegen, ist die Blaue Grotte ein Muss. Bei Sonnenschein reflektiert das Wasser in den Höhlen das Licht auf eine Weise, die unzählige Blautöne erzeugt – ein magisches Schauspiel. Ankern Sie in der Nähe und erkunden Sie die Grotten mit dem Dingi.</li>
                <li><strong>Dingli Cliffs:</strong> Die Westküste wird von den imposanten Dingli Cliffs dominiert, die über 250 Meter steil ins Meer abfallen. Ein Segeltörn entlang dieser majestätischen Klippen bei Sonnenuntergang ist ein unvergessliches Erlebnis.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Comino: Das Paradies der Blauen Lagune</h4>
              <p>Zwischen Malta und Gozo liegt die winzige, fast unbewohnte Insel Comino – Heimat eines der berühmtesten Ankerplätze des Mittelmeers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Die Blaue Lagune (Blue Lagoon):</strong> Der Name ist Programm. Das Wasser hier ist so unglaublich klar und leuchtend cyanfarben, dass es wie ein riesiger Swimmingpool wirkt. Tagsüber ist die Bucht ein Magnet für Tagesausflügler. Der wahre Luxus eines Yachtcharters zeigt sich hier: Wenn am späten Nachmittag die Touristenboote verschwunden sind, haben Sie dieses Paradies fast für sich allein. Eine Nacht vor Anker in der Blauen Lagune unter dem Sternenhimmel ist ein absolutes Highlight.</li>
                <li><strong>Crystal Lagoon & Santa Marija Bay:</strong> Für mehr Ruhe bieten die nahegelegene Crystal Lagoon oder die sandige Santa Marija Bay exzellente Alternativen zum Ankern.</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Gozo: Die ruhige und mythische Schwesterinsel</h4>
              <p>Gozo ist grüner, ländlicher und spürbar entspannter als Malta. Die Insel soll die mythische Heimat der Nymphe Kalypso sein, und ihre magische Atmosphäre ist bis heute spürbar.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Mġarr Harbour:</strong> Ihr Tor zu Gozo. Dieser charmante Hafen empfängt Sie mit einer schönen Kirche, die über ihm thront, und bietet gute Versorgungsmöglichkeiten.</li>
                <li><strong>Ramla Bay:</strong> Berühmt für ihren einzigartigen, rötlich-goldenen Sand. Hoch über der Bucht befindet sich die legendäre Kalypso-Höhle.</li>
                <li><strong>Dwejra Bay:</strong> Auch nach dem Einsturz des berühmten Felsentors „Azure Window" ist dieser Ort an der Westküste spektakulär. Ankern Sie in der geschützten Bucht und erkunden Sie den „Inland Sea" – eine Salzwasserlagune, die durch einen natürlichen Tunnel mit dem offenen Meer verbunden ist. Für Taucher ist das „Blue Hole" hier ein weltberühmter Spot.</li>
                <li><strong>Xlendi Bay:</strong> Eine wunderschöne, fjordähnliche Bucht an der Südwestküste. Die Uferpromenade ist gesäumt von exzellenten Restaurants, in denen Sie mit den Füßen fast im Wasser speisen können. Ein perfekter Ort für einen entspannten Abend.</li>
              </ul>
              
              {/* Gozo Image */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/32290b86-1a67-4820-b449-fcef6d84def3.png" 
                  alt="Naturwunder Gozo vom besten Platz aus: dem Deck Ihrer Charteryacht" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-center text-gray-600 text-sm italic">
                  Naturwunder Gozo vom besten Platz aus: dem Deck Ihrer Charteryacht
                </p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 mt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Wind, Wetter und die beste Reisezeit</h4>
                <p className="mb-3">Das Klima auf Malta ist typisch mediterran. Die Segelsaison dauert von April bis in den späten Oktober.</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Wind:</strong> Der vorherrschende Sommerwind ist der Majjistral aus Nordwest, der meist für angenehme Segelbedingungen sorgt. Der Xlokk (Scirocco) aus Südost kann warme, feuchte Luft und eine stärkere Dünung mit sich bringen.</li>
                  <li><strong>Beste Reisezeit:</strong> Die Monate Mai, Juni und September sind ideal. Die Temperaturen sind warm, aber nicht zu heiß, die Inseln sind grün, und die Touristenmassen der Hochsaison sind überschaubar. Im Juli und August ist es sehr heiß und in den Hotspots wie der Blauen Lagune sehr voll.</li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Fazit: Eine einzigartige Mischung aus Kultur und Segelabenteuer</h3>
              <p>
                Ein Yachtcharter auf Malta ist eine unvergleichliche Erfahrung. Nirgendwo sonst können Sie an einem einzigen Tag in einer prähistorischen Tempelanlage stehen, in einer von Rittern erbauten Stadt zu Mittag essen und den Nachmittag in einer Bucht mit karibischem Flair verbringen. Die unglaubliche Dichte an Geschichte, die atemberaubende Küstenlandschaft und die herzliche Gastfreundschaft machen Malta zu einem erstklassigen Segelrevier für anspruchsvolle Crews.
              </p>
              <p>
                Sind Sie bereit, in die faszinierende Geschichte Maltas einzutauchen und seine verborgenen Buchten zu entdecken?
              </p>
              <p>
                Fordern Sie jetzt Ihr persönliches Angebot an. Wir helfen Ihnen, die perfekte Yacht für Ihre unvergessliche Reise durch das Herz des Mittelmeers zu finden.
              </p>
            </div>
          </div>
        </div>

        {/* Regions */}
        

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Malta?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das Herz des Mittelmeers mit seiner reichen Geschichte, 
              kristallklarem Wasser und authentischer mediterraner Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Malta Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Malta;