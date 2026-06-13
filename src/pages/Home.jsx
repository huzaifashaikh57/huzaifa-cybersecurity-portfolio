import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Identity from '../components/Identity/Identity'
import Capabilities from '../components/Capabilities/Capabilities'
import Certifications from '../components/Certifications/Certifications'
import ThreatDatabase from '../components/ThreatDatabase/ThreatDatabase'
import Contact from '../components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
  <section id="hero">
    <Hero />
  </section>

  <section id="identity">
    <Identity />
  </section>

  <section id="capabilities">
    <Capabilities />
  </section>

  <section id="certifications">
    <Certifications />
  </section>

  <section id="projects">
    <ThreatDatabase />
  </section>

  <section id="contact">
    <Contact />
  </section>
</main>
    </>
  )
}
