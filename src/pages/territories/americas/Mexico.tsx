import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Mexico = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Charter-Standorte",
    value: "La Paz, Cabo San Lucas"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "November-April"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Wüste trifft Meer"
  }];
  const charterBases = [{
    name: "La Paz",
    link: "/reviere/amerika-bahamas/mexiko/la-paz",
    description: "Charmante Hauptstadt von Baja California Sur mit authentischem mexikanischen Flair",
    highlights: ["Marina de La Paz", "Isla Espíritu Santo", "Seelöwen-Kolonien", "Perlentauchen Geschichte"]
  }, {
    name: "Cabo San Lucas",
    link: "/reviere/amerika-bahamas/mexiko/cabo-san-lucas",
    description: "Weltberühmtes Segelziel am südlichsten Punkt der Baja California",
    highlights: ["El Arco", "Marina Cabo San Lucas", "Pazifik & Cortez-See", "Luxuriöse Resorts"]
  }];
  const sailingHighlights = ["Golf von Kalifornien (Sea of Cortez)", "Walbeobachtung", "Seelöwen-Kolonien", "Wüsteninseln", "Weltklasse Sportfischen", "Authentische mexikanische Kultur", "Spektakuläre Sonnenuntergänge"];
  const popularRoutes = ["La Paz - Isla Espíritu Santo - Los Islotes", "Cabo San Lucas - La Paz - Loreto", "La Paz - Isla Cerralvo - Isla San José", "Cabo San Lucas - El Arco - Lover's Beach"];
  const culturalHighlights = [{
    name: "El Arco",
    description: "Das berühmte Felsentor am südlichsten Punkt der Baja California"
  }, {
    name: "Mission San Xavier",
    description: "Historische Jesuitenmission aus dem 18. Jahrhundert"
  }, {
    name: "Perlentauchen-Geschichte",
    description: "La Paz war einst das Zentrum der Perlentaucherei im Golf von Kalifornien"
  }, {
    name: "Cabo Pulmo Nationalpark",
    description: "UNESCO-Welterbe mit einem der ältesten Korallenriffe Nordamerikas"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/2e57e252-c2db-41f7-956a-4e0a8859e082.png" alt="Mexiko Yacht Charter" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇲🇽 Mexiko</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mexiko, Baja California</h1>
            <p className="text-xl max-w-2xl">
              Wüste trifft Meer in spektakulärer Landschaft
            </p>
          </div>
        </div>
        <Link to="/reviere/amerika-bahamas" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Amerika & Bahamas
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/#reviere">Reviere</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/amerika-bahamas">Amerika & Bahamas</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Mexiko</BreadcrumbPage>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Baja California</h2>
            <p className="text-lg text-gray-600 mb-4">
              Baja California bietet ein einzigartiges Segelerlebnis, wo die Wüste auf den 
              Golf von Kalifornien trifft. Diese unberührte Region ist bekannt für ihre 
              reiche Meeresbiologie mit Walen, Seelöwen und spektakulären Wüsteninseln, 
              die ein wahres Naturparadies für Segler schaffen.
            </p>
            <p className="text-lg text-gray-600">
              Von der charmanten Hauptstadt La Paz bis zum weltberühmten Cabo San Lucas 
              bietet Baja California authentische mexikanische Kultur, erstklassige 
              Marinas und unvergessliche Segelerlebnisse in kristallklaren Gewässern.
            </p>
          </div>
        </div>

        {/* Charter Bases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charter-Standorte</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {charterBases.map((base, index) => <Link key={index} to={base.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {base.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{base.description}</p>
                    <div className="space-y-1">
                      {base.highlights.map((highlight, idx) => <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <p className="text-sm text-gray-700">{highlight}</p>
                        </div>)}
                    </div>
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>

        {/* Cultural Highlights */}
        

        {/* Sailing Highlights */}
        

        {/* Popular Routes */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Mexiko?
            </h3>
            <p className="mb-6 text-blue-100">
              Erleben Sie spektakuläre Walbeobachtungen, schwimmen Sie mit Seelöwen 
              und entdecken Sie die unberührte Schönheit des Golf von Kalifornien.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Mexiko Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Mexico;