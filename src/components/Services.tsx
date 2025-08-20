import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sailboat, Users, GraduationCap, MapPin, Clock, Shield, Search, Calendar, Navigation, Handshake, Anchor } from "lucide-react";
import CharterRequestForm from "./CharterRequestForm";
import servicesHeroConsultationV2 from "@/assets/services-hero-consultation-v2.jpg";
import selfSailingYacht from "@/assets/self-sailing-yacht.jpg";
import skipperCharterPremium from "@/assets/skipper-charter-premium.jpg";
import luxuryYacht from "@/assets/luxury-catamaran-charter.jpg";
import transparentPricing from "@/assets/transparent-pricing.jpg";
import flexibleBooking from "@/assets/flexible-booking.jpg";
import premiumLocations from "@/assets/premium-locations.jpg";
const Services = () => {
  const services = [{
    icon: Sailboat,
    title: "Yacht Charter für Selbstsegler",
    description: "Premium Segelyachten für erfahrene Segler mit gültigem Segelschein",
    features: ["Verschiedene Bootsgrößen", "Bareboat Charter", "Vollständige Ausstattung", "Gültiger Segelschein erforderlich"],
    image: "/lovable-uploads/1179037a-34f2-4a2e-b4a9-874c8eebaf59.png"
  }, {
    icon: Users,
    title: "Yacht Charter mit Skipper",
    description: "Entspannter Segeltörn mit professionellem Skipper für alle Erfahrungsstufen",
    features: ["Erfahrener Skipper inklusive", "Für Anfänger & Profis", "Bis zu 12 Personen", "Keine Segelschein erforderlich"],
    image: "/lovable-uploads/b8357492-3fda-42a7-8fcc-bd564c0db1d7.png"
  }, {
    icon: GraduationCap,
    title: "Luxus Charter",
    description: "Exklusive Luxusyachten mit erstklassiger Ausstattung und Premium-Service",
    features: ["Luxusyachten", "Premium Ausstattung", "VIP Service", "Gourmet Catering"],
    image: luxuryYacht
  }];
  const advantages = [{
    icon: Shield,
    title: "Transparente Preise",
    description: "Alle Kosten auf einen Blick - keine versteckten Gebühren",
    image: transparentPricing
  }, {
    icon: Clock,
    title: "Flexible Buchung",
    description: "Einfache Online-Buchung mit flexiblen Stornobedingungen",
    image: flexibleBooking
  }, {
    icon: MapPin,
    title: "Beste Lagen",
    description: "Premium Liegeplätze am Bodensee und anderen Top-Destinationen",
    image: premiumLocations
  }];
  return <section id="leistungen" className="py-20 bg-ocean-light/30">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-elegant">
          <div className="relative">
            <img src={servicesHeroConsultationV2} alt="Luxusyacht bei Sonnenuntergang" className="w-full h-96 md:h-[28rem] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Unsere Services</h2>
              <p className="text-lg text-white/90">Beratung nach Maß – Angebote, die passen.</p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto"></p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => <Card key={index} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50 overflow-hidden">
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
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
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-2xl p-8 shadow-elegant">
          <div className="flex items-center justify-center mb-8">
            <img src="/lovable-uploads/659b769a-8043-415e-8200-0c56b66bcc47.png" alt="CharterTransparenz" className="h-12 w-auto mr-4" />
            <h3 className="text-2xl font-bold text-ocean-dark">
              Warum Charter Transparenz?
            </h3>
          </div>
          
          {/* Description Text */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-ocean-dark mb-4">
                Deine Yacht. Dein Törn. Unser Versprechen.
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wenn Sie eine Charteryacht suchen und dabei Wert auf Qualität, persönliche Betreuung und langjährige Erfahrung legen, sind Sie bei uns genau richtig. Seit über 30 Jahren begleiten wir Segler bei der Planung ihres perfekten Segelurlaubs – ob mit Segelyacht, Katamaran oder Motoryacht, bareboat oder mit Skipper. Unsere Erfahrung, Transparenz und Leidenschaft für den Yachtsport garantieren Ihnen unvergessliche Momente auf dem Wasser.
              </p>
            </div>
          </div>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div>
                <h5 className="font-semibold text-ocean-dark mb-2">Transparente Preise</h5>
                <p className="text-sm text-muted-foreground">
                  Bei uns weißt du von Anfang an, woran du bist. Keine versteckten Gebühren, keine Überraschungen. Alle Kosten werden dir klar und vollständig angezeigt – vom Basispreis bis zu optionalen Extras. So kannst du dein Budget sicher planen und dich ganz aufs Segeln freuen.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-ocean-dark mb-2">Flexible Buchung</h5>
                <p className="text-sm text-muted-foreground">
                  Pläne ändern sich – kein Problem. Dank flexibler Stornobedingungen und einfacher Online-Abwicklung kannst du deine Buchung jederzeit anpassen. Und wenn du Fragen hast, sind wir persönlich für dich da – vor, während und nach deinem Törn.
                </p>
              </div>
              
              
              
              <div>
                <h5 className="font-semibold text-ocean-dark mb-2">Mehr als ein Buchungsportal</h5>
                <p className="text-sm text-muted-foreground">
                  Wir sind ein familiengeführtes Unternehmen mit Herz und Verstand – keine Plattform, kein Callcenter. Bei uns sprichst du mit echten Menschen, die selbst segeln und wissen, was zählt. Individuelle Beratung, persönlicher Service und ehrliche Empfehlungen sind unser Anspruch – seit mehr als drei Jahrzehnten.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-ocean-dark mb-2">Jetzt deine Charteryacht buchen</h5>
                <p className="text-sm text-muted-foreground">
                  Mit einem Partner, dem du vertrauen kannst. Klick dich rein, lass dich beraten und finde die Yacht, die zu dir, deinem Törn und deinem Traumurlaub passt.
                </p>
              </div>
            </div>
          
          <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => <div key={index} className="text-center">
                <div className="relative mb-6 rounded-xl overflow-hidden shadow-lg">
                  <img src={advantage.image} alt={advantage.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <h4 className="font-semibold mb-2 text-ocean-dark">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>)}
           </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-ocean-dark rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <img src="/lovable-uploads/79099e73-1133-46cd-9883-b91311019777.png" alt="CharterTransparenz" className="h-20 w-auto" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Bereit für dein Charter-Abenteuer?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Lass uns gemeinsam deinen perfekten Törn planen
              </p>
              <div className="flex justify-center">
                <CharterRequestForm>
                  <Button variant="default" size="lg" className="bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                    Jetzt Anfrage stellen
                  </Button>
                </CharterRequestForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;