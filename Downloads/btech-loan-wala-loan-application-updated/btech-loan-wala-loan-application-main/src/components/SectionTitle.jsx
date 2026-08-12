export default function SectionTitle({ eyebrow, title, accent, subtitle }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
      <h2>{title} {accent && <span className="accent">{accent}</span>}</h2>
      <div className="divider" />
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}
