import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Mountain, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";
import pacific from "@/assets/pacific.jpg";

const Pacific = () => {
  const regions = [
    { name: "Französisch-Polynesien", areas: ["Tahiti", "Bora Bora", "Raiatea"] },
    { name: "Fidschi, Tonga", description: "Inselparadiese im Südpazifik" },
    { name: "Neuseeland", areas: ["Bay of Islands"] },
    { name: "Australien", areas: ["Whitsunday Islands"] }
  ];

  const advantages = [
    "Traumhafte Natur",
    "Türkisfarbene Lagunen", 
    "Korallenriffe",
    "Exotisches Segelabenteuer"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={pacific}
          alt="Pazifik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-sunset text-white">🌴 Südsee & Pazifik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Pazifik & Südsee</h1>
            <p className="text-xl max-w-2xl">
              Traumhafte Lagunen und exotische Segelabenteuer
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
                <Mountain className="w-5 h-5 text-sunset" />
                Südsee-Paradies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Die traumhaftesten Segelreviere der Welt mit kristallklaren Lagunen, 
                Korallenriffen und unberührter Natur für das ultimative Segelabenteuer.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Top-Regionen</h2>
          <div className="grid md:grid-cols-2 gap-6">
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

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Vorteile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center shadow-ocean">
                <CardContent className="pt-6">
                  <Palmtree className="w-8 h-8 text-sunset mx-auto mb-3" />
                  <p className="font-medium text-ocean-dark">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-ocean text-white shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Südsee-Abenteuer erleben?
              </h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Entdecken Sie die entlegensten und schönsten Segelreviere der Welt 
                in der traumhaften Südsee.
              </p>
              <Button variant="transparent" size="lg">
                Pazifik-Charter anfragen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pacific;