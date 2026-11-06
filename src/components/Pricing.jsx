import { Check, MessageCircle } from 'lucide-react'
import { plans } from '../data/plans'
import { siteConfig } from '../config/site'
import { getWhatsAppLink } from '../utils/contact'
import SectionHeading from './SectionHeading'

function ContactButton({ plan }) {
  const link = getWhatsAppLink(siteConfig.messages[plan.messageKey])
  return <a className="button button-plan" href={link} target="_blank" rel="noopener noreferrer">Escolher este plano <MessageCircle aria-hidden="true" /></a>
}

export default function Pricing() {
  return (
    <section className="pricing section-light" id="planos">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Planos e investimento"
          title={<>UM SITE CERTO PARA CADA MOMENTO DO <span>SEU NEGÓCIO.</span></>}
          intro="Do essencial ao agendamento online, escolha a solução que faz sentido para você."
        />
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`price-card reveal ${plan.badge ? 'featured' : ''}`} key={plan.id}>
              {plan.badge && <p className="price-badge">{plan.badge}</p>}
              <div className="price-head">
                <p className="plan-name">{plan.name}</p>
                <p className="plan-price">{plan.price}</p>
                <p>{plan.objective}</p>
              </div>
              <ul className="feature-list">
                {plan.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}
              </ul>
              <p className="plan-note">{plan.note}</p>
              <ContactButton plan={plan} />
            </article>
          ))}
        </div>
        <p className="commercial-note reveal">Valores para os escopos descritos. Funcionalidades adicionais, domínio, serviços de terceiros e manutenção contínua podem ser cobrados separadamente.</p>
      </div>
    </section>
  )
}
