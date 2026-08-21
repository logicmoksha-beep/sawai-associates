import { Link } from "react-router-dom";
import { Building2, Home, Map, Landmark } from "lucide-react";

export default function RealEstate() {
  const services = [
    {
      id: "residential",
      icon: <Home size={35} />,
      title: "Residential Property",

      description: `• Flats & Apartments
• 1 BHK, 2 BHK & 3 BHK
• Independent Houses
• Row Houses
• New & Resale Properties
• Ready-to-Move & Under-Construction Properties`,
      link: "/contact",
    },
    {
      id: "commercial",
      icon: <Building2 size={35} />,
      title: "Commercial Property",
      description:
        `• Offices 
    • Shops 
    • Showrooms
    • Warehouses
      • Industrial Properties 
      • New & Resale Commercial Properties`,
      link: "/contact",
    },
    {
      id: "plots",
      icon: <Map size={35} />,
      title: "Plots",
      description: `• Residential Plots
• Commercial Plots
• NA Plots
• Gated Community Plots
• Investment Plots
• New & Resale Plots`,
      link: "/contact",
    },
    {
      id: "villas",
      icon: <Landmark size={35} />,
      title: "Villas",
      description: 
      `• Luxury Villas
• Independent Villas
• New & Resale Villas
• Ready-to-Move Villas
• Under-Construction Villas`,
      link: "/contact",
    },
  ];

  return (
    <div className="realestate-page">
      <section className="page-hero real realestate-hero">
        <div className="container">
          <span className="eyebrow">Real Estate Services</span>

          <h1>
            Find the Right Property.
            <br />
            Build the Right Future.
          </h1>

          <p>
            Whether you are looking for a home, commercial space, plot or
            villa, Sawai Associates provides trusted guidance and complete
            real estate solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Expertise</span>

            <h2>Comprehensive Property Solutions</h2>

            <p>
              Explore the right property category for your residential,
              commercial and investment requirements.
            </p>
          </div>

          <div className="service-grid real-estate-grid">
            {services.map((service) => (
              <div
                id={service.id}
                className="service-card real-estate-card"
                key={service.title}
              >
                <div className="real-card-image" aria-hidden="true"></div>

                <div className="icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p style={{ whiteSpace: "pre-line" }}>
                  {service.description}
                </p>

                <Link to={service.link}>Enquire Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Choose Us</span>

            <h2>Trusted Real Estate Guidance</h2>

            <p>
              We understand that property decisions are important life and
              business investments. Our team focuses on transparency, market
              knowledge and personalized support to help you achieve the best
              outcomes.
            </p>

            <p>
              From property selection and site visits to practical guidance
              and documentation support, we help make the process clearer and
              more confident.
            </p>
          </div>

          <div className="feature-box real-feature-box">
            <div>
              <h3>End-to-End Property Assistance</h3>

              <p>
                Property Search • Residential Property • Commercial Property •
                Plots • Villas • Site Visits • Investment Guidance •
                Documentation Support • Market Insights
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Let's Connect</span>

            <h2>Looking for a Property Solution?</h2>
          </div>

          <Link className="btn white" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}