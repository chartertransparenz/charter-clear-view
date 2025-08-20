import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CharterRequestForm from "./CharterRequestForm";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns schnellstmöglich bei dir zurück.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
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
      content: "Mo-Fr: 9:00-18:00\nSa: 10:00-16:00"
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-ocean-light/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Kontakt
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ocean-dark">
            Lass uns sprechen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bereit für dein nächstes Abenteuer? Wir beraten dich gerne und 
            finden gemeinsam das perfekte Charter-Erlebnis für dich.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-elegant border-ocean-light/50 mb-6">
              <CardHeader>
                <CardTitle className="text-ocean-dark">Kontaktinformationen</CardTitle>
                <CardDescription>
                  Erreiche uns auf verschiedenen Wegen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center flex-shrink-0">
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
                  Ruf uns direkt an oder schreib uns eine WhatsApp-Nachricht.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-white/10 text-white border-white/30 hover:bg-white/20">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-white/10 text-white border-white/30 hover:bg-white/20">
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
                  Beschreibe uns deine Wünsche und wir erstellen dir ein 
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
                        placeholder="Dein vollständiger Name"
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
                        placeholder="deine@email.de"
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
                      placeholder="Beschreibe uns deine Wünsche: Reisezeitraum, gewünschte Destination, Anzahl Personen, besondere Anforderungen..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="ocean" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Mit dem Absenden akzeptierst du unsere Datenschutzerklärung. 
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