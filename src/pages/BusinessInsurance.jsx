export default function BusinessInsurance() {
  return (
    <div
      style={{
        padding: "120px 20px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <h1>Business Insurance</h1>

      <p>
        Protect your business from financial risks, liabilities, property
        damage, employee-related risks, and unforeseen losses with our
        business insurance solutions.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Business Name" />
        <input type="text" placeholder="Contact Person" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="email" placeholder="Email Address" />

        <textarea
          rows="5"
          placeholder="Tell us about your business insurance requirement"
        ></textarea>

        <button type="submit" className="btn primary">
          Request Quote
        </button>
      </form>
    </div>
  );
}