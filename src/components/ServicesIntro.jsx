import SectionHeading from './SectionHeading'

const pillars = [
  ['01', 'Design que representa sua marca.'],
  ['02', 'Experiência pensada para todos os dispositivos.'],
  ['03', 'Caminhos claros para contato e conversão.'],
]

export default function ServicesIntro() {
  return (
    <section className="services section-light" id="o-que-fazemos">
      <div className="section-shell">
        <SectionHeading
          eyebrow="O que fazemos"
          title={<>NÃO É SÓ ESTAR NA INTERNET.<br /><span>É SABER SE APRESENTAR.</span></>}
          intro="Uma boa landing page reúne o que seu cliente precisa saber, valoriza os diferenciais do seu negócio e facilita o próximo passo: entrar em contato."
        />
        <div className="pillars">
          {pillars.map(([number, text]) => (
            <article className="pillar reveal" key={number}>
              <span>{number}</span>
              <h3>{text}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
