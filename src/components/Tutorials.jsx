import { Play, Clock, ExternalLink } from 'lucide-react'

const playlists = [
  {
    title: 'Claude Code Mastery Series',
    description: 'Master Claude Code with comprehensive tutorials, advanced techniques, and real-world examples.',
    episodes: 10,
    color: 'aiblue',
  },
  {
    title: 'ADK Made Simple',
    description: 'A practical beginner-friendly series about creating AI agents using Agent Development Kit.',
    episodes: 5,
    color: 'aipurple',
  },
  {
    title: 'Codex Tutorials',
    description: 'Tutorials and experiments using Codex CLI, IDE, and Cloud from OpenAI.',
    episodes: 4,
    color: 'aiorange',
  },
]

const featuredVideos = [
  {
    title: 'Context Engineering with Claude Code',
    description: 'Automate better git commits using Claude Code, Cursor, and slash commands.',
    tags: ['Context Engineering', 'Git', 'Automation'],
  },
  {
    title: '8 Claude Code Hacks You Need to Know',
    description: 'Essential productivity hacks and workflow tips for Claude Code power users.',
    tags: ['Productivity', 'Workflows', 'Best Practices'],
  },
  {
    title: 'Building Multi-Agent Systems with ADK',
    description: 'Walk through Google\'s ADK + MCP + A2A protocol for modular agent systems.',
    tags: ['ADK', 'Multi-Agent', 'MCP'],
  },
  {
    title: 'Claude Code Subagents in Action',
    description: '5 specialized AI agents collaborating to build a full-stack application from a PRD.',
    tags: ['Subagents', 'AI Agents', 'Full-Stack'],
  },
  {
    title: 'Automating Videos with Remotion',
    description: 'Use Claude Code and Remotion to automate video creation workflows.',
    tags: ['Remotion', 'Video', 'Automation'],
  },
  {
    title: 'Browser Automation with Stagehand',
    description: 'Integrate Claude Code with Stagehand and Browserbase for browser automation.',
    tags: ['Stagehand', 'Browserbase', 'Testing'],
  },
]

export default function Tutorials() {
  return (
    <section id="tutorials" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tutorials</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Watch on YouTube, then dive into focused playlists and hands-on guides.
          </p>
        </div>

        {/* Playlists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {playlists.map((playlist, i) => (
            <div
              key={playlist.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`p-6 rounded-xl border border-${playlist.color}/20 bg-${playlist.color}/5 hover:border-${playlist.color}/40 transition-all hover:-translate-y-1 cursor-pointer`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-${playlist.color}/10`}>
                <Play size={20} className={`text-${playlist.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{playlist.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{playlist.description}</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                <span>{playlist.episodes} episodes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Videos */}
        <h3 className="text-xl font-semibold mb-6" data-aos="fade-up">Featured Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video, i) => (
            <div
              key={video.title}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Play size={14} className="text-red-500" />
                </div>
                <h4 className="font-medium text-sm leading-tight">{video.title}</h4>
              </div>
              <p className="text-xs text-gray-500 mb-3">{video.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 text-gray-400 border border-white/5"
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
