import { useState } from 'react';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Projects.css';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const displayed = filter === 'featured' ? projects.filter(p => p.featured) : projects;

  return (
    <section id="projects" className="projects">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">My Work</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              A selection of projects I've built — from real-world apps to side experiments.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="projects__filters">
            <button className={`projects__filter ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              All Projects
            </button>
            <button className={`projects__filter ${filter === 'featured' ? 'active' : ''}`} onClick={() => setFilter('featured')}>
              ✦ Featured
            </button>
          </div>
        </ScrollReveal>

        <div className="projects__grid">
          {displayed.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <div
                className={`projects__card ${project.featured ? 'featured' : ''}`}
                style={{ '--project-color': project.color } as React.CSSProperties}
              >
                {project.featured && <span className="projects__badge">✦ Featured</span>}

                <div className="projects__card-top">
                  <div className="projects__icon-wrap">
                    <FiCode size={22} style={{ color: project.color }} />
                  </div>
                  <div className="projects__links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link-btn" aria-label="GitHub">
                      <FiGithub size={16} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link-btn" aria-label="Live demo">
                      <FiExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__desc">{project.description}</p>

                <div className="projects__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
