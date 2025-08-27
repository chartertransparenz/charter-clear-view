import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const Bodrum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Türkische Ägäis, Südwestküste"
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
      value: "Antike Stätten & Nightlife"
    }
  ];

  const highlights = [
    "Antikes Bodrum-Schloss und Unterwasserarchäologie-Museum",
    "Türkisblaue Buchten der Bodrum-Halbinsel",
    "Lebendiges Nachtleben und exzellente Marina-Infrastruktur",
    "Kurze Distanzen zu griechischen Dodekanes-Inseln",
    "Traditionelle Gulet-Bauwerft und authentische türkische Küche",
    "Geschützte Ankerplätze in unzähligen Calas",
    "Perfekter Ausgangspunkt für Dodekanes-Inselhüpfen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/public/lovable-uploads/c8c65ed0-67d5-4426-956e-aa67126c946f.png')",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bodrum</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Antike Hafenstadt mit türkisblauen Buchten und lebendiger Yachtszene
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
              <BreadcrumbPage>Bodrum</BreadcrumbPage>
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
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Bodrum – Perle der türkischen Ägäis</h2>
            <p className="text-xl text-muted-foreground">
              Antike Geschichte trifft auf moderne Yachtkultur
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Bodrum ist das Juwel der türkischen Ägäis und verbindet antike Geschichte mit moderner Yachtkultur. Die charmante Hafenstadt bietet eine perfekte Mischung aus kristallklaren Buchten, historischen Sehenswürdigkeiten und erstklassiger Marina-Infrastruktur. Von hier aus erreichen Sie sowohl die türkischen Küstenschönheiten als auch die nahegelegenen griechischen Dodekanes-Inseln.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Die Bodrum-Halbinsel ist berühmt für ihre unzähligen geschützten Buchten mit türkisblauem Wasser, während die Stadt selbst mit dem imposanten Bodrum-Schloss, lebendigen Märkten und einem pulsierenden Nachtleben begeistert. Die Marina von Bodrum gehört zu den besten der türkischen Riviera und bietet alle Annehmlichkeiten für einen entspannten Charter-Aufenthalt.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Bodrum</h3>
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
            Bereit für Ihr Bodrum-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entdecken Sie die türkische Ägäis ab Bodrum. Lassen Sie uns Ihren perfekten Charter planen.
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

export default Bodrum;