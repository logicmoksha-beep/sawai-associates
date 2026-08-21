import { Link } from "react-router-dom";
import {
  ArrowRight, ShieldCheck, Building2, Code2, CheckCircle2,
  Sparkles, BadgeCheck, Headphones, MapPin, HeartHandshake
} from "lucide-react";
import itServicesVisual from "../assets/it/it-services-visual.png";

const services = [
  { icon: <Building2 />, title: "Real Estate", text: "Buy, sell, rent and discover commercial opportunities with clear guidance.", link: "/real-estate", tag: "PROPERTY" },
  { icon: <ShieldCheck />, title: "Insurance", text: "Protect your family, health, vehicle and business with the right coverage.", link: "/insurance", tag: "PROTECTION" },
  { icon: <Code2 />, title: "IT Services", text: "Build modern websites, apps and software solutions that support growth.", link: "/it-services", tag: "TECHNOLOGY", image: itServicesVisual },
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-badge"><Sparkles size={15} /> One partner. Multiple solutions.</span>
            <h1>Make your next move with <span>confidence.</span></h1>
            <p>From property decisions and insurance protection to digital growth, Sawai Associates brings professional services together under one trusted relationship.</p>
            <div className="hero-actions">
              <Link className="btn primary" to="/contact">Talk to an Expert <ArrowRight size={18} /></Link>
              <Link className="btn glass" to="/real-estate">Explore Services</Link>
            </div>
            <div className="hero-proof">
              <span><BadgeCheck size={18} /> Client-first guidance</span>
              <span><CheckCircle2 size={18} /> Clear communication</span>
              <span><HeartHandshake size={18} /> End-to-end support</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-kicker">SAWAI ASSOCIATES</div>
            <h3>Your goals.<br />Our expertise.</h3>
            <p>Choose the service you need and take the next step with confidence.</p>
            <div className="panel-links">
              <Link to="/real-estate">Real Estate <ArrowRight size={16} /></Link>
              <Link to="/insurance">Insurance <ArrowRight size={16} /></Link>
              <Link to="/it-services">IT Services <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-inner">
          <div><strong>01</strong><span>Trusted guidance<br />for important decisions</span></div>
          <div><strong>02</strong><span>Three professional<br />services, one partner</span></div>
          <div><strong>03</strong><span>Practical support<br />from enquiry to action</span></div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Expertise</span>
            <h2>Everything important. In one place.</h2>
            <p>Focused solutions designed around the things that matter most to you and your business.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <Service key={service.title} {...service} />)}
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="container experience-grid">
          <div className="experience-card">
            <span className="eyebrow">The Sawai Approach</span>
            <h2>Simple process.<br />Personal attention.</h2>
            <p>We believe professional service should feel straightforward. We listen first, understand your requirement and guide you towards the right next step.</p>
            <Link className="text-link" to="/about">Discover our story <ArrowRight size={16} /></Link>
          </div>
          <div className="approach-list">
            <Approach icon={<Headphones />} number="01" title="Listen" text="We start by understanding your needs, priorities and goals." />
            <Approach icon={<MapPin />} number="02" title="Guide" text="Get practical information and clear direction for your next move." />
            <Approach icon={<CheckCircle2 />} number="03" title="Support" text="Stay supported as you move from enquiry to a confident decision." />
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>
            <h2>A relationship built beyond one transaction.</h2>
          </div>
          <div className="why-grid">
            {["Professional guidance", "Client-focused approach", "Multiple solutions", "Responsive support"].map((item) => (
              <div className="why-card" key={item}>
                <CheckCircle2 />
                <h3>{item}</h3>
                <p>Practical, transparent support designed around your requirement and next step.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">Let's Get Started</span>
            <h2>Tell us what you need.<br />We'll help you find the way forward.</h2>
          </div>
          <Link className="btn white" to="/contact">Send an Enquiry <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}

function Service({ icon, title, text, link, tag, image }) {
  return (
    <article className={`service-card service-visual-card ${tag.toLowerCase()}`}>
      <div
        className="service-image"
        aria-hidden="true"
        style={
          image
            ? {
                backgroundImage: `linear-gradient(180deg, rgba(7,29,61,.05), rgba(7,29,61,.28)), url(${image})`,
              }
            : undefined
        }
      ></div><div className="service-top"><span>{tag}</span><div className="icon">{icon}</div></div>
      <h3>{title}</h3><p>{text}</p>
      <Link to={link}>Explore {title} <ArrowRight size={16} /></Link>
    </article>
  );
}

function Approach({ icon, number, title, text }) {
  return <div className="approach-item"><div className="approach-icon">{icon}</div><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>;
}
