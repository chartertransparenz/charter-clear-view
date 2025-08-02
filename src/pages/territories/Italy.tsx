import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import destinationItaly from "@/assets/destination-italy.jpg";
import CharterRequestForm from "@/components/CharterRequestForm";

const Italy = () => {
  const highlights = [
    "Vielfalt an Revierarten: ruhig bis anspruchsvoll",
    "Gutes Essen, Kultur & spektakuläre Küsten",
    "Auch für Wochenend-Törns beliebt"
  ];

  const regions = [
    {
      name: "Sardinien",
      bases: "Olbia, Portisco, Cagliari",
      description: "Karibik-ähnliche Strände, kristallklares Wasser und wilde Küstenlandschaften."
    },
    {
      name: "Elba & Toskana",
      bases: "Piombino, Porto Santo Stefano",
      description: "Toskanischer Archipel mit Weinkultur und malerischen Buchten."
    },
    {
      name: "Sizilien",
      bases: "Palermo, Catania, Trapani",
      description: "Größte Mittelmeerinsel mit Vulkanen, Geschichte und authentischer Küche."
    },
    {
      name: "Amalfiküste",
      bases: "Salerno, Neapel",
      description: "Spektakuläre Steilküste mit glamourösen Häfen wie Capri und Positano."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={destinationItaly}
          alt="Italien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇮🇹</span>
            <Badge className="bg-gradient-sunset text-white">Top #3 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Italien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Sardinien, Elba, Sizilien & Amalfiküste - Dolce Vita auf dem Wasser
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
            <p className="text-sm text-muted-foreground">Mittelmeer</p>
          </Card>
          <Card className="text-center p-6">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Beste Zeit</h3>
            <p className="text-sm text-muted-foreground">April - Oktober</p>
          </Card>
          <Card className="text-center p-6">
            <Users className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Geeignet für</h3>
            <p className="text-sm text-muted-foreground">Alle Levels</p>
          </Card>
          <Card className="text-center p-6">
            <Anchor className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Besonderheit</h3>
            <p className="text-sm text-muted-foreground">Kulinarik & Kultur</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-ocean-dark mb-6">
                Dolce Vita auf dem Wasser
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Italien bietet eine unvergleichliche Vielfalt an Segelrevieren: Von den karibik-ähnlichen 
                  Stränden Sardiniens über die kulturreichen toskanischen Inseln bis hin zur spektakulären 
                  Amalfiküste - jedes Revier hat seinen eigenen Charakter.
                </p>
                <p className="mb-4">
                  Die italienische Küche, erstklassige Weine und die herzliche Gastfreundschaft machen 
                  jeden Hafenstopp zu einem kulinarischen Erlebnis. Gleichzeitig sorgen die gut 
                  ausgestatteten Marinas für höchsten Komfort.
                </p>
                <p>
                  Ob entspannter Wochenendtörn entlang der Riviera oder anspruchsvolle Überfahrten 
                  zwischen den großen Inseln - Italien bietet für jeden Segler das passende Abenteuer.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ocean-dark mb-4">Besonderheiten</h3>
              <div className="grid gap-4">
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
              <h3 className="text-2xl font-bold text-ocean-dark mb-6">Segelreviere in Italien</h3>
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
                Italien-Charter anfragen
              </h3>
              <p className="text-muted-foreground mb-6">
                Erleben Sie italienisches Dolce Vita auf dem Wasser. 
                Unsere Italien-Experten planen Ihren perfekten Segeltörn.
              </p>
              <CharterRequestForm>
                <Button className="w-full" size="lg">
                  Jetzt Italien-Charter anfragen
                </Button>
              </CharterRequestForm>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-ocean-dark mb-3">Beliebte Routen</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Olbia - Costa Smeralda - Korsika</li>
                  <li>• Elba - Giglio - Argentario</li>
                  <li>• Amalfi - Capri - Ischia</li>
                  <li>• Sizilien Rundtörn</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Italy;