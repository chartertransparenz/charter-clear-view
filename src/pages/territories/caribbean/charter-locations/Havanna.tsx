import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Anchor, Music, Building, Plane } from "lucide-react";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";

import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import caribbean from "@/assets/caribbean.jpg";
const Havanna = () => {
  console.log("Havanna component is rendering");
  
  useEffect(() => {
    console.log("Havanna useEffect running");
    window.scrollTo(0, 0);
  }, []);
  const marinas = [{
    name: "Marina Hemingway",
    description: "Hauptcharter-Marina westlich von Havanna",
    amenities: ["400+ Liegeplätze", "Fuel Station", "Restaurants", "Immigration", "Reparaturen", "Sicherheitsdienst"]
  }, {
    name: "Puerto de La Habana",
    description: "Historischer Hafen im Zentrum der Altstadt",
    amenities: ["Zentrale Lage", "Altstadt-Zugang", "Restaurants", "Museen", "Zoll", "Begrenzte Liegeplätze"]
  }, {
    name: "Marina Tarará",
    description: "Kleinere Marina östlich von Havanna",
    amenities: ["80 Liegeplätze", "Geschützt", "Restaurant", "Strand", "Ruhe", "Naturschutz"]
  }];
  const highlights = ["UNESCO-Weltkulturerbe Altstadt", "Authentische Karibikkultur", "Lebendige Musik- und Tanzszene", "Weltberühmte Zigarren und Rum", "Wenig befahrene Gewässer", "Gastfreundliche Bevölkerung", "Revolutionsgeschichte hautnah"];
  const distances = [{
    destination: "Cayo Largo",
    distance: "90 sm",
    time: "12-15 Std."
  }, {
    destination: "Isla de la Juventud",
    distance: "85 sm",
    time: "12-14 Std."
  }, {
    destination: "Varadero",
    distance: "80 sm",
    time: "10-12 Std."
  }, {
    destination: "Jardines del Rey",
    distance: "200 sm",
    time: "28-30 Std."
  }, {
    destination: "Key West (USA)",
    distance: "90 sm",
    time: "12-15 Std."
  }];
  const attractions = [{
    name: "Habana Vieja",
    description: "UNESCO-Weltkulturerbe mit kolonialer Architektur"
  }, {
    name: "Malecón",
    description: "Berühmte Uferpromenade mit Blick auf das Meer"
  }, {
    name: "Kapitol",
    description: "Imposantes Regierungsgebäude nach Vorbild von Washington"
  }, {
    name: "Plaza de Armas",
    description: "Ältester Platz Havannas mit Antiquitätenmärkten"
  }, {
    name: "Hemingway Museum",
    description: "Finca Vigía - Wohnhaus des berühmten Schriftstellers"
  }, {
    name: "Tropicana Club",
    description: "Legendärer Nachtclub mit spektakulären Shows"
  }];
  const practical = [{
    title: "Einreise",
    info: "Touristenkarte erforderlich, gültig 30 Tage"
  }, {
    title: "Währung",
    info: "Kubanischer Peso (CUP), Euro und USD akzeptiert"
  }, {
    title: "Sprache",
    info: "Spanisch, etwas Englisch in Tourismusbereich"
  }, {
    title: "Klima",
    info: "Tropisch, beste Zeit November-April"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={caribbean} alt="Havanna, Kuba" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-orange-600 text-white">🇨🇺 Reiseziel</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Havanna</h1>
            <p className="text-xl max-w-2xl">
              Die lebendige Hauptstadt - ideal vor oder nach dem Charter
            </p>
          </div>
        </div>
        <Link to="/reviere/karibik" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
          </Button>
        </Link>
      </div>

      {/* Breadcrumb Navigation - Fixed at top */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Start</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild><Link to="/#reviere">Reviere</Link></BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/karibik">Karibik</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/reviere/karibik/kuba">Kuba</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Havanna</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Übersicht */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Music className="w-5 h-5 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-800">Havanna - Ein Muss vor oder nach dem Charter</h2>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4">
              <p className="text-orange-800 font-semibold">
                ⚠️ Wichtiger Hinweis: Aktuell gibt es keinen Yachtcharter direkt ab Havanna. 
                Charter-Yachten starten ab <strong>Cienfuegos</strong> (ca. 3,5 Stunden Fahrt von Havanna).
              </p>
            </div>
            <p className="text-lg text-gray-600 mb-4">
              Havanna ist dennoch eine Reise wert! Die kubanische Hauptstadt eignet sich perfekt für 
              einen Aufenthalt vor oder nach Ihrem Segeltörn ab Cienfuegos. Erleben Sie die 
              faszinierende Mischung aus Geschichte, Kultur und authentischem kubanischen Lebensgefühl.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-orange-50 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Position</div>
                <div className="text-sm text-gray-600">23°08'N 82°23'W</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Plane className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Anreise</div>
                <div className="text-sm text-gray-600">HAV Airport</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Anchor className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">Charter ab</div>
                <div className="text-sm text-gray-600">Cienfuegos</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <Building className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="font-semibold">UNESCO</div>
                <div className="text-sm text-gray-600">Weltkulturerbe</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-center">
                <strong>Transfer nach Cienfuegos:</strong> Ca. 3,5 Stunden Fahrt oder 45 Minuten Flug 
                zur Charter-Basis. Wir organisieren gerne Ihren Transfer!
              </p>
            </div>
          </div>
        </div>

        {/* Marinas */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Häfen &amp; Marinas in Havanna </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marinas.map((marina, index) => <Card key={index} className="h-full opacity-75">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{marina.name}</h3>
                  <p className="text-gray-600 mb-4">{marina.description}</p>
                  <div className="space-y-2">
                    {marina.amenities.map((amenity, idx) => <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{amenity}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Praktische Informationen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Praktische Informationen</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {practical.map((item, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.info}</p>
              </div>)}
          </div>
        </div>

        {/* Distanzen */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Distanzen & Fahrtzeiten</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {distances.map((item, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">{item.destination}</span>
                  <div className="text-right">
                    <div className="text-orange-600 font-bold">{item.distance}</div>
                    <div className="text-sm text-gray-600">{item.time}</div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Sehenswürdigkeiten */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sehenswürdigkeiten</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Warum Havanna besuchen?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>)}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Kombinieren Sie Havanna mit Ihrem Charter</h2>
            <p className="text-xl mb-4">
              Erleben Sie das authentische Kuba vor oder nach Ihrem Segeltörn
            </p>
            <p className="text-blue-100 mb-6">
              Charter ab Cienfuegos • Besichtigung von Havanna • Komplette Kuba-Erfahrung
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-blue-700 hover:bg-gray-100"
              onClick={() => {
                window.location.href = 'tel:+497543499080';
              }}
            >
              Charter ab Cienfuegos anfragen
            </Button>
          </div>
        </div>
      </div>
    </div>;
};
export default Havanna;