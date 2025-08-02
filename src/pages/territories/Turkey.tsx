import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Star, Sun, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import CharterRequestForm from "@/components/CharterRequestForm";
import destinationTurkey from "@/assets/destination-turkey.jpg";

const Turkey = () => {
  const quickFacts = [
    { label: "Lage", value: "Türkische Ägäis" },
    { label: "Beste Zeit", value: "Mai - Oktober" },
    { label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { label: "Besonderheit", value: "Blue Cruise Tradition" }
  ];

  const regions = [
    {
      name: "Bodrum & Halbinsel",
      bases: ["Bodrum", "Turgutreis"],
      description: "Lebendige Hafenstadt mit antiker Geschichte"
    },
    {
      name: "Marmaris & Datça", 
      bases: ["Marmaris", "Datça"],
      description: "Geschützte Buchten und ursprüngliche Landschaften"
    },
    {
      name: "Göcek & Fethiye",
      bases: ["Göcek", "Fethiye"],
      description: "Premium-Destination mit exklusiven Marinas"
    },
    {
      name: "Kas & Demre",
      bases: ["Kas", "Kalkan"],
      description: "Antike Lykische Küste mit kristallklarem Wasser"
    }
  ];

  const highlights = [
    "Blue Cruise Tradition",
    "Gület-Charter beliebt", 
    "Warmes, kristallklares Wasser",
    "Geschützte Buchten",
    "Gastfreundschaft & Kultur",
    "Ausgezeichnetes Preis-Leistungs-Verhältnis",
    "Antike Stätten an der Küste",
    "Hervorragende türkische Küche"
  ];

  const routes = [
    "Bodrum - Griechische Inseln",
    "Marmaris - Göcek", 
    "Fethiye - Kas - Demre",
    "Göcek - Zwölf Inseln"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={destinationTurkey}
          alt="Türkei Segelrevier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇹🇷</span>
            <Badge className="bg-red-600 text-white">Top #5 Destination</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Türkei</h1>
          <p className="text-lg text-white/90 max-w-md">
            Türkische Ägäis - Blue Cruise Tradition mit warmen Gewässern
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Warum die Türkei?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die türkische Ägäis ist berühmt für ihre "Blue Cruise" Tradition und 
              bietet eine einzigartige Kombination aus kristallklarem Wasser, 
              geschützten Buchten und reicher Geschichte. Die Küste zwischen Bodrum 
              und Kas gehört zu den schönsten Segelrevieren des Mittelmeers.
            </p>
            <p className="text-lg text-gray-600">
              Besonders beliebt sind Gület-Charter, die traditionellen türkischen 
              Holzyachten, die ein authentisches Segelerlebnis mit orientalischem 
              Flair verbinden.
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
              Bereit für die Blue Cruise?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie die türkische Gastfreundschaft und entdecken Sie 
              kristallklare Buchten entlang der antiken Lykischen Küste.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Türkei-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turkey;