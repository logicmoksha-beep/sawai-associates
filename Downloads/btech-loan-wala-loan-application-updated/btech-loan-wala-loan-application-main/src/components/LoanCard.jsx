import { Link } from 'react-router-dom'
import * as Icons from 'lucide-react'

export default function LoanCard({ loan }) {
  const Icon = Icons[loan.icon] || Icons.CircleDollarSign
  return (
    <article className="loan-card">
      <div className="icon-wrap"><Icon size={28} /></div>
      <h3>{loan.name}</h3>
      <span className="benefit">{loan.tagline}</span>
      <p className="desc">{loan.description}</p>
      <div className="loan-card-actions">
        <Link to={`/loans/${loan.slug}`} className="btn btn-outline">View Details</Link>
        <Link to={`/apply-now?type=${loan.id}`} className="btn btn-primary">Apply Now</Link>
      </div>
    </article>
  )
}
