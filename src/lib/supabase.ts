import { createClient } from '@supabase/supabase-js';

// These would normally be environment variables, but for Lovable we'll use placeholder values
// In production, these should be set via Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to call Supabase Edge Functions
export async function callEdgeFunction(functionName: string, data: any) {
  try {
    const { data: result, error } = await supabase.functions.invoke(functionName, {
      body: data,
    });

    if (error) {
      throw error;
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error(`Error calling ${functionName}:`, error);
    return { 
      success: false, 
      error: error.message || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
    };
  }
}