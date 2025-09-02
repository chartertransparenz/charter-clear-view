import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Star, Shield, Users, CheckCircle, Award, Clock3 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { callEdgeFunction } from "@/lib/supabase";
import CharterRequestForm from "./CharterRequestForm";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await callEdgeFunction('send-contact-message', formData);
      
      if (result.success) {
        toast({
          title: "Nachricht gesendet!",
          description: "Wir melden uns schnellstmöglich bei Ihnen zurück.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(result.error || 'Fehler beim Senden der Nachricht');
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Fehler beim Senden",
        description: error.message || "Bitte versuchen Sie es später erneut oder rufen Sie uns direkt an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Goethestraße 24\n88079 Kressbronn am Bodensee"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 7543 499 080"
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@chartertransparenz.de"
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo-Fr 9:00 - 18:00\nSa: 10:00 - 14:00"
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-ocean-light/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-ocean-blue/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-sunset/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header with Hero CTA */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Kontakt
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Sprechen Sie mit uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Bereit für Ihr nächstes Abenteuer? Wir beraten Sie gerne und 
            finden gemeinsam das perfekte Charter-Erlebnis für Sie.
          </p>
          
          {/* Hero CTA Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto mb-8 border border-ocean-light/50">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-left flex-1">
                <h3 className="text-2xl lg:text-3xl font-bold text-ocean-dark mb-2">
                  Ihr Traumtörn in 24 Stunden
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Kostenlos • Unverbindlich • Persönlich
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-ocean-dark" />
                    <span>30+ Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock3 className="w-4 h-4 text-ocean-dark" />
                    <span>24h Antwort-Garantie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-ocean-dark" />
                    <span>Transparente Preise</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <CharterRequestForm>
                  <Button 
                    size="lg" 
                    className="bg-ocean-dark text-white px-8 py-6 text-lg font-semibold hover:bg-ocean-dark/90 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Traumtörn in 24h - Jetzt anfragen
                  </Button>
                </CharterRequestForm>
                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>10.000+ zufriedene Segler</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Elements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-ocean-light/30">
              <Users className="w-6 h-6 text-ocean-dark mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-dark">10.000+</div>
              <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-ocean-light/30">
              <Award className="w-6 h-6 text-ocean-dark mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-dark">30+</div>
              <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-ocean-light/30">
              <Shield className="w-6 h-6 text-ocean-dark mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-dark">100%</div>
              <div className="text-sm text-muted-foreground">Transparenz</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-ocean-light/30">
              <Clock3 className="w-6 h-6 text-ocean-dark mx-auto mb-2" />
              <div className="text-2xl font-bold text-ocean-dark">24h</div>
              <div className="text-sm text-muted-foreground">Antwort-Zeit</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant border-ocean-light/50 mb-6">
              <CardHeader>
                <CardTitle className="text-ocean-dark">Kontaktinformationen</CardTitle>
                <CardDescription>
                  Erreichen Sie uns auf verschiedenen Wegen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-ocean-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-ocean-dark mb-1">{info.title}</div>
                      <div className="text-sm text-muted-foreground whitespace-pre-line">
                        {info.content}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-elegant border-ocean-light/50 bg-ocean-dark text-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2 text-white">Sofortige Beratung gewünscht?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Rufen Sie uns direkt an oder schreiben Sie uns eine WhatsApp-Nachricht.
                </p>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start bg-white/10 text-white border-white/30 hover:bg-white/20"
                    onClick={() => window.open('tel:+497543499080', '_self')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start bg-white/10 text-white border-white/30 hover:bg-white/20"
                    onClick={() => {
                      const phoneNumber = "497543499080";
                      const message = encodeURIComponent("Hallo! Ich interessiere mich für Ihre Yacht Charter Services.");
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappUrl, '_blank');
                    }}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    WhatsApp senden
                  </Button>
                  <CharterRequestForm>
                    <Button variant="default" size="sm" className="w-full bg-[hsl(212_95%_25%)] hover:bg-[hsl(212_95%_20%)] text-white border-0 shadow-elegant transition-smooth">
                      <Send className="w-4 h-4 mr-2" />
                      Jetzt Anfrage stellen
                    </Button>
                  </CharterRequestForm>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant border-ocean-light/50">
              <CardHeader>
                <CardTitle className="text-ocean-dark">Nachricht senden</CardTitle>
                <CardDescription>
                  Beschreiben Sie uns Ihre Wünsche und wir erstellen Ihnen ein 
                  individuelles Angebot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
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

                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Nachricht *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Beschreiben Sie uns Ihre Wünsche: Reisezeitraum, gewünschte Destination, Anzahl Personen, besondere Anforderungen..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-ocean-dark text-white py-6 text-lg font-semibold hover:bg-ocean-dark/90 transition-colors disabled:opacity-50" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>

                  <div className="bg-ocean-light/10 border border-ocean-light/30 rounded-lg p-4 mt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-ocean-dark" />
                      <span className="font-semibold text-ocean-dark">Ihre Vorteile</span>
                    </div>
                    <ul className="text-sm text-ocean-dark/80 space-y-1">
                      <li>• Antwort innerhalb von 24h</li>
                      <li>• Kostenlose & unverbindliche Beratung</li>
                      <li>• Transparente Preise ohne versteckte Kosten</li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. 
                    Wir antworten in der Regel innerhalb von 24 Stunden.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;