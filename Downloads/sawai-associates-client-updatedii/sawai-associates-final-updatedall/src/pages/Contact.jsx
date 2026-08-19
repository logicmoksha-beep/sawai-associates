import { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { CONTACT } from "../data/contact";
import FormSuccess from "../components/FormSuccess";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); setTimeout(() => setSent(false), 4000); };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let's talk about your requirement.</h1>
          <p>
            Reach us on call, email or WhatsApp — our team replies the
            same working day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          <div>
            <span className="eyebrow">Get In Touch</span>
            <h2>We're Here To Help</h2>

            <p>
              <Phone size={15} /> Phone:{" "}
              <a href={`tel:+91${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
            </p>

            <p>
              <Mail size={15} /> Email:{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </p>

            <p>
              <MapPin size={15} /> Address: {CONTACT.address}
            </p>

            <p>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={15} /> LinkedIn
              </a>
              {"  "}
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer">
                <Instagram size={15} /> Instagram
              </a>
            </p>

            <p>
              <a
                className="btn primary"
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input placeholder="Your Name" required />
            <input type="tel" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
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
          <FormSuccess show={sent} />

        </div>
      </section>
    </>
  );
}
