import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Mail, Home, Map } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CharterConfirmation = () => {
  const [searchParams] = useSearchParams();
  const referenceId = searchParams.get("ref") || "—";
  const firstName = searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const emailSent = searchParams.get("emailSent") !== "false";

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

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Vielen Dank{firstName ? `, ${firstName}` : ""}!
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ihre Charter-Anfrage wurde erfolgreich übermittelt.
            </p>

            {/* Reference ID Box */}
            <div className="bg-ocean-light/10 border-2 border-ocean-dark rounded-lg p-6 mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                Ihre Referenz-ID:
              </p>
              <p className="text-2xl md:text-3xl font-mono font-bold text-ocean-dark tracking-wide">
                {referenceId}
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                Bitte notieren Sie diese ID für Rückfragen.
              </p>
            </div>

            {/* Email confirmation notice */}
            {email && emailSent && (
              <div className="flex items-start gap-3 bg-muted/50 rounded-lg p-4 mb-8 text-left">
                <Mail className="w-5 h-5 text-ocean-dark mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground mb-1">
                    Bestätigungs-E-Mail versendet
                  </p>
                  <p className="text-muted-foreground">
                    Wir haben eine Bestätigung an <strong>{email}</strong> gesendet. 
                    Bitte prüfen Sie auch Ihren Spam-Ordner.
                  </p>
                </div>
              </div>
            )}
            
            {/* Email not sent notice */}
            {email && !emailSent && (
              <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-left">
                <Mail className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-yellow-900 mb-1">
                    Hinweis zur Bestätigungs-E-Mail
                  </p>
                  <p className="text-yellow-800">
                    Die Bestätigungs-E-Mail konnte nicht zugestellt werden. 
                    Ihre Anfrage wurde dennoch erfolgreich empfangen und wir melden uns 
                    zeitnah persönlich bei Ihnen.
                  </p>
                </div>
              </div>
            )}

            {/* Info text */}
            <p className="text-muted-foreground mb-8">
              Wir werden Ihre Anfrage schnellstmöglich bearbeiten und uns innerhalb von 24 Stunden 
              mit einem unverbindlichen Angebot bei Ihnen melden.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Zur Startseite
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/reviere/alle-reviere">
                  <Map className="w-4 h-4" />
                  Weitere Reviere entdecken
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default CharterConfirmation;
