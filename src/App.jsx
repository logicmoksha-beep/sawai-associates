import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Insurance from "./pages/Insurance";
import RealEstate from "./pages/RealEstate";
import ITServices from "./pages/ITServices";
import Contact from "./pages/Contact";

export default function App(){
  return <>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
        <Route path="/real-estate" element={<RealEstate/>}/>
        <Route path="/it-services" element={<ITServices/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </main>
    <Footer/>
  </>;
}