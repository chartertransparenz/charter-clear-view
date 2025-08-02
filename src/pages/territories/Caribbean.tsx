import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Waves, Star } from "lucide-react";
import { Link } from "react-router-dom";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
  const regions = [
    { name: "Britische Jungferninseln (BVI)", description: "Das weltweit beliebteste Charterrevier" },
    { name: "St. Martin, Antigua, Guadeloupe", description: "Klassische Karibik-Destinationen" },
    { name: "Grenadinen", areas: ["St. Vincent", "Bequia", "Tobago Cays"] },
    { name: "Bahamas", areas: ["Exumas", "Abacos"] },
    { name: "Kuba", description: "Zunehmend beliebter, ursprünglicher" }
  ];

  const advantages = [
    "Warmes Wasser",
    "Stabile Passatwinde", 
    "Unzählige Inseln",
    "Line of Sight Sailing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-light/20 to-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={caribbean}
          alt="Karibik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-dark/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge className="mb-4 bg-sunset text-white">🏝️ Karibik & Atlantik</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Karibik</h1>
            <p className="text-xl max-w-2xl">
              Traumhafte Inseln mit perfekten Segelbedingungen
            </p>
          </div>
        </div>
        <Link 
          to="/" 
          className="absolute top-6 left-6"
          onClick={() => {
            setTimeout(() => {
              document.getElementById('territories')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
        >
          <Button variant="outline" className="bg-white/90 text-ocean-dark border-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ocean-dark">
                <Star className="w-5 h-5 text-sunset" />
                Karibik-Feeling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground">
                Türkisfarbenes Wasser, perfekte Temperaturen und zuverlässige Passatwinde machen 
                die Karibik zum Segelparadies schlechthin.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">DEBUG: Description-Sektion hinzugefügt</h2>
          <p>Ist der leere Kasten wieder da?</p>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;