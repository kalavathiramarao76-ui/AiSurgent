import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Consulting from './pages/Consulting'
import Collabs from './pages/Collabs'
import Privacy from './pages/Privacy'
import Products from './pages/Products'
import NotFound from './pages/NotFound'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: true,
    })
  }, [])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/collabs" element={<Collabs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
