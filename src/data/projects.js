export const projects = [
  {
    id: 'CASE-001',
    name: 'JusticeAssist',
    status: 'ACTIVE',
    description: 'AI-powered cybercrime assistance platform that helps users report and understand cybercrime, with guided legal and procedural information.',
    tags: ['AI', 'Cybercrime', 'Platform'],
  },
  {
    id: 'CASE-002',
    name: 'Vulnerability Scanner',
    status: 'DEVELOPMENT',
    description: 'A lightweight scanner for identifying common network and web application vulnerabilities, built for fast triage and reporting.',
    tags: ['Python', 'Network Security', 'Automation'],
  },
  {
    id: 'CASE-003',
    name: 'Phishing URL Detector',
    status: 'RESEARCH',
    description: 'Machine learning model designed to flag malicious URLs in real time by analyzing structural and behavioral indicators.',
    tags: ['Machine Learning', 'Threat Detection'],
  },
]

export const statusColors = {
  ACTIVE: 'var(--success)',
  DEVELOPMENT: 'var(--cyan)',
  RESEARCH: 'var(--blue)',
}
