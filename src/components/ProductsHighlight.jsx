import { Chrome, Shield, Brain, Search, ArrowRight, ExternalLink, User, PenTool, TrendingUp, AlertTriangle, Filter, Wrench, Bot } from 'lucide-react'
import { Link } from 'react-router-dom'

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
        <div className="text-center mb-12" data-aos="fade-up">
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
        <div data-aos="fade-up" data-aos-delay="100" className="gradient-border">
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
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

        {/* AI Product Suite */}
        <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-aiorange font-semibold">
              AI Product Suite
            </span>
            <h3 className="text-2xl font-bold mt-2">
              7 AI products, ready to use
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'ProfileForge AI', desc: 'AI LinkedIn Profile Optimizer', icon: User, color: 'text-aipurple', bg: 'bg-aipurple/10', url: 'https://ai-linkedin-profile-optimizer.vercel.app' },
              { name: 'PostCraft AI', desc: 'AI LinkedIn Post Generator', icon: PenTool, color: 'text-aiblue', bg: 'bg-aiblue/10', url: 'https://ai-linkedin-post-generator-teal.vercel.app' },
              { name: 'EngageBoost AI', desc: 'AI LinkedIn Post Optimizer', icon: TrendingUp, color: 'text-aiorange', bg: 'bg-aiorange/10', url: 'https://ai-linkedin-post-optimizer.vercel.app' },
              { name: 'AlertLens AI', desc: 'K8s Alert Summarizer', icon: AlertTriangle, color: 'text-aigreen', bg: 'bg-aigreen/10', url: 'https://ai-kubernetes-alert-summarizer.vercel.app' },
              { name: 'TriageFlow AI', desc: 'Alert Triage System', icon: Filter, color: 'text-aiblue', bg: 'bg-aiblue/10', url: 'https://ai-alert-triage.vercel.app' },
              { name: 'ToolSpark AI', desc: 'AI Toolbox — 6 tools', icon: Wrench, color: 'text-aipurple', bg: 'bg-aipurple/10', url: 'https://ai-micro-saas-2.vercel.app' },
              { name: 'Autensa', desc: 'Agentic AI Chrome Extension', icon: Bot, color: 'text-aiorange', bg: 'bg-aiorange/10', url: 'https://github.com/kalavathiramarao76-ui/autensa-extension' },
            ].map((product, i) => (
              <a
                key={product.name}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={100 + i * 50}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all group"
              >
                <div className={`w-9 h-9 rounded-lg ${product.bg} flex items-center justify-center flex-shrink-0`}>
                  <product.icon size={16} className={product.color} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold group-hover:text-white transition-colors">{product.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{product.desc}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
