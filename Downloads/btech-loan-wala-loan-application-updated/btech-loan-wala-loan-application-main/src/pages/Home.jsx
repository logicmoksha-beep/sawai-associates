import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import LoanCard from '../components/LoanCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import FAQ from '../components/FAQ.jsx'
import EmiCalculatorInline from '../components/EmiCalculatorInline.jsx'
import EligibilityInline from '../components/EligibilityInline.jsx'
import { loanProducts } from '../data/loanData.js'
import { faqData } from '../data/faqData.js'
import { banks } from '../data/bankData.js'

export default function Home() {
  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  const topmate = import.meta.env.VITE_TOPMATE_URL || '#'

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <span className="hero-eyebrow">Your Dreams, Our Support</span>
            <h1>Find the Right Loan for <span className="accent">Your Financial Needs</span></h1>
            <p className="lead">Get trusted loan assistance with personalized guidance, flexible options and a simple application process.</p>
            <div className="hero-cta">
              <Link to="/apply-now" className="btn btn-primary">Apply Now <ArrowRight size={16} /></Link>
              <Link to="/eligibility" className="btn btn-outline">Check Eligibility</Link>
            </div>
            <div className="hero-benefits">
              <span><Check size={16} /> Quick Assistance</span>
              <span><Check size={16} /> Minimal Documentation</span>
              <span><Check size={16} /> Competitive Loan Options</span>
              <span><Check size={16} /> Expert Support</span>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80"
              alt="Trusted loan assistance"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Loan Products */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Our" accent="Loan Products" subtitle="Explore a wide range of loan products tailored to your financial goals." />
          <div className="loan-grid">
            {loanProducts.map(l => <LoanCard key={l.id} loan={l} />)}
          </div>
        </div>
      </section>

      {/* EMI + Eligibility */}
      <section className="section section-bg">
        <div className="container home-tools-grid">
          <EmiCalculatorInline />
          <EligibilityInline />
        </div>
      </section>

      {/* Why Choose */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Why Choose" accent="BTech loan_wala ?" subtitle="A partner you can rely on for trusted, transparent loan assistance." />
          <div className="why-grid">
            {[
              { t: 'Multiple Bank & NBFC Options', d: 'Wide network of trusted lenders' },
              { t: 'Competitive Loan Options', d: 'Choose the best suited to you' },
              { t: 'Quick Loan Processing', d: 'Fast approval turnaround' },
              { t: 'End-to-End Documentation Support', d: 'We help at every step' },
              { t: 'Transparent Financial Guidance', d: 'No hidden surprises' },
              { t: 'Personalized Loan Solutions', d: 'Tailored to your profile' },
              { t: 'Pan India Service', d: 'Loan assistance available accross india' },
              { t: 'Expert Support', d: 'Talk to a finance expert' }
            ].map((x, i) => (
              <div className="why-item" key={i}>
                <div className="ic"><Check size={22} /></div>
                <h4>{x.t}</h4>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfied Customers */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Our Satisfied" accent="Customers" subtitle="Trusted by customers who found the right loan with our expert guidance." />
          <div className="customers-grid">
            {['Ram Waghmare', 'Jyotiram Ghadge', 'Navnath Tikode'].map((name, i) => (
              <div className="customer-card" key={i}>
                <div className="customer-avatar">{name.split(' ').map(n => n[0]).join('')}</div>
                <h4>{name}</h4>
                <p>Happy Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section-bg">
        <div className="container">
          <SectionTitle title="How It" accent="Works" subtitle="A simple, guided journey to your ideal loan option." />
          <div className="steps">
            {['Apply Online','Share Your Details','Get Expert Review','Proceed With Suitable Loan Option'].map((s, i) => (
              <div className="step" key={i}>
                <div className="num">{i + 1}</div>
                <h4>{s}</h4>
                <p>Simple and transparent process guided by our finance experts.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banks */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Our Banking &amp; Financial" accent="Connections" subtitle="We work with leading banks and NBFCs to bring you the right options." />
          <div className="banks-grid">
            {banks.map(b => <div key={b} className="bank-chip">{b}</div>)}
          </div>
          <p style={{ textAlign: 'center', marginTop: 20, color: 'var(--muted)', fontSize: 13 }}>
            Names shown are for reference. Loan approval is subject to individual lender policies.
          </p>
        </div>
      </section>

      {/* Founder CTA */}
      <section className="section">
        <div className="container">
          <div className="founder-cta">
            <div>
              <h3>Need Guidance With Your Loan?</h3>
              <p>Not sure which loan option is right for you? Get personalized guidance from our finance expert.</p>
            </div>
            <a href={topmate} target="_blank" rel="noreferrer" className="btn btn-yellow">Talk to an Expert</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionTitle title="Frequently Asked" accent="Questions" subtitle="Everything you need to know before you apply." />
          <FAQ items={faqData.slice(0, 6)} />
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <Link to="/faq" className="btn btn-outline">View All FAQs</Link>
          </div>
        </div>
      </section>

      {/* Callback / CTA banner */}
      <section className="section">
        <div className="container">
          <div className="callback-banner">
            <div>
              <h3>Have Questions? We're Here to Help!</h3>
              <p>Our loan experts are ready to assist you. Get in touch with us today.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href={`tel:${phone}`} className="btn btn-yellow">Call {phone}</a>
                <Link to="/contact-us" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Contact Us</Link>
              </div>
            </div>
            <CallbackForm />
          </div>
        </div>
      </section>
    </>
  )
}

function CallbackForm() {
  return (
    <div className="card-form">
      <h4 style={{ color: '#fff', marginBottom: 16 }}>Request a Call Back</h4>
      <div className="form-row">
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Mobile Number" />
      </div>
      <div className="form-group">
        <select defaultValue="">
          <option value="" disabled>Select Loan Type</option>
          {loanProducts.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
        </select>
      </div>
      <button className="btn btn-yellow btn-block" type="button">Request Call Back <ArrowRight size={16} /></button>
    </div>
  )
}
