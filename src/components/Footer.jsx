import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT } from "../data/contact";
import logo from "../assets/logo/sawai-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        <div>
          <div className="footer-brand">
            <img src={logo} alt="Sawai Associates company logo" />
            <h3>{CONTACT.brand}</h3>
          </div>
          <p>{CONTACT.tagline}</p>
          <p>
            {CONTACT.brand} brings Real Estate, Insurance Services and IT
            Services together under one professional platform.
          </p>
          <a
            className="btn primary"
            href="https://btechloanwala.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit BTech Loan Wala
          </a>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/insurance">Insurance Services</Link>
          <Link to="/it-services">IT Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Our Services</h4>
          <Link to="/real-estate">Property Solutions</Link>
          <Link to="/insurance">Insurance Solutions</Link>
          <Link to="/it-services">Custom Software Solutions</Link>
          <Link to="/it-services">AI & Intelligent Technologies</Link>
          <Link to="/it-services">Cloud & DevOps Solutions</Link>
          <Link to="/contact">Send an Enquiry</Link>
        </div>

        <div>
          <h4>Contact Information</h4>
          <p><Phone size={15} /><a href={`tel:+91${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a></p>
          <p><Mail size={15} /><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
          <p><MapPin size={15} /><span>{CONTACT.address}</span></p>
          <div className="social">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 {CONTACT.brand}. All Rights Reserved.
      </div>
    </footer>
  );
}
