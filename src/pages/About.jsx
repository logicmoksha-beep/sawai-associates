export default function About() {
  const team = [
    { name: "Amit Sawai", role: "Founder & Director" },
    { name: "Real Estate Expert", role: "Property Consultant" },
    { name: "Insurance Advisor", role: "Insurance Specialist" },
    { name: "IT Consultant", role: "Technology Solutions" },
  ];

  return (
    <div>
      <PageHero
        title="About Sawai Associates"
        text="Your trusted partner for Real Estate, Insurance and IT Services."
      />

      {/* Founder Section */}
      <section className="section">
        <div className="container split founder">
          <div className="founder-photo">
            <div className="photo-placeholder">
              Founder Image
            </div>
          </div>

          <div>
            <span className="eyebrow">Founder Message</span>
            <h2>Amit Sawai</h2>
            <h4>Founder & Director</h4>

            <p>
              Sawai Associates was established with a vision to provide
              reliable, transparent and customer-focused solutions across
              Real Estate, Insurance and Information Technology services.
            </p>

            <p>
              We believe every client deserves expert guidance, trustworthy
              advice and professional support. Our goal is to create long-term
              relationships by delivering value, quality service and complete
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section light-section">
        <div className="container vision-grid">
          <div>
            <span className="eyebrow">Our Vision</span>
            <h2>Building Trust for the Future</h2>

            <p>
              To become a leading and trusted organization delivering
              excellence in Real Estate, Insurance and IT Services while
              creating lasting value for clients and communities.
            </p>
          </div>

          <div>
            <span className="eyebrow">Our Mission</span>
            <h2>Delivering Complete Solutions</h2>

            <p>
              To provide professional guidance, innovative solutions and
              exceptional customer service that helps clients achieve their
              personal and business goals confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>What Makes Us Different</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h3>Trusted Expertise</h3>
              <p>
                Experienced professionals providing reliable advice and
                practical solutions.
              </p>
            </div>

            <div className="why-card">
              <h3>Customer First</h3>
              <p>
                Every service is designed around your requirements and goals.
              </p>
            </div>

            <div className="why-card">
              <h3>Transparent Process</h3>
              <p>
                Clear communication and honest guidance throughout every step.
              </p>
            </div>

            <div className="why-card">
              <h3>Complete Support</h3>
              <p>
                End-to-end assistance across property, insurance and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section light-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Team</span>
            <h2>Meet Our Professionals</h2>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-photo">Photo</div>

                <div className="team-overlay">
                  <b>{member.name}</b>
                  <span>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PageHero({ title, text }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">Sawai Associates</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}