import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { submitToSheet } from '../services/sheetsService.js'

const initial = { fullName: '', mobile: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ ok: null, message: '', loading: false })

  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'info@btechloanwala.com'
  const wa = `https://wa.me/91${import.meta.env.VITE_WHATSAPP_NUMBER || '7276063476'}?text=${encodeURIComponent('Hello BTech loan_wala , I would like to enquire about a loan.')}`
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Vikas Chowk, Karve Nagar, Pune 411052')

  const set = (k, v) => setForm({ ...form, [k]: v })

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!/^\d{10}$/.test(form.mobile)) e.mobile = 'Enter a valid 10-digit number'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Please write your message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate() || status.loading) return
    setStatus({ ok: null, message: '', loading: true })
    const res = await submitToSheet('contact', form)
    setStatus({
      ok: res.ok,
      message: res.ok ? 'Thank you! We will get back to you shortly.' : (res.message || 'Submission failed.'),
      loading: false
    })
    if (res.ok) setForm(initial)
  }

  return (
    <>
      <section className="section">
        <div className="container contact-grid">
          <div>
            <h3>Contact Information</h3>
            <div className="contact-info-item">
              <div className="ic"><Phone size={20} /></div>
              <div><strong>Phone</strong><a href={`tel:${phone}`}>{phone}</a></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><Mail size={20} /></div>
              <div><strong>Email</strong><a href={`mailto:${email}`}>{email}</a></div>
            </div>
            <div className="contact-info-item">
              <div className="ic"><MapPin size={20} /></div>
              <div>
                <strong>Address</strong>
                <p>
                  <a href={mapsUrl} target="_blank" rel="noreferrer">Vikas Chowk, Karve Nagar, Pune – 411052</a>
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              <a href={`tel:${phone}`} className="btn btn-primary"><Phone size={16} /> Call Us</a>
              <a href={`mailto:${email}`} className="btn btn-outline"><Mail size={16} /> Email</a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn btn-navy"><MessageCircle size={16} /> WhatsApp</a>
            </div>

            <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-placeholder" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <MapPin size={20} style={{ marginRight: 8 }} /> Map — Vikas Chowk, Karve Nagar, Pune
            </a>
          </div>

          <div className="card card-lg">
            <h3>Send Us a Message</h3>
            <form onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={form.fullName} onChange={e => set('fullName', e.target.value)} />
                {errors.fullName && <div className="error">{errors.fullName}</div>}
              </div>
              <div className="form-row">
                <div>
                  <label>Mobile</label>
                  <input type="tel" value={form.mobile} onChange={e => set('mobile', e.target.value)} />
                  {errors.mobile && <div className="error">{errors.mobile}</div>}
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} />
                  {errors.email && <div className="error">{errors.email}</div>}
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" value={form.subject} onChange={e => set('subject', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea value={form.message} onChange={e => set('message', e.target.value)} />
                {errors.message && <div className="error">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-primary btn-block" disabled={status.loading}>
                {status.loading ? 'Sending…' : <>Send Message <ArrowRight size={16} /></>}
              </button>
              {status.message && (
                <div className={status.ok ? 'success' : 'error'} style={{ marginTop: 10, textAlign: 'center' }}>{status.message}</div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
