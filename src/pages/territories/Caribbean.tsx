import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Waves, Palmtree, Star } from "lucide-react";
import { Link } from "react-router-dom";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
  const regions = [
    { name: "Britische Jungferninseln (BVI)", description: "Das weltweit beliebteste Charterrevier" },
    { name: "St. Martin, Antigua, Guadeloupe", description: "Klassische Karibik-Destinationen" },
    { name: "Grenadinen", areas: ["St. Vincent", "Bequia", "Tobago Cays"] },
    { name: "Bahamas", areas: ["Exumas", "Abacos"] },
    { name: "Kuba", description: "Zunehmend beliebter, ursprünglicher" }
  ];

  const advantages = [
    "Warmes Wasser",
    "Stabile Passatwinde", 
    "Unzählige Inseln",
    "Line of Sight Sailing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={caribbean}
          alt="Karibik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-sunset text-white">🌊 Atlantik / Nordamerika</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Karibik</h1>
            <p className="text-xl max-w-2xl">
              Tropischer Klassiker mit warmem Wasser und Passatwinden
            </p>
          </div>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('territories')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-ocean-dark border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ocean-dark">
                <Palmtree className="w-5 h-5 text-sunset" />
                Karibik-Feeling pur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Tropischer Klassiker mit warmem Wasser, Passatwinden und Insel-Hopping. 
                Die perfekte Destination für entspanntes Segeln in paradiesischer Umgebung.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Top-Regionen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-ocean-dark">
                    <MapPin className="w-4 h-4 text-sunset" />
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {region.description && (
                    <p className="text-sm text-muted-foreground mb-3">{region.description}</p>
                  )}
                  {region.areas && (
                    <div className="space-y-2">
                      {region.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                          <span className="text-muted-foreground">{area}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advantages - temporarily removed for debugging */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Vorteile</h2>
          <div className="text-center">
            <p>Debugging: Vorteile-Karten temporär entfernt</p>
            <p>Anzahl Vorteile: {advantages.length}</p>
            <p>Vorteile: {JSON.stringify(advantages)}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-ocean text-white shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Karibik-Traum verwirklichen?
              </h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Erleben Sie das ultimative Segelerlebnis in der Karibik - 
                mit kristallklarem Wasser und perfekten Winden.
              </p>
              <Button variant="transparent" size="lg">
                Karibik-Charter anfragen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;