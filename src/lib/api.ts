// Same-Origin-Aufrufe der Netlify Functions unter /api/*.

export interface ApiResult<T = unknown> {
  success: boolean;
  status: number;
  data?: T;
  error?: string;
}

export async function postApi<T = unknown>(path: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json().catch(() => ({}))) as T & { error?: string };
    if (!res.ok) {
      console.error(`[api] ${path} returned ${res.status}:`, data);
      return { success: false, status: res.status, error: data?.error || `HTTP ${res.status}` };
    }
    return { success: true, status: res.status, data };
  } catch (err) {
    console.error(`[api] ${path} request failed:`, err);
    return { success: false, status: 0, error: err instanceof Error ? err.message : "Network error" };
  }
}

/** Einheitlicher, kundenfreundlicher Fehlertext für alle Formulare. */
export const FORM_ERROR_MESSAGE =
  "Ihre Anfrage konnte gerade nicht automatisch gesendet werden. Ihre Eingaben bleiben erhalten. " +
  "Bitte versuchen Sie es noch einmal oder kontaktieren Sie uns direkt per E-Mail an " +
  "info@chartertransparenz.de oder telefonisch unter +49 7543 499 080.";

export const FORM_RATE_LIMIT_MESSAGE =
  "Sie haben gerade mehrere Anfragen kurz hintereinander gesendet. Bitte warten Sie einige Minuten " +
  "oder kontaktieren Sie uns direkt per E-Mail an info@chartertransparenz.de oder telefonisch unter " +
  "+49 7543 499 080.";

export function formErrorMessage(status: number): string {
  return status === 429 ? FORM_RATE_LIMIT_MESSAGE : FORM_ERROR_MESSAGE;
}
