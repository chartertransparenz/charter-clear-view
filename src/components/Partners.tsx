import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Shield, Anchor, Star } from "lucide-react";
import partnerMarina from "@/assets/partner-marina.jpg";
import partnerManufacturers from "@/assets/partner-manufacturers.jpg";
import partnerCertifications from "@/assets/partner-certifications.jpg";
import partnersTrust from "@/assets/partners-trust.jpg";
import partnersGlobal from "@/assets/partners-global.jpg";
import partnersYears from "@/assets/partners-years.jpg";
import partnersQuality from "@/assets/partners-quality.jpg";

const Partners = () => {
  const partnerCategories = [
    {
      title: "Charterbasen & Marinas",
      icon: Anchor,
      description: "Unsere vertrauenswürdigen Partner vor Ort",
      image: partnerMarina,
      partners: [
        {
          name: "Marina Kressbronn",
          location: "Bodensee, Deutschland",
          type: "Hauptbasis",
          features: ["50+ Liegeplätze", "Vollservice", "Tankstelle", "Restaurant"]
        },
        {
          name: "ACI Marina Split",
          location: "Kroatien",
          type: "Partnermarina",
          features: ["Luxusausstattung", "24h Service", "Reparaturservice", "Provisioning"]
        },
        {
          name: "Marina Kornati",
          location: "Kroatien",
          type: "Partnermarina", 
          features: ["Nationalpark-Nähe", "Restauration", "Charterbase", "Wassertaxi"]
        }
      ]
    },
    {
      title: "Bootshersteller",
      icon: Star,
      description: "Premium-Yachten von führenden Herstellern",
      image: partnerManufacturers,
      partners: [
        {
          name: "Bavaria Yachts",
          location: "Deutschland",
          type: "Hauptpartner",
          features: ["Moderne Yachten", "Zuverlässige Technik", "Komfortable Ausstattung", "Weltweiter Service"]
        },
        {
          name: "Jeanneau",
          location: "Frankreich",
          type: "Premium Partner",
          features: ["Innovative Designs", "Leistungsstarke Yachten", "Luxus-Interieur", "Racing-Genetik"]
        },
        {
          name: "Lagoon Catamarans",
          location: "Frankreich",
          type: "Spezialist",
          features: ["Katamaran-Experte", "Familienfreundlich", "Stabilität", "Komfort"]
        }
      ]
    },
    {
      title: "Zertifizierungen & Verbände",
      icon: Shield,
      description: "Qualität und Sicherheit durch Zertifizierungen",
      image: partnerCertifications,
      partners: [
        {
          name: "Deutscher Segler-Verband",
          location: "Deutschland",
          type: "Mitgliedschaft",
          features: ["Lizenzierte Ausbildung", "Qualitätsstandards", "Sicherheitsrichtlinien", "Weiterbildung"]
        },
        {
          name: "ADAC Skipper-Portal",
          location: "Deutschland", 
          type: "Qualitätspartner",
          features: ["Geprüfte Qualität", "Kundenservice", "Pannenhilfe", "Reiseversicherung"]
        },
        {
          name: "Charter Excellence",
          location: "International",
          type: "Zertifizierung",
          features: ["Höchste Standards", "Regelmäßige Kontrollen", "Kundenzufriedenheit", "Transparenz"]
        }
      ]
    }
  ];

  const statistics = [
    { number: "25+", label: "Vertrauensvolle Partner", icon: Users, image: partnersTrust },
    { number: "10+", label: "Länder weltweit", icon: MapPin, image: partnersGlobal },
    { number: "15+", label: "Jahre Partnerschaft", icon: Award, image: partnersYears },
    { number: "100%", label: "Qualitätsgarantie", icon: Shield, image: partnersQuality }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Partnernetzwerk
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Unsere Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gemeinsam mit starken Partnern bieten wir dir erstklassigen Service 
            und höchste Qualität in allen Bereichen des Yacht-Charters
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-ocean-dark/40"></div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 pb-6">
                <div className="text-2xl font-bold text-ocean-blue mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Categories */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Image */}
              <div className="relative mb-8 rounded-2xl overflow-hidden shadow-elegant">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 to-ocean-dark/60"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-ocean rounded-xl flex items-center justify-center">
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                        <p className="text-white/90 text-lg">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Partners Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.partners.map((partner, partnerIndex) => (
                  <Card key={partnerIndex} className="shadow-ocean hover:shadow-elegant transition-all duration-300 hover:transform hover:scale-105 border-ocean-light/50">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="border-ocean-blue text-ocean-blue text-xs">
                          {partner.type}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-ocean-dark">{partner.name}</CardTitle>
                      <CardDescription className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3" />
                        {partner.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-ocean-light/30 to-ocean-blue/10 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-ocean-dark">
                Interessiert an einer Partnerschaft?
              </h3>
              <p className="text-muted-foreground mb-6">
                Wir sind immer auf der Suche nach zuverlässigen Partnern, 
                die unsere Werte von Qualität und Transparenz teilen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Badge variant="outline" className="border-ocean-blue text-ocean-blue px-4 py-2">
                  Marinabetreiber
                </Badge>
                <Badge variant="outline" className="border-ocean-blue text-ocean-blue px-4 py-2">
                  Charterbasen
                </Badge>
                <Badge variant="outline" className="border-ocean-blue text-ocean-blue px-4 py-2">
                  Serviceanbieter
                </Badge>
              </div>
              <Button 
                variant="default" 
                size="lg" 
                className="bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;