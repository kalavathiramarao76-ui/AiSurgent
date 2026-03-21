import { Chrome, User, PenTool, TrendingUp, AlertTriangle, Filter, Wrench, Bot, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'RagTab', desc: 'AI Tab Manager & RAG Search', icon: Chrome, url: 'https://chromewebstore.google.com/detail/jabiidnhodnkkjfkohgpdddeakhfabdk' },
  { name: 'ProfileForge AI', desc: 'LinkedIn Profile Optimizer', icon: User, url: 'https://ai-linkedin-profile-optimizer.vercel.app' },
  { name: 'PostCraft AI', desc: 'LinkedIn Post Generator', icon: PenTool, url: 'https://ai-linkedin-post-generator-teal.vercel.app' },
  { name: 'EngageBoost AI', desc: 'LinkedIn Post Optimizer', icon: TrendingUp, url: 'https://ai-linkedin-post-optimizer.vercel.app' },
  { name: 'AlertLens AI', desc: 'K8s Alert Summarizer', icon: AlertTriangle, url: 'https://ai-kubernetes-alert-summarizer.vercel.app' },
  { name: 'TriageFlow AI', desc: 'Alert Triage System', icon: Filter, url: 'https://ai-alert-triage.vercel.app' },
  { name: 'ToolSpark AI', desc: 'AI Toolbox — 6 tools', icon: Wrench, url: 'https://ai-micro-saas-2.vercel.app' },
  { name: 'Autensa', desc: 'Agentic AI Assistant', icon: Bot, url: 'https://github.com/kalavathiramarao76-ui/autensa-extension' },
]

export default function ProductsHighlight() {
  return (
    <section id="products" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="section-divider mb-24" />

        {/* Section header */}
        <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">
            Product Suite
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            All 8 products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Every product is live and free to try. No sign-up walls. Just start.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 fade-up-stagger">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-glow p-6 group flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
                <product.icon size={18} className="text-gray-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 tracking-tight">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-5 flex-1">{product.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                Try <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* View All link */}
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-gray-400 border border-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all group"
          >
            View All Products
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
