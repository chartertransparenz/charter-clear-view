import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CharterConfirmation = () => {
  return (
    <>
      <Helmet>
        <title>Anfrage bestätigt - Charter Transparenz</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-4 py-12">
        <Card className="max-w-2xl w-full shadow-elegant">
          <CardContent className="pt-12 pb-8 px-6 md:px-12 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Vielen Dank für deine Anfrage. Sie bekommen in Kürze eine Rückmeldung.
            </h1>

            {/* Action button */}
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Zur Startseite
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CharterConfirmation;
