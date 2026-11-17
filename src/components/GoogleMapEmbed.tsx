import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { grantConsent, hasMapsConsent, onConsentChanged } from "@/lib/consent";

type GoogleMapEmbedProps = React.IframeHTMLAttributes<HTMLIFrameElement> & {
  src: string;
  title: string;
};

/**
 * Google-Maps-Einbettung mit Zwei-Klick-Loesung.
 *
 * Bis zur Einwilligung in die Kategorie "maps" (src/lib/consent.ts) wird
 * statt des iframes nur ein Platzhalter gerendert - es entsteht also keine
 * Verbindung zu Google. Server-Render und erster Client-Render zeigen immer
 * den Platzhalter, damit die Hydration der vorgerenderten Seiten passt.
 * Nach einem Widerruf verschwindet die Karte wieder.
 *
 * Alle iframe-Attribute werden unveraendert durchgereicht; className und
 * height gelten auch fuer den Platzhalter, damit das Layout nicht springt.
 */
const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ className = "", height, ...iframeProps }) => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(hasMapsConsent());
    return onConsentChanged((state) => setAllowed(state.maps));
  }, []);

  if (allowed) {
    return <iframe {...iframeProps} height={height} className={className} />;
  }

  // Numerische bzw. Pixel-Hoehen uebernehmen; "100%" fuellt den Container.
  const fixedHeight = height !== undefined && height !== "100%" ? Number(height) || height : undefined;

  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-3 bg-gray-100 p-6 text-center text-gray-700 ${className}`}
      style={{ height: fixedHeight ?? "100%", minHeight: fixedHeight === undefined ? "16rem" : undefined }}
      role="region"
      aria-label={iframeProps.title}
    >
      <MapPin className="h-8 w-8 text-ocean-dark" aria-hidden="true" />
      <p className="max-w-md text-sm">
        Beim Laden der Karte werden Daten wie Ihre IP-Adresse an Google übertragen, auch in die USA.
        Mehr dazu in unserer{" "}
        <a href="/datenschutz" className="text-ocean-dark underline underline-offset-2">
          Datenschutzerklärung
        </a>
        .
      </p>
      <Button type="button" onClick={() => grantConsent("maps")}>
        Google Maps laden
      </Button>
      <p className="max-w-md text-xs text-gray-500">
        Damit werden alle Karten dieser Website freigegeben. Ändern können Sie das jederzeit unter
        „Cookie-Einstellungen“ im Seitenfuß.
      </p>
    </div>
  );
};

export default GoogleMapEmbed;
