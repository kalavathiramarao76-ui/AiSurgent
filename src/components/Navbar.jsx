import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, useMotionValueEvent, useScroll, useReducedMotion } from 'framer-motion'

const navLinks = [
  { label: 'Tutorials', href: '/#tutorials' },
  { label: 'Resources', href: '/#builder-packs' },
  { label: 'Insiders Club', href: '/#insiders' },
  { label: 'Products', to: '/products' },
  { label: 'Collabs', to: '/collabs' },
  { label: 'Contact', href: '/#contact' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollY.current
    if (latest > 300 && latest > previous) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastScrollY.current = latest
  })

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleNavClick = (e, href) => {
    if (href && href.startsWith('/#')) {
      if (location.pathname === '/') {
        e.preventDefault()
        const el = document.querySelector(href.replace('/', ''))
        el?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.8)] backdrop-blur-[12px] border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/favicon.svg" alt="AISurgent" className="h-8 w-8" />
            <span className="text-xl font-bold text-gradient">AISurgent.Dev</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-white/50 hover:text-white/100 transition-opacity duration-150"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-white/50 hover:text-white/100 transition-opacity duration-150"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/[0.06]">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
