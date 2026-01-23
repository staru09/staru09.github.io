import Link from "next/link"

const blogPosts = [
  {
    date: "Dec 31",
    title: "Making Your First Open Source Contribution: A Step-by-Step Guide",
    category: "Open Source",
    link: "https://medium.com/@arusharmazxx000/making-your-first-open-source-contribution-a-step-by-step-guide-5d8976280bc4",
  },
  {
    date: "Jan 07",
    title: "Towards Personalized Reasoning: Building Agents That Remember",
    category: "Memory Systems",
    link: "https://medium.com/@arusharmazxx000/towards-personalized-reasoning-building-agents-that-remember-fa02edbeeadb",

  },
  {
    date: "Jan 23",
    title: "How to make your First Pull Request to Open Source Codebase",
    category: "Open Source",
    link: "https://medium.com/@arusharmazxx000/how-to-make-your-first-pull-request-to-open-source-codebase-23d597205d06"
  }
]

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-2 text-3xl font-serif text-foreground">Interaccionismo</h2>
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
