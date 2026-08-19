import { useState } from "react";
import FormSuccess from "../components/FormSuccess";

export default function HealthInsurance() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); setTimeout(() => setSubmitted(false), 4000); };

  return (
    <div className="service-page">
      <div className="page-hero">
        <div className="container">
          <h1>Health Insurance</h1>
          <p>
            Get complete health coverage for yourself and your family with our
            affordable health insurance plans.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail-card">
            <h2>Get a Health Insurance Quote</h2>

            <p>
              Fill in your details below and our team will reach out with the
              best health insurance plans tailored to your needs.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="City" />

              <textarea
                rows="5"
                placeholder="Tell us about your health insurance requirement"
              ></textarea>

              <button type="submit" className="btn primary">
                Request Quote
              </button>
            </form>
            <FormSuccess show={submitted} />
          </div>
        </div>
      </section>
    </div>
  );
}