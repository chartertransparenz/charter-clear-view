import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationGreece from "@/assets/destination-greece.jpg";

const Greece = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Östliches Mittelmeer" },
    { icon: Calendar, label: "Beste Zeit", value: "April-Oktober" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Inseln", value: "Über 6.000 Inseln" }
  ];

  const regions = [
    {
      name: "Athen/Saronischer Golf",
      link: "/reviere/mittelmeer/griechenland/athen-saronischer-golf",
      description: "Idealer Ausgangspunkt für Inselhopping mit geschützten Gewässern"
    },
    {
      name: "Dodekanes",
      link: "/reviere/mittelmeer/griechenland/dodekanes",
      description: "Südöstliche Inselgruppe mit Rhodos und Kos",
      cities: ["Kos", "Rhodos"]
    },
    {
      name: "Ionische Inseln",
      link: "/reviere/mittelmeer/griechenland/ionische-inseln",
      description: "Grüne Inseln im Westen mit türkisfarbenem Wasser",
      cities: ["Korfu", "Lefkas", "Preveza", "Zakynthos"]
    },
    {
      name: "Kykladen",
      link: "/reviere/mittelmeer/griechenland/kykladen",
      description: "Klassisches Griechenland mit weißen Häusern und blauen Kuppeln",
      cities: ["Mykonos", "Paros"]
    },
    {
      name: "Nordgriechenland",
      link: "/reviere/mittelmeer/griechenland/nordgriechenland",
      description: "Weniger touristisch mit authentischem griechischen Charme",
      cities: ["Avdira", "Kavala", "Nikiti"]
    },
    {
      name: "Peloponnes",
      link: "/reviere/mittelmeer/griechenland/peloponnes",
      description: "Historische Halbinsel mit geschützten Buchten",
      cities: ["Kalamata"]
    },
    {
      name: "Sporaden",
      link: "/reviere/mittelmeer/griechenland/sporaden",
      description: "Grüne Inseln im Nordwesten der Ägäis",
      cities: ["Skiathos", "Skopelos", "Volos"]
    }
  ];

  const highlights = [
    "Über 6.000 Inseln zum Entdecken",
    "Konstante Meltemi-Winde im Sommer",
    "Authentische Tavernen und Gastfreundschaft",
    "Kristallklares, türkisfarbenes Wasser",
    "Reiche Geschichte und Mythologie",
    "Kurze Distanzen zwischen den Inseln",
    "Perfekt für Bareboat-Charter"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationGreece}
          alt="Griechenland Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇬🇷 Griechenland</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Griechenland</h1>
            <p className="text-xl max-w-2xl">
              Das ultimative Inselhopping-Paradies
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/mittelmeer" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Mittelmeer
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Griechenland</h2>
            <p className="text-lg text-gray-600 mb-4">
              Griechenland ist das Segelparadies schlechthin! Mit über 6.000 Inseln, 
              konstanten Winden und kristallklarem Wasser bietet das Land unendliche 
              Möglichkeiten für unvergessliche Segeltörns.
            </p>
            <p className="text-lg text-gray-600">
              Von den party-lebendigen Kykladen über die grünen Ionischen Inseln bis 
              zu den geschichtsträchtigen Dodekanes - jede Region hat ihren eigenen Charme.
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="grid grid-cols-2 gap-2">
                        {region.cities.map((city, idx) => (
                          <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für griechisches Inselhopping?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die Schönheit der griechischen Inseln mit ihren 
              traumhaften Buchten, authentischen Tavernen und legendären Sonnenuntergängen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Griechenland Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greece;