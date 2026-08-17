export default function LifeInsurance() {
  return (
    <div
      style={{
        padding: "120px 20px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <h1>Life Insurance</h1>

      <p>
        Protect your family's future with comprehensive life insurance plans.
        Get financial security, tax benefits, and long-term protection.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="City" />

        <textarea
          rows="5"
          placeholder="Tell us about your insurance requirement"
        ></textarea>

        <button type="submit" className="btn primary">
          Request Quote
        </button>
      </form>
    </div>
  );
}