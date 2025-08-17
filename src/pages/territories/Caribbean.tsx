import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Waves, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [
    { 
      name: "Britische Jungferninseln (BVI)", 
      description: "Das weltweit beliebteste Charterrevier",
      link: "/reviere/karibik/britische-jungferninseln",
      areas: ["Tortola", "Virgin Gorda", "Jost Van Dyke", "Anegada"]
    },
    { 
      name: "US Virgin Islands", 
      description: "Amerikaniches Karibik-Territorium",
      link: "/reviere/karibik/us-virgin-islands",
      areas: ["St. Thomas", "St. John", "St. Croix"]
    },
    { 
      name: "Leeward Inseln", 
      description: "Antigua, St. Martin, Guadeloupe",
      link: "/reviere/karibik/leeward-inseln",
      areas: ["Antigua", "St. Martin", "Guadeloupe", "St. Kitts"]
    },
    { 
      name: "Windward Inseln", 
      description: "Grenadinen, St. Vincent, Martinique",
      link: "/reviere/karibik/windward-inseln", 
      areas: ["St. Vincent", "Bequia", "Tobago Cays", "Martinique"]
    },
    { 
      name: "Kuba", 
      description: "Zunehmend beliebter, ursprünglicher",
      link: "/reviere/karibik/kuba",
      areas: ["Havanna", "Cienfuegos", "Trinidad", "Cayo Largo"]
    }
  ];

  const advantages = [
    "Warmes Wasser",
    "Stabile Passatwinde", 
    "Unzählige Inseln",
    "Line of Sight Sailing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src={caribbean}
          alt="Karibik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🏝️ Karibik & Atlantik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Karibik</h1>
            <p className="text-xl max-w-2xl">
              Traumhafte Inseln mit perfekten Segelbedingungen
            </p>
          </div>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('reviere')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
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
                <BreadcrumbPage>Karibik</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-800">Karibik-Feeling</h2>
            </div>
            <p className="text-lg text-gray-600">
              Türkisfarbenes Wasser, perfekte Temperaturen und zuverlässige Passatwinde machen 
              die Karibik zum Segelparadies schlechthin.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="block hover:no-underline group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full group-hover:scale-105 cursor-pointer border border-transparent hover:border-blue-200">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500 group-hover:text-orange-600" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{region.name}</h3>
                  </div>
                  {region.description && (
                    <p className="text-sm text-gray-600 mb-3 group-hover:text-gray-700">{region.description}</p>
                  )}
                  {region.areas && (
                    <div className="space-y-2">
                      {region.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-600"></div>
                          <span className="text-gray-600 group-hover:text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Advantages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Vorteile</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Waves className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ab in die Karibik?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie das Karibik-Feeling mit türkisem Wasser, weißen Stränden 
              und entspannter Inselatmosphäre.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Karibik-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;