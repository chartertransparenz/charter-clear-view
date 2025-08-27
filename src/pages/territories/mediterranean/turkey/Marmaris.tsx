import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";

const Marmaris = () => {
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
      value: "Größte Marina der Türkei"
    }
  ];

  const highlights = [
    "Netsel Marina - eine der größten und modernsten Marinas im Mittelmeer",
    "Spektakuläre Buchten der Datça-Halbinsel",
    "Direkte Nachbarschaft zu Rhodos und griechischen Inseln",
    "Dalyan-Delta mit antiken Lykischen Felsengräbern",
    "Kristallklare Buchten in Bozburun und Hisarönü",
    "Lebhafte Altstadt mit osmanischen Häusern",
    "Perfekte Infrastruktur für Charter-Crews"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/yachtcharter-marmaris.png')",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Marmaris</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Türkeis Charter-Metropole mit weltklasse Marina und traumhaften Buchten
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
              <BreadcrumbPage>Marmaris</BreadcrumbPage>
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

        {/* Map Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Karte der Region Marmaris</h3>
          <TerritoryMap
            region="Marmaris"
            center={{
              lat: 36.8359908,
              lng: 28.2162717
            }}
            zoom={11}
            maptype="satellite"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16 space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Marmaris – Tor zur türkischen Ägäis</h2>
            <p className="text-xl text-muted-foreground">
              Weltklasse-Marina trifft auf unberührte Natur
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Marmaris ist das Herzstück des türkischen Yachtcharters und bietet mit der berühmten Netsel Marina eine der modernsten Anlagen im gesamten Mittelmeer. Die strategische Lage macht die Stadt zum perfekten Ausgangspunkt für Erkundungen der türkischen Ägäis sowie der nahegelegenen griechischen Dodekanes-Inseln.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Die geschützte Bucht von Marmaris ist umgeben von bewaldeten Hügeln und bietet Zugang zu unzähligen versteckten Buchten entlang der Datça-Halbinsel. Von den lebhaften Bars der Marina bis zu den stillen Ankerbuchten von Bozburun – Marmaris vereint alle Facetten des mediterranen Segelns in perfekter Harmonie.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Marmaris</h3>
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
            Bereit für Ihr Marmaris-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Starten Sie Ihren Charter von der führenden Marina der türkischen Ägäis. Wir planen Ihren perfekten Segelurlaub.
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

export default Marmaris;