import { Link } from 'react-router-dom'
import logo from '../assets/sawai-associate-logo.jpeg'

const FOOTER_LINKS = [
  {
    title: 'Insurance',
    links: [
      { label: 'Health Insurance', path: '/insurance/health' },
      { label: 'Life Insurance', path: '/insurance/life' },
      { label: 'Motor Insurance', path: '/insurance/motor' },
      { label: 'Travel Insurance', path: '/insurance/travel' },
      { label: 'Home Insurance', path: '/insurance/home' },
    ],
  },
  {
    title: 'Real Estate',
    links: [
      { label: 'Buy Property', path: '/real-estate/buy' },
      { label: 'Sell Property', path: '/real-estate/sell' },
      { label: 'Rent Property', path: '/real-estate/rent' },
      { label: 'Commercial', path: '/real-estate/commercial' },
    ],
  },
  {
    title: 'IT Services',
    links: [
      { label: 'Web Development', path: '/it-services/web-development' },
      { label: 'Mobile App Development', path: '/it-services/mobile-apps' },
      { label: 'Software Solutions', path: '/it-services/software-solutions' },
      { label: 'IT Consultancy', path: '/it-services/consultancy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__cols">
          <div className="footer__brand">
            <Link to="/" className="footer__brand-link">
              <img className="footer__logo" src={logo} alt="Sawai Associates logo" />
              <span>Sawai Associates</span>
            </Link>
            <p className="footer__about">
              A multi-service corporate portal offering trusted Insurance, Real
              Estate and IT Services under one roof.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4 className="footer__heading">{col.title}</h4>
              <ul className="footer__list">
                {col.links.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/enquiry">Get Enquiry</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Sawai Associates. All rights reserved.</p>
          <p>
            <Link to="/contact">Contact</Link> · <Link to="/about">About</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
