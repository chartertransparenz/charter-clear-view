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
      <div className="relative h-48 md:h-64 bg-gradient-to-r from-ocean-dark to-ocean-light overflow-hidden">
        <img
          src={charterHeroWater}
          alt="Segelboot Charter Anfrage"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/80 to-transparent"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <Anchor className="w-12 h-12 text-white mx-auto mb-4" />
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Unverbindliche Charter-Anfrage
            </h1>
            <p className="text-white/90 text-lg">
              Ihr Traumurlaub auf dem Wasser wartet auf Sie
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white">
        <Card className="max-w-3xl mx-auto shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Charter-Anfrage stellen
            </CardTitle>
            <CardDescription className="text-gray-600 text-base">
              Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden Ihr persönliches Angebot
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vorname *
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Ihr Vorname"
                    required
                    className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachname *
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Ihr Nachname"
                    required
                    className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="ihre@email.de"
                    required
                    className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+49 123 456789"
                    className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                  />
                </div>
              </div>

              {/* Charter Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Charter-Details</h3>
                

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startdatum *
                    </label>
                    <Input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enddatum *
                    </label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                      className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bootslänge
                    </label>
                    <Select value={formData.boatSize} onValueChange={(value) => handleSelectChange('boatSize', value)}>
                      <SelectTrigger className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                        <SelectValue placeholder="Wählen Sie die Bootslänge" />
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Anzahl Kabinen
                    </label>
                    <Select value={formData.cabins} onValueChange={(value) => handleSelectChange('cabins', value)}>
                      <SelectTrigger className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
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

              {/* Message */}
              <div className="border-t pt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zusätzliche Wünsche oder Anmerkungen
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Teilen Sie uns Ihre besonderen Wünsche oder Fragen mit..."
                  rows={4}
                  className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                />
              </div>

              {/* Privacy Policy */}
              <div className="border-t pt-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, privacyAccepted: checked === true }))
                    }
                    className="border-gray-300 data-[state=checked]:bg-ocean-dark data-[state=checked]:border-ocean-dark"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                    Ich akzeptiere die{" "}
                    <a href="/datenschutz" className="text-ocean-dark hover:underline" target="_blank">
                      Datenschutzerklärung
                    </a>{" "}
                    und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-ocean-dark hover:bg-ocean-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Unverbindliche Anfrage senden
                </Button>
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