import { Link } from "react-router-dom";
import { Building2, Home, KeyRound, Landmark } from "lucide-react";

export default function RealEstate() {
  const services = [
    {
      icon: <Home size={35} />,
      title: "Buy Property",
      description:
        "Discover residential and investment properties that match your budget, location and future goals.",
      link: "/real-estate/buy-property",
    },
    {
      icon: <Building2 size={35} />,
      title: "Sell Property",
      description:
        "Get expert guidance, property valuation and marketing support to maximize your property's value.",
      link: "/real-estate/sell-property",
    },
    {
      icon: <KeyRound size={35} />,
      title: "Rent Property",
      description:
        "Find quality residential and commercial rental options with complete assistance.",
      link: "/real-estate/rent-property",
    },
    {
      icon: <Landmark size={35} />,
      title: "Commercial Property",
      description:
        "Explore office spaces, retail outlets and commercial investment opportunities.",
      link: "/real-estate/commercial-property",
    },
  ];

  return (
    <>
      <section className="page-hero real">
        <div className="container">
          <span className="eyebrow">Real Estate Services</span>

          <h1>
            Find the Right Property.
            <br />
            Build the Right Future.
          </h1>

          <p>
            Whether you're buying, selling, renting or investing,
            Sawai Associates provides trusted guidance and complete
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
              From dream homes to commercial investments,
              we help clients make confident property decisions.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="icon">{service.icon}</div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <Link to={service.link}>
                  Learn More →
                </Link>
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
              We understand that property decisions are important life
              and business investments. Our team focuses on transparency,
              market knowledge and personalized support to help you
              achieve the best outcomes.
            </p>

            <p>
              From site visits to documentation assistance, we guide
              you through every step of the process.
            </p>
          </div>

          <div className="feature-box">
            <div>
              <h3>End-to-End Property Assistance</h3>

              <p>
                Property Search • Site Visits • Investment Guidance •
                Documentation Support • Market Insights • Customer Support
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
    </>
  );
}