import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users, Heart } from "lucide-react";
import transparencyImg from "@/assets/transparency.jpg";
import transparencyValue from "@/assets/transparency-value.jpg";
import qualityValue from "@/assets/quality-value.jpg";
import trustValue from "@/assets/trust-value.jpg";
import experienceValue from "@/assets/experience-value.jpg";

const About = () => {
  const stats = [
    { number: "30+", label: "Jahre Erfahrung" },
    { number: "500+", label: "Zufriedene Kunden" },
    { number: "50+", label: "Charter Destinationen" },
    { number: "24/7", label: "Service Support" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Transparenz",
      description: "Ehrliche Beratung und faire Preise ohne versteckte Kosten",
      image: transparencyValue
    },
    {
      icon: Award,
      title: "Qualität",
      description: "Nur geprüfte und versicherte Boote in erstklassigem Zustand",
      image: qualityValue
    },
    {
      icon: Users,
      title: "Vertrauen",
      description: "Langjährige Partnerschaften mit renommierten Charterunternehmen",
      image: trustValue
    },
    {
      icon: MapPin,
      title: "Erfahrung",
      description: "Tiefe Ortskenntnisse und persönliche Empfehlungen",
      image: experienceValue
    }
  ];

  return (
    <section id="about" className="py-20 bg-ocean-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Über uns
          </Badge>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/659b769a-8043-415e-8200-0c56b66bcc47.png" 
              alt="CharterTransparenz" 
              className="h-16 w-auto mr-4"
            />
            <h2 className="text-4xl md:text-5xl font-bold text-ocean-dark">
              CharterTransparenz
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seit über 30 Jahren vermitteln wir erfolgreich Chartererlebnisse 
            und stehen für Transparenz, Qualität und Vertrauen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-ocean-dark">
              Ihre Experten für unvergessliche Chartererlebnisse
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mit Sitz in Kressbronn am Bodensee sind wir Ihr lokaler Partner für 
                Yacht-Charter und maritime Erlebnisse. Unser Name ist Programm: 
                Transparenz steht bei uns an erster Stelle.
              </p>
              <p>
                Wir glauben, dass jeder das Recht auf ehrliche Beratung und faire 
                Preise hat. Deshalb arbeiten wir ausschließlich mit seriösen 
                Partnern zusammen und garantieren Ihnen vollständige Kostentransparenz.
              </p>
              <p>
                Ob Anfänger oder erfahrener Segler - wir finden das perfekte Boot 
                für Ihre Bedürfnisse und unterstützen Sie bei der Planung Ihres 
                Traumtörns.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-ocean-blue">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={transparencyImg}
              alt="Transparenz im Charter"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute bottom-4 right-4 bg-gradient-sunset p-4 rounded-xl text-white shadow-elegant">
              <Award className="w-8 h-8 mb-2" />
              <div className="text-sm font-semibold">Zertifizierter</div>
              <div className="text-xs">Charter-Partner</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center shadow-ocean hover:shadow-elegant transition-all duration-300 border-ocean-light/50 overflow-hidden group">
              <CardContent className="p-0">
                {/* Value Image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-ocean-dark">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;