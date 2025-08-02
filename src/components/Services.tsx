import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sailboat, Users, GraduationCap, MapPin, Clock, Shield } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import selfSailingYacht from "@/assets/self-sailing-yacht.jpg";
import skipperCharterPremium from "@/assets/skipper-charter-premium.jpg";
import luxuryYacht from "@/assets/luxury-yacht.jpg";
import transparentPricing from "@/assets/transparent-pricing.jpg";
import flexibleBooking from "@/assets/flexible-booking.jpg";
import premiumLocations from "@/assets/premium-locations.jpg";

const Services = () => {
  const services = [
    {
      icon: Sailboat,
      title: "Yacht Charter für Selbstsegler",
      description: "Premium Segelyachten für erfahrene Segler mit gültigem Segelschein",
      features: ["Verschiedene Bootsgrößen", "Bareboat Charter", "Vollständige Ausstattung", "Gültiger Segelschein erforderlich"],
      image: selfSailingYacht,
    },
    {
      icon: Users,
      title: "Yacht Charter mit Skipper",
      description: "Entspannter Segeltörn mit professionellem Skipper für alle Erfahrungsstufen",
      features: ["Erfahrener Skipper inklusive", "Für Anfänger & Profis", "Bis zu 12 Personen", "Keine Segelschein erforderlich"],
      image: skipperCharterPremium,
    },
    {
      icon: GraduationCap,
      title: "Luxus Charter",
      description: "Exklusive Luxusyachten mit erstklassiger Ausstattung und Premium-Service",
      features: ["Luxusyachten", "Premium Ausstattung", "VIP Service", "Gourmet Catering"],
      image: luxuryYacht,
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Transparente Preise",
      description: "Alle Kosten auf einen Blick - keine versteckten Gebühren",
      image: transparentPricing
    },
    {
      icon: Clock,
      title: "Flexible Buchung",
      description: "Einfache Online-Buchung mit flexiblen Stornobedingungen",
      image: flexibleBooking
    },
    {
      icon: MapPin,
      title: "Beste Lagen",
      description: "Premium Liegeplätze am Bodensee und anderen Top-Destinationen",
      image: premiumLocations
    },
  ];

  return (
    <section id="services" className="py-20 bg-ocean-light/30">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <div className="relative">
            <img
              src={servicesHero}
              alt="Luxusyacht bei Sonnenuntergang"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Unsere Services</h2>
              <p className="text-lg text-white/90">
                Von der Yacht-Charter bis zur Segelausbildung
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Yachtcharter nach Maß – Finde die perfekte Yacht für deinen Traumurlaub. 
            Egal, ob du erfahrener Segler bist, entspannt Urlaub machen möchtest oder das gewisse Etwas suchst – 
            bei uns findest du genau das Chartermodell, das zu dir passt. Unsere Services bieten dir die Freiheit 
            und Flexibilität, deinen Törn ganz nach deinen Wünschen zu gestalten – transparent, komfortabel und professionell. 
            Wähle zwischen drei Charter-Modellen – jedes mit eigenen Vorteilen.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-ocean-dark">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/659b769a-8043-415e-8200-0c56b66bcc47.png" 
              alt="CharterTransparenz" 
              className="h-12 w-auto mr-4"
            />
            <h3 className="text-2xl font-bold text-ocean-dark">
              Warum CharterTransparenz?
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={advantage.image}
                    alt={advantage.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-ocean-dark">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-ocean-dark rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 right-4 opacity-30">
              <img 
                src="/lovable-uploads/c1b9b340-d2ee-4fa1-907f-0c1403219be9.png" 
                alt="CharterTransparenz" 
                className="h-20 w-auto filter brightness-200"
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Bereit für Ihr Charter-Abenteuer?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Lassen Sie uns gemeinsam Ihren perfekten Törn planen
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="white-blue" size="lg">
                  Kostenlose Beratung
                </Button>
                <Button variant="transparent" size="lg">
                  Angebot anfordern
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;