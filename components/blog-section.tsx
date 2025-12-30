import Link from "next/link"

const blogPosts = [
  {
    date: "Dec 15",
    title: "Building Multimodal RAG Systems: Lessons from Video Understanding",
    category: "AI Engineering",
    link: "https://medium.com/@yourusername/building-multimodal-rag-systems",
  },
  {
    date: "Nov 28",
    title: "Contributing to Open Source: My Journey with DocETL",
    category: "Open Source",
    link: "https://medium.com/@yourusername/contributing-to-open-source",
  },
  {
    date: "Nov 10",
    title: "Understanding LangGraph: Building Multi-Agent Systems",
    category: "AI Engineering",
    link: "https://medium.com/@yourusername/understanding-langgraph",
  },
  {
    date: "Oct 22",
    title: "RAG vs Fine-tuning: When to Use What",
    category: "Machine Learning",
    link: "https://medium.com/@yourusername/rag-vs-fine-tuning",
  },
  {
    date: "Oct 5",
    title: "Getting Started with WasmEdge for AI Applications",
    category: "Infrastructure",
    link: "https://medium.com/@yourusername/getting-started-with-wasmedge",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-2 text-3xl font-serif text-foreground">Connectionism</h2>
        <p className="mb-12 text-muted-foreground italic">Shared thoughts on AI, open-source, and building systems</p>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 border-b border-border pb-6 last:border-0 last:pb-0"
            >
              <span className="w-16 flex-shrink-0 text-sm text-muted-foreground">{post.date}</span>
              <div className="flex-1">
                <h3 className="font-medium text-amber-700 group-hover:underline">{post.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{post.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
