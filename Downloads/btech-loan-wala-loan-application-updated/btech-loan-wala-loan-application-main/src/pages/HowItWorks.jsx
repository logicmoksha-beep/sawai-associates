import { FileText, MessageSquare, UserCheck, CheckCircle2 } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: FileText, title: 'Apply Online', desc: 'Fill in a quick online application with your basic details and loan requirement.' },
    { icon: MessageSquare, title: 'Share Your Details', desc: 'Our team collects the required documents and clarifies any questions you may have.' },
    { icon: UserCheck, title: 'Get Expert Review', desc: 'A finance expert reviews your profile and identifies suitable loan options from partner lenders.' },
    { icon: CheckCircle2, title: 'Proceed With Suitable Loan Option', desc: 'Choose the option that fits best and complete the process with lender-level formalities.' }
  ]

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {steps.map((s, i) => (
              <div className="card" key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: 16, background: 'rgba(30,95,191,.1)', color: 'var(--blue)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <s.icon size={26} />
                </div>
                <h4>{i + 1}. {s.title}</h4>
                <p style={{ color: 'var(--text-2)', fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="disclaimer" style={{ maxWidth: 900, margin: '32px auto 0' }}>
            Note: We facilitate loan assistance and do not guarantee approval. All loans are subject to lender eligibility, documentation and applicable policies.
          </div>
        </div>
      </section>
    </>
  )
}
