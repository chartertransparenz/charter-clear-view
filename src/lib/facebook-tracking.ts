import { supabase } from "@/integrations/supabase/client";

/**
 * Generates a unique event ID for Facebook Conversion API deduplication
 * Format: {eventname}_{timestamp}_{random}
 */
export function generateEventId(eventName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${eventName.toLowerCase()}_${timestamp}_${random}`;
}

export interface FacebookConversionData {
  eventName: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  value?: number;
  currency?: string;
  contentName?: string;
  contentCategory?: string;
}

export interface FacebookConversionResult {
  success: boolean;
  eventId: string;
  error?: string;
}

/**
 * Tracks a conversion event via Facebook Conversion API (server-side)
 * Returns the event_id for client-side deduplication
 */
export async function trackFacebookConversion(
  eventName: string,
  data: Omit<FacebookConversionData, 'eventName'>
): Promise<FacebookConversionResult> {
  const eventId = generateEventId(eventName);
  
  try {
    const { data: response, error } = await supabase.functions.invoke('facebook-conversion', {
      body: {
        event_name: eventName,
        event_id: eventId,
        user_data: {
          email: data.email,
          phone: data.phone,
          first_name: data.firstName,
          last_name: data.lastName,
          city: data.city,
          country: data.country,
        },
        custom_data: {
          value: data.value,
          currency: data.currency || 'EUR',
          content_name: data.contentName,
          content_category: data.contentCategory,
        },
      },
    });

    if (error) {
      console.error('Facebook Conversion API error:', error);
      return { success: false, eventId, error: error.message };
    }

    console.log('Facebook Conversion tracked:', { eventId, eventName });
    return { success: true, eventId };
  } catch (err) {
    console.error('Facebook Conversion tracking failed:', err);
    return { 
      success: false, 
      eventId, 
      error: err instanceof Error ? err.message : 'Unknown error' 
    };
  }
}
