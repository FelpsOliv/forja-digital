import { ArrowUpRight } from 'lucide-react'
import { getWhatsAppLink } from '../utils/contact'

export default function Contact() {
  const contactLink = getWhatsAppLink()
  return (
    <section className="contact section-orange" id="contato" aria-labelledby="contact-title">
      <div className="contact-mark" aria-hidden="true">F.</div>
      <div className="section-shell contact-inner reveal">
        <p className="eyebrow">Vamos construir</p>
        <h2 id="contact-title">SEU PRÓXIMO SITE COMEÇA COM <span>UMA CONVERSA.</span></h2>
        <a className="button button-contact" href={contactLink} target="_blank" rel="noopener noreferrer">Solicitar orçamento no WhatsApp <ArrowUpRight aria-hidden="true" /></a>
      </div>
    </section>
  )
}
