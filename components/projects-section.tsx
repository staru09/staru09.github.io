import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Open-Paxel",
    description:
      "AI-native open-source analyser for your coding patterns.",
    features: [
      "Built a lightweight toolkit to analyse coding sessions from Claude Code using LLMs and SQLite",
      "Keeps private data on the local machine and creates a profile suggesting strengths, areas of growth, and overall narrative",
    ],
    technologies: ["Code Analysis", "SQLite", "LLMs"],
    github: "https://github.com/staru09/open-paxel",
  },
  {
    title: "genesis-kb",
    description:
      "Knowledge base and Bitcoin education platform for Bitcoin development.",
    features: [
      "Transcription engine for processing Bitcoin-related audio and video content",
      "Web frontend for browsing and searching Bitcoin transcripts",
      "LLM-based explainer for BIPs and BOLTs",
    ],
    technologies: ["Bitcoin", "Python", "TypeScript", "LLMs"],
    github: "https://github.com/orgs/genesis-kb/repositories",
  },
  {
    title: "Long Horizon Reasoning Agents",
    description:
      "Building a personalised agent that can reason over long term to remember and recall information from past interactions",
    features: [
      "Implementation of the EverMemOS paper from first principles",
      "Keyword as well as semantic based retrieval system combined with reranking mechanism",
    ],
    technologies: ["Long Horizon Reasoning", "Memory Systems"],
    github: "https://github.com/staru09/engram_memory_system",
  },
  {
    title: "Multimodal Emotion Recognition",
    description:
      "Implemented a multimodal emotion recognition system using late and gated fusion techniques on audio and video embeddings to classify emotional states.",
    features: [
      "Whisper-large-v3 for audio feature extraction",
      "V-JEPA for video visual embedding extraction",
      "Gated Fusion Network for combining modalities",
    ],
    technologies: ["multimodal fusion", "ffmpeg"],
    github: "https://github.com/staru09/Multimodal_emotion_",
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
                  {project.technologies.filter(Boolean).map((tech) => (
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
