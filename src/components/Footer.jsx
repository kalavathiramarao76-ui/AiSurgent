import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Tutorials', href: '/#tutorials' },
  { label: 'Resources', href: '/#builder-packs' },
  { label: 'Collabs', to: '/collabs' },
  { label: 'About', to: '/about' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <span className="text-sm font-semibold text-white tracking-tight">AISurgent</span>
              <span className="text-sm font-normal text-gray-600">.Dev</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              AI development tutorials, open-source tools, and practical resources.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-[0.15em] mb-4">Navigate</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-[0.15em] mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.youtube.com/@AIsurgentDev" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/SaikiranBali" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a href="https://github.com/balisaikiran" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} AISurgent.Dev
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-gray-700 hover:text-gray-400 transition-colors">
              Privacy
            </Link>
            <p className="text-xs text-gray-700">
              Built by Saikiran Bali
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
