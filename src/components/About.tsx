import { FiMapPin, FiMail, FiGithub, FiLinkedin, FiAward, FiBook } from 'react-icons/fi';
import { personalInfo, education } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Who I Am</p>
            <h2 className="section-title">About Me</h2>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal direction="left" className="about__image-col">
            <div className="about__image-wrap">
              <img src="/profile.jpeg" alt={personalInfo.name} className="about__image" />
              <div className="about__image-card">
                <FiAward className="about__image-card-icon" />
                <div>
                  <p className="about__image-card-num">1st</p>
                  <p className="about__image-card-label">Tech Fest Prize</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="about__content-col">
            <ScrollReveal delay={0.1}>
              <p className="section-label">My Story</p>
              <h3 className="about__heading">
                Turning <span className="gradient-text">ideas</span> into reality,<br />one line at a time.
              </h3>
              <p className="about__bio">{personalInfo.bio}</p>
              <p className="about__bio mt-2">
                I'm committed to continuous learning and growth in my career. My journey so far has been
                about building strong technical foundations and gaining practical experience that will help me
                contribute meaningfully to innovative projects and advance in my professional goals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="about__info-grid">
                <div className="about__info-item">
                  <FiMapPin className="about__info-icon" />
                  <div>
                    <p className="about__info-label">Location</p>
                    <p className="about__info-value">{personalInfo.location}</p>
                  </div>
                </div>
                <div className="about__info-item">
                  <FiMail className="about__info-icon" />
                  <div>
                    <p className="about__info-label">Email</p>
                    <p className="about__info-value">{personalInfo.email}</p>
                  </div>
                </div>
                <div className="about__info-item">
                  <FiGithub className="about__info-icon" />
                  <div>
                    <p className="about__info-label">GitHub</p>
                    <p className="about__info-value">@BharathipriyaRamakrishnan</p>
                  </div>
                </div>
                <div className="about__info-item">
                  <FiLinkedin className="about__info-icon" />
                  <div>
                    <p className="about__info-label">LinkedIn</p>
                    <p className="about__info-value">in/bharathipriya-ramakrishnan</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="about__education">
                <div className="about__edu-header">
                  <FiBook className="about__edu-icon" />
                  <p className="about__edu-title">Education</p>
                </div>
                {education.map((edu, i) => (
                  <div key={i} className="about__edu-card">
                    <p className="about__edu-degree">{edu.degree}</p>
                    <p className="about__edu-institution">{edu.institution}</p>
                    <div className="about__edu-meta">
                      <span>{edu.period}</span>
                      <span className="about__edu-grade">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
