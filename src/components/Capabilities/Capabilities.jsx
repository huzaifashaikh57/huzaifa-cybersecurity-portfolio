import { motion } from 'framer-motion'
import { capabilities } from '../../data/skills'
import './Capabilities.css'

export default function Capabilities() {
  return (
    <section className="capabilities-section" id="capabilities">

      <div className="capabilities-header">

        <span className="capabilities-eyebrow">
          CAPABILITIES
        </span>

        <h2 className="capabilities-title">
          Security Operations Stack
        </h2>

        <p className="capabilities-subtitle">
          Offensive security, defensive monitoring,
          and development expertise combined into
          a practical cybersecurity toolkit.
        </p>

      </div>

      <div className="capabilities-layout">

        {capabilities.map((cap, index) => (
          <motion.div
            key={cap.id}
            className="capability-module"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .5,
              delay: index * .15
            }}
          >

            <div className="module-header">

              <span className="module-code">
                {cap.code}
              </span>

              <span className="module-status">
                ACTIVE
              </span>

            </div>

            <h3 className="module-title">
              {cap.title}
            </h3>

            <p className="module-description">
              {cap.description}
            </p>

            <div className="module-tools">

              {cap.skills.map((skill) => (
                <div
                  key={skill}
                  className="module-tool"
                >
                  {skill}
                </div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}