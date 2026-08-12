import { Link } from 'react-router-dom'
import { Check, Building, Phone, MessageCircle, MapPin } from 'lucide-react'
import { getLoanBySlug } from '../data/loanData.js'

export default function ProjectFunding() {
  const loan = getLoanBySlug('project-funding')
  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  const wa = `https://wa.me/91${import.meta.env.VITE_WHATSAPP_NUMBER || '7276063476'}?text=${encodeURIComponent(`Hello, I'd like to enquire about ${loan?.name}.`)}`

  if (!loan) return <section className="section container"><h2>Loan not found</h2></section>

  return (
    <>
      {/* Hero section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--navy) 0%, var(--blue) 100%)', color: '#fff', marginTop: 0 }}>
        <div className="container" style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(244,180,0,.2)', color: 'var(--yellow)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Building size={32} />
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 3.6vw, 42px)', marginBottom: 12 }}>Project Funding</h1>
          <h2 style={{ color: 'var(--yellow)', fontSize: 'clamp(20px, 2.4vw, 28px)', marginBottom: 12 }}>Powering Your Construction Projects</h2>
          <p style={{ color: '#d8e2f2', maxWidth: 720, margin: '0 auto', fontSize: 16 }}>Get the financial support you need to start, develop, or complete your construction project. BTech loan_wala  provides customized funding solutions for builders and developers with expert guidance throughout the financing process.</p>
        </div>
      </section>

      {/* Eligibility + Benefits */}
      <section className="section">
        <div className="container detail-grid">
          <div>
            <h3>Eligibility</h3>
            <ul className="detail-list">
              {loan.eligibility.map((e, i) => (
                <li key={i}><Check size={18} /> <span>{e}</span></li>
              ))}
            </ul>

            <h3 style={{ marginTop: 28 }}>Benefits & Features</h3>
            <ul className="detail-list">
              {loan.benefits.map((b, i) => (
                <li key={i}><Check size={18} /> <span>{b}</span></li>
              ))}
            </ul>

            <p style={{ color: 'var(--text-2)', fontSize: 16, marginTop: 24 }}>
              From planning to completion, we help turn your construction projects into reality.
            </p>

            <div className="disclaimer">
              * Terms & conditions apply. Loan approval, interest rates, tenure and loan amount are subject to lender eligibility, credit assessment, documentation and applicable policies. BTech loan_wala  LLP facilitates loan assistance and does not guarantee approval.
            </div>
          </div>

          <aside>
            <div className="info-card">
              <h4>Get Started With {loan.name}</h4>
              <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Tenure: {loan.tenure}</p>
              <Link to="/eligibility" className="btn btn-primary">Check Eligibility</Link>
              <Link to={`/apply-now?type=${loan.id}`} className="btn btn-navy">Apply Now</Link>
              <a href={`tel:${phone}`} className="btn btn-outline"><Phone size={16} /> Call {phone}</a>
              <a href={wa} target="_blank" rel="noreferrer" className="btn btn-outline"><MessageCircle size={16} /> WhatsApp</a>
            </div>

            <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 20, marginTop: 16, textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 10, background: 'rgba(30,95,191,.1)', color: 'var(--blue)', marginBottom: 8 }}>
                <MapPin size={20} />
              </div>
              <h4 style={{ fontSize: 16, marginBottom: 4 }}>Pan-India Service</h4>
              <p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0 }}>Loan assistance available across India</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}