import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Send, Anchor, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import charterHeroWater from "@/assets/charter-hero-water.jpg";

// Zod validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen haben"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  charterType: z.string().min(1, "Bitte wählen Sie eine Charter-Art"),
  boatType: z.string().min(1, "Bitte wählen Sie einen Bootstyp"),
  territory: z.string().min(1, "Bitte wählen Sie ein Revier"),
  startDate: z.string().min(1, "Bitte wählen Sie ein Startdatum"),
  endDate: z.string().min(1, "Bitte wählen Sie ein Enddatum"),
  boatSize: z.string().optional(),
  cabins: z.string().optional(),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val === true, "Datenschutzerklärung muss akzeptiert werden")
});

type FormData = z.infer<typeof formSchema>;

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
  const { toast } = useToast();
  const [dialogOpen, setDialogOpen] = useState(isOpen || false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    }
  });

  // Handle browser back button and ESC key
  useEffect(() => {
    const handlePopState = () => {
      if (dialogOpen) {
        handleClose();
      }
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && dialogOpen && !isPopoverOpen) {
        handleClose();
      }
    };
    
    if (dialogOpen) {
      window.addEventListener('popstate', handlePopState);
      document.addEventListener('keydown', handleKeyDown);
      window.history.pushState({ dialogOpen: true }, '');
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

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Note: This requires Supabase connection to work
      const response = await fetch('/functions/v1/send-charter-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast({
          title: "Anfrage erfolgreich gesendet!",
          description: "Wir melden uns innerhalb von 24 Stunden mit Ihrem persönlichen Angebot zurück."
        });
        form.reset();
        handleClose();
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Ihre Supabase-Integration ist noch nicht aktiv. Bitte verbinden Sie Ihr Projekt mit Supabase, um E-Mails zu versenden.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
    <div className="relative">
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
      <div className="p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white max-h-96 overflow-y-auto">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel size="lg">Vorname *</FormLabel>
                        <FormControl>
                          <Input
                            size="lg"
                            placeholder="Ihr Vorname"
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel size="lg">Nachname *</FormLabel>
                        <FormControl>
                          <Input
                            size="lg"
                            placeholder="Ihr Nachname"
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel size="lg">E-Mail-Adresse *</FormLabel>
                        <FormControl>
                          <Input
                            size="lg"
                            type="email"
                            placeholder="ihre@email.de"
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel size="lg">Telefonnummer</FormLabel>
                        <FormControl>
                          <Input
                            size="lg"
                            placeholder="+49 123 456789"
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Charter Details */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Charter-Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField
                      control={form.control}
                      name="charterType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel size="lg">Charter-Art *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger size="lg" className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Wählen Sie die Charter-Art" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent size="lg">
                              <SelectItem value="bareboat">Bareboat Charter</SelectItem>
                              <SelectItem value="skippered">Charter mit Skipper</SelectItem>
                              <SelectItem value="crewed">Charter mit Crew</SelectItem>
                              <SelectItem value="cabin">Kabinen-Charter</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="boatType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel size="lg">Bootstyp *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger size="lg" className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Wählen Sie den Bootstyp" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent size="lg">
                              <SelectItem value="segelboot">Segelboot</SelectItem>
                              <SelectItem value="motorboot">Motorboot</SelectItem>
                              <SelectItem value="katamaran">Katamaran</SelectItem>
                              <SelectItem value="gulet">Gulet</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="territory"
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel size="lg">Revier *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger size="lg" className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                              <SelectValue placeholder="Wählen Sie Ihr Wunschrevier" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent size="lg">
                            <SelectItem value="mittelmeer">Mittelmeer</SelectItem>
                            <SelectItem value="nordsee">Nordsee</SelectItem>
                            <SelectItem value="ostsee">Ostsee</SelectItem>
                            <SelectItem value="atlantik">Atlantik</SelectItem>
                            <SelectItem value="pazifik">Pazifik</SelectItem>
                            <SelectItem value="indischer-ozean">Indischer Ozean</SelectItem>
                            <SelectItem value="karibik">Karibik</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="mb-4">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel size="lg">Reisezeitraum *</FormLabel>
                          <FormControl>
                             <DateRangePicker
                               size="lg"
                               value={{
                                 startDate: field.value || "",
                                 endDate: form.watch("endDate") || ""
                               }}
                               onChange={(value) => {
                                 form.setValue("startDate", value.startDate);
                                 form.setValue("endDate", value.endDate);
                               }}
                               onPopoverOpenChange={setIsPopoverOpen}
                               placeholder="Start- und Enddatum wählen"
                               className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                             />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormField
                      control={form.control}
                      name="boatSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel size="lg">Bootslänge</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger size="lg" className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Wählen Sie die Bootslänge" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent size="lg">
                              <SelectItem value="30-35ft">30-35 Fuß</SelectItem>
                              <SelectItem value="36-40ft">36-40 Fuß</SelectItem>
                              <SelectItem value="41-45ft">41-45 Fuß</SelectItem>
                              <SelectItem value="46-50ft">46-50 Fuß</SelectItem>
                              <SelectItem value="50ft+">Über 50 Fuß</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cabins"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel size="lg">Anzahl Kabinen</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger size="lg" className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Wählen Sie die Anzahl Kabinen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent size="lg">
                              <SelectItem value="1">1 Kabine</SelectItem>
                              <SelectItem value="2">2 Kabinen</SelectItem>
                              <SelectItem value="3">3 Kabinen</SelectItem>
                              <SelectItem value="4">4 Kabinen</SelectItem>
                              <SelectItem value="5+">5+ Kabinen</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="border-t pt-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel size="lg">Zusätzliche Wünsche oder Anmerkungen</FormLabel>
                        <FormControl>
                          <Textarea
                            size="lg"
                            placeholder="Teilen Sie uns Ihre besonderen Wünsche oder Fragen mit..."
                            rows={4}
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Privacy Policy */}
                <div className="border-t pt-6">
                  <FormField
                    control={form.control}
                    name="privacyAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-gray-300 data-[state=checked]:bg-ocean-dark data-[state=checked]:border-ocean-dark"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-600 leading-relaxed">
                            Ich akzeptiere die{" "}
                            <a href="/datenschutz" className="text-ocean-dark hover:underline" target="_blank">
                              Datenschutzerklärung
                            </a>{" "}
                            und stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-ocean-dark hover:bg-ocean-light text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Anfrage wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Unverbindliche Anfrage senden
                      </>
                    )}
                  </Button>
                  
                  <div className="mt-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>100% kostenlos & unverbindlich</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                        Antwort in 24h
                      </Badge>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                        Persönliche Beratung
                      </Badge>
                      <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
                        Beste Preise
                      </Badge>
                    </div>
                  </div>
                </div>
              </form>
            </Form>
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
        <DialogContent className="max-w-4xl w-full max-h-[90vh] p-0 pt-12 pr-12 overflow-hidden">
          <DialogTitle className="sr-only">Charter-Anfrage</DialogTitle>
          <DialogDescription className="sr-only">
            Stellen Sie hier Ihre unverbindliche Charter-Anfrage
          </DialogDescription>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <FormContent />
      </div>
    </div>
  );
};

export default CharterRequestForm;