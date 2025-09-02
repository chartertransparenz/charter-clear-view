import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { InlineDateRangePicker } from "@/components/ui/inline-date-range-picker";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

// Form schema with identical validation
const formSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(5, "Telefonnummer muss mindestens 5 Zeichen lang sein"),
  startDate: z.string().min(1, "Startdatum ist erforderlich"),
  endDate: z.string().min(1, "Enddatum ist erforderlich"),
  guests: z.string().min(1, "Anzahl der Gäste ist erforderlich"),
  yachtType: z.string().min(1, "Yacht-Typ ist erforderlich"),
  destination: z.string().min(1, "Reiseziel ist erforderlich"),
  budget: z.string().optional(),
  experience: z.string().optional(),
  specialRequests: z.string().optional(),
  message: z.string().optional(),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen"
  })
});

type FormData = z.infer<typeof formSchema>;

interface NewCharterRequestFormProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const NewCharterRequestForm = ({ children, isOpen, onOpenChange }: NewCharterRequestFormProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      startDate: "",
      endDate: "",
      guests: "",
      yachtType: "",
      destination: "",
      budget: "",
      experience: "",
      specialRequests: "",
      message: "",
      privacyAccepted: false
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/charter-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success("Ihre Charter-Anfrage wurde erfolgreich gesendet!");
        form.reset();
        setDialogOpen(false);
        onOpenChange?.(false);
      } else {
        throw new Error('Fehler beim Senden der Anfrage');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-48 md:h-64 mb-8 rounded-t-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lovable-uploads/8c9c42c4-913d-4fc1-bc27-4e26c7f23c1d.png')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/80 via-ocean-dark/60 to-transparent" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ihr Charter-Erlebnis wartet
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Teilen Sie uns Ihre Wünsche mit und wir erstellen Ihnen ein maßgeschneidertes Angebot
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <Card className="border-0 shadow-2xl">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-ocean-dark">Vorname *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                          placeholder="Ihr Vorname"
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
                      <FormLabel className="text-lg font-semibold text-ocean-dark">Nachname *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                          placeholder="Ihr Nachname"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold text-ocean-dark">E-Mail *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                          placeholder="ihre.email@beispiel.de"
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
                      <FormLabel className="text-lg font-semibold text-ocean-dark">Telefon *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                          placeholder="+49 123 456789"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Charter Details */}
              <div className="border-t pt-6 mt-8">
                <h3 className="text-2xl font-bold text-ocean-dark mb-6">Charter Details</h3>
                
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-ocean-dark">Reisezeitraum *</FormLabel>
                        <FormControl>
                          <InlineDateRangePicker
                            size="lg"
                            value={{
                              startDate: field.value || "",
                              endDate: form.watch("endDate") || ""
                            }}
                            onChange={(value) => {
                              // Add timeout to prevent scroll issues during state updates
                              setTimeout(() => {
                                form.setValue("startDate", value.startDate);
                                form.setValue("endDate", value.endDate);
                              }, 10);
                            }}
                            placeholder="Start- und Enddatum wählen"
                            className="border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold text-ocean-dark">Anzahl Gäste *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Gästeanzahl wählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 Personen</SelectItem>
                              <SelectItem value="3-4">3-4 Personen</SelectItem>
                              <SelectItem value="5-6">5-6 Personen</SelectItem>
                              <SelectItem value="7-8">7-8 Personen</SelectItem>
                              <SelectItem value="9-10">9-10 Personen</SelectItem>
                              <SelectItem value="11-12">11-12 Personen</SelectItem>
                              <SelectItem value="13+">13+ Personen</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="yachtType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold text-ocean-dark">Yacht-Typ *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Yacht-Typ wählen" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="segelyacht">Segelyacht</SelectItem>
                              <SelectItem value="motoryacht">Motoryacht</SelectItem>
                              <SelectItem value="katamaran">Katamaran</SelectItem>
                              <SelectItem value="luxusyacht">Luxusyacht</SelectItem>
                              <SelectItem value="sportboot">Sportboot</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-ocean-dark">Reiseziel *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                              <SelectValue placeholder="Reiseziel wählen" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mittelmeer">Mittelmeer</SelectItem>
                            <SelectItem value="karibik">Karibik</SelectItem>
                            <SelectItem value="ostsee">Ostsee</SelectItem>
                            <SelectItem value="nordsee">Nordsee</SelectItem>
                            <SelectItem value="adria">Adria</SelectItem>
                            <SelectItem value="aegaeis">Ägäis</SelectItem>
                            <SelectItem value="andere">Andere</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold text-ocean-dark">Budget</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Budget wählen (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="unter-5000">Unter 5.000€</SelectItem>
                              <SelectItem value="5000-10000">5.000€ - 10.000€</SelectItem>
                              <SelectItem value="10000-20000">10.000€ - 20.000€</SelectItem>
                              <SelectItem value="20000-50000">20.000€ - 50.000€</SelectItem>
                              <SelectItem value="ueber-50000">Über 50.000€</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold text-ocean-dark">Segelerfahrung</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark">
                                <SelectValue placeholder="Erfahrung wählen (optional)" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="anfaenger">Anfänger</SelectItem>
                              <SelectItem value="fortgeschritten">Fortgeschritten</SelectItem>
                              <SelectItem value="erfahren">Erfahren</SelectItem>
                              <SelectItem value="profi">Profi</SelectItem>
                              <SelectItem value="mit-skipper">Mit Skipper gewünscht</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-ocean-dark">Besondere Wünsche</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Catering, Wassersport, Sonderausstattung..."
                            className="min-h-[100px] text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold text-ocean-dark">Nachricht</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Teilen Sie uns weitere Details zu Ihren Wünschen mit..."
                            className="min-h-[120px] text-lg border-gray-200 focus:border-ocean-dark focus:ring-ocean-dark resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="privacyAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm cursor-pointer">
                            Ich stimme der Datenschutzerklärung zu und bin damit einverstanden, 
                            dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. *
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col items-center space-y-4 pt-8">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-12 py-4 text-lg font-semibold bg-gradient-ocean hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Charter-Anfrage senden"
                  )}
                </Button>
                
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Kostenlos & unverbindlich
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Antwort binnen 24h
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Maßgeschneidertes Angebot
                  </span>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );

  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    onOpenChange?.(open);
  };

  // Handle external control
  const isDialogOpen = isOpen !== undefined ? isOpen : dialogOpen;

  if (children) {
    return (
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent 
          className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-white"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <div className="h-full overflow-y-auto">
            <FormContent />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent 
        className="max-w-5xl w-[95vw] h-[95vh] p-0 bg-white"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="h-full overflow-y-auto">
          <FormContent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewCharterRequestForm;