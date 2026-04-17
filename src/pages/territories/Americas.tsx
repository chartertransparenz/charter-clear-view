import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
const caribbean = "/lovable-uploads/c766448f-b061-494f-aecd-f58670d94300.webp";
const Americas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Region",
    value: "Nord- & Zentralamerika"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Nov-Apr (Karibik), Mai-Okt (Nordamerika)"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Ankerplätze",
    value: "Zahlreiche geschützte Buchten"
  }];
  const regions = [{
    name: "Bahamas",
    link: "/reviere/amerika-bahamas/bahamas",
    bases: "Nassau, Georgetown",
    description: "Kristallklares Wasser, unberührte Sandbänke und traumhafte Ankerplätze in den Exumas."
  }, {
    name: "Mexiko, Baja California",
    link: "/reviere/amerika-bahamas/mexiko",
    bases: "La Paz, Cabo San Lucas",
    description: "Wüste trifft Meer im Golf von Kalifornien - ein Segelparadies mit spektakulärer Natur und Tierwelt."
  }, {
    name: "Belize",
    link: "/reviere/amerika-bahamas/belize",
    bases: "Belize City, Placencia",
    description: "Unberührtes Segelparadies am größten Korallenriff der westlichen Hemisphäre."
  }, {
    name: "Florida Keys",
    link: "/reviere/amerika-bahamas/florida-keys",
    bases: "Key West, Key Largo",
    description: "Einzigartige Inselkette mit tropischem Flair und entspanntem Segeln."
  }, {
    name: "USA Ostküste",
    link: "/reviere/amerika-bahamas/usa-ostkueste",
    bases: "Newport, Boston, Annapolis",
    description: "Klassisches amerikanisches Segeln mit historischen Häfen und maritimer Tradition."
  }];
  const highlights = ["Kristallklares Wasser der Bahamas", "Entspanntes Line-of-sight Segeln", "Vielfältige Kulturen und Küchen", "Ganzjährig warmes Klima (Süden)", "Exzellente Marina-Infrastruktur", "Traumhafte Sandstrände und Buchten", "Wassersport und Schnorcheln"];
  const routes = ["Bahamas: Nassau - Exumas - Eleuthera", "Florida Keys: Key West - Dry Tortugas", "USA Ostküste: Newport - Martha's Vineyard", "Mexiko: La Paz - Isla Espíritu Santo - Los Islotes"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/c34ad746-b92d-4e55-a09d-c0a32d23dc4d.webp" alt="Amerika & Bahamas" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇺🇸 Amerika & Bahamas</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Amerika & Bahamas</h1>
            <p className="text-xl max-w-2xl">
              Von den Bahamas bis zur US-Ostküste - Segeln im amerikanischen Stil
            </p>
          </div>
        </div>
        <Link to="/" className="absolute top-6 left-6" onClick={() => {
        setTimeout(() => {
          document.getElementById('reviere')?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }}>
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
                <BreadcrumbPage>Amerika & Bahamas</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Warum Amerika & Bahamas?</h2>
            <p className="text-lg text-gray-600 mb-4">
              Die amerikanischen Gewässer bieten eine einzigartige Vielfalt - von den kristallklaren 
              Lagunen der Bahamas über die tropischen Florida Keys bis zur geschichtsträchtigen 
              Ostküste der USA. Hier erwartet Sie erstklassige Infrastruktur, entspanntes Segeln 
              und die legendäre amerikanische Gastfreundschaft.
            </p>
            <p className="text-lg text-gray-600">
              Besonders die Bahamas gelten als eines der schönsten Segelreviere weltweit - mit 
              türkisfarbenem Wasser, unberührten Sandbänken und perfekten Bedingungen für 
              Bareboat-Charter und Familiensegeln.
            </p>
          </div>
        </div>

        {/* Highlights */}
        

        {/* Sailing Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Regionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => <Link key={index} to={region.link} className="group">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{region.name}</h3>
                  </div>
                  <p className="text-sm text-blue-600 mb-3 font-medium">Charter-Standorte: {region.bases}</p>
                  <p className="text-gray-600">{region.description}</p>
                </div>
              </Link>)}
          </div>
        </div>

        {/* Popular Routes */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Bereit für amerikanisches Segeln?
            </h3>
            <p className="mb-6 text-gray-700">
              Entdecken Sie die Vielfalt der amerikanischen Gewässer - von den Traumstränden 
              der Bahamas bis zu den historischen Häfen der US-Ostküste.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                Amerika & Bahamas Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
      
      <TopDestinations />
    </div>;
};
export default Americas;