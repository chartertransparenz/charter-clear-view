import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Ruler, Fuel } from "lucide-react";
import fleetMarina from "@/assets/fleet-marina.jpg";

const Fleet = () => {
  const boats = [
    {
      name: "Bavaria 37 Cruiser",
      type: "Segelyacht",
      capacity: "6-8 Personen",
      length: "11.30m",
      features: ["3 Kabinen", "Autopilot", "Vollausstattung"],
      price: "ab 180€/Tag",
      available: true,
    },
    {
      name: "Lagoon 380",
      type: "Katamaran",
      capacity: "8-10 Personen",
      length: "11.50m",
      features: ["4 Kabinen", "2 Motoren", "Großer Salon"],
      price: "ab 280€/Tag",
      available: true,
    },
    {
      name: "Jeanneau Sun Odyssey 349",
      type: "Segelyacht",
      capacity: "6 Personen",
      length: "10.34m",
      features: ["2 Kabinen", "Moderne Ausstattung", "Einfach zu segeln"],
      price: "ab 150€/Tag",
      available: false,
    },
    {
      name: "Princess V39",
      type: "Motoryacht",
      capacity: "8 Personen",
      length: "12.80m",
      features: ["2 Kabinen", "Flybridge", "Wassersport"],
      price: "ab 420€/Tag",
      available: true,
    },
  ];

  return (
    <section id="fleet" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Flotte
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere sorgfältig ausgewählte Flotte moderner Yachten 
            und Boote für jeden Anspruch
          </p>
        </div>

        {/* Fleet Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-elegant">
          <img
            src={fleetMarina}
            alt="Unsere Flotte im Hafen"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Boat Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boats.map((boat, index) => (
            <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={boat.available ? "default" : "secondary"} className={boat.available ? "bg-green-500" : ""}>
                    {boat.available ? "Verfügbar" : "Gebucht"}
                  </Badge>
                  <Badge variant="outline" className="border-ocean-blue text-ocean-blue">
                    {boat.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-ocean-dark">{boat.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-ocean-blue">
                  {boat.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Boat specs */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs">{boat.capacity.split(' ')[0]}</span>
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
                <ul className="space-y-1 mb-6">
                  {boat.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={boat.available ? "ocean" : "secondary"} 
                  className="w-full" 
                  disabled={!boat.available}
                >
                  {boat.available ? "Jetzt Anfrage stellen" : "Nicht verfügbar"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Nicht das Richtige gefunden?
            </h3>
            <p className="mb-6 text-white/90">
              Wir haben weitere Boote in unserem Partnernetzwerk. 
              Lassen Sie uns gemeinsam das perfekte Boot für Sie finden.
            </p>
            <Button variant="transparent" size="lg">
              Persönliche Beratung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;