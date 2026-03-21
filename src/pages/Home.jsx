import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { ArrowRight, Play, Sparkles, Zap, CheckCircle, Star, ChevronRight } from 'lucide-react'
import ProductsHighlight from '../components/ProductsHighlight'
import ThreeWays from '../components/ThreeWays'
import BuilderPacks from '../components/BuilderPacks'
import Tutorials from '../components/Tutorials'
import InsidersClub from '../components/InsidersClub'
import Contact from '../components/Contact'

const HOME_SCHEMAS = [
  {
    '@type': 'WebPage',
    '@id': 'https://aisurgent.dev/#webpage',
    url: 'https://aisurgent.dev/',
    name: 'AISurgent.Dev | AI Development Tutorials, Claude & Agentic Workflow Guides',
    description:
      'Level up your AI development with Saikiran Bali. Learn Claude, Claude Code, ADK, MCP, agentic workflows, and multi-agent systems.',
    isPartOf: { '@id': 'https://aisurgent.dev/#website' },
    about: { '@id': 'https://aisurgent.dev/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisurgent.dev/' },
      ],
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AISurgent.Dev?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgent.Dev is an AI development education platform by Saikiran Bali (balisaikiran) offering weekly tutorials on Claude API, Claude Code, Agent Development Kit (ADK), Model Context Protocol (MCP), agentic workflows, and multi-agent systems for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What AI topics does AISurgentDev cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev covers Claude AI, Claude Code, Anthropic API, Google ADK, MCP (Model Context Protocol), A2A Protocol, agentic workflows, multi-agent systems, LLM integration, prompt engineering, vibe coding, and practical AI development tutorials for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Saikiran Bali (balisaikiran)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saikiran Bali, known as balisaikiran, is an AI developer and YouTube content creator who runs AISurgentDev. He specializes in Claude AI, agentic workflows, ADK, MCP, and building production-ready AI integrations for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is AISurgentDev free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AISurgentDev tutorials on YouTube are free. Saikiran Bali also offers paid resource packs and $199 AI consulting sessions for deeper hands-on learning and guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I learn Claude API and agentic workflows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev provides step-by-step video tutorials on the Claude API, Claude Code, and building agentic workflows. Tutorials cover real-world integrations, multi-agent systems with ADK and MCP, and production-ready AI development patterns.',
        },
      },
    ],
  },
]

/* ─── Animated Counter Hook ─── */
function useCounter(end, duration = 2000, trigger = true) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, trigger])
  return count
}

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ─── Product Spotlight Data ─── */
const spotlights = [
  {
    name: 'RagTab',
    tagline: 'AI Tab Manager & RAG Search',
    metric: 'Score profiles in seconds',
    metricLabel: 'Local RAG pipeline in your browser',
    desc: 'The only Chrome extension that combines a full-featured tab manager with local AI-powered RAG search. Chat with your open tabs — no data leaves your device.',
    link: '/products',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'ProfileForge AI',
    tagline: 'LinkedIn Profile Optimizer',
    metric: '0-100 Profile Score',
    metricLabel: 'Instant LinkedIn audit',
    desc: 'Score your LinkedIn profile, generate compelling headlines, and craft summaries that convert visitors into connections.',
    link: '/products',
    color: 'from-violet-500 to-purple-600',
  },
  {
    name: 'PostCraft AI',
    tagline: 'LinkedIn Post Generator',
    metric: '6 Writing Styles',
    metricLabel: '10 languages supported',
    desc: 'Generate scroll-stopping LinkedIn posts with hooks, hashtags, and templates. Choose your style, pick your language, hit publish.',
    link: '/products',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'AlertLens AI',
    tagline: 'K8s Alert Summarizer',
    metric: 'P0-P4 Severity',
    metricLabel: '12 runbook types',
    desc: 'Analyze Kubernetes alerts instantly. Get severity classification, runbook suggestions, and Slack-ready summaries in seconds.',
    link: '/products',
    color: 'from-emerald-500 to-green-600',
  },
]

/* ─── Stats Data ─── */
const statsData = [
  { value: 8, label: 'Products', suffix: '' },
  { value: 25, label: 'Apps', suffix: '+' },
  { value: 12, label: 'Live Deployments', suffix: '' },
  { value: 3, label: 'Platforms', suffix: '' },
]

/* ─── How It Works ─── */
const steps = [
  {
    num: '01',
    title: 'Explore',
    desc: 'Browse our suite of 8 AI products — from LinkedIn optimization to Kubernetes alerting.',
    icon: Sparkles,
  },
  {
    num: '02',
    title: 'Try Instantly',
    desc: 'Every product is live and free to try. No sign-up walls, no credit cards. Just start building.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Ship Faster',
    desc: 'Integrate AI into your workflow and watch your productivity multiply across platforms.',
    icon: CheckCircle,
  },
]

/* ─── Testimonials ─── */
const testimonials = [
  {
    quote: 'RagTab completely changed how I manage my research. Being able to ask questions across 50+ tabs is pure magic.',
    name: 'Alex Chen',
    role: 'Senior Developer',
    avatar: 'AC',
  },
  {
    quote: 'ProfileForge scored my LinkedIn at 42/100 and generated a headline that got me 3x more profile views in a week.',
    name: 'Priya Sharma',
    role: 'Product Manager',
    avatar: 'PS',
  },
  {
    quote: 'AlertLens AI saves our on-call team hours every week. The runbook suggestions are spot-on for our K8s clusters.',
    name: 'Marcus Webb',
    role: 'SRE Lead',
    avatar: 'MW',
  },
]

export default function Home() {
  useSEO({
    title: 'AI Development Tutorials, Claude & Agentic Workflow Guides',
    description:
      'Level up your AI development with Saikiran Bali (balisaikiran). Learn Claude, Claude Code, ADK, MCP, agentic workflows, multi-agent systems, and real-world AI integrations on AISurgentDev.',
    path: '/',
    schemas: HOME_SCHEMAS,
  })

  const [statsRef, statsInView] = useInView(0.3)

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="orb absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full bg-indigo-600/[0.07] blur-[100px]" />
          <div className="orb orb-delay-1 absolute top-[40%] right-[5%] w-[600px] h-[600px] rounded-full bg-purple-600/[0.07] blur-[120px]" />
          <div className="orb orb-delay-2 absolute bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-orange-500/[0.05] blur-[100px]" />
          <div className="orb orb-delay-3 absolute top-[60%] left-[60%] w-[300px] h-[300px] rounded-full bg-sky-500/[0.06] blur-[80px]" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          {/* Badge */}
          <div data-aos="fade-up" className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              8 AI Products Live
            </span>
          </div>

          {/* Headline */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
              Build Smarter with
              <br />
              <span className="gradient-text">AI-Powered Tools</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              From LinkedIn optimization to Kubernetes alerting — a suite of AI products, tutorials, and resources to supercharge your development workflow.
            </p>
          </div>

          {/* CTAs */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all text-base"
            >
              Browse Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://www.youtube.com/@AIsurgentDev"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all text-base"
            >
              <Play size={18} className="text-red-400" />
              Watch Tutorials
            </a>
          </div>

          {/* Scroll indicator */}
          <div data-aos="fade-up" data-aos-delay="500" className="animate-bounce">
            <a href="#stats-bar" className="text-gray-600 hover:text-gray-400 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section id="stats-bar" ref={statsRef} className="py-20 px-4 relative">
        <div className="section-divider mb-20" />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, i) => {
              const count = useCounter(stat.value, 1500, statsInView)
              return (
                <div key={stat.label} data-aos="fade-up" data-aos-delay={i * 100} className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* ═══════════════ SCROLLING PRODUCT SPOTLIGHTS ═══════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4 block">Product Spotlight</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              AI tools that <span className="gradient-text">just work</span>
            </h2>
          </div>

          <div className="space-y-32">
            {spotlights.map((product, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={product.name}
                  data-aos={isEven ? 'fade-right' : 'fade-left'}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                >
                  {/* Left: Name + Description */}
                  <div className="flex-1 space-y-6">
                    <div className={`gradient-line w-16`} />
                    <h3 className="text-3xl sm:text-4xl font-bold">{product.name}</h3>
                    <p className="text-lg text-gray-500">{product.tagline}</p>
                    <p className="text-gray-400 leading-relaxed">{product.desc}</p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-gray-300 transition-colors group"
                    >
                      Learn more
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right: Metric card */}
                  <div className="flex-1 w-full max-w-md">
                    <div className={`glass-card p-10 text-center hover-glow`}>
                      <div className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${product.color} bg-clip-text text-transparent mb-3`}>
                        {product.metric}
                      </div>
                      <p className="text-sm text-gray-500">{product.metricLabel}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ ALL PRODUCTS GRID ═══════════════ */}
      <ProductsHighlight />

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-24 px-4 relative">
        <div className="section-divider mb-20" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4 block">Getting Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Three steps to <span className="gradient-text">ship faster</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-orange-500/30" />

            {steps.map((step, i) => (
              <div key={step.num} data-aos="fade-up" data-aos-delay={i * 150} className="relative text-center">
                {/* Step circle */}
                <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon size={24} className="text-gray-300" />
                </div>
                <div className="text-xs font-mono text-gray-600 mb-3">{step.num}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ THREE WAYS (existing) ═══════════════ */}
      <ThreeWays />

      {/* ═══════════════ BUILDER PACKS (existing) ═══════════════ */}
      <BuilderPacks />

      {/* ═══════════════ TUTORIALS (existing) ═══════════════ */}
      <Tutorials />

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-24 px-4">
        <div className="section-divider mb-20" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Loved by <span className="gradient-text">builders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="glass-card p-8 hover-glow"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8 text-sm">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ INSIDERS CLUB (existing) ═══════════════ */}
      <InsidersClub />

      {/* ═══════════════ CTA FOOTER ═══════════════ */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-purple-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Start Building with
              <br />
              <span className="gradient-text">AI Today</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
              Join thousands of developers using our AI tools and tutorials to ship faster, smarter, and with confidence.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all"
            >
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT (existing) ═══════════════ */}
      <Contact />
    </>
  )
}
