import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import { certifications } from '../../data/certifications'
import './Certifications.css'

export default function Certifications() {
  const [active, setActive] = useState(null)

  return (
    <section className="section" id="clearances">

      <div className="certifications-header">

        <span className="eyebrow">
          SECURITY CLEARANCES
        </span>

        <h2 className="section-title">
          Certifications & Training
        </h2>

        <p className="section-sub">
          Verified credentials across offensive security,
          infrastructure protection, cloud identity,
          compliance, and security operations.
        </p>

      </div>

      <div className="cert-grid">

        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            onClick={() => setActive(cert)}
            role="button"
            tabIndex={0}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActive(cert)
              }
            }}
          >

            <div className="cert-card-top">

              <div className="cert-badges">

                <span className="cert-id">
                  {cert.id}
                </span>

              </div>

            </div>

            <div className="cert-info">

              <h3 className="cert-title">
                {cert.title}
              </h3>

              <span className="cert-issuer">
                {cert.issuer}
              </span>

            </div>

            

          </motion.div>
        ))}

      </div>

      <AnimatePresence>

        {active && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >

            <motion.div
              className="cert-modal"
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(e) => e.stopPropagation()}
            >

              <button
                className="cert-modal-close"
                onClick={() => setActive(null)}
                
              >
                EXIT
              </button>

              <span className="cert-id">
                {active.id}
              </span>

              <h3>
                {active.title}
              </h3>

              <span className="cert-issuer">
                {active.issuer}
              </span>


              {active.description && (
                <p className="cert-description">
                  {active.description}
                </p>
              )}

              {active.issueDate && (
                <p className="cert-date">
                  Issued: {active.issueDate}
                </p>
              )}

              <img
              src={active.image}
              alt={active.title}
              className="cert-image"
            />

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  )
}