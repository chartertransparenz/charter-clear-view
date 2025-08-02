import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Mountain, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import expedition from "@/assets/expedition.jpg";

const Expeditions = () => {
  const expeditions = [
    { 
      name: "Patagonien & Kap Hoorn", 
      description: "Wild & anspruchsvoll",
      difficulty: "Extrem"
    },
    { 
      name: "Alaska & British Columbia", 
      description: "Gletscher, Tierwelt, Einsamkeit",
      difficulty: "Sehr hoch"
    },
    { 
      name: "Island & Grönland", 
      description: "Extremes Expeditionssegeln",
      difficulty: "Extrem"
    },
    { 
      name: "Madagaskar, Oman, Thailand", 
      description: "Selten, aber wunderschön",
      difficulty: "Hoch"
    }
  ];

  const features = [
    "Einzigartige Naturerlebnisse",
    "Maximale Herausforderung", 
    "Unberührte Wildnis",
    "Expeditionscharakter"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={expedition}
          alt="Expedition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-sunset text-white">🔥 Expeditionen</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Exoten & Expeditionen</h1>
            <p className="text-xl max-w-2xl">
              Für Abenteuerlustige und Extremsegler
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
        {/* Warning */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant border-sunset/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sunset">
                <AlertTriangle className="w-5 h-5" />
                Nur für erfahrene Expeditionssegler
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Diese Reviere erfordern maximale Segelerfahrung, spezielle Ausrüstung und 
                professionelle Vorbereitung. Nur für Crews mit Expeditions-Erfahrung geeignet.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Expedition Destinations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Expeditionsziele</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expeditions.map((expedition, index) => (
              <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="flex items-center gap-2 text-ocean-dark">
                      <MapPin className="w-4 h-4 text-sunset" />
                      {expedition.name}
                    </CardTitle>
                    <Badge variant="outline" className={`text-xs ${
                      expedition.difficulty === 'Extrem' ? 'border-red-500 text-red-500' :
                      expedition.difficulty === 'Sehr hoch' ? 'border-orange-500 text-orange-500' :
                      'border-yellow-500 text-yellow-500'
                    }`}>
                      {expedition.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{expedition.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ocean-dark mb-8 text-center">Was Sie erwartet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-ocean">
                <CardContent className="pt-6">
                  <Mountain className="w-8 h-8 text-sunset mx-auto mb-3" />
                  <p className="font-medium text-ocean-dark">{feature}</p>
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
                Bereit für das Abenteuer?
              </h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Unsere Expeditions-Experten beraten Sie gerne über die Möglichkeiten 
                und Voraussetzungen für diese außergewöhnlichen Segelabenteuer.
              </p>
              <Button variant="transparent" size="lg">
                Expeditions-Beratung anfragen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Expeditions;