'use client'

import { FormEvent, Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const discoveries = {
  es: [
    ['01', 'MENTALIDAD DE ABUNDANCIA', 'Aprende a reconocer tus creencias y desarrollar una perspectiva más positiva y consciente.'],
    ['02', 'TRANSFORMACIÓN PERSONAL', 'Explora herramientas de autoconocimiento y crecimiento interior.'],
    ['03', 'NUEVAS OPORTUNIDADES', 'Descubre cómo la claridad, la disciplina y las decisiones conscientes pueden ayudarte a avanzar hacia tus objetivos.'],
  ],
  en: [
    ['01', 'ABUNDANCE MINDSET', 'Learn to recognize your beliefs and develop a more positive and conscious perspective.'],
    ['02', 'PERSONAL TRANSFORMATION', 'Explore tools for self-knowledge and inner growth.'],
    ['03', 'NEW OPPORTUNITIES', 'Discover how clarity, discipline, and conscious decisions can help you move toward your goals.'],
  ],
}

function AceleradorAbundanciaContent() {
  const searchParams = useSearchParams()
  const isEnglish = searchParams.get('lang') === 'en'
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!consent || !email) return
    setSubmitted(true)
  }

  return (
    <main className="abundance-page">
      <header className="site-header abundance-header">
        <a className="brand" href="/" aria-label="Frecuencia Divina 7, inicio"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a>
        <nav className="abundance-nav" aria-label="Navegación principal">
          <a href={isEnglish ? '/?lang=en' : '/'}>{isEnglish ? 'The experience' : 'La experiencia'}</a>
          <a href={isEnglish ? '/ensenanzas-alto-control?lang=en' : '/ensenanzas-alto-control'}>{isEnglish ? 'Teachings' : 'Enseñanzas'}</a>
          <a href={isEnglish ? '/consultoria-individual?lang=en' : '/consultoria-individual'}>{isEnglish ? 'Consulting' : 'Consultoría'}</a>
        </nav>
        <a className="abundance-back" href={isEnglish ? '/?lang=en' : '/'}>{isEnglish ? 'Back to home' : 'Volver al inicio'} <ArrowRight size={15} /></a>
      </header>

      <section className="abundance-welcome" aria-label="Confirmación de adquisición">
        <p className="abundance-welcome-kicker">{isEnglish ? 'CONGRATULATIONS!' : '¡FELICIDADES!'}</p>
        <h2>{isEnglish ? 'You have just acquired the Abundance Accelerator.' : 'Acabas de adquirir el Acelerador de Abundancia.'}</h2>
        <p>{isEnglish ? 'Now simply follow the steps below.' : 'Ahora solo tienes que seguir los pasos que aparecen a continuación.'}</p>
      </section>

      <section className="abundance-hero">
        <div className="abundance-hero-glow" aria-hidden="true" />
        <div className="abundance-hero-copy">
          <p className="eyebrow"><Sparkles size={13} /> {isEnglish ? 'Exclusive experience' : 'Experiencia exclusiva'}</p>
          <h1>ACELERADOR<br /><i>DE ABUNDANCIA</i></h1>
          <p className="abundance-tagline">{isEnglish ? 'Awaken your potential and discover new possibilities for your life.' : 'Despierta tu potencial y descubre nuevas posibilidades para tu vida.'}</p>
          <p className="abundance-intro">{isEnglish ? 'Welcome to the Abundance Accelerator, an experience created for those who want to develop a growth mindset, explore new perspectives, and strengthen their connection with their personal goals.' : 'Bienvenido al Acelerador de Abundancia, una experiencia creada para quienes desean desarrollar una mentalidad de crecimiento, explorar nuevas perspectivas y fortalecer su conexión con sus objetivos personales.'}</p>
        </div>
        <div className="abundance-image-placeholder">
          <img src="/acelerador-abundancia.png" alt="Árbol dorado de abundancia sobre un libro abierto" />
        </div>
      </section>

      <section className="abundance-discovery section-wrap">
        <div className="section-kicker">01 / {isEnglish ? 'The experience' : 'La experiencia'}</div>
        <div className="abundance-heading"><h2>{isEnglish ? <>What will you<br /><i>discover?</i></> : <>¿Qué vas a<br /><i>descubrir?</i></>}</h2><p>{isEnglish ? 'Through knowledge, reflection, and conscious practices, you will discover new tools to move forward on your personal development journey.' : 'A través de conocimientos, reflexiones y prácticas conscientes, descubrirás nuevas herramientas para avanzar en tu camino de desarrollo personal.'}</p></div>
        <div className="discovery-grid">{discoveries[isEnglish ? 'en' : 'es'].map(([number, title, text]) => <article className="discovery-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check /></article>)}</div>
      </section>

      <section className="abundance-access section-wrap" id="solicitar-acceso">
        <div className="section-kicker">02 / {isEnglish ? 'Your next step' : 'Tu próximo paso'}</div>
        <div className="access-card">
          <div><h2>{isEnglish ? <>YOUR NEW EXPERIENCE<br /><i>STARTS HERE</i></> : <>TU NUEVA EXPERIENCIA<br /><i>COMIENZA AQUÍ</i></>}</h2><p>{isEnglish ? 'If you have already purchased the Abundance Accelerator, leave your email so our team can contact you and guide you through the next steps to access your experience.' : 'Si ya has adquirido el Acelerador de Abundancia, deja tu correo electrónico para que nuestro equipo pueda ponerse en contacto contigo y orientarte sobre los próximos pasos para acceder a tu experiencia.'}</p><p>{isEnglish ? 'We are ready to accompany you through this new chapter.' : 'Estamos preparados para acompañarte en esta nueva etapa.'}</p></div>
          {submitted ? <div className="access-confirmation"><span>✦</span><h3>{isEnglish ? 'WE HAVE RECEIVED YOUR REQUEST!' : '¡HEMOS RECIBIDO TU SOLICITUD!'}</h3><p>{isEnglish ? 'Thank you for being part of the Abundance Accelerator.' : 'Gracias por formar parte del Acelerador de Abundancia.'}</p><p>{isEnglish ? 'Our team has received your request and will contact you as soon as possible.' : 'Nuestro equipo ha recibido tu solicitud y se pondrá en contacto contigo lo antes posible.'}</p><p>{isEnglish ? 'We are currently assisting many participants, so we appreciate your patience.' : 'Actualmente estamos atendiendo a una gran cantidad de participantes, por lo que agradecemos tu paciencia.'}</p><p>{isEnglish ? 'Please keep an eye on your email.' : '¡Mantente atento a tu correo electrónico!'}</p></div> : <form className="abundance-form" onSubmit={handleSubmit}><label htmlFor="abundance-email">{isEnglish ? 'Your email address' : 'Tu correo electrónico'}</label><input id="abundance-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder={isEnglish ? 'Enter your email address' : 'Introduce tu correo electrónico'} /><label className="consent-line"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /><span>{isEnglish ? 'I agree to be contacted by email about my access.' : 'Acepto recibir contacto por correo electrónico sobre mi acceso.'}</span></label><button className="gold-button" type="submit">{isEnglish ? 'Request my access' : 'Solicitar mi acceso'} <ArrowRight size={16} /></button><small>{isEnglish ? 'By submitting your details, you agree that our team may contact you.' : 'Al enviar tus datos, aceptas que nuestro equipo se ponga en contacto contigo.'}</small></form>}
        </div>
      </section>
    </main>
  )
}

export default function AceleradorAbundanciaPage() {
  return (
    <Suspense fallback={<main className="abundance-page" aria-busy="true" />}> 
      <AceleradorAbundanciaContent />
    </Suspense>
  )
}

