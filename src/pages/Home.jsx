import { Link } from 'react-router-dom'

const SERVICES = [
  {
    title: 'Insurance',
    desc: 'Health, life, motor, travel and home cover tailored to your needs.',
    path: '/insurance/health',
    cta: 'Insurance plans',
  },
  {
    title: 'Real Estate',
    desc: 'Buy, sell or rent residential and commercial properties with confidence.',
    path: '/real-estate/buy',
    cta: 'Browse properties',
  },
  {
    title: 'IT Services',
    desc: 'Web, mobile, software and consultancy solutions for modern business.',
    path: '/it-services/web-development',
    cta: 'Explore tech services',
  },
]

export default function Home() {
  return (
    <section className="page">
      <div className="page__hero page__hero--home">
        <h1 className="page__title">Welcome to Sawai Associates</h1>
        <p className="page__subtitle">
          Insurance · Real Estate · IT Services — three businesses, one portal.
        </p>
        <div className="page__hero-actions">
          <Link className="btn btn--primary" to="/enquiry">
            Get Enquiry
          </Link>
          <Link className="btn btn--ghost" to="/about">
            About Us
          </Link>
        </div>
      </div>

      <div className="cards">
        {SERVICES.map((s) => (
          <div className="card" key={s.title}>
            <h2 className="card__title">{s.title}</h2>
            <p className="card__desc">{s.desc}</p>
            <Link className="card__link" to={s.path}>
              {s.cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
