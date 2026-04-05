import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Navbar.css';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar__inner">
        <Link to="hero" smooth duration={600} className="navbar__logo" offset={-80}>
          <span className="gradient-text">{personalInfo.name.slice(0, 1)}</span>
          <span className="navbar__logo-dot" />
        </Link>

        <nav className="navbar__links">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={600}
              offset={-80}
              spy
              activeClass="active"
              className="navbar__link"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={personalInfo.cvFile} download className="btn btn-primary navbar__cv-btn">
            <FiDownload size={15} /> Download CV
          </a>
          <button
            className="navbar__hamburger"
            id="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={600}
                offset={-80}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a href={personalInfo.cvFile} download className="btn btn-primary mt-2" style={{ width: 'fit-content' }}>
              <FiDownload size={14} /> Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
