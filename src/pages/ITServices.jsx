import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Layers3,
  Headset,
} from "lucide-react";

export default function ITServices() {
  const services = [
    {
      icon: <Globe size={35} />,
      title: "Web Development",
      description:
        "Professional, responsive and high-performance websites designed to strengthen your digital presence.",
      link: "/it-services/web-development",
    },
    {
      icon: <Smartphone size={35} />,
      title: "Mobile App Development",
      description:
        "Custom Android and iOS applications built to deliver seamless user experiences and business growth.",
      link: "/it-services/mobile-app-development",
    },
    {
      icon: <Layers3 size={35} />,
      title: "Software Solutions",
      description:
        "Tailor-made software systems developed to automate processes and improve operational efficiency.",
      link: "/it-services/software-solutions",
    },
    {
      icon: <Headset size={35} />,
      title: "IT Consultancy",
      description:
        "Strategic technology guidance to help businesses make smarter and more effective digital decisions.",
      link: "/it-services/it-consultancy",
    },
  ];

  return (
    <>
      <section className="page-hero it">
        <div className="container">
          <span className="eyebrow">IT Services</span>

          <h1>
            Technology Solutions
            <br />
            That Drive Growth
          </h1>

          <p>
            Empowering businesses with innovative web, mobile and software
            solutions that improve efficiency and accelerate digital
            transformation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Expertise</span>

            <h2>Digital Solutions for Modern Businesses</h2>

            <p>
              From websites and mobile apps to enterprise software and IT
              consulting, we help organizations succeed in a digital-first
              world.
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

            <h2>Building Digital Success Together</h2>

            <p>
              We combine technology expertise with business understanding
              to create solutions that are practical, scalable and future-ready.
            </p>

            <p>
              Whether you're a startup, growing business or established
              enterprise, our team helps you leverage technology to achieve
              measurable results.
            </p>
          </div>

          <div className="feature-box">
            <div>
              <h3>Our Technology Services</h3>

              <p>
                Website Development • Mobile Apps • Business Software •
                UI/UX Design • Technology Consulting • Ongoing Support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Let's Build Something Great</span>

            <h2>Ready to Start Your Digital Journey?</h2>
          </div>

          <Link className="btn white" to="/contact">
            Discuss a Project
          </Link>
        </div>
      </section>
    </>
  );
}