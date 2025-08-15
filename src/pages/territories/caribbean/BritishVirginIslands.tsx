import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import destinationBvi from "@/assets/destination-bvi.jpg";

const BritishVirginIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Kleine Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "Dezember-April" },
    { icon: Users, label: "Geeignet für", value: "Einsteiger bis Fortgeschrittene" },
    { icon: Anchor, label: "Inseln", value: "Über 50 Inseln und Cays" }
  ];

  const regions = [
    {
      name: "British Virgin Islands",
      link: "#",
      description: "Line-of-sight Segeln zwischen traumhaften Inseln",
      cities: ["Tortola", "Virgin Gorda", "Jost Van Dyke", "Anegada"]
    }
  ];

  const highlights = [
    "Line-of-sight Segeln",
    "Kurze Distanzen zwischen Inseln",
    "Konstante Passatwinde",
    "Kristallklares, türkisfarbenes Wasser",
    "Perfekt für Bareboat-Charter",
    "Traumhafte Ankerplätze",
    "Entspannte Karibik-Atmosphäre"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={destinationBvi}
          alt="British Virgin Islands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇻🇬 British Virgin Islands</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">British Virgin Islands</h1>
            <p className="text-xl max-w-2xl">
              Das perfekte Segelparadies der Karibik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in den British Virgin Islands</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die British Virgin Islands gelten als das ultimative Segelparadies der Karibik. 
              Mit über 50 Inseln und Cays, die perfekt für Line-of-sight Segeln angeordnet 
              sind, bieten die BVI ideale Bedingungen für entspannte Segeltörns.
            </p>
            <p className="text-lg text-gray-600">
              Konstante Passatwinde, kurze Distanzen zwischen traumhaften Ankerplätzen 
              und kristallklares Wasser machen die BVI zum perfekten Revier für 
              Bareboat-Charter und Familiensegeln.
            </p>
          </div>
        </div>

        {/* Charter Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6">
            {regions.map((region, index) => (
              <div key={index} className="max-w-2xl mx-auto">
                <Card className="shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800">
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
              </div>
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
              Bereit für die BVI?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie das ultimative Segelparadies der Karibik mit 
              perfekten Bedingungen für unvergessliche Segeltörns.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                BVI Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BritishVirginIslands;