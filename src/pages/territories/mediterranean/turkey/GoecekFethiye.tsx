import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const GoecekFethiye = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Türkische Ägäis, Fethiye-Golf"
    },
    {
      icon: Calendar,
      label: "Beste Zeit",
      value: "Mai-Oktober"
    },
    {
      icon: Users,
      label: "Geeignet für",
      value: "Alle Erfahrungsstufen"
    },
    {
      icon: Star,
      label: "Besonderheit",
      value: "Zwölf Inseln & Butterfly Valley"
    }
  ];

  const highlights = [
    "Göcek - exklusive Marina zwischen bewaldeten Inseln",
    "Fethiye - lebendige Stadt mit antiken Felsengräbern", 
    "Butterfly Valley - verstecktes Paradies nur per Boot erreichbar",
    "Ölüdeniz - türkisblaue Lagune und Paragliding-Hotspot",
    "Zwölf Inseln von Göcek mit geschützten Ankerbuchten",
    "Saklıkent-Schlucht für Abenteuer an Land",
    "Authentische Fischerdörfer wie Kalkan und Kas",
    "Lykische Ruinenstätten direkt am Wasser"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/lovable-uploads/4a973c7a-e4d0-4205-97dd-43c3454a16c6.png')",
            filter: "brightness(0.7)"
          }} 
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link 
              to="/reviere/mittelmeer/tuerkei" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Türkei
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Türkische Ägäis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Göcek & Fethiye</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Traumhafte Buchten zwischen bewaldeten Inseln und antiker Lykischer Küste
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere">Reviere</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer">Mittelmeer</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/reviere/mittelmeer/tuerkei">Türkei</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Göcek & Fethiye</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Göcek & Fethiye – Das Paradies der Zwölf Inseln</h2>
            <p className="text-xl text-muted-foreground">
              Exklusive Buchten zwischen Geschichte und unberührter Natur
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Die Region Göcek & Fethiye gilt als das Juwel der türkischen Ägäis. Göcek, eingebettet zwischen bewaldeten Hügeln und kristallklaren Buchten, bietet eine der exklusivsten Marina-Erfahrungen der Türkei. Die berühmten "Zwölf Inseln" von Göcek laden mit unzähligen geschützten Ankerbuchten zum Inselhopping ein.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Fethiye beeindruckt mit einer perfekten Mischung aus antiker Geschichte und lebendiger Atmosphäre. Von den in Fels gehauenen Lykischen Gräbern bis zur berühmten türkisblauen Lagune von Ölüdeniz – diese Region bietet unvergleichliche Naturschönheiten und kulturelle Schätze in direkter Wassernähe.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Göcek & Fethiye</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <p className="text-center">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-16 px-8 rounded-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für Ihr Göcek & Fethiye-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die Zwölf Inseln und das Butterfly Valley. Lassen Sie uns Ihren Traumtörn planen.
          </p>
          <CharterRequestForm>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Jetzt Charter anfragen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default GoecekFethiye;