'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { PremiumYouTubePlayer } from '@/components/premium-youtube-player'

const saintBenedictImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P-kB3BlqRiGSUSr8iikAaH8kjNIeLca_WB5ex_TWLMuWIY7MEs00NQBnkCAyK2P5oWBnTeRPUAqmQIo6sI9TqVP6Vv2HGn2YUpYtLrDH8-H5lGoeDio0fgKKDmNb4Hywu3C2_lK7w6WTvHBjqhOmQUHLWrYlRN9pKVYjySFtYkUFXg9pvAndT2kNsfFijUKk-2qeVxQoYO3xNH4q98xsD05qvn4J9WP.jpg'

const days = [
  { title: 'La fe y la protección de San Benito', reflection: 'La fe no elimina todas las dificultades, pero nos ofrece una mirada serena para atravesarlas con esperanza y confianza.', prayer: 'Señor, fortalece mi fe y acompáñame con tu protección. Que, inspirado por el ejemplo de San Benito, encuentre paz, prudencia y firmeza en cada paso. Amén.', video: 'https://www.youtube.com/watch?v=qGa4_KNdiX4' },
  { title: 'Oración por la paz interior', reflection: 'En el silencio del corazón podemos dejar nuestras preocupaciones ante Dios y recibir la paz que no depende de las circunstancias.', prayer: 'Dios de paz, aquieta mi corazón y ayúdame a confiar en tu presencia. Que tu paz habite en mis pensamientos, en mis palabras y en mi hogar. Amén.', video: 'https://www.youtube.com/watch?v=2ydqabM9BBo' },
  { title: 'Fortaleza frente al miedo', reflection: 'Cuando aparece el miedo, la oración nos recuerda que no estamos solos y que podemos responder con valentía y discernimiento.', prayer: 'Señor, dame fortaleza cuando tenga miedo. Ilumina mis decisiones y enséñame a caminar con confianza, sin perder la bondad ni la esperanza. Amén.', video: 'https://www.youtube.com/watch?v=3fwr-c4bSqE' },
  { title: 'Protección del hogar y la familia', reflection: 'Un hogar se fortalece con cuidado, perdón y oración. Hoy presentamos a nuestras familias bajo la mirada amorosa de Dios.', prayer: 'Señor, bendice mi hogar y a cada persona de mi familia. Concédenos salud, unión, respeto y protección; haz de nuestra casa un lugar de paz. Amén.', video: 'https://www.youtube.com/watch?v=5fuJzQ-1enA' },
  { title: 'Sabiduría para superar dificultades', reflection: 'La sabiduría nos ayuda a distinguir lo esencial, actuar con paciencia y pedir ayuda cuando el camino se vuelve difícil.', prayer: 'Dios bueno, concédeme sabiduría para afrontar mis dificultades. Abre mi entendimiento, guía mis palabras y muéstrame el siguiente paso con claridad. Amén.', video: 'https://www.youtube.com/watch?v=b2ZL78S2FA0' },
  { title: 'Gratitud, esperanza y confianza', reflection: 'Dar gracias no niega los retos: nos ayuda a reconocer los dones que permanecen y a mirar el futuro con esperanza.', prayer: 'Gracias, Señor, por la vida, por las personas que me acompañan y por cada oportunidad de comenzar de nuevo. Aumenta mi esperanza y mi confianza en ti. Amén.', video: 'https://www.youtube.com/watch?v=x7dozWucIDM' },
  { title: 'Oración final de fe y protección', reflection: 'Al terminar estos siete días, conserva en tu corazón la oración como un refugio cotidiano de fe, gratitud y protección.', prayer: 'Señor, recibe mi gratitud por este camino. Permanece junto a mí y a quienes amo; que la fe, la paz y la protección acompañen cada uno de nuestros días. Amén.', video: 'https://www.youtube.com/watch?v=-9XFPpwnme4' },
]

const additionalProducts = [
  ['Enseñanzas de alto control', '/ensenanzas-alto-control'],
  ['Consultoría individual', '/consultoria-individual'],
  ['Acelerador de abundancia', '/acelerador-abundancia'],
]

export default function Page() {
  const [screen, setScreen] = useState<'home' | 'member'>('home')
  const [selectedDay, setSelectedDay] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const progress = Math.round((completed.length / days.length) * 100)

  if (screen === 'member') {
    return <MemberArea selectedDay={selectedDay} setSelectedDay={setSelectedDay} completed={completed} setCompleted={setCompleted} progress={progress} onHome={() => setScreen('home')} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <button className="brand brand-button" onClick={() => setScreen('home')} aria-label="Oración de San Benito, inicio"><span className="brand-mark">✦</span><span>ORACIÓN DE<br /><em>SAN BENITO</em></span></button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          {additionalProducts.map(([label, href]) => <a className="nav-service" href={href} key={href}>{label}</a>)}
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      <section className="saint-hero">
        <div className="saint-hero-image"><img src={saintBenedictImage} alt="San Benito con la cruz y la Regla de San Benito" /></div>
        <div className="saint-hero-copy"><p className="eyebrow">Un camino de fe · 7 días</p><h1>Oración de<br /><i>San Benito</i></h1><p className="hero-subtitle">7 días de oración, fe y protección</p><p className="hero-text">Durante los próximos 7 días, dedica un momento especial a la oración, la reflexión y el fortalecimiento de tu fe, acompañado por la inspiración espiritual de San Benito.</p><button className="gold-button" onClick={() => setScreen('member')}>Comenzar mi camino de oración <ArrowRight size={17} /></button></div>
      </section>
      <section className="faith-intro section-wrap"><div className="section-kicker">01 / El camino</div><div className="intro-grid"><h2>Un momento de<br /><i>fe y protección.</i></h2><p className="lead">Siete días para hacer una pausa, elevar tu oración y acercarte a Dios con un corazón sereno.</p></div><div className="feature-row"><Feature num="01" title="Oración diaria" text="Un espacio breve para recogerte y confiar." /><Feature num="02" title="Reflexión espiritual" text="Palabras originales para acompañar tu día." /><Feature num="03" title="A tu ritmo" text="Avanza con calma desde cualquier dispositivo." /></div></section>
      <section className="path-section section-wrap"><div className="section-kicker">02 / Siete días</div><h2>Una práctica sencilla.<br /><i>Una fe más firme.</i></h2><div className="day-preview-grid">{days.map((day, index) => <button key={day.title} className="day-preview" onClick={() => { setSelectedDay(index); setScreen('member') }}><span>DÍA {String(index + 1).padStart(2, '0')}</span><h3>{day.title}</h3><ArrowRight size={17} /></button>)}</div></section>
      <section className="faq-section section-wrap"><div className="section-kicker">03 / Preguntas frecuentes</div><div className="faq-grid"><h2>Antes de<br /><i>comenzar.</i></h2><div>{['¿Cómo funciona el camino?', '¿Cuánto dura cada día?', '¿Puedo repetir una oración?'].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)} aria-expanded={faqOpen === index}><span>{question}</span>{faqOpen === index ? <ChevronDown /> : <ChevronRight />}</button>{faqOpen === index && <p>{['Durante siete días encontrarás una reflexión, una oración y un video para acompañar tu momento de fe.', 'Cada día está pensado para una pausa tranquila, sin prisas ni exigencias.', 'Sí. Puedes volver a cualquier día siempre que necesites fortalecer tu oración.'][index]}</p>}</div>)}</div></div></section>
      <section className="products-section section-wrap"><div className="section-kicker">También disponible</div><h2>Otros espacios<br /><i>para tu camino.</i></h2><div className="product-links">{additionalProducts.map(([label, href]) => <a href={href} key={href}>{label}<ArrowRight size={16} /></a>)}</div></section>
      <footer className="site-footer"><span>ORACIÓN DE SAN BENITO</span><p>Un espacio de fe, oración y protección.</p></footer>
    </main>
  )
}

function MemberArea({ selectedDay, setSelectedDay, completed, setCompleted, progress, onHome, menuOpen, setMenuOpen }: any) {
  const day = days[selectedDay]
  const isComplete = completed.includes(selectedDay)
  const markComplete = () => { if (!isComplete) setCompleted([...completed, selectedDay]) }
  const selectDay = (index: number) => setSelectedDay(index)
  return <main className="app-shell"><header className="app-header"><button className="brand brand-button" onClick={onHome}><span className="brand-mark">✦</span><span>ORACIÓN DE<br /><em>SAN BENITO</em></span></button><nav className="app-nav"><button className="active">Mi camino</button><button>Mi perfil</button></nav><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button></header><div className="app-content"><section className="member-welcome"><div><p className="eyebrow">Tu área de miembros</p><h1>Tu camino de fe<br /><i>y protección.</i></h1><p>Avanza un día a la vez, con oración y confianza.</p></div><div className="progress-card"><span>PROGRESO</span><strong>{progress}%</strong><div className="progress-track"><i style={{ width: `${progress}%` }} /></div><small>{completed.length} de 7 días completados</small></div></section><section className="day-selector" aria-label="Los siete días">{days.map((item, index) => <button key={item.title} className={selectedDay === index ? 'selected' : ''} onClick={() => selectDay(index)}><span>{completed.includes(index) ? <Check size={14} /> : String(index + 1).padStart(2, '0')}</span><small>Día {index + 1}</small></button>)}</section><article className="daily-prayer"><div className="prayer-heading"><span className="section-kicker">DÍA {String(selectedDay + 1).padStart(2, '0')} / ORACIÓN</span><h2>{day.title}</h2></div><div className="prayer-copy"><div><h3>Reflexión</h3><p>{day.reflection}</p><h3>Oración</h3><p className="prayer-text">{day.prayer}</p></div><PremiumYouTubePlayer url={day.video} title={day.title} /></div><div className="prayer-actions"><button className="gold-button" onClick={markComplete}>{isComplete ? <><Check size={17} /> Día completado</> : <>Marcar como completado <Check size={17} /></>}</button><a className="text-button" href={day.video} target="_blank" rel="noreferrer">Ver en YouTube <ArrowRight size={16} /></a><div className="day-navigation"><button disabled={selectedDay === 0} onClick={() => setSelectedDay(selectedDay - 1)} aria-label="Día anterior"><ChevronLeft /></button><button disabled={selectedDay === days.length - 1} onClick={() => setSelectedDay(selectedDay + 1)} aria-label="Día siguiente"><ChevronRight /></button></div></div></article></div></main>
}

function Feature({ num, title, text }: { num: string; title: string; text: string }) { return <div className="feature"><span>{num}</span><h3>{title}</h3><p>{text}</p></div> }
