import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';


export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background effects */}
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__grid" />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.div
            className="hero__greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__greeting-dot" /> Hello, I'm
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            className="hero__role-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <span className="hero__role gradient-text">{personalInfo.role}</span>
          </motion.div>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <Link to="projects" smooth duration={600} offset={-80}>
              <button id="view-work-btn" className="btn btn-primary hero__cta">
                View My Work <FiArrowDown size={16} />
              </button>
            </Link>
            <a href={personalInfo.cvFile} download id="download-cv-hero" className="btn btn-outline hero__cta">
              <FiDownload size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar-ring hero__avatar-ring--3" />
            <div className="hero__avatar">
              <img src="/profile.jpeg" alt={personalInfo.name} />
            </div>
            <div className="hero__avatar-glow" />
          </div>

          <div className="hero__stats">
            {[
              { num: '5+', label: 'Projects' },
              { num: '1+', label: 'Years Exp.' },
              { num: '10+', label: 'Technologies' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="hero__stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
              >
                <span className="hero__stat-num gradient-text">{stat.num}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="hero__scroll-icon"
          />
        </Link>
      </motion.div>
    </section>
  );
}
