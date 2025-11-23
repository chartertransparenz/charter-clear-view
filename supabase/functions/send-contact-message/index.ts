import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const resend = new Resend(RESEND_API_KEY)

// In-memory rate limiting (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name erforderlich').max(100, 'Name zu lang'),
  email: z.string().trim().email('Ungültige E-Mail').max(255, 'E-Mail zu lang'),
  phone: z.string().trim().max(50, 'Telefonnummer zu lang').optional(),
  message: z.string().trim().min(1, 'Nachricht erforderlich').max(2000, 'Nachricht zu lang'),
})

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 3600000 // 1 hour
  const maxRequests = 5
  
  const entry = rateLimitMap.get(ip)
  
  if (!entry || entry.resetAt < now) {
    // New window
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  
  if (entry.count >= maxRequests) {
    return false
  }
  
  // Increment counter
  rateLimitMap.set(ip, { count: entry.count + 1, resetAt: entry.resetAt })
  return true
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown'
    
    const isAllowed = checkRateLimit(ip)
    if (!isAllowed) {
      console.log(`⚠️ Rate limit exceeded for IP: ${ip}`)
      return new Response(
        JSON.stringify({ error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Parse and validate input
    const rawData = await req.json()
    const validationResult = contactSchema.safeParse(rawData)
    
    if (!validationResult.success) {
      console.log('❌ Validation failed:', validationResult.error.format())
      return new Response(
        JSON.stringify({ 
          error: 'Ungültige Formulardaten',
          details: validationResult.error.flatten().fieldErrors
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }
    
    const formData = validationResult.data
    
    // Create email content
    const emailContent = `
    <h2>Neue Kontaktnachricht von Charter Transparenz</h2>
    
    <h3>Absender:</h3>
    <ul>
      <li><strong>Name:</strong> ${formData.name}</li>
      <li><strong>E-Mail:</strong> ${formData.email}</li>
      <li><strong>Telefon:</strong> ${formData.phone || 'Nicht angegeben'}</li>
    </ul>
    
    <h3>Nachricht:</h3>
    <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message}</p>
    
    <hr>
    <p><small>Diese Nachricht wurde über das Kontaktformular auf chartertransparenz.de gesendet.</small></p>
    `

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: 'Charter Transparenz <onboarding@resend.dev>',
      to: 'info@chartertransparenz.de',
      subject: `Kontaktanfrage von ${formData.name}`,
      html: emailContent,
      reply_to: formData.email,
    })

    if (error) {
      console.error('Resend error:', error)
      throw new Error(`Failed to send email: ${error.message}`)
    }

    console.log('Email sent successfully:', data)
    return new Response(
      JSON.stringify({ 
        message: 'Email sent successfully',
        id: data?.id
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error('❌ Error in send-contact-message:', error)
    return new Response(
      JSON.stringify({ error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.' }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    )
  }
})