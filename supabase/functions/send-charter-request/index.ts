import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const resend = new Resend(RESEND_API_KEY)

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
    const formData = await req.json()
    console.log('📥 Charter request received:', { email: formData.email, name: formData.firstName })
    
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
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Charter Transparenz <onboarding@resend.dev>',
      to: 'info@chartertransparenz.de',
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
    let userEmailSent = false
    let userEmailId = null
    
    try {
      const { data: userData, error: userError } = await resend.emails.send({
        from: 'Charter Transparenz <onboarding@resend.dev>',
        to: formData.email,
        subject: `Ihre Charter-Anfrage ${referenceId} wurde empfangen`,
        html: userEmailContent,
        reply_to: 'info@chartertransparenz.de',
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
