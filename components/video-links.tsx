'use client'

import { useState } from 'react'
import { PremiumYouTubePlayer } from '@/components/premium-youtube-player'

const videoLinks = [
  'https://youtube.com/watch?v=AYrqrmvm3us', 'https://youtu.be/gpJrmutDCPc', 'https://youtu.be/VgyftYGODhw', 'https://youtu.be/jbfAg54moRQ', 'https://youtube.com/watch?v=b2BrpwUCgC0', 'https://youtube.com/watch?v=Hn9ijmE8Vio', 'https://youtu.be/a0_TvxdxRu8', 'https://youtu.be/Skj3TYYcEyI', 'https://youtu.be/oZgGLgINUto', 'https://youtu.be/TCDTeFbapwU', 'https://youtu.be/Hc-Uv3CH39s', 'https://youtu.be/J9FeBBCkg8o', 'https://youtu.be/XpTXWmSeC64', 'https://youtu.be/CHAv2KgZNaM', 'https://youtu.be/rSI-TyoKLuU', 'https://youtu.be/uM8Dd6oIwJo', 'https://youtu.be/93uWhKquLw0', 'https://youtu.be/LcbysVitODg', 'https://youtu.be/dPnjlksmAvo', 'https://www.youtube.com/watch?v=jTyxeMzBxY8', 'https://www.youtube.com/watch?v=4LP28e3h_ck', 'https://www.youtube.com/watch?v=cYXKqQcsv1M', 'https://www.youtube.com/watch?v=UrYZBsmbp2Q', 'https://www.youtube.com/watch?v=Pkv1Nqm8NxY', 'https://www.youtube.com/watch?v=NlW7WD0tQ5o', 'https://www.youtube.com/watch?v=pIBQinQpZ7U', 'https://www.youtube.com/watch?v=bVrv2s2WOtw', 'https://www.youtube.com/watch?v=WMoS64j0ZgE', 'https://www.youtube.com/watch?v=ABveLtmYcMk', 'https://www.youtube.com/watch?v=EYWGl3CMwY0',
]

export function VideoLinks({ titles, descriptions }: { titles: string[]; descriptions?: string[] }) {
  const [selected, setSelected] = useState(0)
  const selectedTitle = titles[selected] || `Meditación del día ${String(selected + 1).padStart(2, '0')}`

  return <section className="video-links-panel" aria-labelledby="video-links-title" id="meditaciones-video">
    <div className="section-kicker">04 / Tu espacio premium</div>
    <h2 id="video-links-title">TUS 30 MEDITACIONES<br /><i>EN VIDEO</i></h2>
    <p className="video-links-intro">Elige una meditación y reprodúcela aquí mismo. Cada video corresponde a su día del recorrido.</p>
    <div className="selected-video-area" id="selected-video-area" tabIndex={-1}>
      <div className="video-player-with-arrows">
        <button className="video-arrow video-arrow-prev" type="button" onClick={() => {
          const next = selected === 0 ? videoLinks.length - 1 : selected - 1
          setSelected(next)
          requestAnimationFrame(() => document.getElementById('selected-video-area')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
        }} aria-label="Meditación anterior">←</button>
        <PremiumYouTubePlayer url={videoLinks[selected]} title={selectedTitle} />
        <button className="video-arrow video-arrow-next" type="button" onClick={() => {
          const next = selected === videoLinks.length - 1 ? 0 : selected + 1
          setSelected(next)
          requestAnimationFrame(() => document.getElementById('selected-video-area')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
        }} aria-label="Siguiente meditación">→</button>
      </div>
      <div className="selected-video-copy"><span>DÍA {String(selected + 1).padStart(2, '0')}</span><h3>{selectedTitle}</h3><p>{descriptions?.[selected] || 'Una práctica guiada para acompañar tu proceso con calma y presencia.'}</p></div>
    </div>
    <div className="video-links-grid" aria-label="Seleccionar meditación">
      {videoLinks.map((url, index) => <article className={`video-link-card${selected === index ? ' is-selected' : ''}`} key={`${url}-${index}`}>
        <div><span>DÍA {String(index + 1).padStart(2, '0')}</span><h3>{titles[index]}</h3><p>{descriptions?.[index] || 'Meditación complementaria'}</p></div>
        <button className="video-link-button" type="button" onClick={() => {
          setSelected(index)
          requestAnimationFrame(() => document.getElementById('selected-video-area')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
        }} aria-pressed={selected === index}>Ver meditación <b aria-hidden="true">→</b></button>
      </article>)}
    </div>
  </section>
}

export { videoLinks }
