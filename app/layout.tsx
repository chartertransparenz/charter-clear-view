import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Premium Yachtcharter weltweit | Segelyacht & Katamaran mieten',
  description: 'Premium Yachtcharter weltweit ⭐ Segelyacht & Katamaran mieten ✓ 8.000+ Yachten ✓ Mittelmeer, Karibik, Atlantik ✓ Beste Preise & Service seit 25+ Jahren',
  authors: [{ name: 'Premium Yachtcharter' }],
  robots: 'index, follow',
  metadataBase: new URL('https://[IHRE-DOMAIN]'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'CharterTransparenz',
    locale: 'de_DE',
    url: '/',
    title: 'Yachtcharter mit 30 Jahren Erfahrung | Segelyacht & Katamaran mieten',
    description: 'Yachtcharter weltweit mit 30 Jahren Erfahrung. Große Auswahl an Segelyachten, Motorbooten & Katamaranen, geprüfte Anbieter, Top-Bewertungen & persönliche Beratung.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yachtcharter mit 30 Jahren Erfahrung | Segelyacht & Katamaran mieten',
    description: 'Yachtcharter weltweit mit 30 Jahren Erfahrung. Große Auswahl an Segelyachten, Motorbooten & Katamaranen, geprüfte Anbieter, Top-Bewertungen & persönliche Beratung.',
    images: ['/twitter-image.jpg'],
  },
  other: {
    'theme-color': '#1e40af',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/lovable-uploads/a9305207-ab9c-4262-8c60-767957fb449f.png" type="image/png" />
        
        {/* Cookiebot Consent Manager */}
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="90f2041c-07f6-43b5-9855-e31d5276fe87" data-blockingmode="auto" type="text/javascript"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}