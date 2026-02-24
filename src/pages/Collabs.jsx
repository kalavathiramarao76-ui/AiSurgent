import { useEffect } from 'react'
import { Video, Clock, Mail, ArrowRight, ExternalLink } from 'lucide-react'

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

export default function Collabs() {
  useEffect(() => {
    document.title = 'AISurgent.Dev | Collaborations & Sponsorships'
  }, [])

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16" data-aos="fade-up">
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
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aipurple/20 transition-all"
            >
              <format.icon size={24} className="text-aipurple mb-4" />
              <h3 className="text-lg font-semibold mb-2">{format.title}</h3>
              <p className="text-sm text-gray-400">{format.description}</p>
            </div>
          ))}
        </div>

        {/* Recent Examples */}
        <div className="mb-16" data-aos="fade-up">
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
        <div className="text-center" data-aos="fade-up">
          <div className="gradient-border inline-block">
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
