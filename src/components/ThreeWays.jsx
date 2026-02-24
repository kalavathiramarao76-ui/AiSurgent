import { PlayCircle, Package, Users } from 'lucide-react'

const cards = [
  {
    icon: PlayCircle,
    title: 'Tutorials',
    description: 'Step-by-step guides for Claude Code, ADK, and Codex. Practical, hands-on learning.',
    stat: 'YouTube Series',
    badge: 'Featured',
    color: 'aiblue',
    link: '#tutorials',
    linkText: 'Browse Tutorials',
  },
  {
    icon: Package,
    title: 'Resource Packs',
    description: 'Skip the grind. Use ready-to-go packs -- the same prompts, configs, and setups I rely on daily.',
    stat: 'Practical resources',
    color: 'aipurple',
    link: '#builder-packs',
    linkText: 'Explore Packs',
  },
  {
    icon: Users,
    title: 'Insiders Club',
    description: 'Join the free Insiders Club for exclusive workflows and early access to new resource packs.',
    stat: 'Growing community',
    color: 'aiorange',
    link: '#insiders',
    linkText: 'Join Insiders Club',
  },
]

export default function ThreeWays() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three ways to learn with me
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose your path to mastering AI-assisted development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="gradient-border group"
            >
              <div className="relative bg-[hsl(240,10%,3.9%)] p-6 rounded-lg h-full flex flex-col">
                {card.badge && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium rounded-full bg-aiblue/10 text-aiblue border border-aiblue/20">
                    {card.badge}
                  </span>
                )}

                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-${card.color}/10`}>
                  <card.icon size={24} className={`text-${card.color}`} />
                </div>

                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">{card.description}</p>
                <p className="text-xs text-gray-500 mb-4">{card.stat}</p>

                <a
                  href={card.link}
                  className={`inline-flex items-center text-sm font-medium text-${card.color} hover:underline`}
                >
                  {card.linkText} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
