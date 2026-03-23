import { useSEO } from '../hooks/useSEO'
import Hero from '../components/Hero'
import ThreeWays from '../components/ThreeWays'
import BuilderPacks from '../components/BuilderPacks'
import Tutorials from '../components/Tutorials'
import Stats from '../components/Stats'
import InsidersClub from '../components/InsidersClub'
import ProductsHighlight from '../components/ProductsHighlight'
import AIProductsSection from '../components/AIProductsSection'
import Contact from '../components/Contact'

const HOME_SCHEMAS = [
  {
    '@type': 'WebPage',
    '@id': 'https://aisurgent.dev/#webpage',
    url: 'https://aisurgent.dev/',
    name: 'AISurgent.Dev | AI Development Tutorials, Claude & Agentic Workflow Guides',
    description:
      'Level up your AI development with Saikiran Bali. Learn Claude, Claude Code, ADK, MCP, agentic workflows, and multi-agent systems.',
    isPartOf: { '@id': 'https://aisurgent.dev/#website' },
    about: { '@id': 'https://aisurgent.dev/#person' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aisurgent.dev/' },
      ],
    },
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AISurgent.Dev?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgent.Dev is an AI development education platform by Saikiran Bali (balisaikiran) offering weekly tutorials on Claude API, Claude Code, Agent Development Kit (ADK), Model Context Protocol (MCP), agentic workflows, and multi-agent systems for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What AI topics does AISurgentDev cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev covers Claude AI, Claude Code, Anthropic API, Google ADK, MCP (Model Context Protocol), A2A Protocol, agentic workflows, multi-agent systems, LLM integration, prompt engineering, vibe coding, and practical AI development tutorials for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is Saikiran Bali (balisaikiran)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Saikiran Bali, known as balisaikiran, is an AI developer and YouTube content creator who runs AISurgentDev. He specializes in Claude AI, agentic workflows, ADK, MCP, and building production-ready AI integrations for developers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is AISurgentDev free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, AISurgentDev tutorials on YouTube are free. Saikiran Bali also offers paid resource packs and $199 AI consulting sessions for deeper hands-on learning and guidance.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I learn Claude API and agentic workflows?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AISurgentDev provides step-by-step video tutorials on the Claude API, Claude Code, and building agentic workflows. Tutorials cover real-world integrations, multi-agent systems with ADK and MCP, and production-ready AI development patterns.',
        },
      },
    ],
  },
]

export default function Home() {
  useSEO({
    title: 'AI Development Tutorials, Claude & Agentic Workflow Guides',
    description:
      'Level up your AI development with Saikiran Bali (balisaikiran). Learn Claude, Claude Code, ADK, MCP, agentic workflows, multi-agent systems, and real-world AI integrations on AISurgentDev.',
    path: '/',
    schemas: HOME_SCHEMAS,
  })

  return (
    <>
      <Hero />
      <ThreeWays />
      <BuilderPacks />
      <Tutorials />
      <Stats />
      <ProductsHighlight />
      <AIProductsSection />
      <InsidersClub />
      <Contact />
    </>
  )
}
