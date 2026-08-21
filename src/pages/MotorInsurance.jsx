import FormSuccess from "../components/FormSuccess";
import { useEnquiry, FORM_STATUS } from "../hooks/useEnquiry";

export default function MotorInsurance() {
  const { status, error, submit } = useEnquiry("motor_insurance");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === FORM_STATUS.SUBMITTING) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const ok = await submit({
      full_name: fd.get("full_name") || "",
      mobile_number: fd.get("mobile_number") || "",
      email: fd.get("email") || "",
      vehicle_type: fd.get("vehicle_type") || "",
      message: fd.get("message") || "",
    });

    if (ok) form.reset();
  };

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
              <input type="text" name="full_name" placeholder="Full Name" />
              <input type="tel" name="mobile_number" placeholder="Mobile Number" required inputMode="numeric" pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter a valid 10-digit mobile number" />
              <input type="email" name="email" placeholder="Email Address" />
              <input type="text" name="vehicle_type" placeholder="Vehicle Type" />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your motor insurance requirement"
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