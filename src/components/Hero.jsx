import { ArrowDown, Youtube, Package } from 'lucide-react'
import { useYouTubeStats, formatCount } from '../hooks/useYouTubeStats'

export default function Hero() {
  const ytStats = useYouTubeStats()
  const subscriberCount = formatCount(ytStats?.subscriberCount)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aiblue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aipurple/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-aiorange/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Level Up Your{' '}
            <span className="text-gradient">AI Game</span>
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Learn faster with weekly tutorials, insider workflows, and resource packs for Claude, ADK, Codex, and beyond.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#tutorials"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aiblue via-aipurple to-aiorange hover:-translate-y-0.5 transition-transform"
          >
            Let's Get Started!
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats badges */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap justify-center gap-6">
          <a
            href="https://www.youtube.com/@AIsurgentDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:border-red-500/40 hover:bg-red-500/5 transition-all"
          >
            <Youtube size={16} className="text-red-500" />
            <span className="text-sm text-gray-300">YouTube</span>
            {subscriberCount && (
              <>
                <span className="text-white/20">·</span>
                <span className="text-sm font-semibold text-red-400">{subscriberCount} subscribers</span>
              </>
            )}
          </a>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Package size={16} className="text-aipurple" />
            <span className="text-sm text-gray-300">Resource Packs Available</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#tutorials" className="text-gray-500 hover:text-gray-300 transition-colors">
            <ArrowDown size={24} className="mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}
