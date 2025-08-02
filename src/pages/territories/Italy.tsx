import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationItaly from "@/assets/destination-italy.jpg";

const Italy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Mittelmeer" },
    { label: "Beste Zeit", value: "April - Oktober" },
    { label: "Geeignet für", value: "Alle Segelerfahrungen" },
    { label: "Besonderheit", value: "Dolce Vita & Kultur" }
  ];

  const regions = [
    {
      name: "Sardinien & Costa Smeralda",
      bases: ["Olbia", "Portisco", "Cannigione"],
      description: "Exklusive Buchten, kristallklares Wasser und mondäne Häfen"
    },
    {
      name: "Elba & Toskanischer Archipel", 
      bases: ["Portoferraio", "Marina di Campo"],
      description: "Napoleons Exil-Insel mit charmanten Küstenstädten"
    },
    {
      name: "Sizilien & Liparische Inseln",
      bases: ["Palermo", "Catania", "Lipari"],
      description: "Vulkanische Landschaften und authentische italienische Kultur"
    },
    {
      name: "Amalfiküste & Golf von Neapel",
      bases: ["Salerno", "Castellammare"],
      description: "Spektakuläre Küstenlandschaft und romantische Atmosphäre"
    }
  ];

  const highlights = [
    "Exzellente italienische Küche",
    "Wunderschöne Küstenlandschaften", 
    "Reiche Geschichte und Kultur",
    "Kristallklares Wasser",
    "Abwechslungsreiche Routen",
    "Gastfreundliche Marinas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationItaly}
          alt="Italien Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇮🇹</span>
            <Badge className="bg-orange-500 text-white">Top #3 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Italien</h1>
          <p className="text-lg text-white/90 max-w-md">
            Sardinien, Elba, Sizilien & Amalfiküste - Dolce Vita auf dem Wasser
          </p>
        </div>
        <Link 
          to="/#reviere" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
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

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Warum Italien?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Italien bietet eine einzigartige Kombination aus spektakulären Küstenlandschaften, 
              kristallklarem Wasser und der berühmten italienischen Lebensart. Von den exklusiven 
              Buchten der Costa Smeralda bis zu den vulkanischen Liparischen Inseln erleben Sie 
              "Dolce Vita" auf dem Wasser.
            </p>
            <p className="text-lg text-gray-600">
              Die italienischen Segelreviere überzeugen mit hervorragender Infrastruktur, 
              exzellenter Küche und einer perfekten Mischung aus Entspannung und Kultur.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Stützpunkte:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.bases.map((base, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                        {base}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für "Dolce Vita" auf dem Wasser?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie Italiens schönste Küsten und erleben Sie unvergessliche 
              Momente zwischen Kultur, Kulinarik und kristallklarem Wasser.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Italien-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Italy;