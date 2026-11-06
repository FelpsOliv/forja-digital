export default function SectionHeading({ eyebrow, title, intro, dark = false }) {
  return (
    <div className={`section-heading reveal ${dark ? 'section-heading-dark' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}
