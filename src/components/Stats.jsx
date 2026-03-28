import { Eye, Clock, Users, Film } from 'lucide-react'
import { useYouTubeStats, formatCount } from '../hooks/useYouTubeStats'
import { Reveal, RevealStagger, RevealItem } from './motion/Reveal'

export default function Stats() {
  const ytStats = useYouTubeStats()

  const stats = [
    { icon: Eye, label: 'Views', value: formatCount(ytStats?.viewCount) ?? '300K+', color: 'text-aiblue' },
    { icon: Clock, label: 'Watch Hours', value: '20K+', color: 'text-aipurple' },
    { icon: Users, label: 'Subscribers', value: formatCount(ytStats?.subscriberCount) ?? '11K+', color: 'text-aiorange' },
    { icon: Film, label: 'Videos', value: formatCount(ytStats?.videoCount) ?? '50+', color: 'text-aigreen' },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Playlists</h2>
            <p className="text-gray-400">Growing library of AI development content</p>
          </div>
        </Reveal>

        <RevealStagger stagger={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <RevealItem key={stat.label}>
                <div
                  className={`text-center p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]${
                    i < stats.length - 1 ? ' md:border-r md:border-r-white/[0.08]' : ''
                  }`}
                >
                  <stat.icon size={24} className={`${stat.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealStagger>
      </div>
    </section>
  )
}
