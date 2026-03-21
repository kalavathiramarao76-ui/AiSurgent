import { useState } from 'react'
import {
  Chrome,
  Globe,
  Smartphone,
  ArrowRight,
  User,
  PenTool,
  TrendingUp,
  AlertTriangle,
  Filter,
  Wrench,
  Bot,
  ExternalLink,
  FileText,
  Mic,
  Layout,
  BarChart3,
  Shield,
  Code,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const PRODUCTS = [
  {
    name: 'RagTab',
    tagline: 'AI Tab Manager & RAG Search',
    icon: Chrome,
    color: 'text-aiblue',
    borderColor: 'border-aiblue/20',
    bgColor: 'bg-aiblue/10',
    glowClass: 'hover-glow-blue',
    accentGradient: 'from-sky-500 to-blue-600',
    category: 'Browser',
    web: null,
    mobile: null,
    chrome: 'https://chromewebstore.google.com/detail/jabiidnhodnkkjfkohgpdddeakhfabdk',
    features: ['RAG search across tabs', 'Full tab manager', '100% private', 'Gemini/OpenAI/Claude'],
  },
  {
    name: 'ProfileForge AI',
    tagline: 'LinkedIn Profile Optimizer',
    icon: User,
    color: 'text-aipurple',
    borderColor: 'border-aipurple/20',
    bgColor: 'bg-aipurple/10',
    glowClass: 'hover-glow-purple',
    accentGradient: 'from-violet-500 to-purple-600',
    category: 'LinkedIn Suite',
    web: 'https://ai-linkedin-profile-optimizer.vercel.app',
    mobile: 'https://profileforge-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/linkedin-profile-optimizer-ext',
    features: ['Profile scoring 0-100', 'Headline generator', 'Summary writer', 'Team collab'],
  },
  {
    name: 'PostCraft AI',
    tagline: 'LinkedIn Post Generator',
    icon: PenTool,
    color: 'text-aiblue',
    borderColor: 'border-aiblue/20',
    bgColor: 'bg-aiblue/10',
    glowClass: 'hover-glow-blue',
    accentGradient: 'from-blue-500 to-cyan-500',
    category: 'LinkedIn Suite',
    web: 'https://ai-linkedin-post-generator-teal.vercel.app',
    mobile: 'https://postcraft-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/linkedin-post-generator-ext',
    features: ['6 writing styles', '10 languages', 'Hooks & hashtags', 'Templates'],
  },
  {
    name: 'EngageBoost AI',
    tagline: 'LinkedIn Post Optimizer',
    icon: TrendingUp,
    color: 'text-aiorange',
    borderColor: 'border-aiorange/20',
    bgColor: 'bg-aiorange/10',
    glowClass: 'hover-glow-orange',
    accentGradient: 'from-orange-500 to-amber-500',
    category: 'LinkedIn Suite',
    web: 'https://ai-linkedin-post-optimizer.vercel.app',
    mobile: 'https://engageboost-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/linkedin-post-optimizer-ext',
    features: ['Engagement scoring', 'A/B variants', 'Hook rewriter', 'Viral predictor'],
  },
  {
    name: 'AlertLens AI',
    tagline: 'K8s Alert Summarizer',
    icon: AlertTriangle,
    color: 'text-aigreen',
    borderColor: 'border-aigreen/20',
    bgColor: 'bg-aigreen/10',
    glowClass: 'hover-glow-green',
    accentGradient: 'from-emerald-500 to-green-600',
    category: 'DevOps',
    web: 'https://ai-kubernetes-alert-summarizer.vercel.app',
    mobile: 'https://alertlens-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/k8s-alert-summarizer-ext',
    features: ['Alert analysis', '12 runbook types', 'P0-P4 severity', 'Slack integration'],
  },
  {
    name: 'TriageFlow AI',
    tagline: 'Alert Triage System',
    icon: Filter,
    color: 'text-aiblue',
    borderColor: 'border-aiblue/20',
    bgColor: 'bg-aiblue/10',
    glowClass: 'hover-glow-blue',
    accentGradient: 'from-blue-500 to-indigo-600',
    category: 'DevOps',
    web: 'https://ai-alert-triage.vercel.app',
    mobile: 'https://triageflow-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/alert-triage-ext',
    features: ['Priority classification', 'Incident creator', 'RBAC', 'Audit log'],
  },
  {
    name: 'ToolSpark AI',
    tagline: 'AI Toolbox (6 tools)',
    icon: Wrench,
    color: 'text-aipurple',
    borderColor: 'border-aipurple/20',
    bgColor: 'bg-aipurple/10',
    glowClass: 'hover-glow-purple',
    accentGradient: 'from-purple-500 to-fuchsia-600',
    category: 'Productivity',
    web: 'https://ai-micro-saas-2.vercel.app',
    mobile: 'https://toolspark-mobile-web.vercel.app',
    chrome: 'https://github.com/kalavathiramarao76-ui/ai-toolbox-ext',
    features: ['Email writer', 'Meeting summarizer', 'Code reviewer', 'Blog generator'],
  },
  {
    name: 'Autensa',
    tagline: 'Agentic AI Assistant',
    icon: Bot,
    color: 'text-aiorange',
    borderColor: 'border-aiorange/20',
    bgColor: 'bg-aiorange/10',
    glowClass: 'hover-glow-orange',
    accentGradient: 'from-orange-500 to-red-500',
    category: 'Browser',
    web: null,
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/autensa-extension',
    features: ['Claude/GitHub/Vercel tools', 'Command palette', 'Streaming responses', 'Agentic loop'],
  },
  {
    name: 'InvoiceForge AI',
    tagline: 'Invoice & Proposal Generator',
    icon: FileText,
    color: 'text-aigreen',
    borderColor: 'border-aigreen/20',
    bgColor: 'bg-aigreen/10',
    glowClass: 'hover-glow-green',
    accentGradient: 'from-green-500 to-emerald-600',
    category: 'Productivity',
    web: 'https://invoiceforge-ai.vercel.app',
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/invoiceforge-ext',
    features: ['AI invoice generator', 'Proposal writer', 'Contract drafting', '6 templates'],
  },
  {
    name: 'PodCraft AI',
    tagline: 'Podcast Content Repurposer',
    icon: Mic,
    color: 'text-aipurple',
    borderColor: 'border-aipurple/20',
    bgColor: 'bg-aipurple/10',
    glowClass: 'hover-glow-purple',
    accentGradient: 'from-violet-500 to-purple-600',
    category: 'Productivity',
    web: 'https://podcraft-ai-blue.vercel.app',
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/podcraft-ext',
    features: ['Transcript summarizer', 'Clip identifier', 'Social posts', 'Newsletter draft'],
  },
  {
    name: 'PitchDeck AI',
    tagline: 'Pitch Deck Generator',
    icon: Layout,
    color: 'text-aiorange',
    borderColor: 'border-aiorange/20',
    bgColor: 'bg-aiorange/10',
    glowClass: 'hover-glow-orange',
    accentGradient: 'from-amber-500 to-orange-600',
    category: 'Productivity',
    web: 'https://pitchdeck-ai-beta.vercel.app',
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/pitchdeck-ext',
    features: ['10-slide deck', 'Investor email', 'Elevator pitch', 'Competition matrix'],
  },
  {
    name: 'PriceRadar AI',
    tagline: 'Competitor Price Tracker',
    icon: BarChart3,
    color: 'text-aiblue',
    borderColor: 'border-aiblue/20',
    bgColor: 'bg-aiblue/10',
    glowClass: 'hover-glow-blue',
    accentGradient: 'from-cyan-500 to-teal-600',
    category: 'Productivity',
    web: null,
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/priceradar-ext',
    features: ['Price analyzer', 'Comparison table', 'Dynamic pricing', 'Alert simulator'],
  },
  {
    name: 'ContractLens AI',
    tagline: 'Contract Risk Analyzer',
    icon: Shield,
    color: 'text-aiorange',
    borderColor: 'border-aiorange/20',
    bgColor: 'bg-aiorange/10',
    glowClass: 'hover-glow-orange',
    accentGradient: 'from-rose-500 to-red-600',
    category: 'Productivity',
    web: null,
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/contractlens-ext',
    features: ['Risk scoring', 'Clause explainer', 'Red flag alerts', 'Contract comparison'],
  },
  {
    name: 'RepoDoc AI',
    tagline: 'Code Documentation Generator',
    icon: Code,
    color: 'text-aigreen',
    borderColor: 'border-aigreen/20',
    bgColor: 'bg-aigreen/10',
    glowClass: 'hover-glow-green',
    accentGradient: 'from-emerald-500 to-green-600',
    category: 'Browser',
    web: null,
    mobile: null,
    chrome: 'https://github.com/kalavathiramarao76-ui/repodoc-ext',
    features: ['JSDoc generator', 'README writer', 'API docs', 'Changelog creator'],
  },
]

const FILTERS = ['All', 'LinkedIn Suite', 'DevOps', 'Productivity', 'Browser']

const PRODUCTS_SCHEMAS = [
  {
    '@type': 'CollectionPage',
    '@id': 'https://aisurgent.dev/products',
    name: 'AISurgent Products — 14 AI-Powered Tools',
    description: 'Browse all 14 AI products by AISurgent — from LinkedIn optimization to Kubernetes alerting, browser extensions to productivity tools.',
    url: 'https://aisurgent.dev/products',
    isPartOf: { '@id': 'https://aisurgent.dev/#website' },
  },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')

  useSEO({
    title: 'Products — 14 AI-Powered Tools | AISurgent.Dev',
    description:
      'Browse all 14 AI products by AISurgent. LinkedIn suite, DevOps tools, productivity apps, and browser extensions — all free to try.',
    path: '/products',
    schemas: PRODUCTS_SCHEMAS,
  })

  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter)

  function getPrimaryLink(product) {
    return product.web || product.chrome || '#'
  }

  return (
    <section className="pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.04] blur-[120px]" />
        <div className="orb orb-delay-1 absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-indigo-600/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Hero ── */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4 block">Our Products</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">14 AI Products</span>
            <br />
            <span className="text-gray-300">Ready to Use</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From LinkedIn optimization to Kubernetes alerting, browser extensions to developer toolboxes.
            Every product is live, free to try, and built for real workflows.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-16" data-aos="fade-up" data-aos-delay="100">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'text-gray-500 border border-transparent hover:text-gray-300 hover:border-white/10'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ── Product Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up-stagger">
          {filtered.map((product) => (
            <div
              key={product.name}
              className={`glass-card ${product.glowClass} hover-glow p-8 group`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl ${product.bgColor} border ${product.borderColor} flex items-center justify-center flex-shrink-0`}>
                  <product.icon size={22} className={product.color} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold group-hover:text-white transition-colors">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.tagline}</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.accentGradient} flex-shrink-0`} />
                    {feat}
                  </div>
                ))}
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.web && (
                  <a
                    href={product.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all"
                  >
                    <Globe size={12} /> Web
                  </a>
                )}
                {product.mobile && (
                  <a
                    href={product.mobile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all"
                  >
                    <Smartphone size={12} /> Mobile
                  </a>
                )}
                {product.chrome && (
                  <a
                    href={product.chrome}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-gray-400 border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] hover:text-white transition-all"
                  >
                    <Chrome size={12} /> Chrome
                  </a>
                )}
              </div>

              {/* CTA */}
              <a
                href={getPrimaryLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${product.accentGradient} hover:-translate-y-0.5 hover:shadow-lg transition-all group/btn`}
              >
                Try Now
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center mt-20" data-aos="fade-up">
          <div className="section-divider mb-16" />
          <p className="text-gray-500 mb-6 text-sm">
            All products are free to try. No sign-up required.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.youtube.com/@AIsurgentDev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              Watch Tutorials <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
