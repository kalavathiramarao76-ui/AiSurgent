import { Package, CheckCircle, ArrowRight } from 'lucide-react'

const features = [
  'Ready-to-use prompts & configs',
  'Full source code included',
  'Real-world integrations',
  'Regular updates',
]

export default function BuilderPacks() {
  return (
    <section id="builder-packs" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="gradient-border" data-aos="fade-up">
          <div className="bg-[hsl(240,10%,3.9%)] p-8 sm:p-12 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Package size={28} className="text-aipurple" />
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-aigreen/10 text-aigreen border border-aigreen/20">
                    Available Now
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Resource Packs
                </h2>

                <p className="text-gray-400 mb-6">
                  I package the exact prompts, configs, workflows, and full source code of projects I use every day into practical resource packs. Get setups you can drop straight into your workflow.
                </p>

                <ul className="space-y-3 mb-8">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle size={16} className="text-aigreen flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-aipurple to-aiblue hover:-translate-y-0.5 transition-transform"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>

              {/* Right visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-aipurple/10 rounded-2xl blur-3xl" />
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-aipurple to-aiblue flex items-center justify-center">
                      <Package size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Multi-Agent AI Systems</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Complete source code, cheat sheets, and real-world integrations built on Google's ADK & A2A.
                    </p>
                    <span className="text-xs text-gray-500">+ More packs coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
