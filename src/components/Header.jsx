import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/sawai-associate-logo.jpeg'

const NAV_ITEMS = [
  { label: 'Home', path: '/', end: true },
  {
    label: 'Insurance',
    path: '/insurance',
    children: [
      { label: 'Health Insurance', path: '/insurance/health' },
      { label: 'Life Insurance', path: '/insurance/life' },
      { label: 'Motor Insurance', path: '/insurance/motor' },
      { label: 'Travel Insurance', path: '/insurance/travel' },
      { label: 'Home Insurance', path: '/insurance/home' },
    ],
  },
  {
    label: 'Real Estate',
    path: '/real-estate',
    children: [
      { label: 'Buy Property', path: '/real-estate/buy' },
      { label: 'Sell Property', path: '/real-estate/sell' },
      { label: 'Rent Property', path: '/real-estate/rent' },
      { label: 'Commercial', path: '/real-estate/commercial' },
    ],
  },
  {
    label: 'IT Services',
    path: '/it-services',
    children: [
      { label: 'Web Development', path: '/it-services/web-development' },
      { label: 'Mobile App Development', path: '/it-services/mobile-apps' },
      { label: 'Software Solutions', path: '/it-services/software-solutions' },
      { label: 'IT Consultancy', path: '/it-services/consultancy' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function Dropdown({ item, depth = 0 }) {
  return (
    <ul className={`dropdown dropdown--depth-${depth}`}>
      {item.children.map((child) => (
        <li className="dropdown__item" key={child.path}>
          <NavLink
            to={child.path}
            className={({ isActive }) =>
              'dropdown__link' + (isActive ? ' is-active' : '')
            }
            end={depth === 0}
          >
            {child.label}
            {child.children && <span className="dropdown__arrow">›</span>}
          </NavLink>
          {child.children && <Dropdown item={child} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={() => setMobileOpen(false)}>
          <img
            className="header__logo"
            src={logo}
            alt="Sawai Associates logo"
          />
          <span className="header__brand-text">
            <strong>Sawai&nbsp;Associates</strong>
            <span className="header__tagline">Insurance • Real Estate • IT</span>
          </span>
        </Link>

        <button
          type="button"
          className="header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav${mobileOpen ? ' is-open' : ''}`}>
          <ul className="header__menu">
            {NAV_ITEMS.map((item) => {
              const isOpen = openMenu === item.label
              function handleParentClick(e) {
                if (item.children && window.innerWidth <= 900) {
                  e.preventDefault()
                  setOpenMenu(isOpen ? null : item.label)
                }
              }
              return (
                <li
                  className="header__menu-item"
                  key={item.label}
                  onMouseEnter={() => item.children && setOpenMenu(item.label)}
                  onMouseLeave={() => item.children && setOpenMenu(null)}
                >
                  <NavLink
                    to={item.path}
                    end={item.end}
                    onClick={handleParentClick}
                    className={({ isActive }) =>
                      'header__link' +
                      (isActive ? ' is-active' : '') +
                      (isOpen ? ' is-open' : '')
                    }
                  >
                    {item.label}
                    {item.children && <span className="header__caret">▾</span>}
                  </NavLink>
                  {item.children && isOpen && (
                    <div className="header__dropdown">
                      <Dropdown item={item} />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
          <div className="header__actions">
            <Link className="btn btn--primary" to="/enquiry">
              Get Enquiry
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
