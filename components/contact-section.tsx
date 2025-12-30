"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="mb-12 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Get in Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="mailto:arusharmazxx000@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  arusharmazxx000@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+91 7452029206</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Chandigarh, India</span>
              </div>
            </div>



            <div className="mt-8 rounded-lg border border-border bg-muted/50 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for Opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to research internships, full-time positions, and exciting collaborations in AI/ML.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h3 className="mb-6 text-lg font-semibold text-foreground">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-muted/50"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-muted/50"
              />
              <Input
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-muted/50"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-muted/50 resize-none"
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
