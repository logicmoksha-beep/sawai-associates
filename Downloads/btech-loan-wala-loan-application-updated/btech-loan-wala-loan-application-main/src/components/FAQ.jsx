import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
          <button
            onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            aria-expanded={openIdx === i}
          >
            <span>{item.q}</span>
            <ChevronDown size={20} className="icon" />
          </button>
          <div className="answer">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
