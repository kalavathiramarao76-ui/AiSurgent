import {
  Chrome,
  Shield,
  Zap,
  Search,
  MessageSquare,
  Lock,
  Database,
  Layers,
  MousePointer,
  Copy,
  Monitor,
  Star,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Brain,
  Cpu,
  FileText,
  Globe,
} from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const CHROME_STORE_URL =
  'https://chromewebstore.google.com/detail/jabiidnhodnkkjfkohgpdddeakhfabdk'

const tabManagerFeatures = [
  {
    icon: Search,
    title: 'Live Multi-Word Search',
    desc: 'Instantly filter all tabs and windows. Type "react docs" to show only tabs matching both words.',
  },
  {
    icon: MousePointer,
    title: 'Drag & Drop Between Windows',
    desc: 'Move tabs across windows with a drag. Target window highlights with a "Drop here" indicator.',
  },
  {
    icon: Copy,
    title: 'Duplicate Tab Detection',
    desc: 'Auto-detects identical URLs with a yellow DUP badge. One-click "Select dupes" for bulk cleanup.',
  },
  {
    icon: Layers,
    title: 'Bulk Actions',
    desc: 'Close, move, pin/unpin, or discard multiple tabs at once. Smart pin toggle across selection.',
  },
  {
    icon: Monitor,
    title: 'Window Management',
    desc: 'Color-code and rename windows. Create or close windows from the extension UI.',
  },
  {
    icon: Database,
    title: 'Session Save & Restore',
    desc: 'Save named tab sessions and restore them later — across browser restarts, fully local.',
  },
]

const aiFeatures = [
  {
    icon: FileText,
    title: 'Content Extraction',
    desc: 'Uses Mozilla Readability to pull clean article text from every tab — skipping nav, ads, and boilerplate.',
  },
  {
    icon: Cpu,
    title: 'Local Vector Embedding',
    desc: 'Chunks text into ~1,000-token segments and generates 768-dim embeddings stored in IndexedDB on your device.',
  },
  {
    icon: Brain,
    title: 'Semantic RAG Search',
    desc: 'Ask natural-language questions. Cosine similarity retrieves the top matching snippets from your tabs.',
  },
  {
    icon: MessageSquare,
    title: 'Cited AI Answers',
    desc: 'Answers are grounded in your tab content with source cards linking back to the exact page.',
  },
  {
    icon: Globe,
    title: 'Multi-Provider AI',
    desc: 'Switch between Gemini, OpenAI, and Anthropic / Claude at any time from the settings panel.',
  },
  {
    icon: Shield,
    title: 'Embedding Guard',
    desc: 'Detects provider switches and prompts a re-sync — preventing cross-space vector mismatches.',
  },
]

const providers = [
  {
    name: 'Gemini',
    color: 'from-blue-400 to-blue-600',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    free: 'gemini-2.0-flash',
    pro: 'gemini-2.5-pro',
    embed: 'gemini-embedding-001',
    tag: 'Default',
    tagColor: 'bg-blue-500/20 text-blue-400',
  },
  {
    name: 'OpenAI',
    color: 'from-green-400 to-emerald-600',
    border: 'border-green-500/20',
    bg: 'bg-green-500/5',
    free: 'gpt-4o-mini',
    pro: 'gpt-4o',
    embed: 'text-embedding-3-small',
    tag: null,
    tagColor: '',
  },
  {
    name: 'Anthropic',
    color: 'from-aiorange to-orange-600',
    border: 'border-aiorange/20',
    bg: 'bg-aiorange/5',
    free: 'claude-haiku-4-5',
    pro: 'claude-sonnet-4-6',
    embed: 'via Gemini or OpenAI',
    tag: null,
    tagColor: '',
  },
]

const privacyPoints = [
  {
    icon: Lock,
    title: 'Full text stays on your device',
    desc: 'Extracted page content and vector embeddings are stored in browser IndexedDB — never uploaded.',
  },
  {
    icon: Shield,
    title: 'API keys stored locally',
    desc: 'Keys are saved in chrome.storage.local and never transmitted to any third-party server.',
  },
  {
    icon: Zap,
    title: 'Only tiny snippets leave the device',
    desc: 'The top-3 relevant chunks (~300 tokens each) are sent to your AI provider — nothing more.',
  },
  {
    icon: Database,
    title: 'Zero telemetry',
    desc: 'No analytics, no user accounts, no tracking of any kind. The extension has no backend.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Open Your Tabs',
    desc: 'Browse normally. Open articles, docs, research, anything — RagTab works with your existing workflow.',
  },
  {
    step: '02',
    title: 'Click Sync Session',
    desc: 'RagTab extracts clean text from each tab via Mozilla Readability, chunks it, and generates local vector embeddings.',
  },
  {
    step: '03',
    title: 'Ask Any Question',
    desc: 'Type a natural-language question like "Where did I read about React Server Components?" in the AI chat.',
  },
  {
    step: '04',
    title: 'Get Cited Answers',
    desc: 'Receive a grounded answer with source cards linking directly to the tabs it came from.',
  },
]

const freeFeatures = [
  '5 tabs per sync session',
  'Faster AI models (Flash / GPT-3.5 / Haiku)',
  'Full tab manager — all features',
  'Unlimited session save & restore',
  'Local vector search',
  'All 3 AI providers',
]

const proFeatures = [
  'Unlimited tabs per sync',
  'Best AI models (Pro / GPT-4o / Sonnet)',
  'Full tab manager — all features',
  'Unlimited session save & restore',
  'Local vector search',
  'All 3 AI providers',
]

export default function Products() {
  useSEO({
    title: 'RagTab — AI Tab Manager & RAG Search Chrome Extension',
    description:
      'RagTab is a privacy-first Chrome extension combining a full-featured tab manager with local AI-powered RAG search. Chat with your open tabs using Gemini, OpenAI, or Claude — zero raw data leaves your device.',
    path: '/products',
  })

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ── Hero ── */}
        <div className="text-center mb-20" data-aos="fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-400 mb-6">
            <Chrome size={13} className="text-aiblue" />
            Chrome Extension · v1.0.1 · Free &amp; Pro
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient">RagTab</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-medium mb-4">
            AI Tab Manager &amp; RAG Search for Chrome
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The only Chrome extension that combines a full-featured tab manager with a local
            AI assistant powered by RAG. Search, organise, and ask natural-language questions
            about all your open tabs — powered by Gemini, OpenAI, or Claude — without ever
            sending your raw browsing data to the cloud.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
            >
              <Chrome size={18} /> Install Free on Chrome
            </a>
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <ExternalLink size={16} /> View on Chrome Web Store
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400">
              <Shield size={13} /> 100% Local — Zero Data Leaks
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-aiblue/20 bg-aiblue/5 text-aiblue">
              <Brain size={13} /> Gemini · OpenAI · Claude
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-gray-400">
              <Star size={13} className="text-yellow-400" /> Free to Install
            </span>
          </div>
        </div>

        {/* ── What is RagTab ── */}
        <div className="mb-20 gradient-border" data-aos="fade-up">
          <div className="bg-[hsl(240,10%,3.9%)] p-8 md:p-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              What is <span className="text-gradient">RagTab</span>?
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Most tab managers just close tabs. Most AI assistants just chat.{' '}
                <strong className="text-white">
                  RagTab is the first AI-powered tab manager that builds a searchable knowledge
                  base from your open tabs
                </strong>
                , right inside Chrome — no external server, no account required, no data
                harvesting.
              </p>
              <p>
                Whether you're a developer juggling documentation, a researcher tracking
                articles, or someone who perpetually has 40+ tabs open, RagTab gives you an AI
                research assistant that knows exactly what you're reading — privately and
                instantly.
              </p>
              <p>
                It works by extracting readable text from your tabs, chunking it into
                ~1,000-token segments, generating vector embeddings locally in your browser, and
                answering your questions using only the most relevant snippets — so your full
                browsing history never leaves your device.
              </p>
            </div>
          </div>
        </div>

        {/* ── How It Works ── */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-aos="fade-up">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                data-aos="fade-up"
                data-aos-delay={i * 75}
                className="relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aiblue/20 transition-all"
              >
                <div className="text-4xl font-bold text-aiblue/20 mb-3">{step.step}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-gray-700">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Tab Manager Features ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3" data-aos="fade-up">
            <div className="w-9 h-9 rounded-lg bg-aiblue/10 flex items-center justify-center">
              <Monitor size={18} className="text-aiblue" />
            </div>
            <span className="text-xs uppercase tracking-widest text-aiblue font-semibold">
              Tab Manager
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-aos="fade-up">
            Every tab management feature you need
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl" data-aos="fade-up">
            Live search, multi-window view, drag &amp; drop, bulk actions, keyboard navigation,
            duplicate detection, and session management — all in one 780px popup.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tabManagerFeatures.map((feat, i) => (
              <div
                key={feat.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aiblue/20 transition-all"
              >
                <feat.icon size={20} className="text-aiblue mb-3" />
                <h3 className="font-semibold mb-1">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Keyboard shortcuts callout */}
          <div
            data-aos="fade-up"
            className="mt-6 p-5 rounded-xl border border-white/5 bg-white/[0.02]"
          >
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Zap size={16} className="text-yellow-400" /> Keyboard Navigation
            </h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                ['↑ / ↓', 'Move focus through tabs'],
                ['Enter', 'Switch to focused tab'],
                ['Ctrl+Click', 'Toggle tab in selection'],
                ['Shift+Click', 'Range-select tabs'],
                ['Ctrl+A', 'Select all visible tabs'],
                ['Escape', 'Clear search + deselect'],
              ].map(([key, label]) => (
                <div key={key} className="flex items-center gap-2">
                  <kbd className="px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-xs font-mono text-gray-300">
                    {key}
                  </kbd>
                  <span className="text-gray-500">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── AI Chat Features ── */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3" data-aos="fade-up">
            <div className="w-9 h-9 rounded-lg bg-aipurple/10 flex items-center justify-center">
              <Brain size={18} className="text-aipurple" />
            </div>
            <span className="text-xs uppercase tracking-widest text-aipurple font-semibold">
              AI RAG Search
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-aos="fade-up">
            Ask anything about your open tabs
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl" data-aos="fade-up">
            RagTab uses Retrieval-Augmented Generation (RAG) to answer questions like{' '}
            <em>"Which tab had that React Server Components article?"</em> or{' '}
            <em>"Summarise everything I've read about climate policy today"</em>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {aiFeatures.map((feat, i) => (
              <div
                key={feat.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aipurple/20 transition-all"
              >
                <feat.icon size={20} className="text-aipurple mb-3" />
                <h3 className="font-semibold mb-1">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* RAG pipeline visual */}
          <div
            data-aos="fade-up"
            className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
          >
            <h3 className="font-semibold mb-4 text-sm text-gray-400 uppercase tracking-widest">
              RAG Pipeline
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                'Sync Tabs',
                'Readability Extract',
                'Chunk ~1k tokens',
                'Embed Locally',
                'IndexedDB Store',
                'Ask Question',
                'Cosine Search',
                'AI Completion',
                'Cited Answer',
              ].map((step, i, arr) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-aipurple/10 border border-aipurple/20 text-aipurple text-xs font-medium">
                    {step}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowRight size={12} className="text-gray-600" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── AI Providers ── */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4" data-aos="fade-up">
            Works with your AI provider
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-10" data-aos="fade-up">
            RagTab supports three AI providers out of the box. Bring your own API key — switch
            any time from the settings panel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {providers.map((p, i) => (
              <div
                key={p.name}
                data-aos="fade-up"
                data-aos-delay={i * 75}
                className={`p-6 rounded-xl border ${p.border} ${p.bg} hover:bg-white/[0.04] transition-all`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  {p.tag && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 w-16 flex-shrink-0">Free:</span>
                    <span className="font-mono text-gray-300">{p.free}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 w-16 flex-shrink-0">Pro:</span>
                    <span className="font-mono text-gray-300">{p.pro}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 w-16 flex-shrink-0">Embed:</span>
                    <span className="font-mono text-gray-300 text-xs">{p.embed}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Privacy First ── */}
        <div className="mb-20">
          <div className="text-center mb-10" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs mb-4">
              <Shield size={13} /> Privacy First
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Your browsing stays on your device
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {privacyPoints.map((pt, i) => (
              <div
                key={pt.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="flex items-start gap-4 p-5 rounded-xl border border-green-500/10 bg-green-500/[0.03]"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <pt.icon size={18} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{pt.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pricing ── */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Free to start, Pro when you're ready
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Free */}
            <div
              data-aos="fade-up"
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <div className="mb-4">
                <span className="text-xs uppercase tracking-widest text-gray-500">Free</span>
                <div className="text-3xl font-bold mt-1">$0</div>
                <p className="text-sm text-gray-500 mt-1">Install, no credit card needed</p>
              </div>
              <ul className="space-y-2.5">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle size={14} className="text-gray-600 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Install Free
              </a>
            </div>

            {/* Pro */}
            <div data-aos="fade-up" data-aos-delay="75" className="gradient-border">
              <div className="bg-[hsl(240,10%,3.9%)] p-6 rounded-lg h-full">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-aipurple">Pro</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-aipurple/10 text-aipurple border border-aipurple/20">
                      Coming Soon
                    </span>
                  </div>
                  <div className="text-3xl font-bold mt-1">
                    Pro <span className="text-lg text-gray-500 font-normal">/ mo</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Unlimited tabs, best models</p>
                </div>
                <ul className="space-y-2.5">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle size={14} className="text-aipurple flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
                >
                  Get Started Free <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Install CTA ── */}
        <div data-aos="fade-up" className="gradient-border">
          <div className="bg-[hsl(240,10%,3.9%)] p-10 rounded-lg text-center">
            <Chrome size={40} className="text-aiblue mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to take control of your tabs?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Install RagTab free from the Chrome Web Store and start chatting with your open
              tabs in under 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
              >
                <Chrome size={18} /> Install on Chrome — Free
              </a>
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                <ExternalLink size={16} /> Chrome Web Store <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
