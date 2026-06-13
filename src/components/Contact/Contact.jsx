import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="eyebrow">CONTACT TERMINAL</div>
      <h2 className="section-title">Let's get in touch</h2>
      <p className="section-sub">
        Open to full-time roles, internships, and collaboration on security
        projects.
      </p>

      <motion.div
        className="contact-terminal"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-terminal-header">
          <span className="contact-terminal-dot" style={{ background: '#FF5F56' }} />
          <span className="contact-terminal-dot" style={{ background: '#FFBD2E' }} />
          <span className="contact-terminal-dot" style={{ background: '#27C93F' }} />
        </div>
        <div className="contact-terminal-body">
          <div className="contact-terminal-line">
            <span className="prompt">root@huzaifa</span>:~$ <span className="cmd">status</span>
          </div>
          <div className="contact-terminal-result">{profile.status}</div>

          <div className="contact-grid">
            <div>
              <div className="contact-field-label">Email</div>
              <div className="contact-field-value">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div>
              <div className="contact-field-label">Phone</div>
              <div className="contact-field-value">
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </div>
            </div>
            <div>
              <div className="contact-field-label">Location</div>
              <div className="contact-field-value">{profile.location}</div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="contact-footer">
        © {new Date().getFullYear()} {profile.name} — All systems operational
      </div>
    </section>
  )
}
