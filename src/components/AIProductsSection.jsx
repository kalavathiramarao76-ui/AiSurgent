import { useState } from 'react'
import { ArrowRight, Globe, Puzzle, Smartphone } from 'lucide-react'
import { aiProducts, categories } from '../data/aiProducts'
import { Reveal, RevealStagger, RevealItem } from './motion/Reveal'

export default function AIProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? aiProducts
      : aiProducts.filter((p) => p.category === activeCategory)

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-aiorange font-semibold">
              Product Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">AI Product Suite</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              14 AI-powered products across web, mobile &amp; Chrome extensions
            </p>
          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-white text-black'
                    : 'border border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200 bg-white/[0.02]'
                }`}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-60">{cat.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Product grid */}
        <RevealStagger stagger={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product) => (
              <RevealItem key={product.slug}>
                <div className="group rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors overflow-hidden">
                  <div className="p-6">
                    {/* Header row */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={product.logo}
                        alt={product.name}
                        className="w-10 h-10 rounded-xl flex-shrink-0"
                      />
                      <div>
                        <h3 className="font-bold text-base leading-tight">{product.name}</h3>
                        <span className="text-xs text-gray-500">{product.tagline}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Highlight tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {product.highlights.map((h) => (
                        <span
                          key={h}
                          className="px-2 py-0.5 rounded-md text-xs bg-white/[0.06] border border-white/[0.08] text-gray-400"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Platform icons + CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        {product.web && (
                          <a
                            href={product.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
                            title="Web App"
                          >
                            <Globe size={13} /> Web
                          </a>
                        )}
                        {product.extension && (
                          <a
                            href={product.extension}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
                            title="Chrome Extension"
                          >
                            <Puzzle size={13} /> Extension
                          </a>
                        )}
                        {product.mobile && (
                          <a
                            href={product.mobile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity"
                            title="Mobile App"
                          >
                            <Smartphone size={13} /> Mobile
                          </a>
                        )}
                      </div>

                      <a
                        href={product.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all"
                        style={{ color: product.color }}
                      >
                        Try it <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealStagger>
      </div>
    </section>
  )
}
