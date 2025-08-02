import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import caribbean from "@/assets/caribbean.jpg";

const Caribbean = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src={caribbean}
          alt="Karibik"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="mb-4 bg-orange-500 text-white px-3 py-1 rounded">🏝️ Karibik & Atlantik</div>
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
          <div className="bg-white text-black px-4 py-2 rounded flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </div>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">ULTRA-MINIMALE VERSION</h1>
        
        <div className="bg-gray-100 p-6 rounded mb-8">
          <h2 className="text-2xl font-bold mb-4">Karibik-Feeling</h2>
          <p className="text-lg">
            Türkisfarbenes Wasser, perfekte Temperaturen und zuverlässige Passatwinde machen 
            die Karibik zum Segelparadies schlechthin.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top-Regionen</h2>
          <div className="space-y-4">
            <div className="bg-white border p-4 rounded">Britische Jungferninseln (BVI)</div>
            <div className="bg-white border p-4 rounded">St. Martin, Antigua, Guadeloupe</div>
            <div className="bg-white border p-4 rounded">Grenadinen</div>
            <div className="bg-white border p-4 rounded">Bahamas</div>
            <div className="bg-white border p-4 rounded">Kuba</div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Vorteile</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border p-4 rounded text-center">Warmes Wasser</div>
            <div className="bg-blue-50 border p-4 rounded text-center">Stabile Passatwinde</div>
            <div className="bg-blue-50 border p-4 rounded text-center">Unzählige Inseln</div>
            <div className="bg-blue-50 border p-4 rounded text-center">Line of Sight Sailing</div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded text-center">
          <h3 className="text-2xl font-bold mb-4">Ab in die Karibik?</h3>
          <p className="mb-6">
            Erleben Sie das ultimative Segelerlebnis zwischen Trauminseln und 
            kristallklarem Wasser mit perfekten Windbedingungen.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-bold">
            Karibik-Charter anfragen
          </button>
        </div>

        <div className="mt-8 text-center text-red-600 font-bold">
          WENN DER LEERE KASTEN IMMER NOCH DA IST:<br/>
          DAS PROBLEM KOMMT VON AUSSERHALB DIESER SEITE!<br/>
          (Navigation, Footer, FloatingCTA oder Browser-Bug)
        </div>
      </div>
    </div>
  );
};

export default Caribbean;