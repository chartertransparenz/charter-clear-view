import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Anchor, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import thailandSailing from "@/assets/thailand-sailing.jpg";

const Phuket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Lage",
      value: "Andamanensee, Südthailand"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Beste Reisezeit",
      value: "November - April"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      label: "Segelwetter",
      value: "NE Monsun 12-22 kn"
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Chartertyp",
      value: "Katamaran & Monohull"
    }
  ];

  const marinas = [
    {
      name: "Yacht Haven Marina",
      description: "Premium Marina im Nordosten Phukets",
      facilities: ["5-Sterne Service", "Superyacht Berths", "Fine Dining", "Zoll & Immigration"]
    },
    {
      name: "Royal Phuket Marina",
      description: "Luxury Marina mit Wohnkomplex",
      facilities: ["Luxus Marina", "Shopping", "Restaurants", "Apartment Living"]
    },
    {
      name: "Chalong Bay",
      description: "Traditioneller Fischerhafen",
      facilities: ["Lokale Atmosphäre", "Reparaturen", "Provisioning", "Big Buddha nahe"]
    }
  ];

  const highlights = [
    "Phang Nga Bay Kalksteinfelsen",
    "James Bond Island",
    "Phi Phi Islands Tagesausflüge",
    "Similan Islands Nationalpark",
    "Phukets Nightlife und Strände",
    "Authentische Thai-Küche",
    "Tropische Kalkstein-Lagunen",
    "Internationale Marina-Infrastruktur"
  ];

  const attractions = [
    {
      name: "Phang Nga Bay",
      description: "Spektakuläre Kalksteinfelsen im Meer",
      type: "Natur"
    },
    {
      name: "Phi Phi Islands",
      description: "Berühmte Trauminseln",
      type: "Tagesausflug"
    },
    {
      name: "Similan Islands",
      description: "Weltklasse Tauchgebiet",
      type: "Nationalpark"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={thailandSailing}
          alt="Phuket Thailand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-emerald-500 text-white">🏝️ Phuket</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Phuket</h1>
            <p className="text-xl max-w-2xl">
              Thailands Premium Segel-Destination
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/indischer-ozean/asien/thailand" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Thailand
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="flex justify-center text-emerald-600 mb-2">
                  {fact.icon}
                </div>
                <div className="font-semibold text-sm text-gray-600 mb-1">
                  {fact.label}
                </div>
                <div className="text-sm font-medium">
                  {fact.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TreePine className="w-6 h-6 text-emerald-600" />
              Charter-Standort Phuket
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Phuket ist Thailands bekannteste Segelinsel und bietet die beste 
              Infrastruktur für Yachtcharter in Südostasien. Mit premium Marinas, 
              spektakulären Ausflugszielen wie der Phang Nga Bay und den Phi Phi 
              Islands ist Phuket der ideale Ausgangspunkt für Thailand-Charter.
            </p>
            <p className="text-lg text-gray-600">
              Die Insel kombiniert tropische Schönheit mit moderner Infrastruktur 
              und bietet Zugang zu einigen der schönsten Segelreviere der Welt, 
              von versteckten Lagunen bis zu Weltklasse-Tauchgebieten.
            </p>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Häfen</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Anchor className="w-5 h-5 text-emerald-600" />
                    <h3 className="text-lg font-semibold text-gray-800">{marina.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700">Ausstattung:</div>
                    <div className="flex flex-wrap gap-2">
                      {marina.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Attractions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge className="mb-2">{attraction.type}</Badge>
                    <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                <TreePine className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Charter ab Phuket
            </h3>
            <p className="mb-6 text-emerald-100">
              Starten Sie von Thailands premium Segel-Destination zu den 
              spektakulärsten Kalkstein-Formationen und Trauminseln Asiens.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50" size="lg">
                Phuket Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phuket;