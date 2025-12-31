"use client"

import type React from "react"

import { useForm, ValidationError } from "@formspree/react"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID")

  if (state.succeeded) {
    return (
      <section id="contact" className="border-t border-border bg-muted/30">
        <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
          <div className="mx-auto max-w-md rounded-lg border border-border bg-card p-8 text-center shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Message Sent!</h2>
            <p className="text-muted-foreground">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <Button
              className="mt-6"
              variant="outline"
              onClick={() => window.location.reload()}
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
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
              <div>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="bg-muted/50"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              <div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-muted/50"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  className="bg-muted/50"
                  required
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  className="bg-muted/50 resize-none"
                  required
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <Button type="submit" className="w-full" disabled={state.submitting}>
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
