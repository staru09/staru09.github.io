import { Briefcase } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    title: "OSS contributor",
    company: "Google Summer of Code - Mifos Initiative",
    location: "Seattle, WA",
    period: "Jun 2025 – Sep 2025",
    companyLink: "https://mifos.org/",
    highlights: [
      "Developed a multi-agent bot letting users know the status of Jira tickets, questions related to Slack discussions.",
      "Developed a full-stack web application using FastAPI, NextJs and Firestore as database and Auth client.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Summer of Bitcoin - Bitcoin-dev-project",
    location: "Manhattan, NY",
    period: "May 2025 – Aug 2025",
    companyLink: "https://github.com/bitcointranscripts/tstbtc",
    highlights: [
      "Designed and prototyped AI-assisted coding tools for Bitcoin using small language models and domain-specific Retrieval-Augmented Generation (RAG).",
      "Developed data pipelines to ingest knowledge from Bitcoin developer calls, YouTube talks, IRC logs, mailing lists, and forums.",
    ],
  },
  {
    title: "Open Source Collaborator",
    company: "EPIC Lab - University of California Berkeley",
    location: "Berkeley, CA",
    period: "Oct 2024 – Jan 2025",
    companyLink: "https://github.com/ucbepic/docetl",
    highlights: [
      "Contributed User Defined Functions, LLM based data parsing and OCR modules to enhance the usability capability of DocETL.",
      "Added structured generation support for Open-Source model based backend using Outlines.",
    ],
  },
  {
    title: "LFX Mentee",
    company: "CNCF WasmEdge",
    location: "Austin, TX",
    period: "Sep 2024 – Dec 2024",
    companyLink: "https://wasmedge.org/",
    highlights: [
      "Developed a RAG based chatbot for code assistance using opensource LLMs with Wasmedge runtime.",
      "Created a pipeline to ingest data from Github repository, augmented it using QnA pairs, summary and then embed this into a Qdrant vector database.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <Link
                    href={exp.companyLink}
                    target="_blank"
                    className="text-sm text-amber-700 font-medium hover:underline inline-block"
                  >
                    {exp.company}
                  </Link>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
