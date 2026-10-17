'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'

const topics = [
  ['01', 'AUTOCONOCIMIENTO', 'Explora nuevas perspectivas para comprender mejor tus pensamientos, emociones y decisiones.'],
  ['02', 'DISCIPLINA INTERIOR', 'Descubre la importancia de la constancia, la atención y los hábitos conscientes.'],
  ['03', 'DESARROLLO PERSONAL', 'Abre un espacio para aprender, reflexionar y avanzar en tu propio proceso.'],
]

export default function EnseñanzasAltoControlPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch('/api/ensenanzas-alto-control', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(response.ok ? 'success' : 'error')
      if (response.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="control-page">
      <header className="site-header control-header">
        <a className="brand" href="/" aria-label="Frecuencia Divina 7, inicio"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a>
        <a className="control-back" href="/">Volver al inicio <ArrowRight /></a>
      </header>

      <section className="purchase-welcome section-wrap" aria-labelledby="purchase-welcome-title">
        <p className="section-kicker">Tu acceso está confirmado</p>
        <h2 id="purchase-welcome-title">¡FELICIDADES!<br /><i>ACABAS DE ADQUIRIRLO</i></h2>
        <p>Ahora solo tienes que seguir los pasos que aparecen a continuación.</p>
      </section>

      <section className="control-hero section-wrap">
        <div className="control-hero-copy">
          <p className="eyebrow">Un espacio para expandir tu mirada</p>
          <h1>ENSEÑANZAS<br /><i>DE ALTO CONTROL</i></h1>
          <p className="control-subtitle">Descubre una nueva perspectiva sobre el poder de tu mente, tu conciencia y tu capacidad de transformación.</p>
          <p>Existen conocimientos que nos invitan a mirar más allá de lo cotidiano y comprender con mayor profundidad nuestra propia realidad.</p>
        </div>
        <div className="control-hero-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Encinamientos%20de%20Alto%20Control-k8cLVs985W1TTLEOd8A0Luk2dZxjw7.png" alt="Cerebro iluminado con energía dorada y azul" /></div>
      </section>

      <section className="control-intro section-wrap">
        <div><p className="section-kicker">01 / La perspectiva</p><h2>UN CONOCIMIENTO<br /><i>QUE COMIENZA DESDE TU INTERIOR</i></h2></div>
        <div className="control-intro-copy"><p>En Enseñanzas de Alto Control exploraremos ideas, prácticas y reflexiones relacionadas con el autoconocimiento, la disciplina interior y el desarrollo de una conciencia más profunda.</p><p>Este espacio está pensado para quienes desean aprender, cuestionar sus límites y descubrir nuevas herramientas para su crecimiento personal.</p></div>
        <div className="control-topic-grid">{topics.map(([number, title, text]) => <article className="control-topic" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><Check /></article>)}</div>
      </section>

      <section className="control-contact section-wrap" id="informacion">
        <div className="control-contact-inner"><p className="section-kicker">02 / Tu próximo paso</p><h2>¿QUIERES RECIBIR<br /><i>MÁS INFORMACIÓN?</i></h2><p>Déjanos tu correo electrónico y nos pondremos en contacto contigo.</p><p>Si deseas conocer más sobre Enseñanzas de Alto Control, deja tu dirección de correo electrónico en el siguiente espacio. Nuestro equipo recibirá tu solicitud y podrá ponerse en contacto contigo para compartir más información sobre esta experiencia y los próximos pasos.</p>
          <form className="control-form" onSubmit={handleSubmit}><label htmlFor="control-email">Tu correo electrónico</label><div className="control-form-row"><input id="control-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Escribe tu correo electrónico aquí" aria-describedby="control-consent" /><button className="gold-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? <LoaderCircle className="spin" aria-hidden="true" /> : null}{status === 'loading' ? 'Enviando...' : 'Quiero recibir información'} <ArrowRight /></button></div><small id="control-consent">Utilizaremos tu correo electrónico únicamente para responder a tu solicitud.</small></form>
          {status === 'success' && <div className="control-success" role="status"><strong>¡Hemos recibido tu solicitud!</strong><span>Gracias por tu interés. Nos pondremos en contacto contigo a través del correo electrónico que nos has proporcionado.</span></div>}
          {status === 'error' && <p className="control-error" role="alert">No ha sido posible enviar tu solicitud. Inténtalo de nuevo más tarde.</p>}
        </div>
      </section>

      <section className="control-final section-wrap"><p className="section-kicker">03 / La decisión</p><h2>EL PRIMER PASO COMIENZA<br /><i>CON TU DECISIÓN</i></h2><p>Todo aprendizaje comienza con la curiosidad y la voluntad de descubrir algo nuevo.</p><p>Si sientes que estas enseñanzas pueden formar parte de tu camino, deja tu correo electrónico y estaremos encantados de compartir contigo más información.</p><a className="gold-button" href="#informacion">Quiero recibir información <ArrowRight /></a></section>
      <footer className="site-footer"><a className="brand" href="/"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a><p>Un espacio para ampliar tu conciencia.</p></footer>
    </main>
  )
}
