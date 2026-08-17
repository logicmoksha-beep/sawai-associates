import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo/sawai-logo.png";

const insuranceMenu = [
  { name: "Life Insurance", path: "/insurance/life-insurance" },
  { name: "Health Insurance", path: "/insurance/health-insurance" },
  { name: "Motor Insurance", path: "/insurance/motor-insurance" },
  { name: "Business Insurance", path: "/insurance/business-insurance" },
];

const realEstateMenu = [
  { name: "Buy Property", path: "/real-estate/buy-property" },
  { name: "Sell Property", path: "/real-estate/sell-property" },
  { name: "Rent Property", path: "/real-estate/rent-property" },
  { name: "Commercial Property", path: "/real-estate/commercial-property" },
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
    if (navRef.current && !navRef.current.contains(event.target)) {
      setDrop(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
 const toggle = (name) => {
    setDrop(drop === name ? null : name);
  };
  return (
    <header className="navbar" ref={navRef}>
      <div className="nav-inner">

        <Link to="/" className="brand">
          <img src={logo} alt="Sawai Associates" />
          <span>
            <b>Sawai Associates</b>
            <small>Real Estate • Insurance • IT Services</small>
          </span>
        </Link>

        <nav className={open ? "nav-menu show" : "nav-menu"}>

          <Link to="/">Home</Link>

          {/* Insurance */}
          <div className="nav-drop">

            <div className="nav-link-group">
              <Link to="/insurance">Insurance</Link>

              <button
                className="dropdown-toggle"
                onClick={() => toggle("insurance")}
              >
                <ChevronDown size={15} />
              </button>
            </div>

            <div className={drop === "insurance" ? "dropdown active" : "dropdown"}>
              {insuranceMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    setDrop(null);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Real Estate */}
          <div className="nav-drop">

            <div className="nav-link-group">
              <Link to="/real-estate">Real Estate</Link>

              <button
                className="dropdown-toggle"
                onClick={() => toggle("realEstate")}
              >
                <ChevronDown size={15} />
              </button>
            </div>

            <div className={drop === "realEstate" ? "dropdown active" : "dropdown"}>
              {realEstateMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    setDrop(null);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="nav-drop">

            <div className="nav-link-group">
              <Link to="/it-services">IT Services</Link>

              <button
                className="dropdown-toggle"
                onClick={() => toggle("it")}
              >
                <ChevronDown size={15} />
              </button>
            </div>

            <div className={drop === "it" ? "dropdown active" : "dropdown"}>
              {itMenu.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    setDrop(null);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </nav>

        <Link className="enquiry-btn" to="/contact">
          Get Enquiry
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}