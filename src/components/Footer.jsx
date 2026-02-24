import { Link } from 'react-router-dom'
import { Github, Twitter, Youtube } from 'lucide-react'

const footerLinks = [
  { label: 'Tutorials', href: '/#tutorials' },
  { label: 'Resources', href: '/#builder-packs' },
  { label: 'Insiders Club', href: '/#insiders' },
  { label: 'Collabs', to: '/collabs' },
  { label: 'Contact', href: '/#contact' },
  { label: 'About', to: '/about' },
]

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCjfTDoriZMoXlAeQ5oebRhw', label: 'YouTube' },
  { icon: Twitter, href: 'https://twitter.com/SaikiranBali', label: 'Twitter / X' },
  { icon: Github, href: 'https://github.com/balisaikiran', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold text-gradient">AISurgent.Dev</span>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Exploring the frontiers of AI-assisted development with practical tutorials, open-source projects, and educational content.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigate</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  title={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AISurgent.Dev. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built by Saikiran Bali
          </p>
        </div>
      </div>
    </footer>
  )
}
