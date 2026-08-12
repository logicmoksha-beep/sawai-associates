import FAQ from '../components/FAQ.jsx'
import { faqData } from '../data/faqData.js'

export default function FAQPage() {
  return (
    <>
      <section className="section">
        <div className="container">
          <FAQ items={faqData} />
        </div>
      </section>
    </>
  )
}
