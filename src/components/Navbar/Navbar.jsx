import { useState } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'
import './Navbar.css'

const LINKS = [
  { label: 'Identity', href: '#identity' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Clearances', href: '#clearances' },
  { label: 'Threat DB', href: '#threats' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="navbar">

        <a href="#top" className="navbar-logo">
          HZF // SECURITY
        </a>

        <div className="navbar-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="navbar-right">

          <a
            href="/resume.pdf"
            download
            className="navbar-resume"
          >
            <FiDownload size={14} />
            Resume
          </a>

          <div className="navbar-status">
            AVAILABLE FOR HIRE
          </div>

        </div>

        <button
          className="navbar-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

      </nav>

      {open && (
        <div className="navbar-mobile">

          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="navbar-mobile-resume"
          >
            Resume
          </a>

        </div>
      )}
    </>
  )
}