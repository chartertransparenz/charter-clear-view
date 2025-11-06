import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Anchor, CheckCircle, CalendarIcon, Loader2 } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, memo } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { z } from "zod";

// -----------------------------
// Supabase Edge Function Helper
// -----------------------------
const callEdgeFunction = async (functionName: string, data: any) => {
  try {
    const {
      data: result,
      error
    } = await supabase.functions.invoke(functionName, {
      body: data
    });
    if (error) {
      console.error(`Supabase Edge Function error:`, error);
      throw error;
    }
    return {
      success: true,
      data: result
    };
  } catch (error: any) {
    console.error(`Error calling ${functionName}:`, error);
    return {
      success: false,
      error: error.message || 'Ein Fehler ist aufgetreten. Bitte nutzen Sie alternativ unsere Telefonnummer oder E-Mail-Adresse für direkten Kontakt.'
    };
  }
};

// -----------------------------
// Form State Typen / Defaults
// -----------------------------
interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  startDate?: Date;
  endDate?: Date;
  boatSize: string;
  cabins: string;
  message: string;
  privacyAccepted: boolean;
}
const initialFormData: FormState = {
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
};

// --------------------------------------
// FormContent – stabil am Modul-Top-Level
// --------------------------------------
type FormContentProps = {
  formData: FormState;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange: (name: string, value: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  isSubmitting: boolean;
  privacyError: boolean;
};
const FormContent = memo(function FormContent({
  formData,
  onInputChange,
  onSelectChange,
  onSubmit,
  onClose,
  isSubmitting,
  privacyError,
}: FormContentProps) {
  return (
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
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vorname *
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                    onChange={onInputChange}
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
                        <Button type="button"
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
                          onSelect={(date) => onSelectChange('startDate', date as any)}
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
                        <Button type="button"
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
                          onSelect={(date) => onSelectChange('endDate', date as any)}
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
                    <Select value={formData.boatSize} onValueChange={(value) => onSelectChange('boatSize', value)}>
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
                    <Select value={formData.cabins} onValueChange={(value) => onSelectChange('cabins', value)}>
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
                  onChange={onInputChange}
                  placeholder="Teilen Sie uns Ihre besonderen Wünsche oder Fragen mit..."
                  rows={4}
                  className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                />
              </div>

              {/* Privacy Policy */}
              <div className="border-t pt-6">
                <div id="privacy-section" className={cn(
                  "flex items-start space-x-3 p-3 rounded-lg transition-all",
                  privacyError && "ring-2 ring-red-500 bg-red-50"
                )}>
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyAccepted}
                    onCheckedChange={(checked) => onSelectChange('privacyAccepted', (checked === true) as any)}
                    className="border-gray-300 data-[state=checked]:bg-ocean-dark data-[state=checked]:border-ocean-dark mt-0.5"
                  />
                  <div className="flex-1">
                    <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed">
                      Ich akzeptiere die{" "}
                      <a href="/datenschutz" className="text-ocean-dark hover:underline" target="_blank">
                        Datenschutzerklärung
                      </a>{" "}
                      und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                    </label>
                    {privacyError && (
                      <p className="text-sm font-medium text-red-600 mt-2">
                        Bitte akzeptieren Sie die Datenschutzerklärung, um fortzufahren.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-ocean-dark text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? "Wird gesendet..." : "Unverbindliche Anfrage senden"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Close-Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 shadow-lg border border-gray-200"
        aria-label="Formular schließen"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
});

// --------------------------------------
// Hauptkomponente: CharterRequestForm
// --------------------------------------
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
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(isOpen || false);
  const historyPushedRef = useRef(false);
  const dialogContentRef = useRef<HTMLDivElement>(null);

  // Scroll-State (nur passiv tracken)
  const scrollPositionRef = useRef(0);

  // Tipp-Schutz (optional – verhindert Re-Fokus-Side-Effects)
  const isEditingRef = useRef(false);

  // -----------------------------
  // Stable callbacks
  // -----------------------------
  const handleClose = useCallback(() => {
    setDialogOpen(false);
    historyPushedRef.current = false;
    onOpenChange?.(false);
  }, [onOpenChange]);
  const handleOpenChange = useCallback((open: boolean) => {
    setDialogOpen(open);
    onOpenChange?.(open);
  }, [onOpenChange]);

  // -----------------------------
  // Back/ESC Listener (nur offen)
  // -----------------------------
  const handlePopStateRef = useRef<() => void>();
  const handleKeyDownRef = useRef<(e: KeyboardEvent) => void>();
  handlePopStateRef.current = () => {
    if (dialogOpen) handleClose();
  };
  handleKeyDownRef.current = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && dialogOpen) handleClose();
  };
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
  }, [dialogOpen]);

  // History push einmalig bei Open
  useEffect(() => {
    if (dialogOpen && !historyPushedRef.current) {
      window.history.pushState({
        dialogOpen: true
      }, '');
      historyPushedRef.current = true;
    }
  }, [dialogOpen]);

  // Prop isOpen synchronisieren
  useEffect(() => {
    if (isOpen !== undefined) setDialogOpen(isOpen);
  }, [isOpen]);

  // ---------------------------------
  // Formular-Status
  // ---------------------------------
  const [formData, setFormData] = useState<FormState>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    try {
      const { name, value } = e.target;
      // Debug: trace inputs to catch the exact field when error occurs
      console.debug("CharterRequestForm onChange", { field: name, length: (value ?? "").length });
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    } catch (err) {
      console.error("Input error in CharterRequestForm", err);
    }
  }, []);
  const handleSelectChange = useCallback((name: string, value: any) => {
    if (name === 'startDate') {
      // Enddatum automatisch 7 Tage nach Start setzen (wie im Original)
      setFormData(prev => ({
        ...prev,
        startDate: value ?? undefined,
        endDate: value ? addDays(value as Date, 7) : prev.endDate
      }));
    } else if (name === 'endDate') {
      setFormData(prev => ({
        ...prev,
        endDate: value ?? undefined
      }));
    } else if (name === 'privacyAccepted') {
      setFormData(prev => ({
        ...prev,
        privacyAccepted: Boolean(value)
      }));
      setPrivacyError(false); // Clear error when checkbox is checked
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('=== Charter Request Form Submit Started ===');
    console.log('Form Data:', formData);
    
    // Zod-Validierung aller Eingaben
    const formSchema = z
      .object({
        firstName: z.string().trim().min(1, "Vorname ist erforderlich").max(100),
        lastName: z.string().trim().min(1, "Nachname ist erforderlich").max(100),
        email: z.string().trim().email("Bitte gültige E-Mail angeben").max(255),
        phone: z.string().trim().max(50).optional(),
        startDate: z.date({ required_error: "Startdatum erforderlich" }),
        endDate: z.date({ required_error: "Enddatum erforderlich" }),
        boatSize: z.string().trim().max(50).optional(),
        cabins: z.string().trim().max(10).optional(),
        message: z.string().trim().max(1000).optional(),
        privacyAccepted: z.literal(true, {
          errorMap: () => ({ message: "Bitte Datenschutzerklärung akzeptieren" }),
        }),
      })
      .refine((data) => data.endDate > data.startDate, {
        message: "Enddatum muss nach dem Startdatum liegen",
        path: ["endDate"],
      });

    const parsed = formSchema.safeParse(formData);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      const message = issue?.message || "Bitte Eingaben prüfen";
      console.log("Validation failed:", message, issue);
      toast({
        title: "Eingabe prüfen",
        description: message,
        variant: "destructive",
      });
      const field = issue?.path?.[0];
      if (typeof field === "string") {
        // Special handling for privacy checkbox
        if (field === "privacyAccepted") {
          setPrivacyError(true);
          const privacySection = document.getElementById("privacy-section");
          privacySection?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          const el = document.querySelector(`[name="${field}"]`) as HTMLElement | null;
          el?.focus?.();
        }
      }
      return;
    }

    setIsSubmitting(true);
    console.log('Starting Edge Function call...');
    
    try {
      const submissionData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        startDate: format(formData.startDate, 'yyyy-MM-dd'),
        endDate: format(formData.endDate, 'yyyy-MM-dd'),
        boatSize: formData.boatSize,
        cabins: formData.cabins,
        message: formData.message
      };
      
      console.log('Submission Data:', submissionData);
      
      const result = await callEdgeFunction('send-charter-request', submissionData);
      
      console.log('Edge Function Result:', result);
      
      if (result.success && result.data?.success) {
        console.log('Success! Request received, referenceId:', result.data?.referenceId);
        
        const ref = result.data?.referenceId || 'UNKNOWN';
        const userEmailSent = result.data?.userEmailSent ?? true;
        
        toast({
          title: "Anfrage erfolgreich gesendet!",
          description: `Ihre Referenz-ID: ${ref}${!userEmailSent ? ' (Bestätigungs-E-Mail konnte nicht zugestellt werden)' : ''}`
        });

        // Reset form and close dialog
        setFormData(initialFormData);
        handleClose();
        
        // Navigate to confirmation page with emailSent parameter
        navigate(`/anfrage-bestaetigung?ref=${encodeURIComponent(ref)}&name=${encodeURIComponent(formData.firstName)}&email=${encodeURIComponent(formData.email)}&emailSent=${userEmailSent}`);
      } else {
        throw new Error(result.error || 'Failed to send request');
      }
    } catch (error: any) {
      console.error('=== Charter Request Form Error ===');
      console.error('Error:', error);
      console.error('Error message:', error.message);
      
      // Provide more specific error messages
      let errorDescription = "Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.";
      
      if (error.message?.includes('email') || error.message?.includes('E-Mail')) {
        errorDescription = "Die E-Mail konnte nicht gesendet werden. Bitte kontaktieren Sie uns direkt unter info@chartertransparenz.de oder +49 123 456789.";
      } else if (error.message?.includes('network') || error.message?.includes('fetch')) {
        errorDescription = "Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.";
      } else if (error.message?.includes('timeout')) {
        errorDescription = "Die Anfrage hat zu lange gedauert. Bitte versuchen Sie es erneut.";
      }
      
      toast({
        title: "Fehler beim Senden",
        description: errorDescription,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
      console.log('=== Charter Request Form Submit Finished ===');
    }
  }, [formData, handleClose, toast]);

  // ---------------------------------
  // PASSIVES Scroll-Tracking
  // ---------------------------------
  useEffect(() => {
    const el = dialogContentRef.current;
    if (!el) return;
    const onScroll = () => {
      scrollPositionRef.current = el.scrollTop;
    };
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Tipp-Status (optional, schützt vor Re-Fokus-Effekten)
  useEffect(() => {
    const root = dialogContentRef.current;
    if (!root) return;
    const isTextual = (t: EventTarget | null) => t instanceof HTMLElement && t.matches('input, textarea, [contenteditable="true"]');
    const onFocusIn = (e: FocusEvent) => {
      if (isTextual(e.target)) isEditingRef.current = true;
    };
    const onFocusOut = () => {
      requestAnimationFrame(() => {
        isEditingRef.current = false;
      });
    };
    root.addEventListener('focusin', onFocusIn);
    root.addEventListener('focusout', onFocusOut);
    return () => {
      root.removeEventListener('focusin', onFocusIn);
      root.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  // ---------------------------------
  // Scroll-Restoration NUR bei Open
  // ---------------------------------
  useLayoutEffect(() => {
    if (!dialogOpen || !dialogContentRef.current) return;
    dialogContentRef.current.scrollTop = scrollPositionRef.current;

    // aktives Element behalten – ohne Scroll-Jump
    const active = document.activeElement as HTMLInputElement | HTMLTextAreaElement | null;
    if (active?.focus) {
      try {
        active.focus({
          preventScroll: true
        } as any);
      } catch {}
    }
  }, [dialogOpen]);

  // ---------------------------------
  // Render
  // ---------------------------------
  const content = <FormContent formData={formData} onInputChange={handleInputChange} onSelectChange={handleSelectChange} onSubmit={handleSubmit} onClose={handleClose} isSubmitting={isSubmitting} privacyError={privacyError} />;
  if (children) {
    return <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent ref={dialogContentRef} className="max-w-4xl max-h-[80vh] overflow-y-auto p-0" style={{
        scrollBehavior: 'auto'
      }}>
          <DialogTitle className="sr-only">Charter-Anfrage Formular</DialogTitle>
          <DialogDescription className="sr-only">
            Füllen Sie das Formular aus, um eine unverbindliche Charter-Anfrage zu stellen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </DialogDescription>
          {content}
        </DialogContent>
      </Dialog>
  }
  return content;
};
export default CharterRequestForm;