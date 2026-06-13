import { useState } from 'react'
import Loader from './components/Loader/Loader'
import Home from './pages/Home'

export default function App() {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />
  }

  return <Home />
}