import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about your requirement.</h1>
          <p>
            Use the form below. Contact details can be updated anytime.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2>We're Here To Help</h2>
            <p>Phone: +91 90000 00000</p>
            <p>Email: info@sawaiassociates.com</p>
            <p>Address: Pune, Maharashtra</p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input placeholder="Your Name" required />
            <input placeholder="Mobile Number" required />
            <input type="email" placeholder="Email Address" />
            <select>
              <option>Service Required</option>
              <option>Real Estate</option>
              <option>Insurance</option>
              <option>IT Services</option>
            </select>

            <textarea
              placeholder="Message"
              rows="5"
            />

            <button className="btn primary">
              {sent ? "Enquiry Submitted" : "Send Enquiry"}
            </button>
          </form>

        </div>
      </section>
    </>
  );
}