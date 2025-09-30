import { Meta } from "@/seo/Meta";
import { META } from "@/seo/meta.config";
import Navigation from "@/components/Navigation";
import TopDestinations from "@/components/TopDestinations";

function absoluteOg(path: string): string {
  return `https://chartertransparenz.de${path}`;
}

export function Datenschutz() {
  return (
    <>
      <Meta
        title={META.datenschutz.title}
        description={META.datenschutz.description}
        ogImage={absoluteOg(META.datenschutz.ogImage)}
        canonical={META.datenschutz.canonical()}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-ocean-light/5 via-white to-sunset/5">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-ocean-dark mb-4">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground">
              Transparente Informationen zum Schutz Ihrer personenbezogenen Daten
            </p>
          </header>

          <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-ocean-dark mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Allgemeine Hinweise
                  </h3>
                  <div className="prose prose-gray max-w-none space-y-4">
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                      Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                      Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Datenerfassung auf dieser Website
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-ocean-dark mb-2">
                        Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                      </h4>
                      <p>Die Datenverarbeitung erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie im Abschnitt „Hinweis zur Verantwortlichen Stelle".</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-ocean-dark mb-2">
                        Wie erfassen wir Ihre Daten?
                      </h4>
                      <p>Ihre Daten werden dadurch erhoben, dass Sie uns diese mitteilen (z. B. Eingaben in ein Kontaktformular).</p>
                      <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Browser, Betriebssystem, Uhrzeit des Seitenaufrufs).</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-ocean-dark mb-2">
                        Wofür nutzen wir Ihre Daten?
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Zur fehlerfreien Bereitstellung der Website</li>
                        <li>Zur Analyse des Nutzerverhaltens</li>
                        <li>Zur Vertragsabwicklung (Angebote, Bestellungen, Auftragsanfragen)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-ocean-dark mb-2">
                        Welche Rechte haben Sie?
                      </h4>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten Daten</li>
                        <li>Berichtigung oder Löschung Ihrer Daten</li>
                        <li>Widerruf erteilter Einwilligungen</li>
                        <li>Einschränkung der Verarbeitung in bestimmten Fällen</li>
                        <li>Beschwerderecht bei der zuständigen Aufsichtsbehörde</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-ocean-dark mb-2">
                        Analyse-Tools und Tools von Drittanbietern
                      </h4>
                      <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden – vor allem durch Analyseprogramme. Details hierzu finden Sie in dieser Datenschutzerklärung.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ocean-dark mb-4">
                2. Hosting
              </h2>
              <div className="space-y-4">
                <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">IONOS SE</p>
                  <p>Elgendorfer Str. 57, 56410 Montabaur</p>
                </div>
                <p>IONOS erfasst beim Besuch der Website verschiedene Logfiles (inkl. IP-Adressen).</p>
                <p>
                  Datenschutzerklärung von IONOS:{" "}
                  <a 
                    href="https://www.ionos.de/terms-gtc/terms-privacy" 
                    className="text-ocean-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.ionos.de/terms-gtc/terms-privacy
                  </a>
                </p>
                <p>Die Verwendung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Sofern eine Einwilligung abgefragt wurde, zusätzlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>
                
                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-2">
                    Auftragsverarbeitung
                  </h3>
                  <p>Wir haben mit IONOS einen Vertrag über Auftragsverarbeitung (AVV) abgeschlossen.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ocean-dark mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Datenschutz
                  </h3>
                  <p>Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.</p>
                  <p className="mt-2">Bitte beachten Sie: Die Datenübertragung im Internet (z. B. per E-Mail) kann Sicherheitslücken aufweisen.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                    <div className="mt-2">
                      <p>Goethestraße 24</p>
                      <p>88079 Kressbronn am Bodensee</p>
                      <p>Telefon: +49 7543 499 080</p>
                      <p>E-Mail: info@chartertransparenz.de</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Speicherdauer
                  </h3>
                  <p>Ihre personenbezogenen Daten verbleiben bei uns, bis der Zweck entfällt oder Sie deren Löschung verlangen. Gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Ihre Rechte (Auszug)
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Widerruf einer Einwilligung jederzeit möglich</li>
                    <li>Widerspruchsrecht nach Art. 21 DSGVO gegen Datenverarbeitung oder Direktwerbung</li>
                    <li>Beschwerderecht bei der Aufsichtsbehörde</li>
                    <li>Recht auf Datenübertragbarkeit in maschinenlesbarem Format</li>
                    <li>Auskunft, Berichtigung, Löschung Ihrer Daten</li>
                    <li>Recht auf Einschränkung der Verarbeitung unter bestimmten Bedingungen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Sicherheit
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>SSL-/TLS-Verschlüsselung wird eingesetzt, erkennbar an „https://" und dem Schloss-Symbol im Browser</li>
                    <li>Schutz gegen Mitlesen durch Dritte</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Widerspruch gegen Werbung
                  </h3>
                  <p>Der Nutzung von im Impressum veröffentlichten Daten zu Werbezwecken wird widersprochen.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ocean-dark mb-4">
                4. Datenerfassung auf dieser Website
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Cookies
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Session-Cookies: automatisch gelöscht nach Besuch</li>
                    <li>Permanente Cookies: bleiben gespeichert, bis Sie diese löschen</li>
                    <li>First-Party & Third-Party Cookies: letztere ermöglichen z. B. Zahlungsabwicklungen</li>
                  </ul>
                  
                  <div className="mt-4">
                    <p className="font-medium mb-2">Cookies sind erforderlich für:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>technische Funktionen (z. B. Warenkorb)</li>
                      <li>Optimierung der Website</li>
                      <li>Analyse des Nutzerverhaltens</li>
                    </ul>
                  </div>
                  
                  <p className="mt-4">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) oder bei Einwilligung Art. 6 Abs. 1 lit. a DSGVO i. V. m. § 25 TDDDG.</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Kontaktaufnahme
                  </h3>
                  <div className="space-y-4">
                    <p>Kontaktformular / E-Mail / Telefon / Fax</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Speicherung und Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage</li>
                      <li>Keine Weitergabe ohne Ihre Einwilligung</li>
                    </ul>
                    <p>Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Interesse), ggf. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-ocean-dark mb-4">
                5. Plugins und Tools
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    YouTube
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Betreiber: Google Ireland Limited, Dublin, Irland</li>
                    <li>Speicherung von Cookies / Fingerprinting möglich</li>
                    <li>Verknüpfung mit YouTube-Account möglich</li>
                  </ul>
                  <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, ggf. Art. 6 Abs. 1 lit. a DSGVO + § 25 TDDDG</p>
                  <p>
                    Datenschutzerklärung:{" "}
                    <a 
                      href="https://policies.google.com/privacy?hl=de" 
                      className="text-ocean-dark hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://policies.google.com/privacy?hl=de
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Google Fonts
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Einheitliche Darstellung von Schriftarten</li>
                    <li>Verbindung zu Google-Servern notwendig</li>
                  </ul>
                  <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, ggf. Art. 6 Abs. 1 lit. a DSGVO + § 25 TDDDG</p>
                  <p>Infos: https://developers.google.com/fonts/faq</p>
                  <p>
                    Datenschutzerklärung:{" "}
                    <a 
                      href="https://policies.google.com/privacy?hl=de" 
                      className="text-ocean-dark hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://policies.google.com/privacy?hl=de
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-ocean-dark mb-3">
                    Google Maps
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Kartendienst von Google Ireland Limited</li>
                    <li>Speicherung Ihrer IP-Adresse</li>
                    <li>Einheitliche Darstellung inkl. Google Fonts</li>
                  </ul>
                  <p className="mt-2">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, ggf. Art. 6 Abs. 1 lit. a DSGVO + § 25 TDDDG</p>
                  <p>
                    Datenschutzerklärung:{" "}
                    <a 
                      href="https://policies.google.com/privacy?hl=de" 
                      className="text-ocean-dark hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://policies.google.com/privacy?hl=de
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-muted-foreground">
                Quelle: e-recht24.de
              </p>
            </div>
          </div>
        </main>
        
        <TopDestinations />
      </div>
    </>
  );
}