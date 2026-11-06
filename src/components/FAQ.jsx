import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqItems } from '../data/faq'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="faq section-light" id="duvidas">
      <div className="section-shell faq-layout">
        <SectionHeading eyebrow="Perguntas frequentes" title={<>INFORMAÇÃO CLARA.<br /><span>DECISÃO TRANQUILA.</span></>} intro="O que você precisa saber antes de começar." />
        <div className="faq-list reveal">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.question}>
                <h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} id={`faq-button-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}><span>{item.question}</span><Plus aria-hidden="true" /></button></h3>
                <div className="faq-panel" id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} hidden={!isOpen}><p>{item.answer}</p></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
