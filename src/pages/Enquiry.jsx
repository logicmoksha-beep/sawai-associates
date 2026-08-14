import { useState } from 'react'

export default function Enquiry() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="page">
        <div className="page__hero">
          <h1 className="page__title">Enquiry Submitted</h1>
          <p className="page__subtitle">
            Thank you! Our team will route your request to the right department
            and get back to you shortly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="page">
      <div className="page__hero">
        <h1 className="page__title">Get Enquiry</h1>
        <p className="page__subtitle">
          Tell us what you need — we will point you to the right team.
        </p>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__field">
          <span>Service</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service…
            </option>
            <option value="insurance">Insurance</option>
            <option value="real-estate">Real Estate</option>
            <option value="it-services">IT Services</option>
          </select>
        </label>

        <label className="form__field">
          <span>Full name</span>
          <input type="text" name="name" required placeholder="Your name" />
        </label>

        <label className="form__field">
          <span>Email</span>
          <input type="email" name="email" required placeholder="you@example.com" />
        </label>

        <label className="form__field">
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+91-00000-00000" />
        </label>

        <label className="form__field">
          <span>Message</span>
          <textarea name="message" rows="4" placeholder="Tell us about your requirement…" />
        </label>

        <button type="submit" className="btn btn--primary">
          Submit Enquiry
        </button>
      </form>
    </section>
  )
}