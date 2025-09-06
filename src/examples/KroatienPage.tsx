// Beispiel: Kroatien-Seite
import { META } from "@/seo/meta.config";
import { Meta } from "@/seo/Meta";

export default function KroatienPage() {
  const m = META.kroatien;
  return (
    <>
      <Meta
        title={m.title}
        description={m.description}
        keywords={m.keywords}
        ogImage={absoluteOg(m.ogImage)}
        canonical={m.canonical()}
      />
      <h1>Yachtcharter Kroatien: Segeln zwischen 1.200+ Inseln der Adria</h1>
      {/* …Inhalt */}
    </>
  );
}

function absoluteOg(path: string) {
  const base = "https://chartertransparenz.de";
  return path.startsWith("http") ? path : `${base}${path}`;
}