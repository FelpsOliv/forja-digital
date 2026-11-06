import { ArrowDownRight, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true">
        <div className="hero-orbit"><span>F</span></div>
        <span className="coordinate coordinate-a">23° 33′ / 46° 38′</span>
        <span className="coordinate coordinate-b">PRECISÃO / 01</span>
      </div>
      <div className="hero-content">
        <p className="hero-kicker">Estratégia visual + desenvolvimento</p>
        <h1 id="hero-title">SEU NEGÓCIO É ÚNICO.<br />SEU SITE PRECISA <em>MOSTRAR ISSO.</em></h1>
        <div className="hero-bottom">
          <p>Criamos landing pages profissionais que valorizam sua marca, apresentam seus serviços e facilitam o contato com novos clientes.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#planos">Conhecer os planos <ArrowRight aria-hidden="true" /></a>
            <a className="button button-ghost" href="#projetos">Explorar projetos <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <p className="hero-signature">DESIGN. DESENVOLVIMENTO. PRESENÇA DIGITAL.</p>
    </section>
  )
}
