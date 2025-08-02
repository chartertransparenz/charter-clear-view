import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Anchor, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import atlantic from "@/assets/atlantic.jpg";

const Atlantic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [
    { name: "Kanaren", areas: ["Gran Canaria", "Teneriffa", "Lanzarote"] },
    { name: "Kapverden", areas: ["Mindelo", "Praia"] },
    { name: "Azoren", areas: ["Angra do Heroísmo", "Horta"] }
  ];

  const advantages = [
    "Ganzjähriges Segeln möglich",
    "Kräftigere Winde", 
    "Sportlichere Törns",
    "Atlantiküberquerungen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={atlantic}
          alt="Atlantik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🌊 Atlantik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Atlantik</h1>
            <p className="text-xl max-w-2xl">
              Kanaren, Kapverden & Azoren
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
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Atlantik-Feeling</h2>
            </div>
            <p className="text-lg text-gray-600">
              Perfekte Bedingungen für sportliches Segeln mit konstanten Passatwinden 
              und ganzjährig milden Temperaturen.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <h3 className="text-xl font-semibold text-gray-800">{region.name}</h3>
                </div>
                <div className="space-y-2">
                  {region.areas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Anchor className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Lust auf Atlantik?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie echtes Segeln mit kräftigen Winden und endlosen 
              Horizonten in den schönsten Atlantik-Destinationen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Atlantik-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atlantic;