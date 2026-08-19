import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Insurance from "./pages/Insurance";
import LifeInsurance from "./pages/LifeInsurance";
import HealthInsurance from "./pages/HealthInsurance";
import MotorInsurance from "./pages/MotorInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";

import RealEstate from "./pages/RealEstate";
import BuyProperty from "./pages/BuyProperty";
import SellProperty from "./pages/SellProperty";
import RentProperty from "./pages/RentProperty";
import CommercialProperty from "./pages/CommercialProperty";

import ITServices from "./pages/ITServices";
import WebDevelopment from "./pages/WebDevelopment";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import SoftwareSolutions from "./pages/SoftwareSolutions";
import ITConsultancy from "./pages/ITConsultancy";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Insurance */}
          <Route path="/insurance" element={<Insurance />} />
          <Route
            path="/insurance/life-insurance"
            element={<LifeInsurance />}
          />
          <Route
            path="/insurance/health-insurance"
            element={<HealthInsurance />}
          />
          <Route
            path="/insurance/motor-insurance"
            element={<MotorInsurance />}
          />
          <Route
            path="/insurance/business-insurance"
            element={<BusinessInsurance />}
          />

          {/* Real Estate */}
          <Route path="/real-estate" element={<RealEstate />} />
          <Route
            path="/real-estate/buy-property"
            element={<BuyProperty />}
          />
          <Route
            path="/real-estate/sell-property"
            element={<SellProperty />}
          />
          <Route
            path="/real-estate/rent-property"
            element={<RentProperty />}
          />
          <Route
            path="/real-estate/commercial-property"
            element={<CommercialProperty />}
          />

          {/* IT Services */}
          <Route path="/it-services" element={<ITServices />} />
          <Route
            path="/it-services/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/it-services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/it-services/software-solutions"
            element={<SoftwareSolutions />}
          />
          <Route
            path="/it-services/it-consultancy"
            element={<ITConsultancy />}
          />
        </Routes>
      </main>

      <Footer />

      <WhatsAppChat />
    </>
  );
}