import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
const Valencia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: MapPin,
    label: "Lage",
    value: "Ostspanische Küste"
  }, {
    icon: Calendar,
    label: "Beste Zeit",
    value: "April-November"
  }, {
    icon: Users,
    label: "Geeignet für",
    value: "Alle Erfahrungsstufen"
  }, {
    icon: Star,
    label: "Besonderheit",
    value: "Moderne Stadt & Tradition"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('/boot-mieten-costa-smeralda.jpg')",
        filter: "brightness(0.7)"
      }} />
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6">
            <Link to="/reviere/mittelmeer/spanien" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Zurück zu Spanien
            </Link>
          </div>
          <Badge variant="outline" className="mb-4 border-white/30 text-white">
            Mittelmeer
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Valencia</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Ostspaniens pulsierende Küste zwischen Tradition und Moderne
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
              <BreadcrumbPage>Valencia</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Quick Facts */}
        <div className="mb-12">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <IconComponent className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      {fact.label}
                    </p>
                    <p className="font-bold">{fact.value}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Jetzt Charter-Anfrage stellen</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Entdecken Sie Valencia mit einem Charterboot. Unser Team hilft Ihnen bei der Planung Ihres perfekten Segeltörns.
          </p>
          <CharterRequestForm>
            <Button size="lg" className="text-lg px-8 py-3">
              Unverbindliche Anfrage stellen
            </Button>
          </CharterRequestForm>
        </div>
      </div>
    </div>;
};
export default Valencia;