import { Package, CheckCircle, ArrowRight } from 'lucide-react'

const features = [
  'Ready-to-use prompts & configs',
  'Full source code included',
  'Real-world integrations',
  'Regular updates',
]

export default function BuilderPacks() {
  return (
    <section id="builder-packs" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card p-10 sm:p-16" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">Resources</span>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                Resource Packs
              </h2>

              <p className="text-gray-500 mb-8 leading-relaxed">
                The exact prompts, configs, workflows, and source code I use every day. Drop them straight into your workflow.
              </p>

              <ul className="space-y-3 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                    <CheckCircle size={14} className="text-gray-600 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all group"
              >
                Learn More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                    <Package size={28} className="text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Multi-Agent AI Systems</h3>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Complete source code, cheat sheets, and real-world integrations built on Google's ADK & A2A.
                  </p>
                  <span className="text-xs text-gray-600">+ More packs coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
