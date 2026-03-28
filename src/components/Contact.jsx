import { Mail, MessageCircle, Youtube, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, RevealStagger, RevealItem } from './motion/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 max-w-lg mx-auto">
              Looking to collaborate? I'm open to YouTube collaborations, dedicated videos, ad drop-ins, and resource pack integrations.
            </p>
          </div>
        </Reveal>

        <RevealStagger stagger={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Collaborations card */}
            <RevealItem>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-aipurple/10">
                  <Youtube size={20} className="text-aipurple" />
                </div>
                <h3 className="text-lg font-semibold mb-2">YouTube Collaborations</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Dedicated videos or ad drop-ins, plus optional resource pack integrations.
                </p>
                <Link
                  to="/collabs"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-aipurple hover:underline"
                >
                  View Collaboration Options <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </RevealItem>

            {/* Consulting card */}
            <RevealItem>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-aiblue/10">
                  <MessageCircle size={20} className="text-aiblue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Consulting</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Need help integrating AI into your product? Let's talk about how I can help your team.
                </p>
                <Link
                  to="/consulting"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-aiblue hover:underline"
                >
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </RevealItem>
          </div>
        </RevealStagger>

        {/* Social links */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Or find me on</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://twitter.com/SaikiranBali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                Twitter / X
              </a>
              <a
                href="https://github.com/balisaikiran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                GitHub
              </a>
              <a
                href="https://www.youtube.com/@AIsurgentDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
              >
                YouTube
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
