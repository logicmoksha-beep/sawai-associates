import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "../assets/logo/sawai-logo.png";
import { CONTACT } from "../data/contact";

const realEstateMenu = [
  {
    name: "Residential Property",
    path: "/real-estate#residential",
    locations: [
      "Baner",
      "Balewadi",
      "Aundh",
      "Kharadi",
      "Viman Nagar",
      "Wakad",
      "Kalyani Nagar",
      "Pashan",
      "Bavdhan",
      "Hadapsar",
    ],
  },
  {
    name: "Commercial Property",
    path: "/real-estate#commercial",
    locations: [
      "Baner",
      "Balewadi",
      "Kharadi",
      "Viman Nagar",
      "Hinjawadi",
      "Wakad",
      "Shivajinagar",
      "Koregaon Park",
      "Magarpatta",
      "Hadapsar",
    ],
  },
  {
    name: "Plots",
    path: "/real-estate#plots",
    locations: [
      "Wagholi",
      "Hinjawadi",
      "Mahalunge",
      "Sus",
      "Ravet",
      "Tathawade",
      "Undri",
      "NIBM",
      "Pirangut",
      "Bavdhan",
    ],
  },
  {
    name: "Villas",
    path: "/real-estate#villas",
    locations: [
      "Koregaon Park",
      "Kalyani Nagar",
      "Boat Club Road",
      "Baner",
      "Bavdhan",
      "Pashan",
      "NIBM",
      "Kharadi",
      "Wagholi",
    ],
  },
];

const insuranceMenu = [
  { name: "Life Insurance", path: "/insurance" },
  { name: "Health Insurance", path: "/insurance" },
  { name: "Business Insurance", path: "/insurance" },
  { name: "Property Insurance", path: "/insurance" },
];

const itMenu = [
  { name: "Custom Software Solutions", path: "/contact" },
  { name: "AI & Intelligent Technologies", path: "/contact" },
  { name: "Agentic AI & Automation", path: "/contact" },
  { name: "Cloud & DevOps Solutions", path: "/contact" },
  { name: "Digital Systems Integration", path: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const [subMenu, setSubMenu] = useState(null);

  const navRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        drawerRef.current &&
        !navRef.current.contains(event.target) &&
        !drawerRef.current.contains(event.target)
      ) {
        setDrop(null);
        setSubMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const toggle = (name) =>
    setDrop(drop === name ? null : name);

  const openMenu = () => {
    setIsMobileMenuOpen(true);
    setDrop(null);
    setSubMenu(null);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setDrop(null);
    setSubMenu(null);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMobileMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMobileMenuOpen]);

  const Dropdown = ({
    name,
    label,
    path,
    items,
    isRealEstate = false,
  }) => (
    <div className="nav-drop">
      <div className="nav-link-group">
        <Link to={path} onClick={closeMenus}>
          {label}
        </Link>

        <button
          className="dropdown-toggle"
          aria-expanded={drop === name}
          onClick={() => toggle(name)}
        >
          <ChevronDown size={15} />
        </button>
      </div>

      <div
        className={
          drop === name
            ? "dropdown active"
            : "dropdown"
        }
      >
        {!isRealEstate &&
          items.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={closeMenus}
            >
              {item.name}
            </Link>
          ))}

{isRealEstate &&
  items.map((item) => (
    <div
      key={item.name}
      className="submenu-item"
    >
      <div className="submenu-row">

        <Link
          to={item.path}
          onClick={closeMenus}
        >
          {item.name}
        </Link>
         <button
  type="button"
  className="submenu-arrow"
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubMenu(item.name);
  }}
>
  {subMenu === item.name ? "⌄" : "›"}
</button> 

      </div>

      {subMenu === item.name && (
        <div className="submenu">
          {item.locations.map((location) => (
            <Link
              key={location}
              to="/contact"
              onClick={closeMenus}
            >
              {location}
            </Link>
          ))}
        </div>
      )}
    </div>
  ))}

</div>
    </div>
  );

  return (
    <>
      <div className="topbar">
        <div className="nav-inner topbar-inner">
          <span>
            Real Estate · Insurance Services · IT Services
          </span>

          <div className="header-socials">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} />
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMenus}
        />
      )}

      <header className="navbar" ref={navRef}>
        <div className="nav-inner">
          <Link
            to="/"
            className="brand"
            onClick={closeMenus}
          >
            <img src={logo} alt="logo" />

            <span>
              <b>Sawai Associates</b>

              <small>
                Real Estate • Insurance • IT Services
              </small>
            </span>
          </Link>

          <nav id="site-nav" className="nav-menu">
            <Link to="/" onClick={closeMenus}>
              Home
            </Link>

            <Dropdown
              name="realEstate"
              label="Real Estate"
              path="/real-estate"
              items={realEstateMenu}
              isRealEstate={true}
            />

            <Dropdown
              name="insurance"
              label="Insurance Services"
              path="/insurance"
              items={insuranceMenu}
            />

            <Dropdown
              name="it"
              label="IT Services"
              path="/it-services"
              items={itMenu}
            />

            <Link to="/about" onClick={closeMenus}>
              About Us
            </Link>

            <Link to="/contact" onClick={closeMenus}>
              Contact
            </Link>
          </nav>

          <Link
            className="enquiry-btn"
            to="/contact"
          >
            Get Enquiry
          </Link>

          {/* Mobile quick-call button (hidden on desktop) */}
          <a
            className="mobile-call"
            href={`tel:+91${CONTACT.phone}`}
            aria-label={`Call ${CONTACT.phoneDisplay}`}
          >
            <Phone size={22} />
          </a>

          <button
            type="button"
            className="mobile-menu"
            aria-label="Open navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={openMenu}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ===== Mobile right-side slide-in drawer ===== */}
      <aside
        id="mobile-navigation"
        ref={drawerRef}
        aria-hidden={!isMobileMenuOpen}
        className={
          isMobileMenuOpen
            ? "mobile-drawer open"
            : "mobile-drawer"
        }
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            className="mobile-drawer-brand"
            onClick={closeMenus}
          >
            <img src={logo} alt="logo" />

            <b>Sawai Associates</b>
          </Link>

          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
            onClick={closeMenus}
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer navigation scrolls internally when it is taller than
            the viewport; the header above stays pinned. */}
        <nav className="mobile-drawer-nav">
          <Link to="/" onClick={closeMenus}>
            Home
          </Link>

          <Dropdown
            name="realEstate"
            label="Real Estate"
            path="/real-estate"
            items={realEstateMenu}
            isRealEstate={true}
          />

          <Dropdown
            name="insurance"
            label="Insurance Services"
            path="/insurance"
            items={insuranceMenu}
          />

          <Dropdown
            name="it"
            label="IT Services"
            path="/it-services"
            items={itMenu}
          />

          <Link to="/about" onClick={closeMenus}>
            About Us
          </Link>

          <Link to="/contact" onClick={closeMenus}>
            Contact
          </Link>

          {/* Mobile quick actions — let users act immediately */}
          <div className="nav-quick-actions">
            <a
              className="nav-quick-btn nav-quick-call"
              href={`tel:+91${CONTACT.phone}`}
            >
              <Phone size={18} /> Call Us
            </a>
            <a
              className="nav-quick-btn nav-quick-whatsapp"
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <Link
              className="nav-quick-btn nav-quick-enquiry"
              to="/contact"
              onClick={closeMenus}
            >
              Get Enquiry
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}