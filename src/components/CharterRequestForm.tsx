import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Anchor, CheckCircle, CalendarIcon } from "lucide-react";
import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, memo } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

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
};
const FormContent = memo(function FormContent({
  formData,
  onInputChange,
  onSelectChange,
  onSubmit,
  onClose
}: FormContentProps) {
  return <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white px-8 py-12 rounded-t-lg">
        <div className="flex items-center gap-4 mb-4">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm14 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-7-8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
          </svg>
          <div>
            <h2 className="text-3xl font-bold">Charter-Anfrage stellen</h2>
            <p className="text-blue-100 mt-2">Erhalten Sie Ihr individuelles Angebot für den perfekten Yacht-Charter</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8">
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            {/* Personal Data */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Persönliche Daten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Vorname*</Label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nachname*</Label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-Mail*</Label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={onInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Charter Details */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Charter-Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="startDate">Startdatum</Label>
                  <input
                    id="startDate"
                    type="date"
                    name="startDate"
                    value={formData.startDate ? format(formData.startDate, 'yyyy-MM-dd') : ''}
                    onChange={(e) => onSelectChange('startDate', e.target.value ? new Date(e.target.value) : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">Enddatum</Label>
                  <input
                    id="endDate"
                    type="date"
                    name="endDate"
                    value={formData.endDate ? format(formData.endDate, 'yyyy-MM-dd') : ''}
                    onChange={(e) => onSelectChange('endDate', e.target.value ? new Date(e.target.value) : null)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label htmlFor="boatSize">Bootsgröße</Label>
                  <select
                    id="boatSize"
                    name="boatSize"
                    value={formData.boatSize}
                    onChange={(e) => onSelectChange('boatSize', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="30-35ft">30-35ft</option>
                    <option value="35-40ft">35-40ft</option>
                    <option value="40-45ft">40-45ft</option>
                    <option value="45-50ft">45-50ft</option>
                    <option value="50ft+">50ft+</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="cabins">Anzahl Kabinen</Label>
                  <select
                    id="cabins"
                    name="cabins"
                    value={formData.cabins}
                    onChange={(e) => onSelectChange('cabins', e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1">1 Kabine</option>
                    <option value="2">2 Kabinen</option>
                    <option value="3">3 Kabinen</option>
                    <option value="4">4 Kabinen</option>
                    <option value="5+">5+ Kabinen</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <Label htmlFor="message">Nachricht</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={onInputChange}
                placeholder="Teilen Sie uns Ihre Wünsche und besonderen Anforderungen mit..."
                rows={4}
                className="mt-1"
              />
            </div>

            {/* Privacy */}
            <div className="mb-6">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  checked={formData.privacyAccepted}
                  onChange={(e) => onSelectChange('privacyAccepted', e.target.checked)}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                  <a href="/datenschutz" className="text-blue-600 hover:underline" target="_blank">
                    Datenschutzerklärung
                  </a>{" "}
                  zu.*
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium"
              disabled={!formData.privacyAccepted}
            >
              Unverbindliches Angebot anfordern
            </Button>
          </div>
        </form>
      </div>

      {/* Close-Button */}
      <button onClick={onClose} className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white transition-all duration-200 shadow-lg border border-gray-200" aria-label="Formular schließen">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>;
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
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  }, []);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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

        // Reset
        setFormData(initialFormData);
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
  const content = <FormContent formData={formData} onInputChange={handleInputChange} onSelectChange={handleSelectChange} onSubmit={handleSubmit} onClose={handleClose} />;
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
      </Dialog>;
  }
  return content;
};
export default CharterRequestForm;