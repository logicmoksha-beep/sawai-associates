export default function HealthInsurance() {
  return (
    <div
      style={{
        padding: "120px 20px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <h1>Health Insurance</h1>

      <p>
        Get complete health coverage for yourself and your family with our
        affordable health insurance plans.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="City" />

        <textarea
          rows="5"
          placeholder="Tell us about your health insurance requirement"
        ></textarea>

        <button type="submit" className="btn primary">
          Request Quote
        </button>
      </form>
    </div>
  );
}