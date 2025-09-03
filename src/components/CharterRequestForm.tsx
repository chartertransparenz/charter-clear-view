import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  onSelectChange: (name: string, value: string) => void;
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
      

      {/* Form Section */}
      

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