import { useState } from "react";
import FormSuccess from "../components/FormSuccess";

export default function BusinessInsurance() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); setTimeout(() => setSubmitted(false), 4000); };

  return (
    <div className="service-page">
      <div className="page-hero">
        <div className="container">
          <h1>Business Insurance</h1>
          <p>
            Protect your business from financial risks, liabilities, property
            damage, employee-related risks, and unforeseen losses.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail-card">
            <h2>Get a Business Insurance Quote</h2>

            <p>
              Tell us about your business and our team will recommend the right
              cover for your needs and budget.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Business Name" />
              <input type="text" placeholder="Contact Person" />
              <input type="tel" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" placeholder="Email Address" />

              <textarea
                rows="5"
                placeholder="Tell us about your business insurance requirement"
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