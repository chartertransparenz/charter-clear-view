// Health-Check für die Formular-Infrastruktur. Versendet keine E-Mail und
// gibt keine Secret-Werte aus. Für externes Uptime-Monitoring gedacht.
import { env, facebookConfigured, json } from "../lib/shared";

export default async (): Promise<Response> => {
  const resend = Boolean(env("RESEND_API_KEY"));
  const facebook = facebookConfigured();
  // Facebook ist optional: Die Formulare funktionieren auch ohne CAPI.
  return json({ ok: resend, services: { resend, facebook } }, resend ? 200 : 503);
};

export const config = {
  path: "/api/form-health",
  method: ["GET"],
};
