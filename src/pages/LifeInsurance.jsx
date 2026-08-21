import FormSuccess from "../components/FormSuccess";
import { useEnquiry, FORM_STATUS } from "../hooks/useEnquiry";

export default function LifeInsurance() {
  const { status, error, submit } = useEnquiry("life_insurance");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === FORM_STATUS.SUBMITTING) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const ok = await submit({
      full_name: fd.get("full_name") || "",
      mobile_number: fd.get("mobile_number") || "",
      email: fd.get("email") || "",
      city: fd.get("city") || "",
      message: fd.get("message") || "",
    });

    if (ok) form.reset();
  };

  return (
    <div className="service-page">
      <div className="page-hero">
        <div className="container">
          <h1>Life Insurance</h1>
          <p>
            Protect your family's future with comprehensive life insurance plans.
            Get financial security, tax benefits, and long-term protection.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="service-detail-card">
            <h2>Get a Life Insurance Quote</h2>

            <p>
              Fill in your details below and our team will reach out with the
              best life insurance plans tailored to your needs.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="full_name" placeholder="Full Name" />
              <input type="tel" name="mobile_number" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="city" placeholder="City" />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your insurance requirement"
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
