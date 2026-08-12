import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import logo from '../assets/btechog.jpeg'

export default function Footer() {
  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  const email = import.meta.env.VITE_CONTACT_EMAIL || 'info@btechloanwala.com'
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Vikas Chowk, Karve Nagar, Pune 411052')
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <img src={logo} alt="BTech Loan_Wala LLP"/>
              BTech Loan_Wala LLP
            </Link>
            <p>BTech loan_wala LLP is your trusted partner for all your financial needs. We offer a wide range of loan products with quick approval and competitive options.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/btechloanwala?igsh=Z2tmbDV3bGtmc3Q=" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/company/btechloanwala/posts/?feedView=all" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>

          <div>
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/apply-now">Apply Now</Link></li>
            </ul>
          </div>

          <div>
            <h5>Loans</h5>
            <ul>
              <li><Link to="/loans/personal">Personal Loan</Link></li>
              <li><Link to="/loans/home">Home Loan</Link></li>
              <li><Link to="/loans/business">Business Loan</Link></li>
              <li><Link to="/loans/loan-against-property">Loan Against Property</Link></li>
              <li><Link to="/loans/new-car">New Car Loan</Link></li>
              <li><Link to="/loans/used-car">Used Car Loan</Link></li>
              <li><Link to="/loans/home-loan-balance-transfer">Home Loan Balance Transfer</Link></li>
              <li><Link to="/loans/project-funding">Project Funding</Link></li>
            </ul>
          </div>

          <div>
            <h5>Resources</h5>
            <ul>
              <li><Link to="/emi-calculator">EMI Calculator</Link></li>
              <li><Link to="/eligibility">Eligibility</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h5>Contact</h5>
            <ul>
              <li><Phone size={14} style={{ verticalAlign: 'middle' }} /> <a href={`tel:${phone}`}>{phone}</a></li>
              <li><Mail size={14} style={{ verticalAlign: 'middle' }} /> <a href={`mailto:${email}`}>{email}</a></li>
              <li>
                <MapPin size={14} style={{ verticalAlign: 'middle' }} />
                <a href={mapsUrl} target="_blank" rel="noreferrer">Vikas Chowk, Karve Nagar, Pune – 411052</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} BTech loan_wala LLP. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        <p style={{ color: '#8fa1c0', fontSize: 12, marginTop: 20, maxWidth: 900 }}>
          Disclaimer: Loan approval, interest rates, tenure, loan amount and other terms are subject to lender eligibility, credit assessment, documentation and applicable policies. BTech loan_wala LLP facilitates loan assistance and does not guarantee approval.
        </p>
      </div>
    </footer>
  )
}
