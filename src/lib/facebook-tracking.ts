/**
 * Generates a unique event ID for Facebook Conversion API deduplication
 * Format: {eventname}_{timestamp}_{random}
 *
 * Die ID wird beim Absenden des Anfrageformulars erzeugt, serverseitig mit dem
 * Conversions-API-Event gesendet (/api/send-charter-request) und auf der
 * Bestätigungsseite für den Browser-Pixel wiederverwendet.
 */
export function generateEventId(eventName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${eventName.toLowerCase()}_${timestamp}_${random}`;
}
