import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Send, Anchor, CheckCircle, CalendarIcon } from "lucide-react";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Helper function to call Supabase Edge Functions
const callEdgeFunction = async (functionName: string, data: any) => {
  try {
    const { data: result, error } = await supabase.functions.invoke(functionName, {
      body: data,
    });

    if (error) {
      console.error(`Supabase Edge Function error:`, error);
      throw error;
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error(`Error calling ${functionName}:`, error);
    return { 
      success: false, 
      error: error.message || 'Ein Fehler ist aufgetreten. Bitte nutzen Sie alternativ unsere Telefonnummer oder E-Mail-Adresse für direkten Kontakt.' 
    };
  }
};
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

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
  const historyPushedRef = useRef(false);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);

  // Stable event handlers using useCallback
  const handleClose = useCallback(() => {
    setDialogOpen(false);
    historyPushedRef.current = false; // Reset history flag
    onOpenChange?.(false);
  }, [onOpenChange]);

  const handleOpenChange = useCallback((open: boolean) => {
    setDialogOpen(open);
    onOpenChange?.(open);
  }, [onOpenChange]);

  // Stable event handlers using useRef to avoid dependencies
  const handlePopStateRef = useRef<() => void>();
  const handleKeyDownRef = useRef<(e: KeyboardEvent) => void>();

  // Update refs when needed
  handlePopStateRef.current = () => {
    if (dialogOpen) {
      handleClose();
    }
  };

  handleKeyDownRef.current = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && dialogOpen) {
      handleClose();
    }
  };

  // Event listeners - stable references, no dependencies
  useEffect(() => {
    const handlePopState = () => handlePopStateRef.current?.();
    const handleKeyDown = (e: KeyboardEvent) => handleKeyDownRef.current?.(e);

    if (dialogOpen) {
      window.addEventListener('popstate', handlePopState);
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('popstate', handlePopState);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [dialogOpen]); // Only depend on dialogOpen

  // History management - only push once when dialog opens
  useEffect(() => {
    if (dialogOpen && !historyPushedRef.current) {
      window.history.pushState({
        dialogOpen: true
      }, '');
      historyPushedRef.current = true;
    }
  }, [dialogOpen]);

  // Sync with external isOpen prop
  useEffect(() => {
    if (isOpen !== undefined) {
      setDialogOpen(isOpen);
    }
  }, [isOpen]);

  // Restore scroll position after re-render (only when not actively typing)
  useEffect(() => {
    if (dialogContentRef.current && scrollPositionRef.current > 0) {
      // Check if user is currently typing in an input field
      const activeElement = document.activeElement;
      const isInputActive = activeElement && (
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA' || 
        activeElement.tagName === 'SELECT'
      );
      
      // Only restore scroll position if no input is currently focused
      if (!isInputActive) {
        requestAnimationFrame(() => {
          if (dialogContentRef.current) {
            dialogContentRef.current.scrollTop = scrollPositionRef.current;
          }
        });
      }
    }
  }, []); // Empty dependency array - only run on mount
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
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
      // Format dates for backend submission
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        startDate: formData.startDate ? format(formData.startDate, 'yyyy-MM-dd') : '',
        endDate: formData.endDate ? format(formData.endDate, 'yyyy-MM-dd') : '',
        boatSize: formData.boatSize,
        cabins: formData.cabins,
        message: formData.message
      };

      const result = await callEdgeFunction('send-charter-request', submissionData);
      
      if (result.success) {
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
          startDate: undefined,
          endDate: undefined,
          boatSize: "",
          cabins: "",
          message: "",
          privacyAccepted: false
        });
        handleClose();
      } else {
        throw new Error(result.error || 'Failed to send request');
      }
    } catch (error: any) {
      console.error('Charter request form error:', error);
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        variant: "destructive"
      });
    }
  };
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Save current scroll position before state update
    if (dialogContentRef.current) {
      scrollPositionRef.current = dialogContentRef.current.scrollTop;
    }
    
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);
  const handleSelectChange = useCallback((name: string, value: string) => {
    // Save current scroll position before state update
    if (dialogContentRef.current) {
      scrollPositionRef.current = dialogContentRef.current.scrollTop;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);
  // FormContent component
  const FormContent = () => (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-32 md:h-40 bg-gradient-to-r from-ocean-dark to-ocean-light overflow-hidden">
        <img
          src="/lovable-uploads/cf269f7b-ff3e-46a1-8751-c1cf37175336.png"
          alt="Segelboot Charter Anfrage"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/80 to-transparent"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
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
      <div className="py-6 md:py-8 bg-gradient-to-br from-slate-50 to-white">
        <Card className="shadow-xl border-0">
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
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark",
                            !formData.startDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.startDate ? format(formData.startDate, "dd.MM.yyyy") : <span>Datum wählen</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.startDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, startDate: date, endDate: date ? addDays(date, 7) : undefined }))}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enddatum *
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark",
                            !formData.endDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.endDate ? format(formData.endDate, "dd.MM.yyyy") : <span>Datum wählen</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.endDate}
                          onSelect={(date) => setFormData(prev => ({ ...prev, endDate: date }))}
                          disabled={(date) => date < new Date() || (formData.startDate && date <= formData.startDate)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
                  className="w-full bg-ocean-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  Unverbindliche Anfrage senden
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
  if (children) {
    return (
      <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent 
          ref={dialogContentRef}
          className="max-w-4xl max-h-[80vh] overflow-y-auto p-0"
          style={{ scrollBehavior: 'auto' }}
        >
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
      </Dialog>
    );
  }
  return <FormContent />;
};
export default CharterRequestForm;