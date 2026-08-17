import { Link } from "react-router-dom";
import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer(){
 return <footer className="footer">
  <div className="container footer-grid">
    <div>
      <h3>Sawai Associates</h3>
      <p>Real Estate • Insurance • IT Services</p>
      <p className="muted">One trusted partner for property, protection and technology solutions.</p>
    </div>
    <div><h4>Quick Links</h4><Link to="/">Home</Link><Link to="/about">About</Link><Link to="/real-estate">Real Estate</Link><Link to="/insurance">Insurance</Link><Link to="/it-services">IT Services</Link><Link to="/contact">Contact</Link></div>
    <div><h4>Contact</h4><p><Phone size={15}/> +91 90000 00000</p><p><Mail size={15}/> info@sawaiassociates.com</p><p><MapPin size={15}/> Pune, Maharashtra</p></div>
    <div><h4>Follow Us</h4><div className="social"><a href="https://www.linkedin.com/company/btechloanwala/" target="_blank"><Linkedin/></a><a href="https://www.instagram.com/btechloanwala" target="_blank"><Instagram/></a></div></div>
  </div>
  <div className="copyright">© 2026 Sawai Associates. All rights reserved.</div>
 </footer>
}