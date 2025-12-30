import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Multimodal RAG for Video Understanding",
    description:
      "Developed a Multimodal Retrieval-Augmented Generation system that ingests video files, extracts key frames and audio, and encodes them into a shared semantic space.",
    features: [
      "CLIP-based vision models for visual embeddings",
      "Whisper ASR for transcribing audio",
      "Unified multimodal representation in vector database",
    ],
    technologies: ["Python", "CLIP", "Whisper ASR", "OpenAI GPT-Vision", "Deep Learning", "Vector Databases"],
    github: "#",
  },
  {
    title: "Multi-Agent Researcher System",
    description:
      "Developed an autonomous multi-agent system that takes a user research query and generates a structured, citation-backed research summary.",
    features: [
      "DuckDuckGo Search Agent for web articles",
      "ArXiv Agent for academic papers",
      "Writer Agent for synthesis and compilation",
    ],
    technologies: ["Python", "LangGraph", "LangChain", "OpenAI", "DuckDuckGo API", "ArXiv API", "Agentic AI"],
    github: "#",
  },
  {
    title: "Bitcoin-ASR-Bench",
    description: "Benchmarked models from Open-ASR leaderboard for transcribing talks from bitcoin conferences.",
    features: [
      "Automatic channel scraping for talks",
      "Pre-processing pipeline for wav files",
      "Model evaluation and comparison",
    ],
    technologies: ["Python", "Huggingface", "Moshi", "Nvidia-Nemo", "Ffmpeg"],
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <Link href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Key Features:</p>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
