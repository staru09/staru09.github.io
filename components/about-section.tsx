import { GraduationCap, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">About</h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education Card */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-foreground">B.E. Information Technology</h4>
                <p className="text-sm text-muted-foreground">University Institute of Engineering and Technology, PU</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">📍 Chandigarh, India</span>
                  <span className="flex items-center gap-1">📅 2022-2026</span>
                </div>

              </div>
              <div className="h-px bg-border" />
              <div>
                <h4 className="font-medium text-foreground">Mathematics and Computer Science</h4>
                <p className="text-sm text-muted-foreground">Little Scholars, Kashipur (CBSE)</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span>📅 2019-2021</span>
                </div>
                <span className="mt-2 inline-block rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                  95%
                </span>
              </div>
            </div>
          </div>

          {/* Current Focus Card */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <Target className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Current Focus</h3>
            </div>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Interested in long horizon reasoning and self-evolving agents that learn and adapt over time.
            </p>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Exploring mechanistic interpretability and AI for science to understand how intelligent systems work
              and apply them to real-world research problems.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Long Horizon Reasoning", "Self Evolving Agents", "Mechanistic Interpretability", "AI for Science"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
