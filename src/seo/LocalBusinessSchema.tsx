// src/seo/LocalBusinessSchema.tsx
import { JsonLd } from "./JsonLd";

type LocalBusinessData = {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  url?: string;
  openingHours?: string[];
};

export const LocalBusinessSchema = ({ business }: { business: LocalBusinessData }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "address": {
      "@type": "PostalAddress",
      ...business.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.geo.latitude,
      "longitude": business.geo.longitude
    },
    ...(business.telephone && { "telephone": business.telephone }),
    ...(business.url && { "url": business.url }),
    ...(business.openingHours && { "openingHours": business.openingHours })
  };

  return <JsonLd json={schema} />;
};