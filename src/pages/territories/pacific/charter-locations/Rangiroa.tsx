import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Plane, Fish, Waves } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CharterRequestForm from "@/components/CharterRequestForm";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import pacific from "@/assets/pacific.jpg";

const Rangiroa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const marinas = [
    {
      name: "Port Avatoru",
      description: "Haupthafen des größten Atolls der Welt",
      amenities: ["25 Liegeplätze", "Fuel Station", "Provisioning", "Dive Center", "Restaurants", "Airport Transfer"]
    },
    {
      name: "Marina Tiputa",
      description: "Kleinere Marina am Tiputa-Pass",
      amenities: ["15 Liegeplätze", "Tauchbasis", "Restaurant", "Pass-Zugang", "Strömungstauchen", "Hai-Touren"]
    },
    {
      name: "Blue Lagoon Marina",
      description: "Boutique-Marina mit Lagonen-Zugang",
      amenities: ["10+ Liegeplätze", "Eco Lodge", "Schnorchel-Touren", "Perlenfarmen", "Kayak-Verleih", "Ruhe"]
    }
  ];

  const highlights = [
    "Größtes Atoll der Welt",
    "Weltklasse Tauchrevier",
    "Hai- und Rochen-Beobachtung",
    "Unberührte Korallengärten",
    "Tiputa & Avatoru Pässe",
    "Tahiti-Perlen-Zucht",
    "Pink Sand Beaches"
  ];

  const distances = [
    { destination: "Tikehau", distance: "45 sm", time: "6-8 Std." },
    { destination: "Fakarava", distance: "25 sm", time: "3-4 Std." },
    { destination: "Tahiti", distance: "220 sm", time: "28-32 Std." },
    { destination: "Manihi", distance: "80 sm", time: "10-12 Std." },
    { destination: "Ahe", distance: "30 sm", time: "4-5 Std." }
  ];

  const diveSites = [
    {
      name: "Tiputa Pass",
      description: "Strömungstauchen mit Grauen Riffhaien und Adlerrochen"
    },
    {
      name: "Avatoru Pass",
      description: "Spektakuläre Hai-Begegnungen und Mantarochen"
    },
    {
      name: "Blue Corner",
      description: "Einer der besten Tauchplätze der Welt"
    },
    {
      name: "The Aquarium",
      description: "Flaches Riff perfekt zum Schnorcheln"
    },
    {
      name: "Shark Point",
      description: "Garantierte Hai-Sichtungen in kristallklarem Wasser"
    },
    {
      name: "Napoleon Wreck",
      description: "Wrack-Tauchen mit reicher Meeresflora"
    }
  ];

  const activities = [
    {
      name: "Dolphin Watching",
      description: "Begegnungen mit wilden Delfinen"
    },
    {
      name: "Pearl Farm Tours",
      description: "Besuch von Tahiti-Perlen-Zuchtfarmen"
    },
    {
      name: "Drift Diving",
      description: "Adrenalin-reiche Strömungstauchgänge"
    },
    {
      name: "Lagoon Exploration",
      description: "Entdeckung der riesigen Atoll-Lagune"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={pacific}
          alt="Rangiroa Atoll, Französisch-Polynesien"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-teal-600 text-white">🐋 Charter-Standort</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Rangiroa</h1>
            <p className="text-xl max-w-2xl">
              Das größte Atoll der Welt - Taucher-Paradies im Tuamotu-Archipel
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

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik">Südpazifik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/suedpazifik/franzoesisch-polynesien">Französisch-Polynesien</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Rangiroa</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Fish className="w-5 h-5 text-teal-600" />
              <h2 className="text-2xl font-bold text-gray-800">Charter-Standort Rangiroa</h2>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Rangiroa ist das größte Atoll der Welt und ein weltberühmtes Tauchrevier. 
              Das ringförmige Korallenriff umschließt eine gewaltige Lagune und bietet 
              spektakuläre Tauchplätze mit Hai-Begegnungen, die ihresgleichen suchen.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-teal-50 rounded-lg">
                <MapPin className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">15°06'S 147°38'W</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <Plane className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">RGI Airport</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <Anchor className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="font-semibold">Marinas</div>
                <div className="text-sm text-gray-600">3 Atoll-Marinas</div>
              </div>
              <div className="p-3 bg-teal-50 rounded-lg">
                <Waves className="w-6 h-6 text-teal-600 mx-auto mb-2" />
                <div className="font-semibold">Lagune</div>
                <div className="text-sm text-gray-600">1,640 km²</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Marinas & Ankerplätze</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{marina.name}</h3>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    {marina.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tauchplätze */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Weltklasse Tauchplätze</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diveSites.map((site, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{site.name}</h3>
                  <p className="text-gray-600">{site.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Aktivitäten */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meeresaktivitäten</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.name}</h3>
                  <p className="text-sm text-gray-600">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Distanzen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distanzen zu anderen Atollen</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {distances.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{item.destination}</span>
                  <div className="text-right">
                    <div className="text-teal-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Rangiroa?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Tauchen Sie ein ins Rangiroa-Erlebnis</h2>
            <p className="text-xl mb-6">
              Das größte Atoll der Welt erwartet Sie
            </p>
            <CharterRequestForm>
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100">
                Taucher-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>

      <TopDestinations />
    </div>
  );
};

export default Rangiroa;