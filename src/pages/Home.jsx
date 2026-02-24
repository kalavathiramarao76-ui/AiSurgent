import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ThreeWays from '../components/ThreeWays'
import BuilderPacks from '../components/BuilderPacks'
import Tutorials from '../components/Tutorials'
import Stats from '../components/Stats'
import InsidersClub from '../components/InsidersClub'
import Contact from '../components/Contact'

export default function Home() {
  useSEO({
    title: 'AI Development Tutorials, Claude & Agentic Workflow Guides',
    description:
      'Level up your AI development with Saikiran Bali (balisaikiran). Learn Claude, Claude Code, ADK, MCP, agentic workflows, multi-agent systems, and real-world AI integrations on AISurgentDev.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <ThreeWays />
      <BuilderPacks />
      <Tutorials />
      <Stats />
      <InsidersClub />
      <Contact />
    </>
  )
}
