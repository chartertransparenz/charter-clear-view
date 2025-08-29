import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
const Sizilien = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Größte Mittelmeerinsel"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Mai-Oktober"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Vielfältige Küsten"
  }];
  const cities = ["Capo d'Orlando", "Marsala", "Palermo", "Portorosa", "Sant'Agata di Militello", "Trapani"];
  const highlights = ["Größte Insel des Mittelmeers", "Vielfältige Küstenlandschaften", "Reiche Geschichte und Kultur", "Authentische sizilianische Küche", "Aktive Vulkane (Ätna, Stromboli)", "Kristallklares Wasser", "Zahlreiche geschützte Buchten", "Excellente Windverhältnisse", "Ganzjährig mildes Klima"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/b7d7c0a7-0a06-469c-b6e5-08e0ff93bd91.png" alt="Sizilien Küste mit historischen Mauern und türkisfarbenem Meer" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇮🇹 Italien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Sizilien</h1>
            <p className="text-xl max-w-2xl">
              Größte Insel des Mittelmeers
            </p>
          </div>
        </div>
        <Link to="/reviere/mittelmeer/italien" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Italien
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
                  <Link to="/reviere/mittelmeer">Mittelmeer</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/reviere/mittelmeer/italien">Italien</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Sizilien</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="shadow-lg">
              <CardContent className="p-6 text-center">
                <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
                <p className="text-sm text-gray-600">{fact.value}</p>
              </CardContent>
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln rund um Sizilien</h2>
              <p className="text-lg text-gray-600 mb-4">
                Sizilien, die größte Insel des Mittelmeers, bietet eine faszinierende Vielfalt 
                an Segelrevieren. Von der dramatischen Nordküste bis zur sonnenverwöhnten 
                Südküste vereint die Insel spektakuläre Landschaften, reiche Kultur und 
                perfekte Segelbedingungen.
              </p>
              <p className="text-lg text-gray-600">
                Die strategische Lage im Zentrum des Mittelmeers macht Sizilien zum idealen 
                Ausgangspunkt für längere Törns, während die vielfältigen Küsten der Insel 
                selbst unendliche Entdeckungsmöglichkeiten bieten.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors & Ports */}
        <div className="mb-12">
          
          
        </div>

        {/* Highlights */}
        <div className="mb-12">
          
          
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für sizilianisches Abenteuer?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die größte Insel des Mittelmeers mit ihrer einzigartigen 
              Mischung aus Kultur, Geschichte und spektakulären Segelrevieren.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Sizilien;