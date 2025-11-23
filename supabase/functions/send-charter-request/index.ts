import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const RESEND_FROM = Deno.env.get('RESEND_FROM') || 'Charter Transparenz <noreply@chartertransparenz.de>'
const REQUESTS_INBOX = Deno.env.get('REQUESTS_INBOX') || 'info@chartertransparenz.de'

const resend = new Resend(RESEND_API_KEY)

// Input validation schema
const charterRequestSchema = z.object({
  firstName: z.string().trim().min(1, 'Vorname ist erforderlich').max(100),
  lastName: z.string().trim().min(1, 'Nachname ist erforderlich').max(100),
  email: z.string().trim().email('Ungültige E-Mail-Adresse').max(255),
  phone: z.string().trim().max(50).optional(),
  charterType: z.string().trim().max(100).optional(),
  boatType: z.string().trim().max(100).optional(),
  territory: z.string().trim().max(200).optional(),
  startDate: z.string().trim().max(50).optional(),
  endDate: z.string().trim().max(50).optional(),
  boatSize: z.string().trim().max(100).optional(),
  cabins: z.string().trim().max(50).optional(),
  message: z.string().trim().max(2000).optional(),
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Generate reference ID in format: CT-YYYYMMDD-XXXX
function generateReferenceId(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const random = String(Math.floor(Math.random() * 10000)).padStart(4, '0')
  return `CT-${year}${month}${day}-${random}`
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const rawData = await req.json()
    console.log('📥 Charter request received:', { email: rawData.email, name: rawData.firstName })
    
    // Validate input data
    const validationResult = charterRequestSchema.safeParse(rawData)
    if (!validationResult.success) {
      console.error('❌ Validation failed:', validationResult.error.format())
      return new Response(
        JSON.stringify({ 
          error: 'Ungültige Formulardaten',
          details: validationResult.error.format()
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      )
    }
    
    const formData = validationResult.data
    console.log('✅ Validation passed')
    
    // Generate reference ID
    const referenceId = generateReferenceId()
    console.log('🔖 Generated reference ID:', referenceId)
    
    // Email to admin (info@chartertransparenz.de)
    const adminEmailContent = `
    <h2>Neue Charter-Anfrage von Charter Transparenz</h2>
    <p><strong>Referenz-ID:</strong> ${referenceId}</p>
    
    <h3>Persönliche Daten:</h3>
    <ul>
      <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
      <li><strong>E-Mail:</strong> ${formData.email}</li>
      <li><strong>Telefon:</strong> ${formData.phone || 'Nicht angegeben'}</li>
    </ul>
    
    <h3>Charter-Details:</h3>
    <ul>
      <li><strong>Chartertyp:</strong> ${formData.charterType || 'Nicht angegeben'}</li>
      <li><strong>Bootstyp:</strong> ${formData.boatType || 'Nicht angegeben'}</li>
      <li><strong>Revier:</strong> ${formData.territory || 'Nicht angegeben'}</li>
      <li><strong>Zeitraum von:</strong> ${formData.startDate || 'Nicht angegeben'}</li>
      <li><strong>Zeitraum bis:</strong> ${formData.endDate || 'Nicht angegeben'}</li>
      <li><strong>Bootsgröße:</strong> ${formData.boatSize || 'Nicht angegeben'}</li>
      <li><strong>Anzahl Kabinen:</strong> ${formData.cabins || 'Nicht angegeben'}</li>
    </ul>
    
    <h3>Nachricht:</h3>
    <p>${formData.message || 'Keine zusätzliche Nachricht'}</p>
    
    <hr>
    <p><small>Diese Anfrage wurde über das Kontaktformular auf chartertransparenz.de gesendet.</small></p>
    `

    // Email to user (confirmation)
    const userEmailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e40af;">Vielen Dank für Ihre Charter-Anfrage!</h2>
      
      <p>Hallo ${formData.firstName},</p>
      
      <p>wir haben Ihre Charter-Anfrage erfolgreich erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
      
      <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 24px 0;">
        <p style="margin: 0;"><strong>Ihre Referenz-ID:</strong></p>
        <p style="font-family: 'Courier New', monospace; font-size: 18px; font-weight: bold; color: #1e40af; margin: 8px 0 0 0;">${referenceId}</p>
      </div>
      
      <h3 style="color: #1e40af;">Zusammenfassung Ihrer Anfrage:</h3>
      <ul style="line-height: 1.8;">
        <li><strong>Revier:</strong> ${formData.territory || 'Nicht angegeben'}</li>
        <li><strong>Zeitraum:</strong> ${formData.startDate || '—'} bis ${formData.endDate || '—'}</li>
        <li><strong>Bootstyp:</strong> ${formData.boatType || 'Nicht angegeben'}</li>
        <li><strong>Chartertyp:</strong> ${formData.charterType || 'Nicht angegeben'}</li>
      </ul>
      
      <p>Wir werden Ihre Anfrage prüfen und Ihnen innerhalb von 24 Stunden ein unverbindliches Angebot zusenden.</p>
      
      <p>Bei Rückfragen verwenden Sie bitte die Referenz-ID <strong>${referenceId}</strong>.</p>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;">
      
      <p style="color: #6b7280; font-size: 14px;">
        Mit besten Grüßen<br>
        Ihr Team von Charter Transparenz<br>
        <a href="https://chartertransparenz.de" style="color: #1e40af;">chartertransparenz.de</a>
      </p>
    </div>
    `

    // Send admin email
    console.log('📧 Sending admin email...')
    console.log('   From:', RESEND_FROM)
    console.log('   To:', REQUESTS_INBOX)
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: RESEND_FROM,
      to: REQUESTS_INBOX,
      subject: `Neue Charter-Anfrage ${referenceId} von ${formData.firstName} ${formData.lastName}`,
      html: adminEmailContent,
      reply_to: formData.email,
    })

    if (adminError) {
      console.error('❌ Admin email error:', adminError)
      throw new Error(`Admin email failed: ${adminError.message}`)
    }
    console.log('✅ Admin email sent:', adminData?.id)

    // Send user confirmation email (with error tolerance)
    console.log('📧 Sending user confirmation email...')
    console.log('   To:', formData.email)
    let userEmailSent = false
    let userEmailId = null
    
    try {
      const { data: userData, error: userError } = await resend.emails.send({
        from: RESEND_FROM,
        to: formData.email,
        subject: `Ihre Charter-Anfrage ${referenceId} wurde empfangen`,
        html: userEmailContent,
        reply_to: REQUESTS_INBOX,
      })

      if (userError) {
        console.error('❌ User email error (non-fatal):', userError)
        console.log('ℹ️ Admin email was successful, continuing despite user email failure')
      } else {
        console.log('✅ User confirmation email sent:', userData?.id)
        userEmailSent = true
        userEmailId = userData?.id
      }
    } catch (userEmailError: any) {
      console.error('❌ User email exception (non-fatal):', userEmailError)
      console.log('ℹ️ Admin email was successful, continuing despite user email exception')
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        referenceId,
        adminEmailId: adminData?.id,
        userEmailId,
        userEmailSent,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  } catch (error) {
    console.error('❌ Error in send-charter-request:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    )
  }
})
