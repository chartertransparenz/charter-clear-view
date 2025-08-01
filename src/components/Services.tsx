import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sailboat, Users, GraduationCap, MapPin, Clock, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sailboat,
      title: "Yacht Charter",
      description: "Premium Segelyachten und Motorboote für Ihre perfekte Auszeit auf dem Wasser",
      features: ["Verschiedene Bootsgrößen", "Mit oder ohne Skipper", "Vollständige Ausstattung"],
    },
    {
      icon: Users,
      title: "Gruppenevents",
      description: "Unvergessliche Erlebnisse für Firmenevents, Geburtstage und besondere Anlässe",
      features: ["Maßgeschneiderte Events", "Catering möglich", "Bis zu 12 Personen"],
    },
    {
      icon: GraduationCap,
      title: "Segelschule",
      description: "Professionelle Segelausbildung vom Anfänger bis zum Fortgeschrittenen",
      features: ["Lizenzierte Segellehrer", "Alle Scheine möglich", "Theorie & Praxis"],
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Transparente Preise",
      description: "Alle Kosten auf einen Blick - keine versteckten Gebühren"
    },
    {
      icon: Clock,
      title: "Flexible Buchung",
      description: "Einfache Online-Buchung mit flexiblen Stornobedingungen"
    },
    {
      icon: MapPin,
      title: "Beste Lagen",
      description: "Premium Liegeplätze am Bodensee und anderen Top-Destinationen"
    },
  ];

  return (
    <section id="services" className="py-20 bg-ocean-light/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von der Yacht-Charter bis zur Segelausbildung - wir bieten Ihnen 
            den kompletten Service rund ums Segeln
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-ocean-dark">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-center mb-8 text-ocean-dark">
            Warum CharterTransparenz?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-ocean-dark">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;