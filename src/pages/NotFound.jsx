import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page">
      <div className="page__hero">
        <h1 className="page__title">404 — Page not found</h1>
        <p className="page__subtitle">The page you are looking for does not exist.</p>
      </div>
      <div className="page__body">
        <Link className="btn btn--primary" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
