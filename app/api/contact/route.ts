import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, message, phone } = body

    // Validate required fields
    if (!email || !name) {
      return NextResponse.json({ error: 'Nombre y email son obligatorios' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email no válido' }, { status: 400 })
    }

    // Here you would connect to your email provider (Resend, SendGrid, etc.)
    // For now we log and simulate a successful response
    console.log('📬 Nueva solicitud de contacto:', {
      name,
      email,
      company: company || '—',
      phone: phone || '—',
      message: message || '—',
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual email sending, e.g.:
    // await resend.emails.send({
    //   from: 'MKGENIA <noreply@mkgenia.es>',
    //   to: ['hola@mkgenia.es'],
    //   subject: `Nueva consulta de ${name} — ${company}`,
    //   html: `<p>Email: ${email}</p><p>Teléfono: ${phone}</p><p>Mensaje: ${message}</p>`,
    // })

    return NextResponse.json({ success: true, message: 'Solicitud recibida' })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
