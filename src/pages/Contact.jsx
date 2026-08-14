import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section className="page">
      <div className="page__hero">
        <h1 className="page__title">Contact Us</h1>
        <p className="page__subtitle">We would love to hear from you.</p>
      </div>
      <div className="page__body">
        <p>
          Reach out to our teams for Insurance, Real Estate or IT Services. For
          a quick response, submit an enquiry and our team will route it to the
          right department.
        </p>
        <ul className="page__features">
          <li>Email: hello@sawai-associates.example</li>
          <li>Phone: +91-00000-00000</li>
          <li>Office: Your City, India</li>
        </ul>
        <Link className="btn btn--primary" to="/enquiry">
          Get Enquiry
        </Link>
      </div>
    </section>
  )
}
