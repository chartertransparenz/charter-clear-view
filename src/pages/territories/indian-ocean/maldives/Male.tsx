import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import maldivesSailing from "@/assets/maldives-sailing.jpg";
const Male = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: <MapPin className="w-5 h-5" />,
    label: "Lage",
    value: "Hauptatoll der Malediven"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    label: "Beste Reisezeit",
    value: "November - April"
  }, {
    icon: <Waves className="w-5 h-5" />,
    label: "Segelwetter",
    value: "NE Monsun 10-18 kn"
  }, {
    icon: <Users className="w-5 h-5" />,
    label: "Chartertyp",
    value: "Luxus-Katamaran"
  }];
  const highlights = ["1200 Koralleninseln", "Kristallklare Lagunen", "Luxus-Resort Hopping", "Weltklasse Schnorcheln", "Manta Ray & Walhai Spots", "Unberührte Korallenriffe", "Overwater Bungalows", "Absolute Privatsphäre"];
  return <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={maldivesSailing} alt="Malé Malediven" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-cyan-500 text-white">🏝️ Malé</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malé</h1>
            <p className="text-xl max-w-2xl">
              Tor zu 1200 Koralleninseln
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean/malediven" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Malediven
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6 text-cyan-600" />
              Charter-Standort Malé
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Malé ist das Tor zu den Malediven und Ausgangspunkt für luxuriöse 
              Yacht-Charter zwischen 1200 Koralleninseln. Als Hauptstadt bietet 
              Malé die beste Infrastruktur für internationale Anreise und 
              Charter-Services im Paradies des Indischen Ozeans.
            </p>
            <p className="text-lg text-gray-600">
              Von hier aus erreichen Sie die schönsten Atolle der Malediven, 
              von denen jedes sein eigenes Paradies mit kristallklaren Lagunen, 
              Luxus-Resorts und weltklasse Schnorchel- und Tauchgebieten bietet.
            </p>
          </div>
        </div>


        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Luxus-Charter ab Malé
            </h3>
            <p className="mb-6 text-cyan-100">
              Erleben Sie das ultimative Luxus-Charter zwischen 1200 Koralleninseln 
              mit kristallklaren Lagunen und exklusiven Resort-Destinationen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50" size="lg">
                Malé Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Male;