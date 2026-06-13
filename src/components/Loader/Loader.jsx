import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

const LINES = [
  'initializing secure session...',
  'loading threat intelligence feed...',
  'verifying credentials...',
  'mounting portfolio modules...',
]

export default function Loader({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      const t = setTimeout(onComplete, 200)
      return () => clearTimeout(t)
    }

    const lineTimers = LINES.map((_, i) =>
      setTimeout(() => setVisibleLines((v) => v + 1), 280 * (i + 1))
    )

    const progressInterval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 18 + 6, 100)
        if (next >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setDone(true), 350)
          setTimeout(onComplete, 950)
        }
        return next
      })
    }, 180)

    return () => {
      lineTimers.forEach(clearTimeout)
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-box">
            {LINES.slice(0, visibleLines).map((line, i) => (
              <div className="loader-line" key={i}>
                <span>{line}</span>
                <span className="ok">OK</span>
              </div>
            ))}
            {visibleLines >= LINES.length && (
              <div className="loader-line">
                <span>
                  access granted<span className="loader-caret" />
                </span>
              </div>
            )}
            <div className="loader-bar-track">
              <motion.div
                className="loader-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
