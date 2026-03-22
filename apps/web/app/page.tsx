import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react"
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/motion"

const highlights = [
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "shadcn/ui",
]

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="flex min-h-[calc(100svh-57px)] flex-col justify-center py-20">
        <FadeIn>
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <MapPin className="size-3" />
            Chyasal, Lalitpur
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Asmita K.C.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-3 flex items-center gap-2 text-xl text-muted-foreground md:text-2xl">
            <Sparkles className="size-5 text-foreground/40" />
            Frontend Developer
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            I craft clean, performant, and user-friendly web interfaces. Currently
            building digital solutions at{" "}
            <span className="font-medium text-foreground">
              Kathmandu Metropolitan City
            </span>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <StaggerChildren className="mt-6 flex flex-wrap gap-2">
            {highlights.map((skill) => (
              <StaggerItem key={skill}>
                <Badge variant="secondary" className="px-3 py-1 text-xs">
                  {skill}
                </Badge>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 flex items-center gap-3">
            <Button size="lg" asChild>
              <a href="/projects">
                View my work
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/contact">Get in touch</a>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-6 flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href="https://github.com/TheAsmitaKC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <a
                href="https://www.linkedin.com/in/asmita-kc-74066b284/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <a href="mailto:theasmitakc@gmail.com" aria-label="Email">
                <Mail />
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>
    </div>
  )
}
