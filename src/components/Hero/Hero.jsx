import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../../data/profile'
import './Hero.css'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function Hero() {
  return (
    <section className="hero" id="top">

      {/* Background Elements */}
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Status */}
        <motion.div variants={item} className="hero-status">
          <span className="status-dot"></span>
          AVAILABLE FOR HIRE
        </motion.div>

        {/* Name */}
        <motion.h1 variants={item} className="hero-name">
          HUZAIFA
          <br />
          SHAIKH
        </motion.h1>

        {/* Role */}
        <motion.h2 variants={item} className="hero-role">
          Cybersecurity Analyst
        </motion.h2>

        {/* Specializations */}
        <motion.div variants={item} className="hero-specializations">
          <span>VAPT</span>
          <span>SOC</span>
          <span>Threat Intelligence</span>
          <span>Secure Development</span>
        </motion.div>

        {/* Terminal */}
        <motion.div variants={item} className="hero-terminal">
          <span className="terminal-prefix">
            root@huzaifa:~$
          </span>

          <span className="terminal-command">
            whoami
          </span>

          <div className="terminal-output">
            Cybersecurity Professional focused on
            Security Operations, Vulnerability Assessment,
            Threat Analysis and Secure Development.
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={item} className="hero-stats">

          <div className="hero-stat">
            <div className="hero-stat-value">
              {profile.stats.certifications}+
            </div>
            <div className="hero-stat-label">
              CERTIFICATIONS
            </div>
          </div>

          <div className="hero-stat">
            <div className="hero-stat-value">
              {profile.stats.projects}+
            </div>
            <div className="hero-stat-label">
              PROJECTS
            </div>
          </div>

          <div className="hero-stat">
            <div className="hero-stat-value success">
              OPEN
            </div>
            <div className="hero-stat-label">
              TO WORK
            </div>
          </div>

        </motion.div>

        {/* Buttons */}
        <motion.div variants={item} className="hero-actions">

          <a
            className="hero-btn hero-btn-primary"
            href={profile.resume}
            download
          >
            <FiDownload size={18} />
            Download Resume
          </a>

          <a
            className="hero-btn hero-btn-outline"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={18} />
            GitHub
          </a>

          <a
            className="hero-btn hero-btn-outline"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>

        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <span></span>
        SCROLL
      </div>

    </section>
  )
}