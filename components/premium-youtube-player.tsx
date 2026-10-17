'use client'

import { useState } from 'react'

function getVideoId(url: string) {
  try {
    const parsed = new URL(url)
    return parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v')
  } catch {
    return null
  }
}

export function PremiumYouTubePlayer({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false)
  const videoId = getVideoId(url)

  if (!videoId) return <p className="youtube-error">No pudimos cargar esta meditación. <a href={url}>Abrir en YouTube</a></p>

  return (
    <div className="premium-youtube-player" aria-label={`Reproductor de ${title}`}>
      {!loaded && <div className="youtube-loading" aria-live="polite">Cargando meditación…</div>}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?playsinline=1&controls=0&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
