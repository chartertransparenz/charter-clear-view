import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import pacific from "@/assets/pacific.jpg";

const NewCaledonia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Südwest-Pazifik" },
    { icon: Calendar, label: "Beste Zeit", value: "April-November" },
    { icon: Users, label: "Geeignet für", value: "Alle Erfahrungsstufen" },
    { icon: Anchor, label: "Highlight", value: "Weltweit größte Lagune" }
  ];

  const regions = [
    {
      name: "Neukaledonien",
      link: "/reviere/suedpazifik/neukaledonien/neukaledonien",
      description: "Französisches Territorium mit der weltweit größten Lagune",
      cities: ["Nouméa"]
    }
  ];

  const highlights = [
    "Weltweit größte Lagune",
    "UNESCO Welterbe Riff",
    "Französisches Überseegebiet",
    "Melanesische Kultur",
    "Unberührte Naturschönheit",
    "Exzellente Nickel-Vorkommen",
    "Vielfältige Meerestierwelt"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={pacific}
          alt="Neukaledonien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇳🇨 Neukaledonien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Neukaledonien</h1>
            <p className="text-xl max-w-2xl">
              Die weltweit größte Lagune
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/suedpazifik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zum Südpazifik
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Neukaledonien</h2>
            <p className="text-lg text-gray-600 mb-4">
              Neukaledonien bietet ein einzigartiges Segelerlebnis in der weltweit 
              größten Lagune, die zum UNESCO-Welterbe gehört. Das französische 
              Überseegebiet kombiniert melanesische Kultur mit französischem 
              Savoir-vivre und spektakulärer Naturschönheit.
            </p>
            <p className="text-lg text-gray-600">
              Die geschützte Lagune mit ihrer einzigartigen Meeresfauna, 
              unberührte Inseln und die entspannte Atmosphäre machen 
              Neukaledonien zu einem perfekten Ziel für naturbegeisterte Segler.
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full max-w-2xl mx-auto">
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
              Bereit für Neukaledonien?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die weltweit größte Lagune und die einzigartige 
              Mischung aus französischer Eleganz und melanesischer Kultur.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Neukaledonien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCaledonia;