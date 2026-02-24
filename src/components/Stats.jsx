import { Eye, Clock, Users, Film } from 'lucide-react'

const stats = [
  { icon: Eye, label: 'Views', value: '300k+', color: 'text-aiblue' },
  { icon: Clock, label: 'Watch Hours', value: '20k+', color: 'text-aipurple' },
  { icon: Users, label: 'Subscribers', value: '11k+', color: 'text-aiorange' },
  { icon: Film, label: 'Videos', value: '50+', color: 'text-aigreen' },
]

export default function Stats() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Playlists</h2>
          <p className="text-gray-400">Growing library of AI development content</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up" data-aos-delay="100">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-white/5 bg-white/[0.02]"
            >
              <stat.icon size={24} className={`${stat.color} mx-auto mb-3`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
