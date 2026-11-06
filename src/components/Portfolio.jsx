import { ArrowUpRight, Clock3 } from 'lucide-react'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'

function ProjectPreview({ project }) {
  if (project.previewImage) {
    return (
      <div className="project-preview">
        <div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>PREVIEW / DEMO</span></div>
        <div className="project-preview-media">
          <img
            src={project.previewImage}
            alt={project.imageAlt || `Captura do projeto demonstrativo ${project.name}`}
            loading="lazy"
            decoding="async"
            width={project.imageWidth}
            height={project.imageHeight}
            style={{ objectPosition: project.imagePosition || 'center center' }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`project-placeholder ${project.visualClass}`} role="img" aria-label={`Placeholder visual do projeto demonstrativo ${project.name}`}>
      <div className="browser-bar"><i /><i /><i /><span>PREVIEW / DEMO</span></div>
      <div className="placeholder-body">
        <span className="placeholder-index">{project.number}</span>
        <strong>{project.name}</strong>
        <small>IMAGEM DEFINITIVA EM PREPARAÇÃO</small>
      </div>
    </div>
  )
}

export default function Portfolio() {
  return (
    <section className="portfolio section-dark" id="projetos">
      <div className="section-shell">
        <SectionHeading
          dark
          eyebrow="Projetos demonstrativos"
          title={<>TRÊS FORMAS DE TRANSFORMAR UMA IDEIA EM <span>PRESENÇA DIGITAL.</span></>}
          intro="Conceitos fictícios desenvolvidos para tornar visíveis as possibilidades de cada plano. Não representam trabalhos contratados por clientes reais."
        />
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.id}>
              <ProjectPreview project={project} />
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.segment}</span>
                  <span>Plano {project.plan}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.url ? (
                  <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">
                    Ver demonstração <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-link is-disabled" aria-label="Demonstração ainda não disponível">
                    Demonstração em breve <Clock3 aria-hidden="true" />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
