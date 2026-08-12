import { Phone, Instagram, Linkedin, ShieldCheck, Landmark, Clock } from 'lucide-react'

export default function TopBar() {
  const phone = import.meta.env.VITE_CONTACT_NUMBER || '7276063476'
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span><ShieldCheck size={14} /> Trusted Loan Assistance</span>
          <span><Landmark size={14} /> Multiple Bank &amp; NBFC Options</span>
          <span><Clock size={14} /> Quick Loan Assistance</span>
        </div>
        <div className="topbar-right">
          <a href={`tel:${phone}`}><Phone size={14} /> Call Us: {phone}</a>
          <a href="https://www.instagram.com/btechloanwala?igsh=Z2tmbDV3bGtmc3Q=" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={14} /></a>
          <a href="https://www.linkedin.com/company/btechloanwala/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={14} /></a>
        </div>
      </div>
    </div>
  )
}
