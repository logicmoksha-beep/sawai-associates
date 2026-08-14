import { Link } from 'react-router-dom'

export default function ServicePage({
  title,
  subtitle,
  intro,
  features = [],
}) {
  return (
    <section className="page">
      <div className="page__hero">
        <h1 className="page__title">{title}</h1>
        {subtitle && <p className="page__subtitle">{subtitle}</p>}
      </div>
      <div className="page__body">
        <p>{intro}</p>
        {features.length > 0 && (
          <ul className="page__features">
            {features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        <Link className="btn btn--primary" to="/enquiry">
          Get an Enquiry
        </Link>
      </div>
    </section>
  )
}
