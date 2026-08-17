import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  Code2,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow">Sawai Associates</span>

          <h1>
            One Trusted Partner for
            <br />
            <span style={{ color: "#E6007E" }}>
              Real Estate, Insurance & IT
            </span>          </h1>

          <p>
            Helping you make confident property decisions,
            protect what matters and build with modern technology.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/real-estate">
              Explore Services <ArrowRight size={18} />
            </Link>

            <Link className="btn glass" to="/contact">
              Get Enquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>

            <h2>Solutions designed around your needs</h2>

            <p>
              Three focused services under one trusted brand.
            </p>
          </div>

          <div className="service-grid">
            <Service
              icon={<Building2 />}
              title="Real Estate"
              text="Property buying, selling, renting and commercial opportunities."
              link="/real-estate"
            />

            <Service
              icon={<ShieldCheck />}
              title="Insurance"
              text="Life, health, motor and business protection solutions."
              link="/insurance"
            />

            <Service
              icon={<Code2 />}
              title="IT Services"
              text="Web, mobile, software and technology consulting solutions."
              link="/it-services"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section light-section">
        <div className="container split">
          <div>
            <span className="eyebrow">About Us</span>

            <h2>Built on trust. Driven by solutions.</h2>

            <p>
              Sawai Associates brings Real Estate, Insurance and IT Services
              together to make professional solutions simpler and more
              accessible for clients.
            </p>

            <Link className="text-link" to="/about">
              Discover our story <ArrowRight size={16} />
            </Link>
          </div>

          <div className="feature-box">
            <CheckCircle2 />

            <div>
              <h3>One relationship. Multiple solutions.</h3>

              <p>
                From finding the right property to protecting your future
                and building digital solutions, our services are designed
                to work around your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>

            <h2>A dependable partner for every step</h2>
          </div>

          <div className="why-grid">
            {[
              "Trusted Guidance",
              "Professional Service",
              "Client-Focused Approach",
              "End-to-End Support"
            ].map((item) => (
              <div className="why-card" key={item}>
                <CheckCircle2 />

                <h3>{item}</h3>

                <p>
                  Clear communication and practical support
                  focused on your requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Let's Connect</span>

            <h2>Have a requirement? Let's discuss it.</h2>
          </div>

          <Link className="btn white" to="/contact">
            Get Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function Service({ icon, title, text, link }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>

      <Link to={link}>
        View Service <ArrowRight size={16} />
      </Link>
    </div>
  );
}