import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SeoManager from './seo/SeoManager.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Loans from './pages/Loans.jsx'
import PersonalLoan from './pages/PersonalLoan.jsx'
import HomeLoan from './pages/HomeLoan.jsx'
import BusinessLoan from './pages/BusinessLoan.jsx'
import LoanAgainstProperty from './pages/LoanAgainstProperty.jsx'
import NewCarLoan from './pages/NewCarLoan.jsx'
import HomeLoanBalanceTransfer from './pages/HomeLoanBalanceTransfer.jsx'
import UsedCarLoan from './pages/UsedCarLoan.jsx'
import ProjectFunding from './pages/ProjectFunding.jsx'
import EMICalculator from './pages/EMICalculator.jsx'
import Eligibility from './pages/Eligibility.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Contact from './pages/Contact.jsx'
import ApplyNow from './pages/ApplyNow.jsx'
import Resources from './pages/Resources.jsx'
import FAQPage from './pages/FAQPage.jsx'

export default function App() {
  return (
    <>
      <SeoManager />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/loans/personal" element={<PersonalLoan />} />
        <Route path="/loans/home" element={<HomeLoan />} />
        <Route path="/loans/business" element={<BusinessLoan />} />
        <Route path="/loans/loan-against-property" element={<LoanAgainstProperty />} />
        <Route path="/loans/new-car" element={<NewCarLoan />} />
        <Route path="/loans/home-loan-balance-transfer" element={<HomeLoanBalanceTransfer />} />
        <Route path="/loans/used-car" element={<UsedCarLoan />} />
        <Route path="/loans/project-funding" element={<ProjectFunding />} />
        <Route path="/emi-calculator" element={<EMICalculator />} />
        <Route path="/eligibility" element={<Eligibility />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/apply-now" element={<ApplyNow />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </Layout>
    </>
  )
}
