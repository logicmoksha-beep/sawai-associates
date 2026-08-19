import { useState } from "react";
import FormSuccess from "../components/FormSuccess";

export default function MotorInsurance() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); e.currentTarget.reset(); setTimeout(() => setSubmitted(false), 4000); };

  return (
    <div className="service-page">
      <div className="page-hero">
        <div className="container">
          <h1>Motor Insurance</h1>
          <p>
            Protect your vehicle against accidents, theft, natural disasters,
            and third-party liabilities with our motor insurance plans.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail-card">
            <h2>Get a Motor Insurance Quote</h2>

            <p>
              Tell us about your vehicle and we will find the right motor
              insurance cover for you.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Vehicle Type" />

              <textarea
                rows="5"
                placeholder="Tell us about your motor insurance requirement"
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