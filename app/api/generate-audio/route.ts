import { fal } from '@fal-ai/client'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const day = Number(body.day)
    const title = typeof body.title === 'string' ? body.title.trim() : ''

    if (!Number.isInteger(day) || day < 1 || day > 30 || !title) {
      return NextResponse.json({ error: 'Datos de meditación inválidos.' }, { status: 400 })
    }

    fal.config({ credentials: process.env.FAL_KEY })
    const result = await fal.subscribe('fal-ai/kokoro/spanish', {
      input: {
        prompt: `Guía de meditación espiritual en español latinoamericano neutro, titulada “${title}”. Voz femenina cálida, lenta, serena y cercana. Incluye pausas naturales, respiración consciente y una intención amable. Duración aproximada: siete minutos. No hagas promesas médicas ni milagrosas.`,
        voice: 'ef_dora',
      },
    })

    const audioUrl = (result.data as { audio?: { url?: string } })?.audio?.url
    if (!audioUrl) throw new Error('El modelo no devolvió un audio.')
    return NextResponse.json({ audioUrl })
  } catch (error) {
    console.error('[v0] Error generando audio:', error)
    return NextResponse.json({ error: 'No fue posible generar la meditación.' }, { status: 500 })
  }
}
