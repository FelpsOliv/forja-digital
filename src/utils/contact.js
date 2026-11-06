import { siteConfig } from '../config/site.js'

export function getWhatsAppLink(message = siteConfig.messages.general) {
  const number = siteConfig.contact.whatsapp.replace(/\D/g, '')
  if (!number) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
