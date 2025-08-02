import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import destinationCroatia from "@/assets/destination-croatia.jpg";
import CharterRequestForm from "@/components/CharterRequestForm";

const Croatia = () => {
  const highlights = [
    "Hunderte Inseln & Buchten",
    "Hervorragende Infrastruktur", 
    "Klare Regeln & guter Service",
    "Ideales Klima (Mai–Oktober)"
  ];

  const regions = [
    {
      name: "Dalmatien",
      bases: "Split, Šibenik, Dubrovnik",
      description: "Das Herz der kroatischen Seglerträume mit historischen Städten und tausenden Inseln."
    },
    {
      name: "Kornaten",
      bases: "Šibenik, Zadar",
      description: "Nationalpark mit 89 unbewohnten Inseln - ein Paradies für Segler."
    },
    {
      name: "Istrien",
      bases: "Pula, Rovinj",
      description: "Mediterrane Halbinsel mit venezianischem Flair und kristallklarem Wasser."
    },
    {
      name: "Kvarner",
      bases: "Rijeka, Krk",
      description: "Große Buchten und abwechslungsreiche Landschaften zwischen Istrien und Dalmatien."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={destinationCroatia}
          alt="Kroatien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇭🇷</span>
            <Badge className="bg-gradient-sunset text-white">Top #1 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Kroatien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Dalmatien, Kornaten, Istrien & Kvarner - Das perfekte Segelrevier
          </p>
        </div>
        <Link to="/#territories" className="absolute top-6 left-6">
          <Button variant="secondary" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Lage</h3>
            <p className="text-sm text-muted-foreground">Adriatisches Meer</p>
          </Card>
          <Card className="text-center p-6">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Beste Zeit</h3>
            <p className="text-sm text-muted-foreground">Mai - Oktober</p>
          </Card>
          <Card className="text-center p-6">
            <Users className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Geeignet für</h3>
            <p className="text-sm text-muted-foreground">Alle Erfahrungsstufen</p>
          </Card>
          <Card className="text-center p-6">
            <Anchor className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Ankerplätze</h3>
            <p className="text-sm text-muted-foreground">1000+ Buchten</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-ocean-dark mb-6">
                Warum Kroatien das #1 Segelrevier ist
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Kroatien hat sich zum beliebtesten Segelrevier im Mittelmeer entwickelt - und das aus gutem Grund. 
                  Mit über 1.200 Inseln und Buchten bietet die kroatische Adria endlose Möglichkeiten für 
                  unvergessliche Segeltörns.
                </p>
                <p className="mb-4">
                  Die hervorragende nautische Infrastruktur, klare Regelungen und der ausgezeichnete Service 
                  machen Kroatien sowohl für Segelanfänger als auch für erfahrene Skipper zum perfekten Ziel.
                </p>
                <p>
                  Von den historischen Städten Dalmatiens über die unberührten Kornaten bis hin zu den 
                  venezianisch geprägten Küstenorten Istriens - Kroatien vereint Kultur, Natur und 
                  seglerische Vielfalt wie kein anderes Revier.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ocean-dark mb-4">Besonderheiten</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-ocean-light/10 rounded-lg">
                    <div className="w-3 h-3 bg-gradient-sunset rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regions */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ocean-dark mb-6">Segelreviere in Kroatien</h3>
              <div className="space-y-6">
                {regions.map((region, index) => (
                  <Card key={index} className="p-6">
                    <h4 className="text-xl font-bold text-ocean-dark mb-2">{region.name}</h4>
                    <p className="text-sm text-ocean-blue mb-3">
                      <strong>Charterbasen:</strong> {region.bases}
                    </p>
                    <p className="text-muted-foreground">{region.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-6">
              <h3 className="text-xl font-bold text-ocean-dark mb-4">
                Kroatien-Charter anfragen
              </h3>
              <p className="text-muted-foreground mb-6">
                Planen Sie Ihren perfekten Segeltörn in Kroatien. 
                Unsere Experten beraten Sie gerne bei der Auswahl der besten Route.
              </p>
              <CharterRequestForm>
                <Button className="w-full" size="lg">
                  Jetzt Kroatien-Charter anfragen
                </Button>
              </CharterRequestForm>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-ocean-dark mb-3">Beliebte Routen</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Split - Hvar - Vis - Korčula</li>
                  <li>• Šibenik - Kornaten - Zadar</li>
                  <li>• Dubrovnik - Elafiti Inseln</li>
                  <li>• Pula - Rovinj - Brijuni</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Croatia;