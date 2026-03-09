import { useSEO } from '../hooks/useSEO'
import {
  Gamepad2, Workflow, Link2, Code2, Lightbulb,
  Rocket, Users, Briefcase, Wrench,
  Video, Clock, Mail, ArrowRight, MessageCircle,
  CheckCircle
} from 'lucide-react'

const helpWith = [
  { icon: Gamepad2, title: 'AI-Powered Development', desc: 'From vibe-coded prototypes to production-ready features.' },
  { icon: Workflow, title: 'Agentic Workflows', desc: 'Designing and implementing multi-agent systems with ADK & MCP.' },
  { icon: Link2, title: 'MCP Integration', desc: 'Connecting your app to language models reliably.' },
  { icon: Code2, title: 'AI Code Assistance', desc: 'Leveraging AI tools (Copilot, Cursor, custom scripts) to accelerate development.' },
  { icon: Lightbulb, title: 'Custom AI Solutions', desc: 'Tailored AI strategies for your unique product or business challenges.' },
]

const whoFor = [
  { icon: Rocket, title: 'Developers', desc: 'Exploring AI for new features or development efficiency.' },
  { icon: Users, title: 'Indie Devs & Small Teams', desc: 'Needing targeted AI expertise without a full-time hire.' },
  { icon: Briefcase, title: 'Founders & Product Owners', desc: 'Aiming to integrate AI features into their applications.' },
  { icon: Wrench, title: 'Developers & Hobbyists', desc: 'Wanting to level up their skills in practical AI implementation.' },
]

const CONSULTING_SCHEMAS = [
  {
    '@type': 'Service',
    '@id': 'https://aisurgent.dev/consulting#service',
    name: 'AI Consulting by Saikiran Bali',
    description:
      'Expert hands-on AI consulting on Claude API, Claude Code, Agent Development Kit (ADK), MCP integration, agentic workflows, and building production-ready AI features.',
    provider: { '@id': 'https://aisurgent.dev/#person' },
    serviceType: 'AI Development Consulting',
    areaServed: 'Worldwide',
    availableLanguage: 'English',
    url: 'https://aisurgent.dev/consulting',
    offers: [
      {
        '@type': 'Offer',
        name: '45-Minute Deep Dive Session',
        price: '199',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        description:
          'Hands-on advice tailored to your build. Includes a written summary, next steps, and relevant tools or resources.',
      },
    ],
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What AI topics does Saikiran Bali consult on?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saikiran Bali consults on Claude API integration, Claude Code, Agent Development Kit (ADK), Model Context Protocol (MCP) integration, agentic workflows, multi-agent systems, AI-powered development, and building production-ready AI features.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does an AI consulting session cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 45-minute deep dive AI consulting session with Saikiran Bali costs $199 USD. It includes hands-on advice tailored to your build, a written summary, next steps, and relevant tools or resources.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is AI consulting from AISurgentDev for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI consulting from Saikiran Bali is for developers exploring AI for new features, indie developers and small teams needing targeted AI expertise without a full-time hire, founders and product owners aiming to integrate AI features, and developers wanting to level up their practical AI implementation skills.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book an AI consulting session?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Email consulting@aisurgent.dev to schedule a 45-minute deep dive session ($199 USD) or to discuss your AI project.',
        },
      },
    ],
  },
]

export default function Consulting() {
  useSEO({
    title: 'AI Consulting — Claude, ADK, MCP & Agentic Workflow Integration',
    description:
      'Get hands-on AI consulting from Saikiran Bali (balisaikiran). Expert guidance on Claude API, Claude Code, Agent Development Kit, MCP integration, agentic workflows, and building production-ready AI features.',
    path: '/consulting',
    schemas: CONSULTING_SCHEMAS,
  })

  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Stuck on how to integrate{' '}
            <span className="text-gradient">AI</span> into your product?
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-4">
            You see the potential of AI -- to automate complex workflows, build innovative products, or create smarter systems. But bridging the gap between vision and production-ready solutions can be daunting.
          </p>
          <p className="text-gray-300">
            That's where I come in. I help developers, founders, and teams demystify AI and turn ambitious ideas into reality.
          </p>
        </div>

        {/* What I Help With */}
        <div id="what-i-help-with" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
            What I Help With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpWith.map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-aiblue/20 transition-all"
              >
                <item.icon size={22} className="text-aiblue mb-3" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who This Is For */}
        <div id="who-this-is-for" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
            Who This Is For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoFor.map((item, i) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-10 h-10 rounded-lg bg-aipurple/10 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-aipurple" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to Work With Me */}
        <div id="ways-to-work" className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center" data-aos="fade-up">
            Ways to Work With Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free call */}
            <div data-aos="fade-up" className="gradient-border">
              <div className="bg-[hsl(240,10%,3.9%)] p-6 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Video size={22} className="text-aigreen" />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700/50 text-gray-400">Currently booked out</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Free 15-Min Strategy Call</h3>
                <p className="text-sm text-gray-400">
                  Not sure where to start with AI? Let's talk. This no-pressure call is for anyone who wants clarity on how I can help.
                </p>
              </div>
            </div>

            {/* Paid session */}
            <div data-aos="fade-up" data-aos-delay="100" className="gradient-border">
              <div className="bg-[hsl(240,10%,3.9%)] p-6 rounded-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={22} className="text-aiblue" />
                  <span className="text-xs px-2 py-0.5 rounded-full bg-aiblue/10 text-aiblue border border-aiblue/20">Available</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">45-Min Deep Dive -- $199 USD</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Get hands-on advice tailored to your build. Includes a written summary, next steps, and relevant tools or resources.
                </p>
                <a
                  href="mailto:consulting@aisurgent.dev"
                  className="inline-flex items-center gap-2 text-sm font-medium text-aiblue hover:underline"
                >
                  Schedule a Session <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Email CTA */}
          <div className="mt-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 mb-3">Prefer email? Happy to answer questions or scope async.</p>
            <a
              href="mailto:consulting@aisurgent.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </div>
        </div>

        {/* Resource Pack CTA */}
        <div data-aos="fade-up" className="gradient-border">
          <div className="bg-[hsl(240,10%,3.9%)] p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Your AI Agent Shortcut: Resource Pack #1</h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-6">
              Get the complete source code, cheat sheets, and real-world integrations built on Google's ADK & A2A.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aipurple to-aiblue hover:-translate-y-0.5 transition-transform"
            >
              Get Resource Pack Now! <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
