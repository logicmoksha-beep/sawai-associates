import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { CONTACT } from "../data/contact";
import logo from "../assets/logo/sawai-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company Info */}
        <div>
          <div className="footer-brand"><img src={logo} alt="Sawai Associates company logo" /><h3>{CONTACT.brand}</h3></div>

          <p>{CONTACT.tagline}</p>

          <p>
            {CONTACT.brand} is committed to delivering trusted
            property solutions, insurance services and innovative
            technology solutions under one professional platform.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/insurance">Insurance</Link>
          <Link to="/it-services">IT Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Services */}
        <div>
          <h4>Our Services</h4>

          <Link to="/real-estate/buy-property">Buy Property</Link>
          <Link to="/real-estate/sell-property">Sell Property</Link>
          <Link to="/insurance/life-insurance">Life Insurance</Link>
          <Link to="/insurance/health-insurance">Health Insurance</Link>
          <Link to="/it-services/web-development">Web Development</Link>
          <Link to="/it-services/it-consultancy">IT Consultancy</Link>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact Information</h4>

          <p>
            <Phone size={15} />{" "}
            <a href={`tel:+91${CONTACT.phone}`}>{CONTACT.phoneDisplay}</a>
          </p>

          <p>
            <Mail size={15} />{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>

          <p>
            <MapPin size={15} /> {CONTACT.address}
          </p>

          <div className="social">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>

            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 {CONTACT.brand}. All Rights Reserved.
      </div>
    </footer>
  );
}
