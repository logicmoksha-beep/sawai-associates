import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo/sawai-logo.png";

const menus = {
  insurance: ["Life Insurance","Health Insurance","Motor Insurance","Business Insurance"],
  realEstate: ["Buy Property","Sell Property","Rent Property","Commercial Property"],
  it: ["Web Development","Mobile App Development","Software Solutions","IT Consultancy"]
};

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [drop,setDrop]=useState(null);

  const toggle=(name)=>setDrop(drop===name?null:name);

  return <header className="navbar">
    <div className="nav-inner">
      <Link to="/" className="brand" onClick={()=>setOpen(false)}>
        <img src={logo} alt="Sawai Associates"/>
        <span><b>Sawai Associates</b><small>Real Estate • Insurance • IT Services</small></span>
      </Link>

      <nav className={open?"nav-menu show":"nav-menu"}>
        <Link to="/" onClick={()=>setOpen(false)}>Home</Link>

        <div className="nav-drop">
          <button onClick={()=>toggle("insurance")}>Insurance <ChevronDown size={15}/></button>
          <div className={drop==="insurance"?"dropdown active":"dropdown"}>
            {menus.insurance.map(x=><Link key={x} to="/insurance" onClick={()=>setOpen(false)}>{x}</Link>)}
          </div>
        </div>

        <div className="nav-drop">
          <button onClick={()=>toggle("realEstate")}>Real Estate <ChevronDown size={15}/></button>
          <div className={drop==="realEstate"?"dropdown active":"dropdown"}>
            {menus.realEstate.map(x=><Link key={x} to="/real-estate" onClick={()=>setOpen(false)}>{x}</Link>)}
          </div>
        </div>

        <div className="nav-drop">
          <button onClick={()=>toggle("it")}>IT Services <ChevronDown size={15}/></button>
          <div className={drop==="it"?"dropdown active":"dropdown"}>
            {menus.it.map(x=><Link key={x} to="/it-services" onClick={()=>setOpen(false)}>{x}</Link>)}
          </div>
        </div>

        <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
        <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
      </nav>

      <Link className="enquiry-btn" to="/contact">Get Enquiry</Link>
      <button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Menu">
        {open?<X/>:<Menu/>}
      </button>
    </div>
  </header>
}