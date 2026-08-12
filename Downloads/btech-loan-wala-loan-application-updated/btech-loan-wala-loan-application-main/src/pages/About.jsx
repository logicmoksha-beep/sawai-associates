import { Link } from 'react-router-dom'
import { Shield, Users, Target, Award, HeartHandshake, TrendingUp } from 'lucide-react'

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div>
              <h2>Who We Are</h2>
              <p style={{ color: 'var(--text-2)', fontSize: 16 }}>
                BTech loan_wala  LLP aims to make financing simple, transparent and accessible.
                We facilitate loan assistance across a wide range of loan products by connecting
                you with our network of trusted banks and NBFCs.
              </p>
              <p style={{ color: 'var(--text-2)', fontSize: 16 }}>
                Our team focuses on trusted guidance, personalized support and a customer-first
                approach. We believe every financial goal deserves reliable, expert-backed assistance.
              </p>

              <h3 style={{ marginTop: 28 }}>Our Values</h3>
              <ul className="detail-list">
                <li><Shield size={18} color="var(--blue)" /> <span><strong>Integrity</strong> — Honest, transparent guidance every step of the way.</span></li>
                <li><Award size={18} color="var(--blue)" /> <span><strong>Professionalism</strong> — Expert-backed loan assistance you can trust.</span></li>
                <li><TrendingUp size={18} color="var(--blue)" /> <span><strong>Excellence</strong> — A commitment to quality service and reliable outcomes.</span></li>
              </ul>
            </div>

            <div>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="card"><Users size={22} color="var(--blue)" /><h4 style={{ margin: '10px 0 6px' }}>Customer First</h4><p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0 }}>Personalized support tailored to you.</p></div>
                <div className="card"><HeartHandshake size={22} color="var(--blue)" /><h4 style={{ margin: '10px 0 6px' }}>Trusted Guidance</h4><p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0 }}>Advice you can rely on.</p></div>
                <div className="card"><Target size={22} color="var(--blue)" /><h4 style={{ margin: '10px 0 6px' }}>Focused Solutions</h4><p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0 }}>Right loan for your profile.</p></div>
                <div className="card"><Shield size={22} color="var(--blue)" /><h4 style={{ margin: '10px 0 6px' }}>Reliable Service</h4><p style={{ fontSize: 14, color: 'var(--text-2)', margin: 0 }}>Consistent, professional support.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: 12 }}>Our <span style={{ color: 'var(--blue)' }}>Mission</span></h2>
          <p style={{ color: 'var(--text-2)', maxWidth: 720, margin: '0 auto 24px', fontSize: 16 }}>
            To make loans simple, transparent and accessible for every customer through expert guidance and trusted partnerships.
          </p>
          <Link to="/apply-now" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </>
  )
}
