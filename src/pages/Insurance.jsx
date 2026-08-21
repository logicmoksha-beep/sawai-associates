import { Link } from "react-router-dom";
import { Building, BriefcaseBusiness, HeartPulse, ShieldCheck, ArrowRight, Banknote } from "lucide-react";

export default function Insurance() {
const services = [
  {
    id: "property-insurance",
    icon: <Building size={35} />,
    title: "Property Insurance",
    description: "Protection for eligible buildings, property contents and assets against covered risks, with optional add-ons depending on the selected policy.",
    link: "/contact",
  },
  {
    id: "business-insurance",
    icon: <BriefcaseBusiness size={35} />,
    title: "Business Insurance",
    description: "Insurance support for businesses, shops, offices and commercial establishments, including eligible assets and business-related risks.",
    link: "/contact",
  },
  {
    id: "health-insurance",
    icon: <HeartPulse size={35} />,
    title: "Health Insurance",
    description: "Coverage options for individuals and families, including eligible hospitalisation, related expenses, network treatment and available add-ons.",
    link: "/contact",
  },
  {
    id: "life-insurance",
    icon: <ShieldCheck size={35} />,
    title: "Life Insurance",
    description: "Financial protection for the policyholder's family, with life cover and other benefits depending on the selected policy and eligibility.",
    link: "/contact",
  },
];

  return (
    <div className="insurance-page">
      <section className="page-hero insurance-hero">
        <div className="container">
          <span className="eyebrow">Insurance Services</span>
          <h1>Protect What Matters Most</h1>
          <p>Insurance solutions for property, businesses, health and life—supported with clear guidance to help you understand your options.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Services</span>
            <h2>Insurance Solutions for Every Need</h2>
            <p>Choose the protection that fits your personal, family, property or business requirements.</p>
          </div>
          <div className="service-grid insurance-grid">
            {services.map((service) => (
                <div
                  id={service.id}
                  className="service-card insurance-card"
                  key={service.title}
                >                <div className="insurance-card-image" aria-hidden="true"></div>
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link}>Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section loan-partner-section">
        <div className="container loan-partner-card">
          <div className="loan-partner-icon" aria-hidden="true"><Banknote size={34} /></div>
          <div className="loan-partner-content">
            <span className="eyebrow">Financial Assistance</span>
            <h2>Need a Loan or Financial Support?</h2>
            <p>For loan-related requirements, you can continue directly to BTech Loan Wala and explore the available loan options and enquiry process.</p>
          </div>
          <a className="btn primary loan-partner-btn" href="https://btechloanwala.com/" target="_blank" rel="noreferrer">
            Visit BTech Loan Wala <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <section className="section light-section">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Insurance?</span>
            <h2>Security for Every Stage of Life</h2>
            <p>Insurance is more than protection—it is confidence for the future. The right policy can provide valuable financial support when unexpected situations arise.</p>
            <p>Our team helps you understand available options and take the next step based on your specific requirements.</p>
          </div>
          <div className="feature-box insurance-feature-box">
            <div>
              <h3>Benefits of Choosing Us</h3>
              <p>Professional Guidance • Clear Information • Customized Requirements • Responsive Support • Transparent Process • Long-Term Assistance</p>
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
          <Link className="btn white" to="/contact">Get Enquiry</Link>
        </div>
      </section>
    </div>
  );
}
