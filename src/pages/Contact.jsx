import { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import { CONTACT } from "../data/contact";
import FormSuccess from "../components/FormSuccess";
import { useEnquiry, FORM_STATUS } from "../hooks/useEnquiry";

export default function Contact() {
  const [service, setService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const { status, error, submit } = useEnquiry("enquiry");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === FORM_STATUS.SUBMITTING) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const ok = await submit({
      full_name: fd.get("full_name") || "",
      mobile_number: fd.get("mobile_number") || "",
      email: fd.get("email") || "",
      service: fd.get("service") || "",
      property_type: fd.get("property_type") || "",
      requirement: fd.get("requirement") || "",
      message: fd.get("message") || "",
    });

    if (ok) {
      form.reset();
      setService("");
      setPropertyType("");
    }
  };

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
              <a href={`tel:+91${CONTACT.phone}`}>
                {CONTACT.phoneDisplay}
              </a>
            </p>

            <p>
              <Mail size={15} /> Email:{" "}
              <a href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>

            <p>
              <MapPin size={15} /> Address: {CONTACT.address}
            </p>

            <p>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              {"  "}
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
              >
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
            <input
              name="full_name"
              placeholder="Your Name"
              required
            />

            <input
              name="mobile_number"
              type="tel"
              placeholder="Mobile Number"
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              minLength="10"
              maxLength="10"
              title="Please enter a valid 10-digit mobile number"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
            />

            {/* Service */}
            <select
              name="service"
              value={service}
              onChange={(e) => {
                setService(e.target.value);
                setPropertyType("");
              }}
              required
            >
              <option value="">
                Service Required
              </option>

              <option value="Real Estate">
                Real Estate
              </option>

              <option value="Insurance">
                Insurance
              </option>

              <option value="IT Services">
                IT Services
              </option>
            </select>

            {/* Real Estate Type */}
            {service === "Real Estate" && (
              <select
                name="property_type"
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value)
                }
                required
              >
                <option value="">
                  Select Property Type
                </option>

                <option value="Residential Property">
                  Residential Property
                </option>

                <option value="Commercial Property">
                  Commercial Property
                </option>

                <option value="Villas">
                  Villas
                </option>

                <option value="Plots">
                  Plots
                </option>
              </select>
            )}

            {/* Residential */}
            {propertyType ===
              "Residential Property" && (
              <select name="requirement" required>
                <option value="">
                  Select Requirement
                </option>

                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
                <option>4 BHK+</option>
                <option>Independent House</option>
                <option>Row House</option>
              </select>
            )}

            {/* Commercial */}
            {propertyType ===
              "Commercial Property" && (
              <select name="requirement" required>
                <option value="">
                  Select Requirement
                </option>

                <option>Office</option>
                <option>Shop</option>
                <option>Showroom</option>
                <option>Warehouse</option>
                <option>Industrial Property</option>
              </select>
            )}

            {/* Villas */}
            {propertyType === "Villas" && (
              <select name="requirement" required>
                <option value="">
                  Select Requirement
                </option>

                <option>2 BHK Villa</option>
                <option>3 BHK Villa</option>
                <option>4 BHK Villa</option>
                <option>Luxury Villa</option>
                <option>Custom Requirement</option>
              </select>
            )}

            {/* Plots */}
            {propertyType === "Plots" && (
              <select name="requirement" required>
                <option value="">
                  Select Requirement
                </option>

                <option>Residential Plot</option>
                <option>Commercial Plot</option>
                <option>NA Plot</option>
                <option>Investment Plot</option>
              </select>
            )}

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
            />

            <button
              type="submit"
              className="btn primary"
              disabled={status === FORM_STATUS.SUBMITTING}
              aria-busy={status === FORM_STATUS.SUBMITTING}
            >
              {status === FORM_STATUS.SUBMITTING
                ? "Submitting…"
                : status === FORM_STATUS.SUCCESS
                ? "Enquiry Submitted"
                : "Send Enquiry"}
            </button>
          </form>

          <FormSuccess status={status} error={error} />
        </div>
      </section>
    </>
  );
}