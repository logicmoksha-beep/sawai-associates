import FormSuccess from "../components/FormSuccess";
import { useEnquiry, FORM_STATUS } from "../hooks/useEnquiry";

export default function BusinessInsurance() {
  const { status, error, submit } = useEnquiry("business_insurance");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === FORM_STATUS.SUBMITTING) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const ok = await submit({
      business_name: fd.get("business_name") || "",
      contact_person: fd.get("contact_person") || "",
      mobile_number: fd.get("mobile_number") || "",
      email: fd.get("email") || "",
      message: fd.get("message") || "",
    });

    if (ok) form.reset();
  };

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
              <input type="text" name="business_name" placeholder="Business Name" />
              <input type="text" name="contact_person" placeholder="Contact Person" />
              <input type="tel" name="mobile_number" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" name="email" placeholder="Email Address" />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your business insurance requirement"
              ></textarea>

              <button type="submit" className="btn primary" disabled={status === FORM_STATUS.SUBMITTING} aria-busy={status === FORM_STATUS.SUBMITTING}>
                {status === FORM_STATUS.SUBMITTING
                  ? "Submitting…"
                  : status === FORM_STATUS.SUCCESS
                  ? "Quote Requested"
                  : "Request Quote"}
              </button>
            </form>
            <FormSuccess status={status} error={error} />
          </div>
        </div>
      </section>
    </div>
  );
}