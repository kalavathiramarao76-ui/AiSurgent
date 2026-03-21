import { Youtube, MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="section-divider mb-20" />

        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">Connect</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Get in touch</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Open to collaborations, dedicated videos, and consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-out">
          {/* Collaborations card */}
          <div className="glass-card p-8">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
              <Youtube size={18} className="text-gray-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 tracking-tight">YouTube Collaborations</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Dedicated videos or ad drop-ins, plus optional resource pack integrations.
            </p>
            <Link
              to="/collabs"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              View Options
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Consulting card */}
          <div className="glass-card p-8">
            <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
              <MessageCircle size={18} className="text-gray-400" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Consulting</h3>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Need help integrating AI into your product? Let's talk about how I can help.
            </p>
            <Link
              to="/consulting"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
            >
              Learn More
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-out">
          <div className="flex justify-center gap-8">
            <a href="https://twitter.com/SaikiranBali" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
              X / Twitter
            </a>
            <a href="https://github.com/balisaikiran" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
              GitHub
            </a>
            <a href="https://www.youtube.com/@AIsurgentDev" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-300 transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
