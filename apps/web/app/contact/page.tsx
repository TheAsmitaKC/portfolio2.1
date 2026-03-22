"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Label } from "@workspace/ui/components/label"
import {
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"
import { motion, AnimatePresence } from "framer-motion"

const socials = [
  {
    icon: Mail,
    label: "theasmitakc@gmail.com",
    href: "mailto:theasmitakc@gmail.com",
  },
  {
    icon: Github,
    label: "TheAsmitaKC",
    href: "https://github.com/TheAsmitaKC",
  },
  {
    icon: Linkedin,
    label: "Asmita K.C.",
    href: "https://www.linkedin.com/in/asmita-kc-74066b284/",
  },
]

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  )

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("https://formsubmit.co/ajax/theasmitakc@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })

      if (res.ok) {
        setStatus("sent")
        form.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? I&apos;d love to hear
          from you. Fill out the form or reach out directly.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_280px]">
        {/* Form */}
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Honeypot for spam */}
            <input type="text" name="_honey" className="hidden" />
            {/* Disable captcha page */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio!"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="What's this about?"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={6}
                required
              />
            </div>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400"
                >
                  <CheckCircle2 className="size-4" />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  Something went wrong. Please try emailing me directly.
                </motion.div>
              ) : null}
            </AnimatePresence>

            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <Loader2 data-icon="inline-start" className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send data-icon="inline-start" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </FadeIn>

        {/* Sidebar */}
        <FadeIn delay={0.2}>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Reach out directly
              </h2>
            </div>
            <StaggerChildren className="flex flex-col gap-3">
              {socials.map((s) => (
                <StaggerItem key={s.href}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      s.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-muted"
                  >
                    <div className="flex items-center gap-3">
                      <s.icon className="size-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
