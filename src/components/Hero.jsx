import { ArrowDown, Youtube, Package } from 'lucide-react'
import { useYouTubeStats, formatCount } from '../hooks/useYouTubeStats'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.25, 0.1, 0.25, 1]

export default function Hero() {
  const ytStats = useYouTubeStats()
  const subscriberCount = formatCount(ytStats?.subscriberCount)
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease, delay },
        }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Headline */}
        <motion.div {...fadeUp(0.1)}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Level Up Your{' '}
            <span className="text-gradient">AI Game</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div {...fadeUp(0.3)}>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Learn faster with weekly tutorials, insider workflows, and resource packs for Claude, ADK, Codex, and beyond.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#tutorials"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium bg-white text-black hover:bg-white/90 transition-colors"
          >
            Let's Get Started!
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-gray-300 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats badges */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-6">
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
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <a href="#tutorials" className="text-gray-500 hover:text-gray-300 transition-colors">
            <ArrowDown size={24} className="mx-auto" />
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[120px] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(240 10% 3.9%), transparent)',
        }}
      />
    </section>
  )
}
