import { Link } from "react-router-dom";
import {
  Code2,
  BrainCircuit,
  Bot,
  CloudCog,
  Network,
} from "lucide-react";

export default function ITServices() {

  const services = [
    {
      id: "custom-software",
      icon: <Code2 size={35} />,
      title: "Custom Software Solutions",
      description: "Web, mobile, and enterprise applications built to your exact specifications.",
    },
    {
      id: "ai-technologies",
      icon: <BrainCircuit size={35} />,
      title: "AI & Intelligent Technologies",
      description: "Intelligent models, LLM integration, and data engineering that scale.",
    },
    {
      id: "agentic-ai",
      icon: <Bot size={35} />,
      title: "Agentic AI & Automation",
      description: "Inhouse solutions, customize solutions, Hosting, Maintenance.",
    },
    {
      id: "cloud-devops",
      icon: <CloudCog size={35} />,
      title: "Cloud & DevOps Solutions",
      description: "Seamless migration, CI/CD pipelines, and infrastructure-as-code automation.",
    },
    {
      id: "digital-integration",
      icon: <Network size={35} />,
      title: "Digital Systems Integration",
      description: "Connect your tools and legacy systems into one reliable, unified stack.",
    },
  ];

  return (
    <div className="it-page">
      <section className="page-hero it it-services-hero">
        <div className="container">
          <span className="eyebrow">IT Services</span>
          <h1>Technology Solutions<br />That Drive Growth</h1>
          <p>
            Practical software, AI, automation, cloud and integration solutions
            designed around your business requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Expertise</span>
            <h2>Digital Solutions for Modern Businesses</h2>
            <p>
              Explore the technology capabilities you need, then contact our team
              through one simple enquiry form.
            </p>
          </div>

          <div className="service-grid it-service-grid">
            {services.map((service) => (
<div
  id={service.id}
  className="service-card it-service-card"
  key={service.title}
>                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact">Discuss Your Requirement →</Link>
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
              We combine technology expertise with business understanding to create
              solutions that are practical, scalable and future-ready.
            </p>
            <p>
              Whether you're a startup, growing business or established enterprise,
              our team helps you move from requirement to the right technology solution.
            </p>
          </div>

          <div className="feature-box">
            <div>
              <h3>Our Technology Services</h3>
              <p>
                Custom Software • AI & Intelligent Technologies • Agentic AI &
                Automation • Cloud & DevOps • Digital Systems Integration
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
          <Link className="btn white" to="/contact">Discuss a Project</Link>
        </div>
      </section>
    </div>
  );
}
