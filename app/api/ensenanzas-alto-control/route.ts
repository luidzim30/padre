import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim() : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Correo electrónico no válido.' }, { status: 400 })
  }

  return NextResponse.json(
    { error: 'El envío de correo no está configurado todavía.' },
    { status: 503 },
  )
}
