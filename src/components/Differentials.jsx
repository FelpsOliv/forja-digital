import { Braces, MessagesSquare, MoveUpRight, Scan } from 'lucide-react'
import SectionHeading from './SectionHeading'

const items = [
  [MoveUpRight, 'Design com direção', 'Personalizado dentro do escopo contratado, sem fórmulas visuais genéricas.'],
  [Scan, 'Experiência responsiva', 'A mesma clareza e presença em celulares, tablets e computadores.'],
  [Braces, 'Tecnologia atual', 'Código organizado, carregamento leve e ferramentas modernas.'],
  [MessagesSquare, 'Comunicação direta', 'Alinhamento objetivo durante as etapas do projeto.'],
]

export default function Differentials() {
  return (
    <section className="differentials section-dark">
      <div className="section-shell">
        <SectionHeading dark eyebrow="Diferenciais" title={<>CADA DETALHE <span>IMPORTA.</span></>} />
        <div className="differential-grid">
          {items.map(([Icon, title, text], index) => (
            <article className="differential-card reveal" key={title}>
              <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
