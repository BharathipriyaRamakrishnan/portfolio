import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/bharathipriyaramakrishnan@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          subject: state.subject,
          message: state.message
        })
      });

      if (response.ok) {
        setSent(true);
        setState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 2000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__bg-glow" />
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact__grid">
          {/* Info Column */}
          <ScrollReveal direction="left" className="contact__info">
            <div className="contact__info-card">
              <h3 className="contact__info-heading">Let's work together</h3>
              <p className="contact__info-text">
                I'm currently open to freelance opportunities and full-time positions.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>

              <div className="contact__info-items">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="contact__info-item">
                    <div className="contact__info-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="contact__info-label">{label}</p>
                      <p className="contact__info-value">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact__socials">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="GitHub">
                  <FiGithub size={18} />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact__social" aria-label="LinkedIn">
                  <FiLinkedin size={18} />
                </a>
              </div>

              <a href={personalInfo.cvFile} download id="download-cv-contact" className="btn btn-outline contact__cv-btn">
                <FiDownload size={15} /> Download CV
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="contact__form-wrap">
            <form ref={formRef} onSubmit={handleSubmit} className="contact__form" id="contact-form">
              <div className="contact__field-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="contact__input"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="contact__input"
                    required
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="subject" className="contact__label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={state.subject}
                  onChange={handleChange}
                  placeholder="Let's collaborate on a project"
                  className="contact__input"
                  required
                />
              </div>

              <div className="contact__field contact__field--message">
                <label htmlFor="message" className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={state.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project..."
                  className="contact__input contact__textarea"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                id="send-message-btn"
                className={`btn btn-primary contact__submit ${sent ? 'sent' : ''}`}
                disabled={loading}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : loading ? (
                  <>Sending...</>
                ) : (
                  <><FiSend size={15} /> Send Message</>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            className="contact__toast"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            ✓ Thanks! I'll get back to you within 24 hours.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
