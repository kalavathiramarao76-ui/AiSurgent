import { useState } from 'react'

export default function InsidersClub() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thanks for subscribing, ${email}! (Connect your newsletter service to activate.)`)
    setEmail('')
  }

  return (
    <section id="insiders" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="glass-card p-10 sm:p-16 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">Community</span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
            Join the Insiders Club
          </h2>

          <p className="text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed">
            Workflow notes, behind-the-scenes experiments, and early access to new resource packs. Free. Things I don't post anywhere else.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 h-12 px-5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 focus:outline-none focus:border-white/[0.2] transition-colors text-sm"
            />
            <button
              type="submit"
              className="h-12 px-8 rounded-full font-medium text-sm text-black bg-white hover:bg-gray-100 hover:-translate-y-0.5 transition-all"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-gray-600">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
