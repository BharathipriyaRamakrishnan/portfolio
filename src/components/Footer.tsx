import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="hero" smooth duration={600} className="footer__logo">
            <span className="gradient-text">{personalInfo.name.slice(0, 1)}</span>
            <span style={{ color: 'var(--clr-text-muted)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
              {personalInfo.name}
            </span>
          </Link>
          <p className="footer__tagline">{personalInfo.tagline}</p>
        </div>

        <div className="footer__links">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map(label => (
            <Link key={label} to={label.toLowerCase()} smooth duration={600} offset={-80} className="footer__link">
              {label}
            </Link>
          ))}
        </div>

        <div className="footer__socials">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer__social">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="footer__social">
            <FiMail size={18} />
          </a>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} {personalInfo.name}. Made with <FiHeart className="footer__heart" />.
          </p>
        </div>
      </div>
    </footer>
  );
}
