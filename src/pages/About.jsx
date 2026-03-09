import { Code, Youtube, GraduationCap, Clock, ArrowRight } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

const credentials = [
  { icon: Code, label: 'Software Developer' },
  { icon: Youtube, label: 'YouTube Creator' },
  { icon: GraduationCap, label: 'Tech Enthusiast' },
  { icon: Clock, label: 'Years of Experience' },
]

const ABOUT_SCHEMAS = [
  {
    '@type': 'ProfilePage',
    '@id': 'https://aisurgent.dev/about#profilepage',
    url: 'https://aisurgent.dev/about',
    name: 'Saikiran Bali (balisaikiran) — AI Developer & YouTube Creator',
    description:
      'Meet Saikiran Bali (balisaikiran), AI developer and YouTube educator covering Claude, ADK, MCP, agentic workflows, and practical AI for developers.',
    mainEntity: { '@id': 'https://aisurgent.dev/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisurgent.dev/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://aisurgent.dev/about' },
      ],
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is Saikiran Bali?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saikiran Bali (balisaikiran) is an AI developer and YouTube content creator who runs AISurgentDev. He builds and documents AI-powered workflows, tutorials on Claude API, Claude Code, ADK, MCP, and practical AI integrations that help developers ship production-ready AI features faster.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is AISurgent and who created it?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgent (AISurgentDev) was created by Saikiran Bali. It is a platform documenting playbooks that bridge AI breakthroughs with the reality of production software — so developers can move faster without adding risk. Tutorials cover Claude, ADK, MCP, agentic workflows, and real-world AI integrations.',
        },
      },
    ],
  },
]

export default function About() {
  useSEO({
    title: 'Saikiran Bali (balisaikiran) — AI Developer & YouTube Creator',
    description:
      'Meet Saikiran Bali (balisaikiran), the creator behind AISurgentDev. AI developer, content creator, and YouTube educator covering Claude, ADK, MCP, agentic workflows, and practical AI for developers.',
    path: '/about',
    schemas: ABOUT_SCHEMAS,
  })

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-aiblue via-aipurple to-aiorange p-[3px]">
            <div className="w-full h-full rounded-full bg-[hsl(240,10%,3.9%)] flex items-center justify-center text-3xl font-bold text-gradient">
              SB
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Saikiran Bali</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AI Developer, Content Creator, and Tech Enthusiast
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-6 mb-16" data-aos="fade-up" data-aos-delay="100">
          <p className="text-gray-300 leading-relaxed">
            Hi, I'm <strong className="text-white">Saikiran Bali</strong>. I've spent years building and scaling software solutions, driven by a deep passion for AI and emerging technologies.
          </p>
          <p className="text-gray-400 leading-relaxed">
            AISurgent is where I document the playbooks that bridge AI breakthroughs with the messy reality of production software, so teams can move faster without adding risk.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Developers tune in for grounded tutorials and resource packs -- ready-to-use workflows, prompts, and automation you can plug into real projects.
          </p>
        </div>

        {/* Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
          {credentials.map((cred) => (
            <div key={cred.label} className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <cred.icon size={24} className="text-aipurple mx-auto mb-2" />
              <span className="text-sm text-gray-400">{cred.label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="300">
          <a
            href="/#tutorials"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
          >
            Explore My Tutorials <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
