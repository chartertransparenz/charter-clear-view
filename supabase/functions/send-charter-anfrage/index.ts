import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const RESEND_FROM = Deno.env.get('RESEND_FROM') || 'Charter Transparenz <noreply@chartertransparenz.de>'
const REQUESTS_INBOX = Deno.env.get('REQUESTS_INBOX') || 'info@chartertransparenz.de'

// Startup diagnostics (logged once when the isolate boots)
console.log('send-charter-anfrage: function loaded')
console.log('  RESEND_API_KEY present:', !!RESEND_API_KEY)
console.log('  RESEND_FROM:', RESEND_FROM)
console.log('  REQUESTS_INBOX:', REQUESTS_INBOX)

if (!RESEND_API_KEY) {
  console.error('FATAL: RESEND_API_KEY is not set. Emails cannot be sent.')
}

const resend = new Resend(RESEND_API_KEY)

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 3600000 // 1 hour
  const maxRequests = 5
  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (entry.count >= maxRequests) return false
  rateLimitMap.set(ip, { count: entry.count + 1, resetAt: entry.resetAt })
  return true
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const charterAnfrageSchema = z.object({
  name: z.string().trim().min(1, 'Name erforderlich').max(100, 'Name zu lang'),
  email: z.string().trim().email('Ungültige E-Mail').max(255, 'E-Mail zu lang'),
  phone: z.string().trim().max(50).optional(),
  travelPeriod: z.string().trim().max(200).optional(),
  destination: z.string().trim().max(200).optional(),
  boatType: z.string().trim().max(100).optional(),
  experienceLevel: z.string().trim().max(100).optional(),
  consultationPreference: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1, 'Nachricht erforderlich').max(2000, 'Nachricht zu lang'),
})

serve(async (req) => {
  console.log('Request:', req.method, req.url)

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Guard: fail fast if API key is missing
  if (!RESEND_API_KEY) {
    console.error('Aborting: RESEND_API_KEY not configured')
    return new Response(
      JSON.stringify({ error: 'E-Mail-Dienst nicht konfiguriert. Bitte administrator kontaktieren.' }),
      { status: 503, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ||
               req.headers.get('x-real-ip') ||
               'unknown'

    if (!checkRateLimit(ip)) {
      console.log('Rate limit exceeded for IP:', ip)
      return new Response(
        JSON.stringify({ error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const rawData = await req.json()
    console.log('Received payload keys:', Object.keys(rawData))
    const result = charterAnfrageSchema.safeParse(rawData)

    if (!result.success) {
      console.error('Validation failed:', result.error.flatten().fieldErrors)
      return new Response(
        JSON.stringify({ error: 'Ungültige Formulardaten', details: result.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, phone, travelPeriod, destination, boatType, experienceLevel, consultationPreference, message } = result.data
    console.log('Sending email to:', REQUESTS_INBOX, '| from:', RESEND_FROM)

    const row = (label: string, value: string | undefined) =>
      value
        ? `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;color:#374151;white-space:nowrap;">${label}:</td><td style="padding:6px 0;">${value}</td></tr>`
        : ''

    const emailHtml = `
      <h2 style="color:#1e3a5f;">Neue Yachtcharter-Anfrage über chartertransparenz.de</h2>

      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        ${row('Name', name)}
        <tr>
          <td style="padding:6px 12px 6px 0;font-weight:bold;color:#374151;white-space:nowrap;">E-Mail:</td>
          <td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        ${row('Telefon', phone)}
        ${row('Kontaktpräferenz', consultationPreference)}
        ${row('Reisezeitraum', travelPeriod)}
        ${row('Wunschrevier', destination)}
        ${row('Yachttyp', boatType)}
        ${row('Charter-Erfahrung', experienceLevel)}
      </table>

      <h3 style="color:#1e3a5f;margin-top:24px;">Nachricht:</h3>
      <p style="background:#f3f4f6;padding:16px;border-radius:6px;white-space:pre-wrap;line-height:1.6;">${message}</p>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
      <p style="color:#6b7280;font-size:13px;">Quelle: charter-anfrage &nbsp;|&nbsp; chartertransparenz.de</p>
    `

    const { data, error } = await resend.emails.send({
      from: RESEND_FROM,
      to: REQUESTS_INBOX,
      subject: `Neue Yachtcharter-Anfrage über chartertransparenz.de`,
      html: emailHtml,
      reply_to: email,
    })

    if (error) {
      console.error('Resend API error:', JSON.stringify(error))
      throw new Error(`Resend rejected the request: ${error.message}`)
    }

    console.log('Email sent successfully, id:', data?.id)
    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in send-charter-anfrage:', error)
    return new Response(
      JSON.stringify({ error: 'Fehler beim Senden der Anfrage. Bitte versuchen Sie es erneut.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
