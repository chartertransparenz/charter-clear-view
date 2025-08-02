import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationSeychelles from "@/assets/destination-seychelles.jpg";

const Seychelles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [
    { label: "Lage", value: "Indischer Ozean" },
    { label: "Beste Zeit", value: "April - Mai, Oktober - November" },
    { label: "Geeignet für", value: "Katamaran bevorzugt" },
    { label: "Besonderheit", value: "Tropisches Inselparadies" }
  ];

  const regions = [
    {
      name: "Mahé",
      bases: ["Eden Marine", "Praslin"],
      description: "Hauptinsel mit internationaler Anbindung und moderner Marina"
    },
    {
      name: "Praslin", 
      bases: ["Baie Ste Anne", "Côte d'Or"],
      description: "Vallée de Mai Weltkulturerbe und traumhafte Strände"
    },
    {
      name: "La Digue",
      bases: ["La Passe"],
      description: "Bilderbuch-Strände mit einzigartigen Granitfelsen"
    },
    {
      name: "Amiranten",
      bases: ["Desroches"],
      description: "Entlegene Korallenatolle für erfahrene Crews"
    }
  ];

  const highlights = [
    "Tropisches Inselparadies",
    "Katamaran ideal geeignet", 
    "Glasklares, warmes Wasser",
    "Weltklasse Schnorcheln",
    "Ankern vor Traumstränden",
    "Einzigartige Tierwelt",
    "Granitfelsen-Landschaften",
    "Absolute Abgeschiedenheit"
  ];

  const routes = [
    "Mahé - Praslin - La Digue",
    "Cousin - Curieuse Islands", 
    "Aride - St. Pierre",
    "Amiranten Expedition"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationSeychelles}
          alt="Seychellen Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇸🇨</span>
            <Badge className="bg-green-600 text-white">Top #9 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Seychellen</h1>
          <p className="text-lg text-white/90 max-w-md">
            Indischer Ozean - Tropisches Inselparadies für Katamaran-Charter
          </p>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Warum die Seychellen?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die Seychellen sind das Traumziel für Katamaran-Charter im Indischen Ozean. 
              115 Inseln mit einzigartigen Granitfelsen, weißen Sandstränden und 
              türkisblauem Wasser bilden ein tropisches Paradies, das seinesgleichen sucht.
            </p>
            <p className="text-lg text-gray-600">
              Das glasklare Wasser ist ideal zum Schnorcheln und Ankern vor 
              unberührten Stränden. Die Seychellen bieten absolute Abgeschiedenheit 
              und eine einzigartige Tier- und Pflanzenwelt.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                <Star className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Inselgruppen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-gray-600 mb-4">{region.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Ankerplätze:</h4>
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

        {/* Popular Routes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Beliebte Routen</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid gap-3 md:grid-cols-2">
              {routes.map((route, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{route}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für das Paradies?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie mit einem Katamaran die Trauminseln der Seychellen 
              und erleben Sie unberührte Natur im Indischen Ozean.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Seychellen-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seychelles;