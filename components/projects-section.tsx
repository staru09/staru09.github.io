import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Multimodal Emotion Recognition",
    description:
      "Implemented a multimodal emotion recognition system using late and gated fusion techniques on audio and video embeddings to classify emotional states.",
    features: [
      "Whisper-large-v3 for audio feature extraction",
      "V-JEPA for video visual embedding extraction",
      "Gated Fusion Network for combining modalities",
    ],
    technologies: ["multimodal fusion", "world models", "ffmpeg"],
    github: "https://github.com/staru09/Multimodal_emotion_",
  },
  {
    title: "Multi-Agent Research Tool",
    description:
      "Developed an autonomous multi-agent system that facilitates interaction and collaboration of specialized agents to perform comprehensive research tasks.",
    features: [
      "DuckDuckGo Search Agent for web articles",
      "ArXiv Agent for academic papers",
      "Supervisor Agent for task coordination",
    ],
    technologies: ["LangGraph", "OpenAI"],
    github: "https://github.com/staru09/multi_agent_research_tool",
  },
  {
    title: "Bitcoin-ASR-Bench",
    description: "Benchmarked models from Open-ASR leaderboard for transcribing talks from bitcoin conferences with GPU acceleration support.",
    features: [
      "Multi-model support and evaluation",
      "GPU acceleration for efficient processing",
      "Chunked processing for long audio files",
    ],
    technologies: ["Huggingface", "Nvidia-Nemo", "FFmpeg"],
    github: "https://github.com/staru09/Bitcoin-Asr-Bench",
  },
  {
    title: "LLM-Perf-Bench",
    description: "This is the project from the sprint that I did over the weekend and benchmarked performance of LLM inference providers.",
    features: [
      "Uses snippet from sharegpt dataset for benchmarking",
      "Compares latency and throughput across providers",
      "Tried simulating real-world usage patterns using different concurrency levels",
    ],
    technologies: ["Vllms", "SG-lang", "ML-Infrastructure"],
    github: "https://github.com/staru09/llm_infra_bench",
  }
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
