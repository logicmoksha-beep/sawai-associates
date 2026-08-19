import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo/sawai-logo.png";
import { CONTACT } from "../data/contact";

const realEstateMenu = [
  { name: "Buy Property", path: "/real-estate/buy-property" },
  { name: "Sell Property", path: "/real-estate/sell-property" },
  { name: "Rent Property", path: "/real-estate/rent-property" },
  { name: "Commercial Property", path: "/real-estate/commercial-property" },
];

const insuranceMenu = [
  { name: "Life Insurance", path: "/insurance/life-insurance" },
  { name: "Health Insurance", path: "/insurance/health-insurance" },
  { name: "Motor Insurance", path: "/insurance/motor-insurance" },
  { name: "Business Insurance", path: "/insurance/business-insurance" },
];

const itMenu = [
  { name: "Web Development", path: "/it-services/web-development" },
  { name: "Mobile App Development", path: "/it-services/mobile-app-development" },
  { name: "Software Solutions", path: "/it-services/software-solutions" },
  { name: "IT Consultancy", path: "/it-services/it-consultancy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setDrop(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggle = (name) => setDrop(drop === name ? null : name);
  const closeMenus = () => { setOpen(false); setDrop(null); };

  const Dropdown = ({ name, label, path, items }) => (
    <div className="nav-drop">
      <div className="nav-link-group">
        <Link to={path} onClick={closeMenus}>{label}</Link>
        <button className="dropdown-toggle" onClick={() => toggle(name)} aria-label={`Toggle ${label} menu`}>
          <ChevronDown size={15} />
        </button>
      </div>
      <div className={drop === name ? "dropdown active" : "dropdown"}>
        {items.map((item) => (
          <Link key={item.name} to={item.path} onClick={closeMenus}>{item.name}</Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="topbar">
        <div className="nav-inner topbar-inner">
          <span>Real Estate · Insurance Services · IT Services</span>
          <div className="header-socials">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
          </div>
        </div>
      </div>

      <header className="navbar" ref={navRef}>
        <div className="nav-inner">
          <Link to="/" className="brand" onClick={closeMenus}>
            <img src={logo} alt="Sawai Associates company logo" />
            <span><b>Sawai Associates</b><small>Real Estate • Insurance • IT Services</small></span>
          </Link>

          <nav className={open ? "nav-menu show" : "nav-menu"}>
            <Link to="/" onClick={closeMenus}>Home</Link>
            <Dropdown name="realEstate" label="Real Estate" path="/real-estate" items={realEstateMenu} />
            <Dropdown name="insurance" label="Insurance Services" path="/insurance" items={insuranceMenu} />
            <Dropdown name="it" label="IT Services" path="/it-services" items={itMenu} />
            <Link to="/about" onClick={closeMenus}>About Us</Link>
            <Link to="/contact" onClick={closeMenus}>Contact</Link>
          </nav>

          <Link className="enquiry-btn" to="/contact">Get Enquiry</Link>
          <div className="nav-socials">

          </div>
          <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
    </>
  );
}
