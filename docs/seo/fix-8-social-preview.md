# FIX-8: Social Sharing / Open-Graph-Bilder

Stand: 29.10.2026

## Befund vorher

Live hatten nur 19 von 188 Sitemap-URLs ein funktionierendes Vorschaubild.
103 verwiesen auf Dateien, die es nicht gibt (`/og/home.jpg`, `/og/*.jpg`,
`/lovable-uploads/*-sailing.jpg`); Netlify lieferte dafür die HTML-Fallback-Seite
aus. 66 Revierseiten hatten gar kein `og:image`. Sechs Blogbilder waren mit
0,8–2,4 MB zu groß für WhatsApp.

## Lösung

Zentral im Build, kein Pflegeaufwand pro Seite: `scripts/og-images.ts`, aufgerufen
von `scripts/prerender.ts` für jede Sitemap-URL.

Bildwahl pro Seite:

1. **seitenspezifisch** – `og:image` der Seite selbst (Helmet), sonst das erste
   Inhaltsbild der gerenderten Seite (Hero- bzw. Artikelbild; ohne Navigation,
   Footer, Logos, SVG)
2. **Bereichs-Fallback** – Länderbild aus einem alten `prerender-*.ts`-Skript, sonst
   das Bild des Bereichs: Blog, News, Reviere, Partner
3. **globaler Fallback** – CharterTransparenz-Standardbild

Übersichtsseiten (`/blog`, `/news`, `/yachtcharter-partner`, `/reviere/alle-reviere`)
nehmen bewusst ihr Bereichsbild statt eines zufälligen Kachelbilds.

Ein Kandidat wird nur verwendet, wenn die Datei im Build existiert, JPG/PNG/WebP ist,
mindestens 800 × 400 px hat und das Seitenverhältnis zwischen 1,2 und 3,3 liegt
(breite Hero-Banner behalten beim 1,91:1-Zuschnitt rund zwei Drittel). Sonst folgt
der nächste Kandidat. Ausgeschlossen: das Platzhalterbild „Seite im Aufbau“.

Für jedes verwendete Bild entsteht eine Social-Version: 1200 × 630 px, JPG, mittig
zugeschnitten, höchstens 400 KB, unter `/og/img/`. Originale bleiben unverändert.
Das globale Bild liegt zusätzlich unter `/og/home.jpg` (Standardpfad von `<Meta>`).

Gesetzte Tags im initialen HTML: `og:image`, `og:image:type`, `og:image:width`,
`og:image:height`, `og:image:alt`, `twitter:image`, `twitter:image:alt`.
`og:title`, `og:description`, `og:url`, `og:type`, `twitter:card`, `twitter:title`
und `twitter:description` bleiben, wie die Seite sie setzt, und werden nur ergänzt,
wenn sie fehlen.

Die Bereichsbilder stehen in `FALLBACKS` in `scripts/og-images.ts`.

## Prüfung

```
npx tsx scripts/audit-og.ts https://chartertransparenz.de docs/seo/og-audit.md
```

Ruft jede Sitemap-URL als `facebookexternalhit` ohne JavaScript ab und prüft je
Seite genau ein Vorkommen aller Tags, absolute HTTPS-URL, HTTP 200, Content-Type,
Dateigröße, tatsächliche gegen angegebene Abmessungen und die Bildquelle
(`/og/manifest.json`, vom Build geschrieben).

## Ausnahmen (bewusst Fallback)

- Revierseiten, deren Hero-Bild zu klein oder zu schmal ist (z. B. Nordsee
  1199 × 215, Dänemark 768 × 512, Bretagne 421 × 421) oder deren Länderbild aus dem
  alten Skript fehlt (Türkei, Amalfiküste, Costa Brava, Valencia): Bereichsbild Reviere.
- News ohne eigenes Bild und Partnerseiten ohne Foto: Bereichsbild News bzw. Partner.
- `/news/sardinien-capo-spartivento-meeresschutzgebiet-2026`: das Bild
  `/yachtcharter-costa-smeralda.jpg` ist eine 11-Byte-Textdatei, kein Bild
  (auch auf der Seite selbst defekt, nicht Teil von FIX-8).
