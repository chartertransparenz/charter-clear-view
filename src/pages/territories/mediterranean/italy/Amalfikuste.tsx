import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Anchor,
  Star,
  ArrowLeft
} from "lucide-react";
import { useEffect, useState } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Amalfikuste = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showCharterForm, setShowCharterForm] = useState(false);

  const quickFacts = [
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Lage",
      value: "Westliches Mittelmeer"
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      label: "Beste Zeit",
      value: "April - Oktober"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "Geeignet für",
      value: "Alle Erfahrungsstufen"
    },
    {
      icon: <Anchor className="h-5 w-5" />,
      label: "Besonderheit",
      value: "Dramatische Küstenlandschaft"
    }
  ];

  const cities = [
    "Amalfi",
    "Positano", 
    "Salerno",
    "Neapel",
    "Sorrento",
    "Agropoli",
    "Cetara",
    "Furore"
  ];

  const highlights = [
    "Inhalte werden später ergänzt",
    "Texte folgen...",
    "Weitere Highlights kommen",
    "Details werden hinzugefügt"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/77329fbc-9553-49e6-9548-5fdd997d4376.png')`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <div className="mb-4">
            <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium">
              Italien
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Amalfiküste
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto px-4">
            Spektakuläre Steilküste am Golf von Salerno
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span>Start</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Reviere</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Mittelmeer</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span>Italien</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Amalfiküste</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickFacts.map((fact, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {fact.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{fact.label}</h3>
                <p className="text-muted-foreground">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Segeln an der Amalfiküste</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Inhalte werden später ergänzt. Hier wird eine detaillierte Beschreibung der Amalfiküste als Segelrevier stehen.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Texte folgen...
                </p>
                <p className="text-lg text-muted-foreground">
                  Weitere Beschreibungen werden hinzugefügt.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Harbors */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Wichtige Häfen und Marinas</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cities.map((city, index) => (
                  <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg">
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihr Amalfiküste-Abenteuer?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entdecken Sie die dramatische Schönheit der italienischen Küste
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => setShowCharterForm(true)}
              >
                Charter anfragen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charter Form Modal */}
      <CharterRequestForm 
        isOpen={showCharterForm}
        onOpenChange={setShowCharterForm}
      />
    </div>
  );
};

export default Amalfikuste;