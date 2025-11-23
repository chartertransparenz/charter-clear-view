import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import sailingImage from "@/assets/sailing-confirmation.jpg";

const CharterConfirmation = () => {
  return (
    <>
      <Helmet>
        <title>Anfrage bestätigt - Charter Transparenz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* Thank You Message */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Vielen Dank für deine Anfrage. Sie bekommen in Kürze eine Rückmeldung.
            </h1>
          </div>

          {/* Sailing Image */}
          <div className="mb-8 rounded-lg overflow-hidden shadow-elegant">
            <img 
              src={sailingImage} 
              alt="Segelboot auf ruhigem blauen Ozean" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Action button */}
          <div className="text-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharterConfirmation;
