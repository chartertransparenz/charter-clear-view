import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Meta } from "@/seo/Meta";
import { supabase } from "@/integrations/supabase/client";
import { MapPin, Sailboat, DollarSign, Route, CheckCircle, Send, Loader2, Shield, Award, Eye } from "lucide-react";

const BASE_URL = "https://chartertransparenz.de";

// ─── Edge Function helper ──────────────────────────────────────────────────
async function callEdgeFunction(functionName: string, data: unknown) {
  try {
    const { data: result, error } = await supabase.functions.invoke(functionName, { body: data });
    if (error) throw error;
    return { success: true, data: result };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unbekannter Fehler";
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
  "Erster Yachtcharter",
  "Konkreter Törnplan steht – passendes Angebot gesucht",
  "Neues Revier oder alternative Route",
  "Detailfragen zu Yacht, Ausstattung oder Basis",
  "Effiziente Planung ohne Zeitverlust",
];

const STEPS = [
  "Sie beschreiben kurz Ihre Wünsche und Vorstellungen.",
  "Wir melden uns persönlich bei Ihnen.",
  "Gemeinsam finden wir die passende Lösung für Ihren Törn.",
];

const TRUST = [
  { icon: Award, label: "Über 30 Jahre Erfahrung im Yachtcharter" },
  { icon: Eye,   label: "Unabhängige Einschätzung" },
  { icon: Shield, label: "Transparente Kostenplanung" },
];

// ─── Form ──────────────────────────────────────────────────────────────────
interface FormValues {
  name: string;
  email: string;
  travelPeriod: string;
  destination: string;
  message: string;
}

const EMPTY: FormValues = { name: "", email: "", travelPeriod: "", destination: "", message: "" };

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
      travelPeriod: values.travelPeriod.trim() || undefined,
      destination: values.destination.trim() || undefined,
      message: values.message.trim(),
    });
    setStatus(result.success ? "success" : "error");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center">
        <CheckCircle className="w-12 h-12 text-emerald-600" />
        <p className="text-lg font-medium text-gray-900">
          Vielen Dank für Ihre Anfrage.
        </p>
        <p className="text-gray-600 max-w-md">
          Wir melden uns zeitnah persönlich bei Ihnen.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormValues) =>
    `w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-dark/30 transition ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
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

      {/* Email */}
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

      {/* Reisezeitraum + Wunschrevier side by side on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="travelPeriod" className="block text-sm font-medium text-gray-700 mb-1">
            Reisezeitraum
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
            Wunschrevier
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
          placeholder="Beschreiben Sie kurz Ihre Wünsche und Vorstellungen…"
          className={`${inputClass("message")} resize-y`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      {/* Error banner */}
      {status === "error" && (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Ihre Anfrage konnte leider nicht gesendet werden. Bitte versuchen Sie es später
          erneut oder kontaktieren Sie uns direkt unter{" "}
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
            Anfrage senden
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
        title="Yachtcharter Beratung | Revier, Kosten & Törnplanung"
        description="Individuelle Yachtcharter-Beratung: Revierwahl, Kostenübersicht und Törnplanung. Persönlich, transparent und unabhängig."
        ogImage={`${BASE_URL}/og/home.jpg`}
        canonical={`${BASE_URL}/charter-anfrage`}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* ── Hero / Header ──────────────────────────────────────────── */}
        <div className="bg-slate-900 pt-24 pb-14">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wide uppercase text-ocean-light mb-3">
                Persönliche Beratung
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Yachtcharter-Beratung: Ihren Törn entspannt planen
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Sie planen einen Yachtcharter, sind sich aber noch unsicher bei Revier,
                Kosten oder Törnplanung?
              </p>
              <p className="mt-3 text-lg text-slate-300 leading-relaxed">
                Viele unserer Kunden chartern seit Jahren und kommen bereits mit einer
                klaren Vorstellung. Andere stehen noch am Anfang.
              </p>
              <p className="mt-3 text-lg text-slate-300 leading-relaxed">
                Genau dabei unterstützen wir Sie – unabhängig, transparent und auf Basis
                von über 30 Jahren Erfahrung.
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
                wichtigsten Entscheidungen frühzeitig und realistisch zu treffen.
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

        {/* ── Für wen ───────────────────────────────────────────────── */}
        <div className="bg-slate-50 py-16 border-t border-b border-slate-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Für wen ist die Beratung sinnvoll?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unsere Beratung richtet sich sowohl an Einsteiger als auch an sehr erfahrene
                Crews, die seit Jahren chartern und ihre Törns effizient, fundiert und ohne
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
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Beschreiben Sie kurz Ihre Wünsche
                </h2>
                <p className="text-gray-600">
                  Wir melden uns persönlich bei Ihnen.
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
