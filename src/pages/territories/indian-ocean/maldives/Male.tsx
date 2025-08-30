import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Waves, Calendar, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import maldivesSailing from "@/assets/maldives-sailing.jpg";
const Male = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const quickFacts = [{
    icon: <MapPin className="w-5 h-5" />,
    label: "Lage",
    value: "Hauptatoll der Malediven"
  }, {
    icon: <Calendar className="w-5 h-5" />,
    label: "Beste Reisezeit",
    value: "November - April"
  }, {
    icon: <Waves className="w-5 h-5" />,
    label: "Segelwetter",
    value: "NE Monsun 10-18 kn"
  }, {
    icon: <Users className="w-5 h-5" />,
    label: "Chartertyp",
    value: "Luxus-Katamaran"
  }];
  const highlights = ["1200 Koralleninseln", "Kristallklare Lagunen", "Luxus-Resort Hopping", "Weltklasse Schnorcheln", "Manta Ray & Walhai Spots", "Unberührte Korallenriffe", "Overwater Bungalows", "Absolute Privatsphäre"];
  return <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img src={maldivesSailing} alt="Malé Malediven" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-cyan-500 text-white">🏝️ Malé</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Malé</h1>
            <p className="text-xl max-w-2xl">
              Tor zu 1200 Koralleninseln
            </p>
          </div>
        </div>
        <Link to="/reviere/indischer-ozean/malediven" className="absolute top-6 left-6">
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zu den Malediven
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => <Card key={index} className="text-center">
              
            </Card>)}
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6 text-cyan-600" />
              Charter-Standort Malé
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Yachtcharter ab Malé / Hulhumalé, Malediven – Atolle, Lagunen & Privatsphäre auf Ihrer Route
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Eine Yachtcharter ab Malé bzw. Hulhumalé ist die eleganteste Art, die Malediven jenseits fester Resortpläne zu erleben. Von Ihrem zentral gelegenen Ausgangshafen Hulhumalé – nur wenige Minuten vom internationalen Flughafen entfernt – steuern Sie smaragdgrüne Lagunen, strahlend weiße Sandbänke und ringförmige Atolle an. Statt festen Check-in-Zeiten bestimmen Sie den Törn: heute Schnorcheln an einem Korallenriff, morgen ein Dinner auf einer einsamen Sandbank – und dazwischen ruhige Nächte in windgeschützten Ankerbuchten.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Anreise & Ausgangshafen</strong><br />
              Sie fliegen nach Malé (Velana International Airport, MLE). Der Transfer nach Hulhumalé dauert je nach Marina nur 10–20 Minuten per Taxi oder Shuttle. Viele Vercharterer koordinieren Flugzeiten, Transfers und einen Early Check-in, sodass Sie noch am Ankunftstag den ersten Sprung ins warme, klare Wasser genießen.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Yacht- und Charteroptionen</strong><br />
              Die Flotten vor Ort sind vielfältig: moderne Katamarane mit viel Wohnfläche, sportliche Segelyachten, komfortable Motoryachten und traditionelle Dhonis. Sie wählen zwischen Bareboat, Skippered-Charter oder Crew-Charter mit Koch und Deckhand. Besonders beliebt ist die Crew-Charter: maximale Entspannung, maßgeschneiderte Routen und ein Team, das die Revierspezifika (Riffe, Strömungen, Sandbänke) perfekt kennt. Skippered-Charter eignen sich für weniger erfahrene Crews; geübte Segler finden auch Bareboat-Angebote.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Beste Reisezeit</strong><br />
              Die Trockenzeit von November bis April gilt als Premiumfenster: stabile Wetterlagen, lange Sonnentage und ruhige See – perfekt zum Segeln, Schnorcheln und Tauchen. In dieser Zeit liegen die Wassertemperaturen meist zwischen 25 °C und 30 °C. Auch außerhalb der Hauptzeit sind Törns möglich; planen Sie dann flexibler und beobachten Sie die Vorhersagen sorgfältig.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Routen & Highlights</strong><br />
              Von Hulhumalé aus erreichen Sie in kurzen Schlägen Postkartenmotive wie Kuda Wataru, Farukolhufushi, Dhoonidhoo oder Vihamanaafushi. Typische Tagesabläufe: morgens ein Badestopp in einer türkisfarbenen Lagune, mittags Kayak oder SUP, nachmittags Schnorcheln an Korallengärten – mit Glück gleiten Mantarochen vorbei – und abends ein privates Sandbank-Dinner unter Sternen. Taucher freuen sich auf klare Sichten, bunt bewachsene Thilas (Unterwasserberge) und tropische Fische in großer Vielfalt. Ihre Crew plant die Route so, dass Sie Wetterschutz, Strömung und Tidenfenster optimal nutzen und stets einen geschützten Ankerplatz für die Nacht finden.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Service & Extras</strong><br />
              Viele Yachten bieten Vollpension, Wassersportausrüstung (Schnorchel-Set, SUP, Kayaks) und individuell geführte Ausflüge an. Die Crews kennen lokale Gegebenheiten, achten auf Sicherheit und führen Sie zu ruhigen Spots abseits des Trubels. Auf Wunsch arrangieren sie Sandbank-Picknicks, Inselbesuche oder Tauchgänge mit zertifizierten Guides.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Proviantierung & Bordalltag</strong><br />
              In Hulhumalé/Malé erhalten Sie frischen Fisch, Obst, Gemüse sowie Basisartikel; viele Anbieter übernehmen die Proviantierung nach Ihrer Einkaufsliste und liefern die Ware gekühlt direkt an Bord. Trinkwasser kommt über den Watermaker oder wird in Kanistern gebunkert; Kühlkette und Müllmanagement sind in den Tropen besonders wichtig (organische Abfälle nicht über Bord, Entsorgung an Land). Alkohol unterliegt auf den Malediven strengen Regeln: klären Sie die Getränkeversorgung vorab mit dem Vercharterer – häufig kann an Bord im Rahmen der Charterlizenz serviert werden; Mitbringen im Gepäck ist in der Regel nicht gestattet.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Revierbesonderheiten & Verhalten</strong><br />
              Die Malediven sind ein sensibles Riff-Ökosystem. Ankern grundsätzlich nur auf Sand, niemals auf Korallen oder im Seegras; vielerorts stehen Mooringbojen zur Verfügung. Fahren Sie langsam in Lagunen, halten Sie Abstand zu Riffkronen und beachten Sie Badezonen. Nachtnavigation ist wegen unbeleuchteter Marker, Riffe und Strömungen nicht zu empfehlen; planen Sie Tagesansteuerungen. Sonnen- und Hautschutz (UV-Kleidung, riffschonende Sonnencreme) sind Pflicht, ebenso ausreichend Trinkwasser. Respektieren Sie die lokalen Sitten bei Besuchen bewohnter Inseln (schulter- und kniebedeckende Kleidung außerhalb von „Bikini Beaches").
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Sicherheit & Planung</strong><br />
              Ihr Skipper/Vercharterer checkt Wetter, Strömungen und Tidenfenster täglich und passt die Route entsprechend an. In Kanälen („Kandus") können kräftige Strömungen stehen – ideal fürs Tauchen, erfordern aber Erfahrung in der Planung. Halten Sie VHF bereit, führen Sie Ersatzanker/-leine, prüfen Sie regelmäßig Ankergrepen und Alarm. Für jede Nacht empfiehlt sich ein Plan B (alternativer Ankerplatz in Reichweite).
            </p>
            <p className="text-lg text-gray-600">
              <strong>Fazit</strong><br />
              Eine Yachtcharter ab Malé/Hulhumalé ist die ultimative Einladung, die Malediven flexibel, naturnah und individuell zu entdecken: Sie kombinieren Privatsphäre und Komfort mit dem Luxus, jeden Tag eine andere Lagune zu Ihrer eigenen zu machen. Ob Bareboat, Skipper oder Crew-Charter – mit der passenden Yacht, kluger Routenplanung und Respekt für das Riff wird Ihr Törn zu genau der Mischung aus Entspannung und Abenteuer, die man von einem Yachturlaub auf den Malediven erwartet.
            </p>
          </div>
        </div>


        {/* Highlights */}
        

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Luxus-Charter ab Malé
            </h3>
            <p className="mb-6 text-cyan-100">
              Erleben Sie das ultimative Luxus-Charter zwischen 1200 Koralleninseln 
              mit kristallklaren Lagunen und exklusiven Resort-Destinationen.
            </p>
            <CharterRequestForm>
              <Button className="bg-white text-cyan-600 hover:bg-cyan-50" size="lg">
                Malé Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>;
};
export default Male;