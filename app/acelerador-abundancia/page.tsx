'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const discoveries = [
  ['01', 'MENTALIDAD DE ABUNDANCIA', 'Aprende a reconocer tus creencias y desarrollar una perspectiva más positiva y consciente.'],
  ['02', 'TRANSFORMACIÓN PERSONAL', 'Explora herramientas de autoconocimiento y crecimiento interior.'],
  ['03', 'NUEVAS OPORTUNIDADES', 'Descubre cómo la claridad, la disciplina y las decisiones conscientes pueden ayudarte a avanzar hacia tus objetivos.'],
]

export default function AceleradorAbundanciaPage() {
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
          <a href="/">La experiencia</a>
          <a href="/ensenanzas-alto-control">Enseñanzas</a>
          <a href="/consultoria-individual">Consultoría</a>
        </nav>
        <a className="abundance-back" href="/">Volver al inicio <ArrowRight size={15} /></a>
      </header>

      <section className="abundance-welcome" aria-label="Confirmación de adquisición">
        <p className="abundance-welcome-kicker">¡FELICIDADES!</p>
        <h2>Acabas de adquirir el Acelerador de Abundancia.</h2>
        <p>Ahora solo tienes que seguir los pasos que aparecen a continuación.</p>
      </section>

      <section className="abundance-hero">
        <div className="abundance-hero-glow" aria-hidden="true" />
        <div className="abundance-hero-copy">
          <p className="eyebrow"><Sparkles size={13} /> Experiencia exclusiva</p>
          <h1>ACELERADOR<br /><i>DE ABUNDANCIA</i></h1>
          <p className="abundance-tagline">Despierta tu potencial y descubre nuevas posibilidades para tu vida.</p>
          <p className="abundance-intro">Bienvenido al Acelerador de Abundancia, una experiencia creada para quienes desean desarrollar una mentalidad de crecimiento, explorar nuevas perspectivas y fortalecer su conexión con sus objetivos personales.</p>
        </div>
        <div className="abundance-image-placeholder">
          <img src="/acelerador-abundancia.png" alt="Árbol dorado de abundancia sobre un libro abierto" />
        </div>
      </section>

      <section className="abundance-discovery section-wrap">
        <div className="section-kicker">01 / La experiencia</div>
        <div className="abundance-heading"><h2>¿Qué vas a<br /><i>descubrir?</i></h2><p>A través de conocimientos, reflexiones y prácticas conscientes, descubrirás nuevas herramientas para avanzar en tu camino de desarrollo personal.</p></div>
        <div className="discovery-grid">{discoveries.map(([number, title, text]) => <article className="discovery-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check /></article>)}</div>
      </section>

      <section className="abundance-access section-wrap" id="solicitar-acceso">
        <div className="section-kicker">02 / Tu próximo paso</div>
        <div className="access-card">
          <div><h2>TU NUEVA EXPERIENCIA<br /><i>COMIENZA AQUÍ</i></h2><p>Si ya has adquirido el Acelerador de Abundancia, deja tu correo electrónico para que nuestro equipo pueda ponerse en contacto contigo y orientarte sobre los próximos pasos para acceder a tu experiencia.</p><p>Estamos preparados para acompañarte en esta nueva etapa.</p></div>
          {submitted ? <div className="access-confirmation"><span>✦</span><h3>¡HEMOS RECIBIDO TU SOLICITUD!</h3><p>Gracias por formar parte del Acelerador de Abundancia.</p><p>Nuestro equipo ha recibido tu solicitud y se pondrá en contacto contigo lo antes posible.</p><p>Actualmente estamos atendiendo a una gran cantidad de participantes, por lo que agradecemos tu paciencia.</p><p>¡Mantente atento a tu correo electrónico!</p></div> : <form className="abundance-form" onSubmit={handleSubmit}><label htmlFor="abundance-email">Tu correo electrónico</label><input id="abundance-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Introduce tu correo electrónico" /><label className="consent-line"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /><span>Acepto recibir contacto por correo electrónico sobre mi acceso.</span></label><button className="gold-button" type="submit">Solicitar mi acceso <ArrowRight size={16} /></button><small>Al enviar tus datos, aceptas que nuestro equipo se ponga en contacto contigo.</small></form>}
        </div>
      </section>
    </main>
  )
}

