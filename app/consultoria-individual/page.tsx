'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Copy, Mail, MessageCircle } from 'lucide-react'

const email = 'frequenciadivina007@gmail.com'

export default function ConsultoriaIndividualPage() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main className="consultoria-page">
      <header className="consultoria-header">
        <a className="consultoria-brand" href="/" aria-label="Volver al inicio"><span>✦</span><b>FRECUENCIA<br /><i>DIVINA 7</i></b></a>
        <a className="back-home" href="/"><ArrowLeft size={15} /> Volver al inicio</a>
      </header>

      <section className="consultoria-welcome section-consultoria" aria-labelledby="consultoria-welcome-title">
        <p className="consultoria-eyebrow">Tu acceso está confirmado</p>
        <h2 id="consultoria-welcome-title">¡FELICIDADES!<br /><em>ACABAS DE ADQUIRIRLO</em></h2>
        <p>Ahora solo tienes que seguir los pasos que aparecen a continuación.</p>
      </section>

      <section className="consultoria-hero section-consultoria">
        <div className="consultoria-hero-copy">
          <p className="consultoria-eyebrow">Un encuentro · Un espacio · Tú</p>
          <h1>CONSULTORÍA<br /><em>INDIVIDUAL</em></h1>
          <p className="consultoria-lead">Conectemos de una manera más cercana y personal.</p>
          <a className="consultoria-gold-button" href="#contacto">Quiero dar el primer paso <ArrowUpRight size={17} /></a>
        </div>
        <div className="consultoria-portrait-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/df7bc775-d6cc-4886-b1fb-89a99d94cc7c-GtViUc1UkVmMHGxBWmjHKJpjCGt5wu.png" alt="Consultoría Individual en un espacio de conversación y orientación" /></div>
      </section>

      <section className="consultoria-intro section-consultoria">
        <div className="consultoria-kicker">01 / Un espacio para ti</div>
        <div className="consultoria-two-col"><h2>Una conversación<br /><em>que puede abrir nuevas perspectivas.</em></h2><div><p className="consultoria-large-copy">Este es un espacio creado especialmente para quienes desean una conexión más profunda, una conversación personalizada y la oportunidad de compartir sus experiencias, preguntas e inquietudes directamente conmigo.</p><p>A través de nuestras consultorías individuales, podremos conocernos, conversar y explorar juntos diferentes aspectos de tu camino personal y espiritual.</p><p>Cada encuentro será una oportunidad para escucharte, comprender tus objetivos y compartir reflexiones que puedan ayudarte a encontrar nuevas perspectivas.</p></div></div>
      </section>

      <section className="consultoria-conversations section-consultoria">
        <div className="consultoria-kicker">02 / Nuestras conversaciones</div>
        <div className="consultoria-two-col"><h2>UN ESPACIO PARA<br /><em>CONECTAR CONTIGO</em></h2><div><p className="consultoria-large-copy">Durante nuestras sesiones individuales podremos realizar llamadas privadas, conversar sobre tus experiencias, resolver inquietudes y profundizar en los temas que más te interesan.</p><p>La idea es crear un ambiente cercano, tranquilo y de confianza, donde puedas expresarte libremente y recibir una atención personalizada.</p><p>Los encuentros serán organizados previamente para que ambos podamos encontrar el mejor momento para conectar.</p></div></div>
      </section>

      <section className="consultoria-steps section-consultoria"><div className="consultoria-kicker">03 / ¿Cómo funciona?</div><h2>Un camino sencillo<br /><em>para comenzar.</em></h2><div className="consultoria-step-grid"><Step icon={<Mail />} number="01" title="CONTÁCTANOS" text="Envíanos un correo electrónico para expresar tu interés en una consultoría individual." /><Step icon={<CalendarDays />} number="02" title="COORDINAMOS NUESTROS HORARIOS" text="Conversaremos por correo electrónico para encontrar un día y una hora que funcionen para ambos." /><Step icon={<MessageCircle />} number="03" title="NOS CONECTAMOS" text="Una vez acordado el horario, organizaremos nuestra llamada individual para comenzar nuestra conversación." /></div></section>

      <section className="consultoria-contact section-consultoria" id="contacto"><div className="contact-card"><div className="consultoria-kicker">04 / El primer paso</div><h2>¿ESTÁS LISTO PARA NUESTRA<br /><em>PRIMERA CONVERSACIÓN?</em></h2><p>Si deseas tener una consultoría individual conmigo, el primer paso es muy sencillo.</p><p>Envíame un correo electrónico para que podamos conversar, conocernos y acordar los horarios disponibles para nuestra comunicación.</p><p>Estaré encantado de recibir tu mensaje y organizar nuestro encuentro.</p><a className="consultoria-email" href={`mailto:${email}?subject=Solicitud%20de%20Consultor%C3%ADa%20Individual`}><Mail size={18} /> {email}</a><div className="contact-actions"><a className="consultoria-gold-button" href={`mailto:${email}?subject=Solicitud%20de%20Consultor%C3%ADa%20Individual`}>QUIERO AGENDAR MI CONSULTORÍA <ArrowUpRight size={17} /></a><button className="copy-email" type="button" onClick={copyEmail}><Copy size={15} /> {copied ? 'Correo copiado' : 'Copiar correo'}</button></div></div></section>

      <section className="consultoria-final section-consultoria"><div className="consultoria-symbol">✦</div><h2>Todo comienza con<br /><em>una conversación.</em></h2><p>Quizás este sea el momento de dar el siguiente paso en tu camino de crecimiento personal.</p><p>Estoy aquí para escucharte, compartir conocimientos y crear un espacio de conexión auténtica.</p><a className="back-home final-back" href="/"><ArrowLeft size={15} /> Volver a Frecuencia Divina 7</a></section>
      <footer className="consultoria-footer"><span>✦ FRECUENCIA DIVINA 7</span><small>Un espacio para conectar contigo.</small></footer>
    </main>
  )
}

function Step({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) {
  return <article className="consultoria-step"><span className="step-icon">{icon}</span><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p><Check className="step-check" size={16} /></article>
}
