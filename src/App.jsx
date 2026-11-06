import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ServicesIntro from './components/ServicesIntro'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import ComparisonTable from './components/ComparisonTable'
import PlanFinder from './components/PlanFinder'
import Process from './components/Process'
import Differentials from './components/Differentials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'))
      return undefined
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <ServicesIntro />
        <Portfolio />
        <Pricing />
        <ComparisonTable />
        <PlanFinder />
        <Process />
        <Differentials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
