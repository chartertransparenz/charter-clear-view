import Navigation from '@/components/Navigation';


export default function Impressum() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            Impressum
          </h1>
          
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG):
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="mb-2"><strong>Name des Anbieters:</strong></p>
                <p className="mb-4">Charter Transparenz, Axel Düllberg</p>
                
                <p className="mb-2"><strong>Anschrift:</strong></p>
                <p className="mb-1">Goethestraße 24</p>
                <p className="mb-4">88079 Kressbronn</p>
                
                <p className="mb-2"><strong>Kontakt:</strong></p>
                <p className="mb-1">Telefon: + 49 7543 499080</p>
                <p className="mb-4">E-Mail: info@chartertransparenz.de</p>
                
                <p className="mb-2"><strong>Vertreten durch:</strong></p>
                <p>Axel Düllberg</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                EU-Streitschlichtung
              </h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>. 
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>
              
              <h3 className="text-xl font-semibold text-primary mb-3">
                Haftung für Inhalte
              </h3>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Haftung für Links
              </h3>
              <p className="mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold text-primary mb-3">
                Urheberrecht
              </h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}