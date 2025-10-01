import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";
import Footer from "@/components/Footer";
import { Compass, Home, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 – Seite nicht gefunden | Charter Transparenz</title>
        <meta name="description" content="Die gesuchte Seite konnte nicht gefunden werden. Entdecken Sie unsere Segelreviere weltweit und finden Sie Ihre perfekte Yachtcharter." />
        <link rel="canonical" href="https://chartertransparenz.de/404" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-background to-muted/20 py-20 px-4">
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <Compass className="w-24 h-24 text-muted-foreground/40 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-foreground">404</h1>
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Seite nicht gefunden
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Die gesuchte Seite existiert leider nicht oder wurde verschoben. 
              Navigieren Sie zurück zur Startseite oder erkunden Sie unsere Segelreviere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Zur Startseite
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/reviere/alle-reviere">
                  <Map className="w-4 h-4" />
                  Alle Reviere
                </Link>
              </Button>
            </div>
          </div>
        </main>
        
        <TopDestinations />
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
