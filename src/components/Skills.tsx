import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Skills.css';

const categoryColors: Record<string, string> = {
  Frontend: '#ea9a97',
  Backend: '#c4a7e7',
  Database: '#9ccfd8',
  'Tools & DevOps': '#f6c177',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skills.filter(s => s.category === activeCategory)
    : skills;

  return (
    <section id="skills" className="skills">
      <div className="skills__bg-glow" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">My Toolkit</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              A curated set of technologies I've worked with across frontend, backend, databases, and tooling.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="skills__filters">
            <button
              className={`skills__filter-btn ${activeCategory === null ? 'active' : ''}`}
              onClick={() => setActiveCategory(null)}
            >
              All
            </button>
            {skills.map(s => (
              <button
                key={s.category}
                className={`skills__filter-btn ${activeCategory === s.category ? 'active' : ''}`}
                style={{ '--filter-color': categoryColors[s.category] } as React.CSSProperties}
                onClick={() => setActiveCategory(activeCategory === s.category ? null : s.category)}
              >
                {s.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="skills__grid">
          {filtered.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.1}>
              <div
                className="skills__card"
                style={{ '--card-color': categoryColors[group.category] } as React.CSSProperties}
              >
                <div className="skills__card-header">
                  <div className="skills__card-dot" />
                  <h3 className="skills__card-title">{group.category}</h3>
                </div>
                <div className="skills__tags">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="skills__tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
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
