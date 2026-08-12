import LoanCard from '../components/LoanCard.jsx'
import { loanProducts } from '../data/loanData.js'

export default function Loans() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="loan-grid">
            {loanProducts.map(l => <LoanCard key={l.id} loan={l} />)}
          </div>
        </div>
      </section>
    </>
  )
}
