import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const CostaBrava = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Spanische Festlandküste"
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
      value: "Wilde Küste & Barcelona"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/boot-mieten-costa-smeralda.jpg')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link
              to="/reviere/mittelmeer/spanien"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Spanien
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Mittelmeer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Costa Brava</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Spaniens wilde Küste zwischen Barcelona und der französischen Grenze
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
              <BreadcrumbLink href="/reviere/mittelmeer/spanien">Spanien</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Costa Brava</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Facts</h2>
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

        {/* Kartenansicht */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Kartenansicht Costa Brava</h2>
          <Card>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350000!2d3.1012779!3d41.9108823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDU0JzM5LjIiTiAzwrAwNicwNC42IkU!5e1!3m2!1sde!2sde!4v1234567890!5m2!1sde!2sde&z=8"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kartenansicht Costa Brava"
              />
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt Charter-Anfrage stellen</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entdecken Sie die Costa Brava mit einem Charterboot. Unser Team hilft Ihnen bei der Planung Ihres perfekten Segeltörns.
          </p>
          <CharterRequestForm>
            <Button size="lg" className="text-lg px-8 py-3">
              Unverbindliche Anfrage stellen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>
  );
};

export default CostaBrava;