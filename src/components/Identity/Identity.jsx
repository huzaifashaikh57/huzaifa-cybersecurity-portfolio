import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import './Identity.css'

const words = [
  'ANALYZE',
  'DEFEND',
  'SECURE'
]

export default function Identity() {
  return (
    <section className="identity-section" id="identity">

      <div className="identity-container">

        <motion.div
          className="identity-header"
          initial={{ opacity: 0, y: 40}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="identity-eyebrow">
            DIGITAL IDENTITY
          </span>

          <h2 className="identity-title">
            Security is not a skill.
            <br />
            It's a mindset.
          </h2>
        </motion.div>

        <div className="identity-layout">

          <div className="identity-left">
            {words.map((word, index) => (
              <motion.div
                key={word}
                className="identity-word"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .6,
                  delay: index * .15
                }}
              >
                {word}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="identity-terminal"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="terminal-header">
              profile.json
            </div>

            <div className="terminal-content">

              <div className="terminal-line">
                <span>Name:</span>
                <strong>{profile.name}</strong>
              </div>

              <div className="terminal-line">
                <span>Education:</span>
                <strong>{profile.education}</strong>
              </div>

              <div className="terminal-line">
                <span>Role:</span>
                <strong>Cybersecurity Analyst</strong>
              </div>

              <div className="terminal-line">
                <span>Status:</span>
                <strong className="online">
                  Available For Hire
                </strong>
              </div>

              <div className="focus-section">

                <div className="focus-title">
                  Focus Areas
                </div>

                {profile.focus.map((item) => (
                  <div
                    key={item}
                    className="focus-item"
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}