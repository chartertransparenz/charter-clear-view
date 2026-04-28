import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Sailboat, DollarSign, Route, CheckCircle, Send, Loader2, Shield, Award, Eye, Users } from "lucide-react";

const BASE_URL = "https://chartertransparenz.de";

// ─── Edge Function helper ──────────────────────────────────────────────────
async function callEdgeFunction(functionName: string, data: unknown) {
  try {
    const { data: result, error } = await supabase.functions.invoke(functionName, { body: data });
    if (error) {
      const ctx = (error as Record<string, unknown>).context;
      console.error(
        `[callEdgeFunction] ${functionName} returned an error:`,
        error.message,
        ctx ?? ""
      );
      throw error;
    }
    console.log(`[callEdgeFunction] ${functionName} success:`, result);
    return { success: true, data: result };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unbekannter Fehler";
    console.error(`[callEdgeFunction] ${functionName} exception:`, message);
    return { success: false, error: message };
  }
}

// ─── Service items ─────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: MapPin,
    title: "Passendes Revier",
    text: "Kroatien, Griechenland, Karibik oder ein anderes Revier – wir ordnen ein, was wirklich zu Ihrer Crew passt.",
  },
  {
    icon: Sailboat,
    title: "Richtige Yacht",
    text: "Katamaran oder Monohull, Größe, Komfort und Ausstattung – verständlich erklärt und passend ausgewählt.",
  },
  {
    icon: DollarSign,
    title: "Realistische Kosten",
    text: "Wir schauen nicht nur auf den Basispreis, sondern auf die tatsächliche Planung Ihres Törns.",
  },
  {
    icon: Route,
    title: "Törnplanung",
    text: "Route, Saison, Distanzen, Marinas und Ankerbuchten – damit Ihr Urlaub entspannt bleibt.",
  },
];

const FOR_WHOM = [
  "Erster Yachtcharter – Sie möchten wissen, was wirklich auf Sie zukommt",
  "Konkreter Törnplan steht – passendes Angebot gesucht",
  "Neues Revier oder alternative Route erkunden",
  "Detailfragen zu Yacht, Ausstattung, Skipper oder Basis",
  "Effiziente Planung ohne Zeitverlust im Angebotswirrwarr",
];

const STEPS = [
  "Sie beschreiben kurz Ihre Wünsche und Vorstellungen.",
  "Wir melden uns persönlich bei Ihnen – per E-Mail oder Telefon, ganz wie Sie möchten.",
  "Gemeinsam finden wir die passende Lösung für Ihren Törn.",
];

const TRUST = [
  { icon: Award, label: "Über 30 Jahre Erfahrung im Yachtcharter" },
  { icon: Eye,   label: "Unabhängige Einschätzung" },
  { icon: Shield, label: "Transparente Kostenplanung" },
];

const DIFFERENTIATORS = [
  {
    icon: Users,
    title: "Persönliche Ansprechpartner",
    text: "Keine Algorithmen, kein Chatbot. Sie sprechen mit Menschen, die selbst segeln und die Reviere kennen.",
  },
  {
    icon: Eye,
    title: "Unabhängige Empfehlung",
    text: "Wir sind nicht an einen Anbieter gebunden. Unsere Einschätzung richtet sich ausschließlich nach Ihren Wünschen.",
  },
  {
    icon: DollarSign,
    title: "Vollständige Preistransparenz",
    text: "Charterpreis, Kaution, Nebenkosten, Skipper – wir zeigen Ihnen, was Ihr Törn wirklich kostet, bevor Sie buchen.",
  },
  {
    icon: Shield,
    title: "Kein Verkaufsdruck",
    text: "Die Beratung ist unverbindlich und kostenlos. Wir verdienen nur, wenn Sie wirklich zufrieden buchen.",
  },
];

// ─── Form ──────────────────────────────────────────────────────────────────
interface FormValues {
  name: string;
  email: string;
  phone: string;
  travelPeriod: string;
  destination: string;
  boatType: string;
  experienceLevel: string;
  consultationPreference: string;
  message: string;
}

const EMPTY: FormValues = {
  name: "",
  email: "",
  phone: "",
  travelPeriod: "",
  destination: "",
  boatType: "",
  experienceLevel: "",
  consultationPreference: "",
  message: "",
};

function validate(v: FormValues): Partial<Record<keyof FormValues, string>> {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!v.name.trim()) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!v.email.trim()) {
    errors.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (!v.message.trim()) errors.message = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  return errors;
}

function AnfrageForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setStatus("submitting");
    const result = await callEdgeFunction("send-charter-anfrage", {
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || undefined,
      travelPeriod: values.travelPeriod.trim() || undefined,
      destination: values.destination.trim() || undefined,
      boatType: values.boatType || undefined,
      experienceLevel: values.experienceLevel || undefined,
      consultationPreference: values.consultationPreference || undefined,
      message: values.message.trim(),
    });
    if (!result.success) {
      console.error("[CharterAnfrage] Form submission failed:", result.error);
    }
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="w-14 h-14 text-emerald-500" />
        <p className="text-xl font-semibold text-gray-900">
          Ihre Anfrage ist bei uns eingegangen.
        </p>
        <p className="text-gray-600 max-w-sm leading-relaxed">
          Wir melden uns persönlich bei Ihnen – in der Regel innerhalb von einem Werktag.
          Schauen Sie bei Bedarf auch in Ihren Spam-Ordner.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormValues) =>
    `w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-dark/30 transition ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
    }`;

  const selectClass = (field: keyof FormValues) =>
    `w-full rounded-md border px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-ocean-dark/30 transition bg-white ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name + E-Mail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Ihr Name"
            className={inputClass("name")}
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-Mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="ihre@email.de"
            className={inputClass("email")}
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      {/* Telefon + Kontaktpräferenz */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+49 …"
            className={inputClass("phone")}
          />
        </div>
        <div>
          <label htmlFor="consultationPreference" className="block text-sm font-medium text-gray-700 mb-1">
            Kontaktpräferenz <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="consultationPreference"
            name="consultationPreference"
            value={values.consultationPreference}
            onChange={handleChange}
            className={selectClass("consultationPreference")}
          >
            <option value="">Bitte wählen …</option>
            <option value="Per E-Mail">Per E-Mail</option>
            <option value="Per Telefon">Per Telefon</option>
            <option value="Beides möglich">Beides möglich</option>
          </select>
        </div>
      </div>

      {/* Reisezeitraum + Wunschrevier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="travelPeriod" className="block text-sm font-medium text-gray-700 mb-1">
            Reisezeitraum <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="travelPeriod"
            name="travelPeriod"
            type="text"
            value={values.travelPeriod}
            onChange={handleChange}
            placeholder="z. B. Juni 2026"
            className={inputClass("travelPeriod")}
          />
        </div>
        <div>
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
            Wunschrevier <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            value={values.destination}
            onChange={handleChange}
            placeholder="z. B. Kroatien"
            className={inputClass("destination")}
          />
        </div>
      </div>

      {/* Bootstyp + Erfahrungslevel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="boatType" className="block text-sm font-medium text-gray-700 mb-1">
            Yachttyp <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="boatType"
            name="boatType"
            value={values.boatType}
            onChange={handleChange}
            className={selectClass("boatType")}
          >
            <option value="">Bitte wählen …</option>
            <option value="Segelyacht">Segelyacht</option>
            <option value="Katamaran">Katamaran</option>
            <option value="Motorboot">Motorboot</option>
            <option value="Noch offen">Noch offen</option>
          </select>
        </div>
        <div>
          <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
            Charter-Erfahrung <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <select
            id="experienceLevel"
            name="experienceLevel"
            value={values.experienceLevel}
            onChange={handleChange}
            className={selectClass("experienceLevel")}
          >
            <option value="">Bitte wählen …</option>
            <option value="Erster Charter">Erster Charter</option>
            <option value="1–3 Erfahrungen">1–3 Chartertörns</option>
            <option value="Regelmäßig">Regelmäßig (4–10)</option>
            <option value="Sehr erfahren">Sehr erfahren (10+)</option>
          </select>
        </div>
      </div>

      {/* Nachricht */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Nachricht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Beschreiben Sie kurz Ihre Wünsche und Vorstellungen – je mehr Details, desto gezielter können wir Ihnen helfen."
          className={`${inputClass("message")} resize-y`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Ihre Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es später
          erneut oder schreiben Sie uns direkt an{" "}
          <a href="mailto:info@chartertransparenz.de" className="underline">
            info@chartertransparenz.de
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-ocean-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean-dark/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Wird gesendet…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Beratungsanfrage senden
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Unverbindlich und kostenlos. Ihre Daten werden ausschließlich zur Bearbeitung Ihrer
        Anfrage verwendet.
      </p>
    </form>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function CharterAnfrage() {
  return (
    <>
      <Meta
        title="Yachtcharter Beratung – Persönlich, unabhängig, transparent | CharterTransparenz"
        description="Individuelle Yachtcharter-Beratung: Revierwahl, Yachttyp, Kostenübersicht und Törnplanung. Persönlich, unabhängig und kostenlos – auf Basis von über 30 Jahren Erfahrung."
        ogImage={`${BASE_URL}/og/home.jpg`}
        canonical={`${BASE_URL}/charter-anfrage`}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <div className="bg-slate-900 pt-24 pb-14">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide uppercase text-ocean-light mb-3">
                Persönliche Beratung
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Sie planen einen Yachtcharter? Wir finden die passende Yacht für Ihren Törn.
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Kein Angebotswirrwarr, kein stundenlanger Vergleich: Wir hören zu, was Ihre
                Crew möchte – und geben Ihnen eine persönliche, ehrliche Empfehlung zu Revier,
                Yacht und Kosten.
              </p>
              <p className="mt-4 text-base text-slate-400 leading-relaxed">
                Ob{" "}
                <a href="/reviere/mittelmeer/kroatien" className="text-ocean-light underline underline-offset-2 hover:text-white transition">
                  Kroatien
                </a>
                {" "}als Klassiker für Einsteiger, Griechenland für Fortgeschrittene oder ein
                ganz anderes Revier – wir kennen die Unterschiede und sagen Ihnen, was wirklich
                passt. Die Beratung ist kostenlos und unverbindlich.
              </p>
            </div>
          </div>
        </div>

        {/* ── Was wir für Sie tun ────────────────────────────────────── */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Was wir für Sie tun
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ein guter Chartertörn beginnt nicht erst im Hafen. Wir helfen Ihnen, die
                wichtigsten Entscheidungen frühzeitig und realistisch zu treffen – von der{" "}
                <a href="/blog/was-kostet-ein-yachtcharter" className="text-ocean-dark underline underline-offset-2 hover:text-ocean-dark/70 transition">
                  vollständigen Kostenkalkulation
                </a>{" "}
                bis zur Frage{" "}
                <a href="/blog/bareboat-oder-skipper" className="text-ocean-dark underline underline-offset-2 hover:text-ocean-dark/70 transition">
                  Bareboat oder Charter mit Skipper
                </a>
                .
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
              {SERVICES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-ocean-light/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-ocean-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Persönliche Beratung statt anonyme Plattform ───────────── */}
        <div className="bg-ocean-dark py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Persönliche Beratung statt anonyme Plattform
              </h2>
              <p className="text-slate-300 leading-relaxed mb-10">
                Buchungsplattformen zeigen Ihnen hunderte Yachten – aber keine davon kennt
                Ihre Crew, Ihre Erfahrung oder Ihr Budget. Wir schon.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {DIFFERENTIATORS.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-ocean-light" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{title}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Für wen ───────────────────────────────────────────────── */}
        <div className="bg-slate-50 py-16 border-t border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Für wen ist die Beratung sinnvoll?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unsere Beratung richtet sich sowohl an Einsteiger als auch an sehr erfahrene
                Crews, die seit Jahren chartern und ihre Törns effizient und ohne
                unnötigen Aufwand planen möchten.
              </p>
              <ul className="space-y-3">
                {FOR_WHOM.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ocean-dark flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── So funktioniert es ────────────────────────────────────── */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                So funktioniert es
              </h2>
              <ol className="space-y-6">
                {STEPS.map((step, i) => (
                  <li key={i} className="flex gap-5 items-start">
                    <span className="flex-shrink-0 w-9 h-9 rounded-full bg-ocean-dark text-white text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed pt-1.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ── Form ──────────────────────────────────────────────────── */}
        <div id="anfrage" className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Jetzt Beratung anfragen
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Teilen Sie uns kurz mit, was Sie planen – je mehr Details, desto gezielter
                  können wir Ihnen weiterhelfen. Alle Felder außer Name, E-Mail und Nachricht
                  sind optional.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
                <AnfrageForm />
              </div>
            </div>
          </div>
        </div>

        {/* ── Trust ─────────────────────────────────────────────────── */}
        <div className="bg-slate-800 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-start sm:items-center max-w-3xl mx-auto">
              {TRUST.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-ocean-light flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
