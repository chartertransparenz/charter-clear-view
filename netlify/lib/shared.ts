// Gemeinsame Helfer für die Netlify Functions (Formulare, Facebook CAPI, Health).
// Secrets kommen ausschließlich aus den Netlify Environment Variables (Scope: Functions).

export const RESEND_FROM_DEFAULT = "Charter Transparenz <noreply@chartertransparenz.de>";
export const REQUESTS_INBOX_DEFAULT = "info@chartertransparenz.de";

export function env(name: string): string | undefined {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/** Escaped Nutzereingaben für HTML-E-Mails. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Liest den JSON-Body; liefert {} bei leerem oder ungültigem Body. */
export async function readJson(req: Request): Promise<Record<string, unknown>> {
  try {
    const data = await req.json();
    return data && typeof data === "object" && !Array.isArray(data)
      ? (data as Record<string, unknown>)
      : {};
  } catch {
    return {};
  }
}

/** Unsichtbares Honeypot-Feld: echte Nutzer lassen es leer. */
export function isHoneypotFilled(data: Record<string, unknown>): boolean {
  const value = data.website;
  return typeof value === "string" && value.trim().length > 0;
}

export function clientIp(req: Request): string {
  return (
    req.headers.get("x-nf-client-connection-ip") ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    ""
  );
}

// ─── Resend (REST API, ohne SDK) ───────────────────────────────────────────

export interface MailInput {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendMail(input: MailInput): Promise<{ id?: string }> {
  const apiKey = env("RESEND_API_KEY");
  if (!apiKey) throw new Error("RESEND_API_KEY missing");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env("RESEND_FROM") || RESEND_FROM_DEFAULT,
      to: [input.to],
      subject: input.subject,
      html: input.html,
      ...(input.replyTo ? { reply_to: input.replyTo } : {}),
    }),
  });

  const result = (await res.json().catch(() => ({}))) as { id?: string; message?: string };
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${result.message ?? "unknown error"}`);
  }
  return { id: result.id };
}

export function requestsInbox(): string {
  return env("REQUESTS_INBOX") || REQUESTS_INBOX_DEFAULT;
}

// ─── Facebook / Meta Conversions API ───────────────────────────────────────

// Aktuelle Graph-API-Version laut Meta-Changelog (v26.0, veröffentlicht 29.07.2026).
export const GRAPH_API_VERSION = "v26.0";

export async function sha256(value: string): Promise<string> {
  const data = new TextEncoder().encode(value.toLowerCase().trim());
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export interface CapiUser {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
}

export async function hashUserData(user: CapiUser): Promise<Record<string, string[]>> {
  const out: Record<string, string[]> = {};
  if (user.email) out.em = [await sha256(user.email)];
  if (user.phone) {
    const digits = user.phone.replace(/\D/g, "").replace(/^00/, "");
    if (digits) out.ph = [await sha256(digits)];
  }
  if (user.firstName) out.fn = [await sha256(user.firstName)];
  if (user.lastName) out.ln = [await sha256(user.lastName)];
  if (user.city) out.ct = [await sha256(user.city)];
  if (user.country) out.country = [await sha256(user.country)];
  return out;
}

export function facebookConfigured(): boolean {
  return Boolean(env("FACEBOOK_PIXEL_ID") && env("FACEBOOK_ACCESS_TOKEN"));
}

export interface CapiEvent {
  eventName: string;
  eventId?: string;
  user: CapiUser;
  customData?: Record<string, unknown>;
  sourceUrl?: string;
}

/** Sendet ein Event an die Conversions API. Wirft bei HTTP-Fehlern. */
export async function sendCapiEvent(req: Request, event: CapiEvent): Promise<unknown> {
  const pixelId = env("FACEBOOK_PIXEL_ID");
  const accessToken = env("FACEBOOK_ACCESS_TOKEN");
  if (!pixelId || !accessToken) throw new Error("Facebook CAPI not configured");

  const payload = {
    data: [
      {
        event_name: event.eventName,
        ...(event.eventId ? { event_id: event.eventId } : {}),
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: event.sourceUrl || req.headers.get("referer") || "https://chartertransparenz.de",
        user_data: {
          ...(await hashUserData(event.user)),
          client_ip_address: clientIp(req),
          client_user_agent: req.headers.get("user-agent") || "",
        },
        ...(event.customData ? { custom_data: event.customData } : {}),
      },
    ],
  };

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_API_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Obergrenze für die Hintergrundarbeit (läuft nach der Antwort via waitUntil)
      signal: AbortSignal.timeout(8000),
    }
  );
  const result = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Facebook CAPI ${res.status}: ${JSON.stringify(result)}`);
  return result;
}
