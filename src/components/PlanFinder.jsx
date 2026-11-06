import { useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { plans } from '../data/plans'
import { projects } from '../data/projects'
import { siteConfig } from '../config/site'
import { getWhatsAppLink } from '../utils/contact'

const options = [
  { planId: 'essential', label: 'Quero apresentar meu negócio e receber mensagens.', reason: 'O plano Essencial organiza o fundamental e cria um caminho direto para o WhatsApp.' },
  { planId: 'professional', label: 'Quero mostrar meus serviços e diferenciais com mais detalhes.', reason: 'O plano Profissional oferece uma narrativa mais completa, com espaço para serviços, galeria e dúvidas.' },
  { planId: 'premium', label: 'Quero que meus clientes possam agendar horários online.', reason: 'O plano Premium inclui o fluxo de disponibilidade e registro de agendamentos.' },
]

export default function PlanFinder() {
  const [selected, setSelected] = useState(null)
  const option = options.find((item) => item.planId === selected)
  const plan = plans.find((item) => item.id === selected)
  const project = projects.find((item) => item.id === plan?.projectId)
  const contactLink = plan ? getWhatsAppLink(siteConfig.messages.recommendation(plan.name)) : null

  return (
    <section className="plan-finder section-orange" aria-labelledby="finder-title">
      <div className="section-shell finder-grid">
        <div className="finder-intro reveal">
          <p className="eyebrow">Seletor de plano</p>
          <h2 id="finder-title">AINDA NÃO SABE <span>QUAL ESCOLHER?</span></h2>
          <p>Responda uma pergunta simples. A recomendação considera apenas a função principal que você espera do site.</p>
        </div>
        <div className="finder-panel reveal">
          <fieldset>
            <legend>O que você quer que seu site faça?</legend>
            {options.map((item, index) => (
              <label className={selected === item.planId ? 'is-selected' : ''} key={item.planId}>
                <input type="radio" name="plan-goal" value={item.planId} checked={selected === item.planId} onChange={() => setSelected(item.planId)} />
                <span className="option-number">0{index + 1}</span>
                <span>{item.label}</span>
              </label>
            ))}
          </fieldset>
          <div className={`recommendation ${plan ? 'is-visible' : ''}`} aria-live="polite">
            {plan ? (
              <>
                <p className="recommendation-label">Sua recomendação</p>
                <div className="recommendation-title"><h3>{plan.name}</h3><strong>{plan.price}</strong></div>
                <p>{option.reason}</p>
                <div className="recommendation-actions">
                  <a href={contactLink} target="_blank" rel="noopener noreferrer">Conversar sobre este plano <MessageCircle aria-hidden="true" /></a>
                  {project?.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">Ver exemplo <ArrowUpRight aria-hidden="true" /></a> : <span className="is-disabled">Exemplo em breve</span>}
                </div>
              </>
            ) : <p className="recommendation-empty">Selecione a opção que mais se aproxima do seu objetivo.</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
