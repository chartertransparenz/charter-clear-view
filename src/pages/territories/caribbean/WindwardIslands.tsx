
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Anchor, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CharterRequestForm from "@/components/CharterRequestForm";
import Navigation from "@/components/Navigation";
import TerritoryMap from "@/components/TerritoryMap";
import caribbean from "@/assets/caribbean.jpg";

const WindwardIslands = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const quickFacts = [
    { icon: MapPin, label: "Lage", value: "Südliche Kleine Antillen" },
    { icon: Calendar, label: "Beste Zeit", value: "Dezember-Mai" },
    { icon: Users, label: "Geeignet für", value: "Fortgeschrittene Segler" },
    { icon: Anchor, label: "Besonderheit", value: "Starke Passatwinde" }
  ];

  const regions = [
    {
      name: "Le Marin (Martinique)",
      description: "Die größte und am besten ausgestattete Marina der gesamten Karibik mit französischen Supermärkten und exzellenter Proviantierung.",
      cities: ["Le Marin", "Fort-de-France", "St. Anne"]
    },
    {
      name: "Rodney Bay Marina (St. Lucia)",
      description: "Eine moderne, sichere Marina mit erstklassigem Service in unmittelbarer Nähe zu Supermärkten, Restaurants und Boutiquen.",
      cities: ["Rodney Bay", "Marigot Bay", "Soufrière"]
    },
    {
      name: "Port Louis Marina (Grenada)",
      description: "Ein luxuriöser Yachthafen mit hervorragenden Einrichtungen, ideal als Start- oder Endpunkt eines One-Way-Törns.",
      cities: ["St. George's", "Port Louis", "Prickly Bay"]
    }
  ];

  const highlights = [
    "One-Way Törns von Nord nach Süd optimal",
    "Spektakuläre UNESCO-Weltnaturerbe Pitons",
    "Tobago Cays - Paradies zum Schnorcheln mit Meeresschildkröten",
    "Französisches Savoir-vivre auf Martinique",
    "Authentische Walfang-Tradition auf Bequia",
    "Gewürzinsel Grenada mit Muskatnuss und Zimt",
    "Eye Navigation in kristallklarem Wasser"
  ];

  const dailyItinerary = [
    {
      day: 1,
      title: "Ankunft in Le Marin (Martinique)",
      description: "Yachtübernahme und Eingewöhnung. Proviant in französischen Supermärkten. Erstes karibisches Dinner mit Blick auf die Marina."
    },
    {
      day: 2,
      title: "Segel setzen Richtung St. Lucia (Rodney Bay)",
      description: "Sportliche Passage über den St. Lucia Channel. Oft Delfin-Begleitung. Einklarieren in der Rodney Bay Marina."
    },
    {
      day: 3,
      title: "Entlang der Westküste zu den Pitons (Soufrière)",
      description: "Dramatische Küstenfahrt zu den majestätischen Vulkankegeln. Ankern an Muringbojen. UNESCO-Weltnaturerbe erleben."
    },
    {
      day: 4,
      title: "Der Sprung nach St. Vincent (Wallilabou Bay)",
      description: "Früher Start für längere Überfahrt. Ausklarieren in Soufrière. Filmkulisse von 'Fluch der Karibik' besuchen."
    },
    {
      day: 5,
      title: "Kurzer Schlag zur Trauminsel Bequia (Admiralty Bay)",
      description: "Entspannter Vormittagsschlag. Ankern vor Port Elizabeth. Modellbootbauer und Strandbars entdecken."
    },
    {
      day: 6,
      title: "Kurs auf das Paradies - Die Tobago Cays",
      description: "Höhepunkt des Törns! Eye Navigation durch Riffe. Bojenplatz im Schutzgebiet. Schnorcheln mit Meeresschildkröten."
    },
    {
      day: 7,
      title: "Ein ganzer Tag im Paradies (Tobago Cays)",
      description: "Inselerkundung auf Petit Rameau und Petit Bateau. Baradal Turtle Sanctuary. Lobster-Dinner am Strand unter Sternen."
    },
    {
      day: 8,
      title: "Die Rückreise beginnt - Kurs auf Mayreau (Saltwhistle Bay)",
      description: "Kurzer Schlag zur meistfotografierten Bucht der Karibik. Palmengesäumte Landzunge zwischen Ankerbucht und Atlantik."
    },
    {
      day: 9,
      title: "Die Herausforderung - Aufkreuzen nach Bequia",
      description: "Ausklarieren in Clifton/Union Island. Anspruchsvoller Schlag am Wind nach Norden. Echtes Segelkönnen gefordert."
    },
    {
      day: 10,
      title: "Langer Schlag zurück nach St. Lucia (Marigot Bay)",
      description: "Weitere fordernde Kreuzfahrt gegen Wind und Welle. Belohnung: Ankerplatz in der 'schönsten Bucht der Karibik'."
    },
    {
      day: 11,
      title: "Entspannungstag auf St. Lucia",
      description: "Gemütlicher Schlag zur Rodney Bay. Strand, Shopping oder Entspannung an Bord. Ausklarieren vorbereiten."
    },
    {
      day: 12,
      title: "Die letzte große Überfahrt - Zurück nach Martinique (St. Anne)",
      description: "Letzter Hochseeschlag über den Kanal. Ankerbucht St. Anne statt direkt zur Marina. Letzter Abend vor Anker."
    },
    {
      day: 13,
      title: "Rückkehr zur Basis (Le Marin)",
      description: "Kurzer Schlag zur Marina. Yachtrückgabe und Auftanken. Souvenirs kaufen, kulinarische Köstlichkeiten genießen."
    },
    {
      day: 14,
      title: "Abreise",
      description: "Heimreise mit unzähligen Erinnerungen an türkisblaues Wasser, sportliches Segeln und die einzigartige Schönheit der Karibik."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navigation />
      
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-20">
        <img
          src="/lovable-uploads/c7dcc73d-7cf1-40db-8c85-280f7a47c9cb.png"
          alt="Windward Inseln"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-blue-500 text-white">🌬️ Windward Inseln</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Windward Inseln</h1>
            <p className="text-xl max-w-2xl">
              Die windreichen Gewürzinseln der Karibik
            </p>
          </div>
        </div>
        <Link 
          to="/reviere/karibik" 
          className="absolute top-6 left-6"
        >
          <Button variant="outline" className="bg-white/90 text-black border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Karibik
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Facts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <fact.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-800 mb-1">{fact.label}</p>
              <p className="text-sm text-gray-600">{fact.value}</p>
            </div>
          ))}
        </div>

        {/* Übersichtskarte */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Übersicht über die Windward Islands
          </h2>
          <TerritoryMap
            region="Windward Islands"
            center={{ lat: 13.63, lng: -61.19 }}
            zoom={8}
            maptype="satellite"
            className="w-full"
          />
        </div>

        {/* Main Description Box */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Yachtcharter Windward Islands: Ihr Segelabenteuer in der Karibik</h2>
              
              <div className="prose max-w-none space-y-8">
                <div>
                  <p className="text-lg text-gray-600 mb-4">
                    Willkommen an Bord! Entdecken Sie mit uns die Windward Islands, das pulsierende Herz der Karibik und ein Segelrevier der Superlative. Vergessen Sie den Alltag und tauchen Sie ein in eine Welt, in der jede Insel ihren eigenen Charakter hat – von französischem Savoir-vivre über britisches Kolonialerbe bis hin zu unberührter, vulkanischer Natur.
                  </p>
                  <p className="text-lg text-gray-600">
                    Ein Yachtcharter in den Windward Islands ist mehr als nur ein Urlaub; es ist eine Entdeckungsreise durch smaragdgrüne Regenwälder, vorbei an majestätischen Vulkanen und zu Ankerplätzen in türkisblauen Buchten. Setzen Sie die Segel für ein unvergessliches Inselhopping in der Karibik und erleben Sie die Freiheit des Meeres auf Ihrer privaten Segelyacht oder Ihrem Katamaran.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Komfortable Anreise in Ihr Segelparadies</h3>
                  <p className="text-lg text-gray-600">
                    Ihr Yachturlaub in den Windward Islands beginnt mit einer entspannten Anreise. Internationale Flughäfen auf Martinique (FDF), St. Lucia (UVF) und Grenada (GND) werden regelmäßig per Direktflug aus Europa und Nordamerika angeflogen. Von dort aus sind es nur kurze und gut organisierte Transfers zu den wichtigsten Charterbasen. Dank eines gut ausgebauten Netzes an regionalen Flügen und Fähren können Sie auch problemlos zwischen den Inseln reisen und Ihren Törn flexibel gestalten.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Für wen ist das Revier geeignet?</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Die Windward Islands bieten für jeden Segler das passende Erlebnis. Das Revier wird als mittel bis anspruchsvoll eingestuft.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="border border-gray-300 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Erfahrene Skipper</h3>
                      <p className="text-sm text-gray-600">Genießen die sportlichen Passagen auf offenem Meer, die navigatorischen Herausforderungen und die langen Schläge unter vollen Segeln.</p>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Segelneulinge & Familien</h3>
                      <p className="text-sm text-gray-600">Für einen entspannten Yachturlaub empfehlen wir, einen erfahrenen Skipper zu buchen. Ein geräumiger Katamaran bietet mehr Stabilität und Komfort.</p>
                    </div>
                    <div className="border border-gray-300 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-2">Wassersportler & Abenteurer</h3>
                      <p className="text-sm text-gray-600">Das Revier ist ein Paradies zum Schnorcheln, Tauchen und Kitesurfen. Die vielfältige Landschaft lädt zu Erkundungstouren an Land ein.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Besonderheiten des Reviers: Segeln mit dem Passatwind</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Das Segeln in der Karibik wird von den beständigen Passatwinden geprägt, die von November bis Juni für ideale Segelbedingungen sorgen. Diese konstanten Winde aus Nordost machen das Segeln zwischen den Inseln zu einem wahren Genuss.
                  </p>
                  
                  <div className="border border-gray-300 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Wichtige Hinweise für Ihren Törn</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Nachtsegelverbot</h4>
                        <p className="text-gray-600 text-sm">In diesem Revier herrscht bei den meisten Charterflotten ein striktes Nachtsegelverbot. Unbeleuchtete Riffe, Fischerboote und die anspruchsvolle Navigation machen das Segeln nach Sonnenuntergang zu einem hohen Risiko. Planen Sie Ihre Törns so, dass Sie Ihren Ankerplatz stets sicher bei Tageslicht erreichen (idealerweise vor 16:00 Uhr).</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Eye Navigation (Navigation nach Sicht)</h4>
                        <p className="text-gray-600 text-sm">Insbesondere in den Grenadinen ist die "Eye Navigation" entscheidend. Die Farbe des Wassers verrät die Tiefe: Dunkelblau bedeutet tiefes Wasser, Türkis signalisiert Sandgrund, bräunliche Flecken deuten auf gefährlich flache Riffe hin. Navigieren Sie bei hochstehender Sonne (10:00-15:00 Uhr).</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Vorschriften und Regeln für einen sicheren Törn</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Ein- und Ausklarieren:</strong> Bei jedem Wechsel des Staatsgebiets müssen Sie bei Zoll und Einwanderung ein- und ausklarieren</li>
                    <li>• <strong>Cruising Permits:</strong> Für St. Vincent und die Grenadinen ist eine Cruising Permit erforderlich</li>
                    <li>• <strong>Bareboat-Qualifikation:</strong> Detaillierter Segelerfahrungsnachweis statt formeller Segelschein</li>
                    <li>• <strong>Naturschutz:</strong> In geschützten Meeresparks wie den Tobago Cays gelten strenge Regeln</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Törnziele: Von Martinique bis zur Gewürzinsel Grenada</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Die Törnziele der Windward Islands sind so vielfältig wie die Karibik selbst. Ein klassischer Törn führt als One-Way von Nord nach Süd, um die Passatwinde optimal zu nutzen.
                  </p>
                  
                  <div className="border border-gray-300 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Wind & Wetter</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      <strong>Beste Reisezeit:</strong> Die Trockenzeit von Dezember bis Mai ist ideal. Die Hurrikan-Saison von Juli bis Oktober sollte von Skippern gemieden werden.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• <strong>Stabile Windverhältnisse:</strong> Verlassen Sie sich auf den Passat für planbare und sportliche Törns</li>
                      <li>• <strong>Abwechslungsreiche Passagen:</strong> Echtes Blauwassersegeln kombiniert mit geschützten Schlägen</li>
                      <li>• <strong>Natur pur:</strong> Geschützte Ankerbuchten, farbenprächtigen Korallenriffe und tropische Wasserfälle</li>
                    </ul>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800">Martinique</h4>
                      <p className="text-gray-600 text-sm">Starten Sie mit französischem Flair, besuchen Sie historische Destillerien und ankern Sie in der Bucht von Saint-Pierre am Fuße des Vulkans Mont Pelé.</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800">St. Lucia (ca. 25 NM)</h4>
                      <p className="text-gray-600 text-sm">Segeln Sie zu den majestätischen Pitons, einem UNESCO-Weltnaturerbe. Die Marigot Bay gilt als eine der schönsten Buchten der Karibik.</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800">St. Vincent & die Grenadinen (ca. 45 NM)</h4>
                      <p className="text-gray-600 text-sm">Entdecken Sie Wallilabou Bay (Drehort von "Fluch der Karibik") und die charmante Insel Bequia mit ihrer Walfang-Tradition.</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800">Tobago Cays</h4>
                      <p className="text-gray-600 text-sm">Das absolute Juwel der Grenadinen. Meeresschutzgebiet zum Schnorcheln mit Meeresschildkröten in kristallklarem Wasser.</p>
                    </div>
                    <div className="border-l-4 border-blue-600 pl-4">
                      <h4 className="font-semibold text-gray-800">Grenada (ca. 40 NM von Union Island)</h4>
                      <p className="text-gray-600 text-sm">Die "Gewürzinsel" mit dem Duft von Muskatnuss und Zimt. Erkunden Sie die malerische Hauptstadt St. George's.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Törnempfehlung: 14 Tage Martinique zu den Juwelen der Grenadinen</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Diese Törnempfehlung ist für Segler konzipiert, die das Beste der Karibik erleben möchten: sportliche Passagen auf offenem Meer, unvergessliche Naturerlebnisse und das Gefühl, im Paradies angekommen zu sein.
                  </p>
                  
                  <div className="space-y-4">
                    {dailyItinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-primary pl-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          Tag {day.day}: {day.title}
                        </h4>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charterbasen - Copy above highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Charterbasen & Infrastruktur</h2>
          <div className="grid gap-6 max-w-6xl mx-auto">
            {regions.map((region, index) => (
              <div key={index}>
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-5 h-5 text-blue-700" />
                      <h3 className="text-xl font-semibold text-gray-800">
                        {region.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    {region.cities && (
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Verfügbare Standorte:</div>
                        <div className="flex flex-wrap gap-2">
                          {region.cities.map((city, idx) => (
                            <span key={idx} className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                              {city}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Highlights</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <p className="font-medium text-gray-800">{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Sind Sie bereit für Ihren Traumtörn?
            </h3>
            <p className="mb-6 text-gray-600">
              Ob auf einer sportlichen Segelyacht oder einem komfortablen Katamaran, ob als Bareboat-Skipper oder entspannt mit Crew – ein Yachtcharter in den Windward Islands ist ein unvergessliches Erlebnis. Kontaktieren Sie uns und wir planen gemeinsam Ihr perfektes Segelabenteuer in der Karibik.
            </p>
            <CharterRequestForm>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                Windward Inseln Charter anfragen
              </Button>
            </CharterRequestForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindwardIslands;
