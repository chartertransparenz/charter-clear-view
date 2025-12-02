import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createHash } from "https://deno.land/std@0.190.0/crypto/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface UserData {
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  city?: string;
  country?: string;
}

interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
}

interface ConversionRequest {
  event_name: string;
  event_id: string;
  user_data?: UserData;
  custom_data?: CustomData;
}

/**
 * Hashes a value using SHA256 for Facebook's data requirements
 */
async function hashValue(value: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(value.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Prepares user data with SHA256 hashing as required by Facebook
 */
async function prepareUserData(userData: UserData | undefined): Promise<Record<string, string>> {
  if (!userData) return {};
  
  const prepared: Record<string, string> = {};
  
  if (userData.email) {
    prepared.em = await hashValue(userData.email);
  }
  if (userData.phone) {
    // Remove non-numeric characters and hash
    const cleanPhone = userData.phone.replace(/\D/g, "");
    prepared.ph = await hashValue(cleanPhone);
  }
  if (userData.first_name) {
    prepared.fn = await hashValue(userData.first_name);
  }
  if (userData.last_name) {
    prepared.ln = await hashValue(userData.last_name);
  }
  if (userData.city) {
    prepared.ct = await hashValue(userData.city);
  }
  if (userData.country) {
    prepared.country = await hashValue(userData.country);
  }
  
  return prepared;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const pixelId = Deno.env.get("FACEBOOK_PIXEL_ID");
    const accessToken = Deno.env.get("FACEBOOK_ACCESS_TOKEN");

    if (!pixelId || !accessToken) {
      console.error("❌ Missing Facebook credentials - PIXEL_ID or ACCESS_TOKEN not configured");
      return new Response(
        JSON.stringify({ error: "Facebook credentials not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: ConversionRequest = await req.json();
    const { event_name, event_id, user_data, custom_data } = body;

    if (!event_name || !event_id) {
      console.error("❌ Missing required fields: event_name or event_id");
      return new Response(
        JSON.stringify({ error: "event_name and event_id are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`📊 Processing Facebook Conversion: ${event_name}`);
    console.log(`🔑 Event ID: ${event_id}`);

    // Prepare hashed user data
    const hashedUserData = await prepareUserData(user_data);
    
    // Build the event payload
    const eventTime = Math.floor(Date.now() / 1000);
    const eventData: Record<string, any> = {
      event_name,
      event_id,
      event_time: eventTime,
      action_source: "website",
      user_data: {
        ...hashedUserData,
        client_ip_address: req.headers.get("x-forwarded-for") || req.headers.get("cf-connecting-ip") || "",
        client_user_agent: req.headers.get("user-agent") || "",
      },
    };

    // Add custom data if provided
    if (custom_data) {
      eventData.custom_data = {};
      if (custom_data.value !== undefined) {
        eventData.custom_data.value = custom_data.value;
      }
      if (custom_data.currency) {
        eventData.custom_data.currency = custom_data.currency;
      }
      if (custom_data.content_name) {
        eventData.custom_data.content_name = custom_data.content_name;
      }
      if (custom_data.content_category) {
        eventData.custom_data.content_category = custom_data.content_category;
      }
    }

    const payload = {
      data: [eventData],
    };

    console.log("📤 Sending to Facebook Graph API:", JSON.stringify(payload, null, 2));

    // Send to Facebook Conversion API
    const fbResponse = await fetch(
      `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const fbResult = await fbResponse.json();

    if (!fbResponse.ok) {
      console.error("❌ Facebook API error:", fbResult);
      return new Response(
        JSON.stringify({ error: "Facebook API error", details: fbResult }),
        { status: fbResponse.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`✅ Facebook Conversion sent successfully: ${event_name} (${event_id})`);
    console.log("📥 Facebook response:", JSON.stringify(fbResult));

    return new Response(
      JSON.stringify({ 
        success: true, 
        event_id,
        facebook_response: fbResult 
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("❌ Error in facebook-conversion function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
