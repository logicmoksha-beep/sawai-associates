
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import ServicePage from './pages/ServicePage.jsx'
import Enquiry from './pages/Enquiry.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />

          {/* Service category overviews */}
          <Route
            path="/insurance"
            element={
              <ServicePage
                title="Insurance"
                subtitle="Comprehensive insurance solutions for life and assets."
                intro="Explore our full range of insurance services — from health and life to motor, travel and home cover."
              />
            }
          />
          <Route
            path="/real-estate"
            element={
              <ServicePage
                title="Real Estate"
                subtitle="Residential and commercial property solutions."
                intro="Buy, sell or rent with the guidance of experienced property professionals."
              />
            }
          />
          <Route
            path="/it-services"
            element={
              <ServicePage
                title="IT Services"
                subtitle="Technology solutions for modern business."
                intro="Web development, mobile apps, custom software and IT consultancy under one roof."
              />
            }
          />

          {/* Insurance */}
          <Route
            path="/insurance/health"
            element={
              <ServicePage
                title="Health Insurance"
                subtitle="Cover your medical expenses with health plans built around you."
                intro="Protect yourself and your family against rising healthcare costs with flexible health insurance policies."
                features={[
                  'Cashless hospitalisation at network hospitals',
                  'Family floater options',
                  'Pre & post hospitalisation cover',
                ]}
              />
            }
          />
          <Route
            path="/insurance/life"
            element={
              <ServicePage
                title="Life Insurance"
                subtitle="Secure your family's financial future."
                intro="Term and endowment plans that provide a financial safety net for your loved ones."
              />
            }
          />
          <Route
            path="/insurance/motor"
            element={
              <ServicePage
                title="Motor Insurance"
                subtitle="Complete cover for your two-wheeler or car."
                intro="Comprehensive and third-party vehicle insurance with quick claim assistance."
              />
            }
          />
          <Route
            path="/insurance/travel"
            element={
              <ServicePage
                title="Travel Insurance"
                subtitle="Travel the world with peace of mind."
                intro="Coverage for medical emergencies, trip cancellation and lost baggage while you travel."
              />
            }
          />
          <Route
            path="/insurance/home"
            element={
              <ServicePage
                title="Home Insurance"
                subtitle="Protect your home and its contents."
                intro="Safeguard your property against fire, theft and natural calamities."
              />
            }
          />

          {/* Real Estate */}
          <Route
            path="/real-estate/buy"
            element={
              <ServicePage
                title="Buy Property"
                subtitle="Find your dream home."
                intro="Browse verified residential properties matched to your budget and preferences."
                features={['Verified listings', 'Guidance through paperwork', 'Loan assistance']}
              />
            }
          />
          <Route
            path="/real-estate/sell"
            element={
              <ServicePage
                title="Sell Property"
                subtitle="Get the right price for your asset."
                intro="We help you list, market and close the sale of your property hassle-free."
              />
            }
          />
          <Route
            path="/real-estate/rent"
            element={
              <ServicePage
                title="Rent Property"
                subtitle="Rent a place that feels like home."
                intro="From tenant screening to lease agreements, we manage the entire rental process."
              />
            }
          />
          <Route
            path="/real-estate/commercial"
            element={
              <ServicePage
                title="Commercial Property"
                subtitle="Offices, retail and industrial spaces."
                intro="Identify the right commercial spaces for your business with market-accurate advice."
              />
            }
          />

          {/* IT Services */}
          <Route
            path="/it-services/web-development"
            element={
              <ServicePage
                title="Web Development"
                subtitle="Modern, fast, responsive websites."
                intro="We design and build web applications that deliver great user experiences."
                features={['Responsive design', 'Performance optimised', 'SEO friendly']}
              />
            }
          />
          <Route
            path="/it-services/mobile-apps"
            element={
              <ServicePage
                title="Mobile App Development"
                subtitle="iOS & Android applications."
                intro="Native and cross-platform apps that put your business in your customers' pockets."
              />
            }
          />
          <Route
            path="/it-services/software-solutions"
            element={
              <ServicePage
                title="Software Solutions"
                subtitle="Custom software for your business."
                intro="Tailor-made enterprise solutions designed to streamline your operations."
              />
            }
          />
          <Route
            path="/it-services/consultancy"
            element={
              <ServicePage
                title="IT Consultancy"
                subtitle="Technology advice that drives growth."
                intro="Strategic IT planning, audits and roadmaps to keep your business ahead."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
