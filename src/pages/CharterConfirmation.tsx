import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { trackFacebookConversion } from "@/lib/facebook-tracking";

declare global {
  interface Window {
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

const CharterConfirmation = () => {
  useEffect(() => {
    const trackConversion = async () => {
      try {
        // Track via Facebook Conversion API (server-side)
        const result = await trackFacebookConversion("Lead", {
          contentName: "Charter Anfrage",
          contentCategory: "Yacht Charter",
        });

        if (result.success && result.eventId) {
          console.log("📊 Server-side conversion tracked, event_id:", result.eventId);

          // Track client-side with SAME event_id for deduplication
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead', {}, { eventID: result.eventId });
            console.log("📊 Client-side pixel fired with matching event_id");
          }

          // Push to dataLayer with same event_id
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: 'lead',
            event_id: result.eventId,
            ecommerce: {
              content_name: 'Charter Anfrage',
              content_category: 'Yacht Charter',
            }
          });
          console.log("📊 DataLayer push with event_id:", result.eventId);
        } else {
          // Fallback: Fire pixel without server tracking
          console.warn("Server-side tracking failed, firing pixel only");
          if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', 'Lead');
          }
        }
      } catch (error) {
        console.error("Conversion tracking error:", error);
        // Fallback to client-side only
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Lead');
        }
      }
    };

    trackConversion();
  }, []);

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
              Vielen Dank für Ihre Anfrage. Sie bekommen in Kürze eine Rückmeldung.
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
