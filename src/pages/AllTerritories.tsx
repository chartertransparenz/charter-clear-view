import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export default function AllTerritories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // All countries in alphabetical order with their routes and images
  const countries = [
    {
      name: 'Australien',
      flag: '🇦🇺',
      route: '/reviere/suedpazifik/australien',
      image: '/lovable-uploads/6c0bd0d6-fffa-4af9-ad9d-cf725e99ab68.png',
      hasPage: true
    },
    {
      name: 'Bahamas',
      flag: '🇧🇸',
      route: '/reviere/amerika-bahamas/bahamas',
      image: '/lovable-uploads/72646193-1d57-47bd-adcd-0db66bb17fb7.png',
      hasPage: true
    },
    {
      name: 'Barbados',
      flag: '🇧🇧',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Belgien',
      flag: '🇧🇪',
      route: '/reviere/nord-europa/nordsee/belgien',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Belize',
      flag: '🇧🇿',
      route: '/reviere/amerika-bahamas/belize',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'BVI (British Virgin Islands)',
      flag: '🇻🇬',
      route: '/reviere/karibik/britische-jungferninseln',
      image: '/lovable-uploads/63f7b57f-ee43-43f7-b1e6-c4720b7ad0ba.png',
      hasPage: true
    },
    {
      name: 'Dänemark',
      flag: '🇩🇰',
      route: '/reviere/nord-europa/skandinavien/daenemark',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Deutschland',
      flag: '🇩🇪',
      route: '/reviere/nord-europa/deutsche-ostsee',
      image: '/lovable-uploads/9b523891-80c7-4afa-9c1e-b3334d6bdfca.png',
      hasPage: true
    },
    {
      name: 'Fidschi',
      flag: '🇫🇯',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Frankreich',
      flag: '🇫🇷',
      route: '/reviere/mittelmeer/frankreich',
      image: '/lovable-uploads/dbea27be-ce97-4174-8a0b-b1908596fb03.png',
      hasPage: true
    },
    {
      name: 'Französisch-Polynesien',
      flag: '🇵🇫',
      route: '/reviere/suedpazifik/franzoesisch-polynesien',
      image: '/lovable-uploads/7f8674c8-bde0-4646-a599-780ed4172d9f.png',
      hasPage: true
    },
    {
      name: 'Grenada',
      flag: '🇬🇩',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Griechenland',
      flag: '🇬🇷',
      route: '/reviere/mittelmeer/griechenland',
      image: '/lovable-uploads/f5227d64-8443-47fd-be3d-af465828b4a5.png',
      hasPage: true
    },
    {
      name: 'Guadeloupe',
      flag: '🇬🇵',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Italien',
      flag: '🇮🇹',
      route: '/reviere/mittelmeer/italien',
      image: '/lovable-uploads/79fac9fd-550d-4a4f-b314-fffdb854e49d.png',
      hasPage: true
    },
    {
      name: 'Kroatien',
      flag: '🇭🇷',
      route: '/reviere/mittelmeer/kroatien',
      image: '/lovable-uploads/fe53453c-c6a8-44af-b2de-e27a0a8033ae.png',
      hasPage: true
    },
    {
      name: 'Kuba',
      flag: '🇨🇺',
      route: '/reviere/karibik/kuba',
      image: '/lovable-uploads/f8c4f172-fe99-4b84-a4e0-028fe453b795.png',
      hasPage: true
    },
    {
      name: 'Malaysia',
      flag: '🇲🇾',
      route: '/reviere/indischer-ozean/asien/malaysia',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Maldiven',
      flag: '🇲🇻',
      route: '/reviere/indischer-ozean/malediven',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Martinique',
      flag: '🇲🇶',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Mexiko',
      flag: '🇲🇽',
      route: '/reviere/amerika-bahamas/mexiko',
      image: '/lovable-uploads/2e57e252-c2db-41f7-956a-4e0a8859e082.png',
      hasPage: true
    },
    {
      name: 'Montenegro',
      flag: '🇲🇪',
      route: '/reviere/mittelmeer/montenegro',
      image: '/lovable-uploads/7dab9754-bebc-42ce-afbe-80cb31345f52.png',
      hasPage: true
    },
    {
      name: 'Neukaledonien',
      flag: '🇳🇨',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Neuseeland',
      flag: '🇳🇿',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Niederlande',
      flag: '🇳🇱',
      route: '/reviere/nord-europa/nordsee/holland',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Norwegen',
      flag: '🇳🇴',
      route: null,
      image: '/placeholder.svg',
      hasPage: false
    },
    {
      name: 'Portugal',
      flag: '🇵🇹',
      route: '/reviere/atlantik/azoren',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Schweden',
      flag: '🇸🇪',
      route: '/reviere/nord-europa/skandinavien/schweden',
      image: '/placeholder.svg',
      hasPage: true
    },
    {
      name: 'Seychellen',
      flag: '🇸🇨',
      route: '/reviere/indischer-ozean/seychellen',
      image: '/lovable-uploads/753887c4-55b0-40ea-890c-1a64defa8c5f.png',
      hasPage: true
    },
    {
      name: 'Spanien',
      flag: '🇪🇸',
      route: '/reviere/mittelmeer/spanien',
      image: '/lovable-uploads/51017cc9-4751-4d75-a64a-388f2babb4dc.png',
      hasPage: true
    },
    {
      name: 'Thailand',
      flag: '🇹🇭',
      route: '/reviere/indischer-ozean/asien/thailand',
      image: '/lovable-uploads/b8d7c49e-e173-4854-b08c-755db093505f.png',
      hasPage: true
    },
    {
      name: 'Türkei',
      flag: '🇹🇷',
      route: '/reviere/mittelmeer/tuerkei',
      image: '/lovable-uploads/b0c596f4-551d-4816-958d-570974af6c8d.png',
      hasPage: true
    }
  ];

  const CountryCard = ({ country }) => {
    const cardContent = (
      <Card className={`group overflow-hidden transition-all duration-300 ${country.hasPage ? 'hover:transform hover:scale-105' : ''} ${!country.hasPage ? 'opacity-75' : ''}`}>
        <CardContent className="p-0">
          <div className="relative w-full h-48 overflow-hidden">
            <img
              src={country.image}
              alt={`Segeln in ${country.name}`}
              className={`w-full h-full object-cover transition-all duration-300 ${country.hasPage ? 'group-hover:scale-110' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span className="text-2xl">{country.flag}</span>
                {country.name}
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>
    );

    if (country.hasPage && country.route) {
      return (
        <Link to={country.route} className="block">
          {cardContent}
        </Link>
      );
    }

    return cardContent;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Start</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#reviere">Reviere</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Alle Reviere</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-b from-ocean-light/20 to-white">
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            <Badge variant="secondary" className="mb-4">
              Segelreviere
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ocean-dark">
              Reviere im Überblick
            </h1>
            <p className="text-xl text-muted-foreground">
              Entdecken Sie alle verfügbaren Segelreviere weltweit - von klassischen Mittelmeerzielen bis zu exotischen Traumdestinationen
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
}