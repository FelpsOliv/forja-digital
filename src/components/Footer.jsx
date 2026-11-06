import { siteConfig } from '../config/site'
import { getWhatsAppLink } from '../utils/contact'

export default function Footer() {
  const whatsappLink = getWhatsAppLink()
  const projectLinks = Object.entries(siteConfig.projects).filter(([, value]) => value)
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="brand footer-brand" href="#top"><span>{siteConfig.wordmark}</span><small>{siteConfig.descriptor}</small></a>
        <p>{siteConfig.slogan}</p>
      </div>
      <div className="footer-links">
        <nav aria-label="Navegação do rodapé"><a href="#projetos">Projetos</a><a href="#planos">Planos</a><a href="#processo">Processo</a><a href="#duvidas">Dúvidas</a></nav>
        <nav aria-label="Canais de contato"><a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a></nav>
        {projectLinks.length > 0 && <nav aria-label="Projetos demonstrativos">{projectLinks.map(([key, value]) => <a key={key} href={value} target="_blank" rel="noopener noreferrer">Demo {key}</a>)}</nav>}
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} FORJA Digital.</span><span>Todos os direitos reservados.</span><a href="#top">Voltar ao topo ↑</a></div>
    </footer>
  )
}
