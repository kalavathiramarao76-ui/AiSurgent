import { PlayCircle, Package, Users, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: PlayCircle,
    title: 'Tutorials',
    description: 'Step-by-step guides for Claude Code, ADK, and Codex. Practical, hands-on learning.',
    stat: 'YouTube Series',
    link: '#tutorials',
    linkText: 'Browse Tutorials',
  },
  {
    icon: Package,
    title: 'Resource Packs',
    description: 'Skip the grind. Use ready-to-go packs -- the same prompts, configs, and setups I rely on daily.',
    stat: 'Practical resources',
    link: '#builder-packs',
    linkText: 'Explore Packs',
  },
  {
    icon: Users,
    title: 'Insiders Club',
    description: 'Join the free Insiders Club for exclusive workflows and early access to new resource packs.',
    stat: 'Growing community',
    link: '#insiders',
    linkText: 'Join Free',
  },
]

export default function ThreeWays() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">How to learn</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Three ways to learn
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Choose your path to mastering AI-assisted development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              className="glass-card p-8 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6">
                <card.icon size={20} className="text-gray-400" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-3 flex-1 leading-relaxed">{card.description}</p>
              <p className="text-xs text-gray-600 mb-6">{card.stat}</p>

              <a
                href={card.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
              >
                {card.linkText}
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
