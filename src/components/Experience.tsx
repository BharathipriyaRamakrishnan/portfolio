import { FiCalendar, FiTag } from 'react-icons/fi';
import { experience } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Experience.css';

const typeColors: Record<string, string> = {
  Internship: '#ea9a97',
  Freelance: '#c4a7e7',
  Academic: '#f6c177',
};

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience__bg-glow" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">My Journey</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
              My professional and academic journey — the roles, challenges, and wins along the way.
            </p>
          </div>
        </ScrollReveal>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.12} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="experience__item">
                <div className="experience__line-wrap">
                  <div
                    className="experience__dot"
                    style={{ '--exp-color': typeColors[exp.type] } as React.CSSProperties}
                  />
                  {i < experience.length - 1 && <div className="experience__connector" />}
                </div>

                <div
                  className="experience__card card"
                  style={{ '--exp-color': typeColors[exp.type] } as React.CSSProperties}
                >
                  <div className="experience__card-header">
                    <div>
                      <h3 className="experience__role">{exp.role}</h3>
                      <p className="experience__company">{exp.company}</p>
                    </div>
                    <div className="experience__meta">
                      <span className="experience__type" style={{ color: typeColors[exp.type], borderColor: typeColors[exp.type] }}>
                        <FiTag size={10} /> {exp.type}
                      </span>
                      <span className="experience__period">
                        <FiCalendar size={12} /> {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="experience__desc">{exp.description}</p>

                  <div className="experience__achievements">
                    {exp.achievements.map((a, ai) => (
                      <div key={ai} className="experience__achievement">
                        <span className="experience__achievement-dot" />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>

                  <div className="experience__tech">
                    {exp.tech.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
