'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Copy, Mail, MessageCircle } from 'lucide-react'

const email = 'frequenciadivina007@gmail.com'

function ConsultoriaIndividualContent() {
  const searchParams = useSearchParams()
  const isEnglish = searchParams.get('lang') === 'en'
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <main className="consultoria-page">
      <header className="consultoria-header">
        <a className="consultoria-brand" href={isEnglish ? '/?lang=en' : '/'} aria-label={isEnglish ? 'Back to home' : 'Volver al inicio'}><span>✦</span><b>FRECUENCIA<br /><i>DIVINA 7</i></b></a>
        <a className="back-home" href={isEnglish ? '/?lang=en' : '/'}><ArrowLeft size={15} /> {isEnglish ? 'Back to home' : 'Volver al inicio'}</a>
      </header>

      <section className="consultoria-welcome section-consultoria" aria-labelledby="consultoria-welcome-title">
        <p className="consultoria-eyebrow">{isEnglish ? 'Your access is confirmed' : 'Tu acceso está confirmado'}</p>
        <h2 id="consultoria-welcome-title">{isEnglish ? <>CONGRATULATIONS!<br /><em>YOU HAVE JUST ACQUIRED IT</em></> : <>¡FELICIDADES!<br /><em>ACABAS DE ADQUIRIRLO</em></>}</h2>
        <p>{isEnglish ? 'Now simply follow the steps below.' : 'Ahora solo tienes que seguir los pasos que aparecen a continuación.'}</p>
      </section>

      <section className="consultoria-hero section-consultoria">
        <div className="consultoria-hero-copy">
          <p className="consultoria-eyebrow">{isEnglish ? 'One meeting · One space · You' : 'Un encuentro · Un espacio · Tú'}</p>
          <h1>{isEnglish ? <>INDIVIDUAL<br /><em>CONSULTING</em></> : <>CONSULTORÍA<br /><em>INDIVIDUAL</em></>}</h1>
          <p className="consultoria-lead">{isEnglish ? 'Let us connect in a closer, more personal way.' : 'Conectemos de una manera más cercana y personal.'}</p>
          <a className="consultoria-gold-button" href="#contacto">{isEnglish ? 'I want to take the first step' : 'Quiero dar el primer paso'} <ArrowUpRight size={17} /></a>
        </div>
        <div className="consultoria-portrait-wrap"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/df7bc775-d6cc-4886-b1fb-89a99d94cc7c-GtViUc1UkVmMHGxBWmjHKJpjCGt5wu.png" alt={isEnglish ? 'Individual consulting in a space for conversation and guidance' : 'Consultoría Individual en un espacio de conversación y orientación'} /></div>
      </section>

      <section className="consultoria-intro section-consultoria">
        <div className="consultoria-kicker">01 / {isEnglish ? 'A space for you' : 'Un espacio para ti'}</div>
        <div className="consultoria-two-col"><h2>{isEnglish ? <>A conversation<br /><em>that can open new perspectives.</em></> : <>Una conversación<br /><em>que puede abrir nuevas perspectivas.</em></>}</h2><div><p className="consultoria-large-copy">{isEnglish ? 'This is a space created especially for those who want a deeper connection, a personal conversation, and the opportunity to share their experiences, questions, and concerns directly with me.' : 'Este es un espacio creado especialmente para quienes desean una conexión más profunda, una conversación personalizada y la oportunidad de compartir sus experiencias, preguntas e inquietudes directamente conmigo.'}</p><p>{isEnglish ? 'Through our individual consulting sessions, we can get to know each other, talk, and explore different aspects of your personal and spiritual journey together.' : 'A través de nuestras consultorías individuales, podremos conocernos, conversar y explorar juntos diferentes aspectos de tu camino personal y espiritual.'}</p><p>{isEnglish ? 'Each meeting will be an opportunity to listen to you, understand your goals, and share reflections that may help you find new perspectives.' : 'Cada encuentro será una oportunidad para escucharte, comprender tus objetivos y compartir reflexiones que puedan ayudarte a encontrar nuevas perspectivas.'}</p></div></div>
      </section>

      <section className="consultoria-conversations section-consultoria">
        <div className="consultoria-kicker">02 / {isEnglish ? 'Our conversations' : 'Nuestras conversaciones'}</div>
        <div className="consultoria-two-col"><h2>{isEnglish ? <>A SPACE TO<br /><em>CONNECT WITH YOURSELF</em></> : <>UN ESPACIO PARA<br /><em>CONECTAR CONTIGO</em></>}</h2><div><p className="consultoria-large-copy">{isEnglish ? 'During our individual sessions, we can have private calls, talk about your experiences, answer your questions, and explore the topics that interest you most.' : 'Durante nuestras sesiones individuales podremos realizar llamadas privadas, conversar sobre tus experiencias, resolver inquietudes y profundizar en los temas que más te interesan.'}</p><p>{isEnglish ? 'The idea is to create a close, calm, and trusting environment where you can express yourself freely and receive personal attention.' : 'La idea es crear un ambiente cercano, tranquilo y de confianza, donde puedas expresarte libremente y recibir una atención personalizada.'}</p><p>{isEnglish ? 'Meetings will be arranged in advance so we can both find the best time to connect.' : 'Los encuentros serán organizados previamente para que ambos podamos encontrar el mejor momento para conectar.'}</p></div></div>
      </section>

      <section className="consultoria-steps section-consultoria"><div className="consultoria-kicker">03 / {isEnglish ? 'How does it work?' : '¿Cómo funciona?'}</div><h2>{isEnglish ? <>A simple path<br /><em>to get started.</em></> : <>Un camino sencillo<br /><em>para comenzar.</em></>}</h2><div className="consultoria-step-grid"><Step icon={<Mail />} number="01" title={isEnglish ? 'CONTACT US' : 'CONTÁCTANOS'} text={isEnglish ? 'Send us an email to express your interest in an individual consulting session.' : 'Envíanos un correo electrónico para expresar tu interés en una consultoría individual.'} /><Step icon={<CalendarDays />} number="02" title={isEnglish ? 'COORDINATE OUR SCHEDULES' : 'COORDINAMOS NUESTROS HORARIOS'} text={isEnglish ? 'We will talk by email to find a day and time that work for both of us.' : 'Conversaremos por correo electrónico para encontrar un día y una hora que funcionen para ambos.'} /><Step icon={<MessageCircle />} number="03" title={isEnglish ? 'CONNECT' : 'NOS CONECTAMOS'} text={isEnglish ? 'Once the time is agreed, we will organize our individual call and begin our conversation.' : 'Una vez acordado el horario, organizaremos nuestra llamada individual para comenzar nuestra conversación.'} /></div></section>

      <section className="consultoria-contact section-consultoria" id="contacto"><div className="contact-card"><div className="consultoria-kicker">04 / {isEnglish ? 'The first step' : 'El primer paso'}</div><h2>{isEnglish ? <>ARE YOU READY FOR OUR<br /><em>FIRST CONVERSATION?</em></> : <>¿ESTÁS LISTO PARA NUESTRA<br /><em>PRIMERA CONVERSACIÓN?</em></>}</h2><p>{isEnglish ? 'If you would like to have an individual consulting session with me, the first step is very simple.' : 'Si deseas tener una consultoría individual conmigo, el primer paso es muy sencillo.'}</p><p>{isEnglish ? 'Send me an email so we can talk, get to know each other, and agree on an available time for our conversation.' : 'Envíame un correo electrónico para que podamos conversar, conocernos y acordar los horarios disponibles para nuestra comunicación.'}</p><p>{isEnglish ? 'I will be happy to receive your message and arrange our meeting.' : 'Estaré encantado de recibir tu mensaje y organizar nuestro encuentro.'}</p><a className="consultoria-email" href={`mailto:${email}?subject=${isEnglish ? 'Individual%20Consulting%20Request' : 'Solicitud%20de%20Consultor%C3%ADa%20Individual'}`}><Mail size={18} /> {email}</a><div className="contact-actions"><a className="consultoria-gold-button" href={`mailto:${email}?subject=${isEnglish ? 'Individual%20Consulting%20Request' : 'Solicitud%20de%20Consultor%C3%ADa%20Individual'}`}>{isEnglish ? 'I WANT TO SCHEDULE MY CONSULTING SESSION' : 'QUIERO AGENDAR MI CONSULTORÍA'} <ArrowUpRight size={17} /></a><button className="copy-email" type="button" onClick={copyEmail}><Copy size={15} /> {copied ? (isEnglish ? 'Email copied' : 'Correo copiado') : (isEnglish ? 'Copy email' : 'Copiar correo')}</button></div></div></section>

      <section className="consultoria-final section-consultoria"><div className="consultoria-symbol">✦</div><h2>{isEnglish ? <>Everything begins with<br /><em>a conversation.</em></> : <>Todo comienza con<br /><em>una conversación.</em></>}</h2><p>{isEnglish ? 'Perhaps this is the moment to take the next step on your personal growth journey.' : 'Quizás este sea el momento de dar el siguiente paso en tu camino de crecimiento personal.'}</p><p>{isEnglish ? 'I am here to listen, share knowledge, and create a space for authentic connection.' : 'Estoy aquí para escucharte, compartir conocimientos y crear un espacio de conexión auténtica.'}</p><a className="back-home final-back" href={isEnglish ? '/?lang=en' : '/'}><ArrowLeft size={15} /> {isEnglish ? 'Back to Frecuencia Divina 7' : 'Volver a Frecuencia Divina 7'}</a></section>
      <footer className="consultoria-footer"><span>✦ FRECUENCIA DIVINA 7</span><small>{isEnglish ? 'A space to connect with yourself.' : 'Un espacio para conectar contigo.'}</small></footer>
    </main>
  )
}

function Step({ icon, number, title, text }: { icon: React.ReactNode; number: string; title: string; text: string }) {
  return <article className="consultoria-step"><span className="step-icon">{icon}</span><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p><Check className="step-check" size={16} /></article>
}

export default function ConsultoriaIndividualPage() {
  return (
    <Suspense fallback={<main className="consultoria-page" aria-busy="true" />}>
      <ConsultoriaIndividualContent />
    </Suspense>
  )
}

