import { useState } from 'react'
import { ArrowRight, Globe, Puzzle, Smartphone } from 'lucide-react'
import { aiProducts, categories } from '../data/aiProducts'

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
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-xs uppercase tracking-widest text-aiorange font-semibold">
            Product Suite
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">AI Product Suite</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            14 AI-powered products across web, mobile &amp; Chrome extensions
          </p>
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-aiblue via-aipurple to-aiorange text-white'
                  : 'border border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200 bg-white/[0.02]'
              }`}
            >
              {cat.label}
              <span className="ml-1.5 text-xs opacity-60">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <div
              key={product.slug}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="group rounded-xl border border-white/5 bg-[hsl(240,10%,3.9%)] hover:border-white/10 transition-all overflow-hidden"
              style={{
                '--glow-color': product.color,
              }}
            >
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
                      className="px-2 py-0.5 rounded-md text-xs border border-white/5 bg-white/[0.03] text-gray-400"
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
                        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
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
                        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
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
                        className="flex items-center gap-1 hover:text-gray-300 transition-colors"
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

              {/* Bottom accent line */}
              <div
                className="h-0.5 w-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(to right, ${product.color}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
