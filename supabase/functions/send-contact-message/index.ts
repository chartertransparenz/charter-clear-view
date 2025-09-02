import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

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

    // Send email using Resend
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Charter Transparenz <noreply@chartertransparenz.de>',
        to: ['info@chartertransparenz.de'],
        subject: `Kontaktanfrage von ${formData.name}`,
        html: emailContent,
        reply_to: formData.email,
      }),
    })

    if (res.ok) {
      return new Response(
        JSON.stringify({ message: 'Email sent successfully' }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
    } else {
      throw new Error('Failed to send email')
    }
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