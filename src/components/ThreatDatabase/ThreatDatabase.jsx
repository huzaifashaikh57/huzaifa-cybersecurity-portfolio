import { motion } from 'framer-motion'
import { projects, statusColors } from '../../data/projects'
import './ThreatDatabase.css'

export default function ThreatDatabase() {
  return (
    <section className="threat-section" id="threats">

      <div className="threat-header">

        <span className="threat-eyebrow">
          THREAT DATABASE
        </span>

        <h2 className="threat-title">
          Active Security Projects
        </h2>

        <p className="threat-subtitle">
          A collection of cybersecurity tools,
          research initiatives, and security-focused
          applications currently under development.
        </p>

      </div>

      <div className="threat-grid">

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: .5,
              delay: index * .1
            }}
          >

            <div className="project-top">

              <div className="project-id">
                {project.id}
              </div>

              <div
                className="project-status"
                style={{
                  color: statusColors[project.status]
                }}
              >
                {project.status}
              </div>

            </div>

            <h3 className="project-title">
              {project.name}
            </h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="project-tag"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-footer">
              ACCESS MODULE →
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}