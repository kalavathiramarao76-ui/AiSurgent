import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  useSEO({ title: 'Page Not Found' })

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
        >
          <Home size={16} /> Return to Home
        </Link>
      </div>
    </section>
  )
}
