export default function MotorInsurance() {
  return (
    <div
      style={{
        padding: "120px 20px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <h1>Motor Insurance</h1>

      <p>
        Protect your vehicle against accidents, theft, natural disasters,
        and third-party liabilities with our motor insurance plans.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Mobile Number" />
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
    </div>
  );
}