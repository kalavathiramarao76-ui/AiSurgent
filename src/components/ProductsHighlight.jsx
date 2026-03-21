import { Chrome, User, PenTool, TrendingUp, AlertTriangle, Filter, Wrench, Bot, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'RagTab', desc: 'AI Tab Manager & RAG Search', icon: Chrome, color: 'text-aiblue', bg: 'bg-aiblue/10', border: 'border-aiblue/20', url: 'https://chromewebstore.google.com/detail/jabiidnhodnkkjfkohgpdddeakhfabdk' },
  { name: 'ProfileForge AI', desc: 'LinkedIn Profile Optimizer', icon: User, color: 'text-aipurple', bg: 'bg-aipurple/10', border: 'border-aipurple/20', url: 'https://ai-linkedin-profile-optimizer.vercel.app' },
  { name: 'PostCraft AI', desc: 'LinkedIn Post Generator', icon: PenTool, color: 'text-aiblue', bg: 'bg-aiblue/10', border: 'border-aiblue/20', url: 'https://ai-linkedin-post-generator-teal.vercel.app' },
  { name: 'EngageBoost AI', desc: 'LinkedIn Post Optimizer', icon: TrendingUp, color: 'text-aiorange', bg: 'bg-aiorange/10', border: 'border-aiorange/20', url: 'https://ai-linkedin-post-optimizer.vercel.app' },
  { name: 'AlertLens AI', desc: 'K8s Alert Summarizer', icon: AlertTriangle, color: 'text-aigreen', bg: 'bg-aigreen/10', border: 'border-aigreen/20', url: 'https://ai-kubernetes-alert-summarizer.vercel.app' },
  { name: 'TriageFlow AI', desc: 'Alert Triage System', icon: Filter, color: 'text-aiblue', bg: 'bg-aiblue/10', border: 'border-aiblue/20', url: 'https://ai-alert-triage.vercel.app' },
  { name: 'ToolSpark AI', desc: 'AI Toolbox -- 6 tools', icon: Wrench, color: 'text-aipurple', bg: 'bg-aipurple/10', border: 'border-aipurple/20', url: 'https://ai-micro-saas-2.vercel.app' },
  { name: 'Autensa', desc: 'Agentic AI Assistant', icon: Bot, color: 'text-aiorange', bg: 'bg-aiorange/10', border: 'border-aiorange/20', url: 'https://github.com/kalavathiramarao76-ui/autensa-extension' },
]

export default function ProductsHighlight() {
  return (
    <section id="products" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-20" />

        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4 block">
            Product Suite
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            All <span className="gradient-text">8 Products</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every product is live and free to try. Browse, click, and start building.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 fade-up-stagger">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover-glow p-6 group flex flex-col"
            >
              <div className={`w-10 h-10 rounded-xl ${product.bg} border ${product.border} flex items-center justify-center mb-4`}>
                <product.icon size={18} className={product.color} />
              </div>
              <h3 className="text-sm font-bold mb-1 group-hover:text-white transition-colors">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-4 flex-1">{product.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-white transition-colors">
                Try <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>

        {/* View All link */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all group"
          >
            View All Products
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
