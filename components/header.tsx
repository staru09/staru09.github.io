"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-foreground hover:text-foreground/80 transition-colors"
        >
          Aru Sharma
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b-2 border-transparent hover:border-foreground"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </button>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/staru09"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharma-aru/"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="https://x.com/Aru__09"
            target="_blank"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </header>
  )
}
