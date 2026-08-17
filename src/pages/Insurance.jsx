import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartPulse,
  Car,
  BriefcaseBusiness,
} from "lucide-react";

export default function Insurance() {
  const services = [
    {
      icon: <ShieldCheck size={35} />,
      title: "Life Insurance",
      description:
        "Secure your family's future with reliable life insurance plans designed for long-term financial protection.",
      link: "/insurance/life-insurance",
    },
    {
      icon: <HeartPulse size={35} />,
      title: "Health Insurance",
      description:
        "Comprehensive health coverage to support medical expenses and ensure peace of mind.",
      link: "/insurance/health-insurance",
    },
    {
      icon: <Car size={35} />,
      title: "Motor Insurance",
      description:
        "Protect your vehicle against accidents, damages and unforeseen risks with the right coverage.",
      link: "/insurance/motor-insurance",
    },
    {
      icon: <BriefcaseBusiness size={35} />,
      title: "Business Insurance",
      description:
        "Tailored insurance solutions to safeguard your business operations, assets and growth.",
      link: "/insurance/business-insurance",
    },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Insurance Services</span>

          <h1>Protect What Matters Most</h1>

          <p>
            Comprehensive insurance solutions designed for individuals,
            families and businesses to secure their future with confidence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>

            <h2>Insurance Solutions for Every Need</h2>

            <p>
              From personal protection to business security, we help
              you choose the right coverage with expert guidance.
            </p>
          </div>

         <div className="service-grid insurance-grid">
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
            <span className="eyebrow">Why Insurance?</span>

            <h2>Security for Every Stage of Life</h2>

            <p>
              Insurance is more than protection—it's confidence for the
              future. Whether it's your health, family, vehicle or business,
              the right policy can provide financial stability when you need
              it most.
            </p>

            <p>
              Our advisors help you understand options and select plans
              that fit your specific requirements.
            </p>
          </div>

          <div className="feature-box">
            <div>
              <h3>Benefits of Choosing Us</h3>

              <p>
                Expert Advice • Trusted Insurance Partners • Customized
                Plans • Quick Support • Transparent Process • Long-Term
                Assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Let's Connect</span>

            <h2>Need Help Choosing the Right Insurance?</h2>
          </div>

          <Link className="btn white" to="/contact">
            Get Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}