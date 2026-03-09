import { Shield, Database, Cpu, Share2, Lock, Mail, Eye, Server } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const sections = [
  {
    icon: Eye,
    color: 'aiblue',
    title: 'Data Collection',
    items: [
      'RagTab accesses open tab metadata (such as URL and title) and website content only when you explicitly trigger indexing or AI analysis.',
      'All content indexing and vector embedding generation occur locally within your browser using IndexedDB storage.',
      'No data is collected passively — everything is opt-in and user-initiated.',
    ],
  },
  {
    icon: Cpu,
    color: 'aipurple',
    title: 'AI Provider Requests',
    items: [
      'If you configure an external AI provider (such as Anthropic, Gemini, or OpenAI) and submit a query, only the top relevant text snippets are transmitted securely via HTTPS to the selected provider for processing.',
      'Full page content is never transmitted to any external service.',
      'RagTab does not automatically send browsing data to any external service — all transmissions are explicit and user-initiated.',
    ],
  },
  {
    icon: Database,
    color: 'aigreen',
    title: 'Data Storage',
    items: [
      'All embeddings, session data, and preferences are stored locally on your device using Chrome\'s IndexedDB and chrome.storage.local.',
      'Your API keys are saved locally in chrome.storage.local and are never transmitted to RagTab servers.',
      'Data persists only on your device and is under your full control.',
    ],
  },
  {
    icon: Share2,
    color: 'aiorange',
    title: 'Data Sharing',
    items: [
      'RagTab does not sell, rent, or transfer user data to third parties.',
      'There are no analytics, telemetry, or tracking systems built into RagTab.',
      'No external logging or monitoring of your usage occurs.',
    ],
  },
  {
    icon: Lock,
    color: 'aiblue',
    title: 'Data Usage Limitation',
    items: [
      'User data is used solely to provide tab management and contextual AI assistance functionality.',
      'Data collected is never used for advertising, profiling, or any purpose beyond the core features you explicitly use.',
    ],
  },
  {
    icon: Server,
    color: 'aipurple',
    title: 'No Server Required',
    items: [
      'The entire RagTab pipeline — extract, chunk, embed, and search — runs entirely in your browser.',
      'Only the top matching text snippets (approximately 300 tokens each) are ever sent to your chosen AI provider when you ask a question.',
      'RagTab requires no backend server and maintains no user accounts or cloud storage.',
    ],
  },
]

const colorMap = {
  aiblue: {
    icon: 'text-aiblue',
    bg: 'bg-aiblue/10',
    border: 'border-aiblue/20',
    hover: 'hover:border-aiblue/40',
    dot: 'bg-aiblue',
  },
  aipurple: {
    icon: 'text-aipurple',
    bg: 'bg-aipurple/10',
    border: 'border-aipurple/20',
    hover: 'hover:border-aipurple/40',
    dot: 'bg-aipurple',
  },
  aiorange: {
    icon: 'text-aiorange',
    bg: 'bg-aiorange/10',
    border: 'border-aiorange/20',
    hover: 'hover:border-aiorange/40',
    dot: 'bg-aiorange',
  },
  aigreen: {
    icon: 'text-aigreen',
    bg: 'bg-aigreen/10',
    border: 'border-aigreen/20',
    hover: 'hover:border-aigreen/40',
    dot: 'bg-aigreen',
  },
}

const privacyHighlights = [
  { label: 'Local Processing', desc: 'All indexing runs in your browser' },
  { label: 'No Telemetry', desc: 'Zero tracking or analytics' },
  { label: 'You Own Your Data', desc: 'Stored only on your device' },
  { label: 'Snippets Only', desc: 'Only ~300-token chunks sent to AI' },
]

const PRIVACY_SCHEMAS = [
  {
    '@type': 'WebPage',
    '@id': 'https://aisurgent.dev/privacy#webpage',
    url: 'https://aisurgent.dev/privacy',
    name: 'RagTab Privacy Policy — Privacy-First Chrome Extension',
    description:
      'RagTab is a privacy-first browser extension. All tab indexing and vector embeddings are generated locally. Your data never leaves your device.',
    isPartOf: { '@id': 'https://aisurgent.dev/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisurgent.dev/' },
        { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://aisurgent.dev/privacy' },
      ],
    },
  },
]

export default function Privacy() {
  useSEO({
    title: 'RagTab Privacy Policy — Privacy-First Chrome Extension',
    description:
      'RagTab is a privacy-first browser extension. All tab indexing and vector embeddings are generated locally. Read our full privacy policy to understand how your data is protected.',
    path: '/privacy',
    schemas: PRIVACY_SCHEMAS,
  })

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-aiblue/30 bg-aiblue/10 text-aiblue text-sm font-medium mb-6">
            <Shield size={14} />
            Privacy Policy
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">RagTab</span> Privacy Policy
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            RagTab is a <strong className="text-white">privacy-first</strong> browser extension designed to help you
            organize and interact with your open tabs — entirely within your browser.
          </p>
          <p className="mt-3 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Privacy Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-aos="fade-up" data-aos-delay="100">
          {privacyHighlights.map((item) => (
            <div
              key={item.label}
              className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aiblue/20 transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-aigreen mx-auto mb-3" />
              <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Privacy Sections */}
        <div className="space-y-6 mb-16">
          {sections.map((section, i) => {
            const colors = colorMap[section.color]
            return (
              <div
                key={section.title}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className={`p-6 rounded-xl border ${colors.border} bg-white/[0.02] ${colors.hover} transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    <section.icon size={20} className={colors.icon} />
                  </div>
                  <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                      <span className="text-sm text-gray-400 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Summary Table */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-xl font-semibold text-white mb-5">At a Glance</h2>
          <div className="rounded-xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="text-left px-5 py-3 text-gray-300 font-semibold w-1/2">What happens</th>
                  <th className="text-left px-5 py-3 text-gray-300 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { what: 'Tab content stays local', detail: 'Extracted text and embeddings stored in IndexedDB on your device' },
                  { what: 'API keys stored locally', detail: 'Keys saved in chrome.storage.local, never transmitted' },
                  { what: 'Only snippets leave the device', detail: 'Top-3 relevant text chunks (~300 tokens each) sent to your chosen AI provider' },
                  { what: 'No analytics', detail: 'Zero telemetry, no tracking, no external logging' },
                  { what: 'No server required', detail: 'The entire pipeline runs in your browser' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                    <td className="px-5 py-3.5 text-white font-medium">{row.what}</td>
                    <td className="px-5 py-3.5 text-gray-400">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact */}
        <div
          className="p-6 rounded-xl border border-aipurple/20 bg-aipurple/[0.05] hover:border-aipurple/40 transition-all"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-aipurple/10">
              <Mail size={20} className="text-aipurple" />
            </div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Have questions about this privacy policy or how RagTab handles your data? We're happy to help.
          </p>
          <a
            href="mailto:support@aisurgent.dev"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-aipurple to-aiblue hover:-translate-y-0.5 transition-transform"
          >
            <Mail size={14} />
            support@aisurgent.dev
          </a>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-xs text-gray-600" data-aos="fade-up">
          This privacy policy applies to the RagTab Chrome extension. It may be updated from time to time — significant changes will be communicated via the extension update notes.
        </p>
      </div>
    </section>
  )
}
