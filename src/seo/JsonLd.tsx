// src/seo/JsonLd.tsx
export const JsonLd = ({ json }: { json: object }) => (
  <script type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
  />
);