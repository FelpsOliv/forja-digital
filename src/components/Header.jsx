import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../config/site'
import { getWhatsAppLink } from '../utils/contact'

const navItems = [
  ['Projetos', '#projetos'],
  ['Planos', '#planos'],
  ['Processo', '#processo'],
  ['Dúvidas', '#duvidas'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const contactLink = getWhatsAppLink()

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="FORJA Digital — início">
        <span>{siteConfig.wordmark}</span>
        <small>{siteConfig.descriptor}</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="main-navigation"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav id="main-navigation" className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-cta" href={contactLink} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Solicitar orçamento</a>
      </nav>
    </header>
  )
}
