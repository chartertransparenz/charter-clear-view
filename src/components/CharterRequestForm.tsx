import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Send, Anchor, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import charterHeroWater from "@/assets/charter-hero-water.jpg";
interface CharterRequestFormProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
const CharterRequestForm = ({
  isOpen,
  onOpenChange,
  children
}: CharterRequestFormProps) => {
  const {
    toast
  } = useToast();
  const [dialogOpen, setDialogOpen] = useState(isOpen || false);

  // Handle browser back button and ESC key
  useEffect(() => {
    const handlePopState = () => {
      if (dialogOpen) {
        handleClose();
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dialogOpen) {
        handleClose();
      }
    };
    if (dialogOpen) {
      window.addEventListener('popstate', handlePopState);
      document.addEventListener('keydown', handleKeyDown);
      // Add a history entry when dialog opens
      window.history.pushState({
        dialogOpen: true
      }, '');
    }
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dialogOpen]);

  // Sync with external isOpen prop
  useEffect(() => {
    if (isOpen !== undefined) {
      setDialogOpen(isOpen);
    }
  }, [isOpen]);
  const handleClose = () => {
    setDialogOpen(false);
    onOpenChange?.(false);
  };
  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    onOpenChange?.(open);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    charterType: "",
    boatType: "",
    territory: "",
    startDate: "",
    endDate: "",
    boatSize: "",
    cabins: "",
    message: "",
    privacyAccepted: false
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({
        title: "Datenschutzerklärung erforderlich",
        description: "Bitte akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }
    try {
      // Call Supabase Edge Function to send email
      const response = await fetch('/functions/v1/send-charter-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Anfrage erfolgreich gesendet!",
          description: "Wir melden uns innerhalb von 24 Stunden mit Ihrem persönlichen Angebot zurück."
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          charterType: "",
          boatType: "",
          territory: "",
          startDate: "",
          endDate: "",
          boatSize: "",
          cabins: "",
          message: "",
          privacyAccepted: false
        });
        handleClose();
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const FormContent = () => <div className="relative">
      {/* Hero Section */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${charterHeroWater})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 to-ocean-dark/70"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unverbindliche Charter-Anfrage
            </h2>
            <p className="text-lg text-white/90 max-w-2xl">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden Ihr persönliches Angebot
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white">
        <Card className="max-w-3xl mx-auto shadow-xl border-0">
          <CardHeader className="text-center space-y-2 pb-6">
            <div className="flex justify-center">
              <Anchor className="h-8 w-8 text-ocean-dark" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Charter-Anfrage</CardTitle>
            <CardDescription className="text-gray-600">
              Alle Felder sind optional. Je mehr Informationen Sie uns geben, desto genauer können wir Ihr Angebot erstellen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Persönliche Daten */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Persönliche Daten
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Vorname
                    </label>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Ihr Vorname"
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nachname
                    </label>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Ihr Nachname"
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="ihre@email.de"
                      required
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+49 123 456789"
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                </div>
              </div>

              {/* Charter Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  Charter Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Charter-Typ
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('charterType', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark">
                        <SelectValue placeholder="Wählen Sie einen Charter-Typ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="self-sailing">Selbstsegler</SelectItem>
                        <SelectItem value="with-skipper">Mit Skipper</SelectItem>
                        <SelectItem value="luxury">Luxus Charter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Boots-Typ
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('boatType', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark">
                        <SelectValue placeholder="Wählen Sie einen Boots-Typ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sailboat">Segelboot</SelectItem>
                        <SelectItem value="catamaran">Katamaran</SelectItem>
                        <SelectItem value="motorboat">Motorboot</SelectItem>
                        <SelectItem value="luxury-yacht">Luxus Yacht</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Segelrevier
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('territory', value)}>
                    <SelectTrigger className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark">
                      <SelectValue placeholder="Wählen Sie ein Segelrevier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mediterranean">Mittelmeer</SelectItem>
                      <SelectItem value="caribbean">Karibik</SelectItem>
                      <SelectItem value="atlantic">Atlantik</SelectItem>
                      <SelectItem value="pacific">Pazifik</SelectItem>
                      <SelectItem value="indian-ocean">Indischer Ozean</SelectItem>
                      <SelectItem value="north-europe">Nordeuropa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startdatum
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enddatum
                    </label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bootsgröße
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('boatSize', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark">
                        <SelectValue placeholder="Wählen Sie eine Bootsgröße" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Klein (bis 35 Fuß)</SelectItem>
                        <SelectItem value="medium">Mittel (35-45 Fuß)</SelectItem>
                        <SelectItem value="large">Groß (45-55 Fuß)</SelectItem>
                        <SelectItem value="xl">Extra Groß (über 55 Fuß)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anzahl Kabinen
                    </label>
                    <Select onValueChange={(value) => handleSelectChange('cabins', value)}>
                      <SelectTrigger className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark">
                        <SelectValue placeholder="Wählen Sie die Anzahl Kabinen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Kabine</SelectItem>
                        <SelectItem value="2">2 Kabinen</SelectItem>
                        <SelectItem value="3">3 Kabinen</SelectItem>
                        <SelectItem value="4">4 Kabinen</SelectItem>
                        <SelectItem value="5+">5+ Kabinen</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ihre Nachricht
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Teilen Sie uns Ihre Wünsche und Vorstellungen mit..."
                  rows={4}
                  className="border-gray-300 focus:border-ocean-dark focus:ring-ocean-dark"
                />
              </div>

              {/* Datenschutz */}
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, privacyAccepted: checked as boolean })
                  }
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                  Ich akzeptiere die{" "}
                  <a href="/datenschutz" className="text-ocean-dark hover:underline font-medium">
                    Datenschutzerklärung
                  </a>
                  {" "}und stimme der Verarbeitung meiner Daten zum Zweck der Angebotserstellung zu.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-ocean hover:opacity-90 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Kostenlose Anfrage senden
                </Button>
                <div className="mt-4 flex items-center justify-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    Kostenlos & unverbindlich
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    Antwort in 24h
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>;
  if (children) {
    return <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <DialogTitle className="sr-only">Charter-Anfrage Formular</DialogTitle>
          <DialogDescription className="sr-only">
            Füllen Sie das Formular aus, um eine unverbindliche Charter-Anfrage zu stellen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </DialogDescription>
          <div className="relative">
            {/* Close button - visible on all screen sizes */}
            <button onClick={handleClose} className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 shadow-lg border border-gray-200" aria-label="Formular schließen">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <FormContent />
          </div>
        </DialogContent>
      </Dialog>;
  }
  return <FormContent />;
};
export default CharterRequestForm;