import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Calendar, Users, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import destinationGreece from "@/assets/destination-greece.jpg";
import CharterRequestForm from "@/components/CharterRequestForm";

const Greece = () => {
  const highlights = [
    "Inselhopping mit Tavernen-Charme",
    "Konstante Meltemi-Winde (Sommer)",
    "Kultur & Natur vereint",
    "Ideal für Bareboat- oder Skippercharter"
  ];

  const regions = [
    {
      name: "Kykladen",
      bases: "Athen (Lavrion), Mykonos, Paros",
      description: "Die klassischen weißen Dörfer mit blauen Kuppeln und konstante Winde."
    },
    {
      name: "Saronischer Golf",
      bases: "Athen (Alimos), Aegina",
      description: "Perfekt für Wochenendtörns - nah zu Athen mit ruhigen Gewässern."
    },
    {
      name: "Ionische Inseln",
      bases: "Korfu, Lefkas, Kefalonia",
      description: "Grüne Inseln mit milderen Winden und venezianischer Architektur."
    },
    {
      name: "Dodekanes",
      bases: "Rhodos, Kos",
      description: "Östliche Inselgruppe mit türkischem Einfluss und antiken Stätten."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={destinationGreece}
          alt="Griechenland Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇬🇷</span>
            <Badge className="bg-gradient-sunset text-white">Top #2 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Griechenland</h1>
          <p className="text-lg text-white/90 max-w-md">
            Kykladen, Saronischer Golf & Ionische Inseln - Inselhopping-Paradies
          </p>
        </div>
        <Link to="/" className="absolute top-6 left-6">
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
            <p className="text-sm text-muted-foreground">Ägäis & Ionisches Meer</p>
          </Card>
          <Card className="text-center p-6">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Beste Zeit</h3>
            <p className="text-sm text-muted-foreground">April - Oktober</p>
          </Card>
          <Card className="text-center p-6">
            <Users className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Geeignet für</h3>
            <p className="text-sm text-muted-foreground">Fortgeschrittene</p>
          </Card>
          <Card className="text-center p-6">
            <Anchor className="w-8 h-8 mx-auto mb-3 text-ocean-blue" />
            <h3 className="font-bold text-ocean-dark">Inselanzahl</h3>
            <p className="text-sm text-muted-foreground">6000+ Inseln</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-ocean-dark mb-6">
                Das klassische Inselhopping-Paradies
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  Griechenland ist die Wiege des Segelsports und bietet über 6.000 Inseln und Inselchen, 
                  von denen etwa 200 bewohnt sind. Die Kombination aus antiker Geschichte, 
                  kristallklarem Wasser und authentischer Tavernes-Kultur macht jeden Törn zu einem 
                  unvergesslichen Erlebnis.
                </p>
                <p className="mb-4">
                  Die berühmten Meltemi-Winde sorgen in den Sommermonaten für perfekte Segelbedingungen, 
                  während die kurzen Distanzen zwischen den Inseln ideal für entspanntes Inselhopping sind.
                </p>
                <p>
                  Von den weißen Dörfern der Kykladen über die grünen Ionischen Inseln bis hin zu den 
                  antiken Stätten der Dodekanes - Griechenland bietet für jeden Segler das richtige Revier.
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
              <h3 className="text-2xl font-bold text-ocean-dark mb-6">Segelreviere in Griechenland</h3>
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
                Griechenland-Charter anfragen
              </h3>
              <p className="text-muted-foreground mb-6">
                Erleben Sie das authentische Griechenland vom Wasser aus. 
                Wir helfen Ihnen bei der Routenplanung für Ihr Inselhopping-Abenteuer.
              </p>
              <CharterRequestForm>
                <Button className="w-full" size="lg">
                  Jetzt Griechenland-Charter anfragen
                </Button>
              </CharterRequestForm>
              
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-bold text-ocean-dark mb-3">Beliebte Routen</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Athen - Mykonos - Santorini</li>
                  <li>• Paros - Naxos - Ios - Santorini</li>
                  <li>• Korfu - Paxos - Lefkas</li>
                  <li>• Rhodos - Symi - Kos</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greece;