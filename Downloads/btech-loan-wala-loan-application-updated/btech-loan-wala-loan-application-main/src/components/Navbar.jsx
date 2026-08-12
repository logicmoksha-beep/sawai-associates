import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import logo from '../assets/btechog.jpeg'
import ThemeToggle from './ThemeToggle.jsx'
import { loanProducts } from '../data/loanData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [loansOpen, setLoansOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false); setLoansOpen(false) }, [location.pathname])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" aria-label="BTech loan_wala Home">
          <img src={logo} alt="BTech loan_wala LLP" />
        </Link>

        <nav aria-label="Primary">
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            
            <li><NavLink to="/about">About Us</NavLink></li>
            <li className="dropdown">
              <button className="nav-btn" aria-haspopup="true">
                Loans <ChevronDown size={16} />
              </button>
              <div className="dropdown-menu" role="menu">
                {loanProducts.map(l => (
                  <Link key={l.id} to={`/loans/${l.slug}`}>{l.name}</Link>
                ))}
              </div>
            </li>
            <li><NavLink to="/emi-calculator">EMI Calculator</NavLink></li>
            <li><NavLink to="/eligibility">Eligibility</NavLink></li>
            <li><NavLink to="/how-it-works">How It Works</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link to="/apply-now" className="btn btn-primary apply-desktop">Apply Now</Link>
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div className={`mobile-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
          <X size={24} />
        </button>
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img src={logo} alt="BTech loan_wala LLP" />
        </Link>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li>
            <button onClick={() => setLoansOpen(!loansOpen)}>
              Loans <ChevronDown size={16} style={{ float: 'right' }} />
            </button>
            {loansOpen && (
              <div className="mobile-submenu">
                {loanProducts.map(l => (
                  <Link key={l.id} to={`/loans/${l.slug}`}>{l.name}</Link>
                ))}
              </div>
            )}
          </li>
          <li><NavLink to="/emi-calculator">EMI Calculator</NavLink></li>
          <li><NavLink to="/eligibility">Eligibility</NavLink></li>
          <li><NavLink to="/how-it-works">How It Works</NavLink></li>
          <li><NavLink to="/faq">FAQs</NavLink></li>
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <Link to="/apply-now" className="btn btn-primary btn-block">Apply Now</Link>
      </aside>
    </header>
  )
}
