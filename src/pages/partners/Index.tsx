import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const partners = [
  { slug: 'pitter-yachting', name: 'Pitter Yachting' },
  { slug: 'croatia-yachting', name: 'Croatia Yachting' },
  { slug: 'angelina-yachtcharter', name: 'Angelina Yachtcharter' },
  { slug: 'ncp-mare', name: 'NCP & Mare' },
  { slug: 'ultra-sailing', name: 'Ultra Sailing' },
  { slug: 'waypoint', name: 'Waypoint Charter Croatia' },
  { slug: 'istion-yachting', name: 'Istion Yachting' },
  { slug: 'kavas-yachting', name: 'Kavas Yachting' },
  { slug: 'vernicos-yachts', name: 'Vernicos Yachts' },
  { slug: 'athenian-yachts', name: 'Athenian Yachts' },
  { slug: 'olympic-yachting', name: 'Olympic Yachting' },
  { slug: 'five-seasons-yachting', name: 'Five Seasons Yachting' },
  { slug: 'dalmatia-charter', name: 'Dalmatia Charter' },
  { slug: 'dream-yacht', name: 'Dream Yacht' },
  { slug: 'navigare-yachting', name: 'Navigare Yachting' },
  { slug: 'kiriacoulis', name: 'Kiriacoulis Mediterranean' }
];

export default function PartnersOverview() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Yachtcharter Partner - Chartertransparenz.de</title>
        <meta name="description" content="Alle unsere weltweiten Yachtcharter-Partner im Überblick. Führende Vercharterer für Ihren perfekten Segeltörn." />
        <link rel="canonical" href="https://chartertransparenz.de/yachtcharter-partner/" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-ocean py-20">
        <div className="container mx-auto px-4">
          <Link to="/#partner" className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Unsere Yachtcharter-Partner</h1>
          <p className="text-xl text-white/90 max-w-2xl">Weltweit führende Vercharterer, mit denen wir regelmäßig zusammenarbeiten</p>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Yachtcharter Partner</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <Link key={partner.slug} to={`/yachtcharter-partner/${partner.slug}/`}>
              <Card className="partner-card h-full">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[140px]">
                  <img 
                    className="partner-card__logo" 
                    src={`/media/partner/${partner.slug}.svg`} 
                    onError={(e) => { 
                      e.currentTarget.onerror = null; 
                      e.currentTarget.src = '/media/partner/placeholder.svg'; 
                    }} 
                    alt={partner.name} 
                    loading="lazy" 
                    width="220" 
                    height="100" 
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
