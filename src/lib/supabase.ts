import { createClient } from '@supabase/supabase-js';

// Get Supabase configuration from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if Supabase is configured
const isSupabaseConfigured = supabaseUrl && supabaseAnonKey && 
  supabaseUrl !== 'your-supabase-url-here' && 
  supabaseAnonKey !== 'your-supabase-anon-key-here';

// Only create Supabase client if properly configured
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to call Supabase Edge Functions
export async function callEdgeFunction(functionName: string, data: any) {
  // Check if Supabase is configured
  if (!supabase) {
    console.error('Supabase not configured. Please connect your project to Supabase.');
    return { 
      success: false, 
      error: 'Bitte verbinden Sie Ihr Projekt mit Supabase, um E-Mails zu versenden. Verwenden Sie alternativ unsere Telefonnummer oder E-Mail-Adresse für direkten Kontakt.' 
    };
  }

  try {
    const { data: result, error } = await supabase.functions.invoke(functionName, {
      body: data,
    });

    if (error) {
      console.error(`Supabase Edge Function error:`, error);
      throw error;
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error(`Error calling ${functionName}:`, error);
    return { 
      success: false, 
      error: error.message || 'Ein Fehler ist aufgetreten. Bitte nutzen Sie alternativ unsere Telefonnummer oder E-Mail-Adresse für direkten Kontakt.' 
    };
  }
}