import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Sun, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import mediterranean from "@/assets/mediterranean.jpg";

const Mediterranean = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const regions = [
    { 
      name: "Kroatien", 
      link: "/reviere/mittelmeer/kroatien", 
      areas: [
        { name: "Istrien", link: "/reviere/mittelmeer/kroatien/istrien" },
        { name: "Kvarner Bucht", link: "/reviere/mittelmeer/kroatien/kvarner-bucht" },
        { name: "Norddalmatien", link: "/reviere/mittelmeer/kroatien/norddalmatien" },
        { name: "Mitteldalmatien", link: "/reviere/mittelmeer/kroatien/mitteldalmatien" },
        { name: "Süddalmatien", link: "/reviere/mittelmeer/kroatien/sueddalmatien" }
      ]
    },
    { 
      name: "Griechenland", 
      link: "/reviere/mittelmeer/griechenland", 
      areas: [
        { name: "Kykladen", link: "/reviere/mittelmeer/griechenland/kykladen" },
        { name: "Ionische Inseln", link: "/reviere/mittelmeer/griechenland/ionische-inseln" },
        { name: "Athen/Saronischer Golf", link: "/reviere/mittelmeer/griechenland/athen-saronischer-golf" },
        { name: "Dodekanes", link: "/reviere/mittelmeer/griechenland/dodekanes" },
        { name: "Sporaden", link: "/reviere/mittelmeer/griechenland/sporaden" },
        { name: "Nordgriechenland", link: "/reviere/mittelmeer/griechenland/nordgriechenland" }
      ]
    },
    { 
      name: "Italien", 
      link: "/reviere/mittelmeer/italien", 
      areas: [
        { name: "Amalfiküste", link: "/reviere/mittelmeer/italien/amalfikuste" },
        { name: "Toskana", link: "/reviere/mittelmeer/italien/toskana" },
        { name: "Sardinien", link: "/reviere/mittelmeer/italien/sardinien" },
        { name: "Sizilien", link: "/reviere/mittelmeer/italien/sizilien" }
      ]
    },
    { 
      name: "Spanien", 
      link: "/reviere/mittelmeer/spanien", 
      areas: [
        { name: "Balearen", link: "/reviere/mittelmeer/spanien/balearen" },
        { name: "Costa Brava", link: "/reviere/mittelmeer/spanien/costa-brava" },
        { name: "Valencia", link: "/reviere/mittelmeer/spanien/valencia" }
      ]
    },
    { 
      name: "Türkei", 
      link: "/reviere/mittelmeer/tuerkei", 
      areas: [
        { name: "Bodrum", link: "/reviere/mittelmeer/tuerkei/bodrum" },
        { name: "Marmaris", link: "/reviere/mittelmeer/tuerkei/marmaris" },
        { name: "Göcek & Fethiye", link: "/reviere/mittelmeer/tuerkei/goecek-fethiye" },
        { name: "Kas & Kalkan", link: "/reviere/mittelmeer/tuerkei/kas-kalkan" }
      ]
    },
    { 
      name: "Frankreich", 
      link: "/reviere/mittelmeer/frankreich", 
      areas: [
        { name: "Côte d'Azur", link: "/reviere/mittelmeer/frankreich/cote-azur" },
        { name: "Korsika", link: "/reviere/mittelmeer/frankreich/korsika" }
      ]
    },
    { name: "Malta", link: "/reviere/mittelmeer/malta", areas: ["Valletta", "Gozo", "Comino"] },
    { name: "Montenegro", link: "/reviere/mittelmeer/montenegro", areas: ["Budva", "Kotor", "Bar"] },
    { name: "Slowenien", link: "/reviere/mittelmeer/slowenien", areas: ["Izola", "Piran", "Portorož"] }
  ];

  const advantages = [
    "Geschützte Küsten",
    "Viele Marinas", 
    "Kulturelle Vielfalt",
    "Gute Charterinfrastruktur"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/66e001de-7e8e-4a59-98c3-0219f1f5f2e2.png"
          alt="Mittelmeer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-500 text-white">🌍 Europa & Nordafrika</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mittelmeer</h1>
            <p className="text-xl max-w-2xl">
              Das beliebteste Segelrevier weltweit
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
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Mittelmeer</BreadcrumbPage>
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
              <h2 className="text-2xl font-bold text-gray-800">Warum das Mittelmeer?</h2>
            </div>
            <p className="text-lg text-gray-600">
              Das beliebteste Segelrevier weltweit, wegen stabiler Wetterbedingungen, 
              kurzer Distanzen, reicher Geschichte und hervorragender Infrastruktur.
            </p>
          </div>
        </div>

        {/* Top Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <Link key={index} to={region.link} className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">{region.name}</h3>
                  </div>
                   <div className="space-y-2">
                     {region.areas.map((area, idx) => (
                       <div key={idx} className="flex items-center gap-2 text-sm">
                         <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                         {typeof area === 'object' && area.link ? (
                           <Link to={area.link} className="text-gray-600 hover:text-orange-600 transition-colors" onClick={(e) => e.stopPropagation()}>
                             {area.name}
                           </Link>
                         ) : (
                           <span className="text-gray-600">{typeof area === 'string' ? area : area.name}</span>
                         )}
                       </div>
                     ))}
                  </div>
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
                <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="font-medium text-gray-800">{advantage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für das Mittelmeer?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie die schönsten Destinationen des Mittelmeers mit unserer 
              professionellen Beratung und erstklassigen Yachten.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Mittelmeer-Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>
  );
};

export default Mediterranean;