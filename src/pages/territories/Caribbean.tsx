import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
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
        {/* Test: Nur eine einzige Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Test Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Falls der leere Kasten jetzt wieder da ist, liegt das Problem bei den Card-Komponenten!</p>
            </CardContent>
          </Card>
        </div>

        {/* Test: Grid mit 4 Cards */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-4">TEST: 4 Cards in Grid</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card><CardContent className="pt-6"><p>Card 1</p></CardContent></Card>
            <Card><CardContent className="pt-6"><p>Card 2</p></CardContent></Card>
            <Card><CardContent className="pt-6"><p>Card 3</p></CardContent></Card>
            <Card><CardContent className="pt-6"><p>Card 4</p></CardContent></Card>
          </div>
        </div>

        <div className="text-center text-2xl">
          <p>Falls der leere Kasten JETZT da ist:</p>
          <p>Das Problem liegt bei 4 Cards in 3-Spalten-Grid!</p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Regionen (als reiner Text):</h2>
          <div className="space-y-2">
            <p>• Britische Jungferninseln (BVI)</p>
            <p>• St. Martin, Antigua, Guadeloupe</p>
            <p>• Grenadinen</p>
            <p>• Bahamas</p>
            <p>• Kuba</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Vorteile (als reiner Text):</h2>
          <div className="space-y-2">
            <p>• Warmes Wasser</p>
            <p>• Stabile Passatwinde</p>
            <p>• Unzählige Inseln</p>
            <p>• Line of Sight Sailing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Caribbean;