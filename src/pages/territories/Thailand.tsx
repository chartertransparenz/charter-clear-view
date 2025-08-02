import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import CharterRequestForm from "@/components/CharterRequestForm";
import destinationThailand from "@/assets/destination-thailand.jpg";

const Thailand = () => {
  const quickFacts = [
    { label: "Lage", value: "Andamanensee, Südthailand" },
    { label: "Beste Zeit", value: "November - April" },
    { label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { label: "Besonderheit", value: "Exotische Felseninseln" }
  ];

  const regions = [
    {
      name: "Phuket",
      bases: ["Ao Po", "Royal Phuket Marina", "Yacht Haven"],
      description: "Hauptbasis mit bester Infrastruktur und internationalen Flugverbindungen"
    },
    {
      name: "Phang Nga Bay", 
      bases: ["Ao Po", "Krabi"],
      description: "Berühmte Kalksteinfelsen und versteckte Lagunen wie James Bond Island"
    },
    {
      name: "Krabi & Railay",
      bases: ["Ao Nang", "Railay Beach"],
      description: "Spektakuläre Klippen und kristallklare Buchten"
    },
    {
      name: "Langkawi (Malaysia)",
      bases: ["Kuah", "Telaga Harbour"],
      description: "Grenzüberschreitende Törns in malaysische Gewässer"
    }
  ];

  const highlights = [
    "Exotische Felseninseln-Kulisse",
    "Günstige Charterpreise", 
    "Reiche Kultur & Küche",
    "Warmes, tropisches Wasser",
    "Versteckte Lagunen",
    "Freundliche Bevölkerung",
    "Beste Reisezeit Nov-Apr",
    "Kombination Segeln & Landprogramm"
  ];

  const routes = [
    "Phuket - Phang Nga Bay",
    "James Bond Island - Koh Yao", 
    "Krabi - Phi Phi Islands",
    "Langkawi - Penang"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={destinationThailand}
          alt="Thailand Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇹🇭</span>
            <Badge className="bg-yellow-500 text-white">Top #8 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Thailand</h1>
          <p className="text-lg text-white/90 max-w-md">
            Phuket & Andamanensee - Exotische Segelträume in Fernost
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Warum Thailand?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Thailand bietet eine einzigartige Kombination aus spektakulären 
              Kalksteinfelsen, versteckten Lagunen und exotischer Kultur. 
              Die Andamanensee rund um Phuket ist berühmt für ihre türkisblauen 
              Gewässer und die markanten Felseninseln.
            </p>
            <p className="text-lg text-gray-600">
              Günstige Charterpreise, freundliche Menschen und die fantastische 
              thailändische Küche machen jeden Segeltörn zu einem unvergesslichen 
              Abenteuer in Fernost.
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
              Bereit für Fernost-Abenteuer?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie exotisches Segeln zwischen Kalksteinfelsen und 
              entdecken Sie die versteckten Schätze der Andamanensee.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Thailand-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thailand;