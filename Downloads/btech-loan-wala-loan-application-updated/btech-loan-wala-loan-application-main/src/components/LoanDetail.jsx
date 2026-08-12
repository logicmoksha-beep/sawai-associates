import { Link } from 'react-router-dom'
import { Check, Phone, MessageCircle } from 'lucide-react'
import { getLoanBySlug } from '../data/loanData.js'

export default function LoanDetail({ slug }) {
  const loan = getLoanBySlug(slug)
  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  const wa = `https://wa.me/91${import.meta.env.VITE_WHATSAPP_NUMBER || '7276063476'}?text=${encodeURIComponent(`Hello, I'd like to enquire about ${loan?.name}.`)}`

  if (!loan) return <section className="section container"><h2>Loan not found</h2></section>

  return (
    <>
      <section className="section">
        <div className="container detail-grid">
          <div>
            <h3>Eligibility</h3>
            <ul className="detail-list">
              {loan.eligibility.map((e, i) => (
                <li key={i}><Check size={18} /> <span>{e}</span></li>
              ))}
            </ul>

            <h3 style={{ marginTop: 28 }}>Benefits &amp; Features</h3>
            <ul className="detail-list">
              {loan.benefits.map((b, i) => (
                <li key={i}><Check size={18} /> <span>{b}</span></li>
              ))}
            </ul>

            <div className="disclaimer">
              * Terms &amp; conditions apply. Loan approval, interest rates, tenure and loan amount are subject to lender eligibility, credit assessment, documentation and applicable policies. BTech loan_wala  LLP facilitates loan assistance and does not guarantee approval.
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
          </aside>
        </div>
      </section>
    </>
  )
}
