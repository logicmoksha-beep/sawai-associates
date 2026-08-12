import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton({ label = false }) {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || '7276063476'
  const message = encodeURIComponent('Hello BTech loan_wala , I would like to enquire about a loan.')
  const href = `https://wa.me/91${number}?text=${message}`
  if (label) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="btn btn-outline">
        <MessageCircle size={16} /> WhatsApp Us
      </a>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="wa-fab" aria-label="Chat on WhatsApp">
      <MessageCircle size={24} />
    </a>
  )
}
