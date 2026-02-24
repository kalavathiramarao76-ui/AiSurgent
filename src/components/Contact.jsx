import { Mail, MessageCircle, Youtube, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Looking to collaborate? I'm open to YouTube collaborations, dedicated videos, ad drop-ins, and resource pack integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
          {/* Collaborations card */}
          <div className="p-6 rounded-xl border border-aipurple/20 bg-aipurple/5 hover:border-aipurple/40 transition-all">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-aipurple/10">
              <Youtube size={20} className="text-aipurple" />
            </div>
            <h3 className="text-lg font-semibold mb-2">YouTube Collaborations</h3>
            <p className="text-sm text-gray-400 mb-4">
              Dedicated videos or ad drop-ins, plus optional resource pack integrations.
            </p>
            <Link
              to="/collabs"
              className="inline-flex items-center gap-2 text-sm font-medium text-aipurple hover:underline"
            >
              View Collaboration Options <ArrowRight size={14} />
            </Link>
          </div>

          {/* Consulting card */}
          <div className="p-6 rounded-xl border border-aiblue/20 bg-aiblue/5 hover:border-aiblue/40 transition-all">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-aiblue/10">
              <MessageCircle size={20} className="text-aiblue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Consulting</h3>
            <p className="text-sm text-gray-400 mb-4">
              Need help integrating AI into your product? Let's talk about how I can help your team.
            </p>
            <Link
              to="/consulting"
              className="inline-flex items-center gap-2 text-sm font-medium text-aiblue hover:underline"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-sm text-gray-500 mb-4">Or find me on</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com/SaikiranBali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://github.com/balisaikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.youtube.com/channel/UCjfTDoriZMoXlAeQ5oebRhw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
