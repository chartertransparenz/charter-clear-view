import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Send, Anchor, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import charterHeroWater from "@/assets/charter-hero-water.jpg";

interface CharterRequestFormProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const CharterRequestForm = ({ isOpen, onOpenChange, children }: CharterRequestFormProps) => {
  const { toast } = useToast();
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Anfrage erfolgreich gesendet!",
          description: "Wir melden uns innerhalb von 24 Stunden mit Ihrem persönlichen Angebot zurück.",
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
        
        if (onOpenChange) onOpenChange(false);
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
    <Card className="shadow-elegant border-ocean-light/50 max-w-4xl mx-auto">
      <CardHeader className="text-center bg-gradient-ocean text-white rounded-t-lg relative overflow-hidden">
        {/* Background Image with dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${charterHeroWater})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CardTitle className="text-2xl">Jetzt Ihre Traum-Charter starten!</CardTitle>
          </div>
          <CardDescription className="text-white/90 text-base">
            Profitieren Sie von unserer fast 30-jährigen Erfahrung auf dem internationalen Chartermarkt. 
            Wir bieten Ihnen kompetente Beratung, individuelle & unabhängige Angebote und begleiten Sie 
            mit persönlichem Service – selbstverständlich zu besten Preisen.
          </CardDescription>
          <Badge variant="secondary" className="w-fit mx-auto mt-3 bg-white/20 text-white border-white/30">
            <CheckCircle className="w-4 h-4 mr-2" />
            Unverbindlich & kostenlos
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <p className="text-center text-muted-foreground mb-6">
          Jetzt Ihre Traum-Charter starten! Profitieren Sie von unserer fast 30-jährigen Erfahrung auf dem internationalen Chartermarkt. Wir bieten Ihnen kompetente Beratung, individuelle & unabhängige Angebote und begleiten Sie mit persönlichem Service – selbstverständlich zu besten Preisen. Stellen Sie jetzt Ihre unverbindliche Charteranfrage und starten Sie in Ihr unbeschwertes Segel- oder Motorboot-Abenteuer!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="text-sm font-medium mb-2 block">
                Vorname *
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Ihr Vorname"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-sm font-medium mb-2 block">
                Nachname *
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Ihr Nachname"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">
                E-Mail *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ihre@email.de"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                Telefon
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+49 (0) 123 456789"
              />
            </div>
          </div>

          {/* Charter Details */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="charterType" className="text-sm font-medium mb-2 block">
                Chartertyp
              </label>
              <Select value={formData.charterType} onValueChange={(value) => handleSelectChange('charterType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Wählen Sie den Chartertyp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bareboat">Selbstsegler (Bareboat)</SelectItem>
                  <SelectItem value="skippered">Mitsegeln (mit Skipper)</SelectItem>
                  <SelectItem value="crewed">Vollservice (mit Crew)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="boatType" className="text-sm font-medium mb-2 block">
                Bootstyp
              </label>
              <Select value={formData.boatType} onValueChange={(value) => handleSelectChange('boatType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Wählen Sie den Bootstyp" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monohull">Segelboot (Einrumpf)</SelectItem>
                  <SelectItem value="catamaran">Katamaran</SelectItem>
                  <SelectItem value="motorboat">Motorboot</SelectItem>
                  <SelectItem value="gulet">Gulet</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="territory" className="text-sm font-medium mb-2 block">
              Revier
            </label>
            <Input
              id="territory"
              name="territory"
              value={formData.territory}
              onChange={handleInputChange}
              placeholder="z.B. Kroatien, Griechenland, Karibik oder gewünschter Ausgangshafen"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="text-sm font-medium mb-2 block">
                Zeitraum von
              </label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="endDate" className="text-sm font-medium mb-2 block">
                Zeitraum bis
              </label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="boatSize" className="text-sm font-medium mb-2 block">
                Größe des Bootes
              </label>
              <Input
                id="boatSize"
                name="boatSize"
                value={formData.boatSize}
                onChange={handleInputChange}
                placeholder="z.B. 12-15m oder 40-50ft"
              />
            </div>
            <div>
              <label htmlFor="cabins" className="text-sm font-medium mb-2 block">
                Anzahl Kabinen
              </label>
              <Input
                id="cabins"
                name="cabins"
                value={formData.cabins}
                onChange={handleInputChange}
                placeholder="z.B. 3-4 Kabinen"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium mb-2 block">
              Ihre Nachricht an uns
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Nennen Sie uns z.B. bestimmte Ausrüstungsmerkmale wie Rollgroß oder Bugstrahlruder und weitere zu berücksichtigende Details Ihrer Planung..."
              className="min-h-[100px]"
            />
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={formData.privacyAccepted}
              onCheckedChange={(checked) => 
                setFormData({ ...formData, privacyAccepted: checked as boolean })
              }
              required
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <a href="#" className="text-ocean-blue hover:underline">
                Datenschutzerklärung
              </a>{" "}
              zu. *
            </label>
          </div>

          <Button 
            type="submit" 
            variant="ocean" 
            size="lg" 
            className="w-full"
            disabled={!formData.privacyAccepted}
          >
            <Send className="w-4 h-4 mr-2" />
            Jetzt kostenloses Angebot anfordern
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Unverbindlich & kostenlos • Antwort innerhalb von 24 Stunden • 
            Individuelle Beratung von Experten
          </p>
        </form>
      </CardContent>
    </Card>
  );

  if (children) {
    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return <FormContent />;
};

export default CharterRequestForm;