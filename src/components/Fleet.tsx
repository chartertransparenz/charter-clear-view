import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Users, Ruler, Fuel, Zap, Maximize, Star } from "lucide-react";
import fleetMarina from "@/assets/fleet-marina.jpg";
import bavariaCruiser46 from "@/assets/bavaria-cruiser-46.jpg";
import lagoon42 from "@/assets/lagoon-42.jpg";
import oceanis461 from "@/assets/oceanis-46-1.jpg";
import bavariaCruiser37 from "@/assets/bavaria-cruiser-37.jpg";
import sunOdyssey440 from "@/assets/sun-odyssey-440.jpg";
import sunOdyssey410 from "@/assets/sun-odyssey-410.jpg";
import baliCatspace from "@/assets/bali-catspace.jpg";
import dufour460 from "@/assets/dufour-460.jpg";
import oceanis381 from "@/assets/oceanis-38-1.jpg";
import bavariaCruiser41 from "@/assets/bavaria-cruiser-41.jpg";
import CharterRequestForm from "./CharterRequestForm";
const Fleet = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const boats = [{
    name: "Bavaria Cruiser 46",
    type: "Monohull Einrumpf-Segelyacht",
    capacity: "bis 9-10 Personen",
    length: "14,27m",
    features: ["3-4 Kabinen flexibel", "XXL Badeplattform", "Twin-Ruder", "European Yacht of the Year 2015"],
    price: "ab €3.150/Woche",
    attributes: ["sportlich", "beliebt"],
    image: "/lovable-uploads/1e3e1bfd-15d0-42ac-8a23-f371077a44ec.png"
  }, {
    name: "Lagoon 42",
    type: "Segelkatamaran",
    capacity: "bis 10-12 Personen",
    length: "13,22m",
    features: ["4 Hauptkabinen + Crew", "4 Ensuite-Bäder", "Generator & A/C", "Ideal für Familien"],
    price: "ab €3.200/Woche",
    attributes: ["voluminös"],
    image: "/lovable-uploads/c8bfaa4b-ebd4-41ee-93ed-386172a93bf4.png"
  }, {
    name: "Oceanis 46.1",
    type: "Monohull Cruising Yacht",
    capacity: "6-10 Personen",
    length: "14,15m",
    features: ["3-4 Kabinen", "2-3 Nasszellen", "Moderne Linien", "Familienfreundlich"],
    price: "ab €3.500/Woche",
    attributes: ["voluminös", "beliebt"],
    image: "/lovable-uploads/725dc9eb-cef9-47b0-9eb3-1097bd7e3324.png"
  }, {
    name: "Bavaria Cruiser 37",
    type: "Monohull Segelyacht",
    capacity: "bis 6-8 Personen",
    length: "11,30m",
    features: ["3 Kabinen", "1-2 Nasszellen", "Einfach zu handhaben", "Ideal für kleine Crews"],
    price: "ab €1.900/Woche",
    attributes: ["sportlich"],
    image: bavariaCruiser37
  }, {
    name: "Sun Odyssey 440",
    type: "Monohull Cruiser",
    capacity: "ca. 6 Personen",
    length: "13,39m",
    features: ["3-4 Kabinen", "Dualruder", "Cruiser of the Year 2018", "Besonderer Wohnkomfort"],
    price: "ab €2.950/Woche",
    attributes: ["voluminös"],
    image: sunOdyssey440
  }, {
    name: "Sun Odyssey 410",
    type: "Monohull Cruiser",
    capacity: "4-6 Personen",
    length: "12,95m",
    features: ["2-3 Layouts möglich", "1-2 Nasszellen", "Boot des Jahres 2019/2020", "Hohe Variabilität"],
    price: "ab €2.800/Woche",
    attributes: ["sportlich"],
    image: sunOdyssey410
  }, {
    name: "Bali Catspace",
    type: "Katamaran",
    capacity: "bis 8-10 Personen",
    length: "12,00m",
    features: ["4 Hauptkabinen + Crew", "4 Ensuite-WCs", "Innovative offene Deckstruktur", "Lounge-artiges Design"],
    price: "ab €4.500/Woche",
    attributes: ["voluminös"],
    image: baliCatspace
  }, {
    name: "Dufour 460 Grand Large",
    type: "Monohull Cruising Yacht",
    capacity: "bis 8 Personen",
    length: "14,15m",
    features: ["4 Kabinen", "2-3 Nasszellen", "Moderne Ausstattung", "Viel Volumen & Luxusgefühl"],
    price: "ab €3.650/Woche",
    attributes: ["beliebt"],
    image: dufour460
  }, {
    name: "Oceanis 38.1",
    type: "Monohull Segelyacht",
    capacity: "bis 6-8 Personen",
    length: "11,50m",
    features: ["2-3 Kabinen", "1-2 Nasszellen", "Wandelbares Raumkonzept", "Geräumig trotz kompakter Größe"],
    price: "ab €2.100/Woche",
    attributes: ["beliebt"],
    image: oceanis381
  }, {
    name: "Bavaria Cruiser 41",
    type: "Monohull Segelyacht",
    capacity: "bis 6-8 Personen",
    length: "12,35m",
    features: ["3 Kabinen", "2 WC/Dusche", "Gute Segeleigenschaften", "Sehr beliebt in Charterflotten"],
    price: "ab €2.650/Woche",
    attributes: ["sportlich", "beliebt"],
    image: bavariaCruiser41
  }];

  // Automatisches Karussell für Yachten
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Alle 4 Sekunden

    return () => clearInterval(interval);
  }, [api]);
  return <section id="fleet" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Yachten
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecke unsere sorgfältig ausgewählte Yacht-Sammlung moderner Yachten 
            und Boote für jeden Anspruch
          </p>
        </div>

        {/* Fleet Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant">
          <img src={fleetMarina} alt="Unsere Yachten im Hafen" className="w-full h-64 md:h-96 object-cover" />
        </div>

        {/* Boat Carousel */}
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {boats.map((boat, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <Card className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 flex flex-col h-full overflow-hidden">
                  {/* Boat Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={boat.image} alt={boat.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/30 to-transparent"></div>
                    {/* Attribute Icons overlaid on image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                      {boat.attributes.map((attribute, idx) => <Badge key={idx} variant="outline" className="flex items-center gap-1 text-xs bg-white/90 backdrop-blur-sm">
                          {attribute === "sportlich"}
                          {attribute === "voluminös" && <Maximize className="w-3 h-3" />}
                          {attribute === "beliebt" && <Star className="w-3 h-3" />}
                          {attribute}
                        </Badge>)}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="border-white text-white bg-white/20 backdrop-blur-sm text-xs">
                        {boat.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg text-ocean-dark">{boat.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-ocean-blue">
                      {boat.price}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col flex-grow">
                    {/* Boat specs */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs">{boat.capacity.match(/\d+[-–]\d+|\d+/)?.[0] || boat.capacity.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs">{boat.length}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs">Diesel</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 mb-6 flex-grow">
                      {boat.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                          {feature}
                        </li>)}
                    </ul>

                    {/* Button at bottom */}
                    <div className="mt-auto">
                      <CharterRequestForm>
                        <Button variant="default" className="w-full bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                          Jetzt Anfrage stellen
                        </Button>
                      </CharterRequestForm>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* CTA Section */}
        <div className="text-center mt-16">
          
        </div>
      </div>
    </section>;
};
export default Fleet;