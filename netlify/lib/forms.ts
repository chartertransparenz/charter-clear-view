// Handler für die drei Anfrageformulare. Logik übernommen aus den bisherigen
// Supabase Edge Functions (send-charter-anfrage, send-charter-request,
// send-contact-message), ergänzt um HTML-Escaping und Honeypot.
import { z } from "zod";
import {
  env,
  escapeHtml,
  facebookConfigured,
  isHoneypotFilled,
  json,
  readJson,
  requestsInbox,
  sendCapiEvent,
  sendMail,
} from "./shared";

const MSG_SERVICE_UNAVAILABLE = "E-Mail-Dienst nicht konfiguriert.";
const MSG_INVALID = "Ungültige Formulardaten";

function row(label: string, value: string | undefined): string {
  return value
    ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;color:#374151;white-space:nowrap;">${escapeHtml(label)}:</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`
    : "";
}

function textBlock(value: string | undefined, fallback: string): string {
  return escapeHtml(value || fallback);
}

// ─── /api/send-charter-anfrage ─────────────────────────────────────────────

const charterAnfrageSchema = z.object({
  name: z.string().trim().min(1, "Name erforderlich").max(100, "Name zu lang"),
  email: z.string().trim().email("Ungültige E-Mail").max(255, "E-Mail zu lang"),
  phone: z.string().trim().max(50).optional(),
  travelPeriod: z.string().trim().max(200).optional(),
  destination: z.string().trim().max(200).optional(),
  boatType: z.string().trim().max(100).optional(),
  experienceLevel: z.string().trim().max(100).optional(),
  consultationPreference: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, "Nachricht erforderlich").max(2000, "Nachricht zu lang"),
});

export async function handleCharterAnfrage(req: Request): Promise<Response> {
  if (!env("RESEND_API_KEY")) return json({ error: MSG_SERVICE_UNAVAILABLE }, 503);

  const raw = await readJson(req);
  if (isHoneypotFilled(raw)) {
    console.warn("send-charter-anfrage: honeypot filled, request dropped");
    return json({ success: true });
  }

  const parsed = charterAnfrageSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ error: MSG_INVALID, details: parsed.error.flatten().fieldErrors }, 400);
  }
  const d = parsed.data;

  const html = `
    <h2 style="color:#1e3a5f;">Neue Yachtcharter-Anfrage über chartertransparenz.de</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      ${row("Name", d.name)}
      <tr>
        <td style="padding:6px 12px 6px 0;font-weight:bold;color:#374151;white-space:nowrap;">E-Mail:</td>
        <td style="padding:6px 0;"><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></td>
      </tr>
      ${row("Telefon", d.phone)}
      ${row("Kontaktpräferenz", d.consultationPreference)}
      ${row("Reisezeitraum", d.travelPeriod)}
      ${row("Wunschrevier", d.destination)}
      ${row("Yachttyp", d.boatType)}
      ${row("Charter-Erfahrung", d.experienceLevel)}
    </table>
    <h3 style="color:#1e3a5f;margin-top:24px;">Nachricht:</h3>
    <p style="background:#f3f4f6;padding:16px;border-radius:6px;white-space:pre-wrap;line-height:1.6;">${escapeHtml(d.message)}</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
    <p style="color:#6b7280;font-size:13px;">Quelle: charter-anfrage &nbsp;|&nbsp; chartertransparenz.de</p>
  `;

  try {
    const { id } = await sendMail({
      to: requestsInbox(),
      subject: "Neue Yachtcharter-Anfrage über chartertransparenz.de",
      html,
      replyTo: d.email,
    });
    return json({ success: true, id });
  } catch (err) {
    console.error("send-charter-anfrage failed:", err);
    return json({ error: "Fehler beim Senden der Anfrage." }, 500);
  }
}

// ─── /api/send-charter-request ─────────────────────────────────────────────

const charterRequestSchema = z.object({
  firstName: z.string().trim().min(1, "Vorname ist erforderlich").max(100),
  lastName: z.string().trim().min(1, "Nachname ist erforderlich").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  phone: z.string().trim().max(50).optional(),
  charterType: z.string().trim().max(100).optional(),
  boatType: z.string().trim().max(100).optional(),
  territory: z.string().trim().max(200).optional(),
  startDate: z.string().trim().max(50).optional(),
  endDate: z.string().trim().max(50).optional(),
  boatSize: z.string().trim().max(100).optional(),
  cabins: z.string().trim().max(50).optional(),
  message: z.string().trim().max(2000).optional(),
  // Vom Client erzeugte Event-ID für die Deduplizierung Pixel ↔ Conversions API
  eventId: z.string().trim().max(100).optional(),
});

function generateReferenceId(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, "0");
  return `CT-${y}${m}${day}-${random}`;
}

/** Minimaler Ausschnitt des Netlify-Context (Functions API). */
export interface FunctionContext {
  waitUntil?: (promise: Promise<unknown>) => void;
}

export async function handleCharterRequest(req: Request, context?: FunctionContext): Promise<Response> {
  if (!env("RESEND_API_KEY")) return json({ error: MSG_SERVICE_UNAVAILABLE }, 503);

  const raw = await readJson(req);
  if (isHoneypotFilled(raw)) {
    console.warn("send-charter-request: honeypot filled, request dropped");
    return json({ success: true, referenceId: generateReferenceId() });
  }

  const parsed = charterRequestSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ error: MSG_INVALID, details: parsed.error.flatten().fieldErrors }, 400);
  }
  const d = parsed.data;
  const referenceId = generateReferenceId();
  const na = "Nicht angegeben";

  const adminHtml = `
    <h2>Neue Charter-Anfrage von Charter Transparenz</h2>
    <p><strong>Referenz-ID:</strong> ${referenceId}</p>
    <h3>Persönliche Daten:</h3>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(d.firstName)} ${escapeHtml(d.lastName)}</li>
      <li><strong>E-Mail:</strong> ${escapeHtml(d.email)}</li>
      <li><strong>Telefon:</strong> ${textBlock(d.phone, na)}</li>
    </ul>
    <h3>Charter-Details:</h3>
    <ul>
      <li><strong>Chartertyp:</strong> ${textBlock(d.charterType, na)}</li>
      <li><strong>Bootstyp:</strong> ${textBlock(d.boatType, na)}</li>
      <li><strong>Revier:</strong> ${textBlock(d.territory, na)}</li>
      <li><strong>Zeitraum von:</strong> ${textBlock(d.startDate, na)}</li>
      <li><strong>Zeitraum bis:</strong> ${textBlock(d.endDate, na)}</li>
      <li><strong>Bootsgröße:</strong> ${textBlock(d.boatSize, na)}</li>
      <li><strong>Anzahl Kabinen:</strong> ${textBlock(d.cabins, na)}</li>
    </ul>
    <h3>Nachricht:</h3>
    <p style="white-space:pre-wrap;">${textBlock(d.message, "Keine zusätzliche Nachricht")}</p>
    <hr>
    <p><small>Diese Anfrage wurde über das Kontaktformular auf chartertransparenz.de gesendet.</small></p>
  `;

  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Vielen Dank für Ihre Charter-Anfrage!</h2>
      <p>Hallo ${escapeHtml(d.firstName)},</p>
      <p>wir haben Ihre Charter-Anfrage erfolgreich erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
      <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 24px 0;">
        <p style="margin: 0;"><strong>Ihre Referenz-ID:</strong></p>
        <p style="font-family: 'Courier New', monospace; font-size: 18px; font-weight: bold; color: #1e40af; margin: 8px 0 0 0;">${referenceId}</p>
      </div>
      <h3 style="color: #1e40af;">Zusammenfassung Ihrer Anfrage:</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Revier:</strong> ${textBlock(d.territory, na)}</li>
        <li><strong>Zeitraum:</strong> ${textBlock(d.startDate, "—")} bis ${textBlock(d.endDate, "—")}</li>
        <li><strong>Bootstyp:</strong> ${textBlock(d.boatType, na)}</li>
        <li><strong>Chartertyp:</strong> ${textBlock(d.charterType, na)}</li>
      </ul>
      <p>Wir werden Ihre Anfrage prüfen und Ihnen innerhalb von 24 Stunden ein unverbindliches Angebot zusenden.</p>
      <p>Bei Rückfragen verwenden Sie bitte die Referenz-ID <strong>${referenceId}</strong>.</p>
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">
      <p style="color: #6b7280; font-size: 14px;">
        Mit besten Grüßen<br>
        Ihr Team von Charter Transparenz<br>
        <a href="https://chartertransparenz.de" style="color: #1e40af;">chartertransparenz.de</a>
      </p>
    </div>
  `;

  let adminEmailId: string | undefined;
  try {
    adminEmailId = (
      await sendMail({
        to: requestsInbox(),
        subject: `Neue Charter-Anfrage ${referenceId} von ${d.firstName} ${d.lastName}`,
        html: adminHtml,
        replyTo: d.email,
      })
    ).id;
  } catch (err) {
    console.error("send-charter-request: admin email failed:", err);
    return json({ error: "Fehler beim Senden der Anfrage." }, 500);
  }

  // Bestätigung an den Kunden – Fehler hier sind nicht fatal
  let userEmailId: string | undefined;
  try {
    userEmailId = (
      await sendMail({
        to: d.email,
        subject: `Ihre Charter-Anfrage ${referenceId} wurde empfangen`,
        html: userHtml,
        replyTo: requestsInbox(),
      })
    ).id;
  } catch (err) {
    console.error("send-charter-request: user confirmation failed (non-fatal):", err);
  }

  // Conversions API ist optionales Tracking: Sie läuft erst nach dem
  // erfolgreichen Mailversand und blockiert die Antwort an den Kunden nicht.
  // context.waitUntil() hält die Function bis zum Abschluss am Leben;
  // Fehler werden nur protokolliert.
  if (facebookConfigured()) {
    const capi = sendCapiEvent(req, {
      eventName: "Lead",
      eventId: d.eventId,
      user: { email: d.email, phone: d.phone, firstName: d.firstName, lastName: d.lastName },
      customData: {
        territory: d.territory || "",
        boat_size: d.boatSize || "",
        cabins: d.cabins || "",
        start_date: d.startDate || "",
        end_date: d.endDate || "",
        charter_type: d.charterType || "",
        boat_type: d.boatType || "",
        value: 1.0,
        currency: "EUR",
      },
    }).catch((err) => {
      console.error("send-charter-request: Facebook CAPI failed (non-fatal):", err);
    });
    if (context?.waitUntil) context.waitUntil(capi);
  }

  return json({
    success: true,
    referenceId,
    adminEmailId,
    userEmailId,
    userEmailSent: Boolean(userEmailId),
  });
}

// ─── /api/send-contact-message ─────────────────────────────────────────────

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name erforderlich").max(100, "Name zu lang"),
  email: z.string().trim().email("Ungültige E-Mail").max(255, "E-Mail zu lang"),
  phone: z.string().trim().max(50, "Telefonnummer zu lang").optional(),
  message: z.string().trim().min(1, "Nachricht erforderlich").max(2000, "Nachricht zu lang"),
});

export async function handleContactMessage(req: Request): Promise<Response> {
  if (!env("RESEND_API_KEY")) return json({ error: MSG_SERVICE_UNAVAILABLE }, 503);

  const raw = await readJson(req);
  if (isHoneypotFilled(raw)) {
    console.warn("send-contact-message: honeypot filled, request dropped");
    return json({ success: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return json({ error: MSG_INVALID, details: parsed.error.flatten().fieldErrors }, 400);
  }
  const d = parsed.data;

  const html = `
    <h2>Neue Kontaktnachricht von Charter Transparenz</h2>
    <h3>Absender:</h3>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(d.name)}</li>
      <li><strong>E-Mail:</strong> ${escapeHtml(d.email)}</li>
      <li><strong>Telefon:</strong> ${textBlock(d.phone, "Nicht angegeben")}</li>
    </ul>
    <h3>Nachricht:</h3>
    <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(d.message)}</p>
    <hr>
    <p><small>Diese Nachricht wurde über das Kontaktformular auf chartertransparenz.de gesendet.</small></p>
  `;

  try {
    const { id } = await sendMail({
      to: requestsInbox(),
      subject: `Kontaktanfrage von ${d.name}`,
      html,
      replyTo: d.email,
    });
    return json({ success: true, message: "Email sent successfully", id });
  } catch (err) {
    console.error("send-contact-message failed:", err);
    return json({ error: "Fehler beim Senden der Nachricht." }, 500);
  }
}
