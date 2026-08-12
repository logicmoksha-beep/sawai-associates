import { Link } from 'react-router-dom'
import { BookOpen, Calculator, ClipboardCheck, FileText, HelpCircle } from 'lucide-react'

const items = [
  { icon: BookOpen, title: 'Loan Guides', desc: 'Comprehensive guides to help you understand each loan product.', to: '/loans' },
  { icon: Calculator, title: 'EMI Guide', desc: 'Learn how EMI is computed and how to plan your repayments.', to: '/emi-calculator' },
  { icon: ClipboardCheck, title: 'Eligibility Guide', desc: 'Understand the eligibility criteria for different loans.', to: '/eligibility' },
  { icon: FileText, title: 'Loan Documentation Guide', desc: 'Know the documents typically required for loan applications.', to: '/loans' },
  { icon: HelpCircle, title: 'FAQs', desc: 'Answers to the most common loan-related questions.', to: '/faq' }
]

export default function Resources() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {items.map((it, i) => (
              <Link key={i} to={it.to} className="card resource-card">
                <div style={{ width: 50, height: 50, borderRadius: 12, background: 'rgba(30,95,191,.1)', color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <it.icon size={22} />
                </div>
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
