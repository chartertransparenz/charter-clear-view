import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const resend = new Resend(RESEND_API_KEY)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const formData = await req.json()
    
    // Create email content
    const emailContent = `
    <h2>Neue Charter-Anfrage von Charter Transparenz</h2>
    
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

    // Send email using Resend SDK
    const { data, error } = await resend.emails.send({
      from: 'Charter Transparenz <onboarding@resend.dev>',
      to: 'info@chartertransparenz.de',
      subject: `Neue Charter-Anfrage von ${formData.firstName} ${formData.lastName}`,
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
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
  }
})