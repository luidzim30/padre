'use client'

import { useState, type FormEvent } from 'react'
import { Gift, ShieldCheck } from 'lucide-react'

type Language = 'es' | 'en'

type ExclusiveGiftSectionProps = {
  language: Language
  completedDays: number
  totalDays: number
  bookCoverSrc?: string
}

type BookCoverProps = {
  src?: string
  alt: string
  placeholderLabel: string
}

const recipient = 'frequenciadivina007@gmail.com'
const bookCoverSources: Record<Language, string> = {
  es: '/frecuencia-divina-cover.png',
  en: '/divine-frequency-cover.png',
}

const giftCopy = {
  es: {
    eyebrow: 'UN REGALO ESPECIAL PARA TI',
    title: '¡Completa tus 7 días de oración y recibe un regalo especial en tu hogar!',
    description: 'Al completar los 7 días de oración a San Benito, podrás solicitar tu regalo especial: el libro FRECUENCIA DIVINA, con las oraciones secretas de San Benito. Un regalo de fe y protección para acompañarte en tu camino espiritual.',
    highlight: 'Tu libro de regalo te espera al finalizar los 7 días.',
    formTitle: '¿Dónde deseas recibir tu libro?',
    formDescription: 'Completa tus datos de envío para solicitar tu ejemplar.',
    fields: {
      fullName: 'Nombre completo',
      email: 'Correo electrónico',
      country: 'País',
      region: 'Estado / Provincia',
      city: 'Ciudad',
      postalCode: 'Código postal',
      address: 'Dirección completa (calle, número y complemento)',
      phone: 'Teléfono de contacto (opcional)',
    },
    submit: 'SOLICITAR MI LIBRO DE REGALO',
    emailInstruction: 'Tu solicitud se preparará en un correo electrónico. Debes pulsar Enviar en tu aplicación de correo para completar la solicitud.',
    privacy: 'Tu dirección se utilizará únicamente para procesar la solicitud del libro. Este sitio no almacena los datos del formulario; se incluirán en un correo electrónico que podrás revisar y enviar.',
    lockedHeading: 'Tu regalo te espera al completar los 7 días.',
    remaining: (count: number) => `Te ${count === 1 ? 'falta' : 'faltan'} ${count} ${count === 1 ? 'día' : 'días'} de oración para desbloquear la solicitud de tu libro.`,
    progress: (completed: number, total: number) => `${completed} de ${total} días completados`,
    requiredError: 'Completa este campo para continuar.',
    notProvided: 'No indicado',
    emailPrepared: 'Tu solicitud está preparada en un correo electrónico. Revisa los datos y pulsa Enviar para completar la solicitud.',
    coverAlt: 'Portada del libro FRECUENCIA DIVINA con una ilustración de San Benito.',
    coverPlaceholder: 'Portada de FRECUENCIA DIVINA',
    bodyTitle: 'Solicitud del libro FRECUENCIA DIVINA — 7 días de oración',
  },
  en: {
    eyebrow: 'A SPECIAL GIFT FOR YOU',
    title: 'Complete your 7 days of prayer and receive a special gift at home!',
    description: 'After completing the 7 days of prayer to Saint Benedict, you can request your special gift: the book DIVINE FREQUENCY, featuring the secret prayers of Saint Benedict. A gift of faith and protection to accompany you on your spiritual journey.',
    highlight: 'Your gift book awaits you after completing all 7 days.',
    formTitle: 'Where would you like to receive your book?',
    formDescription: 'Enter your shipping details to request your copy.',
    fields: {
      fullName: 'Full name',
      email: 'Email address',
      country: 'Country',
      region: 'State / Province',
      city: 'City',
      postalCode: 'Postal code',
      address: 'Full shipping address (street, number, apartment or additional details)',
      phone: 'Contact phone (optional)',
    },
    submit: 'REQUEST MY FREE GIFT BOOK',
    emailInstruction: 'Your request will be prepared in an email. You must click Send in your email app to complete it.',
    privacy: 'Your address will only be used to process your book request. This site does not store your form details; they will be included in an email for you to review and send.',
    lockedHeading: 'Your gift will be waiting after all 7 days are complete.',
    remaining: (count: number) => `Complete ${count} more ${count === 1 ? 'day' : 'days'} of prayer to unlock your book request.`,
    progress: (completed: number, total: number) => `${completed} of ${total} days completed`,
    requiredError: 'Please complete this field.',
    notProvided: 'Not provided',
    emailPrepared: 'Your request is ready in an email. Review the details and click Send to complete your request.',
    coverAlt: 'DIVINE FREQUENCY book cover featuring an illustration of Saint Benedict.',
    coverPlaceholder: 'DIVINE FREQUENCY book cover',
    bodyTitle: 'DIVINE FREQUENCY Book Request — 7 Days of Prayer',
  },
} satisfies Record<Language, {
  eyebrow: string
  title: string
  description: string
  highlight: string
  formTitle: string
  formDescription: string
  fields: Record<'fullName' | 'email' | 'country' | 'region' | 'city' | 'postalCode' | 'address' | 'phone', string>
  submit: string
  emailInstruction: string
  privacy: string
  lockedHeading: string
  remaining: (count: number) => string
  progress: (completed: number, total: number) => string
  requiredError: string
  notProvided: string
  emailPrepared: string
  coverAlt: string
  coverPlaceholder: string
  bodyTitle: string
}>

export function BookCover({ src, alt, placeholderLabel }: BookCoverProps) {
  return (
    <div className="gift-book-cover">
      {src ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" />
      ) : (
        <div className="gift-book-cover-placeholder" role="img" aria-label={alt}>
          <span>{placeholderLabel}</span>
        </div>
      )}
    </div>
  )
}

export function ExclusiveGiftSection({ language, completedDays, totalDays, bookCoverSrc }: ExclusiveGiftSectionProps) {
  const [emailPrepared, setEmailPrepared] = useState(false)
  const copy = giftCopy[language]
  const daysRemaining = Math.max(totalDays - completedDays, 0)
  const isUnlocked = daysRemaining === 0

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const requiredFields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]'))

    requiredFields.forEach((field) => {
      field.setCustomValidity(field.value.trim() ? '' : copy.requiredError)
    })

    if (!form.reportValidity()) return

    const data = new FormData(form)
    const getValue = (key: string) => String(data.get(key) ?? '').trim()
    const values = {
      fullName: getValue('fullName'),
      email: getValue('email'),
      country: getValue('country'),
      region: getValue('region'),
      city: getValue('city'),
      postalCode: getValue('postalCode'),
      address: getValue('address'),
      phone: getValue('phone') || copy.notProvided,
    }
    const subject = language === 'es'
      ? 'Solicitud de Libro Frecuencia Divina - 7 Días de Oración'
      : 'Divine Frequency Book Request - 7 Days of Prayer'
    const body = [
      copy.bodyTitle,
      '',
      `${copy.fields.fullName}: ${values.fullName}`,
      `${copy.fields.email}: ${values.email}`,
      `${copy.fields.country}: ${values.country}`,
      `${copy.fields.region}: ${values.region}`,
      `${copy.fields.city}: ${values.city}`,
      `${copy.fields.postalCode}: ${values.postalCode}`,
      `${copy.fields.address}: ${values.address}`,
      `${copy.fields.phone}: ${values.phone}`,
    ].join('\n')

    setEmailPrepared(true)
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="exclusive-gift-section" aria-labelledby="exclusive-gift-title">
      <div className="exclusive-gift-intro">
        <span className="exclusive-gift-mark" aria-hidden="true"><Gift /></span>
        <div>
          <p className="exclusive-gift-eyebrow">{copy.eyebrow}</p>
          <h2 id="exclusive-gift-title" className="exclusive-gift-title">{copy.title}</h2>
          <p className="exclusive-gift-description">{copy.description}</p>
        </div>
      </div>

      <div className="exclusive-gift-layout">
        <BookCover src={bookCoverSrc ?? bookCoverSources[language]} alt={copy.coverAlt} placeholderLabel={copy.coverPlaceholder} />
        <div className="exclusive-gift-details">
          <p className="exclusive-gift-highlight">{copy.highlight}</p>

          {isUnlocked ? (
            <form
              className="exclusive-gift-form"
              onSubmit={handleSubmit}
              onInput={(event) => {
                const field = event.target
                if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) field.setCustomValidity('')
              }}
            >
              <div className="exclusive-gift-form-heading">
                <h3>{copy.formTitle}</h3>
                <p>{copy.formDescription}</p>
              </div>

              <div className="exclusive-gift-fields">
                <label className="exclusive-gift-field" htmlFor="gift-full-name">
                  <span>{copy.fields.fullName}</span>
                  <input id="gift-full-name" name="fullName" type="text" autoComplete="name" required />
                </label>
                <label className="exclusive-gift-field" htmlFor="gift-email">
                  <span>{copy.fields.email}</span>
                  <input id="gift-email" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="exclusive-gift-field" htmlFor="gift-country">
                  <span>{copy.fields.country}</span>
                  <input id="gift-country" name="country" type="text" autoComplete="country-name" required />
                </label>
                <label className="exclusive-gift-field" htmlFor="gift-region">
                  <span>{copy.fields.region}</span>
                  <input id="gift-region" name="region" type="text" autoComplete="address-level1" required />
                </label>
                <label className="exclusive-gift-field" htmlFor="gift-city">
                  <span>{copy.fields.city}</span>
                  <input id="gift-city" name="city" type="text" autoComplete="address-level2" required />
                </label>
                <label className="exclusive-gift-field" htmlFor="gift-postal-code">
                  <span>{copy.fields.postalCode}</span>
                  <input id="gift-postal-code" name="postalCode" type="text" autoComplete="postal-code" required />
                </label>
                <label className="exclusive-gift-field exclusive-gift-field-wide" htmlFor="gift-address">
                  <span>{copy.fields.address}</span>
                  <textarea id="gift-address" name="address" autoComplete="street-address" rows={3} required />
                </label>
                <label className="exclusive-gift-field exclusive-gift-field-wide" htmlFor="gift-phone">
                  <span>{copy.fields.phone}</span>
                  <input id="gift-phone" name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>

              <button className="gold-button exclusive-gift-submit" type="submit">{copy.submit}</button>
              <p className="exclusive-gift-instruction">{copy.emailInstruction}</p>
              {emailPrepared && <p className="exclusive-gift-status" role="status" aria-live="polite">{copy.emailPrepared}</p>}
              <p className="exclusive-gift-privacy"><ShieldCheck aria-hidden="true" />{copy.privacy}</p>
            </form>
          ) : (
            <div className="exclusive-gift-locked" role="status" aria-live="polite">
              <span className="exclusive-gift-remaining" aria-hidden="true">{daysRemaining}</span>
              <div>
                <h3>{copy.lockedHeading}</h3>
                <p>{copy.remaining(daysRemaining)}</p>
                <span className="exclusive-gift-progress">{copy.progress(completedDays, totalDays)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
