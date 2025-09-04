import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import balticSea from "@/assets/baltic-sea.jpg";
const Scandinavia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Skandinavische Halbinsel"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "Juni-August"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Anchor,
    label: "Besonderheit",
    value: "Schärengärten und Fjorde"
  }];
  const regions = [{
    name: "Dänemark",
    link: "/reviere/nord-europa/skandinavien/daenemark",
    description: "Unzählige Inseln und familienfreundliche Reviere",
    cities: ["Juelsminde"]
  }, {
    name: "Schweden",
    link: "/reviere/nord-europa/skandinavien/schweden",
    description: "Spektakuläre Schärengärten und Fjordlandschaften",
    cities: ["Göteborg", "Stockholm"]
  }];
  const highlights = ["Spektakuläre Schärengärten", "Unberührte Fjordlandschaften", "Mitternachtssonne (Sommer)", "Authentische nordische Kultur", "Saubere, unberührte Natur", "Hervorragende Sicherheitsstandards", "Einzigartige Tierwelt"];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src="/lovable-uploads/0f7cd708-160a-48c4-a2f6-58b28a164040.png" alt="Skandinavien" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🇸🇪🇩🇰 Skandinavien</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Skandinavien</h1>
            <p className="text-xl max-w-2xl">
              Schärengärten und nordische Wildnis
            </p>
          </div>
        </div>
        <Link to="/reviere/nord-europa" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu Nord- & Ostsee
          </Button>
        </Link>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Segeln in Skandinavien</h2>
            <p className="text-lg text-gray-600 mb-4">
              Skandinavien bietet einige der spektakulärsten Segelreviere Europas 
              mit unberührten Schärengärten, dramatischen Fjordlandschaften und 
              der einzigartigen Mitternachtssonne während der Sommermonate.
            </p>
            <p className="text-lg text-gray-600">
              Von den unzähligen Inseln Dänemarks über die berühmten schwedischen 
              Schärengärten bis zu den norwegischen Fjorden - Skandinavien vereint 
              authentische nordische Kultur mit unberührter Natur und höchsten 
              Sicherheitsstandards.
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Segelregionen</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {regions.map((region, index) => <Link key={index} to={region.link} className="group">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && <div className="grid grid-cols-2 gap-2">
                        {region.cities.map((city, idx) => <div key={idx} className="text-sm text-blue-600 font-medium">
                            • {city}
                          </div>)}
                      </div>}
                  </CardContent>
                </Card>
              </Link>)}
          </div>
        </div>

        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Bereit für Skandinavien?
            </h3>
            <p className="mb-6 text-blue-100">
              Entdecken Sie die spektakulären Schärengärten und die unberührte 
              nordische Wildnis mit authentischer Kultur und höchsten Sicherheitsstandards.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg">
                Skandinavien Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Scandinavia;