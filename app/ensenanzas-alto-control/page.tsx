'use client'

import { FormEvent, Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'

const topics = {
  es: [
    ['01', 'AUTOCONOCIMIENTO', 'Explora nuevas perspectivas para comprender mejor tus pensamientos, emociones y decisiones.'],
    ['02', 'DISCIPLINA INTERIOR', 'Descubre la importancia de la constancia, la atención y los hábitos conscientes.'],
    ['03', 'DESARROLLO PERSONAL', 'Abre un espacio para aprender, reflexionar y avanzar en tu propio proceso.'],
  ],
  en: [
    ['01', 'SELF-KNOWLEDGE', 'Explore new perspectives to better understand your thoughts, emotions, and decisions.'],
    ['02', 'INNER DISCIPLINE', 'Discover the importance of consistency, focus, and conscious habits.'],
    ['03', 'PERSONAL DEVELOPMENT', 'Create space to learn, reflect, and move forward in your own process.'],
  ],
}

function EnseñanzasAltoControlContent() {
  const searchParams = useSearchParams()
  const isEnglish = searchParams.get('lang') === 'en'
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
        <a className="control-back" href={isEnglish ? '/?lang=en' : '/'}>{isEnglish ? 'Back to home' : 'Volver al inicio'} <ArrowRight /></a>
      </header>

      <section className="purchase-welcome section-wrap" aria-labelledby="purchase-welcome-title">
        <p className="section-kicker">{isEnglish ? 'Your access is confirmed' : 'Tu acceso está confirmado'}</p>
        <h2 id="purchase-welcome-title">{isEnglish ? <>CONGRATULATIONS!<br /><i>YOU HAVE JUST ACQUIRED IT</i></> : <>¡FELICIDADES!<br /><i>ACABAS DE ADQUIRIRLO</i></>}</h2>
        <p>{isEnglish ? 'Now simply follow the steps below.' : 'Ahora solo tienes que seguir los pasos que aparecen a continuación.'}</p>
      </section>

      <section className="control-hero section-wrap">
        <div className="control-hero-copy">
          <p className="eyebrow">{isEnglish ? 'A space to expand your perspective' : 'Un espacio para expandir tu mirada'}</p>
          <h1>{isEnglish ? <>HIGH-CONTROL<br /><i>TEACHINGS</i></> : <>ENSEÑANZAS<br /><i>DE ALTO CONTROL</i></>}</h1>
          <p className="control-subtitle">{isEnglish ? 'Discover a new perspective on the power of your mind, your awareness, and your ability to transform.' : 'Descubre una nueva perspectiva sobre el poder de tu mente, tu conciencia y tu capacidad de transformación.'}</p>
          <p>{isEnglish ? 'Some teachings invite us to look beyond the everyday and understand our own reality more deeply.' : 'Existen conocimientos que nos invitan a mirar más allá de lo cotidiano y comprender con mayor profundidad nuestra propia realidad.'}</p>
        </div>
        <div className="control-hero-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Encinamientos%20de%20Alto%20Control-k8cLVs985W1TTLEOd8A0Luk2dZxjw7.png" alt="Cerebro iluminado con energía dorada y azul" /></div>
      </section>

      <section className="control-intro section-wrap">
        <div><p className="section-kicker">01 / {isEnglish ? 'The perspective' : 'La perspectiva'}</p><h2>{isEnglish ? <>KNOWLEDGE<br /><i>THAT BEGINS WITHIN</i></> : <>UN CONOCIMIENTO<br /><i>QUE COMIENZA DESDE TU INTERIOR</i></>}</h2></div>
        <div className="control-intro-copy">{isEnglish ? <><p>In High-Control Teachings, we explore ideas, practices, and reflections related to self-knowledge, inner discipline, and the development of deeper awareness.</p><p>This space is for those who want to learn, question their limits, and discover new tools for personal growth.</p></> : <><p>En Enseñanzas de Alto Control exploraremos ideas, prácticas y reflexiones relacionadas con el autoconocimiento, la disciplina interior y el desarrollo de una conciencia más profunda.</p><p>Este espacio está pensado para quienes desean aprender, cuestionar sus límites y descubrir nuevas herramientas para su crecimiento personal.</p></>}</div>
        <div className="control-topic-grid">{(isEnglish ? topics.en : topics.es).map(([number, title, text]) => <article className="control-topic" key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p><Check /></article>)}</div>
      </section>

      <section className="control-contact section-wrap" id="informacion">
        <div className="control-contact-inner"><p className="section-kicker">02 / {isEnglish ? 'Your next step' : 'Tu próximo paso'}</p><h2>{isEnglish ? <>WANT TO RECEIVE<br /><i>MORE INFORMATION?</i></> : <>¿QUIERES RECIBIR<br /><i>MÁS INFORMACIÓN?</i></>}</h2><p>{isEnglish ? 'Leave your email address and we will get in touch with you.' : 'Déjanos tu correo electrónico y nos pondremos en contacto contigo.'}</p><p>{isEnglish ? 'If you would like to learn more about High-Control Teachings, enter your email address below. Our team will receive your request and get in touch to share more information about this experience and the next steps.' : 'Si deseas conocer más sobre Enseñanzas de Alto Control, deja tu dirección de correo electrónico en el siguiente espacio. Nuestro equipo recibirá tu solicitud y podrá ponerse en contacto contigo para compartir más información sobre esta experiencia y los próximos pasos.'}</p>
          <form className="control-form" onSubmit={handleSubmit}><label htmlFor="control-email">{isEnglish ? 'Your email address' : 'Tu correo electrónico'}</label><div className="control-form-row"><input id="control-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder={isEnglish ? 'Enter your email address here' : 'Escribe tu correo electrónico aquí'} aria-describedby="control-consent" /><button className="gold-button" type="submit" disabled={status === 'loading'}>{status === 'loading' ? <LoaderCircle className="spin" aria-hidden="true" /> : null}{status === 'loading' ? (isEnglish ? 'Sending...' : 'Enviando...') : (isEnglish ? 'I want more information' : 'Quiero recibir información')} <ArrowRight /></button></div><small id="control-consent">{isEnglish ? 'We will only use your email address to respond to your request.' : 'Utilizaremos tu correo electrónico únicamente para responder a tu solicitud.'}</small></form>
          {status === 'success' && <div className="control-success" role="status"><strong>{isEnglish ? 'We received your request!' : '¡Hemos recibido tu solicitud!'}</strong><span>{isEnglish ? 'Thank you for your interest. We will contact you at the email address you provided.' : 'Gracias por tu interés. Nos pondremos en contacto contigo a través del correo electrónico que nos has proporcionado.'}</span></div>}
          {status === 'error' && <p className="control-error" role="alert">{isEnglish ? 'We could not send your request. Please try again later.' : 'No ha sido posible enviar tu solicitud. Inténtalo de nuevo más tarde.'}</p>}
        </div>
      </section>

      <section className="control-final section-wrap"><p className="section-kicker">03 / {isEnglish ? 'The decision' : 'La decisión'}</p><h2>{isEnglish ? <>THE FIRST STEP BEGINS<br /><i>WITH YOUR DECISION</i></> : <>EL PRIMER PASO COMIENZA<br /><i>CON TU DECISIÓN</i></>}</h2><p>{isEnglish ? 'Every learning journey begins with curiosity and the willingness to discover something new.' : 'Todo aprendizaje comienza con la curiosidad y la voluntad de descubrir algo nuevo.'}</p><p>{isEnglish ? 'If you feel these teachings could become part of your path, leave your email and we will be happy to share more information with you.' : 'Si sientes que estas enseñanzas pueden formar parte de tu camino, deja tu correo electrónico y estaremos encantados de compartir contigo más información.'}</p><a className="gold-button" href="#informacion">{isEnglish ? 'I want more information' : 'Quiero recibir información'} <ArrowRight /></a></section>
      <footer className="site-footer"><a className="brand" href={isEnglish ? '/?lang=en' : '/'}><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a><p>{isEnglish ? 'A space to expand your awareness.' : 'Un espacio para ampliar tu conciencia.'}</p></footer>
    </main>
  )
}

export default function EnseñanzasAltoControlPage() {
  return (
    <Suspense fallback={<main className="control-page" aria-busy="true" />}>
      <EnseñanzasAltoControlContent />
    </Suspense>
  )
}

