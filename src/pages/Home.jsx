import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
import { ArrowRight, ChevronRight } from 'lucide-react'
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
    metric: 'Local RAG',
    metricLabel: 'No data leaves your device',
    desc: 'The only Chrome extension that combines a full-featured tab manager with local AI-powered RAG search. Chat with your open tabs, privately.',
    link: '/products',
  },
  {
    name: 'ProfileForge AI',
    tagline: 'LinkedIn Profile Optimizer',
    metric: '0-100 Score',
    metricLabel: 'Instant LinkedIn audit',
    desc: 'Score your LinkedIn profile, generate compelling headlines, and craft summaries that convert visitors into connections.',
    link: '/products',
  },
  {
    name: 'PostCraft AI',
    tagline: 'LinkedIn Post Generator',
    metric: '6 Styles',
    metricLabel: '10 languages supported',
    desc: 'Generate scroll-stopping LinkedIn posts with hooks, hashtags, and templates. Choose your style, pick your language, hit publish.',
    link: '/products',
  },
  {
    name: 'AlertLens AI',
    tagline: 'K8s Alert Summarizer',
    metric: 'P0-P4',
    metricLabel: '12 runbook types',
    desc: 'Analyze Kubernetes alerts instantly. Get severity classification, runbook suggestions, and Slack-ready summaries in seconds.',
    link: '/products',
  },
]

/* ─── Stats Data ─── */
const statsData = [
  { value: 8, label: 'Products', suffix: '' },
  { value: 25, label: 'Apps', suffix: '+' },
  { value: 12, label: 'Deployments', suffix: '' },
  { value: 3, label: 'Platforms', suffix: '' },
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
        {/* Single subtle gradient orb — not 4 bouncing blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/[0.04] blur-[160px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Headline — massive, Apple-scale */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold tracking-tight text-white mb-8 leading-[1.05]">
              From idea to{' '}
              <span className="gradient-text-accent">production</span>
              <br />
              in minutes.
            </h1>
          </div>

          {/* One subtitle line */}
          <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000" data-aos-easing="ease-out">
            <p className="text-xl text-gray-400 font-normal max-w-xl mx-auto mb-14 leading-relaxed">
              8 AI products, real tutorials, and the tools to ship your next project today.
            </p>
          </div>

          {/* Single CTA */}
          <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-white bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.2] hover:-translate-y-0.5 transition-all text-base"
            >
              Explore Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAR ═══════════════ */}
      <section ref={statsRef} className="py-32 px-6 relative">
        <div className="section-divider mb-20" />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {statsData.map((stat, i) => {
              const count = useCounter(stat.value, 1500, statsInView)
              return (
                <div key={stat.label} data-aos="fade-up" data-aos-delay={i * 100} data-aos-duration="1000" data-aos-easing="ease-out" className="text-center">
                  <div className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="section-divider mt-20" />
      </section>

      {/* ═══════════════ PRODUCT SPOTLIGHTS ═══════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">Product Spotlight</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              AI tools that just work
            </h2>
          </div>

          <div className="space-y-40">
            {spotlights.map((product, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={product.name}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out"
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                >
                  {/* Text */}
                  <div className="flex-1 space-y-6">
                    <div className="gradient-line w-12" />
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{product.name}</h3>
                    <p className="text-lg text-gray-500">{product.tagline}</p>
                    <p className="text-gray-400 leading-relaxed text-base">{product.desc}</p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                    >
                      Learn more
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Metric card */}
                  <div className="flex-1 w-full max-w-sm">
                    <div className="glass-card p-12 text-center">
                      <div className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
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

      {/* ═══════════════ THREE WAYS ═══════════════ */}
      <ThreeWays />

      {/* ═══════════════ BUILDER PACKS ═══════════════ */}
      <BuilderPacks />

      {/* ═══════════════ TUTORIALS ═══════════════ */}
      <Tutorials />

      {/* ═══════════════ TESTIMONIALS — removed, replaced with simpler social proof ═══════════════ */}

      {/* ═══════════════ INSIDERS CLUB ═══════════════ */}
      <InsidersClub />

      {/* ═══════════════ CTA FOOTER ═══════════════ */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-500/[0.03] blur-[140px]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
              Start building<br />with AI today.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto font-normal">
              Every product is live. No sign-ups, no credit cards. Just start.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-out" className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-black bg-white hover:bg-gray-100 hover:-translate-y-0.5 transition-all"
            >
              Explore Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT ═══════════════ */}
      <Contact />
    </>
  )
}
