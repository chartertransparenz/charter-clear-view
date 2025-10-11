import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import CharterRequestForm from '@/components/CharterRequestForm';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, MapPin, Anchor, Ship } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function OlympicYachting() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Olympic Yachting - Yachtcharter Partner | Chartertransparenz.de</title>
        <meta name="description" content="Olympic Yachting - Renommierter Yachtcharter in Griechenland. Jetzt anfragen!" />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/olympic-yachting" />
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
                <BreadcrumbLink href="/yachtcharter-partner">Yachtcharter Partner</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Olympic Yachting</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="relative bg-gradient-ocean py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Olympic Yachting</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Traditionsreicher Yachtcharter in Griechenland seit 1988
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">Partner</p>
                <img 
                  src="/media/partner/olympic-yachting.svg" 
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/media/partner/placeholder.svg'; }}
                  alt="Olympic Yachting Logo" 
                  className="object-contain max-h-20 mx-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Regionen</p>
                <p className="font-semibold">Griechenland</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Ship className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Flotte</p>
                <p className="font-semibold">110+ Yachten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Anchor className="w-8 h-8 mx-auto mb-2 text-primary" />
                <p className="text-sm text-muted-foreground mb-1">Seit</p>
                <p className="font-semibold">1988</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold mb-4">Über Olympic Yachting</h2>
            <p className="text-lg leading-relaxed mb-6">
              Olympic Yachting ist ein renommierter Yachtcharter-Anbieter in Griechenland mit langjähriger Tradition. 
              Das Unternehmen bietet exzellenten Service und eine große Auswahl an modernen Yachten.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-4">Jetzt Yachtcharter Olympic Yachting anfragen</h4>
            <p className="text-muted-foreground mb-6">
              Interessiert an einem Charter mit Olympic Yachting? Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <CharterRequestForm>
              <Button className="bg-ocean-dark hover:bg-ocean-dark/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Jetzt Yachtcharter Olympic Yachting anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
}
