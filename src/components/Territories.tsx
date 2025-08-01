import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Anchor, Waves, Mountain } from "lucide-react";
import bodenseeAerial from "@/assets/bodensee-aerial.jpg";
import mediterranean from "@/assets/mediterranean.jpg";
import balticSea from "@/assets/baltic-sea.jpg";
import atlantic from "@/assets/atlantic.jpg";

const Territories = () => {
  const territories = [
    {
      name: "Bodensee",
      region: "Deutschland/Österreich/Schweiz",
      description: "Unser Heimatrevier - kristallklares Wasser umgeben von den Alpen",
      highlights: ["Ganzjährig segelbar", "Traumhaftes Alpenpanorama", "Sichere Gewässer", "Erstklassige Marinas"],
      image: bodenseeAerial,
      icon: Mountain,
      difficulty: "Anfänger",
      season: "März - November",
      popular: true
    },
    {
      name: "Mittelmeer",
      region: "Kroatien, Italien, Griechenland",
      description: "Traumhafte Buchten, türkisblaues Wasser und historische Häfen",
      highlights: ["1000+ Inseln", "Warmes Klima", "Kulturelle Vielfalt", "Kulinarische Höhepunkte"],
      image: mediterranean,
      icon: Waves,
      difficulty: "Fortgeschritten",
      season: "April - Oktober",
      popular: true
    },
    {
      name: "Ostsee",
      region: "Deutschland, Dänemark, Schweden",
      description: "Abwechslungsreiche Küstenlandschaften und charmante Hafenstädte",
      highlights: ["Schären-Landschaft", "Historische Hansestädte", "Milde Winde", "Familienfreundlich"],
      image: balticSea,
      icon: Anchor,
      difficulty: "Anfänger",
      season: "Mai - September",
      popular: false
    },
    {
      name: "Atlantik",
      region: "Portugal, Spanien, Frankreich",
      description: "Herausfordernde Gewässer für erfahrene Segler",
      highlights: ["Atlantik-Feeling", "Lange Schläge", "Professionelle Herausforderung", "Spektakuläre Küsten"],
      image: atlantic,
      icon: MapPin,
      difficulty: "Experte",
      season: "Juni - September",
      popular: false
    }
  ];

  return (
    <section id="territories" className="py-20 bg-gradient-to-b from-ocean-light/20 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Segelreviere
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Reviere
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von heimischen Gewässern bis zu exotischen Destinationen - 
            entdecken Sie die schönsten Segelreviere Europas
          </p>
        </div>

        {/* Featured Territory */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <div className="relative">
            <img
              src={bodenseeAerial}
              alt="Bodensee aus der Vogelperspektive"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-sunset text-white">Unser Heimatrevier</Badge>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Bodensee</h3>
              <p className="text-lg text-white/90 max-w-md">
                Das perfekte Segelrevier für Einsteiger und Familien - 
                sicher, schön und nur einen Steinwurf von unserer Basis entfernt.
              </p>
            </div>
          </div>
        </div>

        {/* Territory Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {territories.map((territory, index) => (
            <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden">
              {/* Territory Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={territory.image}
                  alt={territory.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {territory.popular && (
                    <Badge className="bg-sunset text-white text-xs">Beliebt</Badge>
                  )}
                  <Badge variant="outline" className="bg-white/90 text-ocean-dark text-xs border-white">
                    {territory.difficulty}
                  </Badge>
                </div>

                {/* Icon */}
                <div className="absolute top-3 right-3">
                  <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <territory.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-ocean-dark">{territory.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {territory.region}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {territory.description}
                </p>
                
                {/* Season */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <span className="font-medium text-ocean-dark">Saison:</span>
                  <span className="text-muted-foreground">{territory.season}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {territory.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white text-sm">
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Lassen Sie sich beraten
            </h3>
            <p className="mb-6 text-white/90 max-w-2xl mx-auto">
              Unsere Experten kennen jedes Revier persönlich und helfen Ihnen bei der 
              Auswahl des perfekten Segelgebiets für Ihre Bedürfnisse und Erfahrung.
            </p>
            <Button variant="transparent" size="lg">
              Persönliche Revierberatung
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territories;