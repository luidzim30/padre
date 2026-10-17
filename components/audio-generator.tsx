'use client'

import { useState } from 'react'
import { LoaderCircle, Play, Sparkles } from 'lucide-react'

type AudioGeneratorProps = { day: number; title: string; youtubeUrl: string }

export function AudioGenerator({ day, title, youtubeUrl }: AudioGeneratorProps) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [status, setStatus] = useState('')

  async function generateAudio() {
    setStatus('Creando tu meditación…')
    try {
      const response = await fetch('/api/generate-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ day, title }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      setAudioUrl(data.audioUrl)
      setStatus('Meditación lista para escuchar.')
    } catch {
      setStatus('No fue posible crear el audio. Inténtalo de nuevo.')
    }
  }

  return <section className="audio-generator" aria-labelledby="audio-generator-title">
    <div><span className="stage-pill"><Sparkles /> VOZ FEMENINA · ESPAÑOL</span><h2 id="audio-generator-title">Crear audio de esta práctica</h2><p>Genera una guía de 7 minutos con una voz serena y un ambiente suave de relajación.</p></div>
    <button className="text-button" onClick={generateAudio} disabled={status === 'Creando tu meditación…'}>{status === 'Creando tu meditación…' ? <LoaderCircle className="spin" /> : <Play />} {status || 'Generar meditación'}</button>
    {audioUrl && <audio className="generated-audio" controls src={audioUrl} aria-label={`Meditación ${title}`} />}
    <a className="youtube-practice-link" href={youtubeUrl} target="_blank" rel="noreferrer">
      Escuchar una práctica en YouTube
    </a>
  </section>
}

export default AudioGenerator

export const __audioGeneratorStyles = true

