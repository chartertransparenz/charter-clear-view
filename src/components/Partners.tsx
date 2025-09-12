import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, Shield, Anchor, Star } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/use-animated-counter";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import partnerMarina from "@/assets/partner-marina.jpg";
import partnerManufacturers from "@/assets/partner-manufacturers.jpg";
import partnerCertifications from "@/assets/partner-certifications.jpg";
import partnersTrust from "@/assets/partners-trust.jpg";
import partnersGlobal from "@/assets/partners-global.jpg";
import partnersYears from "@/assets/partners-years.jpg";
import partnersQuality from "@/assets/partners-quality.jpg";

const Partners = () => {
  const partnerCategories = [];

  const { ref: statisticsRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true
  });

  const count1 = useAnimatedCounter({ end: 250, trigger: isIntersecting, duration: 2500 });
  const count2 = useAnimatedCounter({ end: 30, trigger: isIntersecting, duration: 2000 });
  const count3 = useAnimatedCounter({ end: 30, trigger: isIntersecting, duration: 2200 });
  const count4 = useAnimatedCounter({ end: 100, trigger: isIntersecting, duration: 2800 });

  const statistics = [
    { number: count1, suffix: "+", label: "Vertrauensvolle Partner", icon: Users, image: "/lovable-uploads/fdbb6cb0-9d73-40b9-9c33-dc86861446c0.png" },
    { number: count2, suffix: "+", label: "Länder weltweit", icon: MapPin, image: partnersGlobal },
    { number: count3, suffix: "+", label: "Jahre Partnerschaft", icon: Award, image: partnersYears },
    { number: count4, suffix: "%", label: "Qualitätsgarantie", icon: Shield, image: partnersQuality }
  ];

  return (
    <section id="partner" className="py-20 bg-white">
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
            Gemeinsam mit starken Partnern bieten wir Ihnen erstklassigen Service 
            und höchste Qualität in allen Bereichen des Yacht-Charters
          </p>
        </div>

        {/* Statistics */}
        <div ref={statisticsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
                <div className="text-2xl font-bold text-ocean-blue mb-1">
                  {stat.number}{stat.suffix}
                </div>
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

      </div>
    </section>
  );
};

export default Partners;