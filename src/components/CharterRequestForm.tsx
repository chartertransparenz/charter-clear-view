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
  const FormContent = () => (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${charterHeroWater})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white p-6">
          <div>
            <Anchor className="h-12 w-12 mx-auto mb-4 text-blue-300" />
            <h2 className="text-3xl font-bold mb-2">Unverbindliche Charter-Anfrage</h2>
            <p className="text-lg opacity-90">Wir erstellen Ihnen ein maßgeschneidertes Angebot</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>👤</span>
                <span>Persönliche Angaben</span>
              </CardTitle>
              <CardDescription>
                Ihre Kontaktdaten für die Angebotserstellung
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Vorname *</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  placeholder="Ihr Vorname"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Nachname *</label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  placeholder="Ihr Nachname"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">E-Mail *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="ihre@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+49 123 456789"
                />
              </div>
            </CardContent>
          </Card>

          {/* Charter Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>⛵</span>
                <span>Charter-Details</span>
              </CardTitle>
              <CardDescription>
                Spezifizieren Sie Ihre Charter-Wünsche
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Charter-Art</label>
                <Select onValueChange={(value) => handleSelectChange("charterType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Charter-Art wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bareboat">Bareboat Charter</SelectItem>
                    <SelectItem value="skipper">Charter mit Skipper</SelectItem>
                    <SelectItem value="crewed">Vollbemannte Charter</SelectItem>
                    <SelectItem value="cabin">Mitsegel-Charter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Boot-Typ</label>
                <Select onValueChange={(value) => handleSelectChange("boatType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Boot-Typ wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sailboat">Segelboot</SelectItem>
                    <SelectItem value="catamaran">Katamaran</SelectItem>
                    <SelectItem value="motor-yacht">Motoryacht</SelectItem>
                    <SelectItem value="gulet">Gulet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Revier</label>
                <Input
                  name="territory"
                  value={formData.territory}
                  onChange={handleInputChange}
                  placeholder="z.B. Kroatien, Griechenland, Türkei..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Boot-Größe</label>
                <Select onValueChange={(value) => handleSelectChange("boatSize", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Boot-Größe wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30-35ft">30-35 Fuß</SelectItem>
                    <SelectItem value="36-40ft">36-40 Fuß</SelectItem>
                    <SelectItem value="41-45ft">41-45 Fuß</SelectItem>
                    <SelectItem value="46-50ft">46-50 Fuß</SelectItem>
                    <SelectItem value="50ft+">Über 50 Fuß</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Reisezeitraum von</label>
                <Input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Reisezeitraum bis</label>
                <Input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Anzahl Kabinen</label>
                <Select onValueChange={(value) => handleSelectChange("cabins", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kabinen wählen" />
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
            </CardContent>
          </Card>

          {/* Additional Message */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>💬</span>
                <span>Zusätzliche Wünsche</span>
              </CardTitle>
              <CardDescription>
                Teilen Sie uns weitere Details oder spezielle Wünsche mit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Besondere Wünsche, Erfahrung, Gruppengröße..."
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Privacy Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
            <Checkbox
              id="privacy"
              checked={formData.privacyAccepted}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, privacyAccepted: checked as boolean })
              }
            />
            <div className="text-sm">
              <label htmlFor="privacy" className="font-medium cursor-pointer">
                Ich stimme der Datenschutzerklärung zu *
              </label>
              <p className="text-gray-600 mt-1">
                Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <Button 
              type="submit" 
              className="w-full md:w-auto min-w-[200px] text-lg py-3 px-8"
              disabled={!formData.privacyAccepted}
            >
              <Send className="h-5 w-5 mr-2" />
              Unverbindliche Anfrage senden
            </Button>
            <div className="flex items-center justify-center mt-4 space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">100% kostenlos & unverbindlich</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
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