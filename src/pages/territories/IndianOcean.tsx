import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Palmtree, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import indianOcean from "@/assets/indian-ocean.jpg";

const IndianOcean = () => {
  const regions = [
    { name: "Seychellen", description: "Ideal für Lagunen, Natur und entspannte Charter" },
    { name: "Malediven", description: "Exotisch, eher Motoryacht-Charter" },
    { name: "Mauritius & Réunion", description: "Vielfältige Inselwelten im Indischen Ozean" }
  ];

  const advantages = [
    "Exotisch",
    "Türkisfarbene Lagunen", 
    "Tropisches Klima",
    "Unberührte Natur"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={indianOcean}
          alt="Indischer Ozean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🐧 Indischer Ozean</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Indischer Ozean</h1>
            <p className="text-xl max-w-2xl">
              Exotische Lagunen und tropisches Paradies
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
              <Sun className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Tropisches Paradies</h2>
            </div>
            <p className="text-lg text-gray-600">
              Exotische Segelreviere mit türkisfarbenen Lagunen und tropischem Klima. 
              Die perfekte Destination für entspanntes Charter-Segeln in unberührter Natur.
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
                <p className="text-sm text-gray-600">{region.description}</p>
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
                <Palmtree className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Exotik pur erleben?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die exotischsten Segelreviere der Welt mit kristallklaren 
              Lagunen und unberührter tropischer Natur.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
              Indischer Ozean Charter anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndianOcean;