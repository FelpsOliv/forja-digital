import SectionHeading from './SectionHeading'

const steps = [
  ['01', 'Conversa inicial.', 'Entendimento do negócio e das necessidades.'],
  ['02', 'Definição.', 'Escolha do plano e alinhamento do conteúdo.'],
  ['03', 'Desenvolvimento.', 'Criação da página com a identidade do negócio.'],
  ['04', 'Revisão.', 'Ajustes dentro do número de revisões contratado.'],
  ['05', 'Publicação.', 'Disponibilização da página na hospedagem definida.'],
]

export default function Process() {
  return (
    <section className="process section-light" id="processo">
      <div className="section-shell">
        <SectionHeading eyebrow="Como funciona" title={<>DO PRIMEIRO CONTATO AO <span>SITE NO AR.</span></>} />
        <ol className="process-list">
          {steps.map(([number, title, text]) => (
            <li className="reveal" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
