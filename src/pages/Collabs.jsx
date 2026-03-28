import { Video, Clock, Mail } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const formats = [
  {
    icon: Video,
    title: 'Dedicated video',
    description: 'In-depth walkthrough showcasing functionality, workflow, and clear value props. Often integrated into a relevant series for maximum reach.',
  },
  {
    icon: Clock,
    title: 'Ad drop-in (60-90s)',
    description: 'A natural sponsor segment woven into the narrative of an existing video.',
  },
]

const recentExamples = [
  { title: 'Browserbase -- Dedicated video (Claude Code series)', type: 'Dedicated' },
  { title: 'TestSprite -- Dedicated video', type: 'Dedicated' },
  { title: 'Ad drop-in -- Codex series (example 1)', type: 'Ad Drop-in' },
  { title: 'Ad drop-in -- Codex series (example 2)', type: 'Ad Drop-in' },
]

const COLLABS_SCHEMAS = [
  {
    '@type': 'WebPage',
    '@id': 'https://aisurgent.dev/collabs#webpage',
    url: 'https://aisurgent.dev/collabs',
    name: 'YouTube Collaborations & Sponsorships — AISurgentDev',
    description:
      'Partner with Saikiran Bali (balisaikiran) on AISurgentDev. Reach developers building with Claude, ADK, MCP, and AI tools.',
    isPartOf: { '@id': 'https://aisurgent.dev/#website' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisurgent.dev/' },
        { '@type': 'ListItem', position: 2, name: 'Collabs', item: 'https://aisurgent.dev/collabs' },
      ],
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I collaborate with AISurgentDev?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can collaborate with AISurgentDev (Saikiran Bali) through dedicated videos — in-depth walkthroughs showcasing your tool — or 60-90 second ad drop-ins woven naturally into existing videos. Email collabs@aisurgent.dev to discuss a collaboration.',
        },
      },
      {
        '@type': 'Question',
        name: 'What audience does AISurgentDev reach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev reaches hands-on developers building with Claude, Agent Development Kit (ADK), Model Context Protocol (MCP), and AI tools. The audience consists of software developers, indie developers, founders, and AI enthusiasts who actively build real-world AI applications.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of AI tool sponsorships has AISurgentDev done?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev has done dedicated video collaborations (e.g., Browserbase, TestSprite) and ad drop-in segments in the Codex series. Both formats focus on authentic, practical integrations that resonate with a developer audience.',
        },
      },
    ],
  },
]

export default function Collabs() {
  useSEO({
    title: 'YouTube Collaborations & Sponsorships — AISurgentDev',
    description:
      'Partner with Saikiran Bali (balisaikiran) on AISurgentDev. Reach developers building with Claude, ADK, MCP, and AI tools through dedicated videos, ad drop-ins, and resource pack integrations.',
    path: '/collabs',
    schemas: COLLABS_SCHEMAS,
  })

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Reach Developers Who <span className="text-gradient">Ship</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I help developers learn your AI tool through real-world builds -- practical integrations, clear trade-offs, and what it actually enables.
          </p>
        </div>

        {/* Formats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {formats.map((format, i) => (
            <div
              key={format.title}
             
             
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aipurple/20 transition-all"
            >
              <format.icon size={24} className="text-aipurple mb-4" />
              <h3 className="text-lg font-semibold mb-2">{format.title}</h3>
              <p className="text-sm text-gray-400">{format.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Examples */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Recent Examples</h2>
          <div className="space-y-3">
            {recentExamples.map((example) => (
              <div
                key={example.title}
                className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <span className="text-sm text-gray-300">{example.title}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-aipurple/10 text-aipurple border border-aipurple/20">
                  {example.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="card-border inline-block">
            <div className="bg-[hsl(240,10%,3.9%)] px-8 py-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Interested in collaborating?</h3>
              <p className="text-sm text-gray-400 mb-6">Let's discuss how we can work together.</p>
              <a
                href="mailto:collabs@aisurgent.dev?subject=Collaboration%20Inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aipurple to-aiblue hover:-translate-y-0.5 transition-transform"
              >
                <Mail size={16} /> Discuss a Collaboration
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
