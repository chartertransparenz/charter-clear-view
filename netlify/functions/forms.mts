// Netlify Function für die drei Anfrageformulare.
// Ein gemeinsamer Function-Eintrag, damit eine einzige plattformseitige
// Rate-Limit-Regel alle Formular-Endpunkte abdeckt (Free-Plan: max. 2 Regeln).
import { handleCharterAnfrage, handleCharterRequest, handleContactMessage, type FunctionContext } from "../lib/forms";
import { json } from "../lib/shared";

export default async (req: Request, context: FunctionContext): Promise<Response> => {
  const { pathname } = new URL(req.url);
  switch (pathname) {
    case "/api/send-charter-anfrage":
      return handleCharterAnfrage(req);
    case "/api/send-charter-request":
      return handleCharterRequest(req, context);
    case "/api/send-contact-message":
      return handleContactMessage(req);
    default:
      return json({ error: "Not found" }, 404);
  }
};

export const config = {
  path: ["/api/send-charter-anfrage", "/api/send-charter-request", "/api/send-contact-message"],
  method: ["POST"],
  rateLimit: {
    windowLimit: 3,
    windowSize: 180,
    aggregateBy: ["ip", "domain"],
  },
};
