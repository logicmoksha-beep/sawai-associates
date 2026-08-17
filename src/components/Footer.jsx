import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* Company Info */}
        <div>
          <h3>Sawai Associates</h3>

          <p>
            Real Estate • Insurance • IT Services
          </p>

          <p>
            Sawai Associates is committed to delivering trusted
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

          <Link to="/buy-property">Buy Property</Link>
          <Link to="/sell-property">Sell Property</Link>
          <Link to="/life-insurance">Life Insurance</Link>
          <Link to="/health-insurance">Health Insurance</Link>
          <Link to="/web-development">Web Development</Link>
          <Link to="/it-consultancy">IT Consultancy</Link>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact Information</h4>

          <p>
            <Phone size={15} /> +91 90000 00000
          </p>

          <p>
            <Mail size={15} /> info@sawaiassociates.com
          </p>

          <p>
            <MapPin size={15} /> Pune, Maharashtra, India
          </p>

          <div className="social">
            <a
              href="https://www.linkedin.com/company/btechloanwala/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://www.instagram.com/btechloanwala"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 Sawai Associates. All Rights Reserved.
      </div>
    </footer>
  );
}