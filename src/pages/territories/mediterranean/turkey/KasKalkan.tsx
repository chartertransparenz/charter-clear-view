import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";

const KasKalkan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    {
      icon: MapPin,
      label: "Lage",
      value: "Lykische Küste, Südtürkei"
    },
    {
      icon: Calendar,
      label: "Beste Zeit",
      value: "Mai-Oktober"
    },
    {
      icon: Users,
      label: "Geeignet für",
      value: "Erfahrene Segler"
    },
    {
      icon: Star,
      label: "Besonderheit",
      value: "Antike Lykische Kultur"
    }
  ];

  const highlights = [
    "Kas - authentisches Fischerdorf mit antikem Theater am Wasser",
    "Kalkan - malerisches Bergdorf mit osmanischen Häusern",
    "Kekova - versunkene Stadt mit glasklarem Wasser",
    "Meis (Kastellorizo) - griechische Insel in Sichtweite",
    "Patara Beach - einer der längsten Sandstrände der Türkei",
    "Lykische Felsengräber und antike Ruinenstätten",
    "Kristallklare Gewässer ideal zum Schnorcheln und Tauchen",
    "Ruhige Ankerplätze abseits der Massen"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('/public/lovable-uploads/1ea68c6f-87dc-44e1-9f11-6805e2ddf28f.png')",
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
            Lykische Küste
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kas & Kalkan</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Authentische Lykische Küste mit versunkenen Städten und kristallklarem Wasser
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
              <BreadcrumbPage>Kas & Kalkan</BreadcrumbPage>
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
            <h2 className="text-4xl font-bold mb-4">Yachtcharter Kas & Kalkan – Die authentische Lykische Küste</h2>
            <p className="text-xl text-muted-foreground">
              Antike Geheimnisse unter kristallklarem Wasser
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Kas und Kalkan repräsentieren die authentische Seite der türkischen Mittelmeerküste. Fernab vom Massentourismus bietet diese Region der Lykischen Küste unvergleichliche kulturelle Schätze und naturbelassene Schönheit. Kas, das ehemalige Antiphellos, verzaubert mit seinem antiken Theater direkt am Meer und der entspannten Atmosphäre eines echten Fischerdorfs.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              Kalkan thront majestätisch auf den Klippen und bietet spektakuläre Ausblicke über das tiefblaue Mittelmeer. Die Region ist berühmt für die versunkene Stadt Kekova, wo antike Ruinen im kristallklaren Wasser zu erkunden sind. Die nahegelegene griechische Insel Meis (Kastellorizo) macht einen Abstecher ins Ausland besonders reizvoll.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Highlights in Kas & Kalkan</h3>
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
            Bereit für Ihr Kas & Kalkan-Abenteuer?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tauchen Sie ein in die antike Lykische Kultur und erkunden Sie versunkene Städte. Wir organisieren Ihren unvergesslichen Charter.
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

export default KasKalkan;