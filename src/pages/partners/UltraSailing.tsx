import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function UltraSailing() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ultra Sailing - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Ultra Sailing - Yachtcharter mit modernen Flotten. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/ultra-sailing/" />
      </Helmet>

      <Navigation />
      
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/yachtcharter-partner/">Yachtcharter Partner</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ultra Sailing</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ultra Sailing</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Yachtcharter mit modernen Flotten und erstklassigem Service
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Kroatien</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">90+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">2005</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Partner</p>
                <img 
                  src="/media/partner/ultra-sailing.png?v=4" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Ultra Sailing Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Ultra Sailing</h2>
            <p className="text-lg leading-relaxed mb-6">
              Ultra Sailing bietet modernen Yachtcharter mit Fokus auf Qualität und Service. 
              Mit einer gepflegten Flotte und erfahrenem Team sorgt Ultra Sailing für unvergessliche Segelerlebnisse.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Ultra Sailing anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Ultra Sailing? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Ultra Sailing anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
