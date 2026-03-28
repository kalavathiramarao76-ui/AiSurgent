import { Chrome, Shield, Brain, Search, ArrowRight, ExternalLink, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'
import { aiProducts } from '../data/aiProducts'

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/jabiidnhodnkkjfkohgpdddeakhfabdk'

const highlights = [
  {
    icon: Brain,
    color: 'text-aipurple',
    bg: 'bg-aipurple/10',
    label: 'RAG Search',
    desc: 'Ask natural-language questions about your open tabs and get cited answers.',
  },
  {
    icon: Search,
    color: 'text-aiblue',
    bg: 'bg-aiblue/10',
    label: 'Tab Manager',
    desc: 'Live search, bulk actions, drag & drop, sessions, and duplicate detection.',
  },
  {
    icon: Shield,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    label: '100% Private',
    desc: 'All embeddings stored locally in IndexedDB. Raw content never leaves your device.',
  },
]

export default function ProductsHighlight() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-aiorange font-semibold">
            Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            We build tools too
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Beyond tutorials and resource packs, we ship real products. Here's what's live.
          </p>
        </div>

        {/* RagTab card */}
        <div className="card-border">
          <div className="bg-[hsl(240,10%,3.9%)] rounded-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-10">

                {/* Left: Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-aiblue/10 border border-aiblue/20 flex items-center justify-center">
                      <Chrome size={24} className="text-aiblue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">RagTab</h3>
                      <p className="text-xs text-gray-500">Chrome Extension · Free &amp; Pro</p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 flex-shrink-0">
                      Live
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    The only Chrome extension that combines a full-featured{' '}
                    <strong className="text-white">tab manager</strong> with a local{' '}
                    <strong className="text-white">AI RAG search assistant</strong>. Chat with
                    your open tabs using Gemini, OpenAI, or Claude — no raw data ever leaves
                    your browser.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={CHROME_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-white text-black hover:bg-white/90 transition-colors"
                    >
                      <Chrome size={15} /> Install Free
                    </a>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
                    >
                      Full Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right: Feature highlights */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg ${h.bg} flex items-center justify-center flex-shrink-0`}
                      >
                        <h.icon size={16} className={h.color} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{h.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{h.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer bar */}
            <div className="border-t border-white/5 px-8 md:px-10 py-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Shield size={11} className="text-green-400" /> Privacy-first · local IndexedDB
              </span>
              <span>·</span>
              <span>Gemini · OpenAI · Anthropic/Claude</span>
              <span>·</span>
              <span>Manifest V3</span>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1 hover:text-aiblue transition-colors"
              >
                Chrome Web Store <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        {/* AI Product Suite card */}
        <div className="card-border mt-8">
          <div className="bg-[hsl(240,10%,3.9%)] rounded-lg overflow-hidden p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-aipurple/10 border border-aipurple/20 flex items-center justify-center">
                    <Layers size={24} className="text-aipurple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI Product Suite &mdash; 15 Products</h3>
                    <p className="text-xs text-gray-500">Chrome extensions, mobile apps &amp; web platforms</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Chrome extensions, mobile apps &amp; web platforms for LinkedIn, DevOps, business &amp; more.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-white text-black hover:bg-white/90 transition-colors"
                >
                  View All Products <ArrowRight size={14} />
                </Link>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {aiProducts.slice(0, 5).map((p) => (
                    <span
                      key={p.slug}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-sm text-gray-300"
                    >
                      <img src={p.logo} alt={p.name} className="w-5 h-5 rounded flex-shrink-0" />
                      {p.name}
                    </span>
                  ))}
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-sm text-gray-500">
                    +9 more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
