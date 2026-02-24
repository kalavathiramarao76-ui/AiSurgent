import { Mail, Sparkles, Shield } from 'lucide-react'
import { useState } from 'react'

export default function InsidersClub() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder for newsletter signup
    alert(`Thanks for subscribing, ${email}! (Connect your newsletter service to activate.)`)
    setEmail('')
  }

  return (
    <section id="insiders" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="gradient-border" data-aos="fade-up">
          <div className="bg-[hsl(240,10%,3.9%)] p-8 sm:p-12 rounded-lg text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-aiorange to-aipurple flex items-center justify-center">
              <Sparkles size={28} className="text-white" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join the Insiders Club
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Get workflow notes, behind-the-scenes experiments, and early access to new resource packs -- free. This is where I share the things I don't post anywhere else.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-aipurple/50 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 via-aipurple to-pink-500 hover:-translate-y-0.5 transition-transform"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield size={12} />
              <span>No spam, unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
