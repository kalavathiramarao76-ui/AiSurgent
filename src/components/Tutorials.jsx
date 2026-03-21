import { Play, Clock, ArrowRight } from 'lucide-react'

const playlists = [
  {
    title: 'Claude Code Mastery',
    description: 'Comprehensive tutorials, advanced techniques, and real-world examples.',
    episodes: 10,
  },
  {
    title: 'ADK Made Simple',
    description: 'Beginner-friendly series about creating AI agents using Agent Development Kit.',
    episodes: 5,
  },
  {
    title: 'Codex Tutorials',
    description: 'Tutorials and experiments using Codex CLI, IDE, and Cloud from OpenAI.',
    episodes: 4,
  },
]

const featuredVideos = [
  {
    title: 'Context Engineering with Claude Code',
    description: 'Automate better git commits using Claude Code, Cursor, and slash commands.',
    tags: ['Context Engineering', 'Git'],
  },
  {
    title: '8 Claude Code Hacks You Need to Know',
    description: 'Essential productivity hacks and workflow tips for Claude Code power users.',
    tags: ['Productivity', 'Workflows'],
  },
  {
    title: 'Building Multi-Agent Systems with ADK',
    description: 'Walk through ADK + MCP + A2A protocol for modular agent systems.',
    tags: ['ADK', 'Multi-Agent'],
  },
  {
    title: 'Claude Code Subagents in Action',
    description: '5 specialized AI agents collaborating to build a full-stack application.',
    tags: ['Subagents', 'Full-Stack'],
  },
  {
    title: 'Automating Videos with Remotion',
    description: 'Use Claude Code and Remotion to automate video creation workflows.',
    tags: ['Remotion', 'Automation'],
  },
  {
    title: 'Browser Automation with Stagehand',
    description: 'Integrate Claude Code with Stagehand and Browserbase for browser automation.',
    tags: ['Stagehand', 'Testing'],
  },
]

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-6 block">Learn</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Tutorials</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Watch on YouTube, then dive into focused playlists and hands-on guides.
          </p>
        </div>

        {/* Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          {playlists.map((playlist, i) => (
            <div
              key={playlist.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              className="glass-card p-8 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5">
                <Play size={18} className="text-gray-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">{playlist.title}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{playlist.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock size={11} />
                <span>{playlist.episodes} episodes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Videos */}
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-[0.15em] mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out">Featured Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {featuredVideos.map((video, i) => (
            <div
              key={video.title}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              data-aos-duration="1000"
              data-aos-easing="ease-out"
              className="group p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Play size={12} className="text-gray-500" />
                </div>
                <h4 className="font-medium text-sm text-gray-300 leading-tight tracking-tight">{video.title}</h4>
              </div>
              <p className="text-xs text-gray-600 mb-4 leading-relaxed">{video.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-white/[0.03] text-gray-500 border border-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
